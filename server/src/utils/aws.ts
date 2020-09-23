import AWS from 'aws-sdk';
import { awsConf } from '../server';

//Configure AWS
AWS.config.credentials = new AWS.Credentials({
  accessKeyId: awsConf.AWS_ACCESS_KEY,
  secretAccessKey: awsConf.AWS_SECRET_KEY,
});

export const s3 = new AWS.S3({
  signatureVersion: 'v4',
  region: awsConf.AWS_REGION,
  params: { Bucket: awsConf.AWS_BUCKET },
});

/* getGetSignedUrl generates an aws signed url to retreive an item
 * @Params
 *    key: string - the filename to be put into the s3 bucket
 * @Returns:
 *    a url as a string
 */
export function getGetSignedUrl(key: string): string {
  const signedUrlExpireSeconds = 60 * 5;
  const url = s3.getSignedUrl('getObject', {
    Bucket: awsConf.AWS_BUCKET,
    Key: key,
    Expires: signedUrlExpireSeconds,
  });
  return url;
}

/* getPutSignedUrl generates an aws signed url to put an item
 * @Params
 *    key: string - the filename to be retreived from s3 bucket
 * @Returns:
 *    a url as a string
 */
export function getPutSignedUrl(key: string): string {
  const signedUrlExpireSeconds = 60 * 5;
  const url = s3.getSignedUrl('putObject', {
    Bucket: awsConf.AWS_BUCKET,
    Key: key,
    Expires: signedUrlExpireSeconds,
  });
  return url;
}
