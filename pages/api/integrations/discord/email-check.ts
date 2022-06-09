import { NextApiRequest } from "next";
import { integrationService } from "../../../../server/modules/integration/discord/discord.service";
import { withCors } from "../../../../server/middlewares/cors.middleware";
import { withGlobalMiddleware } from "../../../../server/middlewares/global.middleware";
import { CustomResponse } from "../../../../server/utils/customResponse";

async function handler(req: NextApiRequest) {
  if (req.method === "POST") {
    const userRoles = await integrationService.discordEmailCheck(req.body.email);
    return new CustomResponse(200, "user exists", { userRoles });
  }
}

export default withCors(withGlobalMiddleware(handler));
