import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Link } from "react-router-dom";

// ─── Wedding Assets (paths match your app.jsx imports) ────────────────────────
import w1   from "../../assets/w1.mp4";
import w2   from "../../assets/w2.mp4";
import w3   from "../../assets/w3.mp4";
import w4   from "../../assets/w4.mp4";
import w5   from "../../assets/w5.mp4";
import w6   from "../../assets/w6.mp4";
import w10  from "../../assets/w10.mp4";
import w14  from "../../assets/w14.mp4";
import w20  from "../../assets/w20.mp4";
import w22  from "../../assets/w22.mp4";
import w26  from "../../assets/w26.mp4";
import w27  from "../../assets/w27.mp4";
import w28  from "../../assets/w28.mp4";
import w29  from "../../assets/w29.mp4";
import w30  from "../../assets/w30.mp4";
import w31  from "../../assets/w31.mp4";
import w32  from "../../assets/w32.mp4";
import w33  from "../../assets/w33.mp4";
import w34  from "../../assets/w34.mp4";
import w35  from "../../assets/w35.mp4";
import w36  from "../../assets/w36.mp4";
import w39  from "../../assets/w39.mp4";
import w45  from "../../assets/w45.jpeg";
import w46  from "../../assets/w46.mp4";
import w55  from "../../assets/w55.mp4";
import w87  from "../../assets/w87.mp4";
import w88  from "../../assets/w88.mp4";
import w89  from "../../assets/w89.jpeg";
import w90  from "../../assets/w90.mp4";
import w98  from "../../assets/w98.mp4";
import w200 from "../../assets/w200.mp4";
import w231 from "../../assets/w231.mp4";
import w232 from "../../assets/w232.mp4";
import w233 from "../../assets/w233.mp4";
import w234 from "../../assets/w234.mp4";
import w235 from "../../assets/w235.mp4";
import w236 from "../../assets/w236.mp4";
import w237 from "../../assets/w237.mp4";

// ─── Haldi / Mehndi Assets ────────────────────────────────────────────────────
import h1  from "../../assets/h1.jpeg";
import h2  from "../../assets/h2.jpeg";
import h3  from "../../assets/h3.jpeg";
import h4  from "../../assets/h4.jpeg";
import h5  from "../../assets/h5.jpeg";
import h6  from "../../assets/h6.jpeg";
import h7  from "../../assets/h7.jpeg";
import h8  from "../../assets/h8.jpeg";
import h9  from "../../assets/h9.jpeg";
import h10 from "../../assets/h10.jpeg";
import h11 from "../../assets/h11.jpeg";
import h12 from "../../assets/h12.jpeg";
import h13 from "../../assets/h13.jpeg";
import h14 from "../../assets/h14.jpeg";
import h15 from "../../assets/h15.jpeg";
import h16 from "../../assets/h16.jpeg";
import h17 from "../../assets/h17.jpeg";
import h18 from "../../assets/h18.jpeg";
import h19 from "../../assets/h19.jpeg";
import h20 from "../../assets/h20.jpeg";
import h21 from "../../assets/h21.jpeg";
import h22 from "../../assets/h22.mp4";
import h23 from "../../assets/h23.mp4";
import h24 from "../../assets/h24.mp4";
import h25 from "../../assets/h25.jpeg";
import h26 from "../../assets/h26.mp4";

// ─── GALLERY DATA ─────────────────────────────────────────────────────────────
const GALLERY_TABS = [
  { id: "all",          label: "All"           },
  { id: "ceremony",     label: "Ceremony"      },
  { id: "bridal-entry", label: "Bridal Entry"  },
  { id: "haldi-mehndi", label: "Haldi & Mehndi"},
  { id: "reception",    label: "Reception"     },
  { id: "decor",        label: "Decor"         },
  { id: "videos",       label: "Videos"        },
];

