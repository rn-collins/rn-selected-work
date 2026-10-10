"""Export RN Collins' long-form essays to data/essays-<account>.json for the /essays pages.

    python3 scripts/export_essays.py /path/to/content-studio            # every account
    python3 scripts/export_essays.py /path/to/content-studio ddw26 dda  # some accounts

The content-studio folder holds render-kit/article_registry.json. Each registry entry whose long_form.kind is
"unpublished_essay" and whose long_form.essay_path points at an existing article.json is exported, with the
essay text read from the article.md beside it. The entry's sources_slug gives the account and the id, which are the
same account and id as the matching sources page (/sources/<account>/<id>). An entry whose essay file does not exist
yet (the DDW 27 essays) is reported as pending; run the script again once the file lands.

Read into the output: title, standfirst (subtitle), page title and description, byline, date (only when the essay has
one), the body text with its plain-English headings, and the numbered sources (label and address only).
Never read: the sources' working fields (publisher, dates, what each source was used for), the claim and paragraph
traces, review notes and unresolved items.
Source labels get the same cleaning as the sources pages. A source whose address is not a public page (contact,
press kit, download, API, non-http) stays in the numbered list as plain text without a link, so that the numbers in the
text still match.
"""
import datetime
import json
import os
import re
import sys

sys.dont_write_bytecode = True
HERE = os.path.dirname(os.path.abspath(__file__))
OUT = os.path.dirname(HERE)
ACCOUNTS = ["ddw26", "venues", "makers", "editions", "dda", "ddw27"]

# --- cleaning rules shared with the sources pages ---------------------------------------------------------
DROP_URL = re.compile(r"/contact|/download$|programme\?page=|/press2?$|\.zip($|\?)", re.I)
DROP_LABEL = re.compile(r"\bcontact\b|press information|programme index|not opened|refused", re.I)
NOT_PUBLIC_HOST = re.compile(r"^https?://(?:localhost|127\.|10\.|192\.168\.|drive\.google\.|docs\.google\.|[^/]*\.local[/:])|/owner(/|$)|canva\.com/design|/api/", re.I)
NOTE = re.compile(
    r"\s*[(;,.]?\s*(\(?(app-api|site\.ddw\.nl|ddw\.nl) mirror\)?|\(app-api(\.ddw\.nl)?\)|companion article[^.]*\.?|read as [^.)]*|read on the \S+ mirror|"
    r"\(?original robots-blocked[^)]*\)?|\(?no email shown[^)]*\)?|\(?per the fetch\)?|page date given by the fetch tool[^.]*\.?|"
    r"\(read [A-Z][a-z]{2} \d+;[^)]*\)|\(opened via [^)]*\)|\(inhoudsindicatie only[^)]*\)|\(contact form[^)]*\)|"
    r"\(earlier round[^)]*\)|\(citation via [^)]*\)?)", re.I)
EXTRA_NOTE = re.compile(r"\s*[(;,]\s*(?:fetched|opened|read|re-?checked|checked|accessed)\b[^()]*\)?|\s*\((?:page-text|raw page)[^)]*\)", re.I)
PURPOSE_NOTE = re.compile(r"\s*\([^()]*(?:page text read|data feed)[^()]*\)|,\s*read (?:from|on|via) [^()]*(?=\))|\s*\((?:pointers? only[^)]*|social handles|hashtag check|[^()]*(?:javascript challenge|not circumvented|robots)[^()]*)\)|,\s*see S\d+\b", re.I)
EC_API = re.compile(r"^https://ec\.europa\.eu/commission/presscorner/api/files/document/print/(\w+)/(\w+)(?:/.*)?$")


def clean(s):
    return re.sub(r"\s+", " ", str(s or "")).strip()


def tidy_label(l):
    l = re.sub(r"\(abstract read on [^)]*\)", "(abstract)", clean(l))
    l = l.replace("registry mirror)", "registry)")
    l = PURPOSE_NOTE.sub("", l)
    l = re.sub(r"\b(secondary )?mirror\b", "copy", l, flags=re.I)
    l = NOTE.sub("", l)
    l = EXTRA_NOTE.sub("", l).strip(" ;,")
    return re.sub(r"\s+([.,;])", r"\1", l)


