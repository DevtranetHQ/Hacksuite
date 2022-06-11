import { CustomError } from "../../utils/customError";
import { UserId } from "../auth/user.model";
import { IProfile, Profile } from "./profile.model";
import { NotificationTypeId } from "../../../server/modules/notification/notification-type.model";
import { notificationService } from "../../../server/modules/notification/notifications.service";
import { projectService } from "../../../server/modules/projects/project.service";
import { scrapbookService } from "../../../server/modules/scrapbook/scrapbook.service";
import { dbConnect } from "../../database";

interface IQueryProfile {
  limit?: number;
  skip?: number;
}
class ProfileService {
  async getCompletedProfile(userId: UserId): Promise<IProfile> {
    await dbConnect();
    var profile = await Profile.findOne({ userId, isCompleted: true });
    if (!profile) throw new CustomError("Profile does not exist", 404);

    profile = profile.toObject({ virtuals: true });

    profile.projects = await projectService.getProjectsByUser(userId);

    profile.scrapbook = await scrapbookService.getPostsByUser(userId);

    return JSON.parse(JSON.stringify(profile));
  }

  async getProfile(userId: UserId): Promise<IProfile> {
    await dbConnect();
    const profile = await Profile.findOne({ userId });
    if (!profile) throw new CustomError("Profile does not exist", 404);

    return JSON.parse(JSON.stringify(profile.toObject({ virtuals: true })));
  }

  async create(data: Partial<IProfile>): Promise<IProfile> {
    await dbConnect();
    return await new Profile(data).save();
  }

  async search(query: IQueryProfile, data: Partial<IProfile>) {
    await dbConnect();
    const profileMatch = await Profile.find({ data }).skip(query.skip).limit(query.limit);

    return profileMatch.map(f => JSON.parse(JSON.stringify(f.toObject({ virtuals: true }))));
  }

  async searchParams(query: IQueryProfile, availableFor: string, describe: string) {
    await dbConnect();
    const profileMatch = await Profile.find({
      availableFor: { $all: [availableFor] },
      describe: { $all: [describe] }
    })
      .skip(query.skip)
      .limit(query.limit);

    return profileMatch;
  }

  async update(userId: UserId, data: Partial<IProfile>): Promise<IProfile> {
    await dbConnect();
    const profile = await Profile.findOne({ userId });
    if (!profile) throw new CustomError("Profile does not exist", 404);

    await Profile.updateOne({ userId }, { $set: data });

    return JSON.parse(JSON.stringify(profile.toObject({ virtuals: true })));
  }

  async follow(userId: UserId, followingId: UserId): Promise<IProfile> {
    await dbConnect();
    const profile = await Profile.findOne({ userId, isCompleted: true });
    if (!profile) throw new CustomError("Profile does not exist", 404);

    const following = await Profile.findOne({ userId: followingId, isCompleted: true });
    if (!following) throw new CustomError("Profile does not exist", 404);

    if (following.followers.includes(userId)) throw new CustomError("Already following", 409);

    following.followers.push(userId);

    const updated = await following.save();

    const userWhoFollowed = await Profile.findOne({ userId });
    if (!userWhoFollowed) {
      return;
    }
    await notificationService.createNotification({
      for: followingId,
      type: "Follow" as NotificationTypeId,
      title: `${userWhoFollowed.fullName} started following you`,
      message: `${userWhoFollowed.fullName} started following you now`,
      link: "", //link to followed profile
      by: userWhoFollowed.fullName
    });

    return JSON.parse(JSON.stringify(updated.toObject({ virtuals: true })));
  }

  async unfollow(userId: UserId, followingId: UserId): Promise<IProfile> {
    await dbConnect();
    const profile = await Profile.findOne({ userId });
    if (!profile) throw new CustomError("Profile does not exist", 404);

    const following = await Profile.findOne({ userId: followingId });
    if (!following) throw new CustomError("Profile does not exist", 404);

    if (!following.followers.includes(userId)) throw new CustomError("Not following", 409);

    const index = following.followers.indexOf(userId);
    following.followers.splice(index, 1);

    const updated = await following.save();

    return JSON.parse(JSON.stringify(updated.toObject({ virtuals: true })));
  }

  async getFollowers(userId: UserId): Promise<IProfile[]> {
    await dbConnect();
    const profile = await Profile.findOne({ userId, isCompleted: true });
    if (!profile) throw new CustomError("Profile does not exist", 404);

    const followers = profile.followers.map(async followerId => {
      const follower = await Profile.findOne(
        { userId: followerId },
        `userId firstName lastName fullName image`
      );
      if (!follower) throw new CustomError("Profile does not exist", 404);

      return JSON.parse(JSON.stringify(follower.toObject({ virtuals: true }))) as IProfile;
    });

    return Promise.all(followers);
  }

  async getFollowing(userId: UserId): Promise<IProfile[]> {
    await dbConnect();
    const profile = await Profile.findOne({ userId, isCompleted: true });
    if (!profile) throw new CustomError("Profile does not exist", 404);

    const following = await Profile.find({
      followers: userId,
      isCompleted: true
    }).select(`userId firstName lastName fullName image`);

    return following.map(f => JSON.parse(JSON.stringify(f.toObject({ virtuals: true }))));
  }
}

export const profileService = new ProfileService();
