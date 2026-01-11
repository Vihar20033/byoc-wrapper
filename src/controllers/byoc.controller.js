import { listEC2Instances } from "../services/ec2.service.js";
import { listBuckets } from "../services/s3.service.js";
import { createBucket } from "../services/s3.service.js";

/**
 * Controller = middleman between route and service
 */
export async function getEC2Instances(req, res) {
  try {
    const instances = await listEC2Instances();
    res.json(instances);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function getS3Buckets(req, res) {
  try {
    const buckets = await listBuckets();
    res.json(buckets);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function createS3Bucket(req, res) {
  try {
    const { bucketName } = req.body;
    const result = await createBucket(bucketName);
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

