import AWSLambda from 'aws-lambda';
import { Expect, Test } from 'alsatian';
import handler from '../../src/index';

export default class HandlerSpec {
  @Test('')
  async test1(): Promise<void> {
    const actual = await handler({ customerId: '4c2c0d27-80bc-45b5-beb9-dbf0745e19ae' }, {} as AWSLambda.Context);
    Expect(actual).toEqual({ score: 85.5 });
  }
}
