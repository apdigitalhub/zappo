import Link from "next/link";
import { Zap } from "lucide-react";
export function Logo() {
  return <Link href="/" className="flex items-center gap-2 font-semibold tracking-tight"><span className="grid size-9 place-items-center rounded-xl bg-gradient-to-br from-indigo-600 to-sky-400 text-white shadow-glow"><Zap className="size-5 fill-white" /></span><span>Zappo Checkout</span></Link>;
}
