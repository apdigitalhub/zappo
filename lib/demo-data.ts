export const kpis = [
  { label: "Total Revenue", value: "$84,240", change: "+18.2%" }, { label: "Total Volume", value: "1.28M", change: "+11.4%" },
  { label: "Successful Payments", value: "12,430", change: "+7.8%" }, { label: "Failed Payments", value: "183", change: "-3.1%" },
  { label: "Refunds", value: "$2,180", change: "-1.6%" }, { label: "Conversion Rate", value: "68.4%", change: "+4.9%" }, { label: "Active Checkout Pages", value: "42", change: "+6" },
];
export const transactions = [
  { id: "txn_8Kq1", customer: "Ada Ventures", amount: "$1,200", status: "Successful", gateway: "Flutterwave", date: "Jun 1, 2026" },
  { id: "txn_8Kq2", customer: "Kofi Studio", amount: "$49", status: "Pending", gateway: "PayPal", date: "Jun 1, 2026" },
  { id: "txn_8Kq3", customer: "Nairobi SaaS", amount: "$299", status: "Failed", gateway: "Kora", date: "May 31, 2026" },
  { id: "txn_8Kq4", customer: "Lagos Creator", amount: "$99", status: "Refunded", gateway: "Flutterwave", date: "May 31, 2026" },
];
export const checkoutPages = ["Creator Pro Subscription", "Agency Retainer", "SaaS Starter Annual", "Digital Course Bundle"];
export const webhooks = ["payment.successful", "payment.failed", "checkout.abandoned", "subscription.renewed"];
