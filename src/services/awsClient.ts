import awsAppsync from 'aws-appsync';
import { AUTH_TYPE } from 'aws-appsync/lib';
import awsExports from '../aws-exports';

const auth: any = {
  type: AUTH_TYPE.AWS_IAM,
};

const awsClient = new awsAppsync(
  {
    auth,
    url: awsExports.aws_appsync_graphqlEndpoint,
    region: awsExports.aws_appsync_region,
  },
);

export default awsClient;
