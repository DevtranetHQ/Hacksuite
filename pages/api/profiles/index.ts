import { RequestWithUser, withAuth } from "../../../server/middlewares/auth.middleware";
import { withGlobalMiddleware } from "../../../server/middlewares/global.middleware";
import { CustomResponse } from "../../../server/utils/customResponse";
import { profileService } from "../../../server/modules/social/profile.service";

async function handler(req: RequestWithUser) {
  if (req.method === "PUT") {
    const result = await profileService.update(req.$user.uniqueId, req.body);
    return new CustomResponse(200, "profile updated", result);
  }
}

export default withGlobalMiddleware(withAuth(handler, true));
