import multer from "multer";
import { NextApiRequest, NextApiResponse, NextApiHandler } from "next";
import { middlewareLogger } from "../utils/debug";
import { withMiddleware } from "../utils/withMiddleware";

export type RequestWithFiles<FileFields extends string[]> = NextApiRequest & {
  files: {
    [K in FileFields[number]]: Express.Multer.File[];
  };
};
type HandlerWithFiles<FileFields extends string[], T> = (
  req: RequestWithFiles<FileFields>,
  res: NextApiResponse
) => T | Promise<T>;

const upload = multer({ storage: multer.memoryStorage() });

export function withUpload<FileFields extends string[], T = any>(
  fields: FileFields,
  handler: HandlerWithFiles<FileFields, T>
): NextApiHandler {
  return (req, res) => {
    middlewareLogger(`withUpload(${handler.name})`);
    return withMiddleware(upload.fields(fields.map(name => ({ name }))), handler)(req, res);
  };
}
