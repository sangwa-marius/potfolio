import { useState, useEffect, useRef } from "react";
import Photo from '../assets/coder.webp';
import Container from '../components/imgWord';

/* ─────────────────────────────────────────────
   THEME TOKENS
───────────────────────────────────────────── */
const LIGHT = {
  "--bg":           "#FAFAF8",
  "--bg-alt":       "#F3F2EE",
  "--surface":      "#FFFFFF",
  "--border":       "#E8E5DF",
  "--text-primary": "#1A1814",
  "--text-secondary":"#6B6560",
  "--accent":       "#E85D26",
  "--accent-2":     "#F5A623",
  "--primary":      "#1A1814",
  "--success":      "#22c55e",
  "--in-progress":  "#3b82f6",
  "--navbar-bg":    "rgba(250,250,248,0.92)",
  "--shadow":       "rgba(26,24,20,0.08)",
  "--tag-bg":       "#EDECE8",
};

const DARK = {
  "--bg":           "#111010",
  "--bg-alt":       "#1A1918",
  "--surface":      "#1F1E1C",
  "--border":       "#2E2C28",
  "--text-primary": "#F0EDE8",
  "--text-secondary":"#9A948C",
  "--accent":       "#FF6B35",
  "--accent-2":     "#F5A623",
  "--primary":      "#F0EDE8",
  "--success":      "#4ade80",
  "--in-progress":  "#60a5fa",
  "--navbar-bg":    "rgba(17,16,16,0.94)",
  "--shadow":       "rgba(0,0,0,0.4)",
  "--tag-bg":       "#2A2926",
};

function applyTheme(tokens) {
  const root = document.documentElement;
  Object.entries(tokens).forEach(([k, v]) => root.style.setProperty(k, v));
}

/* ─────────────────────────────────────────────
   GLOBAL CSS
───────────────────────────────────────────── */
const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=Outfit:wght@300;400;500;600;700&display=swap');

*, *::before, *::after { margin:0; padding:0; box-sizing:border-box; }

html { scroll-behavior: smooth; }

body {
  font-family: 'Outfit', sans-serif;
  color: var(--text-primary);
  background: var(--bg);
  line-height: 1.6;
  transition: background 0.35s ease, color 0.35s ease;
}

/* ── Theme Toggle ── */
.theme-toggle {
  width: 48px; height: 26px;
  border-radius: 50px;
  border: 1.5px solid var(--border);
  background: var(--bg-alt);
  cursor: pointer;
  position: relative;
  transition: background 0.3s, border-color 0.3s;
  flex-shrink: 0;
}
.theme-toggle-knob {
  position: absolute; top: 3px; left: 3px;
  width: 18px; height: 18px;
  border-radius: 50%;
  background: var(--accent);
  transition: transform 0.3s cubic-bezier(.34,1.56,.64,1);
  display: flex; align-items: center; justify-content: center;
  font-size: 10px;
}
.theme-toggle-knob.dark { transform: translateX(22px); }

/* ── Navbar ── */
.navbar {
  position: fixed; top: 0; width: 100%;
  background: var(--navbar-bg);
  backdrop-filter: blur(14px); -webkit-backdrop-filter: blur(14px);
  border-bottom: 1px solid var(--border);
  padding: 1rem 2.5rem; z-index: 1000;
  transition: background 0.35s, border-color 0.35s;
}
.navbar-content {
  max-width: 1320px; margin: 0 auto;
  display: flex; justify-content: space-between; align-items: center;
}
.logo {
  font-family: 'Cormorant Garamond', serif;
  font-size: 1.5rem; font-weight: 700;
  color: var(--text-primary);
  letter-spacing: 0.5px;
  transition: color 0.3s;
}
.logo span { color: var(--accent); }
.nav-links { display:flex; gap:2rem; list-style:none; align-items:center; }
.nav-links a {
  color: var(--text-secondary); text-decoration:none;
  font-weight: 500; font-size: 0.9rem; letter-spacing: 0.3px;
  position: relative; transition: color 0.3s;
}
.nav-links a::after {
  content:''; position:absolute; bottom:-4px; left:0;
  width:0; height:1.5px; background:var(--accent);
  transition: width 0.3s ease;
}
.nav-links a:hover { color: var(--accent); }
.nav-links a:hover::after { width: 100%; }
.nav-right { display:flex; align-items:center; gap:1.5rem; }

/* ── Animations ── */
@keyframes fadeUp {
  from { opacity:0; transform:translateY(28px); }
  to   { opacity:1; transform:translateY(0); }
}
@keyframes float {
  0%,100% { transform:translate(0,0) rotate(0deg); }
  33%  { transform:translate(-30px,30px) rotate(5deg); }
  66%  { transform:translate(20px,-20px) rotate(-3deg); }
}
@keyframes blink {
  0%,100% { opacity:1; } 50% { opacity:0.35; }
}
@keyframes shimmer {
  from { background-position: -200% center; }
  to   { background-position:  200% center; }
}
@keyframes scaleIn {
  from { opacity:0; transform:scale(0.92); }
  to   { opacity:1; transform:scale(1); }
}

.anim { opacity:0; animation: fadeUp 0.8s cubic-bezier(.16,1,.3,1) forwards; }
.d1 { animation-delay:0.05s; } .d2 { animation-delay:0.15s; }
.d3 { animation-delay:0.25s; } .d4 { animation-delay:0.35s; }
.d5 { animation-delay:0.45s; }

