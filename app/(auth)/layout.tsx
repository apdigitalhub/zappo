import { Logo } from "@/components/logo";
export default function AuthLayout({ children }: { children: React.ReactNode }) { return <main className="premium-gradient grid min-h-screen place-items-center px-4 py-10"><div className="absolute left-6 top-6"><Logo /></div>{children}</main>; }
