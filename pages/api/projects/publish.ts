import { RequestWithUser, withAuth } from "../../../server/middlewares/auth.middleware";
import { ProjectCtrl } from "./../../../server/modules/projects/project.controller";
import { CustomError } from "./../../../server/utils/customError";
import { withGlobalMiddleware } from "./../../../server/middlewares/global.middleware";

function publishProjectHandler(req: RequestWithUser) {
  if (req.method === "PUT") {
    return ProjectCtrl.publishProject(req);
  }

  throw new CustomError("Method not allowed", 405);
}

export default withGlobalMiddleware(withAuth(publishProjectHandler));
