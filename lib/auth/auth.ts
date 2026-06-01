import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import Google from "next-auth/providers/google";
import Credentials from "next-auth/providers/credentials";
import { z } from "zod";
import { compare } from "bcryptjs";
import { prisma } from "@/lib/db/prisma";

const credentialsSchema = z.object({ email: z.string().email(), password: z.string().min(8) });
export const { handlers, signIn, signOut, auth } = NextAuth({
  session: { strategy: "jwt" },
  providers: [GitHub, Google, Credentials({ credentials: { email: {}, password: {} }, async authorize(raw) { const parsed = credentialsSchema.safeParse(raw); if (!parsed.success) return null; const user = await prisma.user.findUnique({ where: { email: parsed.data.email } }); if (!user?.passwordHash) return null; const ok = await compare(parsed.data.password, user.passwordHash); return ok ? { id: user.id, email: user.email, name: user.name } : null; } })],
  pages: { signIn: "/login" },
});
