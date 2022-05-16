import { RequestWithUser, withAuth } from "../../../server/middlewares/auth.middleware";
import { notificationService } from "./../../../server/modules/notification/notifications.service";
import { CustomResponse } from "./../../../server/utils/customResponse";
import { CustomError } from "./../../../server/utils/customError";
import { withGlobalMiddleware } from "./../../../server/middlewares/global.middleware";

export const DelNotificationHandler = async (req: RequestWithUser<void, { id: string }>) => {
  if (req.method === "DELETE") {
    await notificationService.removeNotification(req.query.id, req.$user.uniqueId);
    return new CustomResponse(200, "Notification deleted");
  }

  throw new CustomError("Method not allowed", 405);
};

export default withGlobalMiddleware(withAuth(DelNotificationHandler));
