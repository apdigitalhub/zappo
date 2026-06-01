import type { PaymentProvider, UnifiedPaymentRequest, UnifiedPaymentResponse, UnifiedTransaction } from "@/types/payments";
export class KoraProvider implements PaymentProvider {
  async initializePayment(input: UnifiedPaymentRequest): Promise<UnifiedPaymentResponse> { return { gateway: "KORA", reference: input.reference, checkoutUrl: `https://pay.korapay.com/${input.reference}`, status: "pending" }; }
  async verifyPayment(reference: string): Promise<UnifiedTransaction> { return { gateway: "KORA", reference, amount: 0, currency: "USD", status: "SUCCESSFUL", raw: { verified: true } }; }
  async refundPayment(reference: string, amount?: number): Promise<UnifiedTransaction> { return { gateway: "KORA", reference, amount: amount ?? 0, currency: "USD", status: "REFUNDED", raw: { refunded: true } }; }
  async webhookHandler(payload: unknown): Promise<UnifiedTransaction> { return { gateway: "KORA", reference: crypto.randomUUID(), amount: 0, currency: "USD", status: "PENDING", raw: payload }; }
}
