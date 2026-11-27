import re,sys
CSS = r"""
:root{--ink:#17251d;--paper:#f3efe4;--lime:#d9ff4f;--blue:#abc9ff;--coral:#ff826d}
ROOT{background:var(--paper);color:var(--ink);font:17px/1.5 Inter,system-ui,sans-serif;overflow-x:clip}
* {box-sizing:border-box;min-width:0}
img,video{display:block;max-width:100%}
a{color:inherit}
button{font:inherit;color:inherit}
.mk{font-family:'Permanent Marker',cursive;font-weight:400;letter-spacing:.01em}
.mono{font:500 12px/1.45 'IBM Plex Mono',monospace;letter-spacing:.04em}
.w{max-width:1300px;margin:0 auto;padding:0 28px;position:relative}
section{position:relative;overflow:hidden}
.plaque{display:inline-flex;gap:10px;align-items:center;font:500 12px 'IBM Plex Mono',monospace;letter-spacing:.12em;text-transform:uppercase;background:var(--ink);color:var(--paper);padding:7px 12px;margin:0 0 18px}
.plaque b{color:var(--lime)}
.dark .plaque{background:var(--lime);color:var(--ink)}
.dark .plaque b{color:var(--ink)}
h2{font:800 clamp(52px,8.2vw,128px)/.92 'Playfair Display',serif;letter-spacing:-.035em;margin:0}
h2 i{font-weight:400}
.lede{font:600 clamp(19px,1.7vw,24px)/1.4 Inter,sans-serif;max-width:36ch;margin:18px 0 0}
.label{background:#fff;color:var(--ink);border:1px solid rgba(0,0,0,.14);padding:12px 14px;max-width:360px;margin-top:14px}
.label b{display:block;font:800 italic 18px/1.2 'Playfair Display',serif}
.label .mono{display:block;color:#56645a;margin:3px 0 6px}
.label p{margin:0;font-size:14px;line-height:1.45}
.btn{display:inline-block;background:var(--lime);color:var(--ink);font:800 20px Inter,sans-serif;padding:18px 28px;text-decoration:none;border:3px solid var(--ink);box-shadow:8px 8px 0 var(--ink);transition:transform .15s,box-shadow .15s;cursor:pointer}
.btn:hover{transform:translate(4px,4px);box-shadow:4px 4px 0 var(--ink)}
.btn.small{font-size:16px;padding:12px 18px;box-shadow:6px 6px 0 var(--ink)}
.more{margin:46px 0 0}
.go{display:inline-block;margin-top:22px;font-weight:800}
.pre{display:inline-block;font:700 10px 'IBM Plex Mono',monospace;text-transform:uppercase;letter-spacing:.08em;background:var(--coral);color:var(--ink);padding:3px 6px;margin:6px}
.note{position:absolute;font-size:22px;color:var(--ink);transform:rotate(-6deg);display:flex;gap:6px;align-items:center;white-space:nowrap}
.note .arr{width:54px}
.under{position:absolute;left:-2%;bottom:-.1em;width:104%;height:.28em;color:var(--lime);overflow:visible}
.under path{stroke-dasharray:1;stroke-dashoffset:1;transition:stroke-dashoffset 1.1s .3s ease-out}
.on .under path{stroke-dashoffset:0}
.reveal{opacity:0;transform:translateY(26px);transition:opacity .7s,transform .7s}
.reveal.on{opacity:1;transform:none}
nav{display:flex;justify-content:space-between;align-items:center;padding:16px 0;gap:14px;position:relative;z-index:3}
.logo{font:800 28px 'Playfair Display',serif;font-style:italic;position:relative;text-decoration:none}
.logo .star{position:absolute;width:30px;left:-16px;top:-15px;color:var(--coral);transform:rotate(-14deg)}
.tix{display:flex;gap:8px;align-items:center}
.tix a,.tix .snd{text-decoration:none;font:500 12px 'IBM Plex Mono',monospace;text-transform:uppercase;letter-spacing:.06em;border:2px dashed var(--ink);padding:8px 12px;background:var(--paper);cursor:pointer}
.tix .snd[aria-pressed=true]{background:var(--ink);color:var(--lime);border-style:solid}
.tix a.h{background:var(--ink);color:var(--lime);border-style:solid}
.lobby{background:var(--lime)}
.splat{position:absolute;left:0;top:80px;width:100%;height:calc(100% - 80px);pointer-events:none}
#paint{position:absolute;inset:0;width:100%;height:100%;pointer-events:none;z-index:1}
.stage{display:grid;grid-template-columns:1.12fr .88fr;gap:34px;align-items:center;padding:10px 0 50px;position:relative;z-index:2}
.tv{background:#262626;border-radius:34px;padding:24px 24px 56px;box-shadow:12px 12px 0 var(--ink);position:relative;border:3px solid var(--ink)}
.tv .grill{position:absolute;left:28px;bottom:20px;width:62%;height:12px;background:repeating-linear-gradient(90deg,#4a4a4a 0 6px,transparent 6px 10px)}
.knobs{position:absolute;right:26px;bottom:12px;display:flex;gap:10px}
.knobs i,.knob{width:26px;height:26px;border-radius:50%;background:#555;border:3px solid #888;display:block}
.screen{background:var(--ink);color:var(--paper);border-radius:24px/38px;padding:52px 40px 40px;position:relative;overflow:hidden;box-shadow:inset 0 0 90px rgba(0,0,0,.75)}
.screen:before{content:"";position:absolute;inset:0;background:repeating-linear-gradient(0deg,rgba(255,255,255,.045) 0 2px,transparent 2px 4px);pointer-events:none;z-index:2}
.rec{position:absolute;top:16px;left:22px;font:500 14px 'IBM Plex Mono',monospace;display:flex;gap:8px;align-items:center;z-index:4}
.rec i{width:12px;height:12px;border-radius:50%;background:#ff3b2f;box-shadow:0 0 10px #ff3b2f;animation:glblink 1.2s steps(2) infinite}
.tc{position:absolute;top:16px;right:22px;font:500 14px 'IBM Plex Mono',monospace;color:var(--lime)}
h1{font:800 clamp(46px,5.8vw,92px)/.98 'Playfair Display',serif;letter-spacing:-.03em;margin:6px 0 20px}
h1 .x{position:relative;white-space:nowrap}
.who{font:500 13px 'IBM Plex Mono',monospace;letter-spacing:.05em;text-transform:uppercase;color:var(--lime);margin:0}
.intro{font-size:20px;margin:0;max-width:36ch}
.phones{display:flex;justify-content:center;align-items:flex-end;gap:16px;position:relative;padding-top:40px}
.ph{display:flex;flex-direction:column;align-items:center}
.phone{width:196px;background:var(--ink);border-radius:26px;padding:8px;box-shadow:10px 10px 0 rgba(23,37,29,.35);cursor:pointer}
.phone .bar{height:20px;display:flex;justify-content:center}
.phone .bar i{width:46px;height:9px;border-radius:9px;background:#000;margin-top:4px}
.phone .hd{background:#fff;font:700 10px Inter,sans-serif;padding:6px 8px;border-radius:14px 14px 0 0;display:flex;gap:6px;align-items:center;white-space:nowrap;overflow:hidden}
.phone .hd b{flex:none;width:16px;height:16px;border-radius:50%;background:var(--coral)}
.track{overflow:hidden;aspect-ratio:4/5;background:#fff}
.track>div{display:flex;height:100%;transition:transform .6s cubic-bezier(.7,0,.2,1)}
.track img{flex:none;width:100%;height:100%;object-fit:cover}
.dots{background:#fff;display:flex;gap:4px;justify-content:center;padding:7px 0 10px;border-radius:0 0 16px 16px}
.dots i{width:5px;height:5px;border-radius:50%;background:#ccc}
.dots i.a{background:#3897f0}
.ph:nth-child(2) .phone{width:226px;transform:translateY(-28px)}
.plinth{width:100%;height:76px;background:#fff;border:3px solid var(--ink);margin-top:-3px;text-align:center}
.ph:nth-child(2) .plinth{height:48px}
.phones .note{top:0;right:4px}
.crawl{background:var(--ink);color:var(--lime);font:500 14px 'IBM Plex Mono',monospace;letter-spacing:.08em;text-transform:uppercase;white-space:nowrap;overflow:hidden;padding:12px 0;position:relative;z-index:2}
.crawl>div{display:inline-block;animation:glcrawl 40s linear infinite}
.til{background:var(--coral);padding:90px 0}
.tilgrid{display:grid;grid-template-columns:minmax(0,.95fr) minmax(0,1.05fr);gap:56px;align-items:center}
.warhol{display:grid;grid-template-columns:1fr 1fr;border:6px solid var(--ink);box-shadow:12px 12px 0 var(--ink);cursor:pointer;background:var(--ink);gap:6px}
.warhol div{position:relative;aspect-ratio:1;overflow:hidden}
.warhol img{width:100%;height:100%;object-fit:cover;object-position:50% 0;transform:scale(1.5);transform-origin:50% 6%;filter:grayscale(1) contrast(1.7) brightness(1.1)}
.warhol div:after{content:"";position:absolute;inset:0;mix-blend-mode:multiply;transition:background .4s}
.warhol div:nth-child(1):after{background:var(--lime)}
.warhol div:nth-child(2):after{background:var(--blue)}
.warhol div:nth-child(3):after{background:var(--coral)}
.warhol div:nth-child(4):after{background:var(--paper)}
.warhol.s1 div:nth-child(1):after{background:var(--blue)}
.warhol.s1 div:nth-child(2):after{background:var(--coral)}
.warhol.s1 div:nth-child(3):after{background:var(--paper)}
.warhol.s1 div:nth-child(4):after{background:var(--lime)}
.tilbox{background:var(--ink);color:var(--paper);padding:22px 24px;margin-top:26px;border:3px solid var(--ink);box-shadow:8px 8px 0 rgba(23,37,29,.4);min-height:150px}
.tilbox .t{font:800 clamp(22px,2.2vw,30px)/1.25 'Playfair Display',serif}
.tilbox .t b{color:var(--lime);font-family:'IBM Plex Mono',monospace;font-size:.8em}
.tilbox .src{font:500 12px 'IBM Plex Mono',monospace;color:var(--lime);margin-top:10px;display:block}
.caret{display:inline-block;width:.5em;height:1em;background:var(--lime);vertical-align:-.12em;animation:glblink 1s steps(2) infinite}
.try{background:var(--lime);padding:90px 0;border-top:6px solid var(--ink)}
.games{display:grid;grid-template-columns:1fr 1fr;gap:30px;margin-top:40px}
.game{background:var(--paper);border:3px solid var(--ink);box-shadow:10px 10px 0 var(--ink);padding:26px}
.game .q{font:800 22px/1.3 'Playfair Display',serif;margin:0 0 18px}
.game input[type=range]{width:100%;accent-color:var(--ink);margin:10px 0 18px}
.game output{font-weight:700}
.picks{display:flex;gap:16px;flex-wrap:wrap}
.ans{margin-top:22px}
.ans .bar{display:grid;grid-template-columns:150px 1fr auto;gap:10px;align-items:center;margin:8px 0;font-size:14px}
.ans .bar i{height:26px;background:var(--ink);display:block;transform-origin:left;animation:glgrow .9s ease-out}
.ans .bar:first-child i{background:var(--coral)}
.ans .bar b{font:700 14px 'IBM Plex Mono',monospace}
.verdict{font:800 18px Inter,sans-serif;margin:14px 0 6px}
.credit{color:#56645a;margin:0}
.hole{background:var(--paper);padding:90px 0;border-top:6px solid var(--ink)}
.salon{display:grid;grid-template-columns:repeat(12,1fr);gap:54px 36px;margin-top:46px;align-items:start}
.salon figure{margin:0}
.c4{grid-column:span 4}.c5{grid-column:span 5}.c6{grid-column:span 6}.c7{grid-column:span 7}
.win{display:block;text-decoration:none;border:3px solid var(--ink);background:#fff;box-shadow:10px 10px 0 var(--fc);transition:transform .25s,box-shadow .25s}
.win:hover{transform:translate(-4px,-6px) rotate(-.6deg);box-shadow:16px 18px 0 var(--fc)}
.win .tb{display:flex;gap:6px;align-items:center;border-bottom:3px solid var(--ink);padding:6px 8px;background:var(--fc);font:500 11px 'IBM Plex Mono',monospace;white-space:nowrap;overflow:hidden}
.win .tb i{flex:none;width:11px;height:11px;border:2px solid var(--ink);background:#fff}
.win img{width:100%;aspect-ratio:16/10;object-fit:cover;object-position:top}
.tilt1{transform:rotate(-1.2deg)}.tilt2{transform:rotate(1deg)}
.reveal.tilt1.on{transform:rotate(-1.2deg)}.reveal.tilt2.on{transform:rotate(1deg)}
.screening{background:var(--ink);color:var(--paper);padding:90px 0}
.screening h2,.screening .lede{color:var(--paper)}
.bigtv{display:grid;grid-template-columns:minmax(0,1.1fr) minmax(0,.9fr);gap:40px;align-items:center;margin:40px 0 50px}
.bigtv .tv{box-shadow:12px 12px 0 #000}
.bigtv .screen{padding:0;aspect-ratio:4/3;background:#000}
.bigtv .screen video,.bigtv .screen img{position:absolute;inset:0;width:100%;height:100%;object-fit:contain}
.static{position:absolute;inset:0;z-index:3;opacity:0;background:repeating-radial-gradient(circle at 17% 32%,#fff 0 1px,#000 1px 3px),repeating-linear-gradient(90deg,#999 0 2px,#111 2px 5px);background-blend-mode:difference;pointer-events:none}
.static.go{animation:glstat .35s steps(4)}
.ch{position:absolute;top:14px;right:20px;z-index:4;font:500 30px 'IBM Plex Mono',monospace;color:var(--lime);text-shadow:0 0 8px var(--lime)}
.cap{position:absolute;left:16px;bottom:14px;z-index:4;font:800 20px/1.15 Inter,sans-serif;background:var(--ink);color:var(--paper);padding:8px 12px;max-width:calc(100% - 32px)}
.chbtn{display:flex;gap:12px;align-items:center;margin-top:20px;background:none;border:0;color:var(--paper);cursor:pointer;font:500 13px 'IBM Plex Mono',monospace;text-transform:uppercase;letter-spacing:.08em}
.chbtn .knob{transition:transform .3s;width:46px;height:46px;border-width:4px;position:relative}
.chbtn .knob:after{content:"";position:absolute;left:50%;top:3px;width:4px;height:14px;background:#ddd;margin-left:-2px}
.music{color:#aab;margin:14px 0 0;max-width:46ch;min-height:2.9em}
.bigtv .screen video{object-fit:contain}
.wall8{display:grid;grid-template-columns:repeat(4,1fr);gap:18px}
.mini{background:#262626;border-radius:16px;padding:10px 10px 14px;border:3px solid #000;position:relative;cursor:pointer;text-align:left;color:var(--paper)}
.mini .s{display:block;border-radius:10px/16px;overflow:hidden;aspect-ratio:4/3;position:relative;background:#000}
.mini img,.mini video{width:100%;height:100%;object-fit:cover;object-position:50% 30%;transition:transform .3s}
.mini:hover img,.mini:hover video{transform:scale(1.05)}
.mini .s:after{content:"";position:absolute;inset:0;background:repeating-linear-gradient(0deg,rgba(0,0,0,.18) 0 2px,transparent 2px 4px)}
.mini em{position:absolute;right:8px;bottom:6px;z-index:2;font-style:normal;color:var(--lime);font-size:20px}
.mini .t{display:block;margin:8px 2px 2px;font:600 14px/1.3 Inter,sans-serif}
.mini .mono{color:#aab;display:block;margin-left:2px}
.tldr{background:var(--blue);padding:90px 0}
.rack{display:grid;grid-template-columns:repeat(6,1fr);gap:20px;margin:44px 0 54px;align-items:end}
.rack a{display:block;border:3px solid var(--ink);box-shadow:8px 8px 0 var(--ink);transition:transform .25s;transform:rotate(var(--r));position:relative}
.rack a:hover{transform:rotate(0) translateY(-12px) scale(1.04)}
.rack img{width:100%;aspect-ratio:4/5;object-fit:cover}
.rack .pre{position:absolute;top:0;left:0}
.outs{display:grid;grid-template-columns:repeat(4,1fr);gap:18px;margin-top:36px}
.outs div{background:var(--paper);border:3px solid var(--ink);padding:18px 20px;box-shadow:8px 8px 0 var(--ink);transform:rotate(var(--r))}
.outs b{font:800 76px/1 'Playfair Display',serif;display:block;letter-spacing:-.04em}
.howvid{width:min(100%,380px);margin-top:28px;border:3px solid var(--ink);box-shadow:8px 8px 0 var(--ink)}
.also{margin:26px 0 0;font-size:16px;max-width:70ch}
.receipts{background:var(--paper);padding:90px 0;border-top:6px solid var(--ink)}
.rgrid{display:grid;grid-template-columns:1fr minmax(0,420px);gap:56px;align-items:center}
.paper{background:#fff;font:500 13px/1.45 'IBM Plex Mono',monospace;padding:28px 24px 34px;box-shadow:0 22px 30px -18px rgba(0,0,0,.4);transform:rotate(1.5deg);-webkit-mask:radial-gradient(10px at 50% 100%,#0000 98%,#000) 50%/20px 100%;mask:radial-gradient(10px at 50% 100%,#0000 98%,#000) 50% 100%/20px 51% repeat-x,linear-gradient(#000 0 0) top/100% 50% no-repeat}
.paper .rh{text-align:center;font-weight:700;margin:0 0 10px}
.paper .dash{border-top:2px dashed var(--ink);margin:12px 0}
.paper .line{display:grid;grid-template-columns:1fr;gap:2px;margin:10px 0}
.paper .line b{font-weight:500;color:#56645a;text-align:right}
.paper .tot{display:flex;justify-content:space-between;margin:4px 0;font-weight:700}
.paper .thanks{text-align:center;margin:18px 0 0}
.ama{background:var(--ink);color:var(--paper);padding:100px 0}
.swirl{position:absolute;inset:0;width:100%;height:100%;opacity:.42}
.sg{animation:gldrift 30s ease-in-out infinite alternate}
.ama h2{color:var(--lime)}
.ama .lede{color:var(--paper)}
.cards{display:grid;grid-template-columns:repeat(4,1fr);gap:18px;margin:40px 0 46px}
.cards div{background:var(--paper);color:var(--ink);padding:20px;border:3px solid var(--ink);box-shadow:8px 8px 0 #000}
.cards b{display:block;font:800 20px Inter,sans-serif;margin-bottom:6px}
.gift{background:var(--lime);padding:34px 0;font-size:16px}
.gift p{margin:0 0 8px}
.gift ul{font-size:13px;margin:8px 0 0;padding-left:18px}
@media(max-width:900px){
.stage,.tilgrid,.bigtv,.rgrid,.games{grid-template-columns:1fr}
.salon{grid-template-columns:1fr}
.salon figure{grid-column:auto!important;transform:none!important}
.wall8{grid-template-columns:1fr 1fr}
.rack{grid-template-columns:repeat(3,1fr)}
.outs{grid-template-columns:1fr 1fr}
.cards{grid-template-columns:1fr}
.tix a:not(.h){display:none}
.screen{padding:48px 20px 28px}
.tv{padding:14px 14px 46px;border-radius:24px}
h1{font-size:44px}
.phone{width:104px;padding:5px;border-radius:16px}
.ph:nth-child(2) .phone{width:124px}
.phone .hd{font-size:6px;padding:4px}
.phone .hd b{width:9px;height:9px}
.phones{gap:8px}
.plinth{height:40px}
.who{font-size:11px}
.tc{display:none}
.outs b{font-size:54px}
.note{font-size:18px}
.ans .bar{grid-template-columns:1fr auto}
.ans .bar i{grid-column:1/-1;grid-row:2}
.paper{transform:none}
}
@media(prefers-reduced-motion:reduce){
* {animation:none!important;transition:none!important}
.reveal{opacity:1;transform:none}
.under path{stroke-dashoffset:0}
}
"""
KEYFRAMES = """
@keyframes glblink{50%{opacity:0}}
@keyframes glcrawl{to{transform:translateX(-50%)}}
@keyframes glstat{0%{opacity:1;background-position:0 0}50%{opacity:1;background-position:13px 7px}100%{opacity:0;background-position:-9px 3px}}
@keyframes glgrow{from{transform:scaleX(0)}}
@keyframes gldrift{to{transform:translateX(-160px)}}
"""
def scope_sel(sel):
    out=[]
    for s in sel.split(','):
        s=s.strip()
        if s.startswith(':root'): out.append('.gl');continue
        if s=='ROOT': out.append('.gl');continue
        out.append('.gl '+s)
    return ','.join(out)
def scope(css):
    res=[];i=0
    # handle @media blocks by recursion
    while i<len(css):
        m=re.match(r'\s*@media([^{]+)\{',css[i:])
        if m:
            depth=1;j=i+m.end()
            k=j
            while depth:
                if css[k]=='{':depth+=1
                elif css[k]=='}':depth-=1
                k+=1
            res.append('@media'+m.group(1)+'{'+scope(css[j:k-1])+'}\n');i=k;continue
        m=re.match(r'\s*([^{}]+)\{([^{}]*)\}',css[i:])
        if not m: break
        res.append(scope_sel(m.group(1))+'{'+m.group(2)+'}\n');i+=m.end()
    return ''.join(res)
out='/* The Gallery home (components/gallery). Every rule is scoped to .gl so no other page changes. Generated by scripts/gallery_css.py, Nov 27, 2026. */\n'+scope(CSS)+KEYFRAMES
open(sys.argv[1],'w').write(out)
print(len(out))
