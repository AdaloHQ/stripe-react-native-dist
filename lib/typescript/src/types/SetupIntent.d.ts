import type { Type } from './PaymentMethod';
import type { LastPaymentError } from './PaymentIntent';
import type { NextAction } from './NextAction';
import type * as PaymentMethod from './PaymentMethod';
export interface Result {
    id: string;
    clientSecret: string;
    lastSetupError: LastPaymentError | null;
    created: string | null;
    livemode: boolean;
    paymentMethodId: string | null;
    status: Status;
    paymentMethodTypes: Type[];
    usage: FutureUsage;
    description: string | null;
    nextAction: NextAction | null;
}
export declare type ConfirmParams = PaymentMethod.CreateParams;
export declare type ConfirmOptions = PaymentMethod.ConfirmOptions;
export declare type FutureUsage = 'Unknown' | 'None' | 'OnSession' | 'OffSession' | 'OneTime';
export declare enum Status {
    Succeeded = "Succeeded",
    RequiresPaymentMethod = "RequiresPaymentMethod",
    RequiresConfirmation = "RequiresConfirmation",
    Canceled = "Canceled",
    Processing = "Processing",
    RequiresAction = "RequiresAction",
    Unknown = "Unknown"
}
