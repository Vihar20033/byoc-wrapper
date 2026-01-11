# BYOC Wrapper

A Node.js Express application that provides a REST API wrapper for Bring Your Own Cloud (BYOC) operations on AWS services, including EC2 instance listing and S3 bucket management. It uses AWS STS to assume a customer role for secure access.

## Features

- List EC2 instances from the BYOC account.
- List and create S3 buckets in the BYOC account.
- Secure role assumption using AWS STS.

## Installation

1. Clone the repository.
2. Navigate to the `byoc-wrapper` directory.
3. Install dependencies:
   ```sh
   npm install
   ```
4. Set up environment variables in `.env` (see [byoc-wrapper/.env](byoc-wrapper/.env)).

## Usage

Start the server:
```sh
npm start or npm run dev
```

The server runs on `http://localhost:3000`.

## API Endpoints

- `GET /ec2`: Retrieve list of EC2 instances. Handled by [`getEC2Instances`](byoc-wrapper/src/controllers/byoc.controller.js).
- `GET /s3/buckets`: Retrieve list of S3 buckets. Handled by [`getS3Buckets`](byoc-wrapper/src/controllers/byoc.controller.js).
- `POST /s3/bucket`: Create a new S3 bucket. Requires `bucketName` in request body. Handled by [`createS3Bucket`](byoc-wrapper/src/controllers/byoc.controller.js).

## Environment Variables

Configure the following in `.env`:
- `AWS_ACCESS_KEY_ID`: Platform IAM access key.
- `AWS_SECRET_ACCESS_KEY`: Platform IAM secret key.
- `AWS_REGION`: AWS region (e.g., ap-south-1).
- `ROLE_ARN`: ARN of the BYOC customer role to assume.

## Project Structure

- [byoc-wrapper/src/app.js](byoc-wrapper/src/app.js): Main Express app.
- [byoc-wrapper/src/routes/byoc.routes.js](byoc-wrapper/src/routes/byoc.routes.js): API routes.
- [byoc-wrapper/src/controllers/byoc.controller.js](byoc-wrapper/src/controllers/byoc.controller.js): Controllers for handling requests.
- [byoc-wrapper/src/services/](byoc-wrapper/src/services/): AWS service integrations (EC2, S3, STS).
- [byoc-wrapper/src/config/aws.js](byoc-wrapper/src/config/aws.js): AWS SDK configuration.
- [byoc-wrapper/src/utils/logger.js](byoc-wrapper/src/utils/logger.js): Logging utilities (currently empty).

## Dependencies

- `express`: Web framework.
- `aws-sdk`: AWS SDK for JavaScript.
- `dotenv`: Environment variable loader.

## License

[Add license information here]
