import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Link } from "react-router-dom";

// ─── Mata Ki Chowki Assets (paths match your app.jsx imports) ─────────────────
import m1  from "../../assets/m1.mp4";
import m2  from "../../assets/m2.mp4";
import m3  from "../../assets/m3.jpeg";
import m4  from "../../assets/m4.jpeg";
import m5  from "../../assets/m5.jpeg";
import m6  from "../../assets/m6.jpeg";
import m7  from "../../assets/m7.jpeg";
import m8  from "../../assets/m8.jpeg";
import m9  from "../../assets/m9.jpeg";
import m10 from "../../assets/m10.jpeg";
import m11 from "../../assets/m11.jpeg";
import m12 from "../../assets/m12.jpeg";
import m13 from "../../assets/m13.jpeg";
import m14 from "../../assets/m14.jpeg";
import m15 from "../../assets/m15.jpeg";
import m16 from "../../assets/m16.jpeg";
import m17 from "../../assets/m17.jpeg";
import m18 from "../../assets/m18.jpeg";
import m19 from "../../assets/m19.jpeg";
import m20 from "../../assets/m20.jpeg";
import m21 from "../../assets/m21.jpeg";
import m22 from "../../assets/m22.jpeg";
import m23 from "../../assets/m23.jpeg";
import m24 from "../../assets/m24.jpeg";
import m25 from "../../assets/m25.jpeg";
import m26 from "../../assets/m26.jpeg";

// ─── GALLERY DATA ─────────────────────────────────────────────────────────────
const GALLERY_TABS = [
  { id: "all",      label: "All"        },
  { id: "decor",    label: "Decor"      },
  { id: "ceremony", label: "Ceremony"   },
  { id: "darbar",   label: "Mata Darbar"},
  { id: "moments",  label: "Moments"    },
  { id: "videos",   label: "Videos"     },
];

const ALL_GALLERY = [
  { type: "video", src: m1,  title: "Divine Ceremony",     tab: "videos"   },
  { type: "video", src: m2,  title: "Sacred Night",        tab: "videos"   },
  { type: "image", src: m3,  title: "Spiritual Gathering", tab: "moments"  },
  { type: "image", src: m4,  title: "Aarti Moments",       tab: "ceremony" },
  { type: "image", src: m5,  title: "Bhajan Night",        tab: "moments"  },
  { type: "image", src: m6,  title: "Mata Darbar",         tab: "darbar"   },
  { type: "image", src: m7,  title: "Jagran Highlights",   tab: "moments"  },
  { type: "image", src: m8,  title: "Divine Grace",        tab: "darbar"   },
  { type: "image", src: m9,  title: "Decor Setup",         tab: "decor"    },
  { type: "image", src: m10, title: "Floral Offerings",    tab: "decor"    },
  { type: "image", src: m11, title: "Devi Sthan",          tab: "darbar"   },
  { type: "image", src: m12, title: "Puja Arrangements",   tab: "ceremony" },
  { type: "image", src: m13, title: "Sacred Lights",       tab: "decor"    },
  { type: "image", src: m14, title: "Mandap Decor",        tab: "decor"    },
  { type: "image", src: m15, title: "Ritual Space",        tab: "ceremony" },
  { type: "image", src: m16, title: "Kalash Setup",        tab: "decor"    },
  { type: "image", src: m17, title: "Flower Rangoli",      tab: "decor"    },
  { type: "image", src: m18, title: "Diya Decor",          tab: "decor"    },
  { type: "image", src: m19, title: "Spiritual Ambiance",  tab: "moments"  },
  { type: "image", src: m20, title: "Evening Ceremony",    tab: "ceremony" },
  { type: "image", src: m21, title: "Chowki Highlights",   tab: "moments"  },
  { type: "image", src: m22, title: "Devotional Moments",  tab: "moments"  },
  { type: "image", src: m23, title: "Prasad Distribution", tab: "ceremony" },
  { type: "image", src: m24, title: "Night Aarti",         tab: "ceremony" },
  { type: "image", src: m25, title: "Sacred Gathering",    tab: "moments"  },
  { type: "image", src: m26, title: "Full Ceremony",       tab: "darbar"   },
];

const BHAJAN_ARTISTS = [
  { label: "Narendra Chanchal Style", emoji: "🎤" },
  { label: "Lakhbir Singh Lakkha",    emoji: "🎵" },
  { label: "Anuradha Paudwal Style",  emoji: "🙏" },
  { label: "Hans Raj Hans Style",     emoji: "✨" },
  { label: "Live Dhol & Nagara",      emoji: "🥁" },
  { label: "Traditional Harmonium",   emoji: "🎹" },
  { label: "Shehnai Group",           emoji: "🎺" },
  { label: "Kirtan Mandali",          emoji: "🪘" },
  { label: "Female Vocalist Group",   emoji: "🌸" },
  { label: "Children Bhajan Group",   emoji: "💛" },
  { label: "Fusion Devotional",       emoji: "🎶" },
  { label: "Classical Bhajan Group",  emoji: "🕉️" },
];

const CHOWKI_ELEMENTS = [
  { label: "Mata Ki Murti Sthapna", emoji: "🪔" },
  { label: "Kalash Sthapna",        emoji: "🏺" },
  { label: "Chunri Decoration",     emoji: "🧣" },
  { label: "Flower Rangoli",        emoji: "🌸" },
  { label: "Diya Arrangement",      emoji: "🕯️" },
  { label: "Navratri Special",      emoji: "💃" },
  { label: "Prasad Distribution",   emoji: "🍛" },
  { label: "Langar Seva",           emoji: "🙏" },
  { label: "Kanya Puja",            emoji: "👧" },
  { label: "Hawan / Yagna",         emoji: "🔥" },
  { label: "Jyot Jalana",           emoji: "✨" },
  { label: "Sindoor & Shringar",    emoji: "💄" },
];

const HIGHLIGHTS = [
  { emoji: "🪔", title: "Devi Sthan Setup",      desc: "Beautifully crafted Mata's throne with traditional draping, chunri, and floral decorations." },
  { emoji: "🌸", title: "Floral & Diya Décor",   desc: "Hand-crafted rangoli, fresh flower arrangements, and hundreds of diyas illuminating the space." },
  { emoji: "🥁", title: "Live Bhajan Group",      desc: "Devotional singers, dhol, harmonium, and nagara for an immersive spiritual experience." },
  { emoji: "🏺", title: "Kalash & Puja Samagri", desc: "Complete puja arrangement with kalash, coconut, chunni, incense, and all samagri provided." },
  { emoji: "📸", title: "Photo & Video",          desc: "Cinematic coverage of the entire chowki — aarti, bhajans, prasad, and all sacred moments." },
  { emoji: "🍛", title: "Prasad & Langar",        desc: "Traditional prasad preparation and langar seva management for all attendees." },
  { emoji: "🎪", title: "Pandal & Tent Setup",    desc: "Decorated pandals, shamiana, and seating arrangements for indoor or outdoor chowkis." },
  { emoji: "💡", title: "Sacred Lighting",        desc: "Warm divine lighting, LED backdrop panels, and fairy light canopies for a heavenly ambiance." },
];

const PACKAGES = [
  {
    name: "Saral",
    price: "₹21,000–31,000",
    unit: "",
    tagline: "Intimate — Up to 100 Guests",
    featured: false,
    features: [
      "Mata Sthan Basic Setup",
      "Flower & Diya Decoration",
      "Bhajan Group (2 Artists)",
      "Dhol & Harmonium",
      "Kalash Sthapna Samagri",
      "2–3 Hour Programme",
    ],
  },
  {
    name: "Divya",
    price: "₹40,000–80,000",
    unit: "",
    tagline: "100–300 Guests",
    featured: true,
    features: [
      "Full Devi Sthan Transformation",
      "Premium Floral Rangoli",
      "Live Bhajan Group (3 Artists)",
      "Sound System & Lighting",
      "Kanya Puja Arrangements",
    ],
  },
  {
    name: "Mahotsav",
    price: "Custom",
    unit: " Quote",
    tagline: "300+ Guests / Multi-Day Jagran",
    featured: false,
    features: [
      "Grand Venue Transformation",
      "Celebrity Bhajan Singer",
      "Multi-Day Jagran Setup",
      "LED Stage & Backdrop",
      "Complete Event Management",
    ],
  },
];

const SERVICES = [
  "Mata Sthan Decoration",
  "Kalash Sthapna",
  "Flower Rangoli",
  "Diya & Candle Setup",
  "Chunri Decoration",
  "Bhajan Group (Small)",
  "Bhajan Group (Large)",
  "Dhol Player",
  "Sound System",
  "Stage & Backdrop",
  "Seating Arrangement",
  "Photography",
  "Videography",
  "Prasad Preparation",
  "Langar Seva",
  "Kanya Puja Setup",
  "Hawan / Yagna",
];

const STEPS = ["Personal", "Event", "Venue", "Services"];

// ─── SHARED UI HELPERS ────────────────────────────────────────────────────────
const GoldText = ({ children, style = {} }) => (
  <span style={{ background: "linear-gradient(135deg,#B8860B,#D4AF37,#F0D060)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text", ...style }}>{children}</span>
);

