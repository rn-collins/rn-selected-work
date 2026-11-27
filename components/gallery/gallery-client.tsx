"use client";
import { useEffect } from "react";

// All the motion and interaction of the Gallery home. Nothing moves under prefers-reduced-motion, and sound plays
// only after the visitor presses "Sound off" to turn it on.
export function GalleryClient() {
  useEffect(() => {
    const root = document.querySelector<HTMLElement>(".gl");
    if (!root) return;
    const rm = matchMedia("(prefers-reduced-motion: reduce)").matches;
    const timers: number[] = [];
    const every = (f: () => void, ms: number) => timers.push(window.setInterval(f, ms));

    // Sound switch and the five sounds.
    let soundOn = false;
    const sounds: Record<string, HTMLAudioElement> = {};
    const play = (name: string, vol = 0.35) => {
      if (!soundOn) return;
      const a = (sounds[name] ??= new Audio(`/gallery/sound/${name}.wav`));
      a.volume = vol; a.currentTime = 0; a.play().catch(() => {});
    };
    const snd = root.querySelector<HTMLButtonElement>(".snd");
    snd?.addEventListener("click", () => {
      soundOn = !soundOn; snd.setAttribute("aria-pressed", String(soundOn)); snd.textContent = soundOn ? "Sound on" : "Sound off";
      play("chime-clock-bell-01", 0.25);
      const tvv = root.querySelector<HTMLVideoElement>(".bigtv video"); if (tvv) { tvv.muted = !soundOn; if (soundOn) tvv.play().catch(() => {}); }
    });

    // Reveal on scroll, and the marker underline drawing in.
    const io = new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("on"); io.unobserve(e.target); } }), { threshold: 0.15 });
    root.querySelectorAll(".reveal,.x").forEach((el) => io.observe(el));

    // Live timecode on the lobby TV.
    const t0 = Date.now();
    const tcs = root.querySelectorAll(".tc");
    every(() => { const ms = Date.now() - t0, s = Math.floor(ms / 1000) + 5, f = Math.floor(ms / 40) % 25;
      tcs.forEach((el) => (el.textContent = `00:${String(Math.floor(s / 60)).padStart(2, "0")}:${String(s % 60).padStart(2, "0")}:${String(f).padStart(2, "0")}`)); }, 40);

    // Carousels swipe themselves; tap for the next slide.
    root.querySelectorAll<HTMLElement>(".phone").forEach((ph, k) => {
      const tr = ph.querySelector<HTMLElement>(".track > div"); if (!tr) return; // the lobby's video phone has no slides
      const n = tr.children.length, dots = ph.querySelectorAll(".dots i");
      let i = 0;
      const go = () => { tr.style.transform = `translateX(${-100 * i}%)`; dots.forEach((d, j) => d.classList.toggle("a", j === i)); };
      go();
      if (!rm) timers.push(window.setTimeout(() => every(() => { i = (i + 1) % n; go(); }, 2600), k * 700));
      ph.addEventListener("click", () => { i = (i + 1) % n; go(); play("page-turn-01", 0.4); });
    });

    // Paint follows the pointer in the lobby.
    const cv = root.querySelector<HTMLCanvasElement>("#paint"), lob = root.querySelector<HTMLElement>(".lobby");
    let onMove: ((e: PointerEvent) => void) | null = null;
    if (cv && lob && !rm) {
      const c = cv.getContext("2d")!, cols = ["#17251d", "#ff826d", "#abc9ff", "#ffffff"];
      let last = 0, drops = 0;
      const fit = () => { cv.width = lob.offsetWidth; cv.height = lob.offsetHeight; };
      fit(); addEventListener("resize", fit);
      onMove = (e) => {
        const now = performance.now(); if (now - last < 45 || drops > 900) return; last = now; drops++;
        const r = lob.getBoundingClientRect(), x = e.clientX - r.left, y = e.clientY - r.top, big = Math.random() * 7 + 2;
        c.fillStyle = cols[drops % 4]; c.beginPath(); c.arc(x, y, big, 0, 7); c.fill();
        for (let j = 0; j < 5; j++) { c.beginPath(); c.arc(x + (Math.random() - 0.5) * big * 7, y + (Math.random() - 0.5) * big * 7, Math.random() * 2.2 + 0.4, 0, 7); c.fill(); }
      };
      lob.addEventListener("pointermove", onMove);
    }

    // TIL typewriter.
    const box = root.querySelector<HTMLElement>(".tilbox");
    if (box) {
      const tils: [string, string][] = JSON.parse(box.dataset.tils || "[]");
      const tt = box.querySelector<HTMLElement>(".t span")!, ts = box.querySelector<HTMLElement>(".src")!;
      let ti = 0, started = false;
      const type = () => {
        const [txt, src] = tils[ti]; ts.textContent = "";
        if (rm) { tt.textContent = txt; ts.textContent = "Source: " + src; return; }
        let n = 0; tt.textContent = "";
        const iv = window.setInterval(() => {
          tt.textContent = txt.slice(0, ++n); if (n % 3 === 0) play("keys-typing-01", 0.12);
          if (n >= txt.length) { clearInterval(iv); ts.textContent = "Source: " + src; timers.push(window.setTimeout(() => { ti = (ti + 1) % tils.length; type(); }, 3400)); }
        }, 30);
        timers.push(iv);
      };
      new IntersectionObserver((es, o) => { if (es[0].isIntersecting && !started) { started = true; type(); o.disconnect(); } }).observe(box);
    }

    // Warhol grid: tap to swap the colours (and it swaps by itself).
    const wh = root.querySelector<HTMLElement>(".warhol");
    if (wh) { wh.addEventListener("click", () => wh.classList.toggle("s1")); if (!rm) every(() => wh.classList.toggle("s1"), 3000); }

    // Guess games.
    root.querySelectorAll<HTMLElement>(".game").forEach((g) => {
      const ans = g.querySelector<HTMLElement>(".ans")!, verdict = g.querySelector<HTMLElement>(".verdict")!;
      const show = (msg: string) => { ans.hidden = false; verdict.textContent = msg; g.classList.add("done"); play("chime-clock-bell-01", 0.3); };
      if (g.dataset.game === "slider") {
        const inp = g.querySelector<HTMLInputElement>("input")!, out = g.querySelector("output")!, real = Number(g.dataset.answer);
        inp.addEventListener("input", () => { out.textContent = inp.value; });
        g.querySelector("button")!.addEventListener("click", () => {
          const d = Math.round((Number(inp.value) - real) * 10) / 10;
          show(Math.abs(d) <= 3 ? `You said ${inp.value} min. Close: it was ${real}.` : `You said ${inp.value} min. It was ${real}, so you were ${Math.abs(d)} min ${d > 0 ? "over" : "under"}.`);
        });
      } else {
        g.querySelectorAll<HTMLButtonElement>("[data-pick]").forEach((b) => b.addEventListener("click", () => {
          const right = b.dataset.pick === g.dataset.right;
          show(right ? "You got it. The bigger table pulled more people in." : "Most people guess that. The bigger table pulled more people in.");
        }));
      }
    });

    // Screening room: channels with static between them.
    const scr = root.querySelector<HTMLElement>(".bigtv .screen");
    if (scr) {
      const chans: [string, string, string, string, string][] = JSON.parse(scr.dataset.channels || "[]");
      const st = scr.querySelector<HTMLElement>(".static")!, cap = scr.querySelector<HTMLElement>(".cap")!, chn = scr.querySelector<HTMLElement>(".ch")!;
      const kn = root.querySelector<HTMLElement>(".chbtn .knob");
      let ci = 0, rot = 0;
      const tune = (i: number) => {
        ci = (i + chans.length) % chans.length; rot += 45; if (kn) kn.style.transform = `rotate(${rot}deg)`;
        st.classList.remove("go"); void st.offsetWidth; st.classList.add("go"); play("click-rotary-dial-01", 0.5);
        window.setTimeout(() => {
          const [kind, src, title, poster, music] = chans[ci]; const mu = root.querySelector<HTMLElement>(".music"); if (mu) mu.textContent = music;
          const old = scr.querySelector("video,img"); const el = kind === "video" ? document.createElement("video") : document.createElement("img");
          if (el instanceof HTMLVideoElement) { el.muted = !soundOn; el.playsInline = true; el.loop = true; el.autoplay = !rm; if (poster) el.poster = poster; }
          el.src = src; old?.replaceWith(el); if (el instanceof HTMLVideoElement && !rm) el.play().catch(() => {}); cap.textContent = title; chn.textContent = "CH " + String(ci + 3).padStart(2, "0");
        }, 140);
      };
      root.querySelector(".chbtn")?.addEventListener("click", () => tune(ci + 1));
      root.querySelectorAll<HTMLElement>(".mini").forEach((m) => m.addEventListener("click", () => {
        tune(Number(m.dataset.ch)); root.querySelector(".bigtv")?.scrollIntoView({ behavior: rm ? "auto" : "smooth", block: "center" });
      }));
      new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting) play("advance-film-projector-01", 0.2); }), { threshold: 0.5 }).observe(scr);
      // React leaves the muted attribute off server HTML, so browsers refuse autoplay until it is set here.
      root.querySelectorAll("video").forEach((v) => { v.muted = true; if (!rm && (v.closest(".bigtv") || v.classList.contains("howvid"))) v.play().catch(() => {}); });
      if (rm) scr.querySelector("video")?.pause();
    }

    // Every-app room: each phone's video plays only while it's on screen.
    const appIo = new IntersectionObserver((es) => es.forEach((e) => {
      const v = e.target as HTMLVideoElement; v.muted = true;
      if (e.isIntersecting && !rm) v.play().catch(() => {}); else v.pause();
    }), { threshold: 0.4 });
    root.querySelectorAll("video.appv").forEach((v) => appIo.observe(v));

    // Zines rustle on hover.
    root.querySelectorAll(".rack a").forEach((a) => a.addEventListener("pointerenter", () => play("page-turn-01", 0.25)));

    return () => { timers.forEach((t) => { clearInterval(t); clearTimeout(t); }); io.disconnect(); appIo.disconnect(); if (lob && onMove) lob.removeEventListener("pointermove", onMove); };
  }, []);
  return null;
}
