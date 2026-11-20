"use client";
import { useEffect, useRef } from "react";

// Lights the page dot of the home screen in view. Without JavaScript the dots still jump between screens.
export function ScreenDots({ className, items }: { className?: string; items: { href: string; label: string }[] }) {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const nav = ref.current;
    if (!nav) return;
    const links = [...nav.querySelectorAll("a")];
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (!e.isIntersecting) continue;
          links.forEach((a) => a.toggleAttribute("aria-current", a.getAttribute("href") === `#${e.target.id}`));
        }
      },
      { threshold: 0.6 },
    );
    items.forEach((it) => {
      const el = document.querySelector(it.href);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, [items]);
  return (
    <nav ref={ref} className={className} aria-label="Home screens">
      {items.map((it, i) => (
        <a key={it.href} href={it.href} aria-label={it.label} {...(i === 0 ? { "aria-current": true } : {})} />
      ))}
    </nav>
  );
}
