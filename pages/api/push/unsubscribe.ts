import { CustomError } from "../../../server/utils/customError";
import { CustomResponse } from "../../../server/utils/customResponse";
import { NextApiResponse } from "next";
import { RequestWithUser, withAuth } from "../../../server/middlewares/auth.middleware";
import { withGlobalMiddleware } from "../../../server/middlewares/global.middleware";
import { pushService } from "../../../server/modules/notification/push/push.service";

async function unsubscribeHandler(req: RequestWithUser, res: NextApiResponse) {
  if (req.method === "POST") {
    try {
      const res = await pushService.unsubscribeUser(
        req.$user.uniqueId,
        req.body.subscription.endpoint
      );
      return new CustomResponse(200, `Unsubscribed to ${res.subscription.endpoint}`, res);
    } catch (error) {
      throw new CustomError(error.message, 500);
    }
  }
}

export default withGlobalMiddleware(withAuth(unsubscribeHandler));
