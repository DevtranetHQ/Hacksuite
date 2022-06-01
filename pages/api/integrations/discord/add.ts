import { NextApiRequest } from "next";
import { discordAuthService } from "../../../../server/modules/auth/discord.service";
import { withCors } from "../../../../server/middlewares/cors.middleware";
import { withGlobalMiddleware } from "../../../../server/middlewares/global.middleware";
import { CustomResponse } from "../../../../server/utils/customResponse";
import { CustomError } from "../../../../server/utils/customError";
import { withApiKey } from "../../../../server/middlewares/api-key.middleware";

async function handler(req: NextApiRequest) {
  if (req.method === "POST") {
    const { discordId, discordUsername, email } = req.body;
    const result = await discordAuthService.addDiscordUser(discordId, discordUsername, email);
    return new CustomResponse(201, "discord user added", result);
  }

  throw new CustomError("Method not allowed", 405);
}

export default withCors(withGlobalMiddleware(withApiKey(handler)));
