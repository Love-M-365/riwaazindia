import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

// ─── Corporate Assets ─────────────────────────────────────────────────────────
import c1  from "../../assets/c1.jpeg";
import c2  from "../../assets/c2.jpeg";
import c3  from "../../assets/c3.jpeg";
import c4  from "../../assets/c4.jpeg";
import c5  from "../../assets/c5.jpeg";
import c6  from "../../assets/c6.jpeg";
import c7  from "../../assets/c7.jpeg";
import c8  from "../../assets/c8.jpeg";
import c9  from "../../assets/c9.jpeg";
import c10 from "../../assets/c10.jpeg";
import c11 from "../../assets/c11.jpeg";
import c12 from "../../assets/c12.jpeg";
import c13 from "../../assets/c13.jpeg";
import c14 from "../../assets/c14.jpeg";
import c15 from "../../assets/c15.jpeg";
import c16 from "../../assets/c16.jpeg";
import c17 from "../../assets/c17.jpeg";
import c18 from "../../assets/c18.jpeg";
import c19 from "../../assets/c19.jpeg";
import c20 from "../../assets/c20.jpeg";
import c21 from "../../assets/c21.jpeg";
import c22 from "../../assets/c22.jpeg";
import c23 from "../../assets/c23.jpeg";
import c24 from "../../assets/c24.jpeg";
import c25 from "../../assets/c25.jpeg";
import c26 from "../../assets/c26.jpeg";
import c27 from "../../assets/c27.jpeg";
import c28 from "../../assets/c28.jpeg";
import c29 from "../../assets/c29.jpeg";
import c30 from "../../assets/c30.jpeg";
import c31 from "../../assets/c31.jpeg";
import c32 from "../../assets/c32.jpeg";
import c33 from "../../assets/c33.jpeg";
import c34 from "../../assets/c34.jpeg";
import c35 from "../../assets/c35.jpeg";
import c36 from "../../assets/c36.jpeg";
import c37 from "../../assets/c37.jpeg";
import c38 from "../../assets/c38.jpeg";
import c39 from "../../assets/c39.jpeg";
import c40 from "../../assets/c40.jpeg";
import c41 from "../../assets/c41.jpeg";
import c42 from "../../assets/c42.jpeg";
import c43 from "../../assets/c43.jpeg";
import c44 from "../../assets/c44.jpeg";
import c45 from "../../assets/c45.jpeg";
import c46 from "../../assets/c46.jpeg";

// ─── GALLERY DATA ─────────────────────────────────────────────────────────────
const GALLERY_TABS = [
  { id: "all",            label: "All"            },
  { id: "product-launch", label: "Product Launch" },
  { id: "sales-meeting",  label: "Sales Meeting"  },
  { id: "dealer-meet",    label: "Dealer Meet"    },
  { id: "awards",         label: "Awards & Gala"  },
  { id: "setup",          label: "Stage & Setup"  },
];

const ALL_GALLERY = [
  { type: "image", src: c1,  title: "Corporate Setup",    tab: "setup"          },
  { type: "image", src: c2,  title: "Event Hall",         tab: "sales-meeting"  },
  { type: "image", src: c3,  title: "Stage Decor",        tab: "product-launch" },
  { type: "image", src: c4,  title: "Podium Setup",       tab: "setup"          },
  { type: "image", src: c5,  title: "Branding Display",   tab: "product-launch" },
  { type: "image", src: c6,  title: "Table Arrangement",  tab: "dealer-meet"    },
  { type: "image", src: c7,  title: "Venue Overview",     tab: "dealer-meet"    },
  { type: "image", src: c8,  title: "Award Setup",        tab: "awards"         },
  { type: "image", src: c9,  title: "Lighting Design",    tab: "setup"          },
  { type: "image", src: c10, title: "Conference Hall",    tab: "sales-meeting"  },
  { type: "image", src: c11, title: "Panel Setup",        tab: "dealer-meet"    },
  { type: "image", src: c12, title: "Gala Night",         tab: "awards"         },
  { type: "image", src: c13, title: "Reception Area",     tab: "setup"          },
  { type: "image", src: c14, title: "Product Display",    tab: "product-launch" },
  { type: "image", src: c15, title: "Banquet Layout",     tab: "dealer-meet"    },
  { type: "image", src: c16, title: "Networking Space",   tab: "dealer-meet"    },
  { type: "image", src: c17, title: "Board Meeting",      tab: "sales-meeting"  },
  { type: "image", src: c18, title: "Dinner Setup",       tab: "awards"         },
  { type: "image", src: c19, title: "Launch Event",       tab: "product-launch" },
  { type: "image", src: c20, title: "Dealer Convention",  tab: "dealer-meet"    },
  { type: "image", src: c21, title: "Sales Summit",       tab: "sales-meeting"  },
  { type: "image", src: c22, title: "Team Gathering",     tab: "dealer-meet"    },
  { type: "image", src: c23, title: "Executive Meet",     tab: "sales-meeting"  },
  { type: "image", src: c24, title: "Annual Gala",        tab: "awards"         },
  { type: "image", src: c25, title: "Keynote Stage",      tab: "product-launch" },
  { type: "image", src: c26, title: "Awards Night",       tab: "awards"         },
  { type: "image", src: c27, title: "Product Unveiling",  tab: "product-launch" },
  { type: "image", src: c28, title: "Corporate Dinner",   tab: "awards"         },
  { type: "image", src: c29, title: "Brand Activation",   tab: "product-launch" },
  { type: "image", src: c30, title: "Press Conference",   tab: "sales-meeting"  },
  { type: "image", src: c31, title: "Seminar Setup",      tab: "sales-meeting"  },
  { type: "image", src: c32, title: "Workshop Hall",      tab: "sales-meeting"  },
  { type: "image", src: c33, title: "CEO Meet",           tab: "sales-meeting"  },
  { type: "image", src: c34, title: "Partner Summit",     tab: "dealer-meet"    },
  { type: "image", src: c35, title: "Investor Meet",      tab: "sales-meeting"  },
  { type: "image", src: c36, title: "Year End Party",     tab: "awards"         },
  { type: "image", src: c37, title: "Team Building",      tab: "dealer-meet"    },
  { type: "image", src: c38, title: "Brand Launch",       tab: "product-launch" },
  { type: "image", src: c39, title: "Product Demo",       tab: "product-launch" },
  { type: "image", src: c40, title: "Corporate Meet",     tab: "sales-meeting"  },
  { type: "image", src: c41, title: "Conference",         tab: "sales-meeting"  },
  { type: "image", src: c42, title: "Exhibition Setup",   tab: "product-launch" },
  { type: "image", src: c43, title: "Award Ceremony",     tab: "awards"         },
  { type: "image", src: c44, title: "Gala Evening",       tab: "awards"         },
  { type: "image", src: c45, title: "Dealer Event",       tab: "dealer-meet"    },
  { type: "image", src: c46, title: "Corporate Night",    tab: "awards"         },
];

const EVENT_TYPES = [
  { label: "Product Launch",     emoji: "🚀" },
  { label: "Sales Conference",   emoji: "📊" },
  { label: "Dealer Meet",        emoji: "🤝" },
  { label: "Awards Night",       emoji: "🏆" },
  { label: "Team Building",      emoji: "👥" },
  { label: "Annual Gala",        emoji: "✨" },
  { label: "Press Conference",   emoji: "🎙️" },
  { label: "Investor Meet",      emoji: "💼" },
  { label: "Exhibition / Expo",  emoji: "🎪" },
  { label: "Training Workshop",  emoji: "📚" },
  { label: "Brand Activation",   emoji: "📣" },
  { label: "Year-End Party",     emoji: "🎉" },
];