const SectionTag = ({ children }) => (
  <span style={{ display: "inline-block", background: "rgba(212,175,55,.1)", border: "1px solid rgba(212,175,55,.3)", color: "#B8860B", padding: "5px 20px", borderRadius: 100, fontSize: 11, letterSpacing: ".28em", textTransform: "uppercase", fontWeight: 700, fontFamily: "'Outfit',sans-serif" }}>{children}</span>
);

const Pill = ({ label, selected, onToggle }) => (
  <button onClick={onToggle} style={{ padding: "8px 16px", borderRadius: 100, fontSize: 12, cursor: "pointer", transition: "all .25s", fontFamily: "'Outfit',sans-serif", border: selected ? "none" : "1px solid rgba(30,30,30,.15)", background: selected ? "linear-gradient(135deg,#B8860B,#D4AF37)" : "rgba(255,255,255,.9)", color: selected ? "#fff" : "#444", fontWeight: selected ? 700 : 400, boxShadow: selected ? "0 4px 12px rgba(212,175,55,.3)" : "0 1px 4px rgba(0,0,0,.06)" }}>{label}</button>
);

const FieldWrap = ({ label, children }) => (
  <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
    <label style={{ fontSize: 10, letterSpacing: ".18em", textTransform: "uppercase", color: "rgba(30,30,30,.4)", fontWeight: 700, display: "block", marginBottom: 4, fontFamily: "'Outfit',sans-serif" }}>{label}</label>
    {children}
  </div>
);

// ─── NAVBAR ───────────────────────────────────────────────────────────────────
const ServiceNavbar = () => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);
  const scrollTo = id => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 999,
      padding: scrolled ? "14px 32px" : "20px 32px",
      background: scrolled ? "rgba(255,255,255,.97)" : "rgba(255,255,255,.92)",
      backdropFilter: "blur(20px)",
      borderBottom: scrolled ? "1px solid rgba(212,175,55,.18)" : "1px solid transparent",
      boxShadow: scrolled ? "0 4px 24px rgba(0,0,0,.06)" : "none",
      transition: "all .4s ease",
      display: "flex", alignItems: "center", justifyContent: "space-between",
      boxSizing: "border-box",
    }}>
      <Link to="/" style={{ display: "flex", alignItems: "center", gap: 12, textDecoration: "none", flexShrink: 0 }}>
        <div style={{ width: 36, height: 36, borderRadius: "50%", background: "linear-gradient(135deg,#B8860B,#D4AF37)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16 }}>🌸</div>
        <span style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 20, fontWeight: 600, color: "#1a1a1a", letterSpacing: ".02em" }}>
          Indian <GoldText style={{ fontStyle: "italic" }}>Riwaaz</GoldText>
        </span>
      </Link>
      <div style={{ display: "flex", gap: 28, alignItems: "center" }} className="mk-nav-links">
        {[["Gallery", "mk-gallery"], ["Packages", "mk-pkgs"], ["Book Now", "mk-form"]].map(([label, id]) => (
          <button key={id} onClick={() => scrollTo(id)} style={{ background: "none", border: "none", cursor: "pointer", fontSize: 11, fontFamily: "'Outfit',sans-serif", fontWeight: 700, letterSpacing: ".15em", textTransform: "uppercase", color: "#555", transition: "color .2s" }}
            onMouseEnter={e => e.target.style.color = "#B8860B"}
            onMouseLeave={e => e.target.style.color = "#555"}
          >{label}</button>
        ))}
      </div>
      <a href="https://wa.me/918595633810?text=Hello!%20I%20want%20to%20book%20a%20Mata%20Ki%20Chowki." target="_blank" rel="noopener noreferrer"
        style={{ background: "linear-gradient(135deg,#B8860B,#D4AF37)", color: "#fff", borderRadius: 100, padding: "10px 22px", fontSize: 11, fontFamily: "'Outfit',sans-serif", fontWeight: 700, letterSpacing: ".12em", textTransform: "uppercase", textDecoration: "none", boxShadow: "0 4px 16px rgba(212,175,55,.35)", whiteSpace: "nowrap", flexShrink: 0 }}>
        💬 WhatsApp Us
      </a>
    </nav>
  );
};