def tidy_url(u):
    u = clean(u).replace("https://app-api.ddw.nl/", "https://ddw.nl/")
    u = EC_API.sub(r"https://ec.europa.eu/commission/presscorner/detail/\1/\2", u)
    return re.sub(r"^https?://archive\.org/download/([^/]+)/.*$", r"https://archive.org/details/\1", u)


def public_link(label, url):
    return url.startswith(("http://", "https://")) and not NOT_PUBLIC_HOST.search(url) and not DROP_URL.search(url) and not DROP_LABEL.search(label)


# --- article.md -> blocks ---------------------------------------------------------------------------------
CITE = re.compile(r"(?:\[S\d+\])+")
TOKEN = re.compile(r"(\*\*[^*]+\*\*)|((?:\[S\d+\])+)")


def inline(text):
    """Runs: ["t", text] plain, ["b", text] bold, ["c", ["S1", "S2"]] a group of adjacent citations."""
    runs, pos = [], 0
    for m in TOKEN.finditer(text):
        if m.start() > pos:
            runs.append(["t", text[pos:m.start()]])
        if m.group(1):
            runs.append(["b", m.group(1)[2:-2]])
        else:
            runs.append(["c", re.findall(r"S\d+", m.group(2))])
        pos = m.end()
    if pos < len(text):
        runs.append(["t", text[pos:]])
    # a space left before a citation group stays in the text run; trim a trailing space only at the end of a block
    return runs


def split_row(line):
    return [c.strip() for c in line.strip().strip("|").split("|")]


def parse_body(md):
    lines = md.split("\n")
    # drop the "# Title" line, the italic standfirst and the byline: those come from article.json
    body_start = 0
    for i, ln in enumerate(lines):
        if ln.strip() == "By RN Collins":
            body_start = i + 1
            break
    end = next((i for i, ln in enumerate(lines) if ln.strip() == "## Sources"), len(lines))
    lines = lines[body_start:end]
    blocks, i = [], 0
    while i < len(lines):
        ln = lines[i]
        if not ln.strip():
            i += 1
        elif ln.startswith("## "):
            blocks.append({"t": "h2", "x": clean(ln[3:])})
            i += 1
        elif ln.startswith("### "):
            blocks.append({"t": "h3", "x": clean(ln[4:])})
            i += 1
        elif ln.startswith("|"):
            rows = []
            while i < len(lines) and lines[i].startswith("|"):
                rows.append(lines[i])
                i += 1
            cells = [split_row(r) for r in rows if not re.fullmatch(r"\|?\s*:?-+:?\s*(\|\s*:?-+:?\s*)*\|?", r.strip())]
            blocks.append({"t": "table", "head": [inline(c) for c in cells[0]], "rows": [[inline(c) for c in r] for r in cells[1:]]})
        elif re.match(r"^[-*] ", ln):
            items = []
            while i < len(lines) and re.match(r"^[-*] ", lines[i]):
                items.append(inline(lines[i][2:].strip()))
                i += 1
            blocks.append({"t": "ul", "items": items})
        elif re.match(r"^\d+\. ", ln):
            items = []
            while i < len(lines) and re.match(r"^\d+\. ", lines[i]):
                items.append(inline(re.sub(r"^\d+\. ", "", lines[i]).strip()))
                i += 1
            blocks.append({"t": "ol", "items": items})
        else:
            para = [ln.strip()]
            i += 1
            while i < len(lines) and lines[i].strip() and not re.match(r"^(#|\||[-*] |\d+\. )", lines[i]):
                para.append(lines[i].strip())
                i += 1
            blocks.append({"t": "p", "r": inline(" ".join(para))})
    return blocks


def load(p):
    with open(p, encoding="utf-8") as f:
        return json.load(f)


