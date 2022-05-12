import { NextApiResponse } from "next";
import { RequestWithUser, withAuth } from "../../../server/middlewares/auth.middleware";
import { ProjectCtrl } from "./../../../server/modules/projects/project.controller";
import { CustomError } from "./../../../server/utils/customError";
import { withGlobalMiddleware } from "./../../../server/middlewares/global.middleware";

function draftProjectHandler(req: RequestWithUser, res: NextApiResponse) {
  if (req.method === "POST") {
    return ProjectCtrl.draftProject(req);
  }

  throw new CustomError("Method not allowed", 405);
}

export default withGlobalMiddleware(withAuth(draftProjectHandler));
