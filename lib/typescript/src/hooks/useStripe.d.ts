import type { PaymentMethod, ApplePay, PaymentSheet, CreatePaymentMethodResult, RetrievePaymentIntentResult, RetrieveSetupIntentResult, ConfirmPaymentResult, HandleNextActionResult, ConfirmSetupIntentResult, CreateTokenForCVCUpdateResult, ApplePayResult, ApplePayError, StripeError, InitPaymentSheetResult, PresentPaymentSheetResult, ConfirmPaymentSheetPaymentResult, SetupIntent, CreateTokenResult, PayWithGooglePayResult, GooglePayInitResult, GooglePay, CreateGooglePayPaymentMethodResult, OpenApplePaySetupResult, Token, VerifyMicrodepositsParams, VerifyMicrodepositsForPaymentResult, VerifyMicrodepositsForSetupResult, CollectBankAccountForSetupResult, CollectBankAccountForPaymentResult } from '../types';
/**
 * useStripe hook
 */
export declare function useStripe(): {
    retrievePaymentIntent: (clientSecret: string) => Promise<RetrievePaymentIntentResult>;
    retrieveSetupIntent: (clientSecret: string) => Promise<RetrieveSetupIntentResult>;
    confirmPayment: (paymentIntentClientSecret: string, data: PaymentMethod.ConfirmParams, options?: PaymentMethod.ConfirmOptions) => Promise<ConfirmPaymentResult>;
    createPaymentMethod: (data: PaymentMethod.CreateParams, options?: PaymentMethod.CreateOptions) => Promise<CreatePaymentMethodResult>;
    handleNextAction: (paymentIntentClientSecret: string) => Promise<HandleNextActionResult>;
    isApplePaySupported: boolean | null;
    presentApplePay: (params: ApplePay.PresentParams) => Promise<ApplePayResult>;
    confirmApplePayPayment: (clientSecret: string) => Promise<{
        error?: StripeError<ApplePayError>;
    }>;
    confirmSetupIntent: (paymentIntentClientSecret: string, data: SetupIntent.ConfirmParams, options?: SetupIntent.ConfirmOptions) => Promise<ConfirmSetupIntentResult>;
    createTokenForCVCUpdate: (cvc: string) => Promise<CreateTokenForCVCUpdateResult>;
    updateApplePaySummaryItems: (summaryItems: ApplePay.CartSummaryItem[], errorAddressFields?: Array<{
        field: ApplePay.AddressFields;
        message?: string;
    }>) => Promise<{
        error?: StripeError<ApplePayError>;
    }>;
    handleURLCallback: (url: string) => Promise<boolean>;
    confirmPaymentSheetPayment: () => Promise<ConfirmPaymentSheetPaymentResult>;
    presentPaymentSheet: () => Promise<PresentPaymentSheetResult>;
    initPaymentSheet: (params: PaymentSheet.SetupParams) => Promise<InitPaymentSheetResult>;
    createToken: (params: Token.CreateParams) => Promise<CreateTokenResult>;
    isGooglePaySupported: (params?: GooglePay.IsSupportedParams | undefined) => Promise<boolean>;
    initGooglePay: (params: GooglePay.InitParams) => Promise<GooglePayInitResult>;
    presentGooglePay: (params: GooglePay.PresentParams) => Promise<PayWithGooglePayResult>;
    createGooglePayPaymentMethod: (params: GooglePay.CreatePaymentMethodParams) => Promise<CreateGooglePayPaymentMethodResult>;
    openApplePaySetup: () => Promise<OpenApplePaySetupResult>;
    collectBankAccountForPayment: (clientSecret: string, params: PaymentMethod.CollectBankAccountParams) => Promise<CollectBankAccountForPaymentResult>;
    collectBankAccountForSetup: (clientSecret: string, params: PaymentMethod.CollectBankAccountParams) => Promise<CollectBankAccountForSetupResult>;
    verifyMicrodepositsForPayment: (clientSecret: string, params: VerifyMicrodepositsParams) => Promise<VerifyMicrodepositsForPaymentResult>;
    verifyMicrodepositsForSetup: (clientSecret: string, params: VerifyMicrodepositsParams) => Promise<VerifyMicrodepositsForSetupResult>;
};
