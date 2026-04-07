import { motion, AnimatePresence } from "motion/react";
import { Calendar, MapPin, Sparkles, Phone, Mail, Send, Star, Music, Flower2, Building2, Menu, X , Instagram, Facebook, Twitter } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import matakichowki from "./assets/MataKiChowki.jpg";
import wedding from "./assets/wedding.jpg";
import birthday from "./assets/birthday.jpg";
import events from "./assets/events.jpg";
import auris from "./assets/auris.jpeg";

// ─── Birthday Assets ───────────────────────────────────────────────────────────
import b1  from "./assets/b1.jpeg";
import b2  from "./assets/b2.mp4";
import b3  from "./assets/b3.jpeg";
import b4  from "./assets/b4.jpeg";
import b5  from "./assets/b5.jpeg";
import b6  from "./assets/b6.jpeg";
import b07 from "./assets/b07.mp4";
import b7  from "./assets/b7.jpeg";
import b8  from "./assets/b8.jpeg";
import b09 from "./assets/b09.jpeg";
import b9  from "./assets/b9.jpeg";
import b10 from "./assets/b10.jpeg";
import b11 from "./assets/b11.jpeg";
import b15 from "./assets/b15.mp4";
import b20 from "./assets/b20.jpeg";
import b23 from "./assets/b23.jpeg";
import b24 from "./assets/b24.jpeg";
import b39 from "./assets/b39.jpeg";
import b53 from "./assets/b53.jpeg";
import b56 from "./assets/b56.jpeg";
import b67 from "./assets/b67.jpeg";
import b78 from "./assets/b78.mp4";

// ─── Corporate Assets ──────────────────────────────────────────────────────────
import c1  from "./assets/c1.jpeg";
import c2  from "./assets/c2.jpeg";
import c3  from "./assets/c3.jpeg";
import c4  from "./assets/c4.jpeg";
import c5  from "./assets/c5.jpeg";
import c6  from "./assets/c6.jpeg";
import c7  from "./assets/c7.jpeg";
import c8  from "./assets/c8.jpeg";
import c9  from "./assets/c9.jpeg";
import c10 from "./assets/c10.jpeg";
import c11 from "./assets/c11.jpeg";
import c12 from "./assets/c12.jpeg";
import c13 from "./assets/c13.jpeg";
import c14 from "./assets/c14.jpeg";
import c15 from "./assets/c15.jpeg";
import c16 from "./assets/c16.jpeg";
import c17 from "./assets/c17.jpeg";
import c18 from "./assets/c18.jpeg";
import c19 from "./assets/c19.jpeg";
import c20 from "./assets/c20.jpeg";
import c21 from "./assets/c21.jpeg";
import c22 from "./assets/c22.jpeg";
import c23 from "./assets/c23.jpeg";
import c24 from "./assets/c24.jpeg";
import c25 from "./assets/c25.jpeg";
import c26 from "./assets/c26.jpeg";
import c27 from "./assets/c27.jpeg";
import c28 from "./assets/c28.jpeg";
import c29 from "./assets/c29.jpeg";
import c30 from "./assets/c30.jpeg";
import c31 from "./assets/c31.jpeg";
import c32 from "./assets/c32.jpeg";
import c33 from "./assets/c33.jpeg";
import c34 from "./assets/c34.jpeg";
import c35 from "./assets/c35.jpeg";
import c36 from "./assets/c36.jpeg";
import c37 from "./assets/c37.jpeg";
import c38 from "./assets/c38.jpeg";
import c39 from "./assets/c39.jpeg";
import c40 from "./assets/c40.jpeg";
import c41 from "./assets/c41.jpeg";
import c42 from "./assets/c42.jpeg";
import c43 from "./assets/c43.jpeg";
import c44 from "./assets/c44.jpeg";
import c45 from "./assets/c45.jpeg";
import c46 from "./assets/c46.jpeg";

// ─── Mata Ki Chowki Assets ─────────────────────────────────────────────────────
import m1  from "./assets/m1.mp4";
import m2  from "./assets/m2.mp4";
import m3  from "./assets/m3.jpeg";
import m4  from "./assets/m4.jpeg";
import m5  from "./assets/m5.jpeg";
import m6  from "./assets/m6.jpeg";
import m7  from "./assets/m7.jpeg";
import m8  from "./assets/m8.jpeg";
import m9  from "./assets/m9.jpeg";
import m10 from "./assets/m10.jpeg";
import m11 from "./assets/m11.jpeg";
import m12 from "./assets/m12.jpeg";
import m13 from "./assets/m13.jpeg";
import m14 from "./assets/m14.jpeg";
import m15 from "./assets/m15.jpeg";
import m16 from "./assets/m16.jpeg";
import m17 from "./assets/m17.jpeg";
import m18 from "./assets/m18.jpeg";
import m19 from "./assets/m19.jpeg";
import m20 from "./assets/m20.jpeg";
import m21 from "./assets/m21.jpeg";
import m22 from "./assets/m22.jpeg";
import m23 from "./assets/m23.jpeg";
import m24 from "./assets/m24.jpeg";
import m25 from "./assets/m25.jpeg";
import m26 from "./assets/m26.jpeg";

// ─── Wedding Assets ────────────────────────────────────────────────────────────
import w1  from "./assets/w1.mp4";
import w2  from "./assets/w2.mp4";
import w3  from "./assets/w3.mp4";
import w4  from "./assets/w4.mp4";
import w5  from "./assets/w5.mp4";
import w6  from "./assets/w6.mp4";
import w10 from "./assets/w10.mp4";
import w14 from "./assets/w14.mp4";
import w20 from "./assets/w20.mp4";
import w22 from "./assets/w22.mp4";
import w26 from "./assets/w26.mp4";
import w27 from "./assets/w27.mp4";
import w28 from "./assets/w28.mp4";
import w29 from "./assets/w29.mp4";
import w30 from "./assets/w30.mp4";
import w31 from "./assets/w31.mp4";
import w32 from "./assets/w32.mp4";
import w33 from "./assets/w33.mp4";
import w34 from "./assets/w34.mp4";
import w35 from "./assets/w35.mp4";
import w36 from "./assets/w36.mp4";
import w39 from "./assets/w39.mp4";
import w45 from "./assets/w45.jpeg";
import w46 from "./assets/w46.mp4";
import w55 from "./assets/w55.mp4";
import w87 from "./assets/w87.mp4";
import w88 from "./assets/w88.mp4";
import w89 from "./assets/w89.jpeg";
import w90 from "./assets/w90.mp4";
import w98 from "./assets/w98.mp4";
import w200 from "./assets/w200.mp4";
import coperatee from "./assets/coperate.jpg";

