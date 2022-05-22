import { RequestWithUser, withAuth } from "../../../../server/middlewares/auth.middleware";
import { withGlobalMiddleware } from "../../../../server/middlewares/global.middleware";
import { CustomResponse } from "../../../../server/utils/customResponse";
import { profileService } from "../../../../server/modules/social/profile.service";
import { CustomError } from "../../../../server/utils/customError";

async function handler(req: RequestWithUser) {
  if (req.method === "GET") {
    const result = await profileService.getCompletedProfile(req.$user.uniqueId);
    return new CustomResponse(200, "got profile", result);
  }

  throw new CustomError("Method not allowed", 405);
}

export default withGlobalMiddleware(withAuth(handler, true));
