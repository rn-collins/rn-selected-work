"""Export the DDW27 gallery links shown on the /sources/ddw27/<id> pages.

    python3 scripts/export_ddw27_gallery.py /path/to/RNC_SCHEDULE.json

Reads the studio schedule (ddw43_packages/RNC_SCHEDULE.json), keeps the rows whose id starts with "ddw-nl-",
and writes data/ddw27-gallery.json: one entry per row with the sources slug (the row id without "ddw-nl-"),
the gallery essay address and the posting date and time in Pacific/Honolulu. The gallery page for an essay
answers 404 until that posting time. A row whose sources_url does not end in its own slug is reported and left out.
"""
import json
import os
import re
import sys

GALLERY = "https://tech-from-here-netherlands-field-ki.vercel.app/gallery/"
SOURCES = "https://rn-selected-work.vercel.app/sources/ddw27/"
OUT = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), "data", "ddw27-gallery.json")


def main(schedule_path):
    rows = [r for r in json.load(open(schedule_path, encoding="utf-8")) if str(r.get("id", "")).startswith("ddw-nl-")]
    posts, problems = [], []
    for r in rows:
        slug = r["id"][len("ddw-nl-"):]
        if r.get("sources_url") != SOURCES + slug:
            problems.append(f"{r['id']}: sources_url {r.get('sources_url')!r} does not match {SOURCES + slug}")
            continue
        m = re.fullmatch(r"(\d{2}):(\d{2}) HST", r.get("time") or "")
        posts.append({
            "slug": slug,
            "gallery_url": GALLERY + slug,
            "posts_at": f"{r['date']}T{m.group(1)}:{m.group(2)}" if m and r.get("date") else "",
            "time_zone": "Pacific/Honolulu",
        })
    posts.sort(key=lambda p: (p["posts_at"], p["slug"]))
    with open(OUT, "w", encoding="utf-8") as f:
        json.dump({"gallery_host": GALLERY.split("/")[2], "posts": posts}, f, ensure_ascii=False, indent=1)
        f.write("\n")
    print(f"{len(posts)} gallery links -> {OUT}")
    for p in problems:
        print("  left out:", p)


if __name__ == "__main__":
    if len(sys.argv) != 2:
        sys.exit(__doc__)
    main(sys.argv[1])
