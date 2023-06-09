import type { StripeError } from '.';
import type { Address } from './Common';
import type { Result as PaymentMethodResult } from './PaymentMethod';
import type { NextAction } from './NextAction';
import type * as PaymentMethod from './PaymentMethod';
export interface Result {
    id: string;
    amount: number;
    created: string;
    currency: string;
    status: Status;
    description: string | null;
    receiptEmail: string | null;
    canceledAt: string | null;
    clientSecret: string;
    livemode: boolean;
    paymentMethodId: string;
    captureMethod: 'Automatic' | 'Manual';
    confirmationMethod: 'Automatic' | 'Manual';
    lastPaymentError: LastPaymentError | null;
    shipping: ShippingDetails | null;
    nextAction: NextAction | null;
}
export declare type ConfirmParams = PaymentMethod.CreateParams;
export declare type ConfirmOptions = PaymentMethod.ConfirmOptions;
export declare type LastPaymentError = StripeError<string> & {
    paymentMethod: PaymentMethodResult;
};
export declare type FutureUsage = 'OffSession' | 'OnSession';
export interface ShippingDetails {
    address: Required<Address>;
    name: string;
    carrier: string;
    phone: string;
    trackingNumber: string;
}
export declare enum Status {
    Succeeded = "Succeeded",
    RequiresPaymentMethod = "RequiresPaymentMethod",
    RequiresConfirmation = "RequiresConfirmation",
    Canceled = "Canceled",
    Processing = "Processing",
    RequiresAction = "RequiresAction",
    RequiresCapture = "RequiresCapture",
    Unknown = "Unknown"
}
