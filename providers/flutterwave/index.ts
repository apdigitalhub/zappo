import type { PaymentProvider, UnifiedPaymentRequest, UnifiedPaymentResponse, UnifiedTransaction } from "@/types/payments";
export class FlutterwaveProvider implements PaymentProvider {
  async initializePayment(input: UnifiedPaymentRequest): Promise<UnifiedPaymentResponse> { return { gateway: "FLUTTERWAVE", reference: input.reference, checkoutUrl: `https://checkout.flutterwave.com/pay/${input.reference}`, status: "pending" }; }
  async verifyPayment(reference: string): Promise<UnifiedTransaction> { return { gateway: "FLUTTERWAVE", reference, amount: 0, currency: "USD", status: "SUCCESSFUL", raw: { verified: true } }; }
  async refundPayment(reference: string, amount?: number): Promise<UnifiedTransaction> { return { gateway: "FLUTTERWAVE", reference, amount: amount ?? 0, currency: "USD", status: "REFUNDED", raw: { refunded: true } }; }
  async webhookHandler(payload: unknown): Promise<UnifiedTransaction> { return { gateway: "FLUTTERWAVE", reference: crypto.randomUUID(), amount: 0, currency: "USD", status: "PENDING", raw: payload }; }
}
