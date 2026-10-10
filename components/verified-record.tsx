import Link from "next/link";
import { statusLabels, type Build } from "../lib/builds";

/**
 * The verified build record, rendered from lib/build-notes.ts — the same
 * source the generated index renders from, so a case study and the index can
 * never disagree about a build's status.
 */
export function VerifiedRecord({ build }: { build: Build }) {
  return (
    <section className="verifiedRecord" aria-labelledby="verified-record">
      <div className="verifiedRecordHead">
        <p className="eyebrow">Verified build record</p>
        <h2 id="verified-record">What is actually running, and what it is not.</h2>
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
          This record is generated from the same inventory as the{" "}
          <Link href={`/builds#${build.category}`}>complete build index</Link>: the
          production URL was checked at the last regeneration, and the status line above
          repeats what the build reports about itself rather than restating an intention.
        </p>
      </div>
    </section>
  );
}

