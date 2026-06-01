import { NextResponse, type NextRequest } from "next/server";
import { z } from "zod";
import { initializeWithSmartRouting } from "@/lib/payments/router";
import { rateLimit } from "@/lib/security/rate-limit";
const schema = z.object({ amount: z.number().int().positive(), currency: z.string().length(3), email: z.string().email(), callbackUrl: z.string().url() });
export async function POST(request: NextRequest) { const limited = rateLimit(request.headers.get("x-forwarded-for") ?? "local", 30); if (!limited.allowed) return NextResponse.json({ error: "Too many requests" }, { status: 429 }); const parsed = schema.safeParse(await request.json()); if (!parsed.success) return NextResponse.json({ error: parsed.error.flatten() }, { status: 400 }); const payment = await initializeWithSmartRouting({ ...parsed.data, reference: `zpo_${crypto.randomUUID()}` }); return NextResponse.json({ data: payment }); }
