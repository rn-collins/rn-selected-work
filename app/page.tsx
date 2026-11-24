import { publicSourceLink } from "../lib/source-links";
import type { Metadata } from "next";
import Link from "next/link";
import { SocialIcons } from "../components/social-icons";
import { projects } from "../lib/portfolio";
import { shippedBuilds, studioBuilds } from "../lib/builds";
import { journalArticles } from "../lib/journal-articles";
import { publicationArchive } from "../lib/publication-archive";

const homeDescription =
  "Questions too messy for a single discipline — research, institutional frameworks, working systems, public resources, and published analysis by RN Collins.";

export const metadata: Metadata = {
  title: { absolute: "RN Selected Work" },
  description: homeDescription,
  alternates: { canonical: "/" },
  openGraph: { title: "RN Selected Work", description: homeDescription, url: "/" },
  twitter: { card: "summary_large_image", title: "RN Selected Work", description: homeDescription },
};

const publicationRecords = publicationArchive.length + journalArticles.length;

export default function Home() {
  return (
    <main>
      <header className="hero shell">
        <p className="eyebrow">Selected work · RN Collins · 2026</p>
        <h1>
          I work on questions
          <br />
          too messy for a<br />
          <em>single discipline.</em>
        </h1>
        <div className="herofoot">
          <p>
            Neuroscientist, knowledge content creator, and builder. Chair of
            FlexJD Interests, Student Bar Association, Northeastern University
            School of Law, Class of 2029.
          </p>
          <p className="lede">
            Selected research, institutional frameworks, working systems, public resources,
            and published analysis across law, science, technology, governance,
            education, and Hawaiʻi.
          </p>
        </div>
      </header>
      <section className="shell curatedSelection" aria-labelledby="paths-title">
        <p className="eyebrow">Three ways in</p>
        <h2 id="paths-title">The lists live on their own pages.</h2>
        <div className="pathways">
          <Link href="/work">
            <h2>Read the work →</h2>
            <p>
              {projects.length} primary case studies, plus the NARCH and Women’s Neuro-Health
              workbenches. Each one keeps the question, the reasoning, and what was made.
              Open a live build from the case study when one is public.
            </p>
          </Link>
          <Link href="/writing">
            <h2>Read the writing →</h2>
            <p>
              {publicationRecords} publication records: journalism, journal columns,
              academic papers, and policy work. Released essays are on that page.
              A piece with a future date stays off it until that day.
            </p>
          </Link>
          <Link href="/builds">
            <h2>Open the build index →</h2>
            <p>
              {shippedBuilds.length} shipped builds and {studioBuilds.length} in the studio,
              one record each. The record states what the build does and what it does not.
            </p>
          </Link>
        </div>
      </section>
      <footer className="footer">
        <div className="shell footergrid">
          <div>
            <p className="eyebrow">Work with RN</p>
            <h2>
              What system are you
              <br />
              trying to understand
              <br />
              <em>or change?</em>
            </h2>
          </div>
          <div className="contact">
            <p>
              RN Collins
              <br />
              Honolulu, Hawaiʻi
            </p>
            <a
              href="https://www.linkedin.com/in/rn-collins"
              target="_blank"
              rel="noreferrer"
            >
              Continue on LinkedIn ↗
            </a>
            <SocialIcons />
            {publicSourceLink("https://github.com/rn-collins/rn-selected-work") && <p><a href={publicSourceLink("https://github.com/rn-collins/rn-selected-work")} target="_blank" rel="noopener noreferrer">View source on GitHub ↗</a></p>}
            <p className="note">
              <Link href="/contact">Start from the question.</Link>
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
