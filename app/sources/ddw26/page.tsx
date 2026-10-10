import type { Metadata } from "next";
import { SourceAccountIndex, accountMetadata } from "../../../components/source-account-index";

// Rebuilt daily so each post appears here on its posting day.
export const revalidate = 86400;

export function generateMetadata(): Metadata {
  return accountMetadata("ddw26");
}

export default function Page() {
  return <SourceAccountIndex accountKey="ddw26" />;
}
