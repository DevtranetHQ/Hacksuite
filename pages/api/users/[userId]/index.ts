import { NextApiResponse } from "next";
import { RequestWithUser } from "../../../../server/middlewares/auth.middleware";
import { UserCtrl } from "../../../../server/controllers/user.controller";
import { withGlobalMiddleware } from "../../../../server/middlewares/global.middleware";

async function handler(req: RequestWithUser, res: NextApiResponse) {
  if (req.method === "GET") {
    return UserCtrl.getOne(req);
  }

  if (req.method === "DELETE") {
    return UserCtrl.delete(req);
  }
}

export default withGlobalMiddleware(handler);
