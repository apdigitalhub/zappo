"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BarChart3, Bell, Boxes, CreditCard, Globe, Home, KeyRound, Link2, Search, Settings, Users, Webhook } from "lucide-react";
import { cn } from "@/lib/utils";
import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
const nav = [
  [Home, "Overview", "/dashboard"], [Boxes, "Checkout Pages", "/dashboard/checkout-pages"], [Link2, "Payment Links", "/dashboard/payment-links"],
  [CreditCard, "Transactions", "/dashboard/transactions"], [Users, "Customers", "/dashboard/customers"], [BarChart3, "Analytics", "/dashboard/analytics"],
  [Globe, "Integrations", "/dashboard/integrations"], [Webhook, "Webhooks", "/dashboard/webhooks"], [Users, "Team", "/dashboard/team"], [Settings, "Settings", "/dashboard/settings"],
] as const;
export function DashboardShell({ children }: { children: React.ReactNode }) { const pathname = usePathname(); return <div className="min-h-screen bg-muted/30"><aside className="fixed inset-y-0 left-0 z-40 hidden w-72 border-r bg-background/85 p-4 backdrop-blur-xl lg:block"><Logo /><div className="mt-6 rounded-2xl border p-3"><p className="text-xs text-muted-foreground">Workspace</p><p className="font-medium">Zappo Demo Ltd</p></div><nav className="mt-6 space-y-1">{nav.map(([Icon, label, href]) => <Link key={href} href={href} className={cn("flex items-center gap-3 rounded-xl px-3 py-2 text-sm text-muted-foreground transition hover:bg-muted hover:text-foreground", pathname === href && "bg-zappo-ink text-white hover:bg-zappo-ink hover:text-white")}><Icon className="size-4" />{label}</Link>)}</nav></aside><div className="lg:pl-72"><header className="sticky top-0 z-30 border-b bg-background/80 backdrop-blur-xl"><div className="flex h-16 items-center gap-3 px-4"><div className="lg:hidden"><Logo /></div><div className="hidden flex-1 items-center gap-2 rounded-xl border bg-muted/40 px-3 py-2 text-sm text-muted-foreground md:flex"><Search className="size-4" /> Search transactions, customers, webhooks… <kbd className="ml-auto rounded bg-background px-2 py-0.5">⌘K</kbd></div><Button variant="outline" size="icon"><Bell className="size-4" /></Button><Button variant="outline"><KeyRound className="size-4" /> Live</Button></div></header><main className="p-4 md:p-8">{children}</main></div></div>; }
