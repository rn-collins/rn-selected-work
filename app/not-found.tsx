import Link from "next/link";

export default function NotFound() {
  return (
    <section className="canonicalSection shell" aria-labelledby="not-found-title">
      <p className="eyebrow">Error 404</p>
      <h1 id="not-found-title">This page is not here.</h1>
      <p>It may have moved, or it may not be released yet.</p>
      <nav aria-label="Where next">
        <ul>
          <li><Link href="/work">Explore the work</Link></li>
          <li><Link href="/writing">Read the writing</Link></li>
          <li><Link href="/explore">Search the portfolio</Link></li>
        </ul>
      </nav>
    </section>
  );
}
