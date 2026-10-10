import Link from "next/link";
import styles from "./source-portfolio-link.module.css";

// Every sources page links to the portfolio itself: a short line under the title area and a block at the end.
export function PortfolioLine() {
  return (
    <p className={styles.line}>
      From <Link href="/">RN Collins, selected work</Link>
    </p>
  );
}

export function PortfolioBlock() {
  return (
    <aside className={styles.block} aria-labelledby="portfolio-links">
      <h2 id="portfolio-links">RN Collins, selected work</h2>
      <p>Research, systems and writing, with the evidence behind each piece.</p>
      <ul>
        <li><Link href="/">RN Selected Work home</Link></li>
        <li><Link href="/work">Selected work index</Link></li>
        <li><Link href="/sources">All sources pages</Link></li>
      </ul>
    </aside>
  );
}