const CORP_STYLES = [
  { label: "Luxury Ballroom",   emoji: "💎" },
  { label: "Minimalist Modern", emoji: "🏢" },
  { label: "Industrial Chic",   emoji: "⚙️" },
  { label: "Nature & Biophilic",emoji: "🌿" },
  { label: "Tech & LED",        emoji: "💡" },
  { label: "Black Tie Formal",  emoji: "🎩" },
  { label: "Vibrant Brand",     emoji: "🎨" },
  { label: "Heritage / Ethnic", emoji: "🏰" },
  { label: "Outdoor Campus",    emoji: "🌳" },
  { label: "Rooftop Premium",   emoji: "🌆" },
  { label: "Hybrid / Virtual",  emoji: "🖥️" },
  { label: "Cocktail & Lounge", emoji: "🥂" },
];

const HIGHLIGHTS = [
  { emoji: "🎯", title: "Stage & Backdrop",      desc: "Custom branded stages, LED backdrops, and podium setups that command attention and reflect your brand." },
  { emoji: "💡", title: "Lighting Design",        desc: "Architectural lighting, gobo projections, and dynamic LED rigs that set the perfect corporate mood." },
  { emoji: "🎙️", title: "AV & Sound Systems",    desc: "Professional PA systems, wireless mics, projectors, LED walls, and live streaming setup." },
  { emoji: "🌸", title: "Floral & Décor",         desc: "Sophisticated floral arrangements, table centrepieces, and entrance décor that elevate your brand." },
  { emoji: "📸", title: "Photo & Video",           desc: "Event photography, videography, highlight reels, and live streaming for hybrid events." },
  { emoji: "🍽️", title: "Catering & F&B",         desc: "Premium multi-cuisine buffets, live counters, cocktail setups, and professional service staff." },
  { emoji: "🎪", title: "Exhibition Booths",       desc: "Custom-built exhibition stands, product display setups, and interactive brand activation zones." },
  { emoji: "🚗", title: "Logistics & Valet",       desc: "Guest registration, transport coordination, valet parking, and on-site event management." },
];

const PACKAGES = [
  {
    name: "Prestige",
    price: "₹30,000–50,000",
    unit: "",
    tagline: "Up to 100 Guests",
    featured: false,
    features: [
      "Stage & Backdrop Setup",
      "Basic Floral Décor",
      "PA System & Mic",
      "Projector / Screen",
      "Catering (Veg Menu)",
      "Event Photography",
      "Guest Registration Desk",
    ],
  },
  {
    name: "Pinnacle",
    price: "₹1,00,000–2,50,000",
    unit: "",
    tagline: "100–250 Guests",
    featured: true,
    features: [
      "Full Venue Transformation",
      "Custom LED Backdrop",
      "Premium AV & Sound",
      "Branded Décor & Signage",
      "Photo + Video Coverage",
      "Multi-Cuisine Catering",
      "Exhibition Booth Setup",
      "Dedicated Event Manager",
    ],
  },
  {
    name: "Sovereign",
    price: "Custom",
    unit: " Quote",
    tagline: "500+ / Multi-Day Events",
    featured: false,
    features: [
      "Grand Venue Branding",
      "LED Wall & Stage Production",
      "Live Streaming Setup",
      "Celebrity / Speaker Mgmt",
      "Premium Catering + Bar",
      "Full Film Production",
      "Transport & Logistics",
      "Complete Event Management",
    ],
  },
];

