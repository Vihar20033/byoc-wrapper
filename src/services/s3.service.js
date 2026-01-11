import AWS from "aws-sdk";
import { assumeRole } from "./sts.service.js";

/**
 * Create S3 client using temporary (BYOC) credentials
 */
async function getS3Client() {
  const creds = await assumeRole();

  return new AWS.S3({
    accessKeyId: creds.accessKeyId,
    secretAccessKey: creds.secretAccessKey,
    sessionToken: creds.sessionToken,
    region: process.env.AWS_REGION,
  });
}

/**
 * List all S3 buckets in the BYOC account
 */
export async function listBuckets() {
  const s3 = await getS3Client();
  const result = await s3.listBuckets().promise();
  return result.Buckets;
}

/**
 * Create a new S3 bucket in BYOC account
 */
export async function createBucket(bucketName) {
  const s3 = await getS3Client();

  await s3.createBucket({
    Bucket: bucketName,
    CreateBucketConfiguration: {
      LocationConstraint: process.env.AWS_REGION,
    },
  }).promise();

  return { message: `Bucket ${bucketName} created successfully` };
}

