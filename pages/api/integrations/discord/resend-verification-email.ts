import { NextApiRequest } from "next";
import { withCors } from "../../../../server/middlewares/cors.middleware";
import { withGlobalMiddleware } from "../../../../server/middlewares/global.middleware";
import { CustomResponse } from "../../../../server/utils/customResponse";
import { integrationService } from "../../../../server/modules/integration/discord/discord.service";

async function handler(req: NextApiRequest) {
  if (req.method === "POST") {
    const result = await integrationService.discordResendVerificationEmail(req.body.email);
    return new CustomResponse(201, "email verification sent", result);
  }
}

export default withCors(withGlobalMiddleware(handler));
