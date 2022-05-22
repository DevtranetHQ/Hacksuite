import { RequestWithUser, withAuth } from "../../../server/middlewares/auth.middleware";
import userService from "../../../server/modules/auth/user.service";
import { IProfile } from "../../../server/modules/social/profile.model";
import { withGlobalMiddleware } from "./../../../server/middlewares/global.middleware";
import { CustomError } from "./../../../server/utils/customError";
import { CustomResponse } from "./../../../server/utils/customResponse";

export type CompleteProfileBody = Partial<IProfile>;

async function completeProfileHandler(req: RequestWithUser) {
  if (req.method === "POST") {
    const newToken = await userService.completeProfile(
      req.$user.id,
      req.body as CompleteProfileBody
    );

    return new CustomResponse(200, `successfully completed profile`, { newToken });
  }

  throw new CustomError("Method not allowed", 405);
}

export default withGlobalMiddleware(withAuth(completeProfileHandler, true));
