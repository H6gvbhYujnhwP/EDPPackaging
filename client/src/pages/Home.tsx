/* ==========================================================
   EDP Packaging — Home Page
   Design: "Friendly Expert" — animated SVG hero + wave dividers
   Sections: Hero, USP bar, Products, Why EDP, About snippet, CTA
   ========================================================== */

import { Link } from "wouter";
import Layout from "@/components/Layout";
import { Phone, Download, ArrowRight, Package, Truck, Star, Shield, Clock, Wrench } from "lucide-react";

// ── Animated SVG Box Scene ──────────────────────────────────
function AnimatedBoxScene() {
  return (
    <div className="relative w-full h-full flex items-end justify-center" style={{ minHeight: 340 }}>
      <svg
        viewBox="0 0 520 340"
        className="w-full max-w-lg"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* Ground / shadow */}
        <ellipse cx="260" cy="320" rx="200" ry="14" fill="oklch(0.32 0.12 255 / 0.10)" />

        {/* Large box — back left */}
        <g className="animate-float-b" style={{ transformOrigin: "160px 220px" }}>
          {/* Front face */}
          <rect x="80" y="160" width="160" height="130" rx="4" fill="#D4A853" />
          {/* Top face */}
          <polygon points="80,160 160,120 320,120 240,160" fill="#E8C47A" />
          {/* Right face */}
          <polygon points="240,160 320,120 320,250 240,290" fill="#B8902A" />
          {/* Tape strip */}
          <rect x="80" y="218" width="160" height="8" fill="#C8860A" opacity="0.5" />
          <rect x="156" y="160" width="8" height="130" fill="#C8860A" opacity="0.5" />
          {/* Flap lines */}
          <line x1="80" y1="160" x2="160" y2="120" stroke="#B8902A" strokeWidth="1.5" opacity="0.6" />
          <line x1="240" y1="160" x2="320" y2="120" stroke="#8B6914" strokeWidth="1.5" opacity="0.6" />
        </g>

        {/* Small box — front right */}
        <g className="animate-float-a" style={{ transformOrigin: "360px 240px" }}>
          <rect x="300" y="210" width="100" height="80" rx="3" fill="#D4A853" />
          <polygon points="300,210 340,185 400,185 360,210" fill="#E8C47A" />
          <polygon points="360,210 400,185 400,265 360,290" fill="#B8902A" />
          <rect x="300" y="248" width="100" height="5" fill="#C8860A" opacity="0.5" />
          <rect x="347" y="210" width="5" height="80" fill="#C8860A" opacity="0.5" />
        </g>

        {/* Medium box — middle */}
        <g className="animate-float-c" style={{ transformOrigin: "260px 200px" }}>
          <rect x="190" y="180" width="130" height="110" rx="3" fill="#C8860A" />
          <polygon points="190,180 250,148 320,148 260,180" fill="#DFA040" />
          <polygon points="260,180 320,148 320,258 260,290" fill="#A06B10" />
          <rect x="190" y="233" width="130" height="6" fill="#8B5E0E" opacity="0.5" />
          <rect x="253" y="180" width="6" height="110" fill="#8B5E0E" opacity="0.5" />
          {/* Arrow label */}
          <rect x="205" y="195" width="60" height="20" rx="3" fill="white" opacity="0.25" />
          <text x="235" y="209" textAnchor="middle" fontSize="9" fill="white" fontFamily="Nunito, sans-serif" fontWeight="700">THIS WAY UP</text>
        </g>

        {/* Tiny box — far right */}
        <g className="animate-float-d" style={{ transformOrigin: "430px 270px" }}>
          <rect x="400" y="255" width="70" height="55" rx="2" fill="#E8C47A" />
          <polygon points="400,255 425,238 470,238 445,255" fill="#F0D090" />
          <polygon points="445,255 470,238 470,310 445,327" fill="#C8A050" />
        </g>

        {/* Landscape hills */}
        <path d="M0,310 Q130,270 260,300 Q390,330 520,295 L520,340 L0,340 Z" fill="oklch(0.55 0.14 240 / 0.15)" />
        <path d="M0,325 Q100,305 200,318 Q330,335 520,315 L520,340 L0,340 Z" fill="oklch(0.55 0.14 240 / 0.25)" />
      </svg>
    </div>
  );
}

// ── Wave Divider ────────────────────────────────────────────
function WaveDivider({ topColor, bottomColor }: { topColor: string; bottomColor: string }) {
  return (
    <div className="wave-divider" style={{ backgroundColor: topColor }}>
      <svg viewBox="0 0 1440 70" preserveAspectRatio="none" style={{ height: 70, display: "block" }}>
        <path
          d="M0,35 C360,70 720,0 1080,35 C1260,52 1380,28 1440,35 L1440,70 L0,70 Z"
          fill={bottomColor}
        />
      </svg>
    </div>
  );
}

