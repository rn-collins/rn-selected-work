"""Cut RN Collins' five Journal of Biophilic Design articles out of the full issue PDFs.

    python3 scripts/extract_journal_pages.py /path/to/content-studio

Reads render-kit/article_registry.json (journal_articles: issue, pdf_path) and writes public/journal/<slug>.pdf, one
small PDF per article. Only the PDF pages that carry RN's article are copied (the issues are laid out as spreads, so a
PDF page is two printed pages); every page is copied as it is, with its original page size. The issue's own document
info is not carried over: the new file has a title and nothing else. Three LinkedIn links in the print file have no
scheme (www.linkedin.com/in/rn-collins), so a viewer treats them as a file path; they get https:// in front. The printed
text is untouched.
The page ranges were checked by reading each spread: the pages before and after belong to other authors or to the
issue's section dividers.
"""
import json
import os
import re
import sys
from pypdf import PdfReader, PdfWriter
from pypdf.generic import NameObject, TextStringObject

OUT = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), "public", "journal")
# issue -> (slug, first PDF page, last PDF page, title)
ARTICLES = {
    17: ("trauma-informed-architecture", 62, 64, "Trauma-Informed Architecture: The Neuroscience behind Biophilic Cities"),
    18: ("designing-for-cognitive-clarity", 33, 35, "Designing for Cognitive Clarity: Biophilic Interiors and the science of mental recovery"),
    20: ("biophilic-landscapes-as-cognitive-infrastructure", 60, 70, "Biophilic Landscapes as Cognitive Infrastructure: Neuroscience, Equity, and Design Practice"),
    21: ("biophilic-design-and-climate-change", 54, 62, "Biophilic Design and Climate Change: Rethinking Mental Health infrastructure in a warming world"),
    22: ("wood-the-multisensory-physiological-magician", 85, 90, "Wood - the Multisensory, Physiological Magician"),
}


def main(studio):
    reg = json.load(open(os.path.join(studio, "render-kit", "article_registry.json"), encoding="utf-8"))
    os.makedirs(OUT, exist_ok=True)
    for j in reg["journal_articles"]:
        slug, first, last, title = ARTICLES[j["issue"]]
        reader = PdfReader(j["pdf_path"])
        w = PdfWriter()
        for n in range(first - 1, last):
            page = w.add_page(reader.pages[n])
            annots = page.get("/Annots")
            for a in (annots.get_object() if annots is not None else []):
                act = a.get_object().get("/A")
                act = act.get_object() if act is not None else None
                if act is not None and act.get("/S") == "/URI" and not re.match(r"^[a-z][a-z0-9+.-]*:", str(act["/URI"]), re.I):
                    act[NameObject("/URI")] = TextStringObject("https://" + str(act["/URI"]))
        w.add_metadata({"/Title": TextStringObject(title)})
        w.compress_identical_objects(remove_duplicates=True, remove_unreferenced=True)
        path = os.path.join(OUT, slug + ".pdf")
        with open(path, "wb") as f:
            w.write(f)
        print(f"{slug}: pages {first}-{last} -> {os.path.getsize(path) / 1e6:.1f} MB")


if __name__ == "__main__":
    if len(sys.argv) != 2:
        sys.exit(__doc__)
    main(os.path.abspath(sys.argv[1]))