const ALL_GALLERY = [
  { type: "video", src: w1,   title: "The Union",          tab: "ceremony"     },
  { type: "video", src: w2,   title: "Grand Procession",   tab: "bridal-entry" },
  { type: "video", src: w3,   title: "Varmala Ceremony",   tab: "ceremony"     },
  { type: "video", src: w4,   title: "Pheras Highlights",  tab: "ceremony"     },
  { type: "video", src: w5,   title: "Bridal Portrait",    tab: "bridal-entry" },
  { type: "video", src: w6,   title: "Couple Moments",     tab: "ceremony"     },
  { type: "video", src: w10,  title: "Sangeet Night",      tab: "haldi-mehndi" },
  { type: "video", src: w14,  title: "Baraat Entry",       tab: "bridal-entry" },
  { type: "video", src: w20,  title: "Wedding Reel",       tab: "videos"       },
  { type: "video", src: w22,  title: "Mandap Decor",       tab: "decor"        },
  { type: "video", src: w26,  title: "Floral Stage",       tab: "decor"        },
  { type: "video", src: w27,  title: "Royal Decor",        tab: "decor"        },
  { type: "video", src: w28,  title: "Stage Setup",        tab: "decor"        },
  { type: "video", src: w29,  title: "Entrance Arch",      tab: "decor"        },
  { type: "video", src: w30,  title: "Table Settings",     tab: "decor"        },
  { type: "video", src: w31,  title: "Floral Walkway",     tab: "bridal-entry" },
  { type: "video", src: w32,  title: "Lighting Setup",     tab: "decor"        },
  { type: "video", src: w33,  title: "Bridal Suite",       tab: "decor"        },
  { type: "video", src: w34,  title: "Venue Decor",        tab: "decor"        },
  { type: "video", src: w35,  title: "Grand Hall",         tab: "decor"        },
  { type: "video", src: w36,  title: "Wedding Ceremony",   tab: "ceremony"     },
  { type: "video", src: w39,  title: "Reception Night",    tab: "reception"    },
  { type: "image", src: w45,  title: "Bhangra Moment",     tab: "reception"    },
  { type: "video", src: w46,  title: "Family Moments",     tab: "reception"    },
  { type: "video", src: w55,  title: "Vidai Ceremony",     tab: "ceremony"     },
  { type: "video", src: w87,  title: "Wedding Highlights", tab: "videos"       },
  { type: "video", src: w88,  title: "Phera Ceremony",     tab: "ceremony"     },
  { type: "image", src: w89,  title: "Jaimala Moment",     tab: "ceremony"     },
  { type: "video", src: w90,  title: "Sangeet Reel",       tab: "haldi-mehndi" },
  { type: "video", src: w98,  title: "Eternal Walk",       tab: "bridal-entry" },
  { type: "video", src: w200, title: "Wedding Cinematic",  tab: "videos"       },
  { type: "video", src: w231, title: "Bridal Entry 1",     tab: "bridal-entry" },
  { type: "video", src: w232, title: "Bridal Entry 2",     tab: "bridal-entry" },
  { type: "video", src: w233, title: "Bridal Entry 3",     tab: "bridal-entry" },
  { type: "video", src: w234, title: "Bridal Entry 4",     tab: "bridal-entry" },
  { type: "video", src: w235, title: "Bridal Entry 5",     tab: "bridal-entry" },
  { type: "video", src: w236, title: "Bridal Entry 6",     tab: "bridal-entry" },
  { type: "video", src: w237, title: "Bridal Entry 7",     tab: "bridal-entry" },
  // Haldi & Mehndi
  { type: "image", src: h1,  title: "Entrance Draping",   tab: "haldi-mehndi" },
  { type: "image", src: h2,  title: "Venue Facade",        tab: "haldi-mehndi" },
  { type: "image", src: h3,  title: "Stage Backdrop",      tab: "haldi-mehndi" },
  { type: "image", src: h4,  title: "Colorful Canopy",     tab: "haldi-mehndi" },
  { type: "image", src: h5,  title: "Floral Stage",        tab: "haldi-mehndi" },
  { type: "image", src: h6,  title: "Mandap Decor",        tab: "haldi-mehndi" },
  { type: "image", src: h7,  title: "Bridal Arch",         tab: "haldi-mehndi" },
  { type: "image", src: h8,  title: "Puja Setup",          tab: "haldi-mehndi" },
  { type: "image", src: h9,  title: "Ritual Corner",       tab: "haldi-mehndi" },
  { type: "image", src: h10, title: "Haldi Stage",         tab: "haldi-mehndi" },
  { type: "image", src: h11, title: "Drape Curtains",      tab: "haldi-mehndi" },
  { type: "image", src: h12, title: "Ribbon Decor",        tab: "haldi-mehndi" },
  { type: "image", src: h13, title: "Mehndi Backdrop",     tab: "haldi-mehndi" },
  { type: "image", src: h14, title: "Festive Strings",     tab: "haldi-mehndi" },
  { type: "image", src: h15, title: "Green Gold Drapes",   tab: "haldi-mehndi" },
  { type: "image", src: h16, title: "Patola Decor",        tab: "haldi-mehndi" },
  { type: "image", src: h17, title: "Traditional Panel",   tab: "haldi-mehndi" },
  { type: "image", src: h18, title: "Vibrant Entrance",    tab: "haldi-mehndi" },
  { type: "image", src: h19, title: "Open Stage Setup",    tab: "haldi-mehndi" },
  { type: "image", src: h20, title: "Diamond Decor",       tab: "haldi-mehndi" },
  { type: "image", src: h21, title: "Golden Stage",        tab: "haldi-mehndi" },
  { type: "video", src: h22, title: "Shaadi Signage",      tab: "haldi-mehndi" },
  { type: "video", src: h23, title: "Ceiling Decor",       tab: "haldi-mehndi" },
  { type: "video", src: h24, title: "Night Draping",       tab: "haldi-mehndi" },
  { type: "image", src: h25, title: "Lights & Drapes",     tab: "haldi-mehndi" },
  { type: "video", src: h26, title: "Outdoor Setup",       tab: "haldi-mehndi" },
];

const WEDDING_RITUALS = [
  { label: "Haldi Ceremony",   emoji: "💛" },
  { label: "Mehndi Night",     emoji: "🌿" },
  { label: "Sangeet Evening",  emoji: "🎶" },
  { label: "Baraat Procession",emoji: "🎺" },
  { label: "Varmala",          emoji: "💐" },
  { label: "Phera Ceremony",   emoji: "🔥" },
  { label: "Vidai",            emoji: "🕊️" },
  { label: "Reception Night",  emoji: "✨" },
  { label: "Cocktail Party",   emoji: "🥂" },
  { label: "Ring Ceremony",    emoji: "💍" },
  { label: "Tilak Ceremony",   emoji: "🪔" },
  { label: "Jagran Night",     emoji: "🙏" },
];

