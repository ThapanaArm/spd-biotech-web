import { createClient } from "@supabase/supabase-js";

const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export const PRODUCT_IMAGE_BUCKET = "product-images";

/**
 * Public client — uses the anon/publishable key and respects RLS. Our tables
 * allow only SELECT for this key, so it is safe for reads from public pages.
 */
export function createPublicClient() {
  if (!url || !anonKey) {
    throw new Error(
      "Missing NEXT_PUBLIC_SUPABASE_URL or NEXT_PUBLIC_SUPABASE_ANON_KEY in .env.local"
    );
  }
  return createClient(url, anonKey, { auth: { persistSession: false } });
}

/**
 * Admin client — uses the service role key and BYPASSES RLS. SERVER ONLY:
 * never import this from a client component or expose the key to the browser.
 */
export function createAdminClient() {
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !serviceKey) {
    throw new Error(
      "Missing SUPABASE_SERVICE_ROLE_KEY in .env.local — get it from Supabase Dashboard → Project Settings → API keys → service_role."
    );
  }
  return createClient(url, serviceKey, { auth: { persistSession: false } });
}
