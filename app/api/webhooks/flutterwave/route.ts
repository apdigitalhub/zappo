import { NextResponse, type NextRequest } from "next/server";
import { getPaymentProvider } from "@/lib/payments/provider-factory";
export async function POST(request: NextRequest) { const payload = await request.json(); const signature = request.headers.get("verif-hash") ?? undefined; const event = await getPaymentProvider("FLUTTERWAVE").webhookHandler(payload, signature); return NextResponse.json({ received: true, event }); }
