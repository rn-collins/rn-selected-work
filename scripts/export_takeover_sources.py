"""Write the sources pages data for the takeover packages (Polymath PM-RNC, museum, film).

    python3 scripts/export_takeover_sources.py /path/to/RN_COLLINS_v3.19

Reads, from RN_COLLINS_v3.19/docs:
  polymath_packages/PM-RNC-*.md          -> data/sources-polymath-rnc.json   /sources/polymath/pm-rnc-NN
  museum_packages/MUS-*.md (not HOLDS)   -> data/sources-museum.json         /sources/museum/mus-xxx-NN
  obama_film/posts/*.md and
  obama_film/series_posts/{BR,OH,HF2}-*  -> data/sources-film.json           /sources/film/<id>
  RW3000_master_calendar_Oct2026-Mar2027.xlsx for each post's first feed date (a slot line in the package
  is the fallback; a package with neither gets date "" and is not listed until it has one).

The reference lists themselves (research, other, images) are in scripts/takeover-references.json: one entry per
package, taken only from the package's dossier, its slide table and (museum) the image credits copied from each
image's own page. This script adds the page shell: title, series, origin link, the partnership line the package
carries, and the posting date. It never writes the client line (components/sources-detail.tsx renders it on every
page) and fails on any dash, exclamation point, email address or internal note in the output.
"""
import datetime
import glob
import json
import os
import re
import sys

HERE = os.path.dirname(os.path.abspath(__file__))
REPO = os.path.dirname(HERE)
HOST = "rn-selected-work.vercel.app"

MUSEUM_NOTE = "Exhibit in Progress is RN Collins' series in partnership with the Inspiration Hawaiʻi Museum."
FILM_DISCLOSURE = "Disclosure: I'm a partner on Barack Obama: Made in Hawaii and will be paid for its post-production."
MUSEUM_ORIGIN = {"kind": "main", "label": "Inspiration Hawaiʻi Museum", "url": "https://inspirationhawaiimuseum.org"}
FILM_ORIGIN = {"kind": "main", "label": "Barack Obama: Made in Hawaii, the film's site", "url": "https://obamahawaii.com"}
SERIES = {"FC": "Barack Obama: Made in Hawaii", "PC": "Barack Obama: Made in Hawaii", "HF": "Hawaiʻi Firsts",
          "HF2": "Hawaiʻi Firsts, season 2", "BR": "Behind the research", "OH": "Obama's Honolulu"}

BAD = re.compile(r"[–—!×]|[\w.+-]+@[\w-]+\.[\w.]+|cultural review|consent|\bverified\b|claude|approval|"
                 r"permission|\bfetch|mirror|re-checked|no people|rights cleared", re.I)


def packages(docs):
    groups = [("polymath", "polymath_packages/PM-RNC-*.md"), ("museum", "museum_packages/MUS-*.md"),
              ("film", "obama_film/posts/*.md"), ("film", "obama_film/series_posts/*-[0-9]*_*.md")]
    for account, pattern in groups:
        for f in sorted(glob.glob(os.path.join(docs, pattern))):
            pid = os.path.basename(f).split("_")[0]
            if pid == "MUS-HOLDS":
                continue
            yield account, pid, open(f, encoding="utf-8").read()


def calendar_dates(docs):
    path = os.path.join(docs, "RW3000_master_calendar_Oct2026-Mar2027.xlsx")
    try:
        import openpyxl
    except ImportError:
        sys.exit("needs openpyxl (pip install openpyxl) to read the master calendar")
    wb = openpyxl.load_workbook(path, read_only=True, data_only=True)
    return [(r[0].date(), r[3], str(r[4])) for r in wb["Master calendar"].iter_rows(min_row=2, values_only=True) if r[0]]


def first_date(pid, text, rows):
    rx = re.compile(r"(?<![\w-])" + re.escape(pid) + r"(?![\w-])")
    hits = [d for d, stream, item in rows if stream in ("Instagram", "Inspiration Museum") and rx.search(item)]
    m = re.match(r"MUS-EIP-(\d+)$", pid)
    if not hits and m:
        rx2 = re.compile(r"Exhibit in Progress %d\b" % int(m.group(1)))
        hits = [d for d, stream, item in rows if stream == "Inspiration Museum" and rx2.search(item)]
    if hits:
        return min(hits).isoformat()
    m = re.search(r"Slot: \w+ (\w+ \d+, \d{4})", text)
    return datetime.datetime.strptime(m.group(1), "%b %d, %Y").date().isoformat() if m else ""


