import AWS from 'aws-sdk';
import dotenv from 'dotenv';

dotenv.config({ path: `${__dirname}/../.env` });

const awsConf = {
  AWS_BUCKET: process.env.AWS_BUCKET,
  AWS_REGION: process.env.AWS_REGION,
  AWS_PROFILE: process.env.AWS_PROFILE,
  AWS_ACCESS_KEY: process.env.AWS_ACCESS_KEY,
  AWS_SECRET_KEY: process.env.AWS_SECRET_KEY,
};

AWS.config.credentials = new AWS.Credentials({
  accessKeyId: awsConf.AWS_ACCESS_KEY,
  secretAccessKey: awsConf.AWS_SECRET_KEY,
});

export const s3 = new AWS.S3({
  signatureVersion: 'v4',
  region: awsConf.AWS_REGION,
  params: { Bucket: awsConf.AWS_BUCKET },
});

// generates an aws signed url to download an item
export function getGetSignedUrl(filename: string): string {
  const signedUrlExpireSeconds = 60 * 5;
  const url: string = s3.getSignedUrl('getObject', {
    Bucket: awsConf.AWS_BUCKET,
    Key: filename,
    Expires: signedUrlExpireSeconds,
  });
  return url;
}

// generates an aws signed url to upload an item
export function getPutSignedUrl(filename: string): string {
  const signedUrlExpireSeconds = 60 * 5;
  const url: string = s3.getSignedUrl('putObject', {
    Bucket: awsConf.AWS_BUCKET,
    Key: filename,
    Expires: signedUrlExpireSeconds,
  });
  return url;
}
