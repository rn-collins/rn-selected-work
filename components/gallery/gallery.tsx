import Link from "next/link";
import { sourcePosts } from "../../lib/aan-sources";
import { isReleased, aanId } from "../../lib/releases";
import {
  accounts, carousels, samples, channels, everyAppPost, guesses, isPreviewDeploy, offers, outlets, pieceCount, shown, sites, soundCredits, tils, zines,
} from "../../lib/gallery";
import { GalleryClient } from "./gallery-client";

// "The Gallery" home (RN, Nov 27, 2026). Art direction, followed in every room:
// - Every piece sits inside old tech (TV, phone, browser window, magazine rack, receipt) and has a wall label.
// - The five brand colours only, one wall colour per room. Lime on dark, ink on light.
// - Playfair Display for headlines, Inter for reading, IBM Plex Mono for labels, one marker hand for notes.
// - Motion is either tech (REC, timecode, static, channel change, auto-swipe) or paint (splatter, marker strokes).
// - Copy: plain sentences. Internet phrases (TIL, TL;DR, AMA, "rabbit hole") only where they literally fit.

const Star = () => (
  <svg className="star" viewBox="0 0 60 60" aria-hidden="true"><path d="M30 4 L36 24 L56 26 L40 38 L46 57 L30 46 L13 57 L19 38 L4 26 L24 24 Z" fill="none" stroke="currentColor" strokeWidth="4" strokeLinejoin="round" /></svg>
);
const Under = () => (
  <svg className="under" viewBox="0 0 300 20" preserveAspectRatio="none" aria-hidden="true"><path pathLength={1} d="M3 12 C60 4 120 18 180 9 S270 6 297 11" fill="none" stroke="currentColor" strokeWidth="5" strokeLinecap="round" /></svg>
);
const Arrow = () => (
  <svg className="arr" viewBox="0 0 80 40" aria-hidden="true"><path d="M4 8 C30 2 50 18 70 30 M58 32 L71 31 L66 19" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
);


// Line icons in the style of the apps' own (drawn here, not copied).
const Heart = () => <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 20s-7-4.4-9.2-8.6C1.2 8 3.2 4.5 6.6 4.5c2 0 3.4 1.1 4.4 2.5 1-1.4 2.4-2.5 4.4-2.5 3.4 0 5.4 3.5 3.8 6.9C19 15.6 12 20 12 20z" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinejoin="round" /></svg>;
const Bubble = () => <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.5 12a8.5 8.5 0 1 1-3.2-6.6A8.4 8.4 0 0 1 20.5 12c0 1.6-.4 3-1.2 4.3l1.2 4.2-4.3-1.2" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinejoin="round" /></svg>;
const Plane = () => <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M21.5 3 10 14.5M21.5 3l-7 18-4.5-6.5L3 10z" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinejoin="round" /></svg>;
const Bookmark = () => <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 3h12v18l-6-5-6 5z" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinejoin="round" /></svg>;
const Share = () => <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M13 5l8 7-8 7v-4c-5 0-8 1.5-10 5 .5-6 3.5-10 10-11z" fill="currentColor" /></svg>;
const Repost = () => <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 7h11l-3-3M17 17H6l3 3M18 7v5M6 17v-5" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" /></svg>;
const ThumbUp = () => <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 21V10l5-7c1.5 0 2.3 1.1 2 2.6L13.4 9H20c1.2 0 2 1 1.8 2.2l-1.5 7.6A2.6 2.6 0 0 1 17.7 21zM3 10h4v11H3z" fill="currentColor" /></svg>;
const Music = () => <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 18V5l11-2v13" fill="none" stroke="currentColor" strokeWidth="2" /><circle cx="6" cy="18" r="3" fill="currentColor" /><circle cx="17" cy="16" r="3" fill="currentColor" /></svg>;

