import express from "express";
import { getEC2Instances, getS3Buckets , createS3Bucket } from "../controllers/byoc.controller.js";

const router = express.Router();

router.get("/ec2", getEC2Instances);
router.get("/s3/buckets", getS3Buckets);
router.post("/s3/bucket", createS3Bucket);


export default router;