const WEDDING_STYLES = [
  { label: "Royal Rajputana",  emoji: "👑" },
  { label: "Mughal Grandeur",  emoji: "🕌" },
  { label: "South Indian",     emoji: "🌺" },
  { label: "Punjabi Dhamaka",  emoji: "🥁" },
  { label: "Destination Wed.", emoji: "🌴" },
  { label: "Garden Wedding",   emoji: "🌹" },
  { label: "Luxury Ballroom",  emoji: "💎" },
  { label: "Intimate Affair",  emoji: "🕯️" },
  { label: "Bollywood Theme",  emoji: "🎬" },
  { label: "Pastel Elegance",  emoji: "🌸" },
  { label: "Heritage Haveli",  emoji: "🏰" },
  { label: "Farmhouse Chic",   emoji: "🌾" },
];

const HIGHLIGHTS = [
  { emoji: "🌸", title: "Mandap Design",       desc: "Breathtaking floral mandaps, draping, and custom centrepieces crafted for your ceremony." },
  { emoji: "🎺", title: "Baraat Procession",   desc: "Grand baraat arrangements with dhol, band, lights, and horse/buggy/car entry setups." },
  { emoji: "💐", title: "Floral Décor",         desc: "Lush bouquets, arches, ceiling installations, and table florals in any colour palette." },
  { emoji: "📸", title: "Photo & Video",        desc: "Cinematic wedding films, candid photography, drone shots, and same-day edit reels." },
  { emoji: "🎶", title: "Sangeet Night",        desc: "Choreography, DJ, live band, LED dance floors, and stunning stage for the perfect sangeet." },
  { emoji: "🍽️", title: "Catering",            desc: "Curated multi-cuisine menus, live counters, dessert stations & impeccable service staff." },
  { emoji: "🕊️", title: "Vidai Arrangements",  desc: "Heartfelt Vidai setups including floral walkways, petal showers, and lighting." },
  { emoji: "💍", title: "Ring & Engagement",   desc: "Elegant décor for ring ceremonies and engagement parties that set the perfect tone." },
];

const PACKAGES = [
  {
    name: "Shagun",
    price: "₹1,500–2,500",
    unit: "/plate",
    tagline: "Up to 150 Guests",
    featured: false,
    features: [
      "Mandap & Stage Décor",
      "Floral Arrangements",
      "DJ & Sound System",
      "Catering (Veg Menu)",
      "Basic Photo Coverage",
      "Welcome Gate Setup",
      "2 Rituals Coverage",
    ],
  },
  {
    name: "Riwaaz",
    price: "₹3,500–5,000",
    unit: "/plate",
    tagline: "150–400 Guests",
    featured: true,
    features: [
      "Full Venue Transformation",
      "Bridal Entry Setup",
      "Sangeet Night Décor",
      "Haldi & Mehndi Setup",
      "Photo + Videography",
      "Catering (Multi-Cuisine)",
      "Baraat Arrangements",
      "Return Gift Curation",
    ],
  },
  {
    name: "Shahenshah",
    price: "Custom",
    unit: " Quote",
    tagline: "400+ Guests / Destination",
    featured: false,
    features: [
      "Grand Venue at Auris Luxury",
      "Multi-City / Destination Wedding",
      "Celebrity Performer Coordination",
      "Luxury Bridal Suite",
      "Premium Catering + Bar",
      "Full Film Production",
      "Personalized Wedding Website",
      "Dedicated Wedding Director",
    ],
  },
];

const SERVICES = [
  "Mandap Décor",
  "Stage & Backdrop",
  "Floral Arrangements",
  "Baraat Setup",
  "Bridal Entry",
  "DJ & Sound",
  "Live Band",
  "Catering (Veg)",
  "Catering (Non-Veg)",
  "Photography",
  "Videography",
  "Drone Coverage",
  "Mehendi Artist",
  "Sangeet Choreography",
  "Return Gift Curation",
  "Invitation Design",
  "Lighting & LED",
  "Fireworks / Cold Pyro",
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

// ─── MINIMAL NAVBAR ───────────────────────────────────────────────────────────
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
      <div style={{ display: "flex", gap: 28, alignItems: "center" }} className="wp-nav-links">
        {[["Gallery", "wp-gallery"], ["Packages", "wp-pkgs"], ["Book Now", "wp-form"]].map(([label, id]) => (
          <button key={id} onClick={() => scrollTo(id)} style={{ background: "none", border: "none", cursor: "pointer", fontSize: 11, fontFamily: "'Outfit',sans-serif", fontWeight: 700, letterSpacing: ".15em", textTransform: "uppercase", color: "#555", transition: "color .2s" }}
            onMouseEnter={e => e.target.style.color = "#B8860B"}
            onMouseLeave={e => e.target.style.color = "#555"}
          >{label}</button>
        ))}
      </div>
      <a href="https://wa.me/918595633810?text=Hello!%20I%20want%20to%20book%20a%20Wedding." target="_blank" rel="noopener noreferrer"
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
    <section id="wp-gallery" style={{ padding: "88px 0 80px", background: "#fff", overflow: "hidden" }}>
      <div style={{ textAlign: "center", marginBottom: 44, padding: "0 20px" }}>
        <SectionTag>Our Work</SectionTag>
        <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "clamp(32px,5vw,64px)", fontWeight: 400, color: "#1a1a1a", margin: "16px 0 8px", letterSpacing: "-.02em" }}>
          Wedding <GoldText style={{ fontStyle: "italic" }}>Gallery</GoldText>
        </h2>
        <p style={{ color: "#999", fontSize: 14, fontFamily: "'Outfit',sans-serif" }}>Every frame, a love story worth telling</p>
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