// ─── GALLERY CAROUSEL ─────────────────────────────────────────────────────────
const GalleryCarousel = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [idx, setIdx] = useState(0);
  const [lightbox, setLightbox] = useState(null);
  const [lbIdx, setLbIdx] = useState(0);
  const [paused, setPaused] = useState(false);
  const videoRefs = useRef({});
  const timerRef = useRef(null);

  const items = activeTab === "all" ? ALL_GALLERY : ALL_GALLERY.filter(i => i.tab === activeTab);
  const total = items.length;

  useEffect(() => { setIdx(0); }, [activeTab]);

  useEffect(() => {
    clearInterval(timerRef.current);
    if (!paused && !lightbox && total > 0) {
      timerRef.current = setInterval(() => setIdx(p => (p + 1) % total), 4500);
    }
    return () => clearInterval(timerRef.current);
  }, [paused, lightbox, total, activeTab]);

  useEffect(() => {
    Object.entries(videoRefs.current).forEach(([key, el]) => {
      if (!el) return;
      if (Number(key) === idx) { el.play().catch(() => {}); }
      else { el.pause(); el.currentTime = 0; }
    });
  }, [idx, items]);

  const go = (n) => { setIdx(((n % total) + total) % total); setPaused(true); setTimeout(() => setPaused(false), 6000); };

  const prev2 = ((idx - 2) % total + total) % total;
  const prev1 = ((idx - 1) % total + total) % total;
  const next1 = (idx + 1) % total;
  const next2 = (idx + 2) % total;
  const visibleIdxs = [prev2, prev1, idx, next1, next2];

  const CARD_CONFIG = [
    { scale: 0.72, opacity: 0.45, z: 0, x: "-200%", blur: 2 },
    { scale: 0.85, opacity: 0.70, z: 1, x: "-105%", blur: 1 },
    { scale: 1.00, opacity: 1.00, z: 2, x: "0%",    blur: 0 },
    { scale: 0.85, opacity: 0.70, z: 1, x: "105%",  blur: 1 },
    { scale: 0.72, opacity: 0.45, z: 0, x: "200%",  blur: 2 },
  ];

  useEffect(() => {
    if (!lightbox) return;
    const h = (e) => {
      if (e.key === "Escape") setLightbox(null);
      if (e.key === "ArrowRight") { const n = (lbIdx + 1) % total; setLbIdx(n); setLightbox(items[n]); }
      if (e.key === "ArrowLeft")  { const n = (lbIdx - 1 + total) % total; setLbIdx(n); setLightbox(items[n]); }
    };
    window.addEventListener("keydown", h);
    return () => window.removeEventListener("keydown", h);
  }, [lightbox, lbIdx, total, items]);

  const openLb = (item, i) => { setLightbox(item); setLbIdx(i); };
  const navLb  = (dir) => { const n = (lbIdx + dir + total) % total; setLbIdx(n); setLightbox(items[n]); };

  const MediaCard = ({ item, itemIdx, configIdx }) => {
    const cfg = CARD_CONFIG[configIdx];
    const isCenter = configIdx === 2;
    return (
      <div
        onClick={() => { if (isCenter) openLb(item, itemIdx); else go(itemIdx); }}
        style={{
          position: "absolute", top: "50%", left: "50%",
          width: "clamp(260px, 36%, 420px)", aspectRatio: "16/10",
          transform: `translate(-50%, -50%) translateX(${cfg.x}) scale(${cfg.scale})`,
          zIndex: cfg.z, opacity: cfg.opacity,
          filter: cfg.blur > 0 ? `blur(${cfg.blur}px)` : "none",
          transition: "all 0.55s cubic-bezier(0.22,1,0.36,1)",
          borderRadius: 20, overflow: "hidden",
          cursor: isCenter ? "zoom-in" : "pointer",
          boxShadow: isCenter ? "0 28px 72px rgba(0,0,0,.22), 0 0 0 2px rgba(212,175,55,.45)" : "0 8px 28px rgba(0,0,0,.12)",
        }}
      >
        {item.type === "video" ? (
          <video ref={el => { videoRefs.current[itemIdx] = el; }} src={item.src} muted loop playsInline preload="metadata"
            style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
        ) : (
          <img src={item.src} alt={item.title} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
        )}
        <div style={{ position: "absolute", inset: 0, background: isCenter ? "linear-gradient(to top, rgba(10,5,0,.72) 0%, transparent 55%)" : "linear-gradient(to top, rgba(10,5,0,.55) 0%, transparent 100%)" }} />
        {isCenter && (
          <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "18px 20px" }}>
            <span style={{ display: "inline-block", background: "rgba(212,175,55,.9)", color: "#fff", fontSize: 9, fontFamily: "'Outfit',sans-serif", fontWeight: 700, letterSpacing: ".3em", textTransform: "uppercase", padding: "3px 10px", borderRadius: 100, marginBottom: 6 }}>{item.tab}</span>
            <p style={{ color: "#fff", fontFamily: "'Cormorant Garamond',serif", fontSize: 18, margin: 0, fontWeight: 500, lineHeight: 1.2 }}>{item.title}</p>
          </div>
        )}
        {item.type === "video" && (
          <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: isCenter ? 52 : 36, height: isCenter ? 52 : 36, borderRadius: "50%", background: "rgba(212,175,55,.88)", display: "flex", alignItems: "center", justifyContent: "center", pointerEvents: "none" }}>
            <div style={{ width: 0, height: 0, borderTop: `${isCenter ? 8 : 5}px solid transparent`, borderBottom: `${isCenter ? 8 : 5}px solid transparent`, borderLeft: `${isCenter ? 14 : 9}px solid #1a1a1a`, marginLeft: isCenter ? 3 : 2 }} />
          </div>
        )}
        {isCenter && (
          <div style={{ position: "absolute", top: 14, right: 14, background: "linear-gradient(135deg,#B8860B,#D4AF37)", color: "#fff", fontSize: 9, fontFamily: "'Outfit',sans-serif", fontWeight: 700, letterSpacing: ".2em", textTransform: "uppercase", padding: "4px 12px", borderRadius: 100 }}>✦ Featured</div>
        )}
      </div>
    );
  };

  return (
    <section id="mk-gallery" style={{ padding: "88px 0 80px", background: "#fff", overflow: "hidden" }}>
      <div style={{ textAlign: "center", marginBottom: 44, padding: "0 20px" }}>
        <SectionTag>Our Work</SectionTag>
        <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "clamp(32px,5vw,64px)", fontWeight: 400, color: "#1a1a1a", margin: "16px 0 8px", letterSpacing: "-.02em" }}>
          Chowki <GoldText style={{ fontStyle: "italic" }}>Gallery</GoldText>
        </h2>
        <p style={{ color: "#999", fontSize: 14, fontFamily: "'Outfit',sans-serif" }}>Every frame, a moment of divine grace</p>
      </div>

      <div style={{ display: "flex", gap: 8, justifyContent: "center", flexWrap: "wrap", marginBottom: 40, padding: "0 20px" }}>
        {GALLERY_TABS.map(tab => (
          <button key={tab.id} onClick={() => setActiveTab(tab.id)} style={{
            padding: "8px 20px", borderRadius: 100, fontSize: 11, cursor: "pointer",
            transition: "all .25s", fontFamily: "'Outfit',sans-serif", fontWeight: 700,
            border: activeTab === tab.id ? "none" : "1.5px solid rgba(30,30,30,.12)",
            background: activeTab === tab.id ? "linear-gradient(135deg,#B8860B,#D4AF37)" : "#fff",
            color: activeTab === tab.id ? "#fff" : "#555",
            boxShadow: activeTab === tab.id ? "0 6px 20px rgba(212,175,55,.35)" : "0 1px 4px rgba(0,0,0,.05)",
            letterSpacing: ".06em",
          }}>{tab.label}</button>
        ))}
      </div>

      <div style={{ position: "relative", height: "clamp(220px, 42vw, 360px)", marginBottom: 32 }}>
        {visibleIdxs.map((itemIdx, cfgIdx) => (
          <MediaCard key={`${activeTab}-${itemIdx}-${cfgIdx}`} item={items[itemIdx]} itemIdx={itemIdx} configIdx={cfgIdx} />
        ))}
        <button onClick={() => go(idx - 1)} style={{ position: "absolute", left: 16, top: "50%", transform: "translateY(-50%)", zIndex: 10, width: 44, height: 44, borderRadius: "50%", background: "#fff", border: "1.5px solid rgba(212,175,55,.35)", color: "#B8860B", fontSize: 22, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 4px 20px rgba(0,0,0,.1)" }}>‹</button>
        <button onClick={() => go(idx + 1)} style={{ position: "absolute", right: 16, top: "50%", transform: "translateY(-50%)", zIndex: 10, width: 44, height: 44, borderRadius: "50%", background: "#fff", border: "1.5px solid rgba(212,175,55,.35)", color: "#B8860B", fontSize: 22, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 4px 20px rgba(0,0,0,.1)" }}>›</button>
      </div>

      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 12, padding: "0 20px" }}>
        <span style={{ fontSize: 11, color: "#bbb", fontFamily: "'Outfit',sans-serif", letterSpacing: ".15em", minWidth: 56 }}>{idx + 1} / {total}</span>
        <div style={{ display: "flex", gap: 5, alignItems: "center" }}>
          {Array.from({ length: Math.min(total, 12) }).map((_, i) => (
            <div key={i} onClick={() => go(i)} style={{ width: i === idx ? 26 : 7, height: 7, borderRadius: 100, cursor: "pointer", transition: "all .3s", background: i === idx ? "linear-gradient(to right,#B8860B,#D4AF37)" : "rgba(30,30,30,.12)" }} />
          ))}
          {total > 12 && <span style={{ fontSize: 10, color: "#ccc", fontFamily: "'Outfit',sans-serif", marginLeft: 4 }}>+{total - 12}</span>}
        </div>
        <button onClick={() => setPaused(p => !p)} style={{ width: 30, height: 30, borderRadius: "50%", border: "1.5px solid rgba(212,175,55,.3)", background: "#fff", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, color: "#B8860B" }}>
          {paused ? "▶" : "⏸"}
        </button>
      </div>

      <AnimatePresence>
        {lightbox && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
            style={{ position: "fixed", inset: 0, zIndex: 9999, background: "rgba(8,4,0,.97)", backdropFilter: "blur(20px)", display: "flex", alignItems: "center", justifyContent: "center", padding: 16 }}>
            <button onClick={e => { e.stopPropagation(); navLb(-1); }} style={{ position: "absolute", left: 12, top: "50%", transform: "translateY(-50%)", width: 44, height: 44, borderRadius: "50%", background: "rgba(255,255,255,.08)", border: "1px solid rgba(212,175,55,.3)", color: "#D4AF37", fontSize: 22, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>‹</button>
            <motion.div key={lbIdx} initial={{ opacity: 0, scale: .94 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: .94 }} transition={{ duration: .3 }}
              onClick={e => e.stopPropagation()} style={{ maxWidth: 980, width: "100%", borderRadius: 20, overflow: "hidden", boxShadow: "0 40px 120px rgba(0,0,0,.6)" }}>
              {lightbox.type === "video"
                ? <video src={lightbox.src} autoPlay controls loop playsInline style={{ width: "100%", maxHeight: "78vh", objectFit: "contain", display: "block", background: "#000" }} />
                : <img src={lightbox.src} alt={lightbox.title} style={{ width: "100%", maxHeight: "78vh", objectFit: "contain", display: "block" }} />}
              <div style={{ background: "#111", padding: "12px 20px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <div>
                  <span style={{ color: "#D4AF37", fontSize: 9, fontFamily: "'Outfit',sans-serif", fontWeight: 700, letterSpacing: ".35em", textTransform: "uppercase" }}>{lightbox.tab}</span>
                  <p style={{ color: "#fff", fontFamily: "'Cormorant Garamond',serif", fontSize: 20, margin: "2px 0 0" }}>{lightbox.title}</p>
                </div>
                <span style={{ color: "rgba(255,255,255,.3)", fontSize: 12, fontFamily: "'Outfit',sans-serif" }}>{lbIdx + 1} / {total}</span>
              </div>
            </motion.div>
            <button onClick={e => { e.stopPropagation(); navLb(1); }} style={{ position: "absolute", right: 12, top: "50%", transform: "translateY(-50%)", width: 44, height: 44, borderRadius: "50%", background: "rgba(255,255,255,.08)", border: "1px solid rgba(212,175,55,.3)", color: "#D4AF37", fontSize: 22, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>›</button>
            <button onClick={() => setLightbox(null)} style={{ position: "absolute", top: 16, right: 16, width: 36, height: 36, borderRadius: "50%", background: "rgba(255,255,255,.08)", border: "none", color: "#fff", fontSize: 16, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>✕</button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

// ─── BHAJAN ARTISTS CAROUSEL ──────────────────────────────────────────────────
const BhajanCarousel = () => {
  const [page, setPage] = useState(0);
  const PER = 6;
  const pages = Math.ceil(BHAJAN_ARTISTS.length / PER);
  const visible = BHAJAN_ARTISTS.slice(page * PER, page * PER + PER);
  return (
    <section style={{ background: "linear-gradient(135deg,#fffdf8,#fdf5e0)", padding: "72px 20px" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 44 }}>
          <SectionTag>Live Devotional Music</SectionTag>
          <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "clamp(32px,5vw,64px)", fontWeight: 400, color: "#1a1a1a", margin: "16px 0 0" }}>
            Bhajan <GoldText style={{ fontStyle: "italic" }}>Universe</GoldText>
          </h2>
        </div>
        <AnimatePresence mode="wait">
          <motion.div key={page} initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }} transition={{ duration: .35 }}
            style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 14 }}>
            {visible.map((t, i) => (
              <motion.div key={t.label} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * .06 }}
                style={{ background: "#fff", borderRadius: 18, padding: "22px 16px", textAlign: "center", border: "1.5px solid rgba(212,175,55,.14)", boxShadow: "0 2px 16px rgba(0,0,0,.05)" }}
                whileHover={{ y: -6, boxShadow: "0 12px 32px rgba(212,175,55,.18)", borderColor: "rgba(212,175,55,.5)" }}>
                <div style={{ fontSize: 36, marginBottom: 10 }}>{t.emoji}</div>
                <p style={{ fontFamily: "'Outfit',sans-serif", fontSize: 12, fontWeight: 600, color: "#333", margin: 0 }}>{t.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 14, marginTop: 32 }}>
          <button onClick={() => setPage(p => Math.max(0, p - 1))} disabled={page === 0}
            style={{ width: 40, height: 40, borderRadius: "50%", border: "1.5px solid rgba(212,175,55,.4)", background: "#fff", color: "#B8860B", cursor: page === 0 ? "default" : "pointer", fontSize: 18, display: "flex", alignItems: "center", justifyContent: "center", opacity: page === 0 ? .3 : 1 }}>‹</button>
          {Array.from({ length: pages }).map((_, i) => (
            <div key={i} onClick={() => setPage(i)} style={{ width: i === page ? 28 : 8, height: 8, borderRadius: 100, background: i === page ? "linear-gradient(to right,#B8860B,#D4AF37)" : "#e0d4b8", cursor: "pointer", transition: "all .3s" }} />
          ))}
          <button onClick={() => setPage(p => Math.min(pages - 1, p + 1))} disabled={page === pages - 1}
            style={{ width: 40, height: 40, borderRadius: "50%", border: "1.5px solid rgba(212,175,55,.4)", background: "#fff", color: "#B8860B", cursor: page === pages - 1 ? "default" : "pointer", fontSize: 18, display: "flex", alignItems: "center", justifyContent: "center", opacity: page === pages - 1 ? .3 : 1 }}>›</button>
        </div>
      </div>
    </section>
  );
};

// ─── STEP BAR ─────────────────────────────────────────────────────────────────
const StepBar = ({ current }) => (
  <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 32 }}>
    {STEPS.map((s, i) => {
      const n = i + 1, done = n < current, active = n === current;
      return (
        <div key={s} style={{ display: "flex", alignItems: "center", flex: i < STEPS.length - 1 ? 1 : "none", gap: 6 }}>
          <div style={{ width: 32, height: 32, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, fontWeight: 700, flexShrink: 0, fontFamily: "'Outfit',sans-serif", transition: "all .3s", background: done ? "linear-gradient(135deg,#B8860B,#D4AF37)" : active ? "#fff" : "#f5f0e8", border: active ? "2.5px solid #D4AF37" : done ? "none" : "1.5px solid rgba(30,30,30,.1)", color: done ? "#fff" : active ? "#D4AF37" : "#bbb", boxShadow: active ? "0 0 0 4px rgba(212,175,55,.12)" : "none" }}>
            {done ? "✓" : n}
          </div>
          {i < STEPS.length - 1 && <div style={{ flex: 1, height: 1.5, background: done ? "linear-gradient(to right,#D4AF37,#F0D060)" : "#e8e0d0", borderRadius: 2 }} />}
        </div>
      );
    })}
  </div>
);

// ─── BOOKING FORM ─────────────────────────────────────────────────────────────
const BookingForm = () => {
  const [step, setStep] = useState(1);
  const [sent, setSent] = useState(false);
  const [selElements, setSelElements] = useState([]);
  const [selArtists, setSelArtists] = useState([]);
  const [selServices, setSelServices] = useState([]);
  const [f, setF] = useState({ name:"",phone:"",email:"",city:"",occasion:"",date:"",time:"",guests:"",duration:"3–4 Hours",customOccasion:"",venue:"",vcity:"Delhi",vname:"",budget:"",flex:"Fixed Budget",special:"",hear:"" });

  const upd = (k, v) => setF(p => ({ ...p, [k]: v }));
  const tog = (arr, setArr, val) => setArr(p => p.includes(val) ? p.filter(x => x !== val) : [...p, val]);
  const validate = () => {
    if (step === 1 && (!f.name || !f.phone)) { alert("Please fill in name and phone."); return false; }
    if (step === 2 && (!f.date || !f.guests)) { alert("Please fill date and expected guests."); return false; }
    if (step === 3 && (!f.venue || !f.budget)) { alert("Please select venue type and budget."); return false; }
    return true;
  };
  const send = () => {
    const lines = [
      "*🪔 Indian Riwaaz – Mata Ki Chowki Inquiry*","━━━━━━━━━━━━━━━",
      `Name: ${f.name}`,`Phone: ${f.phone}`,f.email,f.city,
      f.occasion?`Occasion: ${f.occasion}`:"",
      `Date: ${f.date}`,`Guests: ${f.guests}`,`Duration: ${f.duration}`,
      selElements.length?`Chowki Elements: ${selElements.join(", ")}`:"",
      selArtists.length?`Bhajan Artists: ${selArtists.join(", ")}`:"",
      `Venue: ${f.venue}`,`Budget: ${f.budget}`,
      selServices.length?`Services: ${selServices.join(", ")}`:"",
      f.special?`Special: ${f.special}`:"",
    ].filter(Boolean).join("%0A");
    window.open(`https://wa.me/918595633810?text=${lines}`, "_blank");
    setSent(true);
  };

  const IS = { background:"#fff", border:"1.5px solid rgba(30,30,30,.12)", color:"#1a1a1a", padding:"12px 14px", borderRadius:12, width:"100%", fontFamily:"'Outfit',sans-serif", fontSize:13, outline:"none", boxSizing:"border-box", transition:"border-color .2s" };
  const inp = (k, ph, t="text") => <input type={t} value={f[k]} onChange={e=>upd(k,e.target.value)} placeholder={ph} style={IS} onFocus={e=>e.target.style.borderColor="#D4AF37"} onBlur={e=>e.target.style.borderColor="rgba(30,30,30,.12)"} />;
  const sel = (k, opts, ph="") => <select value={f[k]} onChange={e=>upd(k,e.target.value)} style={{...IS,cursor:"pointer"}}>{ph&&<option value="">{ph}</option>}{opts.map(o=><option key={o} value={o}>{o}</option>)}</select>;

  if (sent) return (
    <motion.div initial={{opacity:0,scale:.92}} animate={{opacity:1,scale:1}} style={{textAlign:"center",padding:"48px 20px"}}>
      <div style={{fontSize:64,marginBottom:16}}>🪔</div>
      <div style={{fontFamily:"'Cormorant Garamond',serif",fontSize:36,fontWeight:400,color:"#1a1a1a",marginBottom:12}}>Inquiry <GoldText style={{fontStyle:"italic"}}>Sent!</GoldText></div>
      <p style={{fontSize:14,color:"#888",fontFamily:"'Outfit',sans-serif",lineHeight:1.8,maxWidth:380,margin:"0 auto 28px"}}>Our team will reach out within 24 hours with a personalised proposal. Jai Mata Di 🙏</p>
      <button onClick={()=>{setSent(false);setStep(1);setSelElements([]);setSelArtists([]);setSelServices([]);setF({name:"",phone:"",email:"",city:"",occasion:"",date:"",time:"",guests:"",duration:"3–4 Hours",customOccasion:"",venue:"",vcity:"Delhi",vname:"",budget:"",flex:"Fixed Budget",special:"",hear:""});}} style={{background:"linear-gradient(135deg,#B8860B,#D4AF37)",color:"#fff",border:"none",borderRadius:100,padding:"13px 36px",fontSize:13,fontFamily:"'Outfit',sans-serif",fontWeight:700,letterSpacing:".1em",cursor:"pointer",boxShadow:"0 6px 20px rgba(212,175,55,.35)"}}>Plan Another Chowki</button>
    </motion.div>
  );

  return (
    <div>
      <StepBar current={step} />
      <AnimatePresence mode="wait">
        {step === 1 && <motion.div key="s1" initial={{opacity:0,x:20}} animate={{opacity:1,x:0}} exit={{opacity:0,x:-20}}>
          <div style={{fontFamily:"'Cormorant Garamond',serif",fontSize:26,fontWeight:400,color:"#1a1a1a",marginBottom:4}}>Personal Details</div>
          <p style={{fontSize:12,color:"#aaa",fontFamily:"'Outfit',sans-serif",marginBottom:24}}>Tell us who you are so we can reach you.</p>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:16}}>
            <FieldWrap label="Full Name *">{inp("name","Your name")}</FieldWrap>
            <FieldWrap label="WhatsApp / Phone *">{inp("phone","+91 XXXXX XXXXX","tel")}</FieldWrap>
            <FieldWrap label="Email Address">{inp("email","you@email.com","email")}</FieldWrap>
            <FieldWrap label="Your City">{inp("city","Delhi, Noida, Gurgaon…")}</FieldWrap>
          </div>
        </motion.div>}

        {step === 2 && <motion.div key="s2" initial={{opacity:0,x:20}} animate={{opacity:1,x:0}} exit={{opacity:0,x:-20}}>
          <div style={{fontFamily:"'Cormorant Garamond',serif",fontSize:26,fontWeight:400,color:"#1a1a1a",marginBottom:4}}>Event Details</div>
          <p style={{fontSize:12,color:"#aaa",fontFamily:"'Outfit',sans-serif",marginBottom:24}}>Tell us about the occasion and programme details.</p>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:16,marginBottom:16}}>
            <FieldWrap label="Occasion / Reason">{sel("occasion",["Navratri Chowki","Griha Pravesh","Satsang","Family Jagran","Shradh / Barsi","Monthly Chowki","Birthday Chowki","Wedding Function","Other"],"Select occasion")}</FieldWrap>
            <FieldWrap label="Expected Guests *">{sel("guests",["Up to 50","50–100","100–200","200–400","400+"],"Select range")}</FieldWrap>
            <FieldWrap label="Date *">{inp("date","","date")}</FieldWrap>
            <FieldWrap label="Start Time">{inp("time","","time")}</FieldWrap>
            <FieldWrap label="Programme Duration">{sel("duration",["2–3 Hours","3–4 Hours","Half Day (5–6 hrs)","Full Night Jagran","2-Day Programme","Custom"])}</FieldWrap>
            <FieldWrap label="Custom Occasion / Note">{inp("customOccasion","Any specific details…")}</FieldWrap>
          </div>
          <FieldWrap label="Chowki Elements (choose any)">
            <div style={{display:"flex",flexWrap:"wrap",gap:7,marginTop:4}}>{CHOWKI_ELEMENTS.map(t=><Pill key={t.label} label={`${t.emoji} ${t.label}`} selected={selElements.includes(t.label)} onToggle={()=>tog(selElements,setSelElements,t.label)} />)}</div>
          </FieldWrap>
          <div style={{marginTop:16}}>
            <FieldWrap label="Bhajan Artist Style (choose any)">
              <div style={{display:"flex",flexWrap:"wrap",gap:7,marginTop:4}}>{BHAJAN_ARTISTS.map(t=><Pill key={t.label} label={`${t.emoji} ${t.label}`} selected={selArtists.includes(t.label)} onToggle={()=>tog(selArtists,setSelArtists,t.label)} />)}</div>
            </FieldWrap>
          </div>
        </motion.div>}

        {step === 3 && <motion.div key="s3" initial={{opacity:0,x:20}} animate={{opacity:1,x:0}} exit={{opacity:0,x:-20}}>
          <div style={{fontFamily:"'Cormorant Garamond',serif",fontSize:26,fontWeight:400,color:"#1a1a1a",marginBottom:4}}>Venue & Budget</div>
          <p style={{fontSize:12,color:"#aaa",fontFamily:"'Outfit',sans-serif",marginBottom:24}}>Help us arrange the perfect space for the programme.</p>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:16}}>
            <FieldWrap label="Venue Type *">{sel("venue",["Home / Residential","Terrace / Rooftop","Garden / Lawn","Society Community Hall","Temple Premises","Banquet Hall","Open Ground","I Need a Suggestion"],"Select venue")}</FieldWrap>
            <FieldWrap label="Venue City / Area">{sel("vcity",["Delhi","Noida","Gurgaon / Gurugram","Faridabad","Ghaziabad","Greater Noida"])}</FieldWrap>
            <div style={{gridColumn:"1 / -1"}}><FieldWrap label="Specific Venue / Address (if any)">{inp("vname","Colony / society / street name…")}</FieldWrap></div>
            <FieldWrap label="Approximate Budget *">{sel("budget",["Under ₹15,000","₹15,000–30,000","₹30,000–60,000","₹60,000–1 Lakh","₹1 Lakh+","Let's Discuss"],"Select range")}</FieldWrap>
            <FieldWrap label="Budget Flexibility">{sel("flex",["Fixed Budget","Slightly Flexible (±10%)","Flexible for the Right Experience","No Constraint"])}</FieldWrap>
          </div>
        </motion.div>}

        {step === 4 && <motion.div key="s4" initial={{opacity:0,x:20}} animate={{opacity:1,x:0}} exit={{opacity:0,x:-20}}>
          <div style={{fontFamily:"'Cormorant Garamond',serif",fontSize:26,fontWeight:400,color:"#1a1a1a",marginBottom:4}}>Services & Extras</div>
          <p style={{fontSize:12,color:"#aaa",fontFamily:"'Outfit',sans-serif",marginBottom:24}}>Select everything you'd like us to arrange.</p>
          <FieldWrap label="Services Required">
            <div style={{display:"flex",flexWrap:"wrap",gap:7,marginTop:4}}>{SERVICES.map(s=><Pill key={s} label={s} selected={selServices.includes(s)} onToggle={()=>tog(selServices,setSelServices,s)} />)}</div>
          </FieldWrap>
          <div style={{display:"flex",flexDirection:"column",gap:14,marginTop:20}}>
            <FieldWrap label="Special Requests / Wishes">
              <textarea value={f.special} onChange={e=>upd("special",e.target.value)} rows={3} placeholder="Specific bhajans, prasad preferences, special decoration wishes…" style={{...IS,resize:"vertical"}} onFocus={e=>e.target.style.borderColor="#D4AF37"} onBlur={e=>e.target.style.borderColor="rgba(30,30,30,.12)"} />
            </FieldWrap>
            <FieldWrap label="How did you hear about us?">{sel("hear",["Instagram","Facebook","Google","Friend / Family","Previous Client","WhatsApp","Other"],"Select…")}</FieldWrap>
          </div>
        </motion.div>}
      </AnimatePresence>

      <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginTop:32,paddingTop:24,borderTop:"1.5px solid rgba(30,30,30,.07)"}}>
        <button onClick={()=>step>1&&setStep(s=>s-1)} disabled={step===1} style={{background:"transparent",border:"1.5px solid rgba(30,30,30,.15)",color:"#555",borderRadius:100,padding:"11px 24px",fontSize:11,fontFamily:"'Outfit',sans-serif",letterSpacing:".1em",textTransform:"uppercase",cursor:step===1?"default":"pointer",opacity:step===1?.3:1}}>← Back</button>
        <span style={{fontSize:11,color:"#ccc",letterSpacing:".2em",fontFamily:"'Outfit',sans-serif"}}>{step} / {STEPS.length}</span>
        <button onClick={()=>{if(!validate())return;if(step===4){send();return;}setStep(s=>s+1);}} style={{background:"linear-gradient(135deg,#B8860B,#D4AF37,#F0D060)",color:"#fff",border:"none",borderRadius:100,padding:"12px 28px",fontSize:12,fontFamily:"'Outfit',sans-serif",fontWeight:700,letterSpacing:".12em",textTransform:"uppercase",cursor:"pointer",boxShadow:"0 6px 20px rgba(212,175,55,.35)"}}>
          {step===4?"Send via WhatsApp 💬":"Continue →"}
        </button>
      </div>
    </div>
  );
};

