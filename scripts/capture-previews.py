#!/usr/bin/env python3
"""Build data/previews.json and public/previews/*.jpg for the build-page windows.

For every public build URL (data/builds.json, the six project URLs in
lib/portfolio.ts, and the NSAG hub) this script:
  1. reads the site's X-Frame-Options / CSP frame-ancestors headers to decide
     whether it may be embedded in an iframe on this site, and
  2. saves a 1440x900 screenshot (headless Chrome) used where embedding is blocked.

Usage: python3 scripts/capture-previews.py [--shots DIR]
  --shots DIR  reuse PNG screenshots already in DIR (named <host-without-.vercel.app>.png)
               instead of capturing; missing ones are captured.
Requires Google Chrome and Pillow. Held and non-visual builds are listed in SKIP.
"""
import json, os, re, subprocess, sys, urllib.request
from concurrent.futures import ThreadPoolExecutor
from datetime import date
from pathlib import Path
from PIL import Image

ROOT = Path(__file__).resolve().parent.parent
CHROME = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
SITE_HOST = "rn-selected-work.vercel.app"
# Held pending release review, or not a visual surface (admin login, JSON endpoint).
SKIP = {"narch-advisory", "wnh-guide", "nsag-admin", "rn-agent-os"}
UA = {"User-Agent": "Mozilla/5.0"}


def targets():
    out = {}
    for b in json.load(open(ROOT / "data/builds.json"))["builds"]:
        if b.get("live") and b["repo"] not in SKIP:
            out[b["live"]] = b["repo"]
    for m in re.finditer(r'live:\s*"(https?://[^"]+)"', open(ROOT / "lib/portfolio.ts").read()):
        out.setdefault(m.group(1), None)
    out.setdefault("https://nsag-site.vercel.app/", None)
    return out


def host(url):
    return re.sub(r"^https?://", "", url).split("/")[0]


def key(url):
    return host(url).replace(".vercel.app", "")


def embeddable(url):
    try:
        r = urllib.request.urlopen(urllib.request.Request(url, headers=UA), timeout=30)
    except Exception:
        return False
    xfo = r.headers.get("X-Frame-Options")
    fa = re.search(r"frame-ancestors([^;]*)", r.headers.get("Content-Security-Policy") or "")
    if fa:
        return SITE_HOST in fa.group(1)
    return not xfo


def shoot(url, out):
    prof = f"/tmp/preview-profile-{key(url)}"
    try:
        subprocess.run([CHROME, "--headless=new", f"--user-data-dir={prof}", "--no-first-run", "--disable-extensions",
                        "--hide-scrollbars", "--force-prefers-reduced-motion", "--window-size=1440,900",
                        "--force-device-scale-factor=1", "--timeout=12000", "--run-all-compositor-stages-before-draw",
                        f"--screenshot={out}", url], capture_output=True, timeout=100)
    except subprocess.TimeoutExpired:
        pass
    subprocess.run(["pkill", "-f", prof])
    return os.path.exists(out)


def main():
    shots = Path(sys.argv[sys.argv.index("--shots") + 1]) if "--shots" in sys.argv else Path("/tmp/preview-shots")
    shots.mkdir(parents=True, exist_ok=True)
    urls = list(targets())
    with ThreadPoolExecutor(8) as ex:
        flags = dict(zip(urls, ex.map(embeddable, urls)))
    (ROOT / "public/previews").mkdir(parents=True, exist_ok=True)
    table, failed = {}, []
    for url in urls:
        png = shots / f"{key(url)}.png"
        if not png.exists() and not shoot(url, str(png)):
            failed.append(url)
            continue
        Image.open(png).convert("RGB").resize((1440, 900)).save(ROOT / f"public/previews/{key(url)}.jpg", quality=78, optimize=True)
        table[host(url)] = {"embed": flags[url], "image": f"/previews/{key(url)}.jpg", "captured": date.fromtimestamp(png.stat().st_mtime).isoformat()}
    (ROOT / "data/previews.json").write_text(json.dumps(table, indent=1, sort_keys=True) + "\n")
    print(f"{len(table)} previews, {sum(v['embed'] for v in table.values())} embeddable, failed: {failed}")


if __name__ == "__main__":
    main()