// ─── RITUALS CAROUSEL (mirrors ThemeCarousel) ─────────────────────────────────
const RitualsCarousel = () => {
  const [page, setPage] = useState(0);
  const PER = 6;
  const pages = Math.ceil(WEDDING_RITUALS.length / PER);
  const visible = WEDDING_RITUALS.slice(page * PER, page * PER + PER);
  return (
    <section style={{ background: "linear-gradient(135deg,#fffdf8,#fdf5e0)", padding: "72px 20px" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 44 }}>
          <SectionTag>Every Sacred Ritual</SectionTag>
          <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "clamp(32px,5vw,64px)", fontWeight: 400, color: "#1a1a1a", margin: "16px 0 0" }}>
            Ceremony <GoldText style={{ fontStyle: "italic" }}>Universe</GoldText>
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
  const [selRituals, setSelRituals] = useState([]);
  const [selStyles, setSelStyles] = useState([]);
  const [selServices, setSelServices] = useState([]);
  const [f, setF] = useState({ name:"",phone:"",email:"",city:"",bride:"",groom:"",date:"",time:"",guests:"",duration:"1 Day",styleCustom:"",venue:"",vcity:"Delhi",vname:"",budget:"",flex:"Fixed Budget",special:"",hear:"" });

  const upd = (k, v) => setF(p => ({ ...p, [k]: v }));
  const tog = (arr, setArr, val) => setArr(p => p.includes(val) ? p.filter(x => x !== val) : [...p, val]);
  const validate = () => {
    if (step === 1 && (!f.name || !f.phone)) { alert("Please fill in name and phone."); return false; }
    if (step === 2 && (!f.bride || !f.date || !f.guests)) { alert("Please fill bride/groom names, date and guests."); return false; }
    if (step === 3 && (!f.venue || !f.budget)) { alert("Please select venue type and budget."); return false; }
    return true;
  };
  const send = () => {
    const lines = [
      "*💍 Indian Riwaaz – Wedding Inquiry*","━━━━━━━━━━━━━━━",
      `Name: ${f.name}`,`Phone: ${f.phone}`,f.email,f.city,
      `Bride: ${f.bride}`,f.groom?`Groom: ${f.groom}`:"",
      `Date: ${f.date}`,`Guests: ${f.guests}`,`Duration: ${f.duration}`,
      selStyles.length?`Wedding Style: ${selStyles.join(", ")}`:"",
      selRituals.length?`Rituals: ${selRituals.join(", ")}`:"",
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
      <div style={{fontSize:64,marginBottom:16}}>💍</div>
      <div style={{fontFamily:"'Cormorant Garamond',serif",fontSize:36,fontWeight:400,color:"#1a1a1a",marginBottom:12}}>Inquiry <GoldText style={{fontStyle:"italic"}}>Sent!</GoldText></div>
      <p style={{fontSize:14,color:"#888",fontFamily:"'Outfit',sans-serif",lineHeight:1.8,maxWidth:380,margin:"0 auto 28px"}}>Our wedding specialists will reach out within 24 hours with a personalised proposal.</p>
      <button onClick={()=>{setSent(false);setStep(1);setSelRituals([]);setSelStyles([]);setSelServices([]);setF({name:"",phone:"",email:"",city:"",bride:"",groom:"",date:"",time:"",guests:"",duration:"1 Day",styleCustom:"",venue:"",vcity:"Delhi",vname:"",budget:"",flex:"Fixed Budget",special:"",hear:""});}} style={{background:"linear-gradient(135deg,#B8860B,#D4AF37)",color:"#fff",border:"none",borderRadius:100,padding:"13px 36px",fontSize:13,fontFamily:"'Outfit',sans-serif",fontWeight:700,letterSpacing:".1em",cursor:"pointer",boxShadow:"0 6px 20px rgba(212,175,55,.35)"}}>Plan Another Wedding</button>
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
          <div style={{fontFamily:"'Cormorant Garamond',serif",fontSize:26,fontWeight:400,color:"#1a1a1a",marginBottom:4}}>Wedding Details</div>
          <p style={{fontSize:12,color:"#aaa",fontFamily:"'Outfit',sans-serif",marginBottom:24}}>Tell us about the couple and the celebration.</p>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:16,marginBottom:16}}>
            <FieldWrap label="Bride's Name *">{inp("bride","Bride's name")}</FieldWrap>
            <FieldWrap label="Groom's Name">{inp("groom","Groom's name")}</FieldWrap>
            <FieldWrap label="Wedding Date *">{inp("date","","date")}</FieldWrap>
            <FieldWrap label="Start Time">{inp("time","","time")}</FieldWrap>
            <FieldWrap label="Expected Guests *">{sel("guests",["Up to 100","100–200","200–400","400–700","700–1000","1000+"],"Select range")}</FieldWrap>
            <FieldWrap label="Event Duration">{sel("duration",["1 Day","2 Days","3 Days","4 Days","5 Days (Full Celebration)","Custom"])}</FieldWrap>
          </div>
          <FieldWrap label="Rituals / Functions (choose any)">
            <div style={{display:"flex",flexWrap:"wrap",gap:7,marginTop:4}}>{WEDDING_RITUALS.map(t=><Pill key={t.label} label={`${t.emoji} ${t.label}`} selected={selRituals.includes(t.label)} onToggle={()=>tog(selRituals,setSelRituals,t.label)} />)}</div>
          </FieldWrap>
          <div style={{marginTop:16}}>
            <FieldWrap label="Wedding Style (choose any)">
              <div style={{display:"flex",flexWrap:"wrap",gap:7,marginTop:4}}>{WEDDING_STYLES.map(t=><Pill key={t.label} label={`${t.emoji} ${t.label}`} selected={selStyles.includes(t.label)} onToggle={()=>tog(selStyles,setSelStyles,t.label)} />)}</div>
            </FieldWrap>
          </div>
          <div style={{marginTop:16}}><FieldWrap label="Custom Style / Vision">{inp("styleCustom","Describe your dream wedding look…")}</FieldWrap></div>
        </motion.div>}

        {step === 3 && <motion.div key="s3" initial={{opacity:0,x:20}} animate={{opacity:1,x:0}} exit={{opacity:0,x:-20}}>
          <div style={{fontFamily:"'Cormorant Garamond',serif",fontSize:26,fontWeight:400,color:"#1a1a1a",marginBottom:4}}>Venue & Budget</div>
          <p style={{fontSize:12,color:"#aaa",fontFamily:"'Outfit',sans-serif",marginBottom:24}}>Help us match the perfect setting and scale.</p>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:16}}>
            <FieldWrap label="Venue Type *">{sel("venue",["Banquet Hall","Hotel","Farmhouse","Garden / Lawn","Terrace / Rooftop","Heritage / Haveli","Poolside / Resort","I Need a Suggestion"],"Select venue")}</FieldWrap>
            <FieldWrap label="Venue City / Area">{sel("vcity",["Delhi","Noida","Gurgaon / Gurugram","Faridabad","Ghaziabad","Greater Noida","Destination"])}</FieldWrap>
            <div style={{gridColumn:"1 / -1"}}><FieldWrap label="Specific Venue Name (if any)">{inp("vname","Banquet / hotel / society name…")}</FieldWrap></div>
            <FieldWrap label="Approximate Budget *">{sel("budget",["Under ₹5 Lakh","₹5–10 Lakh","₹10–20 Lakh","₹20–50 Lakh","₹50 Lakh–1 Crore","₹1 Crore+","Let's Discuss"],"Select range")}</FieldWrap>
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
            <FieldWrap label="Special Requests / Vision">
              <textarea value={f.special} onChange={e=>upd("special",e.target.value)} rows={3} placeholder="Dietary needs, colour palette, surprise arrangements, special entries…" style={{...IS,resize:"vertical"}} onFocus={e=>e.target.style.borderColor="#D4AF37"} onBlur={e=>e.target.style.borderColor="rgba(30,30,30,.12)"} />
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
    { num:"01", emoji:"📞", title:"Get in Touch",    desc:"Fill our inquiry form or call us directly. We'll schedule a consultation call within hours." },
    { num:"02", emoji:"🎨", title:"Wedding Planning", desc:"Our designer works with you to craft the perfect theme, rituals and décor concept." },
    { num:"03", emoji:"✅", title:"Confirm & Relax",  desc:"Finalise the package, sign off, and leave all the royal magic entirely to our expert team." },
    { num:"04", emoji:"💍", title:"Your Big Day!",    desc:"Watch as we transform your venue into a breathtaking wedding wonderland." },
  ];
  return (
    <section style={{padding:"72px 20px",background:"#fff"}}>
      <div style={{maxWidth:1000,margin:"0 auto"}}>
        <div style={{textAlign:"center",marginBottom:52}}>
          <SectionTag>How It Works</SectionTag>
          <h2 style={{fontFamily:"'Cormorant Garamond',serif",fontSize:"clamp(32px,5vw,64px)",fontWeight:400,color:"#1a1a1a",margin:"16px 0 0"}}>From Dream to <GoldText style={{fontStyle:"italic"}}>Reality</GoldText></h2>
        </div>
        <div style={{display:"grid",gridTemplateColumns:"repeat(2,1fr)",gap:24,position:"relative"}} className="wp-proc-2">
          {steps.map((s,i)=>(
            <motion.div key={i} initial={{opacity:0,y:24}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*.12}} style={{textAlign:"center",position:"relative",zIndex:1}}>
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
    { name:"Priya & Arjun Mehra", event:"Royal Wedding – Auris Luxury", text:"Indian Riwaaz turned our wedding into a fairy tale. Every detail — from the mandap to the vidai — was perfection. Our guests still talk about it.", stars:5 },
    { name:"Simran & Karan Malhotra", event:"Destination Wedding – Gurgaon", text:"The floral arrangements and bridal entry setup were absolutely jaw-dropping. Our families were in tears of joy. 10/10 without a single doubt.", stars:5 },
    { name:"Neha & Rohit Bhatia", event:"Sangeet & Wedding – Delhi", text:"They handled 5 functions seamlessly. The sangeet décor was straight out of a Bollywood film and the wedding itself was beyond our wildest dreams!", stars:5 },
  ];
  const [idx,setIdx]=useState(0);
  useEffect(()=>{const t=setInterval(()=>setIdx(p=>(p+1)%reviews.length),5000);return()=>clearInterval(t);},[]);
  return (
    <section style={{padding:"72px 20px",background:"linear-gradient(135deg,#1a0f00,#0f0800,#1a1000)"}}>
      <div style={{maxWidth:760,margin:"0 auto",textAlign:"center"}}>
        <span style={{display:"inline-block",background:"rgba(212,175,55,.15)",border:"1px solid rgba(212,175,55,.3)",color:"#D4AF37",padding:"5px 20px",borderRadius:100,fontSize:11,letterSpacing:".28em",textTransform:"uppercase",fontWeight:700,marginBottom:20,fontFamily:"'Outfit',sans-serif"}}>Happy Couples</span>
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

// ─── BLOG / INSPIRATION SECTION ───────────────────────────────────────────────
const BLOG_POSTS = [
  { emoji:"💐", tag:"Decor Trends", title:"7 Mandap Styles That Are Dominating Indian Weddings in 2025", excerpt:"From minimalist white florals to grand floral canopies dripping in roses and marigolds — discover the mandap styles our brides are obsessing over.", readTime:"5 min read", date:"Apr 2025", highlights:["Floral canopy","Arch mandap","Royal pillars","Minimalist style"] },
  { emoji:"🎶", tag:"Entertainment", title:"How to Plan the Perfect Sangeet Night: A Complete Guide", excerpt:"Sangeet is the heart of every Indian wedding. From choreography to DJ selection and stage design, here's everything you need to know.", readTime:"7 min read", date:"Mar 2025", highlights:["Choreography tips","DJ vs live band","LED floor ideas","Stage décor"] },
  { emoji:"🕊️", tag:"Bridal Entry", title:"10 Breathtaking Bridal Entry Ideas That Will Leave Everyone Speechless", excerpt:"From palanquins and vintage cars to drone reveals and petal showers — our top 10 bridal entry setups from real weddings we planned.", readTime:"4 min read", date:"Feb 2025", highlights:["Palanquin entry","Petal showers","Butterfly release","Smoke & lights"] },
  { emoji:"🗓️", tag:"Planning Guide", title:"The Ultimate Indian Wedding Planning Checklist: 12 Months Out", excerpt:"Planning a wedding can feel overwhelming. Our week-by-week, month-by-month guide covers everything from venue booking to the final send-off.", readTime:"10 min read", date:"Jan 2025", highlights:["12-month timeline","Vendor checklist","Budget tracker","Day-of guide"] },
];

const BlogSection = () => {
  const scrollTo = id => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  return (
    <section style={{ padding: "80px 20px", background: "#fffdf8" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 52 }}>
          <SectionTag>Ideas & Inspiration</SectionTag>
          <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "clamp(32px,5vw,64px)", fontWeight: 400, color: "#1a1a1a", margin: "16px 0 8px" }}>
            Wedding <GoldText style={{ fontStyle: "italic" }}>Stories</GoldText>
          </h2>
          <p style={{ color: "#999", fontSize: 14, fontFamily: "'Outfit',sans-serif", maxWidth: 480, margin: "0 auto" }}>Expert tips, ritual guides, and behind-the-scenes magic from our wedding planners.</p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 260px), 1fr))", gap: 20 }}>
          {BLOG_POSTS.map((post, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
              whileHover={{ y: -6, boxShadow: "0 20px 48px rgba(212,175,55,.14)" }}
              style={{ background: "#fff", borderRadius: 20, overflow: "hidden", border: "1.5px solid rgba(212,175,55,.12)", boxShadow: "0 2px 16px rgba(0,0,0,.05)", transition: "all .35s", cursor: "pointer" }}
              onClick={() => scrollTo("wp-form")}>
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
            <div style={{ fontSize: 10, letterSpacing: ".3em", textTransform: "uppercase", color: "#D4AF37", fontFamily: "'Outfit',sans-serif", fontWeight: 700, marginBottom: 8 }}>Ready to Begin Your Forever?</div>
            <h3 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "clamp(22px,4vw,36px)", fontWeight: 400, color: "#fff", margin: 0 }}>
              Your dream wedding is just <GoldText style={{ fontStyle: "italic" }}>one click away</GoldText>
            </h3>
          </div>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <button onClick={() => scrollTo("wp-form")} style={{ background: "linear-gradient(135deg,#B8860B,#D4AF37)", color: "#fff", border: "none", borderRadius: 100, padding: "13px 28px", fontSize: 12, fontFamily: "'Outfit',sans-serif", fontWeight: 700, letterSpacing: ".1em", textTransform: "uppercase", cursor: "pointer", boxShadow: "0 6px 20px rgba(212,175,55,.35)" }}>
              💍 Book Now
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
      <p style={{ fontFamily: "'Outfit',sans-serif", fontSize: 12, color: "rgba(255,255,255,.4)", marginBottom: 20 }}>Delhi NCR's Most Loved Wedding Planners</p>
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
        <p style={{ fontFamily: "'Outfit',sans-serif", fontSize: 10, color: "rgba(255,255,255,.2)", letterSpacing: ".2em", textTransform: "uppercase" }}>
          © 2025 Indian Riwaaz. All Rights Reserved.
        </p>
      </div>
    </div>
  </footer>
);

