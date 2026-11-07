import Link from "next/link";
import { inventoryGeneratedAt, statusLabels, type Build } from "../lib/builds";

/**
 * The verified build record, rendered from lib/build-notes.ts — the same
 * source the generated index renders from, so a case study and the index can
 * never disagree about a build's status.
 */
export function VerifiedRecord({ build }: { build: Build }) {
  return (
    <section className="verifiedRecord" aria-labelledby="verified-record">
      <div className="verifiedRecordHead">
        <p className="eyebrow">Build record</p>
        <h2 id="verified-record">What this build does, and where it stands.</h2>
        <p className={`indexStatus indexStatus--${build.statusKind}`}>
          <span className="indexStatusTag">{statusLabels[build.statusKind]}</span>
          {build.status}
        </p>
      </div>
      <div className="verifiedRecordBody">
        <p>
          <b>The problem.</b> {build.problem}
        </p>
        <p>
          <b>What it does.</b> {build.does}
        </p>
        <p>
          <b>Built on.</b> {build.builtOn}
        </p>
        {build.limits && (
          <p className="indexLimits">
            <b>What it does not establish.</b> {build.limits}
          </p>
        )}
        {build.linkHeld && (
          <p className="indexHeld">
            <b>Public link held.</b> {build.linkHeld}
          </p>
        )}
        <p className="verifiedRecordProvenance">
          The URL and its recorded response come from the{" "}
          <Link href={`/builds#${build.category}`}>public build inventory</Link>, dated{" "}
          {new Intl.DateTimeFormat("en-US", { month: "long", day: "numeric", year: "numeric", timeZone: "UTC" }).format(new Date(inventoryGeneratedAt))}.
          {" "}Descriptions and project status are curated separately. A responding URL is not proof
          of a completed product, current background services, research approval or client adoption.
        </p>
      </div>
    </section>
  );
}

