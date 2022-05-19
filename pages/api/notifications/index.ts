import { RequestWithUser, withAuth } from "../../../server/middlewares/auth.middleware";
import { notificationService } from "./../../../server/modules/notification/notifications.service";
import { CustomResponse } from "./../../../server/utils/customResponse";
import { CustomError } from "./../../../server/utils/customError";
import { withGlobalMiddleware } from "./../../../server/middlewares/global.middleware";

export const NotificationsHandler = async (
  req: RequestWithUser<void, { unread?: string; markAsRead?: string }>
) => {
  if (req.method === "GET") {
    const { unread } = req.query;
    if (unread === "true") {
      const unreadNotifications = await notificationService.getUnreadNotificationsForUser(
        req.$user.uniqueId
      );

      return new CustomResponse(
        200,
        `Successfully fetched unread notifications`,
        unreadNotifications
      );
    } else {
      const notifications = await notificationService.getNotificationsForUser(req.$user.uniqueId);
      return new CustomResponse(200, `Successfully fetched notifications`, notifications);
    }
  }

  if (req.method === "PATCH") {
    const { markAsRead } = req.query;
    if (markAsRead === "true") {
      await notificationService.markAllNotificationsAsRead(req.$user.uniqueId);
      return new CustomResponse(200, "Notifications marked as read");
    }
  }

  throw new CustomError("Method not allowed", 405);
};

export default withGlobalMiddleware(withAuth(NotificationsHandler));
