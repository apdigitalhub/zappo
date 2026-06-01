export const siteConfig = {
  name: "Zappo Checkout",
  description: "Hosted checkout, payment links, and payment orchestration for African businesses and global creators.",
  url: process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000",
  nav: [
    { href: "/features", label: "Features" },
    { href: "/pricing", label: "Pricing" },
    { href: "/docs", label: "Docs" },
    { href: "/contact", label: "Contact" },
  ],
};
