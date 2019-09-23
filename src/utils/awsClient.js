import awsAppsync, { AUTH_TYPE } from 'aws-appsync';
import awsExports from "../aws-exports";

const awsClient = new awsAppsync(
	{
		url: awsExports.aws_appsync_graphqlEndpoint,
		region: awsExports.aws_appsync_region,
		auth: {
			type: AUTH_TYPE.API_KEY,
			apiKey: awsExports.aws_appsync_apiKey,
		},
	},
);

export default awsClient