const SERVICES = [
  "Stage & Backdrop",
  "LED Wall / Screen",
  "Lighting Design",
  "PA System & Sound",
  "Wireless Mics",
  "Projector Setup",
  "Floral Décor",
  "Table Settings",
  "Entrance Branding",
  "Catering (Veg)",
  "Catering (Non-Veg)",
  "Cocktail / Bar Setup",
  "Photography",
  "Videography",
  "Live Streaming",
  "Exhibition Booths",
  "Guest Registration",
  "Valet Parking",
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
    <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 999, padding: scrolled ? "14px 32px" : "20px 32px", background: scrolled ? "rgba(255,255,255,.97)" : "rgba(255,255,255,.92)", backdropFilter: "blur(20px)", borderBottom: scrolled ? "1px solid rgba(212,175,55,.18)" : "1px solid transparent", boxShadow: scrolled ? "0 4px 24px rgba(0,0,0,.06)" : "none", transition: "all .4s ease", display: "flex", alignItems: "center", justifyContent: "space-between", boxSizing: "border-box" }}>
      <Link to="/" style={{ display: "flex", alignItems: "center", gap: 12, textDecoration: "none", flexShrink: 0 }}>
        <div style={{ width: 36, height: 36, borderRadius: "50%", background: "linear-gradient(135deg,#B8860B,#D4AF37)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16 }}>🌸</div>
        <span style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 20, fontWeight: 600, color: "#1a1a1a", letterSpacing: ".02em" }}>Indian <GoldText style={{ fontStyle: "italic" }}>Riwaaz</GoldText></span>
      </Link>
      <div style={{ display: "flex", gap: 28, alignItems: "center" }} className="ce-nav-links">
        {[["Gallery", "ce-gallery"], ["Packages", "ce-pkgs"], ["Book Now", "ce-form"]].map(([label, id]) => (
          <button key={id} onClick={() => scrollTo(id)} style={{ background: "none", border: "none", cursor: "pointer", fontSize: 11, fontFamily: "'Outfit',sans-serif", fontWeight: 700, letterSpacing: ".15em", textTransform: "uppercase", color: "#555", transition: "color .2s" }} onMouseEnter={e => e.target.style.color = "#B8860B"} onMouseLeave={e => e.target.style.color = "#555"}>{label}</button>
        ))}
      </div>
      <a href="https://wa.me/918595633810?text=Hello!%20I%20want%20to%20book%20a%20Corporate%20Event." target="_blank" rel="noopener noreferrer" style={{ background: "linear-gradient(135deg,#B8860B,#D4AF37)", color: "#fff", borderRadius: 100, padding: "10px 22px", fontSize: 11, fontFamily: "'Outfit',sans-serif", fontWeight: 700, letterSpacing: ".12em", textTransform: "uppercase", textDecoration: "none", boxShadow: "0 4px 16px rgba(212,175,55,.35)", whiteSpace: "nowrap", flexShrink: 0 }}>💬 WhatsApp Us</a>
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
  const timerRef = useRef(null);

  const items = activeTab === "all" ? ALL_GALLERY : ALL_GALLERY.filter(i => i.tab === activeTab);
  const total = items.length;

  useEffect(() => { setIdx(0); }, [activeTab]);
  useEffect(() => {
    clearInterval(timerRef.current);
    if (!paused && !lightbox && total > 0) timerRef.current = setInterval(() => setIdx(p => (p + 1) % total), 4500);
    return () => clearInterval(timerRef.current);
  }, [paused, lightbox, total, activeTab]);

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
      <div onClick={() => { if (isCenter) openLb(item, itemIdx); else go(itemIdx); }}
        style={{ position: "absolute", top: "50%", left: "50%", width: "clamp(260px, 36%, 420px)", aspectRatio: "16/10", transform: `translate(-50%, -50%) translateX(${cfg.x}) scale(${cfg.scale})`, zIndex: cfg.z, opacity: cfg.opacity, filter: cfg.blur > 0 ? `blur(${cfg.blur}px)` : "none", transition: "all 0.55s cubic-bezier(0.22,1,0.36,1)", borderRadius: 20, overflow: "hidden", cursor: isCenter ? "zoom-in" : "pointer", boxShadow: isCenter ? "0 28px 72px rgba(0,0,0,.22), 0 0 0 2px rgba(212,175,55,.45)" : "0 8px 28px rgba(0,0,0,.12)" }}>
        <img src={item.src} alt={item.title} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
        <div style={{ position: "absolute", inset: 0, background: isCenter ? "linear-gradient(to top, rgba(10,5,0,.72) 0%, transparent 55%)" : "linear-gradient(to top, rgba(10,5,0,.55) 0%, transparent 100%)" }} />
        {isCenter && (
          <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "18px 20px" }}>
            <span style={{ display: "inline-block", background: "rgba(212,175,55,.9)", color: "#fff", fontSize: 9, fontFamily: "'Outfit',sans-serif", fontWeight: 700, letterSpacing: ".3em", textTransform: "uppercase", padding: "3px 10px", borderRadius: 100, marginBottom: 6 }}>{item.tab}</span>
            <p style={{ color: "#fff", fontFamily: "'Cormorant Garamond',serif", fontSize: 18, margin: 0, fontWeight: 500, lineHeight: 1.2 }}>{item.title}</p>
          </div>
        )}
        {isCenter && <div style={{ position: "absolute", top: 14, right: 14, background: "linear-gradient(135deg,#B8860B,#D4AF37)", color: "#fff", fontSize: 9, fontFamily: "'Outfit',sans-serif", fontWeight: 700, letterSpacing: ".2em", textTransform: "uppercase", padding: "4px 12px", borderRadius: 100 }}>✦ Featured</div>}
      </div>
    );
  };

  return (
    <section id="ce-gallery" style={{ padding: "88px 0 80px", background: "#fff", overflow: "hidden" }}>
      <div style={{ textAlign: "center", marginBottom: 44, padding: "0 20px" }}>
        <SectionTag>Our Work</SectionTag>
        <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "clamp(32px,5vw,64px)", fontWeight: 400, color: "#1a1a1a", margin: "16px 0 8px", letterSpacing: "-.02em" }}>
          Corporate <GoldText style={{ fontStyle: "italic" }}>Gallery</GoldText>
        </h2>
        <p style={{ color: "#999", fontSize: 14, fontFamily: "'Outfit',sans-serif" }}>Every setup, a statement of excellence</p>
      </div>
      <div style={{ display: "flex", gap: 8, justifyContent: "center", flexWrap: "wrap", marginBottom: 40, padding: "0 20px" }}>
        {GALLERY_TABS.map(tab => (
          <button key={tab.id} onClick={() => setActiveTab(tab.id)} style={{ padding: "8px 20px", borderRadius: 100, fontSize: 11, cursor: "pointer", transition: "all .25s", fontFamily: "'Outfit',sans-serif", fontWeight: 700, border: activeTab === tab.id ? "none" : "1.5px solid rgba(30,30,30,.12)", background: activeTab === tab.id ? "linear-gradient(135deg,#B8860B,#D4AF37)" : "#fff", color: activeTab === tab.id ? "#fff" : "#555", boxShadow: activeTab === tab.id ? "0 6px 20px rgba(212,175,55,.35)" : "0 1px 4px rgba(0,0,0,.05)", letterSpacing: ".06em" }}>{tab.label}</button>
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
        <button onClick={() => setPaused(p => !p)} style={{ width: 30, height: 30, borderRadius: "50%", border: "1.5px solid rgba(212,175,55,.3)", background: "#fff", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, color: "#B8860B" }}>{paused ? "▶" : "⏸"}</button>
      </div>
      <AnimatePresence>
        {lightbox && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setLightbox(null)} style={{ position: "fixed", inset: 0, zIndex: 9999, background: "rgba(8,4,0,.97)", backdropFilter: "blur(20px)", display: "flex", alignItems: "center", justifyContent: "center", padding: 16 }}>
            <button onClick={e => { e.stopPropagation(); navLb(-1); }} style={{ position: "absolute", left: 12, top: "50%", transform: "translateY(-50%)", width: 44, height: 44, borderRadius: "50%", background: "rgba(255,255,255,.08)", border: "1px solid rgba(212,175,55,.3)", color: "#D4AF37", fontSize: 22, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>‹</button>
            <motion.div key={lbIdx} initial={{ opacity: 0, scale: .94 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: .94 }} transition={{ duration: .3 }} onClick={e => e.stopPropagation()} style={{ maxWidth: 980, width: "100%", borderRadius: 20, overflow: "hidden", boxShadow: "0 40px 120px rgba(0,0,0,.6)" }}>
              <img src={lightbox.src} alt={lightbox.title} style={{ width: "100%", maxHeight: "78vh", objectFit: "contain", display: "block" }} />
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

// ─── EVENT TYPES CAROUSEL ─────────────────────────────────────────────────────
const EventTypesCarousel = () => {
  const [page, setPage] = useState(0);
  const PER = 6;
  const pages = Math.ceil(EVENT_TYPES.length / PER);
  const visible = EVENT_TYPES.slice(page * PER, page * PER + PER);
  return (
    <section style={{ background: "linear-gradient(135deg,#fffdf8,#fdf5e0)", padding: "72px 20px" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 44 }}>
          <SectionTag>Every Format Covered</SectionTag>
          <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "clamp(32px,5vw,64px)", fontWeight: 400, color: "#1a1a1a", margin: "16px 0 0" }}>
            Event <GoldText style={{ fontStyle: "italic" }}>Universe</GoldText>
          </h2>
        </div>
        <AnimatePresence mode="wait">
          <motion.div key={page} initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }} transition={{ duration: .35 }} style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 14 }}>
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
          <button onClick={() => setPage(p => Math.max(0, p - 1))} disabled={page === 0} style={{ width: 40, height: 40, borderRadius: "50%", border: "1.5px solid rgba(212,175,55,.4)", background: "#fff", color: "#B8860B", cursor: page === 0 ? "default" : "pointer", fontSize: 18, display: "flex", alignItems: "center", justifyContent: "center", opacity: page === 0 ? .3 : 1 }}>‹</button>
          {Array.from({ length: pages }).map((_, i) => (<div key={i} onClick={() => setPage(i)} style={{ width: i === page ? 28 : 8, height: 8, borderRadius: 100, background: i === page ? "linear-gradient(to right,#B8860B,#D4AF37)" : "#e0d4b8", cursor: "pointer", transition: "all .3s" }} />))}
          <button onClick={() => setPage(p => Math.min(pages - 1, p + 1))} disabled={page === pages - 1} style={{ width: 40, height: 40, borderRadius: "50%", border: "1.5px solid rgba(212,175,55,.4)", background: "#fff", color: "#B8860B", cursor: page === pages - 1 ? "default" : "pointer", fontSize: 18, display: "flex", alignItems: "center", justifyContent: "center", opacity: page === pages - 1 ? .3 : 1 }}>›</button>
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
          <div style={{ width: 32, height: 32, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, fontWeight: 700, flexShrink: 0, fontFamily: "'Outfit',sans-serif", transition: "all .3s", background: done ? "linear-gradient(135deg,#B8860B,#D4AF37)" : active ? "#fff" : "#f5f0e8", border: active ? "2.5px solid #D4AF37" : done ? "none" : "1.5px solid rgba(30,30,30,.1)", color: done ? "#fff" : active ? "#D4AF37" : "#bbb", boxShadow: active ? "0 0 0 4px rgba(212,175,55,.12)" : "none" }}>{done ? "✓" : n}</div>
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
  const [selTypes, setSelTypes] = useState([]);
  const [selStyles, setSelStyles] = useState([]);
  const [selServices, setSelServices] = useState([]);
  const [f, setF] = useState({ name:"",phone:"",email:"",company:"",eventName:"",date:"",time:"",guests:"",duration:"1 Day",venue:"",vcity:"Delhi",vname:"",budget:"",flex:"Fixed Budget",special:"",hear:"" });

  const upd = (k, v) => setF(p => ({ ...p, [k]: v }));
  const tog = (arr, setArr, val) => setArr(p => p.includes(val) ? p.filter(x => x !== val) : [...p, val]);
  const validate = () => {
    if (step === 1 && (!f.name || !f.phone)) { alert("Please fill in name and phone."); return false; }
    if (step === 2 && (!f.eventName || !f.date || !f.guests)) { alert("Please fill event name, date and guests."); return false; }
    if (step === 3 && (!f.venue || !f.budget)) { alert("Please select venue type and budget."); return false; }
    return true;
  };
  const send = () => {
    const lines = ["*🏢 Indian Riwaaz – Corporate Event Inquiry*","━━━━━━━━━━━━━━━",`Name: ${f.name}`,`Phone: ${f.phone}`,f.email,f.company?`Company: ${f.company}`:"",`Event: ${f.eventName}`,`Date: ${f.date}`,`Guests: ${f.guests}`,`Duration: ${f.duration}`,selTypes.length?`Event Types: ${selTypes.join(", ")}`:"",selStyles.length?`Style: ${selStyles.join(", ")}`:"",`Venue: ${f.venue}`,`Budget: ${f.budget}`,selServices.length?`Services: ${selServices.join(", ")}`:"",f.special?`Special: ${f.special}`:""].filter(Boolean).join("%0A");
    window.open(`https://wa.me/918595633810?text=${lines}`, "_blank");
    setSent(true);
  };

  const IS = { background:"#fff", border:"1.5px solid rgba(30,30,30,.12)", color:"#1a1a1a", padding:"12px 14px", borderRadius:12, width:"100%", fontFamily:"'Outfit',sans-serif", fontSize:13, outline:"none", boxSizing:"border-box", transition:"border-color .2s" };
  const inp = (k, ph, t="text") => <input type={t} value={f[k]} onChange={e=>upd(k,e.target.value)} placeholder={ph} style={IS} onFocus={e=>e.target.style.borderColor="#D4AF37"} onBlur={e=>e.target.style.borderColor="rgba(30,30,30,.12)"} />;
  const sel = (k, opts, ph="") => <select value={f[k]} onChange={e=>upd(k,e.target.value)} style={{...IS,cursor:"pointer"}}>{ph&&<option value="">{ph}</option>}{opts.map(o=><option key={o} value={o}>{o}</option>)}</select>;

  if (sent) return (
    <motion.div initial={{opacity:0,scale:.92}} animate={{opacity:1,scale:1}} style={{textAlign:"center",padding:"48px 20px"}}>
      <div style={{fontSize:64,marginBottom:16}}>🏆</div>
      <div style={{fontFamily:"'Cormorant Garamond',serif",fontSize:36,fontWeight:400,color:"#1a1a1a",marginBottom:12}}>Inquiry <GoldText style={{fontStyle:"italic"}}>Sent!</GoldText></div>
      <p style={{fontSize:14,color:"#888",fontFamily:"'Outfit',sans-serif",lineHeight:1.8,maxWidth:380,margin:"0 auto 28px"}}>Our corporate events team will reach out within 24 hours with a tailored proposal.</p>
      <button onClick={()=>{setSent(false);setStep(1);setSelTypes([]);setSelStyles([]);setSelServices([]);setF({name:"",phone:"",email:"",company:"",eventName:"",date:"",time:"",guests:"",duration:"1 Day",venue:"",vcity:"Delhi",vname:"",budget:"",flex:"Fixed Budget",special:"",hear:""});}} style={{background:"linear-gradient(135deg,#B8860B,#D4AF37)",color:"#fff",border:"none",borderRadius:100,padding:"13px 36px",fontSize:13,fontFamily:"'Outfit',sans-serif",fontWeight:700,letterSpacing:".1em",cursor:"pointer",boxShadow:"0 6px 20px rgba(212,175,55,.35)"}}>Plan Another Event</button>
    </motion.div>
  );

  return (
    <div>
      <StepBar current={step} />
      <AnimatePresence mode="wait">
        {step === 1 && <motion.div key="s1" initial={{opacity:0,x:20}} animate={{opacity:1,x:0}} exit={{opacity:0,x:-20}}>
          <div style={{fontFamily:"'Cormorant Garamond',serif",fontSize:26,fontWeight:400,color:"#1a1a1a",marginBottom:4}}>Contact Details</div>
          <p style={{fontSize:12,color:"#aaa",fontFamily:"'Outfit',sans-serif",marginBottom:24}}>Tell us who you are so we can reach you.</p>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:16}}>
            <FieldWrap label="Full Name *">{inp("name","Your name")}</FieldWrap>
            <FieldWrap label="WhatsApp / Phone *">{inp("phone","+91 XXXXX XXXXX","tel")}</FieldWrap>
            <FieldWrap label="Email Address">{inp("email","you@company.com","email")}</FieldWrap>
            <FieldWrap label="Company / Organisation">{inp("company","Company name")}</FieldWrap>
          </div>
        </motion.div>}
        {step === 2 && <motion.div key="s2" initial={{opacity:0,x:20}} animate={{opacity:1,x:0}} exit={{opacity:0,x:-20}}>
          <div style={{fontFamily:"'Cormorant Garamond',serif",fontSize:26,fontWeight:400,color:"#1a1a1a",marginBottom:4}}>Event Details</div>
          <p style={{fontSize:12,color:"#aaa",fontFamily:"'Outfit',sans-serif",marginBottom:24}}>Tell us about your event requirements.</p>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:16,marginBottom:16}}>
            <FieldWrap label="Event Name *">{inp("eventName","Annual Meet, Product Launch…")}</FieldWrap>
            <FieldWrap label="Expected Guests *">{sel("guests",["Up to 50","50–100","100–250","250–500","500–1000","1000+"],"Select range")}</FieldWrap>
            <FieldWrap label="Event Date *">{inp("date","","date")}</FieldWrap>
            <FieldWrap label="Start Time">{inp("time","","time")}</FieldWrap>
            <FieldWrap label="Duration">{sel("duration",["Half Day","1 Day","2 Days","3 Days","Multi-Day","Custom"])}</FieldWrap>
          </div>
          <FieldWrap label="Event Type (choose any)">
            <div style={{display:"flex",flexWrap:"wrap",gap:7,marginTop:4}}>{EVENT_TYPES.map(t=><Pill key={t.label} label={`${t.emoji} ${t.label}`} selected={selTypes.includes(t.label)} onToggle={()=>tog(selTypes,setSelTypes,t.label)} />)}</div>
          </FieldWrap>
          <div style={{marginTop:16}}>
            <FieldWrap label="Event Style (choose any)">
              <div style={{display:"flex",flexWrap:"wrap",gap:7,marginTop:4}}>{CORP_STYLES.map(t=><Pill key={t.label} label={`${t.emoji} ${t.label}`} selected={selStyles.includes(t.label)} onToggle={()=>tog(selStyles,setSelStyles,t.label)} />)}</div>
            </FieldWrap>
          </div>
        </motion.div>}
        {step === 3 && <motion.div key="s3" initial={{opacity:0,x:20}} animate={{opacity:1,x:0}} exit={{opacity:0,x:-20}}>
          <div style={{fontFamily:"'Cormorant Garamond',serif",fontSize:26,fontWeight:400,color:"#1a1a1a",marginBottom:4}}>Venue & Budget</div>
          <p style={{fontSize:12,color:"#aaa",fontFamily:"'Outfit',sans-serif",marginBottom:24}}>Help us find the perfect space for your event.</p>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:16}}>
            <FieldWrap label="Venue Type *">{sel("venue",["Hotel Banquet","Convention Centre","Corporate Office","Farmhouse","Rooftop","Outdoor Venue","I Need a Suggestion"],"Select venue")}</FieldWrap>
            <FieldWrap label="City / Area">{sel("vcity",["Delhi","Noida","Gurgaon / Gurugram","Faridabad","Ghaziabad","Greater Noida","Other"])}</FieldWrap>
            <div style={{gridColumn:"1 / -1"}}><FieldWrap label="Specific Venue Name (if any)">{inp("vname","Hotel / office / venue name…")}</FieldWrap></div>
            <FieldWrap label="Approximate Budget *">{sel("budget",["Under ₹2 Lakh","₹2–5 Lakh","₹5–10 Lakh","₹10–25 Lakh","₹25–50 Lakh","₹50 Lakh+","Let's Discuss"],"Select range")}</FieldWrap>
            <FieldWrap label="Budget Flexibility">{sel("flex",["Fixed Budget","Slightly Flexible (±10%)","Flexible for the Right Experience","No Constraint"])}</FieldWrap>
          </div>
        </motion.div>}
        {step === 4 && <motion.div key="s4" initial={{opacity:0,x:20}} animate={{opacity:1,x:0}} exit={{opacity:0,x:-20}}>
          <div style={{fontFamily:"'Cormorant Garamond',serif",fontSize:26,fontWeight:400,color:"#1a1a1a",marginBottom:4}}>Services & Requirements</div>
          <p style={{fontSize:12,color:"#aaa",fontFamily:"'Outfit',sans-serif",marginBottom:24}}>Select everything you'd like us to arrange.</p>
          <FieldWrap label="Services Required">
            <div style={{display:"flex",flexWrap:"wrap",gap:7,marginTop:4}}>{SERVICES.map(s=><Pill key={s} label={s} selected={selServices.includes(s)} onToggle={()=>tog(selServices,setSelServices,s)} />)}</div>
          </FieldWrap>
          <div style={{display:"flex",flexDirection:"column",gap:14,marginTop:20}}>
            <FieldWrap label="Special Requirements / Notes">
              <textarea value={f.special} onChange={e=>upd("special",e.target.value)} rows={3} placeholder="Brand guidelines, specific requirements, dietary needs, theme details…" style={{...IS,resize:"vertical"}} onFocus={e=>e.target.style.borderColor="#D4AF37"} onBlur={e=>e.target.style.borderColor="rgba(30,30,30,.12)"} />
            </FieldWrap>
            <FieldWrap label="How did you hear about us?">{sel("hear",["Instagram","Facebook","Google","Colleague / Referral","Previous Client","WhatsApp","Other"],"Select…")}</FieldWrap>
          </div>
        </motion.div>}
      </AnimatePresence>
      <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginTop:32,paddingTop:24,borderTop:"1.5px solid rgba(30,30,30,.07)"}}>
        <button onClick={()=>step>1&&setStep(s=>s-1)} disabled={step===1} style={{background:"transparent",border:"1.5px solid rgba(30,30,30,.15)",color:"#555",borderRadius:100,padding:"11px 24px",fontSize:11,fontFamily:"'Outfit',sans-serif",letterSpacing:".1em",textTransform:"uppercase",cursor:step===1?"default":"pointer",opacity:step===1?.3:1}}>← Back</button>
        <span style={{fontSize:11,color:"#ccc",letterSpacing:".2em",fontFamily:"'Outfit',sans-serif"}}>{step} / {STEPS.length}</span>
        <button onClick={()=>{if(!validate())return;if(step===4){send();return;}setStep(s=>s+1);}} style={{background:"linear-gradient(135deg,#B8860B,#D4AF37,#F0D060)",color:"#fff",border:"none",borderRadius:100,padding:"12px 28px",fontSize:12,fontFamily:"'Outfit',sans-serif",fontWeight:700,letterSpacing:".12em",textTransform:"uppercase",cursor:"pointer",boxShadow:"0 6px 20px rgba(212,175,55,.35)"}}>{step===4?"Send via WhatsApp 💬":"Continue →"}</button>
      </div>
    </div>
  );
};

