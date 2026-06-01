import crypto from "node:crypto";
const algorithm = "aes-256-gcm";
function key() { return crypto.createHash("sha256").update(process.env.ENCRYPTION_KEY ?? "dev-only-change-me").digest(); }
export function encryptSecret(secret: string) { const iv = crypto.randomBytes(12); const cipher = crypto.createCipheriv(algorithm, key(), iv); const encrypted = Buffer.concat([cipher.update(secret, "utf8"), cipher.final()]); const tag = cipher.getAuthTag(); return Buffer.concat([iv, tag, encrypted]).toString("base64url"); }
export function decryptSecret(payload: string) { const raw = Buffer.from(payload, "base64url"); const iv = raw.subarray(0, 12); const tag = raw.subarray(12, 28); const encrypted = raw.subarray(28); const decipher = crypto.createDecipheriv(algorithm, key(), iv); decipher.setAuthTag(tag); return Buffer.concat([decipher.update(encrypted), decipher.final()]).toString("utf8"); }