// ─── PROCESS ──────────────────────────────────────────────────────────────────
const ProcessSection = () => {
  const steps = [
    { num:"01", emoji:"📞", title:"Get in Touch",      desc:"Fill our inquiry form or call us. We'll discuss your programme details within hours." },
    { num:"02", emoji:"🎨", title:"Décor Planning",    desc:"Our team crafts the perfect Devi Sthan, floral setup, and ambiance for your home or venue." },
    { num:"03", emoji:"✅", title:"Confirm & Relax",   desc:"Finalise the programme, confirm the bhajan group, and leave all arrangements to us." },
    { num:"04", emoji:"🪔", title:"Divine Programme!", desc:"We transform your space into a sacred atmosphere filled with devotion and grace." },
  ];
  return (
    <section style={{padding:"72px 20px",background:"#fff"}}>
      <div style={{maxWidth:1000,margin:"0 auto"}}>
        <div style={{textAlign:"center",marginBottom:52}}>
          <SectionTag>How It Works</SectionTag>
          <h2 style={{fontFamily:"'Cormorant Garamond',serif",fontSize:"clamp(32px,5vw,64px)",fontWeight:400,color:"#1a1a1a",margin:"16px 0 0"}}>From Sankalp to <GoldText style={{fontStyle:"italic"}}>Siddhi</GoldText></h2>
        </div>
        <div style={{display:"grid",gridTemplateColumns:"repeat(2,1fr)",gap:24}} className="mk-proc-2">
          {steps.map((s,i)=>(
            <motion.div key={i} initial={{opacity:0,y:24}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*.12}} style={{textAlign:"center"}}>
              <div style={{width:72,height:72,borderRadius:"50%",background:"linear-gradient(135deg,#fffdf8,#fdf5d8)",border:"2px solid rgba(212,175,55,.3)",margin:"0 auto 16px",display:"flex",alignItems:"center",justifyContent:"center",fontSize:28,boxShadow:"0 4px 20px rgba(212,175,55,.15)"}}>{s.emoji}</div>
              <div style={{fontFamily:"'Cormorant Garamond',serif",fontSize:12,color:"#D4AF37",fontWeight:600,letterSpacing:".2em",marginBottom:6}}>{s.num}</div>
              <h3 style={{fontFamily:"'Cormorant Garamond',serif",fontSize:20,fontWeight:500,color:"#1a1a1a",marginBottom:8}}>{s.title}</h3>
              <p style={{fontFamily:"'Outfit',sans-serif",fontSize:12,color:"#888",lineHeight:1.7,maxWidth:240,margin:"0 auto"}}>{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ─── TESTIMONIALS ─────────────────────────────────────────────────────────────
const Testimonials = () => {
  const reviews = [
    { name:"Sunita Devi Sharma", event:"Navratri Chowki – Dwarka, Delhi", text:"The Devi Sthan setup was absolutely breathtaking. The floral decoration and diya arrangement filled our home with such divine energy. Jai Mata Di!", stars:5 },
    { name:"Rakesh & Meena Gupta", event:"Family Jagran – Noida", text:"Indian Riwaaz organised a full-night jagran for us and it was beyond our expectations. The bhajan group was exceptional. Our whole colony came!", stars:5 },
    { name:"Priya Aggarwal", event:"Griha Pravesh Chowki – Gurgaon", text:"We wanted a traditional chowki for our new home and they delivered pure magic. The rangoli and kalash setup was stunning. Highly recommend!", stars:5 },
  ];
  const [idx,setIdx]=useState(0);
  useEffect(()=>{const t=setInterval(()=>setIdx(p=>(p+1)%reviews.length),5000);return()=>clearInterval(t);},[]);
  return (
    <section style={{padding:"72px 20px",background:"linear-gradient(135deg,#1a0f00,#0f0800,#1a1000)"}}>
      <div style={{maxWidth:760,margin:"0 auto",textAlign:"center"}}>
        <span style={{display:"inline-block",background:"rgba(212,175,55,.15)",border:"1px solid rgba(212,175,55,.3)",color:"#D4AF37",padding:"5px 20px",borderRadius:100,fontSize:11,letterSpacing:".28em",textTransform:"uppercase",fontWeight:700,marginBottom:20,fontFamily:"'Outfit',sans-serif"}}>Blessed Families</span>
        <h2 style={{fontFamily:"'Cormorant Garamond',serif",fontSize:"clamp(32px,5vw,56px)",fontWeight:400,color:"#fff",marginBottom:44}}>What They <GoldText style={{fontStyle:"italic"}}>Say</GoldText></h2>
        <div style={{minHeight:220}}>
          <AnimatePresence mode="wait">
            <motion.div key={idx} initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-20}} transition={{duration:.5}}>
              <div style={{fontSize:44,color:"#D4AF37",marginBottom:12,fontFamily:"'Cormorant Garamond',serif",lineHeight:1}}>"</div>
              <p style={{fontFamily:"'Cormorant Garamond',serif",fontSize:"clamp(18px,3vw,26px)",fontWeight:400,color:"rgba(255,255,255,.9)",lineHeight:1.6,fontStyle:"italic",marginBottom:28,padding:"0 16px"}}>{reviews[idx].text}</p>
              <div style={{display:"flex",alignItems:"center",justifyContent:"center",gap:4,marginBottom:12}}>{Array.from({length:reviews[idx].stars}).map((_,i)=><span key={i} style={{color:"#D4AF37",fontSize:18}}>★</span>)}</div>
              <p style={{fontFamily:"'Outfit',sans-serif",fontSize:14,fontWeight:700,color:"#D4AF37",letterSpacing:".08em"}}>{reviews[idx].name}</p>
              <p style={{fontFamily:"'Outfit',sans-serif",fontSize:11,color:"rgba(255,255,255,.4)",letterSpacing:".15em",textTransform:"uppercase",marginTop:4}}>{reviews[idx].event}</p>
            </motion.div>
          </AnimatePresence>
        </div>
        <div style={{display:"flex",gap:10,justifyContent:"center",marginTop:28}}>
          {reviews.map((_,i)=><div key={i} onClick={()=>setIdx(i)} style={{width:i===idx?28:8,height:8,borderRadius:100,background:i===idx?"#D4AF37":"rgba(255,255,255,.2)",cursor:"pointer",transition:"all .3s"}} />)}
        </div>
      </div>
    </section>
  );
};

// ─── BLOG / INSPIRATION ───────────────────────────────────────────────────────
const BLOG_POSTS = [
  { emoji:"🪔", tag:"Spiritual Guide", title:"How to Organise a Perfect Mata Ki Chowki at Home in 2025", excerpt:"From choosing the right date and setting up the Devi Sthan to managing prasad for 200 guests — our complete guide to a flawless chowki.", readTime:"6 min read", date:"Apr 2025", highlights:["Date selection","Puja samagri list","Decor ideas","Prasad management"] },
  { emoji:"🥁", tag:"Music & Bhajans", title:"Choosing the Right Bhajan Group: A Family's Complete Guide", excerpt:"Not all bhajan groups are the same. Learn how to pick the right artists, sound setup, and song selection for maximum divine energy.", readTime:"5 min read", date:"Mar 2025", highlights:["Artist selection","Sound system tips","Song curation","Live vs recorded"] },
  { emoji:"🌸", tag:"Décor Inspiration", title:"10 Stunning Devi Sthan Décor Ideas That Will Leave You Spellbound", excerpt:"From rose petal canopies to diya walls and marigold arches — discover the decoration styles our clients love most for their chowkis.", readTime:"4 min read", date:"Feb 2025", highlights:["Floral setups","Diya walls","Rangoli designs","Chunri draping"] },
  { emoji:"🗓️", tag:"Planning Guide", title:"Navratri Chowki Planning Checklist: Everything You Need to Know", excerpt:"Navratri is the most sacred time for Mata Ki Chowki. Our week-by-week checklist ensures nothing is missed for the nine sacred nights.", readTime:"7 min read", date:"Jan 2025", highlights:["9-day timeline","Kanya puja prep","Guest management","Hawan checklist"] },
];

const BlogSection = () => {
  const scrollTo = id => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  return (
    <section style={{ padding: "80px 20px", background: "#fffdf8" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 52 }}>
          <SectionTag>Ideas & Inspiration</SectionTag>
          <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "clamp(32px,5vw,64px)", fontWeight: 400, color: "#1a1a1a", margin: "16px 0 8px" }}>
            Devotional <GoldText style={{ fontStyle: "italic" }}>Stories</GoldText>
          </h2>
          <p style={{ color: "#999", fontSize: 14, fontFamily: "'Outfit',sans-serif", maxWidth: 480, margin: "0 auto" }}>Expert tips, sacred guides, and behind-the-scenes magic from our chowki planners.</p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 260px), 1fr))", gap: 20 }}>
          {BLOG_POSTS.map((post, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
              whileHover={{ y: -6, boxShadow: "0 20px 48px rgba(212,175,55,.14)" }}
              style={{ background: "#fff", borderRadius: 20, overflow: "hidden", border: "1.5px solid rgba(212,175,55,.12)", boxShadow: "0 2px 16px rgba(0,0,0,.05)", transition: "all .35s", cursor: "pointer" }}
              onClick={() => scrollTo("mk-form")}>
              <div style={{ background: `linear-gradient(135deg, ${["#fff5e0","#f0fff4","#f5f0ff","#fff0f5"][i]}, ${["#fde68a20","#d1fae520","#ede9fe20","#fce7f320"][i]})`, padding: "28px 24px 20px", textAlign: "center", borderBottom: "1px solid rgba(212,175,55,.08)" }}>
                <div style={{ fontSize: 52, marginBottom: 12, lineHeight: 1 }}>{post.emoji}</div>
                <span style={{ display: "inline-block", background: "rgba(212,175,55,.12)", border: "1px solid rgba(212,175,55,.25)", color: "#B8860B", padding: "3px 14px", borderRadius: 100, fontSize: 9, letterSpacing: ".25em", textTransform: "uppercase", fontWeight: 700, fontFamily: "'Outfit',sans-serif" }}>{post.tag}</span>
              </div>
              <div style={{ padding: "20px 24px 24px" }}>
                <h3 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 19, fontWeight: 500, color: "#1a1a1a", lineHeight: 1.35, marginBottom: 10 }}>{post.title}</h3>
                <p style={{ fontFamily: "'Outfit',sans-serif", fontSize: 12, color: "#777", lineHeight: 1.75, marginBottom: 16 }}>{post.excerpt}</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 18 }}>
                  {post.highlights.map((h, j) => (
                    <span key={j} style={{ fontFamily: "'Outfit',sans-serif", fontSize: 9, fontWeight: 700, letterSpacing: ".14em", textTransform: "uppercase", color: "#B8860B", background: "rgba(212,175,55,.08)", border: "1px solid rgba(212,175,55,.15)", padding: "3px 10px", borderRadius: 100 }}>✦ {h}</span>
                  ))}
                </div>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", paddingTop: 14, borderTop: "1px solid rgba(30,30,30,.07)" }}>
                  <span style={{ fontFamily: "'Outfit',sans-serif", fontSize: 10, color: "#ccc", letterSpacing: ".1em" }}>{post.date} · {post.readTime}</span>
                  <span style={{ fontFamily: "'Outfit',sans-serif", fontSize: 10, fontWeight: 700, letterSpacing: ".15em", textTransform: "uppercase", color: "#D4AF37" }}>Plan This →</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          style={{ marginTop: 40, background: "linear-gradient(135deg,#1a0f00,#2a1800)", borderRadius: 24, padding: "clamp(28px,5vw,44px) clamp(24px,5vw,48px)", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 20, border: "1px solid rgba(212,175,55,.2)" }}>
          <div>
            <div style={{ fontSize: 10, letterSpacing: ".3em", textTransform: "uppercase", color: "#D4AF37", fontFamily: "'Outfit',sans-serif", fontWeight: 700, marginBottom: 8 }}>Ready to Begin Your Seva?</div>
            <h3 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "clamp(22px,4vw,36px)", fontWeight: 400, color: "#fff", margin: 0 }}>
              Your divine programme is just <GoldText style={{ fontStyle: "italic" }}>one click away</GoldText>
            </h3>
          </div>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <button onClick={() => scrollTo("mk-form")} style={{ background: "linear-gradient(135deg,#B8860B,#D4AF37)", color: "#fff", border: "none", borderRadius: 100, padding: "13px 28px", fontSize: 12, fontFamily: "'Outfit',sans-serif", fontWeight: 700, letterSpacing: ".1em", textTransform: "uppercase", cursor: "pointer", boxShadow: "0 6px 20px rgba(212,175,55,.35)" }}>
              🪔 Book Now
            </button>
            <a href="https://wa.me/918595633810" target="_blank" rel="noopener noreferrer"
              style={{ background: "rgba(255,255,255,.06)", color: "#D4AF37", border: "1px solid rgba(212,175,55,.3)", borderRadius: 100, padding: "13px 28px", fontSize: 12, fontFamily: "'Outfit',sans-serif", fontWeight: 700, letterSpacing: ".1em", textTransform: "uppercase", cursor: "pointer", textDecoration: "none" }}>
              💬 WhatsApp
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// ─── SERVICE FOOTER ───────────────────────────────────────────────────────────
const ServiceFooter = () => (
  <footer style={{ background: "#1a0f00", padding: "44px 20px 32px", textAlign: "center", borderTop: "1px solid rgba(212,175,55,.12)" }}>
    <div style={{ maxWidth: 700, margin: "0 auto" }}>
      <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 28, fontWeight: 400, color: "#fff", marginBottom: 8 }}>
        Indian <GoldText style={{ fontStyle: "italic" }}>Riwaaz</GoldText>
      </div>
      <p style={{ fontFamily: "'Outfit',sans-serif", fontSize: 12, color: "rgba(255,255,255,.4)", marginBottom: 20 }}>Delhi NCR's Most Trusted Mata Ki Chowki Organisers</p>
      <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap", marginBottom: 24 }}>
        <a href="tel:+918595633810" style={{ color: "#D4AF37", fontFamily: "'Outfit',sans-serif", fontSize: 12, textDecoration: "none" }}>📞 +91 8595633810</a>
        <span style={{ color: "rgba(255,255,255,.2)" }}>|</span>
        <a href="https://wa.me/918595633810" target="_blank" rel="noopener noreferrer" style={{ color: "#D4AF37", fontFamily: "'Outfit',sans-serif", fontSize: 12, textDecoration: "none" }}>💬 WhatsApp</a>
        <span style={{ color: "rgba(255,255,255,.2)" }}>|</span>
        <a href="mailto:indianriwaaz123@gmail.com" style={{ color: "#D4AF37", fontFamily: "'Outfit',sans-serif", fontSize: 12, textDecoration: "none" }}>✉ indianriwaaz123@gmail.com</a>
      </div>
      <Link to="/" style={{ display: "inline-flex", alignItems: "center", gap: 6, color: "rgba(255,255,255,.4)", fontFamily: "'Outfit',sans-serif", fontSize: 11, textDecoration: "none", letterSpacing: ".15em" }}>
        ← Back to Indian Riwaaz Home
      </Link>
      <div style={{ marginTop: 28, paddingTop: 20, borderTop: "1px solid rgba(255,255,255,.06)" }}>
        <p style={{ fontFamily: "'Outfit',sans-serif", fontSize: 10, color: "rgba(255,255,255,.2)", letterSpacing: ".2em", textTransform: "uppercase" }}>© 2025 Indian Riwaaz. All Rights Reserved.</p>
      </div>
    </div>
  </footer>
);