// Seeded splatter, so the server and the browser draw the same picture.
function splatter() {
  let seed = 11;
  const r = () => ((seed = (seed * 16807) % 2147483647) / 2147483647);
  const cols = ["#17251d", "#ff826d", "#abc9ff", "#ffffff"];
  const out: React.ReactNode[] = [];
  for (let i = 0; i < 46; i++) {
    const x = r() * 1400, y = r() * 1000, c = cols[Math.floor(r() * 4)], s = [2, 3, 4, 6, 9, 14][Math.floor(r() * 6)];
    out.push(<circle key={`c${i}`} cx={x.toFixed(0)} cy={y.toFixed(0)} r={s} fill={c} />);
    for (let j = 0; j < 3; j++) out.push(<circle key={`d${i}-${j}`} cx={(x + (r() - 0.5) * s * 7).toFixed(0)} cy={(y + (r() - 0.5) * s * 7).toFixed(0)} r={(r() * s / 3 + 0.6).toFixed(1)} fill={c} />);
    if (r() < 0.3) {
      const pts = Array.from({ length: 5 }, (_, k) => `${(x + k * (20 + r() * 40)).toFixed(0)},${(y + (r() - 0.5) * 60).toFixed(0)}`).join(" ");
      out.push(<polyline key={`l${i}`} points={pts} fill="none" stroke={c} strokeWidth={(1.5 + r() * 2.5).toFixed(1)} strokeLinecap="round" />);
    }
  }
  return <svg className="splat" viewBox="0 0 1400 1000" preserveAspectRatio="xMidYMid slice" aria-hidden="true">{out}</svg>;
}

function Swirl() {
  const cols = ["#abc9ff", "#d9ff4f", "#abc9ff", "#f3efe4"], w = [10, 4, 7, 3], o = [0.5, 0.7, 0.35, 0.4];
  return (
    <svg className="swirl" viewBox="0 0 1600 600" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <filter id="sw"><feTurbulence type="turbulence" baseFrequency="0.006 0.018" numOctaves={3} seed={4} /><feDisplacementMap in="SourceGraphic" scale={110} /></filter>
      <g className="sg" filter="url(#sw)" fill="none" strokeLinecap="round">
        {Array.from({ length: 26 }, (_, i) => { const y = 10 + i * 24; return <path key={i} d={`M-200 ${y} C 200 ${y - 70}, 500 ${y + 70}, 900 ${y} S 1500 ${y - 60}, 1900 ${y}`} stroke={cols[i % 4]} strokeWidth={w[i % 4]} opacity={o[i % 4]} />; })}
        <circle cx="1240" cy="120" r="70" stroke="#d9ff4f" strokeWidth="8" /><circle cx="1240" cy="120" r="40" fill="#d9ff4f" />
      </g>
    </svg>
  );
}

function Label({ title, medium, children }: { title: string; medium: string; children?: React.ReactNode }) {
  return <div className="label"><b>{title}</b><span className="mono">RN Collins · {medium}</span>{children && <p>{children}</p>}</div>;
}

// Salon hang by position: each row adds up to 12 columns.
const SALON = ["c7", "c5 tilt2", "c4", "c4 tilt1", "c4", "c5 tilt2", "c7", "c6 tilt1", "c6"];

const Pre = ({ on }: { on: boolean }) => (isPreviewDeploy && on ? <span className="pre">Preview: not out yet</span> : null);

