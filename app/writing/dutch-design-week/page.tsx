import type { Metadata } from "next";
import Link from "next/link";
import {
  essaysByFamily, essayPath, families, FAMILY_BLURB, readingMinutes, releasedDdwEssays, releasedWords,
} from "../../../lib/ddw-essays";
import styles from "./ddw.module.css";

// Lists released essays only (data/releases.json), rechecked hourly and refreshed by the daily cron.
export const revalidate = 3600;

export function generateMetadata(): Metadata {
  return {
    title: "Dutch Design Week, written out",
    description: "Essays on the makers, venues, editions and awards of Dutch Design Week, each written from the public record and citing its sources.",
    alternates: { canonical: "/writing/dutch-design-week" },
  };
}

export default function DutchDesignWeekIndex() {
  const essays = releasedDdwEssays();
  return (
    <main className={`${styles.page} shell`}>
      <p className="eyebrow">Dutch Design Week</p>
      <h1 className={styles.title}>The week, written out</h1>
      <p className={styles.lede}>
        Eindhoven’s design week leaves behind a photo archive that shows a studio was in the room
        without saying what it was doing there. These essays read the written record beside the
        pictures: programmes, studio pages, museum releases, heritage and planning records, regional
        and design press. Each reports what it draws on, and says where it did not go.
      </p>
      <p className={styles.count}>
        {essays.length === 0
          ? "Each essay appears here on the day its post goes up."
          : <>{essays.length} essays · {releasedWords().toLocaleString("en-US")} words · by RN Collins</>}
      </p>
      {families().map((family) => {
        const group = essaysByFamily(family);
        return (
          <section className={styles.group} key={family} id={family}>
            <h2>{group[0].familyLabel}</h2>
            <p>{FAMILY_BLURB[family]}</p>
            <ul className={styles.list}>
              {group.map((e) => (
                <li key={e.slug}>
                  <Link href={essayPath(e)}>
                    <b>{e.title}</b>
                    <span>{e.subtitle}</span>
                    <em>{readingMinutes(e)} minute read · {e.sources.length} sources</em>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        );
      })}
      <p className={styles.back}>
        <Link href="/writing">All writing</Link>
      </p>
    </main>
  );
}
