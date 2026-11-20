"use client";
import { useEffect, useRef } from "react";

// Progressive enhancement for the sticker board: with JavaScript, any child marked data-drag can be dragged (mouse,
// pen or finger) and a quick tap still follows its link; a real drag does not. Without JavaScript the stickers stay
// where the server placed them and work as plain links. Respects reduced motion (no throw).
export function DragBoard({ children, className }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const board = ref.current;
    if (!board) return;
    let el: HTMLElement | null = null;
    let sx = 0, sy = 0, ox = 0, oy = 0, moved = false, z = 10;
    const down = (e: PointerEvent) => {
      const t = (e.target as HTMLElement).closest("[data-drag]") as HTMLElement | null;
      if (!t) return;
      el = t;
      moved = false;
      sx = e.clientX;
      sy = e.clientY;
      ox = Number(t.dataset.x || 0);
      oy = Number(t.dataset.y || 0);
      t.style.zIndex = String(++z);
      t.setPointerCapture(e.pointerId);
    };
    const move = (e: PointerEvent) => {
      if (!el) return;
      const dx = e.clientX - sx, dy = e.clientY - sy;
      if (!moved && Math.hypot(dx, dy) < 6) return;
      moved = true;
      el.dataset.x = String(ox + dx);
      el.dataset.y = String(oy + dy);
      el.style.translate = `${ox + dx}px ${oy + dy}px`;
      el.classList.add("dragging");
    };
    const up = () => {
      if (el) el.classList.remove("dragging");
      el = null;
    };
    // A drag must not also open the link.
    const click = (e: MouseEvent) => {
      if (moved) {
        e.preventDefault();
        e.stopPropagation();
        moved = false;
      }
    };
    board.addEventListener("pointerdown", down);
    board.addEventListener("pointermove", move);
    board.addEventListener("pointerup", up);
    board.addEventListener("pointercancel", up);
    board.addEventListener("click", click, true);
    board.classList.add("canDrag");
    return () => {
      board.removeEventListener("pointerdown", down);
      board.removeEventListener("pointermove", move);
      board.removeEventListener("pointerup", up);
      board.removeEventListener("pointercancel", up);
      board.removeEventListener("click", click, true);
    };
  }, []);
  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
