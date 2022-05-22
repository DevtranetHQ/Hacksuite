import { CustomError } from "../../../server/utils/customError";
import { CustomResponse } from "../../../server/utils/customResponse";
import { RequestWithUser, withAuth } from "../../../server/middlewares/auth.middleware";
import { withGlobalMiddleware } from "../../../server/middlewares/global.middleware";
import { RequestWithFiles, withUpload } from "../../../server/middlewares/upload.middleware";
import { uploadService } from "../../../server/modules/files/upload.service";
import { profileService } from "../../../server/modules/social/profile.service";

type UserFileFields = ["resume", "image"];

async function handler(req: RequestWithUser & RequestWithFiles<UserFileFields>) {
  if (req.method === "PUT") {
    const { resume: [resume] = [], image: [image] = [] } = req.files;

    const uploadResume = resume && uploadService.upload(`users/resume`, req.$user.uniqueId, resume);
    const uploadImage = image && uploadService.upload(`users/image`, req.$user.uniqueId, image);

    const [resumeUrl, imageUrl] = await Promise.all([uploadResume, uploadImage]);

    const user = await profileService.update(req.$user.uniqueId, {
      resume: resumeUrl,
      image: imageUrl
    });

    return new CustomResponse(200, `successfully uploaded files`, user);
  }

  throw new CustomError("Method not allowed", 405);
}

export default withGlobalMiddleware(
  withAuth(withUpload<UserFileFields>([`resume`, `image`], handler), true)
);

export const config = { api: { bodyParser: false } };
