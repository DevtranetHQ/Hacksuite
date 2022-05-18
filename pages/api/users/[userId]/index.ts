import { NextApiResponse } from "next";
import { RequestWithUser } from "../../../../server/middlewares/auth.middleware";
import { UserCtrl } from "../../../../server/controllers/user.controller";
import { withGlobalMiddleware } from "../../../../server/middlewares/global.middleware";
import userService from "../../../../server/modules/auth/user.service";
import { CustomResponse } from "../../../../server/utils/customResponse";

async function handler(req: RequestWithUser, res: NextApiResponse) {
  if (req.method === "GET") {
    return UserCtrl.getOne(req);
  }

  if (req.method === "PUT") {
    const result = await userService.update(req.query.userId, req.body);
    return new CustomResponse(200, "user updated", result);
  }

  if (req.method === "DELETE") {
    return UserCtrl.delete(req);
  }
}

export default withGlobalMiddleware(handler);