// ─── MAIN PAGE ────────────────────────────────────────────────────────────────
export default function WeddingServicePage() {
  const scrollTo = id => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <div style={{ fontFamily: "'Outfit',sans-serif", background: "#fff", color: "#1a1a1a", minHeight: "100vh" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400;1,500&family=Outfit:wght@300;400;500;600;700&display=swap');
        *{box-sizing:border-box;margin:0;padding:0;}

        @media(max-width:640px){
          .wp-hero-h{ font-size: clamp(52px, 14vw, 80px) !important; line-height:1 !important; }
          .wp-hero-sub{ font-size: 15px !important; }
          .wp-hero-btns{ flex-direction: column !important; gap: 12px !important; }
          .wp-hero-btns a, .wp-hero-btns button{ width: 100% !important; text-align: center !important; }
          .wp-stats{ grid-template-columns: 1fr 1fr !important; }
          .wp-hl{ grid-template-columns: 1fr 1fr !important; }
          .wp-pkgs{ grid-template-columns: 1fr !important; }
          .wp-proc-2{ grid-template-columns: 1fr 1fr !important; gap: 16px !important; }
          .wp-form-grid{ grid-template-columns: 1fr !important; }
          .wp-form-card{ padding: 28px 20px !important; }
          .wp-nav-links{ display: none !important; }
          .wp-rituals{ grid-template-columns: repeat(3, 1fr) !important; }
        }
        @media(max-width:480px){
          .wp-proc-2{ grid-template-columns: 1fr !important; }
          .wp-hl{ grid-template-columns: 1fr !important; }
        }

        .wp-wa{
          position:fixed; bottom:20px; right:20px; z-index:900;
          width:52px;height:52px;border-radius:50%;
          background:#25D366; display:flex;align-items:center;justify-content:center;
          box-shadow:0 4px 20px rgba(37,211,102,.45);
          font-size:24px; text-decoration:none;
          transition:transform .2s;
        }
        .wp-wa:hover{ transform:scale(1.1) rotate(5deg); }
      `}</style>

      <ServiceNavbar />

      <a href="https://wa.me/918595633810?text=Hello!%20I%20want%20to%20book%20a%20Wedding." target="_blank" rel="noopener noreferrer" className="wp-wa" title="Chat on WhatsApp">💬</a>

      {/* ── HERO ── */}
      <section style={{ minHeight: "92vh", display: "flex", alignItems: "flex-end", position: "relative", overflow: "hidden", paddingTop: 80 }}>
        <div style={{ position: "absolute", inset: 0 }}>
          <img src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=1600&auto=format&fit=crop" referrerPolicy="no-referrer" alt="" style={{ width: "100%", height: "100%", objectFit: "cover", filter: "brightness(.22) saturate(1.2)" }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top,#fff 0%,rgba(255,255,255,.05) 42%,transparent 100%)" }} />
          <div style={{ position: "absolute", top: "18%", right: "8%", width: 320, height: 320, borderRadius: "50%", background: "radial-gradient(circle,rgba(212,175,55,.18) 0%,transparent 70%)", pointerEvents: "none" }} />
        </div>
        <motion.div initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.1, ease: [.22, 1, .36, 1] }}
          style={{ position: "relative", zIndex: 2, maxWidth: 1100, margin: "0 auto", width: "100%", padding: "0 24px 80px" }}>
          <div style={{ fontSize: 60, marginBottom: 16 }}>💍</div>
          <div style={{ marginBottom: 16 }}><SectionTag>Where Every Promise Becomes a Legacy</SectionTag></div>
          <h1 className="wp-hero-h" style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 100, fontWeight: 300, color: "white", lineHeight: .9, letterSpacing: "-.03em", marginBottom: 24 }}>
            Wedding<br /><GoldText style={{ fontStyle: "italic" }}>Celebrations</GoldText>
          </h1>
          <p className="wp-hero-sub" style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 18, color: "white", fontStyle: "italic", maxWidth: 540, lineHeight: 1.8, marginBottom: 36 }}>
            From intimate nikkahs to grand multi-day shaadis — we craft wedding experiences that become royal legacies in Delhi NCR.
          </p>
          <div className="wp-hero-btns" style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
            <button onClick={() => scrollTo("wp-form")} style={{ background: "linear-gradient(135deg,#B8860B,#D4AF37,#F0D060)", color: "#fff", border: "none", borderRadius: 100, padding: "16px 40px", fontSize: 12, fontFamily: "'Outfit',sans-serif", fontWeight: 700, letterSpacing: ".12em", textTransform: "uppercase", cursor: "pointer", boxShadow: "0 8px 28px rgba(212,175,55,.4)" }}>
              💍 Book Your Wedding
            </button>
            <button onClick={() => scrollTo("wp-pkgs")} style={{ background: "rgba(255,255,255,.88)", backdropFilter: "blur(8px)", border: "1.5px solid rgba(212,175,55,.35)", color: "#B8860B", borderRadius: 100, padding: "16px 36px", fontSize: 12, fontFamily: "'Outfit',sans-serif", fontWeight: 700, letterSpacing: ".12em", textTransform: "uppercase", cursor: "pointer" }}>
              View Packages
            </button>
          </div>
          <div style={{ display: "flex", gap: 20, marginTop: 36, flexWrap: "wrap" }}>
            {["⭐ 100+ Weddings Done", "🗺️ Delhi NCR Coverage", "📞 24h Response"].map(b => (
              <span key={b} style={{ fontFamily: "'Outfit',sans-serif", fontSize: 11, color: "#666", fontWeight: 600, background: "rgba(255,255,255,.8)", backdropFilter: "blur(8px)", padding: "6px 16px", borderRadius: 100, border: "1px solid rgba(212,175,55,.2)" }}>{b}</span>
            ))}
          </div>
        </motion.div>
      </section>

      {/* STATS */}
      <div style={{ background: "#fff", borderTop: "1px solid rgba(212,175,55,.18)", borderBottom: "1px solid rgba(212,175,55,.18)", padding: "36px 20px" }}>
        <div className="wp-stats" style={{ maxWidth: 900, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 20, textAlign: "center" }}>
          {[["100+", "Weddings Planned"], ["12+", "Ritual Types"], ["50+", "Venue Partners"], ["100%", "Happy Couples"]].map(([n, l]) => (
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
              Every Detail <GoldText style={{ fontStyle: "italic" }}>Perfected</GoldText>
            </h2>
          </div>
          <div className="wp-hl" style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 16 }}>
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

      {/* RITUALS CAROUSEL */}
      <RitualsCarousel />

      {/* PACKAGES */}
      <section id="wp-pkgs" style={{ padding: "80px 20px", background: "#fff" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 52 }}>
            <SectionTag>Pricing</SectionTag>
            <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "clamp(36px,6vw,68px)", fontWeight: 300, color: "#1a1a1a", margin: "16px 0 0" }}>
              Our <GoldText style={{ fontStyle: "italic" }}>Packages</GoldText>
            </h2>
          </div>
          <div className="wp-pkgs" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20 }}>
            {PACKAGES.map((pkg, i) => (
              <motion.div key={pkg.name} initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * .1 }}
                style={{ borderRadius: 22, border: pkg.featured ? "2px solid rgba(212,175,55,.55)" : "1.5px solid rgba(30,30,30,.08)", background: pkg.featured ? "linear-gradient(145deg,#fffdf8,#fff9ec)" : "#fff", padding: "36px 28px", position: "relative", overflow: "hidden", boxShadow: pkg.featured ? "0 20px 60px rgba(212,175,55,.16)" : "0 4px 20px rgba(0,0,0,.05)" }}>
                {pkg.featured && <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 4, background: "linear-gradient(to right,#B8860B,#D4AF37,#F0D060)" }} />}
                {pkg.featured && <span style={{ display: "inline-block", background: "linear-gradient(135deg,#B8860B,#D4AF37)", color: "#fff", padding: "4px 14px", borderRadius: 100, fontSize: 9, letterSpacing: ".25em", textTransform: "uppercase", fontWeight: 700, marginBottom: 12, fontFamily: "'Outfit',sans-serif" }}>Most Popular</span>}
                <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 30, fontWeight: 400, color: "#1a1a1a", marginBottom: 6 }}>{pkg.name}</div>
                <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 28, fontWeight: 600, marginBottom: 4, background: "linear-gradient(135deg,#B8860B,#D4AF37,#F0D060)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                  {pkg.price}<span style={{ fontSize: 13, fontWeight: 300, color: "#bbb", WebkitTextFillColor: "#bbb" }}>{pkg.unit}</span>
                </div>
                <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 12, color: "#aaa", fontStyle: "italic", marginBottom: 24 }}>{pkg.tagline}</div>
                <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 24 }}>
                  {pkg.features.map(feat => <div key={feat} style={{ display: "flex", alignItems: "flex-start", gap: 8 }}><div style={{ width: 6, height: 6, borderRadius: "50%", background: "#D4AF37", marginTop: 6, flexShrink: 0 }} /><span style={{ fontSize: 12, color: "#555", fontFamily: "'Outfit',sans-serif" }}>{feat}</span></div>)}
                </div>
                <button onClick={() => scrollTo("wp-form")} style={{ width: "100%", padding: "13px", fontSize: 10, fontFamily: "'Outfit',sans-serif", fontWeight: 700, letterSpacing: ".14em", textTransform: "uppercase", borderRadius: 100, cursor: "pointer", border: pkg.featured ? "none" : "1.5px solid rgba(212,175,55,.4)", background: pkg.featured ? "linear-gradient(135deg,#B8860B,#D4AF37)" : "transparent", color: pkg.featured ? "#fff" : "#B8860B", boxShadow: pkg.featured ? "0 6px 20px rgba(212,175,55,.35)" : "none" }}>
                  Choose {pkg.name}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WEDDING STYLES GRID */}
      <section style={{ background: "#fffdf8", borderTop: "1px solid rgba(212,175,55,.1)", padding: "72px 20px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <SectionTag>Wedding Styles</SectionTag>
            <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "clamp(32px,5vw,60px)", fontWeight: 300, color: "#1a1a1a", margin: "16px 0 8px" }}>
              Your <GoldText style={{ fontStyle: "italic" }}>Aesthetic</GoldText>
            </h2>
            <p style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 15, color: "#aaa", fontStyle: "italic" }}>We specialise in every style of Indian wedding — traditional to contemporary</p>
          </div>
          <div className="wp-rituals" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(110px, 1fr))", gap: 14 }}>
            {WEDDING_STYLES.map((m, i) => (
              <motion.div key={m.label} initial={{ opacity: 0, scale: .9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * .05 }}
                style={{ background: "#fff", padding: "20px 12px", textAlign: "center", borderRadius: 16, border: "1.5px solid rgba(212,175,55,.1)", boxShadow: "0 2px 14px rgba(0,0,0,.04)" }}
                whileHover={{ y: -5, boxShadow: "0 12px 32px rgba(212,175,55,.16)", borderColor: "rgba(212,175,55,.4)" }}>
                <div style={{ fontSize: 32, marginBottom: 8 }}>{m.emoji}</div>
                <div style={{ fontSize: 10, color: "#666", letterSpacing: ".05em", fontFamily: "'Outfit',sans-serif", fontWeight: 600 }}>{m.label}</div>
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
      <section id="wp-form" style={{ padding: "80px 20px 100px", background: "#fff" }}>
        <div style={{ maxWidth: 820, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 44 }}>
            <SectionTag>Let's Plan Together</SectionTag>
            <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "clamp(36px,6vw,68px)", fontWeight: 300, color: "#1a1a1a", margin: "16px 0 8px" }}>
              Book Your <GoldText style={{ fontStyle: "italic" }}>Dream Wedding</GoldText>
            </h2>
            <p style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 14, color: "#aaa", fontStyle: "italic" }}>Fill in the details — your inquiry will be sent via WhatsApp to our team.</p>
          </div>
          <div className="wp-form-card" style={{ background: "#fff", border: "1.5px solid rgba(212,175,55,.2)", borderRadius: 24, padding: "44px 40px", boxShadow: "0 20px 60px rgba(212,175,55,.08)" }}>
            <BookingForm />
          </div>
        </div>
      </section>

      <ServiceFooter />
    </div>
  );
}