const ProcessSection = () => {
  const steps = [
    { num:"01", emoji:"📞", title:"Get in Touch",     desc:"Fill our brief or call us. We'll schedule a consultation within hours to understand your vision." },
    { num:"02", emoji:"🎨", title:"Event Design",     desc:"Our team creates a customised event concept, stage design, and décor plan aligned to your brand." },
    { num:"03", emoji:"✅", title:"Confirm & Relax",  desc:"Finalise the proposal, approve designs, and leave all execution entirely to our expert team." },
    { num:"04", emoji:"🏆", title:"Event Day!",       desc:"We deliver a flawless, on-brand event experience that impresses every attendee." },
  ];
  return (
    <section style={{padding:"72px 20px",background:"#fff"}}>
      <div style={{maxWidth:1000,margin:"0 auto"}}>
        <div style={{textAlign:"center",marginBottom:52}}>
          <SectionTag>How It Works</SectionTag>
          <h2 style={{fontFamily:"'Cormorant Garamond',serif",fontSize:"clamp(32px,5vw,64px)",fontWeight:400,color:"#1a1a1a",margin:"16px 0 0"}}>From Brief to <GoldText style={{fontStyle:"italic"}}>Brilliance</GoldText></h2>
        </div>
        <div style={{display:"grid",gridTemplateColumns:"repeat(2,1fr)",gap:24}} className="ce-proc-2">
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

const Testimonials = () => {
  const reviews = [
    { name:"Vikram Malhotra, MD", event:"Annual Sales Conference – Noida", text:"Indian Riwaaz transformed our 400-person conference into a world-class event. The stage production and lighting were outstanding. Our team was blown away.", stars:5 },
    { name:"Priya Kapoor, HR Head", event:"Product Launch – Gurgaon", text:"The product launch setup was absolutely stunning. LED backdrop, perfect branding everywhere — it made our new product look like a billion-dollar offering.", stars:5 },
    { name:"Rahul Sharma, CEO", event:"Dealer Meet – Delhi", text:"Our dealer meet needed to impress 300+ partners. Indian Riwaaz delivered a grand, professional event that strengthened every relationship in the room.", stars:5 },
  ];
  const [idx,setIdx]=useState(0);
  useEffect(()=>{const t=setInterval(()=>setIdx(p=>(p+1)%reviews.length),5000);return()=>clearInterval(t);},[]);
  return (
    <section style={{padding:"72px 20px",background:"linear-gradient(135deg,#1a0f00,#0f0800,#1a1000)"}}>
      <div style={{maxWidth:760,margin:"0 auto",textAlign:"center"}}>
        <span style={{display:"inline-block",background:"rgba(212,175,55,.15)",border:"1px solid rgba(212,175,55,.3)",color:"#D4AF37",padding:"5px 20px",borderRadius:100,fontSize:11,letterSpacing:".28em",textTransform:"uppercase",fontWeight:700,marginBottom:20,fontFamily:"'Outfit',sans-serif"}}>Happy Clients</span>
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
        <div style={{display:"flex",gap:10,justifyContent:"center",marginTop:28}}>{reviews.map((_,i)=><div key={i} onClick={()=>setIdx(i)} style={{width:i===idx?28:8,height:8,borderRadius:100,background:i===idx?"#D4AF37":"rgba(255,255,255,.2)",cursor:"pointer",transition:"all .3s"}} />)}</div>
      </div>
    </section>
  );
};

const BLOG_POSTS = [
  { emoji:"🚀", tag:"Event Design", title:"How to Make Your Product Launch Unmissable: A Complete Guide", excerpt:"From LED countdown walls to influencer experiences — our expert tips on creating a product launch that generates real buzz and media coverage.", readTime:"6 min read", date:"Apr 2025", highlights:["Stage design","Brand activation","Media wall tips","Guest experience"] },
  { emoji:"🏆", tag:"Awards Night", title:"Planning a Corporate Awards Night That Actually Inspires Your Team", excerpt:"Recognition events done right can transform company culture. Here's how to design an awards ceremony that every employee talks about for years.", readTime:"5 min read", date:"Mar 2025", highlights:["Venue selection","Ambiance tips","Trophies & design","Entertainment ideas"] },
  { emoji:"🤝", tag:"Dealer Meets", title:"The Art of the Perfect Dealer Meet: Building Loyalty Through Experience", excerpt:"Your dealer meet is a relationship investment. Learn how to create an environment that makes partners feel valued, inspired, and loyal to your brand.", readTime:"7 min read", date:"Feb 2025", highlights:["Venue tips","Presentation setup","Networking zones","Dinner design"] },
  { emoji:"🗓️", tag:"Planning Guide", title:"Corporate Event Planning Checklist: 12 Weeks to a Flawless Event", excerpt:"Never scramble last-minute again. Our week-by-week corporate event planning checklist covers every vendor, approval, and logistics detail.", readTime:"8 min read", date:"Jan 2025", highlights:["Timeline","Vendor list","Budget tracker","Day-of logistics"] },
];

const BlogSection = () => {
  const scrollTo = id => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  return (
    <section style={{ padding: "80px 20px", background: "#fffdf8" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 52 }}>
          <SectionTag>Ideas & Insights</SectionTag>
          <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "clamp(32px,5vw,64px)", fontWeight: 400, color: "#1a1a1a", margin: "16px 0 8px" }}>
            Event <GoldText style={{ fontStyle: "italic" }}>Stories</GoldText>
          </h2>
          <p style={{ color: "#999", fontSize: 14, fontFamily: "'Outfit',sans-serif", maxWidth: 480, margin: "0 auto" }}>Expert tips, event design ideas, and behind-the-scenes insights from our corporate planners.</p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 260px), 1fr))", gap: 20 }}>
          {BLOG_POSTS.map((post, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
              whileHover={{ y: -6, boxShadow: "0 20px 48px rgba(212,175,55,.14)" }}
              style={{ background: "#fff", borderRadius: 20, overflow: "hidden", border: "1.5px solid rgba(212,175,55,.12)", boxShadow: "0 2px 16px rgba(0,0,0,.05)", transition: "all .35s", cursor: "pointer" }}
              onClick={() => scrollTo("ce-form")}>
              <div style={{ background: `linear-gradient(135deg, ${["#fff5e0","#f0fff4","#f5f0ff","#fff0f5"][i]}, ${["#fde68a20","#d1fae520","#ede9fe20","#fce7f320"][i]})`, padding: "28px 24px 20px", textAlign: "center", borderBottom: "1px solid rgba(212,175,55,.08)" }}>
                <div style={{ fontSize: 52, marginBottom: 12, lineHeight: 1 }}>{post.emoji}</div>
                <span style={{ display: "inline-block", background: "rgba(212,175,55,.12)", border: "1px solid rgba(212,175,55,.25)", color: "#B8860B", padding: "3px 14px", borderRadius: 100, fontSize: 9, letterSpacing: ".25em", textTransform: "uppercase", fontWeight: 700, fontFamily: "'Outfit',sans-serif" }}>{post.tag}</span>
              </div>
              <div style={{ padding: "20px 24px 24px" }}>
                <h3 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 19, fontWeight: 500, color: "#1a1a1a", lineHeight: 1.35, marginBottom: 10 }}>{post.title}</h3>
                <p style={{ fontFamily: "'Outfit',sans-serif", fontSize: 12, color: "#777", lineHeight: 1.75, marginBottom: 16 }}>{post.excerpt}</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 18 }}>{post.highlights.map((h, j) => (<span key={j} style={{ fontFamily: "'Outfit',sans-serif", fontSize: 9, fontWeight: 700, letterSpacing: ".14em", textTransform: "uppercase", color: "#B8860B", background: "rgba(212,175,55,.08)", border: "1px solid rgba(212,175,55,.15)", padding: "3px 10px", borderRadius: 100 }}>✦ {h}</span>))}</div>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", paddingTop: 14, borderTop: "1px solid rgba(30,30,30,.07)" }}>
                  <span style={{ fontFamily: "'Outfit',sans-serif", fontSize: 10, color: "#ccc", letterSpacing: ".1em" }}>{post.date} · {post.readTime}</span>
                  <span style={{ fontFamily: "'Outfit',sans-serif", fontSize: 10, fontWeight: 700, letterSpacing: ".15em", textTransform: "uppercase", color: "#D4AF37" }}>Plan This →</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ marginTop: 40, background: "linear-gradient(135deg,#1a0f00,#2a1800)", borderRadius: 24, padding: "clamp(28px,5vw,44px) clamp(24px,5vw,48px)", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 20, border: "1px solid rgba(212,175,55,.2)" }}>
          <div>
            <div style={{ fontSize: 10, letterSpacing: ".3em", textTransform: "uppercase", color: "#D4AF37", fontFamily: "'Outfit',sans-serif", fontWeight: 700, marginBottom: 8 }}>Ready to Make an Impact?</div>
            <h3 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "clamp(22px,4vw,36px)", fontWeight: 400, color: "#fff", margin: 0 }}>Your standout event is just <GoldText style={{ fontStyle: "italic" }}>one click away</GoldText></h3>
          </div>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <button onClick={() => scrollTo("ce-form")} style={{ background: "linear-gradient(135deg,#B8860B,#D4AF37)", color: "#fff", border: "none", borderRadius: 100, padding: "13px 28px", fontSize: 12, fontFamily: "'Outfit',sans-serif", fontWeight: 700, letterSpacing: ".1em", textTransform: "uppercase", cursor: "pointer", boxShadow: "0 6px 20px rgba(212,175,55,.35)" }}>🏢 Book Now</button>
            <a href="https://wa.me/918595633810" target="_blank" rel="noopener noreferrer" style={{ background: "rgba(255,255,255,.06)", color: "#D4AF37", border: "1px solid rgba(212,175,55,.3)", borderRadius: 100, padding: "13px 28px", fontSize: 12, fontFamily: "'Outfit',sans-serif", fontWeight: 700, letterSpacing: ".1em", textTransform: "uppercase", cursor: "pointer", textDecoration: "none" }}>💬 WhatsApp</a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const ServiceFooter = () => (
  <footer style={{ background: "#1a0f00", padding: "44px 20px 32px", textAlign: "center", borderTop: "1px solid rgba(212,175,55,.12)" }}>
    <div style={{ maxWidth: 700, margin: "0 auto" }}>
      <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 28, fontWeight: 400, color: "#fff", marginBottom: 8 }}>Indian <GoldText style={{ fontStyle: "italic" }}>Riwaaz</GoldText></div>
      <p style={{ fontFamily: "'Outfit',sans-serif", fontSize: 12, color: "rgba(255,255,255,.4)", marginBottom: 20 }}>Delhi NCR's Premier Corporate Event Planners</p>
      <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap", marginBottom: 24 }}>
        <a href="tel:+918595633810" style={{ color: "#D4AF37", fontFamily: "'Outfit',sans-serif", fontSize: 12, textDecoration: "none" }}>📞 +91 8595633810</a>
        <span style={{ color: "rgba(255,255,255,.2)" }}>|</span>
        <a href="https://wa.me/918595633810" target="_blank" rel="noopener noreferrer" style={{ color: "#D4AF37", fontFamily: "'Outfit',sans-serif", fontSize: 12, textDecoration: "none" }}>💬 WhatsApp</a>
        <span style={{ color: "rgba(255,255,255,.2)" }}>|</span>
        <a href="mailto:indianriwaaz123@gmail.com" style={{ color: "#D4AF37", fontFamily: "'Outfit',sans-serif", fontSize: 12, textDecoration: "none" }}>✉ indianriwaaz123@gmail.com</a>
      </div>
      <Link to="/" style={{ display: "inline-flex", alignItems: "center", gap: 6, color: "rgba(255,255,255,.4)", fontFamily: "'Outfit',sans-serif", fontSize: 11, textDecoration: "none", letterSpacing: ".15em" }}>← Back to Indian Riwaaz Home</Link>
      <div style={{ marginTop: 28, paddingTop: 20, borderTop: "1px solid rgba(255,255,255,.06)" }}>
        <p style={{ fontFamily: "'Outfit',sans-serif", fontSize: 10, color: "rgba(255,255,255,.2)", letterSpacing: ".2em", textTransform: "uppercase" }}>© 2025 Indian Riwaaz. All Rights Reserved.</p>
      </div>
    </div>
  </footer>
);

