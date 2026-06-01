# Zappo Checkout

Zappo Checkout is a production-grade fintech SaaS starter for hosted checkout, payment links, and payment orchestration. It targets African businesses, creators, SaaS founders, agencies, freelancers, and online merchants that need a premium Stripe-style checkout operations layer.

## Stack

- Next.js 15 App Router, React 19, TypeScript
- Tailwind CSS with shadcn/ui-inspired primitives
- Framer Motion-ready architecture, Lucide icons, Recharts analytics
- React Hook Form + Zod validation
- Prisma ORM + PostgreSQL multi-tenant schema
- Auth.js/NextAuth credentials and OAuth flows
- Provider abstraction for Flutterwave, Kora, and PayPal
- Vercel deployment target

## Product surface

- Responsive marketing site: `/`, `/pricing`, `/features`, `/docs`, `/contact`
- Auth flows: `/login`, `/register`, `/forgot-password`, `/verify-email`
- Authenticated dashboard: overview, checkout pages, payment links, transactions, customers, analytics, integrations, webhooks, team, settings
- Hosted checkout: `/checkout/[slug]`
- Payment initialization API: `POST /api/payments/initialize`
- Flutterwave webhook receiver: `POST /api/webhooks/flutterwave`

## Getting started

```bash
cp .env.example .env
npm install
npm run db:generate
npm run db:push
npm run db:seed
npm run dev
```

Demo credentials after seeding:

- Email: `founder@zappo.dev`
- Password: `password123`

## Environment variables

See `.env.example` for required database, Auth.js, encryption, and provider credentials.

## Example API request

```bash
curl -X POST http://localhost:3000/api/payments/initialize \
  -H 'Content-Type: application/json' \
  -d '{"amount":4900,"currency":"USD","email":"customer@example.com","callbackUrl":"https://merchant.com/success"}'
```

## Architecture notes

- Tenant isolation is enforced around `Organization` and `Workspace` ownership in the Prisma model.
- Provider modules expose `initializePayment`, `verifyPayment`, `refundPayment`, and `webhookHandler`.
- Smart routing chooses gateways by currency preference, enabled providers, and retry fallback.
- Security primitives include encrypted secrets, rate limiting, secure headers, Auth.js sessions, RBAC-ready memberships, and audit logs.