// ── USP Bar ─────────────────────────────────────────────────
const USP_ITEMS = [
  { icon: <Package size={22} />, label: "UK Manufacturer", sub: "Made in Essex" },
  { icon: <Truck size={22} />, label: "Fast UK Delivery", sub: "Own fleet + couriers" },
  { icon: <Star size={22} />, label: "30+ Years Experience", sub: "Est. 2000" },
  { icon: <Wrench size={22} />, label: "Bespoke Service", sub: "1 box to 100,000" },
  { icon: <Shield size={22} />, label: "Price Promise", sub: "Costs go down, so do yours" },
  { icon: <Clock size={22} />, label: "Stock & Serve", sub: "No extra cost" },
];

// ── Product Cards ────────────────────────────────────────────
const PRODUCTS = [
  {
    title: "Cardboard Boxes",
    desc: "Single wall, double wall, bespoke, pizza-style and export pallet boxes. From 1 to 100,000.",
    href: "/cardboard-boxes",
    img: "https://d2xsxph8kpxj0f.cloudfront.net/310519663048135071/5DHnb8eJT4kecrj9sBDMU6/edp_boxes_group-MGQYTcDAtHjebR3UDzQHu8.webp",
    color: "oklch(0.32 0.12 255)",
  },
  {
    title: "Postal & Mailing",
    desc: "Postal boxes, bookpacks, board-backed envelopes, bubble-lined bags, Jiffy bags and more.",
    href: "/postal-mailing",
    img: "https://d2xsxph8kpxj0f.cloudfront.net/310519663048135071/5DHnb8eJT4kecrj9sBDMU6/edp_mailing_products-kef5ckBSLtpRETCP2yGNVo.webp",
    color: "oklch(0.55 0.14 240)",
  },
  {
    title: "Bubble, Foam & Paper",
    desc: "Bubblewrap rolls, foam rolls, corrugated paper, kraft paper, void fill and air bags.",
    href: "/bubble-foam-paper",
    img: "https://d2xsxph8kpxj0f.cloudfront.net/310519663048135071/5DHnb8eJT4kecrj9sBDMU6/edp_bubblewrap-YUcxvPXMjDJTcXxhsnQkfU.webp",
    color: "oklch(0.45 0.14 150)",
  },
  {
    title: "Tape & Strapping",
    desc: "Packing tape, warning tapes, gummed tape, crossweave tape, pallet wrap and strapping tools.",
    href: "/tape-strapping",
    img: "https://d2xsxph8kpxj0f.cloudfront.net/310519663048135071/5DHnb8eJT4kecrj9sBDMU6/edp_tape_strapping-fPdh8Mejc6CHqCijsM7MrE.webp",
    color: "oklch(0.60 0.15 235)",
  },
  {
    title: "Polythene Products",
    desc: "Grey mailers, coloured mailing bags, polythene sacks, layflat tubing, grip seal bags.",
    href: "/polythene-products",
    img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&auto=format&fit=crop",
    color: "oklch(0.72 0.12 75)",
  },
  {
    title: "Removal Packaging",
    desc: "Moving boxes, wardrobe cartons, mattress covers, bubblewrap and complete moving kits.",
    href: "/removal-packaging",
    img: "https://images.unsplash.com/photo-1600518464441-9154a4dea21b?w=600&auto=format&fit=crop",
    color: "oklch(0.50 0.10 30)",
  },
];

// ── Why EDP ──────────────────────────────────────────────────
const WHY_ITEMS = [
  {
    num: "01",
    title: "Customer Service",
    desc: "Every customer is treated equally — you will never feel second best. At EDP we ensure the customer is king, not commission.",
  },
  {
    num: "02",
    title: "No Hard Sell",
    desc: "We treat you as people, not customers. We don't try to sell you products you don't need. It's our job to keep your costs as low as possible.",
  },
  {
    num: "03",
    title: "Personal Touch",
    desc: "We know our customers and like to think our customers know us. We can offer to hold stock for you at NO EXTRA COST.",
  },
  {
    num: "04",
    title: "Flexibility",
    desc: "Delivered when you need it, not when we want to deliver it. We can usually accommodate your delivery requirements, even same day.",
  },
  {
    num: "05",
    title: "The EDP Price Promise",
    desc: "If our costs go down, so do yours. Do you get that service from anyone else? We don't think so.",
  },
];

