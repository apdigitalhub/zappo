import { FlutterwaveProvider } from "@/providers/flutterwave";
import { KoraProvider } from "@/providers/kora";
import { PayPalProvider } from "@/providers/paypal";
import type { PaymentGateway, PaymentProvider } from "@/types/payments";
export function getPaymentProvider(gateway: PaymentGateway): PaymentProvider { const providers = { FLUTTERWAVE: new FlutterwaveProvider(), KORA: new KoraProvider(), PAYPAL: new PayPalProvider() } satisfies Record<PaymentGateway, PaymentProvider>; return providers[gateway]; }