/* ── Hero ── */
.hero {
  min-height: 100vh;
  display: flex; align-items: center; justify-content: center;
  padding: 140px 2.5rem 100px;
  position: relative; overflow: hidden;
}
.hero-bg {
  position:absolute; inset:0; pointer-events:none; overflow:hidden;
}
.hero-orb {
  position:absolute; border-radius:50%;
  filter: blur(80px); opacity: 0.15;
  animation: float 18s ease-in-out infinite;
}
.hero-orb-1 {
  width:600px; height:600px;
  top:-10%; right:-10%;
  background: radial-gradient(circle, var(--accent) 0%, transparent 70%);
}
.hero-orb-2 {
  width:400px; height:400px;
  bottom:5%; left:-5%;
  background: radial-gradient(circle, var(--accent-2) 0%, transparent 70%);
  animation-delay: -6s;
}
.hero-grid {
  position:absolute; inset:0;
  background-image: linear-gradient(var(--border) 1px, transparent 1px),
    linear-gradient(90deg, var(--border) 1px, transparent 1px);
  background-size: 60px 60px;
  opacity: 0.4;
  mask-image: radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 100%);
}
.hero-content {
  max-width: 900px; text-align:center; position:relative; z-index:1;
}
.hero-chip {
  display:inline-flex; align-items:center; gap:0.5rem;
  padding:0.45rem 1.1rem;
  border: 1px solid var(--border);
  border-radius:50px;
  font-size:0.82rem; font-weight:500; letter-spacing:0.4px;
  color: var(--text-secondary);
  background: var(--surface);
  margin-bottom:2rem;
  transition: background 0.3s, border-color 0.3s, color 0.3s;
}
.hero-chip-dot {
  width:7px; height:7px; border-radius:50%;
  background:var(--success);
  animation: blink 2s ease-in-out infinite;
}
.hero-title {
  font-family:'Cormorant Garamond', serif;
  font-size: clamp(3.5rem, 8vw, 7rem);
  font-weight:700; line-height:1.0;
  color: var(--text-primary);
  letter-spacing:-2px;
  margin-bottom:1rem;
  transition: color 0.3s;
}
.hero-title-grad {
  background: linear-gradient(135deg, var(--accent) 0%, var(--accent-2) 100%);
  background-clip: text; -webkit-background-clip:text; -webkit-text-fill-color:transparent;
  display:block;
}
.hero-desc {
  font-size:1.15rem; color:var(--text-secondary);
  max-width:600px; margin:1.5rem auto 2.5rem;
  line-height:1.9; transition:color 0.3s;
}
.hero-cta { display:inline-flex; gap:1rem; flex-wrap:wrap; justify-content:center; }
.btn-primary {
  background: var(--accent); color:#fff;
  padding:0.85rem 2.2rem; border-radius:4px;
  text-decoration:none; font-weight:600; font-size:0.95rem;
  letter-spacing:0.3px;
  transition: all 0.3s; border:1.5px solid var(--accent);
}
.btn-primary:hover {
  background:transparent; color:var(--accent);
  transform:translateY(-2px);
  box-shadow: 0 12px 28px var(--shadow);
}
.btn-secondary {
  background:transparent; color:var(--text-primary);
  padding:0.85rem 2.2rem; border-radius:4px;
  text-decoration:none; font-weight:600; font-size:0.95rem;
  border:1.5px solid var(--border);
  transition: all 0.3s;
}
.btn-secondary:hover {
  border-color:var(--text-primary);
  transform:translateY(-2px);
  box-shadow: 0 12px 28px var(--shadow);
}

/* ── Section Wrappers ── */
.section { padding:100px 2.5rem; max-width:1320px; margin:0 auto; }
.section-full { padding:100px 2.5rem; background:var(--bg-alt); transition:background 0.35s; }
.section-full-inner { max-width:1320px; margin:0 auto; }

.section-eyebrow {
  font-size:0.78rem; font-weight:700; letter-spacing:2.5px;
  text-transform:uppercase; color:var(--accent);
  margin-bottom:0.75rem;
}
.section-title {
  font-family:'Cormorant Garamond', serif;
  font-size: clamp(2.2rem, 4vw, 3.5rem);
  font-weight:700; color:var(--text-primary);
  letter-spacing:-0.5px; line-height:1.1;
  margin-bottom:1rem; transition:color 0.3s;
}
.section-subtitle {
  font-size:1.05rem; color:var(--text-secondary);
  max-width:560px; line-height:1.8; transition:color 0.3s;
}

/* ── Divider ── */
.divider {
  width:48px; height:3px;
  background:linear-gradient(90deg, var(--accent), var(--accent-2));
  border-radius:2px; margin:1.5rem 0 3rem;
}

/* ── Stats ── */
.stats-row {
  display:grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap:1px; background:var(--border);
  border:1px solid var(--border); border-radius:12px;
  overflow:hidden; margin-top:5rem;
  transition: background 0.3s, border-color 0.3s;
}
.stat-cell {
  background:var(--surface); padding:2.5rem 2rem; text-align:center;
  transition:background 0.25s;
}
.stat-cell:hover { background:var(--bg-alt); }
.stat-number {
  font-family:'Cormorant Garamond', serif;
  font-size:3rem; font-weight:700; color:var(--accent);
  line-height:1;
}
.stat-label {
  font-size:0.88rem; color:var(--text-secondary);
  font-weight:500; margin-top:0.5rem; letter-spacing:0.3px;
}

/* ── About ── */
.about-grid {
  display:grid; grid-template-columns:1fr 1.2fr;
  gap:5rem; align-items:center; margin-top:4rem;
}
.about-img-wrap { position:relative; }
.about-img-frame {
  width:100%; max-width:460px; aspect-ratio:4/5;
  border-radius:8px; overflow:hidden;
  box-shadow: 12px 12px 0 var(--accent);
  transition:box-shadow 0.3s, transform 0.4s;
}
.about-img-frame:hover { transform:translate(-6px,-6px); box-shadow:18px 18px 0 var(--accent); }
.about-img-frame img { width:100%; height:100%; object-fit:cover; }
.about-badge {
  position:absolute; bottom:-1.5rem; right:2rem;
  background:var(--surface); border:1px solid var(--border);
  padding:1rem 1.5rem; border-radius:8px;
  box-shadow:0 8px 24px var(--shadow);
  display:flex; align-items:center; gap:0.75rem;
  transition: background 0.3s, border-color 0.3s;
}
.about-badge-icon { font-size:1.6rem; }
.about-badge-text { font-size:0.82rem; font-weight:600; color:var(--text-primary); }
.about-badge-sub  { font-size:0.75rem; color:var(--text-secondary); }
.about-text h3 {
  font-family:'Cormorant Garamond', serif;
  font-size:2rem; color:var(--text-primary);
  margin-bottom:1.2rem; transition:color 0.3s;
}
.about-text p {
  font-size:1rem; color:var(--text-secondary);
  line-height:1.95; margin-bottom:1.2rem; transition:color 0.3s;
}
.tags-row { display:flex; flex-wrap:wrap; gap:0.6rem; margin-top:1.5rem; }
.tag {
  padding:0.4rem 1rem; background:var(--tag-bg);
  border:1px solid var(--border); border-radius:4px;
  font-size:0.84rem; font-weight:500; color:var(--text-primary);
  transition: all 0.2s;
}
.tag:hover { border-color:var(--accent); color:var(--accent); }

