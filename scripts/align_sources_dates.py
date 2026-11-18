#!/usr/bin/env python3
"""Align the go-live date of every RN Collins sources page with RNC_SCHEDULE.json.

Run from the root of rn-selected-work:
  python3 scripts/align_sources_dates.py /path/to/RNC_SCHEDULE.json            dry run: print the plan
  python3 scripts/align_sources_dates.py /path/to/RNC_SCHEDULE.json --write    edit data/sources-*.json, then rerun
                                                                               python3 scripts/sync_releases.py

Rule (RN, Nov 7 and Nov 16): a sources page goes live on the posting date of the first post that links to it; an undated
post leaves its page hidden. A page shared by a repost (tfh-hi-c14-01-run2 and -04-run2) follows its earliest post.
By default a page that is already public and is not film or museum keeps its public date (no link rot for posts that
are already out), and that includes a public page whose only rows are now undated (archived); pass --retire-live to
move or hide those too. Film and museum pages are always moved: under RN's Nov 16 rule
they run Apr 30 to Sep 28, 2027 and none may be public before then.
Does not touch aan-sources.json, aan-f, psychonaut-bookworm or any page that has no schedule row.
Each file keeps its own JSON layout (indent and final newline), so only the changed dates show in a diff.
"""
import json, pathlib, sys, collections, datetime

ROOT = pathlib.Path(__file__).resolve().parent.parent
DATA = ROOT / "data"
BASE = "https://rn-selected-work.vercel.app/sources/"
FILES = {"ioo": ["ioo", "ioo-site"], "polymath": ["polymath", "polymath-rnc"]}
ALWAYS_MOVE = {"film", "museum"}
write, retire_live = "--write" in sys.argv, "--retire-live" in sys.argv
today = datetime.datetime.now(datetime.timezone(datetime.timedelta(hours=-10))).date().isoformat()


def dump_like(original, data):
    """Serialize data with the same indent and trailing newline as the original text."""
    indent = 1
    for line in original.splitlines()[1:]:
        stripped = line.lstrip(" ")
        if stripped:
            indent = len(line) - len(stripped)
            break
    text = json.dumps(data, indent=indent, ensure_ascii=False)
    return text + "\n" if original.endswith("\n") else text


sched = json.loads(pathlib.Path(sys.argv[1]).read_text())
want = collections.defaultdict(list)          # page id -> posting dates of every row that links to it
for r in sched:
    u = r.get("sources_url") or ""
    if u.startswith(BASE):
        want[u[len(BASE):]].append(r.get("date") or "")
target = {pid: (min(d for d in ds if d) if any(ds) else "") for pid, ds in want.items()}

changes, kept_live, unscheduled = [], [], []
for acct in sorted({p.split("/")[0] for p in target}):
    for name in FILES.get(acct, [acct]):
        f = DATA / f"sources-{name}.json"
        if not f.exists():
            continue
        original = f.read_text()
        j = json.loads(original)
        for post in j["posts"]:
            pid = f"{acct}/{post['slug']}"
            if pid not in target:
                unscheduled.append(pid); continue
            new, old = target[pid], post["date"]
            if new == old:
                continue
            if not retire_live and acct not in ALWAYS_MOVE and old and old <= today and (new > old or not new):
                kept_live.append((pid, old, new)); continue
            changes.append((pid, old, new)); post["date"] = new
        if write:
            text = dump_like(original, j)
            if text != original:
                f.write_text(text)

print(f"{len(changes)} dates changed, {len(kept_live)} already-public pages left alone, {len(unscheduled)} pages in these accounts with no schedule row")
for c in changes: print("  set", *c)
for c in kept_live: print("  kept live", *c)
if not write: print("dry run: nothing written")