def title_of(text):
    h1 = text.split("\n", 1)[0]
    return h1.split(" · ", 2)[2].strip() if h1.count(" · ") >= 2 else h1.lstrip("# ").strip()


def shell(account, pid, text):
    header = text.split("\n")[1]
    if account == "polymath":
        m = re.search(r"https://polymath-rn-collins\.beehiiv\.com/p/[\w-]+", header)
        origin = {"kind": "article", "label": "Read RN's full article in The Polymath", "url": m.group(0)} if m else None
        return "The Polymath", origin, None
    if account == "museum":
        return "Exhibit in Progress", MUSEUM_ORIGIN, MUSEUM_NOTE
    prefix = pid.split("-")[0]
    origin = FILM_ORIGIN if ("obamahawaii.com" in header) else None
    note = FILM_DISCLOSURE if FILM_DISCLOSURE in text else None
    return SERIES[prefix], origin, note


def main():
    if len(sys.argv) != 2:
        sys.exit(__doc__)
    docs = os.path.join(sys.argv[1], "docs")
    refs = {r["id"]: r for r in json.load(open(os.path.join(HERE, "takeover-references.json"), encoding="utf-8"))}
    rows = calendar_dates(docs)
    out = {"polymath": [], "museum": [], "film": []}
    problems = []
    for account, pid, text in packages(docs):
        r = refs.get(pid)
        if r is None:
            problems.append(f"{pid}: no entry in takeover-references.json")
            continue
        series, origin, note = shell(account, pid, text)
        post = {"slug": pid.lower(), "date": first_date(pid, text, rows), "id": pid, "title": title_of(text),
                "series": series, "origin": origin,
                "research": [{"label": x["label"], "url": x.get("url", "")} for x in r.get("research", [])],
                "other": [{"label": x["label"], "url": x.get("url", "")} for x in r.get("other", [])],
                "images": [{"where": x["where"], "what": x["what"], "credit": x.get("credit", ""), "url": x.get("url", ""),
                            "card": False} for x in r.get("images", [])]}
        if note:
            post["note"] = note
        # The origin link is not repeated in the lists below it.
        if origin:
            for key in ("research", "other"):
                post[key] = [x for x in post[key] if x["url"].rstrip("/") != origin["url"].rstrip("/")]
        # Checked: every text a reader sees (not the addresses, which are the sources' own). The one allowed use of
        # "mirror" is the title of the Honolulu Star-Advertiser column "Rearview Mirror" (MUS-SPT-03).
        texts = [post["title"], post["series"], post.get("note") or ""]
        texts += [x["label"] for k in ("research", "other") for x in post[k]]
        texts += [x[f] for x in post["images"] for f in ("where", "what", "credit")]
        blob = "\n".join(texts).replace('"Rearview Mirror"', '"Rearview"')
        for m in BAD.finditer(blob):
            problems.append(f"{pid}: {m.group(0)!r}")
        for key in ("research", "other", "images"):
            for x in post[key]:
                if x["url"] and not re.match(r"https?://", x["url"]):
                    problems.append(f"{pid}: bad url {x['url']}")
        out[account].append(post)
    if problems:
        sys.exit("refused:\n  " + "\n  ".join(problems))
    today = datetime.date.today().isoformat()
    names = {"polymath": "sources-polymath-rnc.json", "museum": "sources-museum.json", "film": "sources-film.json"}
    for account, posts in out.items():
        path = os.path.join(REPO, "data", names[account])
        with open(path, "w", encoding="utf-8") as fh:
            json.dump({"generated": today, "host": HOST, "posts": posts}, fh, ensure_ascii=False, indent=1)
            fh.write("\n")
        print(f"{names[account]}: {len(posts)} pages")


if __name__ == "__main__":
    main()
