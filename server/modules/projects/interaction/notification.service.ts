import { Profile } from "./../../social/profile.model";
import { UserId } from "../../auth/user.model";
import { NotificationTypeId } from "../../notification/notification-type.model";
import { Project, ProjectId } from "../project.model";
import { notificationService } from "./../../notification/notifications.service";
import { config } from "../../../config";
import { CommentId, Comment } from "./comment.model";
import { dbConnect } from "../../../database";

const {
  url: { CLIENT_URL }
} = config;

const getProjectUrl = (uniqueId: ProjectId) => `${CLIENT_URL}/projects/${uniqueId}`;

class InteractionNotificationService {
  async notifyForLikeProject(projectId: ProjectId, userId: UserId) {
    await dbConnect();
    const userWhoLiked = await Profile.findOne({ userId });
    if (!userWhoLiked) {
      return;
    }

    const project = await Project.findOne({ uniqueId: projectId });
    if (!project) {
      return;
    }

    const projectTeam = [project.creator, ...project.collaborators];
    const usersToNotify = projectTeam.filter(user => user !== userId);

    const jobs = usersToNotify.map(userId => {
      return notificationService.createNotification({
        for: userId,
        type: "Project" as NotificationTypeId,
        title: `${userWhoLiked.fullName} liked your project`,
        message: `${userWhoLiked.fullName} liked your project "${project.name}"`,
        link: getProjectUrl(project.uniqueId),
        by: userWhoLiked.fullName
      });
    });

    return Promise.all(jobs);
  }

  async notifyForCommentProject(projectId: ProjectId, userId: UserId, content: string) {
    await dbConnect();
    const userWhoCommented = await Profile.findOne({ userId });
    if (!userWhoCommented) {
      return;
    }

    const project = await Project.findOne({ uniqueId: projectId });
    if (!project) {
      return;
    }

    const projectTeam = [project.creator, ...project.collaborators];
    const usersToNotify = projectTeam.filter(user => user !== userId);

    const jobs = usersToNotify.map(userId => {
      return notificationService.createNotification({
        for: userId,
        type: "Project" as NotificationTypeId,
        title: `${userWhoCommented.fullName} commented on your project`,
        message: `${userWhoCommented.fullName} commented on your project "${
          project.name
        }": "${content.slice(0, 50)}..."`,
        link: getProjectUrl(project.uniqueId),
        by: userWhoCommented.fullName
      });
    });

    return Promise.all(jobs);
  }

  async notifyForLikeComment(commentId: CommentId, userId: UserId) {
    await dbConnect();
    const userWhoLiked = await Profile.findOne({ userId });
    if (!userWhoLiked) {
      return;
    }

    const comment = await Comment.findById(commentId);
    if (!comment) {
      return;
    }

    const project = await Project.findOne({ uniqueId: comment.projectId });
    if (!project) {
      return;
    }

    const projectTeam = [project.creator, ...project.collaborators];
    const usersToNotify = projectTeam.filter(user => user !== userId);

    const notifyProjectTeam = usersToNotify.map(userId => {
      return notificationService.createNotification({
        for: userId,
        type: "Project" as NotificationTypeId,
        title: `${userWhoLiked.fullName} liked a comment on your project`,
        message: `${userWhoLiked.fullName} liked a comment on your project "${comment.content.slice(
          0,
          50
        )}..."`,
        link: getProjectUrl(comment.projectId),
        by: userWhoLiked.fullName
      });
    });

    const notifyCommentAuthor = notificationService.createNotification({
      for: comment.userId,
      type: "Project" as NotificationTypeId,
      title: `${userWhoLiked.fullName} liked your comment`,
      message: `${userWhoLiked.fullName} liked your comment "${comment.content.slice(0, 50)}..."`,
      link: getProjectUrl(comment.projectId),
      by: userWhoLiked.fullName
    });

    return Promise.all([...notifyProjectTeam, notifyCommentAuthor]);
  }

  async notifyForReplyComment(commentId: CommentId, userId: UserId, content: string) {
    await dbConnect();
    const userWhoReplied = await Profile.findOne({ userId });
    if (!userWhoReplied) {
      return;
    }

    const comment = await Comment.findById(commentId);
    if (!comment) {
      return;
    }

    const project = await Project.findOne({ uniqueId: comment.projectId });
    if (!project) {
      return;
    }

    const projectTeam = [project.creator, ...project.collaborators];
    const usersToNotify = projectTeam.filter(user => user !== userId);

    const notifyProjectTeam = usersToNotify.map(userId => {
      return notificationService.createNotification({
        for: userId,
        type: "Project" as NotificationTypeId,
        title: `${userWhoReplied.fullName} replied to a comment on your project`,
        message: `${userWhoReplied.fullName} replied to a comment on your project: "${content.slice(
          0,
          50
        )}..."`,
        link: getProjectUrl(comment.projectId),
        by: userWhoReplied.fullName
      });
    });

    const notifyCommentAuthor = notificationService.createNotification({
      for: comment.userId,
      type: "Project" as NotificationTypeId,
      title: `${userWhoReplied.fullName} replied to your comment`,
      message: `${userWhoReplied.fullName} replied to your comment: "${content.slice(0, 50)}..."`,
      link: getProjectUrl(comment.projectId),
      by: userWhoReplied.fullName
    });

    return Promise.all([...notifyProjectTeam, notifyCommentAuthor]);
  }
}

export const interactionNotificationService = new InteractionNotificationService();
