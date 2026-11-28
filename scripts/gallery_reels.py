#!/usr/bin/env python3
"""Rebuild data/gallery-reels.json for the Gallery's screening room and Every-app room (RN, Nov 27, 2026).

    python3 scripts/gallery_reels.py VIDEO_URLS SOUND_CREDITS SLIDESHOW_PLAN AAN_POST_PAGES

VIDEO_URLS: aan-studio/site-data/reel-video-urls.json (the builder's 720 px web copies on Vercel Blob).
SOUND_CREDITS: aan-studio/site-data/reel-sound-credits.json (only status "used" credits are shown).
SLIDESHOW_PLAN: aan-studio/ddw/slideshow_plan.json (each slideshow Reel's own release date).
AAN_POST_PAGES: rn-ask-a-neuroscientist/data/post-pages.json (post titles).
Rerun whenever the builder sends a new commit of reel-video-urls.json.
"""
import json, pathlib, re, sys

V, C, S, P = (json.loads(pathlib.Path(a).read_text()) for a in sys.argv[1:5])
C, S, P = C["posts"], {r["id"]: r for r in S["reels"]}, {p["id"]: p for p in P["posts"]}


def short(t):
    if t.startswith("Word of the week"):
        return t  # "Word of the week: receptor" keeps its word
    m = re.match(r"(.+?\?)", t)
    return (m.group(1) if m else t.split(":")[0]).strip()


out = []
for pid, v in sorted(V.items(), key=lambda kv: kv[1]["date"]):
    # Word-of-the-week posts have no /p/ page, so their title comes from the slideshow plan.
    title = short(P.get(pid, {}).get("title") or S.get(pid, {}).get("title") or pid)
    for lane, label in (("reel", "Reel"), ("slideshow", "Slideshow Reel")):
        if lane not in v:
            continue
        c = (C.get(pid) or {}).get(lane) or {}
        date = v["date"] if lane == "reel" else (S.get(pid, {}).get("date") or v["date"])
        out.append({"id": pid, "lane": lane, "date": date, "title": title,
                    "medium": f"2026 · {label}, {round(v[lane]['seconds'])} s, sound on", "src": v[lane]["url"],
                    "poster": "", "music": c.get("credit", "") if c.get("status") == "used" else ""})
about = ("Ask a Neuroscientist Reels for the Gallery's screening room and Every-app room, built by scripts/gallery_reels.py "
         "from aan-studio/site-data/reel-video-urls.json (web copies on Vercel Blob), reel-sound-credits.json (music, "
         "status used only) and ddw/slideshow_plan.json (slideshow dates). Each shows from its own date in Hawaii.")
pathlib.Path(__file__).resolve().parent.parent.joinpath("data/gallery-reels.json").write_text(
    json.dumps({"about": about, "reels": out}, indent=1, ensure_ascii=False) + "\n")
print(f"{len(out)} videos, {sum(1 for o in out if o['music'])} with music credits")
