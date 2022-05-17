import { NextApiResponse } from "next";
import { RequestWithUser } from "./../../../server/middlewares/auth.middleware";
import { UserCtrl } from "../../../server/controllers/user.controller";
import { withGlobalMiddleware } from "../../../server/middlewares/global.middleware";
import { withUpload } from "../../../server/middlewares/upload.middleware";

type UserFileFields = ["resume", "image"];

function handler(req: RequestWithUser, res: NextApiResponse) {
  if (req.method === "GET") {
    return UserCtrl.getOne(req);
  }

  if (req.method === "PUT") {
    return withUpload<UserFileFields>([`resume`, `image`], req => {
      console.log({ body: req.body, files: req.files });
      return UserCtrl.update(req);
    })(req, res);
  }

  if (req.method === "DELETE") {
    return UserCtrl.delete(req);
  }
}

export default withGlobalMiddleware(handler);

export const config = {
  api: {
    bodyParser: false
  }
};
