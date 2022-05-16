import { CustomError } from "./../../../server/utils/customError";
import { CustomResponse } from "./../../../server/utils/customResponse";
import { NextApiResponse } from "next";
import { RequestWithUser, withAuth } from "../../../server/middlewares/auth.middleware";
import { withGlobalMiddleware } from "../../../server/middlewares/global.middleware";
import { pushService } from "../../../server/modules/notification/push/push.service";

async function subscribeHandler(req: RequestWithUser, res: NextApiResponse) {
  if (req.$user) {
    if (req.method === "POST") {
      try {
        const res = await pushService.subscribeUser(req.$user.uniqueId, req.body.subscription);
        return new CustomResponse(201, `Subscribed to ${res.subscription.endpoint}`, res);
      } catch (error) {
        throw new CustomError(error.message, 500);
      }
    }

    throw new CustomError("Method not allowed", 405);
  }
  throw new CustomError("Unauthorized", 401);
}

export default withGlobalMiddleware(withAuth(subscribeHandler));