export function Gallery() {
  const today = new Intl.DateTimeFormat("en-CA", { timeZone: "Pacific/Honolulu" }).format(new Date());
  const later = (d: string) => d > today;
  const cs = shown(carousels), ts = shown(tils), ch = shown(channels), zs = shown(zines);
  const app = everyAppPost();
  const smp = shown([{ date: samples.date }])[0];
  // The Warhol grid repeats the first released carousel (Faces in Things once it is out).
  const pop = cs.find((c) => c.id === "pdft01") ?? cs[0];
  const sleep = shown([guesses.sleep])[0], jams = shown([guesses.jams])[0];
  // The newest released post with at least 3 sourced claims; a preview with none released yet shows the first upcoming one.
  const withClaims = sourcePosts.filter((p) => (p.extra?.claims?.length ?? 0) >= 3);
  const receipt = withClaims.slice().reverse().find((p) => isReleased(aanId(p.slug))) ?? (isPreviewDeploy ? withClaims[0] : undefined);
  let roomNo = 0;
  const room = () => ++roomNo; // rooms are numbered in page order, so a hidden room leaves no gap
  const crawl = ["Now showing: RN Collins", "Neuroscience for museums, science institutions, brands and AI", "M.S. Anatomy & Neurobiology", "Every claim sourced", "Admission free"].join(" ✦ ") + " ✦ ";
  return (
    <div className="gl">
      <section className="lobby">
        {splatter()}
        <canvas id="paint" aria-hidden="true" />
        <div className="w">
          <nav aria-label="Main">
            <Link className="logo" href="/"><Star />RN Collins</Link>
            <span className="tix">
              <Link href="/work">Work</Link><Link href="/writing">Writing</Link><Link href="/about">About</Link><Link href="/archive">Archive</Link>
              <button type="button" className="snd" aria-pressed="false">Sound off</button>
              <Link className="h" href="/work-with-me">Work with me</Link>
            </span>
          </nav>
          <div className="stage">
            <div className="tv">
              <div className="screen">
                <span className="rec"><i />REC</span><span className="tc">00:00:05:00</span>
                <p className="who">RN Collins · neuroscientist, content creator, analyst</p>
                <h1>TIL, but <span className="x">every fact<Under /></span> has a source.</h1>
                <p className="intro">I turn neuroscience studies into posts, sites and exhibits that people read to the end. I work with museums, science institutions, brands and AI companies.</p>
                <p className="herocta"><Link className="btn" href="/work-with-me">Work with me →</Link><a className="seework" href="#work">See the work ↓</a></p>
              </div>
              <span className="grill" /><span className="knobs"><i /><i /></span>
            </div>
            {/* Instagram carousels, as they look on @ask_a_neuroscientist (RN, Nov 27: the real account, the real app look). */}
            <div className="phones">
              {(cs.length > 0 ? cs : [null]).map((c, k, all) => (
                <div className={`ph${k === Math.floor(all.length / 2) ? " mid" : ""}`} key={c?.id ?? "ig"}>
                  <div className="phone ig" role="img" aria-label={c ? `Instagram post by @${accounts.instagram}: ${c.title}, a carousel. Tap for the next slide.` : `Instagram post by @${accounts.instagram}: Every claim, read in full`}>
                    <div className="bar"><i /></div>
                    <div className="hd"><span className="ring"><span /></span><span className="h">{accounts.instagram}</span><em>•••</em></div>
                    {c ? (
                      <div className="track"><div>{Array.from({ length: c.slides }, (_, n) => <img key={n} src={`/gallery-slides/${c.id}/slide-${String(n + 1).padStart(2, "0")}.webp`} alt="" />)}</div></div>
                    ) : (
                      <div className="track"><video src="/gallery/video/claim-check.mp4" poster="/gallery/video/claim-check.jpg" muted playsInline loop autoPlay preload="metadata" className="howvid lobbyvid" /></div>
                    )}
                    <div className="igacts"><span><Heart /><Bubble /><Plane /></span><span className="dots">{Array.from({ length: c ? c.slides : 1 }, (_, n) => <i key={n} className={!c ? "a" : undefined} />)}</span><Bookmark /></div>
                    <p className="igcap"><b>{accounts.instagram}</b> {c ? c.title : "Every claim, read in full"}</p>
                  </div>
                  <div className="plinth"><span className="app">Instagram</span>{c && <Pre on={later(c.date)} />}</div>
                </div>
              ))}
              <span className="note mk">swipe <Arrow /></span>
            </div>
          </div>
        </div>
        <div className="crawl" aria-hidden="true"><div>{crawl.repeat(4)}</div></div>
      </section>


      {app && (
        <section className="apps">
          <div className="w">
            <span className="plaque">Room {room()} · <b>Every app</b></span>
            <h2>Same study, <i>every app.</i></h2>
            <p className="lede">Each Ask a Neuroscientist post goes out on YouTube, TikTok, Instagram, Pinterest and Bluesky. Here’s one post, “{app.title}”, on all five, from the real accounts.</p>
            <div className="appgrid">
              <figure className="reveal">
                <div className="phone yt" role="img" aria-label={`YouTube Shorts, ${accounts.youtube}: ${app.title}`}>
                  <video className="appv" src={app.show} muted playsInline loop preload="metadata" />
                  <div className="ytTop"><b>Shorts</b></div>
                  <div className="ytRail" aria-hidden="true"><span><ThumbUp /><small>Like</small></span><span className="flip"><ThumbUp /><small>Dislike</small></span><span><Bubble /><small>Comment</small></span><span><Share /><small>Share</small></span></div>
                  <div className="ytCap"><p className="acct"><b className="av" />{accounts.youtube}<em>Subscribe</em></p><p>{app.title}</p></div>
                </div>
                <figcaption className="mono">YouTube Shorts · {accounts.youtube}</figcaption>
              </figure>
              <figure className="reveal">
                <div className="phone tt" role="img" aria-label={`TikTok, @${accounts.tiktok}: ${app.title}`}>
                  <video className="appv" src={app.reel} muted playsInline loop preload="metadata" />
                  <div className="ttTop" aria-hidden="true"><span>Following</span><b>For You</b></div>
                  <div className="ttRail" aria-hidden="true"><span className="av"><i>+</i></span><span><Heart /></span><span><Bubble /></span><span><Bookmark /></span><span><Share /></span></div>
                  <div className="ttCap"><b>@{accounts.tiktok}</b><p>{app.title}</p>{app.music && <p className="snd"><Music /><span>{app.music.replace(/^Sound: /, "")}</span></p>}</div>
                </div>
                <figcaption className="mono">TikTok · @{accounts.tiktok}</figcaption>
              </figure>
              <figure className="reveal mid">
                <div className="phone igr" role="img" aria-label={`Instagram Reels, @${accounts.instagram}: ${app.title}`}>
                  <video className="appv" src={app.reel} muted playsInline loop preload="metadata" />
                  <div className="igTop" aria-hidden="true"><b>Reels</b></div>
                  <div className="igRail" aria-hidden="true"><span><Heart /></span><span><Bubble /></span><span><Plane /></span><span>•••</span></div>
                  <div className="igCap"><p className="acct"><span className="ring"><span /></span>{accounts.instagram}<em>Follow</em></p><p>{app.title}</p>{app.music && <p className="snd"><Music /><span>{app.music.replace(/^Sound: /, "")}</span></p>}</div>
                </div>
                <figcaption className="mono">Instagram · @{accounts.instagram}</figcaption>
              </figure>
              <figure className="reveal">
                <div className="phone pin" role="img" aria-label={`Pinterest, ${accounts.pinterest}: ${app.title}`}>
                  <div className="pinTop" aria-hidden="true"><span>⌕ Search for ideas</span></div>
                  <div className="pinMedia"><video className="appv" src={app.show} muted playsInline loop preload="metadata" /></div>
                  <div className="pinBar" aria-hidden="true"><span><Heart /><Bubble /><Share /></span><em>Save</em></div>
                  <p className="pinTitle">{app.title}</p>
                  <p className="acct"><b className="av" />{accounts.pinterest}</p>
                </div>
                <figcaption className="mono">Pinterest · {accounts.pinterest}</figcaption>
              </figure>
              <figure className="reveal">
                <div className="phone bsky" role="img" aria-label={`Bluesky, @${accounts.bluesky}: ${app.title}`}>
                  <div className="bsTop" aria-hidden="true"><b>Discover</b><span>Following</span></div>
                  <div className="bsPost">
                    <p className="acct"><b className="av" /><span><b>Ask a Neuroscientist</b><i>@{accounts.bluesky}</i></span></p>
                    <p className="txt">{app.title}. Every claim in this one is sourced, and the sources are linked in the thread.</p>
                    <div className="bsMedia"><video className="appv" src={app.reel} muted playsInline loop preload="metadata" /></div>
                    <p className="acts" aria-hidden="true"><Bubble /><Repost /><Heart /><span>•••</span></p>
                  </div>
                </div>
                <figcaption className="mono">Bluesky · @{accounts.bluesky}</figcaption>
              </figure>
            </div>
            <Pre on={later(app.date)} />
          </div>
        </section>
      )}
      {ts.length > 0 && pop && (
        <section className="til" id="work">
          <div className="w"><div className="tilgrid">
            <div className="reveal">
              <div className="warhol" title="Tap to change the colors">{[0, 1, 2, 3].map((k) => <div key={k}><img src={`/gallery-slides/${pop.id}/slide-01.webp`} alt="" /></div>)}</div>
              <Label title={`${pop.title} (×4)`} medium={`2026 · carousel, ${pop.slides} slides, shown four times`}>One study a day on Instagram, TikTok, YouTube and Pinterest, as Ask a Neuroscientist.</Label>
            </div>
            <div>
              <span className="plaque">Room {room()} · <b>TIL</b></span>
              <h2>Today I learned<i>…</i></h2>
              <p className="lede">That’s the idea behind Ask a Neuroscientist. One study a day, cut down to fit a phone screen, with every source attached.</p>
              <div className="tilbox" data-tils={JSON.stringify(ts.map((t) => [t.text, t.source]))}><div className="t"><b>TIL</b> <span>{ts[0].text}</span><i className="caret" /></div><span className="src">Source: {ts[0].source}</span></div>
              <a className="go" href="https://askaneuroscientist.vercel.app">Read Ask a Neuroscientist ↗</a>
            </div>
          </div></div>
        </section>
      )}

      {(sleep || jams) && (
        <section className="try">
          <div className="w">
            <span className="plaque">Room {room()} · <b>Try it yourself</b></span>
            <h2>Guess first.</h2>
            <p className="lede">Then see what the study found. Both of these come from Ask a Neuroscientist posts.</p>
            <div className="games">
              {sleep && (
                <div className="game reveal" data-game="slider" data-answer={sleep.answers[0].value}>
                  <p className="q">{sleep.question}</p>
                  <label className="mono" htmlFor="g-sleep">Your guess: <output>15</output> min</label>
                  <input id="g-sleep" type="range" min={0} max={sleep.max} defaultValue={15} step={1} />
                  <button type="button" className="btn small">Show me</button>
                  <div className="ans" hidden>
                    {sleep.answers.map((a) => <div className="bar" key={a.label}><span>{a.label}</span><i style={{ width: `${(a.value / sleep.max) * 100}%` }} /><b>{a.value} {sleep.unit}</b></div>)}
                    <p className="verdict" />
                    <p className="credit mono">{sleep.credit}. 45 people, two nights in the lab.</p>
                  </div>
                  <Pre on={later(sleep.date)} />
                </div>
              )}
              {jams && (
                <div className="game reveal" data-game="pick" data-right="0">
                  <p className="q">{jams.question}</p>
                  <div className="picks"><button type="button" className="btn small" data-pick="0">24 jams</button><button type="button" className="btn small" data-pick="1">6 jams</button></div>
                  <div className="ans" hidden>
                    {jams.answers.map((a) => <div className="bar" key={a.label}><span>{a.label}</span><i style={{ width: `${a.value}%` }} /><b>{a.value}% <small>({a.detail})</small></b></div>)}
                    <p className="verdict" />
                    <p className="credit mono">{jams.credit}. More people stopped at 24 jams, but fewer of them bought any.</p>
                  </div>
                  <Pre on={later(jams.date)} />
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      <section className="hole">
        <div className="w">
          <span className="plaque">Room {room()} · <b>The rabbit hole</b></span>
          <h2>Went down a rabbit hole. <i>Built a website about it.</i></h2>
          <div className="salon">
            {sites.map((s, k) => (
              <figure className={`${SALON[k % SALON.length]} reveal`} key={s.host}>
                <a className="win" style={{ ["--fc" as string]: `var(--${s.frame})` }} href={`https://${s.host}.vercel.app/`} rel="noopener">
                  <span className="tb"><i /><i /><i />&nbsp;{s.host}.vercel.app</span>
                  <img src={`/previews/${s.host}.jpg`} alt={`${s.title}, home page`} loading="lazy" />
                </a>
                <Label title={s.title} medium={s.medium}>{s.note}</Label>
              </figure>
            ))}
          </div>
          <p className="more"><Link className="btn" href="/builds">See every site →</Link></p>
        </div>
      </section>

      {ch.length > 0 && (
        <section className="screening dark">
          <div className="w">
            <span className="plaque">Room {room()} · <b>Screening room</b></span>
            <h2>Now playing.</h2>
            <div className="bigtv">
              <div className="tv">
                <div className="screen" data-channels={JSON.stringify(ch.map((c) => [c.kind, c.src, c.title, c.poster ?? "", c.music ?? ""]))}>
                  {ch[0].kind === "video"
                    ? <video src={ch[0].src} poster={ch[0].poster || undefined} muted playsInline loop autoPlay preload="metadata" />
                    : <img src={ch[0].src} alt="" />}
                  <span className="static" /><span className="ch">CH 03</span><span className="cap">{ch[0].title}</span><span className="rec"><i />PLAY</span>
                </div>
                <span className="grill" /><span className="knobs"><i /></span>
              </div>
              <div>
                <p className="lede">Every Ask a Neuroscientist post becomes a Reel. Change the channel, or tap a screen below to put it on the big one. Press Sound on, up top, to hear it.</p>
                <button className="chbtn" type="button"><span className="knob" />Change the channel</button>
                <p className="music mono">{ch[0].music ?? ""}</p>
              </div>
            </div>
            <div className="wall8">
              {ch.slice(0, 8).map((c, k) => (
                <button type="button" className="mini reveal" data-ch={k} key={c.src}>
                  <span className="s">{c.kind === "video" ? <video src={`${c.src}#t=4`} muted playsInline preload="metadata" aria-hidden="true" /> : <img src={c.src} alt="" loading="lazy" />}{c.kind === "video" && <em>▶</em>}</span>
                  <span className="t">{c.title}</span><span className="mono">{c.medium}</span><Pre on={later(c.date)} />
                </button>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="tldr">
        <div className="w">
          <span className="plaque">Room {room()} · <b>TL;DR</b></span>
          <h2>I write <i>a lot.</i></h2>
          <p className="lede">{pieceCount} published pieces across {outlets.length} publications{zs.length ? ", and two zines a week" : ""}.</p>
          {zs.length > 0 && <div className="rack">{zs.map((z, k) => <a key={z.id} href={later(z.date) ? undefined : `https://askaneuroscientist.vercel.app/zines/${z.id}/`} style={{ ["--r" as string]: `${[-3, 2, -1, 3, -2, 1][k % 6]}deg` }}><img src={`/gallery-zines/${z.id}.webp`} alt="Zine cover" loading="lazy" /><Pre on={later(z.date)} /></a>)}</div>}
          <div className="outs">{outlets.slice(0, 4).map(([o, n], k) => <div className="reveal" key={o} style={{ ["--r" as string]: `${[-1.5, 1, -0.5, 1.5][k % 4]}deg` }}><b>{n}</b>{o}</div>)}</div>
          {outlets.length > 4 && <p className="also">Also in {outlets.slice(4).map(([o]) => o).join(", ")}.</p>}
          <p className="more"><Link className="btn" href="/writing">Read the writing →</Link></p>
        </div>
      </section>

      {receipt && (
        <section className="receipts">
          <div className="w rgrid">
            <div>
              <span className="plaque">Room {room()} · <b>Receipts</b></span>
              <h2>Show me the receipts.</h2>
              <p className="lede">Every post has a sources page. Each claim is listed with the paper it comes from and where in the paper to look.</p>
              <video className="howvid" src="/gallery/video/claim-check.mp4" poster="/gallery/video/claim-check.jpg" muted playsInline loop autoPlay preload="metadata" aria-label="Every claim, read in full: the six checks between a study and your feed" />
              <p className="more"><a className="btn" href={isReleased(aanId(receipt.slug)) ? `/sources/${receipt.slug}` : `/sources/preview/${receipt.slug}`}>See this post’s sources →</a></p>
            </div>
            <div className="paper reveal" aria-label={`Sources receipt for ${receipt.title}`}>
              <p className="rh">ASK A NEUROSCIENTIST<br />{receipt.title.toUpperCase()}</p>
              <p className="dash" />
              {receipt.extra!.claims!.slice(0, 5).map((c, k) => <div className="line" key={k}><span>{c.claim}</span><b>{c.source}</b></div>)}
              <p className="dash" />
              <p className="tot"><span>CLAIMS ON THIS RECEIPT</span><b>{Math.min(5, receipt.extra!.claims!.length)} OF {receipt.extra!.claims!.length}</b></p>
              <p className="tot"><span>EACH ONE SOURCED</span><b>YES</b></p>
              <p className="thanks">Thank you. Check our work.</p>
              <Pre on={later(receipt.date)} />
            </div>
          </div>
        </section>
      )}


      {smp && (
        <section className="samples">
          <div className="w">
            <span className="plaque">Room {room()} · <b>Samples</b></span>
            <h2>What I’d hand you.</h2>
            <p className="lede">Two samples I wrote for this site from one post, “{samples.post}”. They’re examples of the work, not past client work.</p>
            <div className="sgrid">
              <figure className="reveal">
                <div className="walllabel">
                  <p className="wl-t">{samples.wallLabel.title}</p>
                  <p className="wl-l mono">{samples.wallLabel.line}</p>
                  <p className="wl-b">{samples.wallLabel.body}</p>
                  <p className="wl-c mono">{samples.wallLabel.credit}</p>
                </div>
                <figcaption><b>For museums and science centers.</b> A wall label people finish, with its sources on the wall.</figcaption>
              </figure>
              <figure className="reveal">
                <div className="aicheck">
                  <p className="mono q">Prompt</p><p className="qq">{samples.aiCheck.question}</p>
                  <p className="mono q">AI answer (made up for this sample)</p><p className="ans1">{samples.aiCheck.answer}</p>
                  <p className="stamp">{samples.aiCheck.verdict}</p>
                  <p className="note2">{samples.aiCheck.note}</p>
                  <p className="mono q">Rewrite</p><p className="fixed">{samples.aiCheck.fixed}</p>
                  <p className="mono c">{samples.aiCheck.credit}</p>
                </div>
                <figcaption><b>For AI companies.</b> I check what a model says about the brain against the papers, then fix it.</figcaption>
              </figure>
            </div>
            <p className="more"><a className="btn" href={samples.sources}>See every source for this post →</a></p>
            <Pre on={later(samples.date)} />
          </div>
        </section>
      )}
      <section className="ama dark" id="ama">
        <Swirl />
        <div className="w">
          <span className="plaque">Room {room()} · <b>AMA</b></span>
          <h2>Ask me anything.</h2>
          <p className="lede">Is there a question your audience keeps asking? Send it to me. This is what I can make from it:</p>
          <div className="cards">{offers.map((o) => <div className="reveal" key={o.title}><b>{o.title}</b>{o.text}</div>)}</div>
          <Link className="btn" href="/work-with-me">Send me the question →</Link>
        </div>
      </section>

      <footer className="gift">
        <div className="w">
          <p><b>Gift shop.</b> If you read this far, you’d probably like the newsletter: <a href="https://polymath-rn-collins.beehiiv.com/subscribe">The Polymath ↗</a></p>
          <p>Everything else I’ve made is in <Link href="/archive">the archive →</Link></p>
          <details><summary className="mono">Sound credits</summary><ul>{soundCredits.map((c) => <li key={c}>{c}</li>)}</ul></details>
        </div>
      </footer>
      <GalleryClient />
    </div>
  );
}
