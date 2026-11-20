"use client";
import { useEffect, useState } from "react";

// The phone's status-bar clock: the VISITOR's own local time, never RN's (location-delay rule). Without JavaScript it
// shows "RN", like a carrier name.
export function Clock() {
  const [t, setT] = useState("");
  useEffect(() => {
    const tick = () => setT(new Date().toLocaleTimeString([], { hour: "numeric", minute: "2-digit" }));
    tick();
    const id = setInterval(tick, 15000);
    return () => clearInterval(id);
  }, []);
  return <span suppressHydrationWarning>{t || "RN"}</span>;
}
