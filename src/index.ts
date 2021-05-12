import 'reflect-metadata';
import AWSLambda from 'aws-lambda';
import { RuntimeInstance } from '@mineko/lambda-core';
import { RequestParams, EnvParams } from './Api';
import LambdaEntry from './LambdaEntry';

const handler = async (request: any, context: AWSLambda.Context) =>
  RuntimeInstance.execute(LambdaEntry, context, request, new RequestParams(), new EnvParams());

export default handler;
export { handler };
