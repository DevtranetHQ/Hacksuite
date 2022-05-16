import { RequestWithUser, withAuth } from "../../../server/middlewares/auth.middleware";
import { CustomError } from "./../../../server/utils/customError";
import { withGlobalMiddleware } from "./../../../server/middlewares/global.middleware";
import { ProjectId } from "../../../server/modules/projects/project.model";
import { CommentId } from "../../../server/modules/projects/interaction/comment.model";
import { interactionService } from "./../../../server/modules/projects/interaction/interaction.service";
import { CustomResponse } from "./../../../server/utils/customResponse";

export interface LikeBody {
  targetId: ProjectId | CommentId;
  projectId: ProjectId;
}

async function toggleLikeHandler(req: RequestWithUser) {
  if (req.method === "PUT") {
    const { targetId, projectId } = req.body as LikeBody;
    if (!targetId || !projectId) {
      throw new CustomError("Invalid request", 400);
    }

    if (targetId === projectId) {
      const like = await interactionService.toggleLikeProject(projectId, req.$user.uniqueId);
      return new CustomResponse(200, `Like ${like ? "added" : "removed"}`, like);
    }

    const like = await interactionService.toggleLikeComment(
      targetId as CommentId,
      req.$user.uniqueId
    );
    return new CustomResponse(200, `Like ${like ? "added" : "removed"}`, like);
  }

  throw new CustomError("Method not allowed", 405);
}

export default withGlobalMiddleware(withAuth(toggleLikeHandler));
