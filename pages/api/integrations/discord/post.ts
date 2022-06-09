import { NextApiRequest } from "next";
import { withCors } from "../../../../server/middlewares/cors.middleware";
import { withGlobalMiddleware } from "../../../../server/middlewares/global.middleware";
import { CustomResponse } from "../../../../server/utils/customResponse";
import { CustomError } from "../../../../server/utils/customError";
import { scrapbookService } from "../../../../server/modules/scrapbook/scrapbook.service";
import { withApiKey } from "../../../../server/middlewares/api-key.middleware";

async function handler(req: NextApiRequest) {
  if (req.method === "POST") {
    const data = req.body as {
      discordId: string;
      content: string;
      images: string[];
      createdAt: Date;
    };

    const authorProfileUrl = await scrapbookService.createPost(data);

    return new CustomResponse(201, "scrapbook post added", { authorProfileUrl });
  }

  throw new CustomError("Method not allowed", 405);
}

export default withCors(withGlobalMiddleware(withApiKey(handler)));
