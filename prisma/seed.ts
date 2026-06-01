import { hash } from "bcryptjs";
import { prisma } from "../lib/db/prisma";
async function main() { const user = await prisma.user.upsert({ where: { email: "founder@zappo.dev" }, update: {}, create: { email: "founder@zappo.dev", name: "Zappo Founder", passwordHash: await hash("password123", 12) } }); const org = await prisma.organization.upsert({ where: { slug: "zappo-demo" }, update: {}, create: { name: "Zappo Demo Ltd", slug: "zappo-demo", memberships: { create: { userId: user.id, role: "OWNER" } }, workspaces: { create: { name: "Default", slug: "default" } } } }); console.log({ user: user.email, org: org.slug }); }
main().finally(() => prisma.$disconnect());
