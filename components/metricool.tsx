"use client";
// Metricool web analytics, RN Collins brand (RN, Nov 22, 2026). Metricool's standard cookieless tracker: be.js sends the
// page URL, window size and referrer to tracker.metricool.com as an image request; it sets no cookies and uses no
// storage (checked in a real browser, Nov 22). Next.js changes pages without a reload, so each route change is counted
// here too. Jessica's /review pages are static files outside this layout and are not tracked.
import Script from "next/script";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

export const METRICOOL_HASH = "942052526b50735b83e53bcddc0da7be";

type BeTracker = { t: (a: Record<string, string>) => void };

export function Metricool() {
  const path = usePathname();
  const first = useRef(true);
  useEffect(() => {
    if (first.current) {
      first.current = false; // the first view is sent by the script's onLoad
      return;
    }
    const bt = (window as unknown as { beTracker?: BeTracker }).beTracker;
    bt?.t({ hash: METRICOOL_HASH });
  }, [path]);
  return (
    <>
      <Script
        id="metricool"
        src="https://tracker.metricool.com/resources/be.js"
        strategy="afterInteractive"
        onLoad={() => (window as unknown as { beTracker?: BeTracker }).beTracker?.t({ hash: METRICOOL_HASH })}
      />
      <noscript>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={`https://tracker.metricool.com/c3po.jpg?hash=${METRICOOL_HASH}`} width={1} height={1} alt="" />
      </noscript>
    </>
  );
}
