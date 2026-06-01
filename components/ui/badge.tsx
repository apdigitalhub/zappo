import type * as React from "react";
import { cn } from "@/lib/utils";
export function Badge({ className, variant = "default", ...props }: React.HTMLAttributes<HTMLSpanElement> & { variant?: "default" | "success" | "warning" | "danger" | "muted" }) {
  const styles = { default: "bg-indigo-500/10 text-indigo-600", success: "bg-emerald-500/10 text-emerald-600", warning: "bg-amber-500/10 text-amber-600", danger: "bg-rose-500/10 text-rose-600", muted: "bg-muted text-muted-foreground" }[variant];
  return <span className={cn("inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium", styles, className)} {...props} />;
}