// ─── MAIN PAGE ────────────────────────────────────────────────────────────────
export default function MataKiChowkiServicePage() {
  const scrollTo = id => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <div style={{ fontFamily: "'Outfit',sans-serif", background: "#fff", color: "#1a1a1a", minHeight: "100vh" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400;1,500&family=Outfit:wght@300;400;500;600;700&display=swap');
        *{box-sizing:border-box;margin:0;padding:0;}

        @media(max-width:640px){
          .mk-hero-h{ font-size: clamp(44px, 13vw, 72px) !important; line-height:1 !important; }
          .mk-hero-sub{ font-size: 15px !important; }
          .mk-hero-btns{ flex-direction: column !important; gap: 12px !important; }
          .mk-hero-btns a, .mk-hero-btns button{ width: 100% !important; text-align: center !important; }
          .mk-stats{ grid-template-columns: 1fr 1fr !important; }
          .mk-hl{ grid-template-columns: 1fr 1fr !important; }
          .mk-pkgs{ grid-template-columns: 1fr !important; }
          .mk-proc-2{ grid-template-columns: 1fr 1fr !important; gap: 16px !important; }
          .mk-form-card{ padding: 28px 20px !important; }
          .mk-nav-links{ display: none !important; }
          .mk-elements{ grid-template-columns: repeat(3, 1fr) !important; }
        }
        @media(max-width:480px){
          .mk-proc-2{ grid-template-columns: 1fr !important; }
          .mk-hl{ grid-template-columns: 1fr !important; }
        }

        .mk-wa{
          position:fixed; bottom:20px; right:20px; z-index:900;
          width:52px;height:52px;border-radius:50%;
          background:#25D366; display:flex;align-items:center;justify-content:center;
          box-shadow:0 4px 20px rgba(37,211,102,.45);
          font-size:24px; text-decoration:none;
          transition:transform .2s;
        }
        .mk-wa:hover{ transform:scale(1.1) rotate(5deg); }
      `}</style>

      <ServiceNavbar />
      <a href="https://wa.me/918595633810?text=Hello!%20I%20want%20to%20book%20a%20Mata%20Ki%20Chowki." target="_blank" rel="noopener noreferrer" className="mk-wa" title="Chat on WhatsApp">💬</a>

      {/* ── HERO ── */}
      <section style={{ minHeight: "92vh", display: "flex", alignItems: "flex-end", position: "relative", overflow: "hidden", paddingTop: 80 }}>
        <div style={{ position: "absolute", inset: 0 }}>
          <img src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=1600&auto=format&fit=crop" referrerPolicy="no-referrer" alt="" style={{ width: "100%", height: "100%", objectFit: "cover", filter: "brightness(.20) saturate(1.3)" }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top,#fff 0%,rgba(255,255,255,.05) 42%,transparent 100%)" }} />
          <div style={{ position: "absolute", top: "18%", right: "8%", width: 320, height: 320, borderRadius: "50%", background: "radial-gradient(circle,rgba(212,175,55,.2) 0%,transparent 70%)", pointerEvents: "none" }} />
        </div>
        <motion.div initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.1, ease: [.22, 1, .36, 1] }}
          style={{ position: "relative", zIndex: 2, maxWidth: 1100, margin: "0 auto", width: "100%", padding: "0 24px 80px" }}>
          <div style={{ fontSize: 60, marginBottom: 16 }}>🪔</div>
          <div style={{ marginBottom: 16 }}><SectionTag>Where Devotion Meets Divine Grandeur</SectionTag></div>
          <h1 className="mk-hero-h" style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 92, fontWeight: 300, color: "white", lineHeight: .9, letterSpacing: "-.03em", marginBottom: 24 }}>
            Mata Ki<br /><GoldText style={{ fontStyle: "italic" }}>Chowki</GoldText>
          </h1>
          <p className="mk-hero-sub" style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 18, color: "white", fontStyle: "italic", maxWidth: 560, lineHeight: 1.8, marginBottom: 36 }}>
            From intimate home chowkis to grand all-night jagrans — we create sacred experiences that fill every heart with devotion across Delhi NCR.
          </p>
          <div className="mk-hero-btns" style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
            <button onClick={() => scrollTo("mk-form")} style={{ background: "linear-gradient(135deg,#B8860B,#D4AF37,#F0D060)", color: "#fff", border: "none", borderRadius: 100, padding: "16px 40px", fontSize: 12, fontFamily: "'Outfit',sans-serif", fontWeight: 700, letterSpacing: ".12em", textTransform: "uppercase", cursor: "pointer", boxShadow: "0 8px 28px rgba(212,175,55,.4)" }}>
              🙏 Book Chowki
            </button>
            <button onClick={() => scrollTo("mk-pkgs")} style={{ background: "rgba(255,255,255,.88)", backdropFilter: "blur(8px)", border: "1.5px solid rgba(212,175,55,.35)", color: "#B8860B", borderRadius: 100, padding: "16px 36px", fontSize: 12, fontFamily: "'Outfit',sans-serif", fontWeight: 700, letterSpacing: ".12em", textTransform: "uppercase", cursor: "pointer" }}>
              View Packages
            </button>
          </div>
          <div style={{ display: "flex", gap: 20, marginTop: 36, flexWrap: "wrap" }}>
            {["⭐ 300+ Chowkis Done", "🗺️ Delhi NCR Coverage", "📞 24h Response"].map(b => (
              <span key={b} style={{ fontFamily: "'Outfit',sans-serif", fontSize: 11, color: "#666", fontWeight: 600, background: "rgba(255,255,255,.8)", backdropFilter: "blur(8px)", padding: "6px 16px", borderRadius: 100, border: "1px solid rgba(212,175,55,.2)" }}>{b}</span>
            ))}
          </div>
        </motion.div>
      </section>

      {/* STATS */}
      <div style={{ background: "#fff", borderTop: "1px solid rgba(212,175,55,.18)", borderBottom: "1px solid rgba(212,175,55,.18)", padding: "36px 20px" }}>
        <div className="mk-stats" style={{ maxWidth: 900, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 20, textAlign: "center" }}>
          {[["300+", "Chowkis Organised"], ["12+", "Bhajan Groups"], ["10+", "Years Seva"], ["100%", "Blessed Families"]].map(([n, l]) => (
            <div key={l}>
              <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 44, fontWeight: 600, lineHeight: 1, background: "linear-gradient(135deg,#B8860B,#D4AF37,#F0D060)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>{n}</div>
              <div style={{ fontSize: 10, letterSpacing: ".22em", textTransform: "uppercase", color: "#aaa", marginTop: 6, fontFamily: "'Outfit',sans-serif", fontWeight: 600 }}>{l}</div>
            </div>
          ))}
        </div>
      </div>

      {/* HIGHLIGHTS */}
      <section style={{ padding: "80px 20px", background: "#fffdf8" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <SectionTag>What We Offer</SectionTag>
            <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "clamp(36px,6vw,68px)", fontWeight: 300, color: "#1a1a1a", letterSpacing: "-.02em", margin: "16px 0 0" }}>
              Every Detail <GoldText style={{ fontStyle: "italic" }}>Blessed</GoldText>
            </h2>
          </div>
          <div className="mk-hl" style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 16 }}>
            {HIGHLIGHTS.map((h, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * .07 }}
                style={{ background: "#fff", padding: "24px 18px", borderRadius: 18, border: "1.5px solid rgba(212,175,55,.12)", boxShadow: "0 2px 16px rgba(0,0,0,.04)" }}
                whileHover={{ y: -6, boxShadow: "0 16px 40px rgba(212,175,55,.14)", borderColor: "rgba(212,175,55,.4)" }}>
                <div style={{ fontSize: 32, marginBottom: 14 }}>{h.emoji}</div>
                <h3 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 18, fontWeight: 500, color: "#1a1a1a", marginBottom: 8 }}>{h.title}</h3>
                <p style={{ fontSize: 12, color: "#888", lineHeight: 1.75, fontFamily: "'Outfit',sans-serif" }}>{h.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <GalleryCarousel />

      {/* BHAJAN CAROUSEL */}
      <BhajanCarousel />

      {/* PACKAGES */}
      <section id="mk-pkgs" style={{ padding: "80px 20px", background: "#fff" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 52 }}>
            <SectionTag>Pricing</SectionTag>
            <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "clamp(36px,6vw,68px)", fontWeight: 300, color: "#1a1a1a", margin: "16px 0 0" }}>
              Our <GoldText style={{ fontStyle: "italic" }}>Packages</GoldText>
            </h2>
          </div>
          <div className="mk-pkgs" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20 }}>
            {PACKAGES.map((pkg, i) => (
              <motion.div key={pkg.name} initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * .1 }}
                style={{ borderRadius: 22, border: pkg.featured ? "2px solid rgba(212,175,55,.55)" : "1.5px solid rgba(30,30,30,.08)", background: pkg.featured ? "linear-gradient(145deg,#fffdf8,#fff9ec)" : "#fff", padding: "36px 28px", position: "relative", overflow: "hidden", boxShadow: pkg.featured ? "0 20px 60px rgba(212,175,55,.16)" : "0 4px 20px rgba(0,0,0,.05)" }}>
                {pkg.featured && <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 4, background: "linear-gradient(to right,#B8860B,#D4AF37,#F0D060)" }} />}
                {pkg.featured && <span style={{ display: "inline-block", background: "linear-gradient(135deg,#B8860B,#D4AF37)", color: "#fff", padding: "4px 14px", borderRadius: 100, fontSize: 9, letterSpacing: ".25em", textTransform: "uppercase", fontWeight: 700, marginBottom: 12, fontFamily: "'Outfit',sans-serif" }}>Most Popular</span>}
                <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 30, fontWeight: 400, color: "#1a1a1a", marginBottom: 6 }}>{pkg.name}</div>
                <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 24, fontWeight: 600, marginBottom: 4, background: "linear-gradient(135deg,#B8860B,#D4AF37,#F0D060)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                  {pkg.price}<span style={{ fontSize: 13, fontWeight: 300, color: "#bbb", WebkitTextFillColor: "#bbb" }}>{pkg.unit}</span>
                </div>
                <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 12, color: "#aaa", fontStyle: "italic", marginBottom: 24 }}>{pkg.tagline}</div>
                <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 24 }}>
                  {pkg.features.map(feat => <div key={feat} style={{ display: "flex", alignItems: "flex-start", gap: 8 }}><div style={{ width: 6, height: 6, borderRadius: "50%", background: "#D4AF37", marginTop: 6, flexShrink: 0 }} /><span style={{ fontSize: 12, color: "#555", fontFamily: "'Outfit',sans-serif" }}>{feat}</span></div>)}
                </div>
                <button onClick={() => scrollTo("mk-form")} style={{ width: "100%", padding: "13px", fontSize: 10, fontFamily: "'Outfit',sans-serif", fontWeight: 700, letterSpacing: ".14em", textTransform: "uppercase", borderRadius: 100, cursor: "pointer", border: pkg.featured ? "none" : "1.5px solid rgba(212,175,55,.4)", background: pkg.featured ? "linear-gradient(135deg,#B8860B,#D4AF37)" : "transparent", color: pkg.featured ? "#fff" : "#B8860B", boxShadow: pkg.featured ? "0 6px 20px rgba(212,175,55,.35)" : "none" }}>
                  Choose {pkg.name}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CHOWKI ELEMENTS GRID */}
      <section style={{ background: "#fffdf8", borderTop: "1px solid rgba(212,175,55,.1)", padding: "72px 20px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <SectionTag>Sacred Traditions</SectionTag>
            <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "clamp(32px,5vw,60px)", fontWeight: 300, color: "#1a1a1a", margin: "16px 0 8px" }}>
              Chowki <GoldText style={{ fontStyle: "italic" }}>Elements</GoldText>
            </h2>
            <p style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 15, color: "#aaa", fontStyle: "italic" }}>Every sacred ritual performed with complete devotion and traditional reverence</p>
          </div>
          <div className="mk-elements" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(110px, 1fr))", gap: 14 }}>
            {CHOWKI_ELEMENTS.map((m, i) => (
              <motion.div key={m.label} initial={{ opacity: 0, scale: .9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * .05 }}
                style={{ background: "#fff", padding: "20px 12px", textAlign: "center", borderRadius: 16, border: "1.5px solid rgba(212,175,55,.1)", boxShadow: "0 2px 14px rgba(0,0,0,.04)" }}
                whileHover={{ y: -5, boxShadow: "0 12px 32px rgba(212,175,55,.16)", borderColor: "rgba(212,175,55,.4)" }}>
                <div style={{ fontSize: 32, marginBottom: 8 }}>{m.emoji}</div>
                <div style={{ fontSize: 10, color: "#666", letterSpacing: ".05em", fontFamily: "'Outfit',sans-serif", fontWeight: 600, lineHeight: 1.4 }}>{m.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <ProcessSection />

      {/* TESTIMONIALS */}
      <Testimonials />

      {/* BLOG */}
      <BlogSection />

      {/* BOOKING FORM */}
      <section id="mk-form" style={{ padding: "80px 20px 100px", background: "#fff" }}>
        <div style={{ maxWidth: 820, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 44 }}>
            <SectionTag>Let's Plan Together</SectionTag>
            <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "clamp(36px,6vw,68px)", fontWeight: 300, color: "#1a1a1a", margin: "16px 0 8px" }}>
              Book Your <GoldText style={{ fontStyle: "italic" }}>Mata Ki Chowki</GoldText>
            </h2>
            <p style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 14, color: "#aaa", fontStyle: "italic" }}>Fill in the details — your inquiry will be sent via WhatsApp to our team. Jai Mata Di 🙏</p>
          </div>
          <div className="mk-form-card" style={{ background: "#fff", border: "1.5px solid rgba(212,175,55,.2)", borderRadius: 24, padding: "44px 40px", boxShadow: "0 20px 60px rgba(212,175,55,.08)" }}>
            <BookingForm />
          </div>
        </div>
      </section>

      <ServiceFooter />
    </div>
  );
}