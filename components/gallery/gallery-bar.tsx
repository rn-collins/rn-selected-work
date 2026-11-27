import Link from "next/link";

// The Gallery's top band for inner pages (/about, /work-with-me), so they read as the same site as the home
// (stranger test, Nov 27). Same logo, menu and "Work with me" button as the home lobby.
export function GalleryBar({ room }: { room: string }) {
  return (
    <div className="glbar">
      <nav aria-label="Main">
        <Link className="glbar-logo" href="/">
          <svg viewBox="0 0 60 60" aria-hidden="true"><path d="M30 4 L36 24 L56 26 L40 38 L46 57 L30 46 L13 57 L19 38 L4 26 L24 24 Z" fill="none" stroke="currentColor" strokeWidth="4" strokeLinejoin="round" /></svg>
          RN Collins
        </Link>
        <span className="glbar-tix">
          <Link href="/work">Work</Link><Link href="/writing">Writing</Link><Link href="/about">About</Link><Link href="/archive">Archive</Link>
          <Link className="h" href="/work-with-me">Work with me</Link>
        </span>
      </nav>
      <p className="glbar-plaque">{room}</p>
    </div>
  );
}
