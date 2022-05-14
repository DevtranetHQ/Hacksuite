import AWS from "aws-sdk";
import { config } from "../../config";

const { aws } = config;

AWS.config.update({ region: aws.region });

const s3 = new AWS.S3({ apiVersion: "2006-03-01" });

class UploadService {
  async upload(key: string, filename: string, file: Express.Multer.File): Promise<string> {
    const { buffer } = file;

    const res = await s3
      .upload({
        Bucket: aws.bucket,
        Key: `${key}/${filename}`,
        Body: buffer
      })
      .promise();

    return res.Location;
  }

  async delete(key: string, filename: string): Promise<void> {
    await s3
      .deleteObject({
        Bucket: aws.bucket,
        Key: `${key}/${filename}`
      })
      .promise();
  }
}

export const uploadService = new UploadService();
