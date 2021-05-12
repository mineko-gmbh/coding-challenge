import { singleton } from 'tsyringe';
import { UnifiedEvent, Runnable } from '@mineko/lambda-core';
import { RequestParams, ResponseParams, EnvParams } from './Api';

type CustomerProps = {
  id: string;
  type: 'B2C' | 'B2B' | 'landlord' | 'legalInsurance';
  registeredAt: string; // ISO
};

type PaymentProps = {
  id: string;
  paymentScore: number;
};

type Order = {
  id: string;
  status: 'pending' | 'completed' | 'cancelled';
  price: number;
  rentalUnit?: string; // only for landlord
};

@singleton()
export default class LambdaEntry implements Runnable<RequestParams, EnvParams, ResponseParams> {
  run = async (request: UnifiedEvent<RequestParams, EnvParams>): Promise<ResponseParams> => {
    const { event }: { event: RequestParams } = request;
    return { score: 85.5 };
  };
}
