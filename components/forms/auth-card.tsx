"use client";
import { Eye, Github, Loader2 } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
const schema = z.object({ email: z.string().email(), password: z.string().min(8) });
export function AuthCard({ mode }: { mode: "login" | "register" | "forgot" | "verify" }) {
  const [show, setShow] = useState(false); const [loading, setLoading] = useState(false);
  const form = useForm<z.infer<typeof schema>>({ resolver: zodResolver(schema), defaultValues: { email: "", password: "" } });
  const title = { login: "Welcome back", register: "Create your workspace", forgot: "Reset your password", verify: "Verify your email" }[mode];
  return <Card className="w-full max-w-md glass"><CardContent className="p-6"><h1 className="text-3xl font-semibold tracking-tight">{title}</h1><p className="mt-2 text-sm text-muted-foreground">Secure access to your Zappo Checkout command center.</p><div className="mt-6 grid gap-3"><Button variant="outline"><Github className="size-4" /> Continue with GitHub</Button><Button variant="outline">Continue with Google</Button></div><div className="my-6 h-px bg-border" /><form onSubmit={form.handleSubmit(() => { setLoading(true); setTimeout(() => setLoading(false), 800); })} className="space-y-4"><div><Input placeholder="founder@company.com" type="email" {...form.register("email")} /><p className="mt-1 text-xs text-rose-500">{form.formState.errors.email?.message}</p></div>{mode !== "forgot" && mode !== "verify" && <div className="relative"><Input placeholder="Password" type={show ? "text" : "password"} {...form.register("password")} /><button type="button" onClick={() => setShow(!show)} className="absolute right-3 top-3 text-muted-foreground"><Eye className="size-4" /></button><p className="mt-1 text-xs text-rose-500">{form.formState.errors.password?.message}</p></div>}<Button className="w-full" variant="gradient" disabled={loading}>{loading && <Loader2 className="size-4 animate-spin" />} Continue</Button></form></CardContent></Card>;
}
