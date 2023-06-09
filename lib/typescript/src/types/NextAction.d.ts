export declare type NextAction = VerifyWithMicrodepositsAction | UrlRedirectAction | WeChatRedirectAction | AlipayRedirectAction | BoletoVoucherAction | OxxoVoucherAction;
export declare type VerifyWithMicrodepositsAction = {
    type: 'verifyWithMicrodeposits';
    redirectUrl: string;
    microdepositType: string;
    arrivalDate: string;
};
export declare type UrlRedirectAction = {
    type: 'urlRedirect';
    redirectUrl: string;
};
export declare type WeChatRedirectAction = {
    type: 'weChatRedirect';
    redirectUrl: string;
};
export declare type AlipayRedirectAction = {
    type: 'alipayRedirect';
    redirectUrl: string;
    nativeRedirectUrl: string;
};
export declare type BoletoVoucherAction = {
    type: 'boletoVoucher';
    expiration: number;
    voucherURL: string;
    voucherNumber: string;
};
export declare type OxxoVoucherAction = {
    type: 'oxxoVoucher';
    expiration: number;
    voucherURL: string;
    voucherNumber: string;
};