export default function Home() {
  return (
    <Layout>
      {/* ── HERO ─────────────────────────────────────────────── */}
      <section
        style={{ background: "linear-gradient(135deg, oklch(0.95 0.03 240) 0%, oklch(0.97 0.02 230) 50%, oklch(0.93 0.04 80 / 0.15) 100%)" }}
        className="relative overflow-hidden"
      >
        <div className="container py-12 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Text */}
            <div className="animate-fade-up">
              <div
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold mb-5"
                style={{ backgroundColor: "oklch(0.72 0.12 75 / 0.2)", color: "oklch(0.50 0.12 75)", fontFamily: "'Nunito', sans-serif" }}
              >
                <span>🇬🇧</span> UK Cardboard Box Manufacturers — Southend-on-Sea, Essex
              </div>
              <h1
                className="text-4xl lg:text-5xl xl:text-6xl font-black leading-tight mb-5"
                style={{ color: "oklch(0.22 0.01 260)", fontFamily: "'Nunito', sans-serif" }}
              >
                Your local{" "}
                <span style={{ color: "oklch(0.32 0.12 255)" }}>packaging supplier</span>
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed mb-8 max-w-lg" style={{ fontFamily: "'Nunito Sans', sans-serif" }}>
                Over 30 years of cardboard box manufacturing and packaging distribution. From a single bespoke box to 100,000 — EDP delivers quality, service and the best prices in the UK.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/cardboard-boxes"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-white text-base transition-all duration-200 btn-press"
                  style={{ backgroundColor: "oklch(0.32 0.12 255)", fontFamily: "'Nunito', sans-serif" }}
                >
                  Browse Products <ArrowRight size={16} />
                </Link>
                <Link
                  href="/download-brochure"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-white text-base transition-all duration-200 btn-press"
                  style={{ backgroundColor: "oklch(0.45 0.14 150)", fontFamily: "'Nunito', sans-serif" }}
                >
                  <Download size={16} /> Download Brochure
                </Link>
                <a
                  href="tel:01702618877"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-base border-2 transition-all duration-200 btn-press bg-white"
                  style={{ borderColor: "oklch(0.32 0.12 255)", color: "oklch(0.32 0.12 255)", fontFamily: "'Nunito', sans-serif" }}
                >
                  <Phone size={16} /> 01702 618877
                </a>
              </div>
            </div>

            {/* Product range image */}
            <div className="flex items-center justify-center animate-fade-up">
              <img
                src="/edp-products-range.png"
                alt="EDP Full Packaging Range — Cardboard Boxes, Bubble Wrap, Tape and More"
                className="w-full max-w-xl object-contain drop-shadow-xl"
                style={{ filter: "drop-shadow(0 20px 40px rgba(0,0,0,0.12))" }}
              />
            </div>
          </div>
        </div>

        {/* Bottom wave */}
        <div className="wave-divider">
          <svg viewBox="0 0 1440 60" preserveAspectRatio="none" style={{ height: 60, display: "block" }}>
            <path
              d="M0,30 C360,60 720,0 1080,30 C1260,45 1380,15 1440,30 L1440,60 L0,60 Z"
              fill="white"
            />
          </svg>
        </div>
      </section>

      {/* ── USP BAR ───────────────────────────────────────────── */}
      <section className="bg-white py-10">
        <div className="container">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {USP_ITEMS.map((item) => (
              <div key={item.label} className="flex flex-col items-center text-center gap-2 p-4 rounded-2xl hover:bg-blue-50 transition-colors">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-white"
                  style={{ backgroundColor: "oklch(0.32 0.12 255)" }}
                >
                  {item.icon}
                </div>
                <p className="font-bold text-sm text-gray-800 leading-tight" style={{ fontFamily: "'Nunito', sans-serif" }}>{item.label}</p>
                <p className="text-xs text-gray-500">{item.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRODUCTS GRID ─────────────────────────────────────── */}
      <WaveDivider topColor="white" bottomColor="oklch(0.95 0.03 240)" />
      <section style={{ backgroundColor: "oklch(0.95 0.03 240)" }} className="py-16">
        <div className="container">
          <div className="text-center mb-12">
            <h2
              className="text-3xl lg:text-4xl font-black mb-3"
              style={{ color: "oklch(0.22 0.01 260)", fontFamily: "'Nunito', sans-serif" }}
            >
              All Your Packaging Needs in One Place
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              From cardboard boxes to polythene bags — EDP stocks the full range so you don't have to look anywhere else.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {PRODUCTS.map((p) => (
              <Link key={p.href} href={p.href}>
                <div className="bg-white rounded-2xl overflow-hidden shadow-sm card-hover group cursor-pointer h-full flex flex-col">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={p.img}
                      alt={p.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div
                      className="absolute inset-0 opacity-20"
                      style={{ background: `linear-gradient(to bottom, transparent 50%, ${p.color})` }}
                    />
                  </div>
                  <div className="p-5 flex-1 flex flex-col">
                    <h3
                      className="font-extrabold text-lg mb-2"
                      style={{ color: "oklch(0.22 0.01 260)", fontFamily: "'Nunito', sans-serif" }}
                    >
                      {p.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed flex-1">{p.desc}</p>
                    <div
                      className="mt-4 inline-flex items-center gap-1 text-sm font-bold"
                      style={{ color: p.color, fontFamily: "'Nunito', sans-serif" }}
                    >
                      Browse range <ArrowRight size={14} />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY EDP ───────────────────────────────────────────── */}
      <WaveDivider topColor="oklch(0.95 0.03 240)" bottomColor="white" />
      <section className="bg-white py-16">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2
                className="text-3xl lg:text-4xl font-black mb-4"
                style={{ color: "oklch(0.22 0.01 260)", fontFamily: "'Nunito', sans-serif" }}
              >
                Why Choose EDP?
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                EDP has very clearly defined priorities that have proved a success since the formation of the company in the year 2000. Here are the five key points on which we are happy to be compared to any other packaging supplier in the UK.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-white transition-all duration-200 btn-press"
                style={{ backgroundColor: "oklch(0.32 0.12 255)", fontFamily: "'Nunito', sans-serif" }}
              >
                Learn About EDP <ArrowRight size={15} />
              </Link>
            </div>
            <div className="space-y-4">
              {WHY_ITEMS.map((item) => (
                <div
                  key={item.num}
                  className="flex gap-4 p-5 rounded-2xl border border-gray-100 hover:border-blue-200 hover:bg-blue-50/30 transition-all duration-200"
                >
                  <div
                    className="text-2xl font-black flex-shrink-0 w-10"
                    style={{ color: "oklch(0.72 0.12 75)", fontFamily: "'Nunito', sans-serif" }}
                  >
                    {item.num}
                  </div>
                  <div>
                    <h4
                      className="font-extrabold text-base mb-1"
                      style={{ color: "oklch(0.32 0.12 255)", fontFamily: "'Nunito', sans-serif" }}
                    >
                      {item.title}
                    </h4>
                    <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── ABOUT SNIPPET ─────────────────────────────────────── */}
      <WaveDivider topColor="white" bottomColor="oklch(0.32 0.12 255)" />
      <section style={{ backgroundColor: "oklch(0.32 0.12 255)" }} className="py-16 text-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2
                className="text-3xl lg:text-4xl font-black mb-5"
                style={{ fontFamily: "'Nunito', sans-serif" }}
              >
                Over 30 Years of Packaging Expertise
              </h2>
              <p className="text-blue-100 text-lg leading-relaxed mb-4">
                EDP was founded in 2000 by brothers Mark and Terry Willett and continues as a family owned and operated business. Our management team have extensive experience in their respective industry fields and work closely with our customers and suppliers.
              </p>
              <p className="text-blue-100 leading-relaxed mb-8">
                From our Southend-on-Sea warehouse and distribution centre, we supply products nationwide across the UK with deliveries available on our own fleet and with specialist transport partners including a nationwide pallet haulier and next day parcel carrier.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold bg-white transition-all duration-200 btn-press"
                  style={{ color: "oklch(0.32 0.12 255)", fontFamily: "'Nunito', sans-serif" }}
                >
                  About Us <ArrowRight size={15} />
                </Link>
                <a
                  href="tel:01702618877"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold border-2 border-white text-white transition-all duration-200 btn-press"
                  style={{ fontFamily: "'Nunito', sans-serif" }}
                >
                  <Phone size={15} /> Call Us Now
                </a>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663048135071/5DHnb8eJT4kecrj9sBDMU6/edp_hero_warehouse-23gznrcsesHHg7Mp72Mkcj.webp"
                alt="EDP warehouse — Southend-on-Sea, Essex"
                className="w-full h-72 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── BROCHURE CTA ──────────────────────────────────────── */}
      <WaveDivider topColor="oklch(0.32 0.12 255)" bottomColor="oklch(0.95 0.03 240)" />
      <section style={{ backgroundColor: "oklch(0.95 0.03 240)" }} className="py-16">
        <div className="container text-center">
          <h2
            className="text-3xl lg:text-4xl font-black mb-4"
            style={{ color: "oklch(0.22 0.01 260)", fontFamily: "'Nunito', sans-serif" }}
          >
            Download Our Free Product Guide
          </h2>
          <p className="text-gray-600 text-lg max-w-xl mx-auto mb-8">
            Get our full product range guide delivered straight to your inbox. Simply fill in your details and we'll send it right over.
          </p>
          <Link
            href="/download-brochure"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-extrabold text-white text-lg transition-all duration-200 btn-press shadow-lg"
            style={{ backgroundColor: "oklch(0.45 0.14 150)", fontFamily: "'Nunito', sans-serif" }}
          >
            <Download size={20} /> Download Free Brochure
          </Link>
        </div>
      </section>
      <WaveDivider topColor="oklch(0.95 0.03 240)" bottomColor="white" />
    </Layout>
  );
}
