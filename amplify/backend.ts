import { defineBackend } from '@aws-amplify/backend';
import { Bucket } from 'aws-cdk-lib/aws-s3';
import { auth } from './auth/resource';

/**
 * @see https://docs.amplify.aws/react/build-a-backend/ to add storage, functions, and more
 */
const backend = defineBackend({
  auth,
});

const demonStack = backend.createStack("demon-gallery-stack");

const demonGalleryBucket = Bucket.fromBucketAttributes(demonStack, "DemonGalleryBucket", {
  bucketArn: "arn:aws:s3:::demonically-online-gallery-590184052615-us-east-1-an",
  region: "us-east-1"
});

backend.addOutput({
  storage: {
    aws_region: demonGalleryBucket.env.region,
    bucket_name: demonGalleryBucket.bucketName,
    buckets: [
      {
        aws_region: demonGalleryBucket.env.region,
        bucket_name: demonGalleryBucket.bucketName,
        name: demonGalleryBucket.bucketName,
        paths: {
          "gallery/*": {
            guest: ["get", "list"]
          }
        }
      }
    ]
  }
});