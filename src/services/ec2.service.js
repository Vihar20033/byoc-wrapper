import AWS from "aws-sdk";
import { assumeRole } from "./sts.service.js";

/**
 * Lists EC2 instances from BYOC account
 */
export async function listEC2Instances() {
  const creds = await assumeRole();

  const ec2 = new AWS.EC2({
    accessKeyId: creds.accessKeyId,
    secretAccessKey: creds.secretAccessKey,
    sessionToken: creds.sessionToken,
    region: process.env.AWS_REGION,
  });

  const result = await ec2.describeInstances().promise();
  return result.Reservations;
}