def export_one(entry, staging, source_slugs, problems):
    lf = entry["long_form"]
    art_path = os.path.join(staging, lf["essay_path"])
    art = load(art_path)
    md = open(os.path.join(os.path.dirname(art_path), "article.md"), encoding="utf-8").read()
    ss = entry["sources_slug"]
    if ss["slug"] not in source_slugs.get(ss["account"], set()):
        problems.append(f"{entry['id']}: no sources page {ss['path']}")
        return None
    blocks = parse_body(md)
    sources, dups = [], {}
    for s in art["sources"]:
        label = tidy_label(s.get("label") or "")
        url = tidy_url(s.get("url"))
        sid = s["id"]
        if any(x["id"] == sid for x in sources):
            # two entries share one id in the essay file: keep both, give the later one its own anchor, and let
            # every citation of that id link to both entries
            n = len([x for x in sources if x["id"].split("~")[0] == sid]) + 1
            dups.setdefault(sid, [sid]).append(f"{sid}~{n}")
            sid = f"{sid}~{n}"
            problems.append(f"warning {entry['id']}: source id {s['id']} appears twice in the essay file; citations of it link to both entries")
        sources.append({"id": sid, "label": label, "url": url if public_link(clean(s.get("label")), url) else None})
    known = {s["id"] for s in sources}
    for b in blocks:
        runs = []
        if b["t"] in ("p",):
            runs = b["r"]
        elif b["t"] in ("ul", "ol"):
            runs = [r for it in b["items"] for r in it]
        elif b["t"] == "table":
            runs = [r for c in b["head"] for r in c] + [r for row in b["rows"] for c in row for r in c]
        for r in runs:
            if r[0] == "c":
                r[1] = [y for x in r[1] for y in dups.get(x, [x])]
                bad = [x for x in r[1] if x not in known]
                if bad:
                    problems.append(f"{entry['id']}: citation to unknown source {bad}")
                    r[1] = [x for x in r[1] if x in known]
    date = art.get("date")
    if date is not None and not re.fullmatch(r"\d{4}-\d{2}-\d{2}", str(date)):
        problems.append(f"{entry['id']}: unexpected date {date!r}")
        date = None
    return {
        "id": ss["slug"], "registryId": entry["id"], "title": clean(art["title"]), "subtitle": clean(art.get("subtitle")),
        "seoTitle": clean(art.get("seo_title")) or clean(art["title"]), "description": clean(art.get("seo_description")),
        "byline": clean(art.get("byline")) or "RN Collins", "date": date, "words": int(art.get("word_count") or 0),
        "blocks": blocks, "sources": sources,
    }


def main(staging, accounts):
    reg = load(os.path.join(staging, "render-kit", "article_registry.json"))
    source_slugs = {}
    for a in ACCOUNTS:
        p = os.path.join(OUT, "data", f"sources-{a}.json")
        source_slugs[a] = {x["slug"] for x in load(p)["posts"]} if os.path.exists(p) else set()
    by_acc = {a: [] for a in ACCOUNTS}
    pending, problems = [], []
    for e in reg["entries"]:
        lf = e["long_form"]
        if lf.get("kind") != "unpublished_essay" or not lf.get("essay_path"):
            continue
        acc = e["sources_slug"]["account"]
        if acc not in by_acc:
            problems.append(f"{e['id']}: unknown account {acc}")
            continue
        art = os.path.join(staging, lf["essay_path"])
        if not (art.endswith("article.json") and os.path.isfile(art) and os.path.isfile(os.path.join(os.path.dirname(art), "article.md"))):
            pending.append(e["id"])
            continue
        post = export_one(e, staging, source_slugs, problems)
        if post:
            by_acc[acc].append(post)
    for acc in accounts:
        posts = by_acc[acc]

        def key(p):
            return (int(p["id"][1:]) if acc == "ddw26" else 0, p["id"])
        posts.sort(key=key)
        with open(os.path.join(OUT, "data", f"essays-{acc}.json"), "w", encoding="utf-8") as f:
            json.dump({"generated": datetime.date.today().isoformat(), "posts": posts}, f, ensure_ascii=False, separators=(",", ":"))
            f.write("\n")
        print(f"{acc}: {len(posts)} essays")
    print(f"pending (essay file not there yet): {len(pending)}")
    for p in problems:
        print("problem:", p)
    return 1 if any(not p.startswith("warning") for p in problems) else 0


if __name__ == "__main__":
    if len(sys.argv) < 2:
        sys.exit(__doc__)
    accs = sys.argv[2:] or ACCOUNTS
    sys.exit(main(os.path.abspath(sys.argv[1]), accs))
