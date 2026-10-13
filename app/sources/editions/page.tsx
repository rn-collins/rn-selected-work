import type { Metadata } from "next";
import { SourceAccountIndex, accountMetadata } from "../../../components/source-account-index";

// Rechecked hourly, and refreshed by the daily cron (app/api/release-day), so each post appears on its release day.
export const revalidate = 3600;

export function generateMetadata(): Metadata {
  return accountMetadata("editions");
}

export default function Page() {
  return <SourceAccountIndex accountKey="editions" />;
}