/* ── Services ── */
.services-grid {
  display:grid; grid-template-columns:repeat(auto-fit, minmax(290px,1fr));
  gap:1.5px; background:var(--border);
  border:1px solid var(--border); border-radius:12px; overflow:hidden;
  margin-top:3.5rem;
}
.svc-card {
  background:var(--surface); padding:2.8rem 2.4rem;
  transition:background 0.25s;
  position:relative; overflow:hidden;
}
.svc-card::before {
  content:''; position:absolute; top:0; left:0;
  width:100%; height:3px; background:linear-gradient(90deg,var(--accent),var(--accent-2));
  transform:scaleX(0); transform-origin:left;
  transition:transform 0.35s ease;
}
.svc-card:hover::before { transform:scaleX(1); }
.svc-card:hover { background:var(--bg-alt); }
.svc-icon { font-size:2.2rem; margin-bottom:1.2rem; }
.svc-card h3 {
  font-size:1.2rem; font-weight:700;
  color:var(--text-primary); margin-bottom:0.8rem; transition:color 0.3s;
}
.svc-card p { font-size:0.92rem; color:var(--text-secondary); line-height:1.8; margin-bottom:1.2rem; }
.svc-features { list-style:none; }
.svc-features li {
  font-size:0.88rem; color:var(--text-secondary);
  padding:0.3rem 0;
  display:flex; align-items:center; gap:0.5rem;
}
.svc-features li::before { content:'→'; color:var(--accent); font-size:0.75rem; }

/* ── Timeline ── */
.timeline { position:relative; padding-left:2rem; margin-top:3.5rem; }
.timeline-line {
  position:absolute; left:0; top:8px; bottom:0;
  width:1px; background:var(--border); transition:background 0.3s;
}
.tl-item { position:relative; padding:0 0 3rem 2rem; }
.tl-item:last-child { padding-bottom:0; }
.tl-dot {
  position:absolute; left:-6px; top:8px;
  width:13px; height:13px; border-radius:50%;
  background:var(--bg); border:2px solid var(--accent);
  transition:background 0.3s, transform 0.3s;
}
.tl-item:hover .tl-dot { transform:scale(1.35); background:var(--accent); }
.tl-date {
  font-size:0.8rem; font-weight:700; letter-spacing:1px;
  color:var(--accent); text-transform:uppercase; margin-bottom:0.4rem;
}
.tl-title {
  font-size:1.25rem; font-weight:700;
  color:var(--text-primary); margin-bottom:0.2rem; transition:color 0.3s;
}
.tl-company {
  font-size:0.92rem; color:var(--text-secondary);
  margin-bottom:0.8rem; font-weight:500;
}
.tl-desc { font-size:0.93rem; color:var(--text-secondary); line-height:1.85; }

/* ── Process ── */
.process-grid {
  display:grid; grid-template-columns:repeat(auto-fit, minmax(220px,1fr));
  gap:1.5rem; margin-top:3.5rem;
}
.process-card {
  background:var(--surface); border:1px solid var(--border);
  border-radius:10px; padding:2.4rem 2rem; text-align:center;
  transition: all 0.3s;
}
.process-card:hover {
  transform:translateY(-6px);
  box-shadow:0 20px 40px var(--shadow);
  border-color:var(--accent);
}
.process-num {
  width:52px; height:52px; border-radius:50%;
  background:linear-gradient(135deg,var(--accent),var(--accent-2));
  color:#fff; font-family:'Cormorant Garamond',serif;
  font-size:1.4rem; font-weight:700;
  display:flex; align-items:center; justify-content:center;
  margin:0 auto 1.2rem;
}
.process-card h3 { font-size:1.1rem; font-weight:700; color:var(--text-primary); margin-bottom:0.6rem; }
.process-card p { font-size:0.9rem; color:var(--text-secondary); line-height:1.75; }

/* ── Skills ── */
.skills-grid {
  display:grid; grid-template-columns:repeat(auto-fill, minmax(120px,1fr));
  gap:1rem; margin-top:3.5rem;
}
.skill-card {
  background:var(--surface); border:1px solid var(--border);
  border-radius:10px; padding:1.8rem 1rem;
  text-align:center; transition:all 0.3s; cursor:default;
}
.skill-card:hover {
  transform:translateY(-8px);
  border-color:var(--accent);
  box-shadow:0 16px 32px var(--shadow);
}
.skill-card img { width:52px; height:52px; margin-bottom:0.8rem; }
.skill-card p { font-size:0.82rem; font-weight:600; color:var(--text-primary); }

