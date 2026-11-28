import { vcardResponse } from "../../lib/vcard";

// The vCard, built from the VCARD_EMAILS env var (lib/vcard.ts); 404 when it isn't set.
export const revalidate = 3600;
export function GET() {
  return vcardResponse();
}
