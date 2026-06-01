export type PaymentGateway = "FLUTTERWAVE" | "KORA" | "PAYPAL";
export type UnifiedPaymentRequest = { amount: number; currency: string; email: string; reference: string; callbackUrl: string; metadata?: Record<string, unknown> };
export type UnifiedPaymentResponse = { gateway: PaymentGateway; reference: string; checkoutUrl: string; status: "pending" | "successful" | "failed" };
export type UnifiedTransaction = { gateway: PaymentGateway; reference: string; amount: number; currency: string; status: "SUCCESSFUL" | "FAILED" | "PENDING" | "REFUNDED"; raw: unknown };
export interface PaymentProvider { initializePayment(input: UnifiedPaymentRequest): Promise<UnifiedPaymentResponse>; verifyPayment(reference: string): Promise<UnifiedTransaction>; refundPayment(reference: string, amount?: number): Promise<UnifiedTransaction>; webhookHandler(payload: unknown, signature?: string): Promise<UnifiedTransaction>; }