/* ── Projects ── */
.proj-legend {
  display:flex; gap:1.5rem; flex-wrap:wrap;
  margin-bottom:2.5rem; align-items:center;
}
.legend-item { display:flex; align-items:center; gap:0.5rem; font-size:0.85rem; font-weight:500; color:var(--text-secondary); }
.legend-dot { width:9px; height:9px; border-radius:50%; }
.legend-dot.c { background:var(--success); }
.legend-dot.p { background:var(--in-progress); }
.legend-dot.pl { background:#6b7280; }

.status-badge {
  display:inline-flex; align-items:center; gap:0.4rem;
  padding:0.3rem 0.85rem; border-radius:4px;
  font-size:0.75rem; font-weight:700; letter-spacing:0.5px;
  text-transform:uppercase;
}
.status-badge.completed { background:rgba(34,197,94,0.1); color:var(--success); border:1px solid rgba(34,197,94,0.25); }
.status-badge.in-progress { background:rgba(59,130,246,0.1); color:var(--in-progress); border:1px solid rgba(59,130,246,0.25); }
.status-badge.planned { background:rgba(156,163,175,0.1); color:#6b7280; border:1px solid rgba(156,163,175,0.25); }
.status-dot { width:7px; height:7px; border-radius:50%; }
.status-badge.completed .status-dot { background:var(--success); }
.status-badge.in-progress .status-dot { background:var(--in-progress); animation:blink 1.5s ease-in-out infinite; }
.status-badge.planned .status-dot { background:#6b7280; }

/* Featured project */
.proj-featured {
  display:grid; grid-template-columns:1.1fr 1fr;
  border:1.5px solid var(--success); border-radius:12px;
  overflow:hidden; margin-bottom:2.5rem;
  box-shadow:0 8px 40px rgba(34,197,94,0.08);
  transition:transform 0.4s, box-shadow 0.4s;
  background:var(--surface);
}
.proj-featured:hover { transform:translateY(-6px); box-shadow:0 24px 60px rgba(34,197,94,0.12); }
.proj-feat-img {
  width:100%; min-height:360px;
  background-size:cover; background-position:center;
  position:relative; overflow:hidden;
}
.proj-feat-img::after {
  content:''; position:absolute; inset:0;
  background:linear-gradient(135deg,rgba(232,93,38,0.75),rgba(245,166,35,0.55));
  opacity:0; transition:opacity 0.35s;
}
.proj-featured:hover .proj-feat-img::after { opacity:1; }
.proj-feat-overlay {
  position:absolute; top:50%; left:50%; transform:translate(-50%,-50%);
  font-family:'Cormorant Garamond',serif; font-size:2.8rem; font-weight:700;
  color:#fff; z-index:1; white-space:nowrap;
}
.proj-feat-body {
  padding:3rem; display:flex; flex-direction:column;
  justify-content:center; gap:1.1rem;
}
.proj-feat-body .proj-title {
  font-family:'Cormorant Garamond',serif;
  font-size:1.9rem; font-weight:700; color:var(--text-primary); line-height:1.2;
}
.proj-feat-body .proj-desc {
  font-size:0.95rem; color:var(--text-secondary); line-height:1.85;
}
.proj-callout {
  background:rgba(34,197,94,0.06); border-left:3px solid var(--success);
  padding:0.75rem 1rem; border-radius:0 6px 6px 0;
  font-size:0.88rem; color:#16a34a; font-weight:500;
}

/* Grid projects */
.projects-grid {
  display:grid; grid-template-columns:repeat(auto-fit, minmax(310px,1fr));
  gap:1.5rem;
}
.proj-card {
  background:var(--surface); border:1px solid var(--border);
  border-radius:12px; overflow:hidden; transition:all 0.35s;
}
.proj-card:hover { transform:translateY(-8px); box-shadow:0 24px 48px var(--shadow); border-color:var(--accent); }
.proj-card.planned { opacity:0.72; }
.proj-card.planned:hover { opacity:1; }
.proj-img {
  width:100%; height:210px;
  background-size:cover; background-position:center;
  position:relative; overflow:hidden;
}
.proj-img::after {
  content:''; position:absolute; inset:0;
  background:linear-gradient(135deg,rgba(232,93,38,0.8),rgba(245,166,35,0.6));
  opacity:0; transition:opacity 0.3s;
}
.proj-card:hover .proj-img::after { opacity:1; }
.proj-card.planned .proj-img::before {
  content:''; position:absolute; inset:0;
  background:rgba(255,255,255,0.25); backdrop-filter:blur(3px); z-index:1;
}
.img-badge { position:absolute; top:1rem; left:1rem; z-index:3; }
.proj-overlay {
  position:absolute; top:50%; left:50%; transform:translate(-50%,-50%);
  font-family:'Cormorant Garamond',serif; font-size:2rem; font-weight:700;
  color:#fff; z-index:2; white-space:nowrap;
}
.proj-body { padding:1.8rem; }
.proj-header { display:flex; justify-content:space-between; align-items:flex-start; gap:0.8rem; margin-bottom:0.8rem; }
.proj-title { font-size:1.2rem; font-weight:700; color:var(--text-primary); transition:color 0.3s; }
.proj-desc { font-size:0.9rem; color:var(--text-secondary); line-height:1.8; margin-bottom:1.2rem; }
.progress-wrap { margin-bottom:1.2rem; }
.progress-label {
  display:flex; justify-content:space-between;
  font-size:0.8rem; font-weight:600; color:var(--text-secondary);
  margin-bottom:0.4rem;
}
.progress-bar { height:5px; background:var(--border); border-radius:99px; overflow:hidden; }
.progress-fill { height:100%; border-radius:99px; background:var(--in-progress); transition:width 0.6s ease; }
.proj-tags { display:flex; flex-wrap:wrap; gap:0.5rem; margin-bottom:1.2rem; }
.proj-tag {
  padding:0.3rem 0.75rem; background:var(--tag-bg);
  border-radius:4px; font-size:0.78rem; font-weight:500; color:var(--text-primary);
  transition:background 0.3s, color 0.3s;
}
.proj-links { display:flex; gap:1.5rem; }
.proj-links a { color:var(--accent); text-decoration:none; font-weight:600; font-size:0.88rem; transition:color 0.3s; }
.proj-links a:hover { color:var(--text-primary); }
.proj-links a.disabled { color:#6b7280; pointer-events:none; }

/* ── Achievements ── */
.ach-grid {
  display:grid; grid-template-columns:repeat(auto-fit, minmax(280px,1fr));
  gap:1.5rem; margin-top:3.5rem;
}
.ach-card {
  background:var(--surface); border:1px solid var(--border);
  border-radius:10px; padding:2.4rem;
  transition:all 0.3s;
}
.ach-card:hover { border-color:var(--accent); transform:translateY(-5px); box-shadow:0 20px 40px var(--shadow); }
.ach-icon { font-size:2.2rem; margin-bottom:1.2rem; }
.ach-card h3 { font-size:1.1rem; font-weight:700; color:var(--text-primary); margin-bottom:0.6rem; }
.ach-card p { font-size:0.9rem; color:var(--text-secondary); line-height:1.75; }

/* ── Blog ── */
.blog-grid { display:grid; grid-template-columns:repeat(auto-fit, minmax(300px,1fr)); gap:1.5rem; margin-top:3.5rem; }
.blog-card { background:var(--surface); border:1px solid var(--border); border-radius:12px; overflow:hidden; transition:all 0.3s; }
.blog-card:hover { transform:translateY(-5px); box-shadow:0 20px 40px var(--shadow); }
.blog-img { width:100%; height:180px; position:relative; }
.blog-date {
  position:absolute; top:1rem; right:1rem;
  background:var(--surface); padding:0.4rem 0.9rem;
  border-radius:4px; font-size:0.8rem; font-weight:600; color:var(--accent);
}
.blog-body { padding:1.8rem; }
.blog-cat { color:var(--accent); font-size:0.78rem; font-weight:700; text-transform:uppercase; letter-spacing:1.2px; margin-bottom:0.6rem; }
.blog-title { font-size:1.2rem; font-weight:700; color:var(--text-primary); margin-bottom:0.6rem; line-height:1.4; }
.blog-exc { font-size:0.9rem; color:var(--text-secondary); line-height:1.75; margin-bottom:1.2rem; }
.blog-link { color:var(--accent); font-weight:600; font-size:0.88rem; text-decoration:none; transition:color 0.3s; }
.blog-link:hover { color:var(--text-primary); }

/* ── Testimonials ── */
.test-grid { display:grid; grid-template-columns:repeat(auto-fit, minmax(320px,1fr)); gap:1.5rem; margin-top:3.5rem; }
.test-card {
  background:var(--surface); border:1px solid var(--border);
  border-radius:12px; padding:2.8rem; position:relative; transition:all 0.3s;
}
.test-card:hover { border-color:var(--accent); box-shadow:0 20px 40px var(--shadow); }
.test-quote {
  font-family:'Cormorant Garamond',serif;
  position:absolute; top:1.5rem; left:2rem;
  font-size:5rem; color:var(--accent); opacity:0.12; line-height:1;
}
.test-text { font-size:1rem; color:var(--text-secondary); line-height:1.9; margin-bottom:2rem; position:relative; z-index:1; }
.test-author { display:flex; align-items:center; gap:1rem; }
.author-ava {
  width:46px; height:46px; border-radius:50%;
  background:linear-gradient(135deg,var(--accent),var(--accent-2));
  display:flex; align-items:center; justify-content:center;
  color:#fff; font-weight:700; font-size:0.85rem; flex-shrink:0;
}
.author-name { font-weight:700; font-size:0.95rem; color:var(--text-primary); }
.author-role { font-size:0.82rem; color:var(--text-secondary); }

/* ── CTA Banner ── */
.cta-banner {
  margin:6rem 2.5rem;
  background:linear-gradient(135deg, var(--accent) 0%, var(--accent-2) 100%);
  border-radius:16px; padding:5rem 3rem; text-align:center;
  position:relative; overflow:hidden;
}
.cta-banner::before {
  content:''; position:absolute; inset:0;
  background:url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.06'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
}
.cta-banner h2 {
  font-family:'Cormorant Garamond',serif;
  font-size:clamp(2rem,4vw,3rem); font-weight:700;
  color:#fff; margin-bottom:1rem; position:relative;
}
.cta-banner p { font-size:1.1rem; color:rgba(255,255,255,0.88); max-width:540px; margin:0 auto 2.5rem; position:relative; }
.cta-btn {
  background:#fff; color:var(--accent);
  padding:1rem 2.8rem; border-radius:4px;
  text-decoration:none; font-weight:700; font-size:1rem;
  display:inline-block; transition:all 0.3s; position:relative;
}
.cta-btn:hover { transform:translateY(-3px); box-shadow:0 16px 40px rgba(0,0,0,0.2); }

/* ── Contact ── */
.contact-grid { display:grid; grid-template-columns:1fr 1fr; gap:5rem; align-items:center; margin-top:4rem; }
.contact-info h3 {
  font-family:'Cormorant Garamond',serif;
  font-size:2rem; color:var(--text-primary); margin-bottom:1.2rem; transition:color 0.3s;
}
.contact-info p { font-size:1rem; color:var(--text-secondary); line-height:1.9; margin-bottom:1.5rem; }
.contact-methods { display:flex; flex-direction:column; gap:1rem; }
.contact-item {
  display:flex; align-items:center; gap:1.2rem;
  padding:1.2rem 1.5rem;
  background:var(--surface); border:1px solid var(--border);
  border-radius:8px; text-decoration:none; color:inherit;
  transition:all 0.3s;
}
.contact-item:hover { border-color:var(--accent); transform:translateX(8px); box-shadow:0 8px 24px var(--shadow); }
.contact-item img { width:36px; height:36px; }
.contact-item h4 { font-weight:600; font-size:0.92rem; color:var(--text-primary); margin-bottom:0.2rem; }
.contact-item p { font-size:0.85rem; color:var(--text-secondary); margin:0; }
.social-links { display:flex; flex-wrap:wrap; gap:1rem; justify-content:center; }
.social-link { text-decoration:none; transition:transform 0.3s; }
.social-link:hover { transform:translateY(-5px); }

/* ── Footer ── */
.footer {
  background:var(--bg-alt); border-top:1px solid var(--border);
  padding:3.5rem 2.5rem; text-align:center;
  transition:background 0.35s, border-color 0.35s;
}
.footer-logo {
  font-family:'Cormorant Garamond',serif;
  font-size:1.6rem; font-weight:700; color:var(--text-primary);
  margin-bottom:1.5rem; letter-spacing:0.5px;
}
.footer-logo span { color:var(--accent); }
.footer p { font-size:0.88rem; color:var(--text-secondary); margin-bottom:0.5rem; }
.footer-links { display:flex; justify-content:center; gap:2rem; margin-top:1.5rem; flex-wrap:wrap; }
.footer-links a { color:var(--text-secondary); text-decoration:none; font-size:0.88rem; font-weight:500; transition:color 0.3s; }
.footer-links a:hover { color:var(--accent); }
.footer-sep { width:40px; height:2px; background:var(--border); border-radius:2px; margin:1.5rem auto; }

/* ── Scroll to top ── */
.scroll-top {
  position:fixed; bottom:2rem; right:2rem;
  width:44px; height:44px; border-radius:8px;
  background:var(--accent); color:#fff;
  border:none; cursor:pointer; font-size:1.1rem;
  display:flex; align-items:center; justify-content:center;
  box-shadow:0 8px 20px var(--shadow);
  transition:all 0.3s; z-index:999;
  opacity:0; pointer-events:none;
}
.scroll-top.visible { opacity:1; pointer-events:auto; }
.scroll-top:hover { transform:translateY(-3px); box-shadow:0 12px 28px var(--shadow); }

/* ── Responsive ── */
@media (max-width:1024px) {
  .about-grid, .contact-grid { grid-template-columns:1fr; gap:3rem; }
  .proj-featured { grid-template-columns:1fr; }
  .proj-feat-img { min-height:280px; }
}
@media (max-width:768px) {
  .nav-links { display:none; }
  .section { padding:70px 1.5rem; }
  .section-full { padding:70px 1.5rem; }
  .stats-row { grid-template-columns:repeat(2,1fr); }
  .cta-banner { margin:4rem 1.5rem; padding:4rem 2rem; }
  .hero { padding:120px 1.5rem 80px; }
}
`;

/* ─────────────────────────────────────────────
   COMPONENT
───────────────────────────────────────────── */
export default function Home() {
  const [dark, setDark] = useState(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("portfolio-theme");
      if (saved) return saved === "dark";
      return window.matchMedia("(prefers-color-scheme: dark)").matches;
    }
    return false;
  });
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => { applyTheme(dark ? DARK : LIGHT); }, [dark]);

  useEffect(() => {
    localStorage.setItem("portfolio-theme", dark ? "dark" : "light");
  }, [dark]);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 400);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const toggle = () => setDark(d => !d);

  return (
    <>
      <style>{CSS}</style>

      {/* ── Navbar ── */}
      <nav className="navbar">
        <div className="navbar-content">
          <div className="logo">SANGWA<span>.</span></div>
          <ul className="nav-links">
            {["home","about","services","skills","projects","blog","contact"].map(id => (
              <li key={id}><a href={`#${id}`}>{id.charAt(0).toUpperCase()+id.slice(1)}</a></li>
            ))}
          </ul>
          <div className="nav-right">
            <button
              className="theme-toggle"
              onClick={toggle}
              aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
              title={dark ? "Light mode" : "Dark mode"}
            >
              <div className={`theme-toggle-knob${dark ? " dark" : ""}`}>
                {dark ? "🌙" : "☀️"}
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* ── Hero ── */}
      <section id="home" className="hero">
        <div className="hero-bg">
          <div className="hero-grid" />
          <div className="hero-orb hero-orb-1" />
          <div className="hero-orb hero-orb-2" />
        </div>
        <div className="hero-content">
          <div className="hero-chip anim d1">
            <span className="hero-chip-dot" />
            Open to work & collaboration
          </div>
          <h1 className="hero-title anim d2">
            SANGWA Marius
            <span className="hero-title-grad">Software Developer</span>
          </h1>
          <p className="hero-desc anim d3">
            A passionate student at Rwanda Coding Academy, crafting digital solutions
            that make a difference. Specializing in web development with a focus on
            clean code and exceptional user experiences.
          </p>
          <div className="hero-cta anim d4">
            <a href="#projects" className="btn-primary">View My Work</a>
            <a href="#contact" className="btn-secondary">Get In Touch</a>
          </div>
        </div>
      </section>

      {/* ── Stats ── */}
      <div className="section">
        <div className="stats-row">
          {[["3+","Years Learning"],["20+","Projects Built"],["10+","Technologies"],["100%","Dedicated"]].map(([n,l])=>(
            <div className="stat-cell" key={l}>
              <div className="stat-number">{n}</div>
              <div className="stat-label">{l}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ── About ── */}
      <section id="about" className="section">
        <p className="section-eyebrow">About Me</p>
        <h2 className="section-title">Who I Am</h2>
        <div className="divider" />
        <div className="about-grid">
          <div className="about-img-wrap">
            <div className="about-img-frame">
              <img src={Photo} alt="SANGWA Marius" />
            </div>
            <div className="about-badge">
              <div className="about-badge-icon">🎓</div>
              <div>
                <div className="about-badge-text">Rwanda Coding Academy</div>
                <div className="about-badge-sub">2022 — Present</div>
              </div>
            </div>
          </div>
          <div className="about-text">
            <h3>Building the Future, One Line at a Time</h3>
            <p>I'm <strong>SANGWA Marius</strong>, a dedicated student at Rwanda Coding Academy
            pursuing excellence in software development. My journey in tech began with curiosity
            and has evolved into a genuine passion for creating meaningful digital solutions.</p>
            <p>Through rigorous coursework and hands-on projects, I've developed strong foundations
            in web development, database management, and software engineering principles. I thrive
            in collaborative environments and believe in the power of technology to solve real-world problems.</p>
            <p>My approach combines technical expertise with creative problem-solving, always
            striving to write clean, maintainable code while delivering exceptional user experiences.</p>
            <div className="tags-row">
              {["🎯 Problem Solving","💻 Web Development","🎨 UI/UX Design","📚 Continuous Learning","🤝 Collaboration","🚀 Innovation"].map(t=>(
                <span className="tag" key={t}>{t}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Services ── */}
      <div id="services" className="section-full">
        <div className="section-full-inner">
          <p className="section-eyebrow">What I Do</p>
          <h2 className="section-title">Services</h2>
          <div className="divider" />
          <div className="services-grid">
            {[
              ["🌐","Web Development","Creating responsive, performant websites and web applications using modern frameworks and best practices.",["Frontend Development","Backend Integration","Responsive Design","Performance Optimization"]],
              ["🎨","UI/UX Design","Designing intuitive and beautiful user interfaces that provide exceptional user experiences across all devices.",["User Interface Design","Prototyping","User Testing","Design Systems"]],
              ["💾","Database Design","Building efficient and scalable database solutions to manage and store your application data securely.",["Database Architecture","Query Optimization","Data Migration","Security Implementation"]],
              ["🔧","Website Maintenance","Providing ongoing support and maintenance to keep your website running smoothly and up-to-date.",["Regular Updates","Bug Fixes","Security Patches","Performance Monitoring"]],
              ["📱","Responsive Development","Ensuring your website looks and works perfectly on all devices, from smartphones to desktop computers.",["Mobile-First Approach","Cross-Browser Testing","Touch Optimization","Adaptive Layouts"]],
              ["🚀","API Integration","Connecting your applications with third-party services and building custom APIs for seamless data exchange.",["RESTful APIs","Third-party Integration","Authentication","API Documentation"]],
            ].map(([icon,title,desc,feats])=>(
              <div className="svc-card" key={title}>
                <div className="svc-icon">{icon}</div>
                <h3>{title}</h3>
                <p>{desc}</p>
                <ul className="svc-features">
                  {feats.map(f=><li key={f}>{f}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Experience ── */}
      <section id="experience" className="section">
        <p className="section-eyebrow">Background</p>
        <h2 className="section-title">Education & Experience</h2>
        <div className="divider" />
        <div className="timeline">
          <div className="timeline-line" />
          {[
            ["2022 – Present","A Level · Software Development","Rwanda Coding Academy (RCA)","Currently pursuing advanced studies in Software Development & Digital Innovation. Intensive coursework covering full-stack development, database systems, software engineering principles, and agile methodologies. Active participant in coding competitions and tech community events, working on collaborative projects that simulate real-world development scenarios."],
            ["2023 – 2024","Junior Developer Projects","Personal & Academic Work","Developed multiple web applications using React, JavaScript, and modern frontend technologies. Collaborated with peers on team projects, implementing responsive designs and interactive user interfaces. Gained practical experience in version control, code review, and agile development practices."],
            ["2019 – 2022","O Level Education","Ecole Des Sciences Byimana","Completed secondary education with a strong focus on mathematics and sciences. Developed foundational analytical and problem-solving skills that later proved invaluable in programming and software development."],
            ["2013 – 2018","Primary Education","Fountain View Academy","Completed primary education with excellent academic performance. Early exposure to computers and technology sparked the initial interest in the digital world."],
          ].map(([date,title,company,desc])=>(
            <div className="tl-item" key={title}>
              <div className="tl-dot" />
              <div className="tl-date">{date}</div>
              <div className="tl-title">{title}</div>
              <div className="tl-company">{company}</div>
              <p className="tl-desc">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Process ── */}
      <div className="section-full">
        <div className="section-full-inner">
          <p className="section-eyebrow">How I Work</p>
          <h2 className="section-title">My Development Process</h2>
          <div className="divider" />
          <div className="process-grid">
            {[["1","Discovery","Understanding your requirements, goals, and target audience to create a solid foundation."],["2","Planning","Creating detailed project plans, wireframes, and technical specifications to guide development."],["3","Design","Crafting beautiful, user-friendly interfaces aligned with your brand that delight users."],["4","Development","Writing clean, efficient code using modern technologies and best practices."],["5","Testing","Rigorous testing across devices and browsers to ensure everything works flawlessly."],["6","Launch","Deploying your project and providing ongoing support to ensure continued success."]].map(([n,t,d])=>(
              <div className="process-card" key={n}>
                <div className="process-num">{n}</div>
                <h3>{t}</h3>
                <p>{d}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Skills ── */}
      <section id="skills" className="section">
        <p className="section-eyebrow">Toolkit</p>
        <h2 className="section-title">Technical Skills</h2>
        <div className="divider" />
        <div className="skills-grid">
          {[["figma","UI/UX Design"],["html","HTML5"],["css","CSS3"],["js","JavaScript"],["react","React"],["nodejs","Node.js"],["mysql","MySQL"],["postgresql","PostgreSQL"],["php","PHP"],["git","Git"],["github","GitHub"],["vscode","VS Code"],["tailwind","Tailwind CSS"],["bootstrap","Bootstrap"]].map(([i,l])=>(
            <div className="skill-card" key={i}>
              <img src={`https://skillicons.dev/icons?i=${i}`} alt={l} />
              <p>{l}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Projects ── */}
      <div id="projects" className="section-full">
        <div className="section-full-inner">
          <p className="section-eyebrow">Portfolio</p>
          <h2 className="section-title">Featured Projects</h2>
          <div className="divider" />

          <div className="proj-legend">
            <div className="legend-item"><div className="legend-dot c" />Completed</div>
            <div className="legend-item"><div className="legend-dot p" />In Progress</div>
            <div className="legend-item"><div className="legend-dot pl" />Planned</div>
          </div>

          {/* Featured */}
          <div className="proj-featured">
            <div className="proj-feat-img" style={{backgroundImage:'url(https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80)'}}>
              <div className="proj-feat-overlay">EduPortal</div>
            </div>
            <div className="proj-feat-body">
              <span className="status-badge completed"><span className="status-dot" /> Completed</span>
              <div className="proj-title">Student Portal System</div>
              <p className="proj-desc">A comprehensive student management system built for educational institutions — featuring attendance tracking, grade management, announcements, parent-teacher communication, assignment submission, and class schedules. Built with a clean, role-based interface for students, teachers, and administrators.</p>
              <div className="proj-callout">✦ Flagship completed project — fully built, tested, and deployed.</div>
              <div className="proj-tags">
                {["React","PHP","MySQL","Bootstrap"].map(t=><span className="proj-tag" key={t}>{t}</span>)}
              </div>
              <div className="proj-links">
                <a href="https://sangwa-marius.github.io/php_msms/" target="_blank" rel="noopener noreferrer">Live Demo →</a>
                <a href="https://github.com/sangwa-marius/php_sms.git" target="_blank" rel="noopener noreferrer">GitHub →</a>
              </div>
            </div>
          </div>

  
          <div className="projects-grid">
           
            {[
              {overlay:"E-Shop",img:"https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80",title:"E-Commerce Platform",pct:60,desc:"Full-featured shopping platform with product catalog, cart, and checkout. Backend and database are done; currently polishing the frontend UI and admin dashboard.",tags:["React","PHP","MySQL","CSS3"]},
              {overlay:"TaskFlow",img:"https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&q=80",title:"Task Management App",pct:40,desc:"Productivity app for managing tasks and deadlines with drag-and-drop boards. Core task CRUD is working; team collaboration and real-time sync in development.",tags:["React","JavaScript","Node.js","PostgreSQL"]},
              {overlay:"FoodHub",img:"https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80",title:"Restaurant Ordering System",pct:30,desc:"Online food ordering platform with menu management and order tracking. Currently building the menu and order flow; payment and notifications coming next.",tags:["React","PHP","MySQL","API"]},
            ].map(({overlay,img,title,pct,desc,tags})=>(
              <div className="proj-card" key={title}>
                <div className="proj-img" style={{backgroundImage:`url(${img})`}}>
                  <div className="img-badge"><span className="status-badge in-progress"><span className="status-dot" /> In Progress</span></div>
                  <div className="proj-overlay">{overlay}</div>
                </div>
                <div className="proj-body">
                  <div className="proj-header"><h3 className="proj-title">{title}</h3></div>
                  <div className="progress-wrap">
                    <div className="progress-label"><span>Progress</span><span>{pct}%</span></div>
                    <div className="progress-bar"><div className="progress-fill" style={{width:`${pct}%`}} /></div>
                  </div>
                  <p className="proj-desc">{desc}</p>
                  <div className="proj-tags">{tags.map(t=><span className="proj-tag" key={t}>{t}</span>)}</div>
                  <div className="proj-links">
                    <a className="disabled">Live Demo (coming soon)</a>
                    <a href="#" target="_blank" rel="noopener noreferrer">GitHub →</a>
                  </div>
                </div>
              </div>
            ))}
           
            {[
              {overlay:"WeatherPro",img:"https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&q=80",title:"Weather Dashboard",desc:"Sleek weather app with 7-day forecasts, location search, and weather animations. Planned after current in-progress projects wrap up.",tags:["React","Weather API","CSS3","JavaScript"]},
              {overlay:"Analytics",img:"https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",title:"Business Analytics Dashboard",desc:"Interactive analytics platform with real-time KPI tracking and chart exports. A future deep-dive into data visualization libraries.",tags:["React","D3.js","Node.js","MongoDB"]},
              {overlay:"ChatApp",img:"https://images.unsplash.com/photo-1522542550221-31fd19575a2d?w=800&q=80",title:"Real-Time Chat Application",desc:"Modern messaging platform with group chats, file sharing, and end-to-end encryption. A future project to explore WebSocket architecture.",tags:["React","Socket.io","Node.js","MongoDB"]},
            ].map(({overlay,img,title,desc,tags})=>(
              <div className="proj-card planned" key={title}>
                <div className="proj-img" style={{backgroundImage:`url(${img})`}}>
                  <div className="img-badge"><span className="status-badge planned"><span className="status-dot" /> Planned</span></div>
                  <div className="proj-overlay">{overlay}</div>
                </div>
                <div className="proj-body">
                  <div className="proj-header"><h3 className="proj-title">{title}</h3></div>
                  <p className="proj-desc">{desc}</p>
                  <div className="proj-tags">{tags.map(t=><span className="proj-tag" key={t}>{t}</span>)}</div>
                  <div className="proj-links"><a className="disabled">Not started yet</a></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Achievements ── */}
      <section className="section">
        <p className="section-eyebrow">Recognition</p>
        <h2 className="section-title">Achievements & Certifications</h2>
        <div className="divider" />
        <div className="ach-grid">
          {[
            ["🏆","Dean's List","Recognized for academic excellence with consistent high performance throughout coursework at Rwanda Coding Academy. Maintained a strong GPA while actively participating in extracurricular coding activities."],
            ["💻","Hackathon Participant","Participated in multiple coding competitions and hackathons, developing innovative solutions under tight deadlines. Gained experience in rapid prototyping and teamwork under pressure."],
            ["🎓","Web Development Certificate","Completed comprehensive training in modern web development technologies. Certified in HTML5, CSS3, JavaScript, React, and responsive design principles."],
            ["🌟","Best Project Award","Received recognition for outstanding project work demonstrating creativity, technical skill, and practical application. Project selected among 50+ submissions for innovation and quality."],
            ["🤝","Team Leadership","Led multiple collaborative projects, coordinating team efforts and ensuring successful delivery. Managed teams of 3–5 developers using agile methodologies."],
            ["📚","Continuous Learner","Actively pursuing knowledge through online courses and tutorials. Completed courses in advanced JavaScript, React, Node.js, and database management."],
          ].map(([icon,title,desc])=>(
            <div className="ach-card" key={title}>
              <div className="ach-icon">{icon}</div>
              <h3>{title}</h3>
              <p>{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Blog ── */}
      <div id="blog" className="section-full">
        <div className="section-full-inner">
          <p className="section-eyebrow">Writing</p>
          <h2 className="section-title">Latest from Blog</h2>
          <div className="divider" />
          <div className="blog-grid">
            {[
              {grad:"linear-gradient(135deg,#667eea,#764ba2)",date:"Dec 15, 2025",cat:"Tutorial",title:"Building Responsive Layouts with CSS Grid",exc:"Learn how to create flexible and responsive layouts using CSS Grid. A comprehensive guide for modern web development."},
              {grad:"linear-gradient(135deg,#f093fb,#f5576c)",date:"Dec 10, 2025",cat:"Development",title:"React Hooks: A Complete Guide",exc:"Deep dive into React Hooks and how they can simplify your component logic and state management."},
              {grad:"linear-gradient(135deg,#4facfe,#00f2fe)",date:"Dec 5, 2025",cat:"Best Practices",title:"Writing Clean and Maintainable Code",exc:"Essential principles and practices for writing code that's easy to read, understand, and maintain."},
            ].map(({grad,date,cat,title,exc})=>(
              <div className="blog-card" key={title}>
                <div className="blog-img" style={{background:grad}}>
                  <div className="blog-date">{date}</div>
                </div>
                <div className="blog-body">
                  <div className="blog-cat">{cat}</div>
                  <h3 className="blog-title">{title}</h3>
                  <p className="blog-exc">{exc}</p>
                  <a href="#" className="blog-link">Read More →</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Testimonials ── */}
      <section className="section">
        <p className="section-eyebrow">Kind Words</p>
        <h2 className="section-title">What People Say</h2>
        <div className="divider" />
        <div className="test-grid">
          {[
            ["AH","AGABA Happy Jean Eudes","Classmate","Marius demonstrates exceptional dedication to his craft. His ability to quickly grasp complex concepts and apply them in practical projects is impressive. A true asset to any development team."],
            ["IR","ISHIMWE Rocky","Classmate & Project Partner","Working with Marius on our team project was a great experience. His problem-solving skills and attention to detail helped us deliver a polished final product ahead of schedule."],
            ["IFH","ISEZERANO Forever Hyacinthe","Project Partner","Marius brings creativity and technical expertise to every project. His clean code and thoughtful approach to software design show maturity beyond his years."],
          ].map(([av,name,role,text])=>(
            <div className="test-card" key={name}>
              <div className="test-quote">"</div>
              <p className="test-text">{text}</p>
              <div className="test-author">
                <div className="author-ava">{av}</div>
                <div>
                  <div className="author-name">{name}</div>
                  <div className="author-role">{role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <div className="cta-banner">
        <h2>Let's Work Together</h2>
        <p>Have a project in mind? I'm always open to discussing new opportunities, creative ideas, or collaborations.</p>
        <a href="#contact" className="cta-btn">Start a Project</a>
      </div>

      {/* ── Contact ── */}
      <section id="contact" className="section">
        <p className="section-eyebrow">Get In Touch</p>
        <h2 className="section-title">Let's Connect</h2>
        <div className="divider" />
        <div className="contact-grid">
          <div className="contact-info">
            <h3>Ready to Collaborate?</h3>
            <p>I'm always interested in hearing about new opportunities, interesting projects, or just connecting with fellow developers. Whether you have a question, a project proposal, or just want to say hello — feel free to reach out!</p>
            <p>I typically respond within 24 hours and look forward to hearing from you. Let's build something amazing together!</p>
            <div className="contact-methods">
              <a href="https://mail.google.com/mail/?view=cm&fs=1&to=mariussangwa@gmail.com" target="_blank" rel="noopener noreferrer" className="contact-item">
                <img src="https://skillicons.dev/icons?i=gmail" alt="Email" />
                <div><h4>Email</h4><p>mariussangwa@gmail.com</p></div>
              </a>
              <a href="https://github.com/sangwa-marius" target="_blank" rel="noopener noreferrer" className="contact-item">
                <img src="https://skillicons.dev/icons?i=github" alt="GitHub" />
                <div><h4>GitHub</h4><p>@sangwa-marius</p></div>
              </a>
              <a href="https://www.linkedin.com/in/sangwa-marius" target="_blank" rel="noopener noreferrer" className="contact-item">
                <img src="https://skillicons.dev/icons?i=linkedin" alt="LinkedIn" />
                <div><h4>LinkedIn</h4><p>SANGWA Marius</p></div>
              </a>
            </div>
          </div>
          <div>
            <div className="social-links">
              {[
                ["https://mail.google.com/mail/?view=cm&fs=1&to=mariussangwa@gmail.com","gmail","Email"],
                ["https://instagram.com/sangwa_marius_","instagram","Instagram"],
                ["https://github.com/sangwa-marius","github","GitHub"],
                ["https://www.linkedin.com/in/sangwa-marius","linkedin","LinkedIn"],
                ["https://twitter.com/sangwa_marius","twitter","Twitter"],
              ].map(([href,icon,text])=>(
                <a href={href} target="_blank" rel="noopener noreferrer" className="social-link" key={icon}>
                  <Container img={`https://skillicons.dev/icons?i=${icon}`} text={text} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="footer">
        <div className="footer-logo">SANGWA<span>.</span></div>
        <p>© {new Date().getFullYear()} SANGWA Marius. All rights reserved.</p>
        <p>Designed & built with passion, dedication, and lots of coffee ☕</p>
        <div className="footer-sep" />
        <div className="footer-links">
          {["home","about","services","projects","blog","contact"].map(id=>(
            <a href={`#${id}`} key={id}>{id.charAt(0).toUpperCase()+id.slice(1)}</a>
          ))}
        </div>
      </footer>

      {/* ── Scroll to top ── */}
      <button
        className={`scroll-top${scrolled?" visible":""}`}
        onClick={()=>window.scrollTo({top:0,behavior:"smooth"})}
        aria-label="Scroll to top"
      >↑</button>
    </>
  );
}