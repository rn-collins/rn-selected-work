"use client";
import { useEffect, useRef } from "react";

// Motion stickers on the home-screen wallpaper (RN, Nov 20: "with A's draggable AND interactive with motion
// stickers"). Children marked data-sticker can be dragged (mouse, pen or finger); a quick tap plays a squash-and-spin
// and, if the sticker is a link, follows it after the animation. A drag never opens the link. Without JavaScript
// the stickers sit where they were placed and links still work. Reduced motion: no spin, links open at once.
export function StickerPlay({ children, className }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const layer = ref.current;
    if (!layer) return;
    const still = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let el: HTMLElement | null = null;
    let sx = 0, sy = 0, ox = 0, oy = 0, moved = false, z = 20;
    const down = (e: PointerEvent) => {
      const t = (e.target as HTMLElement).closest("[data-sticker]") as HTMLElement | null;
      if (!t) return;
      el = t;
      moved = false;
      sx = e.clientX;
      sy = e.clientY;
      ox = Number(t.dataset.x || 0);
      oy = Number(t.dataset.y || 0);
      t.style.zIndex = String(++z);
      t.setPointerCapture(e.pointerId);
      t.classList.add("held");
    };
    const move = (e: PointerEvent) => {
      if (!el) return;
      const dx = e.clientX - sx, dy = e.clientY - sy;
      if (!moved && Math.hypot(dx, dy) < 6) return;
      moved = true;
      el.dataset.x = String(ox + dx);
      el.dataset.y = String(oy + dy);
      el.style.translate = `${ox + dx}px ${oy + dy}px`;
    };
    const up = () => {
      if (!el) return;
      const t = el;
      t.classList.remove("held");
      el = null;
      if (moved || still) return;
      t.classList.remove("boing");
      void t.offsetWidth; // restart the animation
      t.classList.add("boing");
    };
    const click = (e: MouseEvent) => {
      const t = (e.target as HTMLElement).closest("[data-sticker]") as HTMLElement | null;
      if (!t) return;
      if (moved) {
        e.preventDefault();
        e.stopPropagation();
        moved = false;
        return;
      }
      const a = t.closest("a") as HTMLAnchorElement | null;
      if (a && !still) {
        // let the sticker finish its spin, then go
        e.preventDefault();
        setTimeout(() => { window.location.href = a.href; }, 420);
      }
    };
    layer.addEventListener("pointerdown", down);
    layer.addEventListener("pointermove", move);
    layer.addEventListener("pointerup", up);
    layer.addEventListener("pointercancel", up);
    layer.addEventListener("click", click, true);
    layer.classList.add("canPlay");
    return () => {
      layer.removeEventListener("pointerdown", down);
      layer.removeEventListener("pointermove", move);
      layer.removeEventListener("pointerup", up);
      layer.removeEventListener("pointercancel", up);
      layer.removeEventListener("click", click, true);
    };
  }, []);
  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
