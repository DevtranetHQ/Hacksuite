import { RequestWithUser, withAuth } from "../../../server/middlewares/auth.middleware";
import { CustomError } from "./../../../server/utils/customError";
import { withGlobalMiddleware } from "./../../../server/middlewares/global.middleware";
import { ProjectId } from "../../../server/modules/projects/project.model";
import { CommentId } from "../../../server/modules/projects/interaction/comment.model";
import { interactionService } from "./../../../server/modules/projects/interaction/interaction.service";
import { CustomResponse } from "./../../../server/utils/customResponse";

export interface CommentBody {
  targetId: ProjectId | CommentId;
  projectId: ProjectId;
  content: string;
}

async function commentHandler(req: RequestWithUser) {
  if (req.method === "POST") {
    const { targetId, projectId, content } = req.body as CommentBody;
    if (!targetId || !projectId) {
      throw new CustomError("Invalid request", 400);
    }

    if (targetId === projectId) {
      const comment = await interactionService.commentOnProject(
        projectId,
        req.$user.uniqueId,
        content
      );
      return new CustomResponse(201, `Comment added`, comment);
    }

    const comment = await interactionService.commentOnComment(
      projectId,
      targetId as CommentId,
      req.$user.uniqueId,
      content
    );
    return new CustomResponse(201, `Comment added`, comment);
  }

  throw new CustomError("Method not allowed", 405);
}

export default withGlobalMiddleware(withAuth(commentHandler));
