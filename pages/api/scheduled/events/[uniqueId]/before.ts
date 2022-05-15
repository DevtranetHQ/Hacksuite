import { CustomError } from "./../../../../../server/utils/customError";
import { NextApiRequest } from "next";
import { registrationNotificationService } from "./../../../../../server/modules/registration/reg-notification.service";
import { withApiKey } from "../../../../../server/middlewares/api-key.middleware";
import { withGlobalMiddleware } from "../../../../../server/middlewares/global.middleware";
import { EventId } from "../../../../../server/modules/events/event.model";
import { CustomResponse } from "../../../../../server/utils/customResponse";

const handler = async (req: NextApiRequest) => {
  if (req.method === "POST") {
    const eventId = req.query.uniqueId as EventId;
    const notifications = await registrationNotificationService.notify15MinutesBeforeEvent(eventId);
    return new CustomResponse(200, "Notifications sent", notifications);
  }

  throw new CustomError("Method not allowed", 405);
};

export default withGlobalMiddleware(withApiKey(handler));
