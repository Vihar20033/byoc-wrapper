import AWS from "../config/aws.js";

const sts = new AWS.STS();

/**
 * Assumes BYOC customer role
 * Returns temporary credentials
 */
export async function assumeRole() {
  const params = {
    RoleArn: process.env.ROLE_ARN,
    RoleSessionName: "BYOCSession",
    DurationSeconds: 3600,
  };

  const data = await sts.assumeRole(params).promise();

  return {
    accessKeyId: data.Credentials.AccessKeyId,
    secretAccessKey: data.Credentials.SecretAccessKey,
    sessionToken: data.Credentials.SessionToken,
  };
}
