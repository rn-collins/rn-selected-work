"use client";

// Shown only if the site itself fails. It replaces the root layout, so it carries its own favicon links
// (RN's rule: every page has a favicon) and a plain way back.
export default function GlobalError({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <html lang="en">
      <head>
        <title>Something went wrong · RN Selected Work</title>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon-v2.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body style={{ fontFamily: "system-ui, sans-serif", background: "#f3efe4", color: "#17251d", padding: "48px 24px" }}>
        <h1>Something went wrong.</h1>
        <p><button onClick={() => reset()} style={{ minHeight: 44, padding: "0 18px" }}>Try again</button> or go to the <a href="/">home page</a>.</p>
      </body>
    </html>
  );
}