// ─────────────────────────────────────────────────────────────────────────────

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "The Beginning", href: "#home" },
    { name: "Our Craft", href: "#services" },
    { name: "The Gallery", href: "#gallery" },
    { name: "The Venues", href: "#halls" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-700 ${scrolled ? 'py-4 bg-primary/95 backdrop-blur-2xl shadow-2xl' : 'py-8 bg-transparent'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-4 group cursor-pointer">
          <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center shadow-lg group-hover:rotate-12 transition-transform">
            <Flower2 className="text-primary w-7 h-7" />
          </div>
          <span className="text-2xl md:text-3xl font-display font-bold tracking-[0.3em] text-white uppercase">
            Indian <span className="gold-text italic">Riwaaz</span>
          </span>
        </div>

        <div className="hidden lg:flex items-center gap-12 text-[10px] font-bold uppercase tracking-[0.4em] text-white/70">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="hover:text-secondary transition-all relative group">
              {link.name}
              <span className="absolute -bottom-2 left-0 w-0 h-px bg-secondary transition-all group-hover:w-full"></span>
            </a>
          ))}
          <a
            href="https://wa.me/919540598999?text=Hello%20Indian%20Riwaaz!%20I%20would%20like%20to%20inquire%20about%20booking%20an%20event."
            target="_blank"
            rel="noopener noreferrer"
            className="gold-gradient text-primary px-10 py-4 rounded-full text-xs font-bold uppercase tracking-[0.3em] hover:scale-105 transition-all shadow-xl active:scale-95"
          >
            Book Now
          </a>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-white p-2 hover:bg-white/5 rounded-full transition-colors"
        >
          {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden absolute top-full left-0 w-full bg-primary/98 backdrop-blur-3xl border-t border-white/5 py-12 px-6 shadow-2xl"
          >
            <div className="flex flex-col gap-10 items-center">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-xs font-bold uppercase tracking-[0.5em] text-white/80 hover:text-secondary transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="https://wa.me/919540598999?text=Hello%20Indian%20Riwaaz!%20I%20would%20like%20to%20inquire%20about%20booking%20an%20event."
                className="w-full gold-gradient text-primary py-6 rounded-full text-center text-xs font-bold uppercase tracking-[0.4em] shadow-xl"
              >
                Book Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => (
  <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
    <div className="absolute inset-0 z-0">
      <div className="absolute inset-0 bg-primary/50 z-10"></div>
      <img
        src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=2074&auto=format&fit=crop"
        alt="Royal Event Decor"
        className="w-full h-full object-cover parallax-bg scale-105"
        referrerPolicy="no-referrer"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-primary/90 via-transparent to-warm-bg z-20"></div>
    </div>

    <div className="container mx-auto px-6 relative z-30 text-center pt-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
        className="relative py-20 px-8 md:px-20"
      >
        <div className="absolute inset-0 border border-secondary/30 pointer-events-none m-4 md:m-8"></div>
        <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-secondary m-4 md:m-8"></div>
        <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-secondary m-4 md:m-8"></div>
        <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-secondary m-4 md:m-8"></div>
        <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-secondary m-4 md:m-8"></div>

        <span className="inline-block px-8 py-3 rounded-full bg-secondary/20 text-secondary text-[10px] md:text-xs font-bold tracking-[0.5em] uppercase mb-10 backdrop-blur-md border border-secondary/40">
          The Grandeur of Tradition
        </span>
        <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-[10rem] font-display font-medium leading-[1] mb-10 text-white">
          Indian <span className="italic font-serif gold-text drop-shadow-2xl">Riwaaz</span>
        </h1>
        <p className="max-w-3xl mx-auto text-lg md:text-2xl text-white/90 mb-16 font-light leading-relaxed px-4 font-serif italic">
          "Where every celebration is a royal legacy, and every tradition is a majestic masterpiece."
        </p>
        <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
          <a href="#services" className="w-full sm:w-auto gold-gradient text-primary px-16 py-6 rounded-full text-xl font-display font-bold hover:scale-105 transition-all shadow-[0_10px_40px_rgba(212,175,55,0.3)] flex items-center justify-center gap-4 group active:scale-95">
            Explore Grandeur <Sparkles className="w-6 h-6 group-hover:rotate-45 transition-transform" />
          </a>
          <a href="#gallery" className="w-full sm:w-auto border-2 border-secondary/50 text-secondary px-16 py-6 rounded-full text-xl font-display font-bold hover:bg-secondary hover:text-primary transition-all backdrop-blur-md flex justify-center items-center active:scale-95">
            The Royal Gallery
          </a>
        </div>
      </motion.div>
    </div>

    <motion.div
      animate={{ y: [0, 15, 0] }}
      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      className="absolute bottom-12 left-1/2 -translate-x-1/2 text-secondary/60 z-30 hidden md:block"
    >
      <div className="w-px h-20 bg-gradient-to-b from-secondary/60 to-transparent mx-auto mb-4"></div>
      <span className="text-[10px] uppercase tracking-[0.5em] font-bold">Descend into Majesty</span>
    </motion.div>
  </section>
);

const ServiceCard = ({ title, description, icon: Icon, image }: any) => (
  <motion.div
    whileHover={{ y: -15 }}
    className="group relative overflow-hidden rounded-[2.5rem] aspect-[3/4] elegant-shadow"
  >
    <img
      src={image}
      alt={title}
      className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
      referrerPolicy="no-referrer"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/20 to-transparent"></div>
    <div className="absolute bottom-0 p-10 text-white">
      <div className="bg-secondary/20 backdrop-blur-md p-4 rounded-2xl w-fit mb-6 border border-secondary/30">
        <Icon className="w-6 h-6 text-secondary" />
      </div>
      <h3 className="text-3xl font-display mb-3">{title}</h3>
      <p className="text-sm text-white/70 font-light leading-relaxed opacity-0 group-hover:opacity-100 transition-all duration-700 transform translate-y-4 group-hover:translate-y-0">
        {description}
      </p>
    </div>
  </motion.div>
);

const Services = () => {
  const services = [
    
    {
      title: "Wedding",
      description: "Opulent and culturally rich wedding decor, blending traditional Indian aesthetics with modern elegance.",
      icon: Star,
      image: wedding,
    },
    {
      title: "Mata Chowki",
      description: "Divine and spiritual arrangements for Mata Chowki with traditional decor, lighting, and seating.",
      icon: Music,
      image: matakichowki,
    },
    {
      title: "Birthday Magic",
      description: "Creative and colorful decorations for birthdays, from themed parties to elegant celebrations.",
      icon: Sparkles,
      image: birthday,
    },
    {
      title: "Event Decorations",
      description: "Bespoke floral and thematic decorations for weddings, parties, and corporate events.",
      icon: Flower2,
      image: events,
    },
    {
      title: "Corporate Events",
      description: "Sophisticated and professional decor for corporate events, conferences, and product launches.",
      icon: Building2,
      image: coperatee,
    },
  ];

  return (
    <section id="services" className="py-20 md:py-40 bg-white relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-32">
          <span className="text-secondary font-serif italic text-2xl mb-4 block">Our Craftsmanship</span>
          <h2 className="text-5xl md:text-8xl font-display tracking-tighter mb-8">Majestic <span className="italic font-serif text-primary">Offerings</span></h2>
          <div className="ornate-divider max-w-xl mx-auto">
            <Flower2 className="text-secondary w-6 h-6" />
          </div>
        </div>
      
<div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 md:gap-8">
  {services.map((s, i) => <ServiceCard key={i} {...s} />)}
</div>
      </div>
    </section>
  );
};

// ─── Gallery Data ──────────────────────────────────────────────────────────────
const galleryCategories = [
  {
    id: "Birthday",
    label: "Birthday",
    icon: Sparkles,
    subfolders: null,
    items: [
      { type: "image", url: b1,  title: "Celebration Decor",    tag: "BIRTHDAY" },
      { type: "video", url: b2,  title: "Birthday Highlights",  tag: "BIRTHDAY" }, // Fixed to video (.mp4)
      { type: "image", url: b3,  title: "Party Setup",          tag: "BIRTHDAY" },
      { type: "image", url: b4,  title: "Floral Arrangements",  tag: "BIRTHDAY" },
      { type: "image", url: b5,  title: "Balloon Extravaganza", tag: "BIRTHDAY" },
      { type: "image", url: b6,  title: "Theme Decor",          tag: "BIRTHDAY" },
      { type: "video", url: b07, title: "Grand Celebration",    tag: "BIRTHDAY" },
      { type: "image", url: b7,  title: "Stage Setup",          tag: "BIRTHDAY" },
      { type: "image", url: b8,  title: "Cake Table Decor",     tag: "BIRTHDAY" },
      { type: "image", url: b09, title: "Party Moments",        tag: "BIRTHDAY" },
      { type: "image", url: b9,  title: "Backdrop Design",      tag: "BIRTHDAY" },
      { type: "image", url: b10, title: "Birthday Reel",        tag: "BIRTHDAY" },
      { type: "image", url: b11, title: "Entrance Decor",       tag: "BIRTHDAY" },
      { type: "video", url: b15, title: "Special Moments",      tag: "BIRTHDAY" },
      { type: "image", url: b20, title: "Celebration Clips",    tag: "BIRTHDAY" }, // Fixed typo "iamge"
      { type: "image", url: b23, title: "Table Settings",       tag: "BIRTHDAY" },
      { type: "image", url: b24, title: "Fairy Lights Setup",   tag: "BIRTHDAY" },
      { type: "image", url: b39, title: "Party Highlights",     tag: "BIRTHDAY" },
      { type: "image", url: b53, title: "Fun Moments",          tag: "BIRTHDAY" },
      { type: "image", url: b56, title: "Luxury Birthday",      tag: "BIRTHDAY" },
      { type: "image", url: b67, title: "Royal Celebration",    tag: "BIRTHDAY" },
      { type: "video", url: b78, title: "Birthday Gala",        tag: "BIRTHDAY" },
    ],
  },
  {
    id: "Wedding",
    label: "Wedding",
    icon: Star,
    subfolders: ["All", "Bridal Entry", "Haldi & Mehndi", "Wedding Clips"],
    items: {
      All: [
        { type: "video", url: w1,   title: "The Union",           tag: "WEDDING" },
        { type: "video", url: w2,   title: "Grand Procession",    tag: "WEDDING" },
        { type: "video", url: w3,   title: "Varmala Ceremony",    tag: "WEDDING" },
        { type: "video", url: w4,   title: "Pheras Highlights",   tag: "WEDDING" },
        { type: "video", url: w5,   title: "Bridal Portrait",     tag: "WEDDING" },
        { type: "video", url: w6,   title: "Couple Moments",      tag: "WEDDING" },
        { type: "video", url: w10,  title: "Sangeet Night",       tag: "WEDDING" },
        { type: "video", url: w14,  title: "Baraat Entry",        tag: "WEDDING" },
        { type: "video", url: w20,  title: "Wedding Reel",        tag: "WEDDING" },
        { type: "video", url: w22,  title: "Mandap Decor",        tag: "WEDDING" },
        { type: "video", url: w26,  title: "Floral Stage",        tag: "WEDDING" },
        { type: "video", url: w27,  title: "Royal Decor",         tag: "WEDDING" },
        { type: "video", url: w28,  title: "Stage Setup",         tag: "WEDDING" },
        { type: "video", url: w29,  title: "Entrance Arch",       tag: "WEDDING" },
        { type: "video", url: w30,  title: "Table Settings",      tag: "WEDDING" },
        { type: "video", url: w31,  title: "Floral Walkway",      tag: "WEDDING" },
        { type: "video", url: w32,  title: "Lighting Setup",      tag: "WEDDING" },
        { type: "video", url: w33,  title: "Bridal Suite",        tag: "WEDDING" },
        { type: "video", url: w34,  title: "Venue Decor",         tag: "WEDDING" },
        { type: "video", url: w35,  title: "Grand Hall",          tag: "WEDDING" },
        { type: "video", url: w36,  title: "Wedding Ceremony",    tag: "WEDDING" },
        { type: "video", url: w39,  title: "Reception Night",     tag: "WEDDING" },
        { type: "image", url: w45,  title: "Bhangra",             tag: "WEDDING" },
        { type: "video", url: w46,  title: "Family Moments",      tag: "WEDDING" },
        { type: "video", url: w55,  title: "Vidai Ceremony",      tag: "WEDDING" },
        { type: "video", url: w87,  title: "Wedding Highlights",  tag: "WEDDING" },
        { type: "video", url: w88,  title: "Phera Ceremony",      tag: "WEDDING" },
        { type: "image", url: w89,  title: "Jaimala Moment",      tag: "WEDDING" },
        { type: "video", url: w90,  title: "Sangeet Reel",        tag: "WEDDING" },
        { type: "video", url: w98,  title: "Eternal Walk",        tag: "WEDDING" },
        { type: "video", url: w200, title: "Wedding Cinematic",   tag: "WEDDING" },
      ],
      "Bridal Entry": [
        { type: "video", url: w1,   title: "The Grand Entry",     tag: "BRIDAL ENTRY" },
        { type: "video", url: w14,  title: "Baraat Entry",        tag: "BRIDAL ENTRY" },
        { type: "video", url: w20,  title: "Wedding Reel",        tag: "BRIDAL ENTRY" },
        { type: "image", url: w45,  title: "Couple Dance",        tag: "BRIDAL ENTRY" }, // Fixed to image (.jpeg)
        { type: "video", url: w29,  title: "Entrance Arch",       tag: "BRIDAL ENTRY" }, // Fixed to video (.mp4)
        { type: "video", url: w31,  title: "Floral Walkway",      tag: "BRIDAL ENTRY" }, // Fixed to video (.mp4)
        { type: "video", url: w98,  title: "Eternal Walk",        tag: "BRIDAL ENTRY" },
      ],
      "Haldi & Mehndi": [
        { type: "video", url: w3,   title: "Haldi Ceremony",      tag: "HALDI" },
        { type: "video", url: w4,   title: "Mehndi Night",        tag: "MEHNDI" },
        { type: "video", url: w10,  title: "Sangeet Night",       tag: "SANGEET" },
        { type: "video", url: w27,  title: "Haldi Decor",         tag: "HALDI" }, // Fixed to video (.mp4)
        { type: "video", url: w30,  title: "Mehndi Setup",        tag: "MEHNDI" }, // Fixed to video (.mp4)
        { type: "video", url: w33,  title: "Ritual Space",        tag: "HALDI" }, // Fixed to video (.mp4)
        { type: "video", url: w90,  title: "Sangeet Reel",        tag: "SANGEET" },
      ],
      "Wedding Clips": [
        { type: "video", url: w2,   title: "Grand Procession",    tag: "WEDDING" },
        { type: "video", url: w5,   title: "Bridal Portrait",     tag: "WEDDING" },
        { type: "video", url: w6,   title: "Couple Moments",      tag: "WEDDING" },
        { type: "video", url: w22,  title: "Mandap Decor",        tag: "WEDDING" },
        { type: "video", url: w26,  title: "Floral Stage",        tag: "WEDDING" },
        { type: "video", url: w36,  title: "Wedding Ceremony",    tag: "WEDDING" },
        { type: "video", url: w39,  title: "Reception Night",     tag: "WEDDING" },
        { type: "video", url: w46,  title: "Family Moments",      tag: "WEDDING" },
        { type: "video", url: w55,  title: "Vidai Ceremony",      tag: "WEDDING" },
        { type: "video", url: w87,  title: "Wedding Highlights",  tag: "WEDDING" },
        { type: "video", url: w88,  title: "Phera Ceremony",      tag: "WEDDING" },
        { type: "image", url: w89,  title: "Jaimala Moment",      tag: "WEDDING" },
        { type: "video", url: w200, title: "Wedding Cinematic",   tag: "WEDDING" },
      ],
    },
  },
  {
    id: "MataKiChowki",
    label: "Mata Ki Chowki",
    icon: Music,
    subfolders: null,
    items: [
      { type: "video", url: m1,  title: "Divine Ceremony",      tag: "MATA KI CHOWKI" },
      { type: "video", url: m2,  title: "Sacred Night",          tag: "MATA KI CHOWKI" },
      { type: "image", url: m3,  title: "Spiritual Gathering",  tag: "MATA KI CHOWKI" }, // Fixed to image (.jpeg)
      { type: "image", url: m4,  title: "Aarti Moments",         tag: "MATA KI CHOWKI" }, // Fixed to image (.jpeg)
      { type: "image", url: m5,  title: "Bhajan Night",          tag: "MATA KI CHOWKI" }, // Fixed to image (.jpeg)
      { type: "image", url: m6,  title: "Mata Darbar",           tag: "MATA KI CHOWKI" }, // Fixed to image (.jpeg)
      { type: "image", url: m7,  title: "Jagran Highlights",    tag: "MATA KI CHOWKI" }, // Fixed to image (.jpeg)
      { type: "image", url: m8,  title: "Divine Grace",          tag: "MATA KI CHOWKI" }, // Fixed to image (.jpeg)
      { type: "image", url: m9,  title: "Decor Setup",           tag: "MATA KI CHOWKI" },
      { type: "image", url: m10, title: "Floral Offerings",      tag: "MATA KI CHOWKI" },
      { type: "image", url: m11, title: "Devi Sthan",            tag: "MATA KI CHOWKI" },
      { type: "image", url: m12, title: "Puja Arrangements",    tag: "MATA KI CHOWKI" },
      { type: "image", url: m13, title: "Sacred Lights",         tag: "MATA KI CHOWKI" },
      { type: "image", url: m14, title: "Mandap Decor",          tag: "MATA KI CHOWKI" },
      { type: "image", url: m15, title: "Ritual Space",          tag: "MATA KI CHOWKI" },
      { type: "image", url: m16, title: "Kalash Setup",          tag: "MATA KI CHOWKI" },
      { type: "image", url: m17, title: "Flower Rangoli",        tag: "MATA KI CHOWKI" },
      { type: "image", url: m18, title: "Diya Decor",            tag: "MATA KI CHOWKI" },
      { type: "image", url: m19, title: "Spiritual Ambiance",    tag: "MATA KI CHOWKI" },
      { type: "video", url: m20, title: "Evening Ceremony",      tag: "MATA KI CHOWKI" }, // Note: m20 was imported as .jpeg in your list, but m20 in list was video. Based on your imports: m20 is jpeg.
      { type: "image", url: m20, title: "Evening Ceremony",      tag: "MATA KI CHOWKI" }, // Corrected to image per imports
      { type: "image", url: m21, title: "Chowki Highlights",     tag: "MATA KI CHOWKI" }, // Corrected to image per imports
      { type: "image", url: m22, title: "Devotional Moments",    tag: "MATA KI CHOWKI" }, // Corrected to image per imports
      { type: "image", url: m23, title: "Prasad Distribution",   tag: "MATA KI CHOWKI" }, // Corrected to image per imports
      { type: "image", url: m24, title: "Night Aarti",           tag: "MATA KI CHOWKI" }, // Corrected to image per imports
      { type: "image", url: m25, title: "Sacred Gathering",      tag: "MATA KI CHOWKI" }, // Corrected to image per imports
      { type: "image", url: m26, title: "Full Ceremony",         tag: "MATA KI CHOWKI" }, // Corrected to image per imports
    ],
  },
  {
    id: "Corporate",
    label: "Corporate Events",
    icon: Building2,
    subfolders: ["All", "Product Launch", "Sales Meeting", "Dealer Meet"],
    items: {
      All: [
        { type: "image", url: c1,  title: "Corporate Setup",       tag: "CORPORATE" },
        { type: "image", url: c2,  title: "Event Hall",            tag: "CORPORATE" },
        { type: "image", url: c3,  title: "Stage Decor",           tag: "CORPORATE" },
        { type: "image", url: c4,  title: "Podium Setup",          tag: "CORPORATE" },
        { type: "image", url: c5,  title: "Branding Display",      tag: "CORPORATE" },
        { type: "image", url: c6,  title: "Table Arrangement",     tag: "CORPORATE" },
        { type: "image", url: c7,  title: "Venue Overview",        tag: "CORPORATE" },
        { type: "image", url: c8,  title: "Award Setup",           tag: "CORPORATE" },
        { type: "image", url: c9,  title: "Lighting Design",       tag: "CORPORATE" },
        { type: "image", url: c10, title: "Conference Hall",       tag: "CORPORATE" },
        { type: "image", url: c11, title: "Panel Setup",           tag: "CORPORATE" },
        { type: "image", url: c12, title: "Gala Night",            tag: "CORPORATE" },
        { type: "image", url: c13, title: "Reception Area",        tag: "CORPORATE" },
        { type: "image", url: c14, title: "Product Display",       tag: "CORPORATE" },
        { type: "image", url: c15, title: "Banquet Layout",        tag: "CORPORATE" },
        { type: "image", url: c16, title: "Networking Space",      tag: "CORPORATE" },
        { type: "image", url: c17, title: "Board Meeting",         tag: "CORPORATE" },
        { type: "image", url: c18, title: "Dinner Setup",          tag: "CORPORATE" },
        { type: "image", url: c19, title: "Launch Event",          tag: "CORPORATE" },
        { type: "image", url: c20, title: "Dealer Convention",     tag: "CORPORATE" },
        { type: "image", url: c21, title: "Sales Summit",          tag: "CORPORATE" },
        { type: "image", url: c22, title: "Team Gathering",        tag: "CORPORATE" },
        { type: "image", url: c23, title: "Executive Meet",        tag: "CORPORATE" },
        { type: "image", url: c24, title: "Annual Gala",           tag: "CORPORATE" },
        { type: "image", url: c25, title: "Keynote Stage",         tag: "CORPORATE" },
        { type: "image", url: c26, title: "Awards Night",          tag: "CORPORATE" },
        { type: "image", url: c27, title: "Product Unveiling",     tag: "CORPORATE" },
        { type: "image", url: c28, title: "Corporate Dinner",      tag: "CORPORATE" },
        { type: "image", url: c29, title: "Brand Activation",      tag: "CORPORATE" },
        { type: "image", url: c30, title: "Press Conference",      tag: "CORPORATE" },
        { type: "image", url: c31, title: "Seminar Setup",         tag: "CORPORATE" },
        { type: "image", url: c32, title: "Workshop Hall",         tag: "CORPORATE" },
        { type: "image", url: c33, title: "CEO Meet",              tag: "CORPORATE" },
        { type: "image", url: c34, title: "Partner Summit",        tag: "CORPORATE" },
        { type: "image", url: c35, title: "Investor Meet",         tag: "CORPORATE" },
        { type: "image", url: c36, title: "Year End Party",        tag: "CORPORATE" },
        { type: "image", url: c37, title: "Team Building",         tag: "CORPORATE" },
        { type: "image", url: c38, title: "Brand Launch",          tag: "CORPORATE" },
        { type: "image", url: c39, title: "Product Demo",          tag: "CORPORATE" },
        { type: "image", url: c40, title: "Corporate Meet",        tag: "CORPORATE" },
        { type: "image", url: c41, title: "Conference",            tag: "CORPORATE" },
        { type: "image", url: c42, title: "Exhibition Setup",      tag: "CORPORATE" },
        { type: "image", url: c43, title: "Award Ceremony",        tag: "CORPORATE" },
        { type: "image", url: c44, title: "Gala Evening",          tag: "CORPORATE" },
        { type: "image", url: c45, title: "Dealer Event",          tag: "CORPORATE" },
        { type: "image", url: c46, title: "Corporate Night",       tag: "CORPORATE" },
      ],
      "Product Launch": [
        { type: "image", url: c1,  title: "Grand Launch",          tag: "PRODUCT LAUNCH" },
        { type: "image", url: c3,  title: "Stage Decor",           tag: "PRODUCT LAUNCH" },
        { type: "image", url: c5,  title: "Branding Display",      tag: "PRODUCT LAUNCH" },
        { type: "image", url: c14, title: "Product Display",       tag: "PRODUCT LAUNCH" },
        { type: "image", url: c19, title: "Launch Event",          tag: "PRODUCT LAUNCH" },
        { type: "image", url: c27, title: "Product Unveiling",     tag: "PRODUCT LAUNCH" },
        { type: "image", url: c29, title: "Brand Activation",      tag: "PRODUCT LAUNCH" },
        { type: "image", url: c38, title: "Brand Launch",          tag: "PRODUCT LAUNCH" },
        { type: "image", url: c39, title: "Product Demo",          tag: "PRODUCT LAUNCH" },
        { type: "image", url: c42, title: "Exhibition Setup",      tag: "PRODUCT LAUNCH" },
      ],
      "Sales Meeting": [
        { type: "image", url: c2,  title: "Event Hall",            tag: "SALES MEETING" },
        { type: "image", url: c10, title: "Conference Hall",       tag: "SALES MEETING" },
        { type: "image", url: c17, title: "Board Meeting",         tag: "SALES MEETING" },
        { type: "image", url: c21, title: "Sales Summit",          tag: "SALES MEETING" },
        { type: "image", url: c23, title: "Executive Meet",        tag: "SALES MEETING" },
        { type: "image", url: c31, title: "Seminar Setup",         tag: "SALES MEETING" },
        { type: "image", url: c33, title: "CEO Meet",              tag: "SALES MEETING" },
        { type: "image", url: c35, title: "Investor Meet",         tag: "SALES MEETING" },
        { type: "image", url: c40, title: "Corporate Meet",        tag: "SALES MEETING" },
        { type: "image", url: c41, title: "Conference",            tag: "SALES MEETING" },
      ],
      "Dealer Meet": [
        { type: "image", url: c6,  title: "Table Arrangement",     tag: "DEALER MEET" },
        { type: "image", url: c7,  title: "Venue Overview",        tag: "DEALER MEET" },
        { type: "image", url: c11, title: "Panel Setup",           tag: "DEALER MEET" },
        { type: "image", url: c16, title: "Networking Space",      tag: "DEALER MEET" },
        { type: "image", url: c20, title: "Dealer Convention",     tag: "DEALER MEET" },
        { type: "image", url: c22, title: "Team Gathering",        tag: "DEALER MEET" },
        { type: "image", url: c34, title: "Partner Summit",        tag: "DEALER MEET" },
        { type: "image", url: c37, title: "Team Building",         tag: "DEALER MEET" },
        { type: "image", url: c45, title: "Dealer Event",          tag: "DEALER MEET" },
      ],
    },
  },
];
// ─── Gallery Component ─────────────────────────────────────────────────────────
const Gallery = () => {
  const ITEMS_PER_PAGE = 12;
  const [activeCategory, setActiveCategory] = useState("Birthday");
  const [activeSubfolder, setActiveSubfolder] = useState<string | null>(null);
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE);
  const [lightboxItem, setLightboxItem] = useState<any>(null);
  const [lightboxIndex, setLightboxIndex] = useState<number>(0);
  const videoRefs = useRef<Map<string, HTMLVideoElement>>(new Map());
  const observerRef = useRef<IntersectionObserver | null>(null);

  const categories = galleryCategories;

  const activeCat = categories.find((c) => c.id === activeCategory)!;

  const getAllItems = (): any[] => {
    if (!activeCat.subfolders) return activeCat.items as any[];
    const key = activeSubfolder || activeCat.subfolders[0];
    return (activeCat.items as any)[key] || [];
  };

  const allItems = getAllItems();
  const displayItems = allItems.slice(0, visibleCount);
  const hasMore = visibleCount < allItems.length;

  const handleCategoryChange = (id: string) => {
    setActiveCategory(id);
    setActiveSubfolder(null);
    setVisibleCount(ITEMS_PER_PAGE);
    videoRefs.current.forEach((v) => { v.pause(); v.currentTime = 0; });
    videoRefs.current.clear();
  };

  const handleSubfolderChange = (sub: string) => {
    setActiveSubfolder(sub);
    setVisibleCount(ITEMS_PER_PAGE);
    videoRefs.current.forEach((v) => { v.pause(); v.currentTime = 0; });
    videoRefs.current.clear();
  };

  useEffect(() => {
    if (observerRef.current) observerRef.current.disconnect();
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const video = entry.target as HTMLVideoElement;
          if (entry.isIntersecting) { video.play().catch(() => {}); }
          else { video.pause(); }
        });
      },
      { threshold: 0.3 }
    );
    videoRefs.current.forEach((video) => { observerRef.current?.observe(video); });
    return () => observerRef.current?.disconnect();
  }, [displayItems, activeCategory, activeSubfolder]);

  const registerVideo = (key: string, el: HTMLVideoElement | null) => {
    if (el) {
      videoRefs.current.set(key, el);
      observerRef.current?.observe(el);
    } else {
      videoRefs.current.delete(key);
    }
  };

  useEffect(() => {
    if (!lightboxItem) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightboxItem(null);
      if (e.key === "ArrowRight") { const next = (lightboxIndex + 1) % allItems.length; setLightboxIndex(next); setLightboxItem(allItems[next]); }
      if (e.key === "ArrowLeft") { const prev = (lightboxIndex - 1 + allItems.length) % allItems.length; setLightboxIndex(prev); setLightboxItem(allItems[prev]); }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [lightboxItem, lightboxIndex, allItems]);

  const openLightbox = (item: any, index: number) => { setLightboxItem(item); setLightboxIndex(index); };
  const navigateLightbox = (dir: 1 | -1) => {
    const next = (lightboxIndex + dir + allItems.length) % allItems.length;
    setLightboxIndex(next);
    setLightboxItem(allItems[next]);
  };

  return (
    <section id="gallery" className="py-20 md:py-40 bg-warm-bg relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white to-transparent pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <span className="text-secondary font-serif italic text-2xl mb-4 block">A Visual Narrative</span>
          <h2 className="text-5xl md:text-8xl font-display mb-8 tracking-tighter">
            Grand <span className="italic font-serif text-primary">Showcase</span>
          </h2>
          <div className="ornate-divider max-w-xl mx-auto">
            <Star className="text-secondary w-6 h-6" />
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-3 justify-center mb-6">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => handleCategoryChange(cat.id)}
                className={`flex items-center gap-2 px-5 md:px-7 py-3 rounded-full font-bold uppercase text-[10px] md:text-[11px] tracking-[0.3em] transition-all duration-300 border ${
                  isActive
                    ? "bg-primary text-secondary border-secondary shadow-lg scale-105"
                    : "bg-white text-primary border-primary/20 hover:border-secondary hover:text-secondary"
                }`}
              >
                <Icon className="w-3.5 h-3.5 md:w-4 md:h-4" />
                <span className="hidden sm:inline">{cat.label}</span>
                <span className="sm:hidden">{cat.label.split(" ")[0]}</span>
              </button>
            );
          })}
        </div>

        {/* Subfolder Pills */}
        <AnimatePresence mode="wait">
          {activeCat.subfolders && (
            <motion.div
              key={activeCategory + "-sub"}
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
              className="flex flex-wrap gap-2 justify-center mb-10"
            >
              {activeCat.subfolders.map((sub) => {
                const isActive = (activeSubfolder || activeCat.subfolders![0]) === sub;
                const subItems = (activeCat.items as any)[sub] || [];
                return (
                  <button
                    key={sub}
                    onClick={() => handleSubfolderChange(sub)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-[0.25em] transition-all border ${
                      isActive
                        ? "gold-gradient text-primary border-secondary shadow-md"
                        : "bg-white/60 text-primary/60 border-primary/15 hover:border-secondary/50 hover:text-primary"
                    }`}
                  >
                    {sub}
                    <span className={`text-[9px] px-1.5 py-0.5 rounded-full font-bold ${isActive ? "bg-primary/20 text-primary" : "bg-primary/10 text-primary/50"}`}>
                      {subItems.length}
                    </span>
                  </button>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>

        <div className="text-center mb-8">
          <span className="text-primary/40 text-[10px] font-bold uppercase tracking-[0.4em]">
            Showing {Math.min(visibleCount, allItems.length)} of {allItems.length} moments
          </span>
        </div>

        {/* Masonry Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory + (activeSubfolder || "")}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 md:gap-6 space-y-0"
            style={{ columnGap: "1.25rem" }}
          >
            {displayItems.map((item: any, i: number) => {
              const videoKey = `${activeCategory}-${activeSubfolder || "main"}-${i}`;
              return (
                <motion.div
                  key={videoKey}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: Math.min(i * 0.04, 0.4), duration: 0.35 }}
                  onClick={() => openLightbox(item, i)}
                  className="relative overflow-hidden rounded-2xl group cursor-pointer mb-4 md:mb-5 break-inside-avoid elegant-shadow"
                  style={{ display: "inline-block", width: "100%" }}
                >
                  {item.type === "video" ? (
                    <video
                      ref={(el) => registerVideo(videoKey, el)}
                      src={item.url}
                      muted
                      loop
                      playsInline
                      preload="metadata"
                      className="w-full object-cover transition-transform duration-700 group-hover:scale-105 block"
                    />
                  ) : (
                    <img
                      src={item.url}
                      alt={item.title}
                      loading="lazy"
                      className="w-full object-cover transition-transform duration-700 group-hover:scale-105 block"
                    />
                  )}

                  <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-400 flex flex-col justify-end p-5">
                    <span className="text-secondary text-[8px] font-bold tracking-[0.4em] uppercase mb-1">{item.tag}</span>
                    <h3 className="text-white font-display text-lg leading-tight">{item.title}</h3>
                    <span className="mt-2 inline-flex items-center gap-1 text-secondary/80 text-[9px] font-bold uppercase tracking-wider">
                      <Sparkles className="w-2.5 h-2.5" /> Tap to view
                    </span>
                  </div>

                  <div className="absolute top-3 left-3">
                    <span className="bg-primary/70 backdrop-blur-md text-secondary text-[8px] font-bold tracking-[0.25em] uppercase px-2.5 py-1 rounded-full">
                      {item.tag}
                    </span>
                  </div>

                  {item.type === "video" && (
                    <div className="absolute top-3 right-3 w-7 h-7 rounded-full bg-secondary/90 flex items-center justify-center">
                      <div className="w-0 h-0 border-t-[5px] border-t-transparent border-b-[5px] border-b-transparent border-l-[8px] border-l-primary ml-0.5"></div>
                    </div>
                  )}
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>

        {hasMore && (
          <div className="text-center mt-14">
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => setVisibleCount((v) => v + ITEMS_PER_PAGE)}
              className="gold-gradient text-primary px-14 py-5 rounded-full font-display font-bold text-base hover:shadow-2xl transition-all shadow-lg inline-flex items-center gap-3"
            >
              Load More Moments <Sparkles className="w-4 h-4" />
            </motion.button>
            <p className="mt-4 text-primary/30 text-[10px] font-bold uppercase tracking-[0.4em]">
              {allItems.length - visibleCount} more moments await
            </p>
          </div>
        )}

        {!hasMore && allItems.length > ITEMS_PER_PAGE && (
          <div className="text-center mt-14">
            <div className="ornate-divider max-w-xs mx-auto">
              <Star className="text-secondary/40 w-4 h-4" />
            </div>
            <p className="mt-4 text-primary/30 text-[10px] font-bold uppercase tracking-[0.4em]">All moments unveiled</p>
          </div>
        )}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxItem(null)}
            className="fixed inset-0 z-[200] bg-black/97 backdrop-blur-2xl flex items-center justify-center p-4"
          >
            <button
              onClick={(e) => { e.stopPropagation(); navigateLightbox(-1); }}
              className="absolute left-3 md:left-8 z-10 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/10 hover:bg-secondary/80 flex items-center justify-center transition-colors"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5 text-white fill-none stroke-current stroke-2">
                <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>

            <motion.div
              key={lightboxIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-5xl w-full rounded-2xl overflow-hidden bg-black"
            >
              {lightboxItem.type === "video" ? (
                <video src={lightboxItem.url} autoPlay controls loop playsInline className="w-full max-h-[80vh] object-contain" />
              ) : (
                <img src={lightboxItem.url} alt={lightboxItem.title} className="w-full max-h-[80vh] object-contain" />
              )}
              <button
                onClick={() => setLightboxItem(null)}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
              >
                <X className="w-4 h-4 text-white" />
              </button>
              <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-black/90 to-transparent">
                <div className="flex items-end justify-between">
                  <div>
                    <span className="text-secondary text-[9px] font-bold tracking-[0.4em] uppercase">{lightboxItem.tag}</span>
                    <h3 className="text-white font-display text-xl mt-0.5">{lightboxItem.title}</h3>
                  </div>
                  <span className="text-white/30 text-xs font-bold">{lightboxIndex + 1} / {allItems.length}</span>
                </div>
              </div>
            </motion.div>

            <button
              onClick={(e) => { e.stopPropagation(); navigateLightbox(1); }}
              className="absolute right-3 md:right-8 z-10 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/10 hover:bg-secondary/80 flex items-center justify-center transition-colors"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5 text-white fill-none stroke-current stroke-2">
                <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>

            {allItems.length <= 20 && (
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-1.5">
                {allItems.map((_: any, i: number) => (
                  <button
                    key={i}
                    onClick={(e) => { e.stopPropagation(); setLightboxIndex(i); setLightboxItem(allItems[i]); }}
                    className={`rounded-full transition-all ${i === lightboxIndex ? "w-5 h-1.5 bg-secondary" : "w-1.5 h-1.5 bg-white/30"}`}
                  />
                ))}
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

const RoyalOfferModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsOpen(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6 bg-primary/90 backdrop-blur-xl overflow-y-auto"
        >
          <motion.div
            initial={{ scale: 0.9, y: 20, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.9, y: 20, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="relative max-w-4xl w-full bg-white rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-[0_30px_100px_rgba(0,0,0,0.5)] my-auto"
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 md:top-8 md:right-8 w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary/5 flex items-center justify-center text-primary hover:bg-primary hover:text-secondary transition-all z-20"
            >
              <X className="w-5 h-5 md:w-6 h-6" />
            </button>

            <div className="flex flex-col md:flex-row h-full">
              <div className="md:w-2/5 bg-primary p-8 md:p-12 text-white relative overflow-hidden flex flex-col justify-center">
                <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
                <div className="relative z-10">
                  <span className="text-secondary font-serif italic text-lg md:text-xl mb-2 md:mb-4 block">Exclusive Invitation</span>
                  <h2 className="text-3xl md:text-5xl font-display mb-4 md:mb-8 leading-tight">INDIAN<br /><span className="italic font-serif text-secondary">Riwaaz</span></h2>
                  <div className="w-12 md:w-16 h-1 bg-secondary/30 mb-4 md:mb-8"></div>
                  <p className="text-secondary/60 text-[10px] md:text-sm font-light leading-relaxed uppercase tracking-[0.2em]">
                    Valid for bookings made 30+ days in advance.
                  </p>
                  <p className="mt-4 md:mt-6 text-[10px] md:text-xs text-secondary/80 font-serif italic">Featuring Auris Luxury Banquet Hall</p>
                </div>
              </div>

              <div className="md:w-3/5 p-8 md:p-16 bg-white flex flex-col justify-center">
                <div className="space-y-6 md:space-y-10">
                  <div className="flex items-center gap-4 md:gap-6 group">
                    <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-primary/5 flex items-center justify-center border border-primary/10 group-hover:bg-secondary/10 transition-colors shrink-0">
                      <span className="text-2xl md:text-3xl font-display text-primary">₹3.5k</span>
                    </div>
                    <div>
                      <h4 className="text-lg md:text-xl font-display font-bold mb-1">The Heritage Package</h4>
                      <p className="text-gray-500 font-light text-xs md:text-sm">Complete 4-ceremony celebration at Auris Luxury (20 mins from Akshardham).</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 md:gap-6 group">
                    <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-primary/5 flex items-center justify-center border border-primary/10 group-hover:bg-secondary/10 transition-colors shrink-0">
                      <span className="text-2xl md:text-3xl font-display text-primary">₹5k</span>
                    </div>
                    <div>
                      <h4 className="text-lg md:text-xl font-display font-bold mb-1">The Imperial Package</h4>
                      <p className="text-gray-500 font-light text-xs md:text-sm">Luxury functions across 50+ premium venues in Delhi NCR.</p>
                    </div>
                  </div>

                  <div className="pt-4 md:pt-6">
                    <button
                      onClick={() => {
                        setIsOpen(false);
                        document.getElementById('offers')?.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="w-full gold-gradient text-primary py-4 md:py-5 rounded-full text-base md:text-lg font-display font-bold hover:scale-[1.02] transition-all shadow-xl flex items-center justify-center gap-4"
                    >
                      View Offer Details <Sparkles className="w-4 h-4 md:w-5 h-5" />
                    </button>
                    <p className="text-center text-[8px] md:text-[10px] text-gray-400 uppercase tracking-[0.3em] mt-4 md:mt-6 font-bold">
                      *Terms and conditions apply to royal bookings
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const ImperialOfferSection = () => (
  <section id="offers" className="py-24 md:py-48 bg-warm-bg relative overflow-hidden">
    <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
      <div className="absolute top-20 left-10 w-96 h-96 border border-secondary rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 border border-primary rounded-full blur-3xl"></div>
    </div>

    <div className="container mx-auto px-6 relative z-10">
      <div className="text-center mb-24">
        <motion.span initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="text-secondary font-serif italic text-2xl mb-4 block">
          The Pinnacle of Celebration
        </motion.span>
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-6xl md:text-9xl font-display mb-8 tracking-tighter">
          Royal <span className="italic font-serif text-primary">Legacies</span>
        </motion.h2>
        <div className="ornate-divider max-w-2xl mx-auto">
          <div className="w-12 h-px bg-secondary/40"></div>
          <Sparkles className="text-secondary w-8 h-8 mx-4" />
          <div className="w-12 h-px bg-secondary/40"></div>
        </div>
        <p className="text-gray-400 font-light mt-10 tracking-[0.4em] uppercase text-[10px] font-bold">
          Exclusive 30-Day Advance Booking Privileges
        </p>
      </div>

      <div className="grid lg:grid-cols-12 gap-12 items-stretch max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} className="lg:col-span-7 group">
          <div className="h-full bg-white rounded-[4rem] overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.08)] border border-secondary/40 relative">
            <div className="absolute top-10 left-10 z-20">
              <span className="gold-gradient text-primary px-6 py-2 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] shadow-lg">The Royal Choice</span>
            </div>
            <div className="flex flex-col h-full">
              <div className="h-72 bg-primary relative overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80"
                  alt="Auris Luxury"
                  className="w-full h-full object-cover opacity-40 group-hover:scale-110 transition-transform duration-1000"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/20 to-transparent"></div>
                <div className="absolute bottom-10 left-10 right-10">
                  <h3 className="text-4xl md:text-5xl font-display text-white mb-2">The Heritage Package</h3>
                  <p className="text-secondary font-serif italic text-xl">At The Majestic Auris Luxury Banquet Hall</p>
                </div>
              </div>
              <div className="p-10 md:p-16 flex-1 flex flex-col">
                <div className="flex flex-wrap items-baseline gap-4 mb-12">
                  <span className="text-6xl md:text-7xl font-display text-primary">₹3,500</span>
                  <span className="text-gray-400 font-light text-xl">/ per plate</span>
                  <div className="ml-auto text-right hidden md:block">
                    <p className="text-[10px] uppercase tracking-widest text-secondary font-bold">Location</p>
                    <p className="text-sm font-serif italic text-primary">20 Mins from Akshardham Mandir</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
                  {[{ label: 'Marriage', val: '300' }, { label: 'Ring', val: '100' }, { label: 'Haldi', val: '100' }, { label: 'Cocktail', val: '100' }].map((item) => (
                    <div key={item.label} className="text-center p-6 rounded-3xl bg-primary/5 border border-primary/5 hover:border-secondary/30 transition-colors">
                      <p className="text-3xl font-display text-primary mb-1">{item.val}</p>
                      <p className="text-[10px] uppercase tracking-widest text-primary/60 font-bold mb-1">Persons</p>
                      <p className="text-[9px] uppercase tracking-widest text-gray-400 font-bold">{item.label}</p>
                    </div>
                  ))}
                </div>
                <div className="grid md:grid-cols-2 gap-8 mb-12">
                  <div className="space-y-4">
                    <h4 className="text-xs uppercase tracking-widest text-secondary font-bold mb-4">Royal Inclusions</h4>
                    {['Majestic Home Decor Artistry', 'Bespoke Digital Invitations', 'Elite Silver Service Staff', 'Traditional Welcome Rituals'].map((spec) => (
                      <div key={spec} className="flex items-center gap-3 text-gray-500 font-light text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-secondary"></div>{spec}
                      </div>
                    ))}
                  </div>
                  <div className="space-y-4">
                    <h4 className="text-xs uppercase tracking-widest text-secondary font-bold mb-4">Exclusive Perks</h4>
                    {['Free Travel for 20 Guests', 'Premium Floral Stage Decor', 'Luxury Bridal Suite Access', 'Dedicated Event Concierge'].map((spec) => (
                      <div key={spec} className="flex items-center gap-3 text-gray-500 font-light text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-secondary"></div>{spec}
                      </div>
                    ))}
                  </div>
                </div>
                <button
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="w-full py-6 gold-gradient rounded-full text-primary font-display font-bold text-lg hover:scale-[1.02] transition-all shadow-2xl flex items-center justify-center gap-4"
                >
                  Secure Your Date at Auris Luxury <Sparkles className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} className="lg:col-span-5">
          <div className="h-full bg-primary p-12 md:p-16 rounded-[4rem] relative overflow-hidden flex flex-col justify-center border border-white/10">
            <div className="absolute top-0 right-0 p-12">
              <Star className="text-secondary/20 w-24 h-24 rotate-12" />
            </div>
            <div className="relative z-10">
              <span className="text-secondary font-serif italic text-xl mb-4 block">The Ultimate Experience</span>
              <h3 className="text-4xl md:text-5xl font-display text-white mb-8">The Imperial Package</h3>
              <div className="flex items-baseline gap-2 mb-12">
                <span className="text-6xl font-display text-secondary">₹5,000</span>
                <span className="text-white/40 font-light text-xl">/ per plate</span>
              </div>
              <div className="space-y-8 mb-12">
                <div className="p-8 rounded-3xl bg-white/5 border border-white/10">
                  <h4 className="text-secondary font-display text-xl mb-4">All-Inclusive Grandeur</h4>
                  <p className="text-white/60 font-light leading-relaxed mb-6">A seamless blend of prestige and flexibility. This package grants you access to:</p>
                  <ul className="space-y-4">
                    {['A Grand Function at Auris Luxury', '3 Functions in 50+ Elite Venues', 'Banquets, Farmhouses & Hotels', 'Available across entire Delhi NCR', 'Ultra-Luxury Decor & Catering', 'Personalized Event Director'].map((item) => (
                      <li key={item} className="flex items-center gap-3 text-white/80 text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-secondary"></div>{item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="w-full py-5 border border-secondary/30 rounded-full text-secondary font-bold uppercase text-xs tracking-[0.3em] hover:bg-secondary hover:text-primary transition-all"
              >
                Explore The Imperial Network
              </button>
              <p className="text-center text-[9px] text-white/30 uppercase tracking-[0.4em] mt-8 font-bold">
                *Premium Venues subject to availability
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

const SignatureVenue = () => {
  const hall = {
    name: "Auris Luxury Banquet Hall",
    location: "20 Mins from Akshardham Mandir",
    capacity: "300-1000 Guests",
    features: ["Valet Parking", "Centralized AC", "Luxury Bridal Suite", "Gourmet Catering"],
    image: auris,
  };

  return (
    <section id="halls" className="py-24 md:py-48 bg-warm-bg relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-24 md:mb-32">
          <motion.span initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="text-secondary font-serif italic text-2xl mb-4 block">
            Our Signature Venue
          </motion.span>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-5xl md:text-9xl font-display tracking-tighter mb-8">
            Auris <span className="italic font-serif text-primary">Luxury</span>
          </motion.h2>
          <div className="ornate-divider max-w-xl mx-auto">
            <Building2 className="text-secondary w-6 h-6" />
          </div>
        </div>

        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-[3rem] md:rounded-[4rem] overflow-hidden elegant-shadow flex flex-col lg:flex-row group"
          >
            <div className="lg:w-1/2 h-80 sm:h-96 lg:h-auto overflow-hidden relative">
              <img src={hall.image} alt={hall.name} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent"></div>
            </div>
            <div className="lg:w-1/2 p-10 md:p-16 lg:p-20 flex flex-col justify-center">
              <div className="flex items-center gap-4 text-secondary mb-8">
                <Building2 className="w-6 h-6" />
                <span className="text-xs font-bold uppercase tracking-[0.5em]">{hall.location}</span>
              </div>
              <h3 className="text-4xl md:text-6xl font-display mb-8 leading-tight">{hall.name}</h3>
              <div className="flex items-center gap-4 text-gray-400 mb-10">
                <MapPin className="w-6 h-6 text-secondary/40" />
                <span className="text-lg font-light">{hall.capacity}</span>
              </div>
              <div className="flex flex-wrap gap-4 mb-12">
                {hall.features.map((f, j) => (
                  <span key={j} className="text-[10px] px-6 py-3 bg-primary/5 text-primary rounded-full uppercase font-bold tracking-[0.2em] border border-secondary/20">{f}</span>
                ))}
              </div>
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="gold-gradient text-primary px-10 py-5 rounded-full font-display font-bold text-lg hover:scale-105 transition-all shadow-xl w-full md:w-fit"
              >
                Request Royal Invitation
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const ContactForm = () => {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle');
  const [formData, setFormData] = useState({ name: '', email: '', eventType: 'Royal Wedding', vision: '' });

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setStatus('sending');
    const message = `*Royal Inquiry from Indian Riwaaz Website*%0A%0A*Name:* ${formData.name}%0A*Email:* ${formData.email}%0A*Event:* ${formData.eventType}%0A*Vision:* ${formData.vision}`;
    const whatsappUrl = `https://wa.me/919540598999?text=${message}`;
    setTimeout(() => { window.open(whatsappUrl, '_blank'); setStatus('sent'); }, 1000);
  };

  return (
    <section id="contact" className="py-20 md:py-40 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-secondary rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent rounded-full blur-[120px]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto glass-card rounded-[4rem] overflow-hidden flex flex-col lg:flex-row">
          <div className="lg:w-2/5 bg-primary p-12 md:p-20 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
            <div className="relative z-10">
              <span className="text-secondary font-serif italic text-2xl mb-6 block">The Royal Registry</span>
              <h2 className="text-5xl md:text-7xl font-display mb-12 leading-tight">Plan Your <br /><span className="italic font-serif text-secondary">Masterpiece</span></h2>
              <div className="space-y-12">
                <div className="flex items-start gap-8 group">
                  <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center group-hover:bg-secondary/20 transition-colors border border-white/10">
                    <Phone className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <p className="text-secondary/60 text-xs font-bold uppercase tracking-[0.3em] mb-2">Royal Line</p>
                    <p className="text-xl font-light">+91 95405 98999</p>
                    <p className="text-xl font-light">+91 85956 33810</p>
                  </div>
                </div>
                <div className="flex items-start gap-8 group">
                  <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center group-hover:bg-secondary/20 transition-colors border border-white/10">
                    <Mail className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <p className="text-secondary/60 text-xs font-bold uppercase tracking-[0.3em] mb-2">Imperial Mail</p>
                    <p className="text-xl font-light">indianriwaaz123@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-3/5 p-12 md:p-24 bg-white/80 backdrop-blur-md">
            <AnimatePresence mode="wait">
              {status === 'sent' ? (
                <motion.div key="success" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="h-full flex flex-col items-center justify-center text-center space-y-8">
                  <div className="w-24 h-24 rounded-full bg-secondary/20 flex items-center justify-center mb-4">
                    <Sparkles className="w-12 h-12 text-secondary" />
                  </div>
                  <h3 className="text-4xl md:text-5xl font-display">Inquiry Redirected</h3>
                  <p className="text-gray-500 text-xl font-light max-w-md">Your inquiry has been prepared for WhatsApp. If the window didn't open, please use the button below.</p>
                  <button onClick={() => setStatus('idle')} className="mt-8 text-secondary font-bold uppercase text-xs tracking-[0.3em] border-b border-secondary pb-1">
                    Send Another Royal Inquiry
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-10">
                  <div className="grid md:grid-cols-2 gap-10">
                    <div className="space-y-4">
                      <label className="text-[10px] font-bold uppercase tracking-[0.4em] text-gray-400 ml-2">Full Name</label>
                      <input required type="text" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} className="w-full bg-transparent border-b-2 border-gray-100 py-4 px-2 focus:border-secondary transition-colors outline-none text-lg font-light" placeholder="Your Majestic Name" />
                    </div>
                    <div className="space-y-4">
                      <label className="text-[10px] font-bold uppercase tracking-[0.4em] text-gray-400 ml-2">Email Address</label>
                      <input required type="email" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} className="w-full bg-transparent border-b-2 border-gray-100 py-4 px-2 focus:border-secondary transition-colors outline-none text-lg font-light" placeholder="email@royalty.com" />
                    </div>
                  </div>
                  <div className="space-y-4">
                    <label className="text-[10px] font-bold uppercase tracking-[0.4em] text-gray-400 ml-2">Event Type</label>
                    <select value={formData.eventType} onChange={(e) => setFormData({...formData, eventType: e.target.value})} className="w-full bg-transparent border-b-2 border-gray-100 py-4 px-2 focus:border-secondary transition-colors outline-none text-lg font-light appearance-none cursor-pointer">
                      <option>Royal Wedding</option>
                      <option>Grand Jagran</option>
                      <option>Majestic Birthday</option>
                      <option>Divine Mata Chowki</option>
                      <option>Other Celebration</option>
                    </select>
                  </div>
                  <div className="space-y-4">
                    <label className="text-[10px] font-bold uppercase tracking-[0.4em] text-gray-400 ml-2">Your Vision</label>
                    <textarea required rows={4} value={formData.vision} onChange={(e) => setFormData({...formData, vision: e.target.value})} className="w-full bg-transparent border-b-2 border-gray-100 py-4 px-2 focus:border-secondary transition-colors outline-none text-lg font-light resize-none" placeholder="Describe your royal vision..."></textarea>
                  </div>
                  <button disabled={status === 'sending'} type="submit" className="w-full gold-gradient text-primary py-6 rounded-full text-xl font-display font-bold hover:scale-[1.02] transition-all shadow-2xl active:scale-95 disabled:opacity-50 flex items-center justify-center gap-4 group">
                    {status === 'sending' ? 'Preparing WhatsApp...' : 'Send via WhatsApp'}
                    <Send className="w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </button>
                </form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="bg-primary text-white pt-32 pb-12 relative overflow-hidden">
    <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-secondary/40 to-transparent"></div>
    <div className="container mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
        <div className="space-y-10">
          <h2 className="text-4xl font-display italic gold-text">Indian Riwaaz</h2>
          <p className="text-gray-400 font-light leading-relaxed text-lg">Crafting royal legacies through timeless traditions and majestic celebrations. Your vision, our artistry.</p>
          <div className="flex gap-6">
            <a href="https://www.instagram.com/sanj_eevca?utm_source=qr&igsh=b2gxdjdtZGxrNmhr" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:border-secondary hover:text-secondary transition-all group">
              <span className="sr-only">Instagram</span>
              <Instagram className="w-5 h-5 group-hover:scale-110 transition-transform" />
            </a>
            <a href="https://www.facebook.com/share/18CwEibFFX/" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:border-secondary hover:text-secondary transition-all group">
              <span className="sr-only">Facebook</span>
              <Facebook className="w-5 h-5 group-hover:scale-110 transition-transform" />
            </a>
          </div>
        </div>
        <div>
          <h4 className="text-secondary text-xs font-bold uppercase tracking-[0.4em] mb-10">The Legacy</h4>
          <ul className="space-y-6">
            {['The Beginning', 'Our Craft', 'The Gallery', 'The Venues'].map((item) => (
              <li key={item}><a href={`#${item.toLowerCase().replace(' ', '')}`} className="text-gray-400 hover:text-secondary transition-colors text-lg font-light">{item}</a></li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-secondary text-xs font-bold uppercase tracking-[0.4em] mb-10">Majestic Services</h4>
          <ul className="space-y-6">
            {['Mata Chowki', 'Jagran Nights', 'Royal Weddings', 'Grand Birthdays'].map((item) => (
              <li key={item}><a href="#services" className="text-gray-400 hover:text-secondary transition-colors text-lg font-light">{item}</a></li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-secondary text-xs font-bold uppercase tracking-[0.4em] mb-10">Imperial Newsletter</h4>
          <p className="text-gray-400 font-light mb-8 text-lg">Subscribe to receive royal updates and event inspiration.</p>
          <div className="flex gap-3">
            <input type="email" placeholder="Your Email" className="flex-1 bg-white/5 border border-white/10 rounded-full px-6 py-4 outline-none focus:border-secondary transition-colors text-sm" />
            <button className="w-14 h-14 bg-secondary text-primary rounded-full flex items-center justify-center hover:bg-white transition-all shadow-xl">
              <Sparkles className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
      <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
        <p className="text-gray-500 text-sm font-light tracking-widest uppercase">© 2026 Indian Riwaaz. All Rights Reserved.</p>
        <div className="flex gap-12 text-gray-500 text-sm font-light tracking-widest uppercase">
          <a href="#" className="hover:text-secondary transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-secondary transition-colors">Terms of Service</a>
        </div>
      </div>
    </div>
  </footer>
);

const WhatsAppButton = () => (
  <motion.a
    href="https://wa.me/919540598999?text=Hello%20Indian%20Riwaaz!%20I%20would%20like%20to%20inquire%20about%20booking%20a%20royal%20event."
    target="_blank"
    rel="noopener noreferrer"
    initial={{ scale: 0, opacity: 0, y: 20 }}
    animate={{ scale: 1, opacity: 1, y: 0 }}
    whileHover={{ scale: 1.1, rotate: 5 }}
    className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-50 bg-primary text-secondary p-4 md:p-5 rounded-full shadow-[0_10px_40px_rgba(212,175,55,0.4)] flex items-center justify-center group border border-secondary/30"
  >
    <svg viewBox="0 0 24 24" className="w-6 h-6 md:w-8 md:h-8 fill-current transition-transform group-hover:scale-110">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
    <span className="absolute right-full mr-4 bg-white text-primary px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-widest shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none hidden md:block">
      chat with us
    </span>
  </motion.a>
);

export default function App() {
  return (
    <div className="selection:bg-primary selection:text-white">
      <RoyalOfferModal />
      <Navbar />
      <Hero />
      <Services />
      <Gallery />
      <ImperialOfferSection />
      <SignatureVenue />
      <ContactForm />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}