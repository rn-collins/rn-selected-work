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
        <p className="eyebrow">Where it stands</p>
        <h2 id="verified-record">What works today, and what it doesn’t do.</h2>
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
          <b>Built with:</b> {build.builtOn}
        </p>
        {build.limits && (
          <p className="indexLimits">
            <b>Limits.</b> {build.limits}
          </p>
        )}
        {build.linkHeld && (
          <p className="indexHeld">
            <b>Public link held.</b> {build.linkHeld}
          </p>
        )}
        <p className="verifiedRecordProvenance">
          Status and link checked when this page was last updated.
        </p>
      </div>
    </section>
  );
}

