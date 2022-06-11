import { dbConnect } from "../../../database";
import { UserId } from "../../auth/user.model";
import { ProjectId } from "../project.model";
import { CommentId, Comment, IComment } from "./comment.model";
import { ILike, Like } from "./like.model";
import { interactionNotificationService } from "./notification.service";

export interface CommentWithInteractions {
  comment: IComment;
  likes: ILike[];
  replies: CommentWithInteractions[];
}

export interface AllProjectInteractions {
  likes: ILike[];
  comments: CommentWithInteractions[];
}

class InteractionService {
  async toggleLikeProject(projectId: ProjectId, userId: UserId) {
    await dbConnect();
    const alreadyLiked = await Like.findOne({ userId, targetId: projectId });
    if (alreadyLiked) {
      return alreadyLiked.remove();
    }

    const newLike = new Like({ userId, targetId: projectId }).save();

    await interactionNotificationService.notifyForLikeProject(projectId, userId);

    return newLike;
  }

  async toggleLikeComment(commentId: CommentId, userId: UserId) {
    await dbConnect();
    const alreadyLiked = await Like.findOne({ userId, targetId: commentId });
    if (alreadyLiked) {
      return alreadyLiked.remove();
    }

    const newLike = new Like({ userId, targetId: commentId }).save();

    await interactionNotificationService.notifyForLikeComment(commentId, userId);

    return newLike;
  }

  async commentOnProject(projectId: ProjectId, userId: UserId, content: string) {
    await dbConnect();
    const newComment = new Comment({ userId, targetId: projectId, projectId, content }).save();

    await interactionNotificationService.notifyForCommentProject(projectId, userId, content);

    return newComment;
  }

  async commentOnComment(
    projectId: ProjectId,
    commentId: CommentId,
    userId: UserId,
    content: string
  ) {
    await dbConnect();
    const newComment = new Comment({ userId, targetId: commentId, projectId, content }).save();

    await interactionNotificationService.notifyForReplyComment(commentId, userId, content);

    return newComment;
  }

  async getAllProjectInteractions(projectId: ProjectId) {
    await dbConnect();
    const likes = await Like.find({ targetId: projectId });
    const comments = await Comment.find({ targetId: projectId });

    const commentsWithInteractions: CommentWithInteractions[] = await Promise.all(
      comments.map(async comment => {
        const likes = await Like.find({ targetId: comment.id });
        const replies = await this.getCommentsRecursiveWithLikes(comment.id);

        return { comment, likes, replies };
      })
    );

    const interactions: AllProjectInteractions = {
      likes,
      comments: commentsWithInteractions
    };

    return interactions;
  }

  private async getCommentsRecursiveWithLikes(commentId: CommentId) {
    await dbConnect();
    const comment = await Comment.findById(commentId);
    if (!comment) {
      return [];
    }

    const comments = await Comment.find({ targetId: commentId });
    const replies: CommentWithInteractions[] = await Promise.all(
      comments.map(async comment => {
        const likes = await Like.find({ targetId: commentId });
        const replies = await this.getCommentsRecursiveWithLikes(comment.id);

        return { comment, likes, replies };
      })
    );

    return replies;
  }
}

export const interactionService = new InteractionService();
