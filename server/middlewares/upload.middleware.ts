import multer from "multer";
import { NextApiRequest, NextApiResponse } from "next";
import { middlewareLogger } from "../utils/debug";
import { withMiddleware } from "../utils/withMiddleware";

export type RequestWithFiles = NextApiRequest & { files: Express.Multer.File[] };
type HandlerWithFiles<T> = (req: RequestWithFiles, res: NextApiResponse) => T | Promise<T>;

const upload = multer({ storage: multer.memoryStorage() });

export function withUpload<T>(
  fieldName: string,
  handler: HandlerWithFiles<T>
): HandlerWithFiles<T> {
  return (req, res) => {
    middlewareLogger(`withUpload(${handler.name})`);
    return withMiddleware(upload.array(fieldName), handler)(req, res);
  };
}
