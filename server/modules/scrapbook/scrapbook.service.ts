import { config } from "../../config";
import { CustomError } from "../../utils/customError";
import User, { UserId } from "../auth/user.model";
import { Profile } from "../social/profile.model";
import Post, { IPost, IPostWithUser } from "./post";

const {
  url: { CLIENT_URL }
} = config;

class ScrapbookService {
  async getRecentPosts(): Promise<IPostWithUser[]> {
    const posts = await Post.find().sort({ createdAt: -1 });

    const postsWithUser = await Promise.all(
      posts.map(async post => {
        const profile = await Profile.findOne({ userId: post.author });

        return {
          _id: post._id,
          content: post.content,
          images: post.images,
          createdAt: post.createdAt,
          author: { username: profile.discordUsername, image: profile.image }
        };
      })
    );

    return postsWithUser;
  }

  async getPostsByUser(userId: UserId): Promise<IPostWithUser[]> {
    const posts = await Post.find({ author: userId });

    const postsWithUser = await Promise.all(
      posts.map(async post => {
        const profile = await Profile.findOne({ userId: userId });

        return {
          _id: post._id,
          content: post.content,
          images: post.images,
          createdAt: post.createdAt,
          author: { username: profile.discordUsername, image: profile.image }
        };
      })
    );

    return postsWithUser;
  }

  async createPost(data: {
    discordId: string;
    content: string;
    images: string[];
    createdAt: Date;
  }): Promise<string> {
    const { discordId, ...postData } = data;

    const user = await User.findOne({ discordId });
    if (!user) throw new CustomError("User not found", 404);

    await Post.create({
      ...postData,
      author: user.uniqueId
    });

    const authorProfileUrl = `${CLIENT_URL}/${user.uniqueId}`;
    return authorProfileUrl;
  }
}

export const scrapbookService = new ScrapbookService();