export default function CorporateServicePage() {
  const scrollTo = id => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  return (
    <>
      <Helmet>
        <title>Best Corporate Event Management Company in Delhi NCR | Riwaaz India</title>
        <meta
          name="description"
          content="Discover Riwaaz India, the best corporate event management company in Delhi NCR, offering flawless planning, premium decor, branding, entertainment, and seamless execution."
        />
      </Helmet>
      <div style={{ fontFamily: "'Outfit',sans-serif", background: "#fff", color: "#1a1a1a", minHeight: "100vh" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400;1,500&family=Outfit:wght@300;400;500;600;700&display=swap');
        *{box-sizing:border-box;margin:0;padding:0;}
        @media(max-width:640px){
          .ce-hero-h{ font-size: clamp(44px,13vw,72px) !important; line-height:1 !important; }
          .ce-hero-btns{ flex-direction:column !important; gap:12px !important; }
          .ce-stats{ grid-template-columns:1fr 1fr !important; }
          .ce-hl{ grid-template-columns:1fr 1fr !important; }
          .ce-pkgs{ grid-template-columns:1fr !important; }
          .ce-proc-2{ grid-template-columns:1fr 1fr !important; gap:16px !important; }
          .ce-form-card{ padding:28px 20px !important; }
          .ce-nav-links{ display:none !important; }
          .ce-styles{ grid-template-columns:repeat(3,1fr) !important; }
        }
        @media(max-width:480px){ .ce-proc-2{ grid-template-columns:1fr !important; } .ce-hl{ grid-template-columns:1fr !important; } }
        .ce-wa{ position:fixed;bottom:20px;right:20px;z-index:900;width:52px;height:52px;border-radius:50%;background:#25D366;display:flex;align-items:center;justify-content:center;box-shadow:0 4px 20px rgba(37,211,102,.45);font-size:24px;text-decoration:none;transition:transform .2s; }
        .ce-wa:hover{ transform:scale(1.1) rotate(5deg); }
      `}</style>

      <ServiceNavbar />
      <a href="https://wa.me/918595633810?text=Hello!%20I%20want%20to%20book%20a%20Corporate%20Event." target="_blank" rel="noopener noreferrer" className="ce-wa">💬</a>

      <section style={{ minHeight: "92vh", display: "flex", alignItems: "flex-end", position: "relative", overflow: "hidden", paddingTop: 80 }}>
        <div style={{ position: "absolute", inset: 0 }}>
          <img src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1600&auto=format&fit=crop" referrerPolicy="no-referrer" alt="" style={{ width: "100%", height: "100%", objectFit: "cover", filter: "brightness(.20) saturate(1.1)" }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top,#fff 0%,rgba(255,255,255,.05) 42%,transparent 100%)" }} />
          <div style={{ position: "absolute", top: "18%", right: "8%", width: 320, height: 320, borderRadius: "50%", background: "radial-gradient(circle,rgba(212,175,55,.18) 0%,transparent 70%)", pointerEvents: "none" }} />
        </div>
        <motion.div initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.1, ease: [.22, 1, .36, 1] }} style={{ position: "relative", zIndex: 2, maxWidth: 1100, margin: "0 auto", width: "100%", padding: "0 24px 80px" }}>
          <div style={{ fontSize: 60, marginBottom: 16 }}>🏢</div>
          <div style={{ marginBottom: 16 }}><SectionTag>Where Brands Make Their Statement</SectionTag></div>
          <h1 className="ce-hero-h" style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 92, fontWeight: 300, color: "white", lineHeight: .9, letterSpacing: "-.03em", marginBottom: 24 }}>Corporate<br /><GoldText style={{ fontStyle: "italic" }}>Events</GoldText></h1>
          <p style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 18, color: "white", fontStyle: "italic", maxWidth: 560, lineHeight: 1.8, marginBottom: 36 }}>From intimate board meetings to grand product launches and dealer conventions — we create corporate events that elevate your brand across Delhi NCR.</p>
          <div className="ce-hero-btns" style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
            <button onClick={() => scrollTo("ce-form")} style={{ background: "linear-gradient(135deg,#B8860B,#D4AF37,#F0D060)", color: "#fff", border: "none", borderRadius: 100, padding: "16px 40px", fontSize: 12, fontFamily: "'Outfit',sans-serif", fontWeight: 700, letterSpacing: ".12em", textTransform: "uppercase", cursor: "pointer", boxShadow: "0 8px 28px rgba(212,175,55,.4)" }}>🏢 Book Your Event</button>
            <button onClick={() => scrollTo("ce-pkgs")} style={{ background: "rgba(255,255,255,.88)", backdropFilter: "blur(8px)", border: "1.5px solid rgba(212,175,55,.35)", color: "#B8860B", borderRadius: 100, padding: "16px 36px", fontSize: 12, fontFamily: "'Outfit',sans-serif", fontWeight: 700, letterSpacing: ".12em", textTransform: "uppercase", cursor: "pointer" }}>View Packages</button>
          </div>
          <div style={{ display: "flex", gap: 20, marginTop: 36, flexWrap: "wrap" }}>
            {["⭐ 200+ Corporate Events", "🗺️ Delhi NCR Coverage", "📞 24h Response"].map(b => (<span key={b} style={{ fontFamily: "'Outfit',sans-serif", fontSize: 11, color: "#666", fontWeight: 600, background: "rgba(255,255,255,.8)", backdropFilter: "blur(8px)", padding: "6px 16px", borderRadius: 100, border: "1px solid rgba(212,175,55,.2)" }}>{b}</span>))}
          </div>
        </motion.div>
      </section>

      <div style={{ background: "#fff", borderTop: "1px solid rgba(212,175,55,.18)", borderBottom: "1px solid rgba(212,175,55,.18)", padding: "36px 20px" }}>
        <div className="ce-stats" style={{ maxWidth: 900, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 20, textAlign: "center" }}>
          {[["200+", "Corporate Events"], ["50+", "Top Brands Served"], ["12+", "Event Formats"], ["100%", "Client Satisfaction"]].map(([n, l]) => (
            <div key={l}>
              <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 44, fontWeight: 600, lineHeight: 1, background: "linear-gradient(135deg,#B8860B,#D4AF37,#F0D060)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>{n}</div>
              <div style={{ fontSize: 10, letterSpacing: ".22em", textTransform: "uppercase", color: "#aaa", marginTop: 6, fontFamily: "'Outfit',sans-serif", fontWeight: 600 }}>{l}</div>
            </div>
          ))}
        </div>
      </div>

      <section style={{ padding: "80px 20px", background: "#fffdf8" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <SectionTag>What We Offer</SectionTag>
            <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "clamp(36px,6vw,68px)", fontWeight: 300, color: "#1a1a1a", letterSpacing: "-.02em", margin: "16px 0 0" }}>Every Detail <GoldText style={{ fontStyle: "italic" }}>Perfected</GoldText></h2>
          </div>
          <div className="ce-hl" style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 16 }}>
            {HIGHLIGHTS.map((h, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * .07 }} style={{ background: "#fff", padding: "24px 18px", borderRadius: 18, border: "1.5px solid rgba(212,175,55,.12)", boxShadow: "0 2px 16px rgba(0,0,0,.04)" }} whileHover={{ y: -6, boxShadow: "0 16px 40px rgba(212,175,55,.14)", borderColor: "rgba(212,175,55,.4)" }}>
                <div style={{ fontSize: 32, marginBottom: 14 }}>{h.emoji}</div>
                <h3 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 18, fontWeight: 500, color: "#1a1a1a", marginBottom: 8 }}>{h.title}</h3>
                <p style={{ fontSize: 12, color: "#888", lineHeight: 1.75, fontFamily: "'Outfit',sans-serif" }}>{h.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <GalleryCarousel />
      <EventTypesCarousel />

      <section id="ce-pkgs" style={{ padding: "80px 20px", background: "#fff" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 52 }}>
            <SectionTag>Pricing</SectionTag>
            <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "clamp(36px,6vw,68px)", fontWeight: 300, color: "#1a1a1a", margin: "16px 0 0" }}>Our <GoldText style={{ fontStyle: "italic" }}>Packages</GoldText></h2>
          </div>
          <div className="ce-pkgs" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20 }}>
            {PACKAGES.map((pkg, i) => (
              <motion.div key={pkg.name} initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * .1 }} style={{ borderRadius: 22, border: pkg.featured ? "2px solid rgba(212,175,55,.55)" : "1.5px solid rgba(30,30,30,.08)", background: pkg.featured ? "linear-gradient(145deg,#fffdf8,#fff9ec)" : "#fff", padding: "36px 28px", position: "relative", overflow: "hidden", boxShadow: pkg.featured ? "0 20px 60px rgba(212,175,55,.16)" : "0 4px 20px rgba(0,0,0,.05)" }}>
                {pkg.featured && <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 4, background: "linear-gradient(to right,#B8860B,#D4AF37,#F0D060)" }} />}
                {pkg.featured && <span style={{ display: "inline-block", background: "linear-gradient(135deg,#B8860B,#D4AF37)", color: "#fff", padding: "4px 14px", borderRadius: 100, fontSize: 9, letterSpacing: ".25em", textTransform: "uppercase", fontWeight: 700, marginBottom: 12, fontFamily: "'Outfit',sans-serif" }}>Most Popular</span>}
                <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 30, fontWeight: 400, color: "#1a1a1a", marginBottom: 6 }}>{pkg.name}</div>
                <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 24, fontWeight: 600, marginBottom: 4, background: "linear-gradient(135deg,#B8860B,#D4AF37,#F0D060)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>{pkg.price}<span style={{ fontSize: 13, fontWeight: 300, color: "#bbb", WebkitTextFillColor: "#bbb" }}>{pkg.unit}</span></div>
                <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 12, color: "#aaa", fontStyle: "italic", marginBottom: 24 }}>{pkg.tagline}</div>
                <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 24 }}>{pkg.features.map(feat => <div key={feat} style={{ display: "flex", alignItems: "flex-start", gap: 8 }}><div style={{ width: 6, height: 6, borderRadius: "50%", background: "#D4AF37", marginTop: 6, flexShrink: 0 }} /><span style={{ fontSize: 12, color: "#555", fontFamily: "'Outfit',sans-serif" }}>{feat}</span></div>)}</div>
                <button onClick={() => scrollTo("ce-form")} style={{ width: "100%", padding: "13px", fontSize: 10, fontFamily: "'Outfit',sans-serif", fontWeight: 700, letterSpacing: ".14em", textTransform: "uppercase", borderRadius: 100, cursor: "pointer", border: pkg.featured ? "none" : "1.5px solid rgba(212,175,55,.4)", background: pkg.featured ? "linear-gradient(135deg,#B8860B,#D4AF37)" : "transparent", color: pkg.featured ? "#fff" : "#B8860B", boxShadow: pkg.featured ? "0 6px 20px rgba(212,175,55,.35)" : "none" }}>Choose {pkg.name}</button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: "#fffdf8", borderTop: "1px solid rgba(212,175,55,.1)", padding: "72px 20px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <SectionTag>Event Aesthetics</SectionTag>
            <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "clamp(32px,5vw,60px)", fontWeight: 300, color: "#1a1a1a", margin: "16px 0 8px" }}>Your <GoldText style={{ fontStyle: "italic" }}>Style</GoldText></h2>
            <p style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 15, color: "#aaa", fontStyle: "italic" }}>We specialise in every aesthetic — from ultra-modern to heritage-inspired corporate experiences</p>
          </div>
          <div className="ce-styles" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(110px, 1fr))", gap: 14 }}>
            {CORP_STYLES.map((m, i) => (
              <motion.div key={m.label} initial={{ opacity: 0, scale: .9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * .05 }} style={{ background: "#fff", padding: "20px 12px", textAlign: "center", borderRadius: 16, border: "1.5px solid rgba(212,175,55,.1)", boxShadow: "0 2px 14px rgba(0,0,0,.04)" }} whileHover={{ y: -5, boxShadow: "0 12px 32px rgba(212,175,55,.16)", borderColor: "rgba(212,175,55,.4)" }}>
                <div style={{ fontSize: 32, marginBottom: 8 }}>{m.emoji}</div>
                <div style={{ fontSize: 10, color: "#666", letterSpacing: ".05em", fontFamily: "'Outfit',sans-serif", fontWeight: 600, lineHeight: 1.4 }}>{m.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ProcessSection />
      <Testimonials />
      <BlogSection />

      <section id="ce-form" style={{ padding: "80px 20px 100px", background: "#fff" }}>
        <div style={{ maxWidth: 820, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 44 }}>
            <SectionTag>Let's Plan Together</SectionTag>
            <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "clamp(36px,6vw,68px)", fontWeight: 300, color: "#1a1a1a", margin: "16px 0 8px" }}>Book Your <GoldText style={{ fontStyle: "italic" }}>Corporate Event</GoldText></h2>
            <p style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 14, color: "#aaa", fontStyle: "italic" }}>Fill in the details — your inquiry will be sent via WhatsApp to our team.</p>
          </div>
          <div className="ce-form-card" style={{ background: "#fff", border: "1.5px solid rgba(212,175,55,.2)", borderRadius: 24, padding: "44px 40px", boxShadow: "0 20px 60px rgba(212,175,55,.08)" }}>
            <BookingForm />
          </div>
        </div>
      </section>
      <ServiceFooter />
    </div>
    </>
  );
}