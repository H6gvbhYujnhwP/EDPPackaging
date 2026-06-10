/* ==========================================================
   EDP Packaging — Layout Component
   Design: "Friendly Expert" — persistent header + footer
   Header: top info bar + main nav with logo large top-right
   Footer: logo + company info + brochure download link
   ========================================================== */

import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Phone, Mail, MapPin, Clock, Menu, X, Download, ChevronDown } from "lucide-react";

const NAV_ITEMS = [
  {
    label: "Products",
    children: [
      { label: "Cardboard Boxes", href: "/cardboard-boxes" },
      { label: "Postal & Mailing", href: "/postal-mailing" },
      { label: "Bubble, Foam & Paper", href: "/bubble-foam-paper" },
      { label: "Tape & Strapping", href: "/tape-strapping" },
      { label: "Polythene Products", href: "/polythene-products" },
      { label: "Removal Packaging", href: "/removal-packaging" },
    ],
  },
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Download Brochure", href: "/download-brochure", highlight: true },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [location] = useLocation();

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* ── Top info bar ── */}
      <div style={{ backgroundColor: "oklch(0.32 0.12 255)" }} className="text-white text-sm py-2">
        <div className="container flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-4 flex-wrap">
            <a href="mailto:sales@edpgroup.co.uk" className="flex items-center gap-1.5 hover:text-blue-200 transition-colors">
              <Mail size={13} />
              <span>sales@edpgroup.co.uk</span>
            </a>
            <span className="hidden sm:flex items-center gap-1.5">
              <MapPin size={13} />
              <span>Unit 1, 40 Comet Way, Southend-on-Sea, Essex SS2 6GD</span>
            </span>
          </div>
          <div className="flex items-center gap-1.5">
            <Clock size={13} />
            <span>Mon–Fri 8:30am–5:30pm</span>
          </div>
        </div>
      </div>

      {/* ── Main header ── */}
      <header className="bg-white border-b border-gray-100 sticky top-0 z-50 shadow-sm">
        <div className="container flex items-center justify-between py-3 gap-4">
          {/* Logo — large, top-right feel via flex order */}
          <Link href="/" className="flex-shrink-0 order-first">
            <img
              src="/edp-logo.png"
              alt="EDP Packaging — UK Cardboard Box Manufacturers"
              className="h-16 w-auto object-contain"
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {NAV_ITEMS.map((item) =>
              item.children ? (
                <div key={item.label} className="relative group">
                  <button
                    className="flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-bold text-gray-700 hover:text-[oklch(0.32_0.12_255)] hover:bg-blue-50 transition-all duration-200"
                    style={{ fontFamily: "'Nunito', sans-serif" }}
                  >
                    {item.label}
                    <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-200" />
                  </button>
                  <div className="absolute top-full left-0 mt-1 w-56 bg-white rounded-xl shadow-xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className={`block px-4 py-2.5 text-sm font-semibold hover:bg-blue-50 hover:text-[oklch(0.32_0.12_255)] transition-colors first:rounded-t-xl last:rounded-b-xl ${
                          location === child.href ? "text-[oklch(0.32_0.12_255)] bg-blue-50" : "text-gray-700"
                        }`}
                        style={{ fontFamily: "'Nunito Sans', sans-serif" }}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : item.highlight ? (
                <Link
                  key={item.href}
                  href={item.href!}
                  className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-bold text-white transition-all duration-200 btn-press"
                  style={{
                    backgroundColor: "oklch(0.45 0.14 150)",
                    fontFamily: "'Nunito', sans-serif",
                  }}
                >
                  <Download size={14} />
                  {item.label}
                </Link>
              ) : (
                <Link
                  key={item.href}
                  href={item.href!}
                  className={`px-3 py-2 rounded-lg text-sm font-bold transition-all duration-200 ${
                    location === item.href
                      ? "text-[oklch(0.32_0.12_255)] bg-blue-50"
                      : "text-gray-700 hover:text-[oklch(0.32_0.12_255)] hover:bg-blue-50"
                  }`}
                  style={{ fontFamily: "'Nunito', sans-serif" }}
                >
                  {item.label}
                </Link>
              )
            )}
          </nav>

          {/* Phone — always prominent */}
          <a
            href="tel:01702618877"
            className="hidden md:flex items-center gap-2 px-4 py-2.5 rounded-xl font-extrabold text-white animate-phone-pulse btn-press flex-shrink-0"
            style={{
              backgroundColor: "oklch(0.32 0.12 255)",
              fontFamily: "'Nunito', sans-serif",
              fontSize: "1rem",
            }}
          >
            <Phone size={16} />
            <span>01702 618877</span>
          </a>

          {/* Mobile menu toggle */}
          <button
            className="lg:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile nav */}
        {mobileOpen && (
          <div className="lg:hidden border-t border-gray-100 bg-white px-4 py-4 flex flex-col gap-1">
            <a
              href="tel:01702618877"
              className="flex items-center gap-2 px-4 py-3 rounded-xl font-extrabold text-white mb-2"
              style={{ backgroundColor: "oklch(0.32 0.12 255)", fontFamily: "'Nunito', sans-serif" }}
            >
              <Phone size={16} />
              01702 618877
            </a>
            <button
              className="flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-bold text-gray-700 hover:bg-blue-50 transition-colors"
              style={{ fontFamily: "'Nunito', sans-serif" }}
              onClick={() => setProductsOpen(!productsOpen)}
            >
              Products
              <ChevronDown size={14} className={productsOpen ? "rotate-180" : ""} />
            </button>
            {productsOpen && (
              <div className="pl-4 flex flex-col gap-0.5">
                {NAV_ITEMS[0].children!.map((child) => (
                  <Link
                    key={child.href}
                    href={child.href}
                    className="block px-3 py-2 text-sm font-semibold text-gray-600 hover:text-[oklch(0.32_0.12_255)] hover:bg-blue-50 rounded-lg transition-colors"
                    onClick={() => setMobileOpen(false)}
                  >
                    {child.label}
                  </Link>
                ))}
              </div>
            )}
            {NAV_ITEMS.slice(1).map((item) =>
              item.highlight ? (
                <Link
                  key={item.href}
                  href={item.href!}
                  className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-sm font-bold text-white mt-1"
                  style={{ backgroundColor: "oklch(0.45 0.14 150)", fontFamily: "'Nunito', sans-serif" }}
                  onClick={() => setMobileOpen(false)}
                >
                  <Download size={14} />
                  {item.label}
                </Link>
              ) : (
                <Link
                  key={item.href}
                  href={item.href!}
                  className="px-3 py-2.5 rounded-lg text-sm font-bold text-gray-700 hover:text-[oklch(0.32_0.12_255)] hover:bg-blue-50 transition-colors"
                  style={{ fontFamily: "'Nunito', sans-serif" }}
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
              )
            )}
          </div>
        )}
      </header>

      {/* ── Page content ── */}
      <main className="flex-1">{children}</main>

      {/* ── Footer ── */}
      <footer style={{ backgroundColor: "oklch(0.20 0.08 255)" }} className="text-white">
        {/* Wave top */}
        <div className="wave-divider" style={{ marginTop: "-2px" }}>
          <svg viewBox="0 0 1440 60" preserveAspectRatio="none" style={{ height: 60 }}>
            <path
              d="M0,40 C240,70 480,10 720,40 C960,70 1200,10 1440,40 L1440,60 L0,60 Z"
              fill="oklch(0.20 0.08 255)"
            />
          </svg>
        </div>

        <div className="container py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Logo + tagline */}
            <div className="lg:col-span-1">
              <Link href="/">
                <img
                  src="/edp-logo.png"
                  alt="EDP Packaging"
                  className="h-20 w-auto object-contain mb-4 brightness-0 invert"
                />
              </Link>
              <p className="text-blue-200 text-sm leading-relaxed">
                A world of packaging on your doorstep. Over 30 years of UK cardboard box manufacturing and packaging distribution.
              </p>
            </div>

            {/* Contact info */}
            <div>
              <h4 className="font-extrabold text-white mb-4 text-base" style={{ fontFamily: "'Nunito', sans-serif" }}>
                Contact Us
              </h4>
              <ul className="space-y-3 text-sm text-blue-200">
                <li className="flex items-start gap-2">
                  <MapPin size={15} className="mt-0.5 flex-shrink-0 text-blue-300" />
                  <span>Unit 1, 40 Comet Way,<br />Southend-on-Sea,<br />Essex SS2 6GD</span>
                </li>
                <li>
                  <a href="tel:01702618877" className="flex items-center gap-2 hover:text-white transition-colors">
                    <Phone size={15} className="text-blue-300" />
                    <span className="font-bold text-white">01702 618877</span>
                  </a>
                </li>
                <li>
                  <a href="mailto:sales@edpgroup.co.uk" className="flex items-center gap-2 hover:text-white transition-colors">
                    <Mail size={15} className="text-blue-300" />
                    sales@edpgroup.co.uk
                  </a>
                </li>
                <li className="flex items-start gap-2">
                  <Clock size={15} className="mt-0.5 flex-shrink-0 text-blue-300" />
                  <span>Mon–Fri: 8:30am–5:30pm<br />Sat–Sun: Closed</span>
                </li>
              </ul>
            </div>

            {/* Products */}
            <div>
              <h4 className="font-extrabold text-white mb-4 text-base" style={{ fontFamily: "'Nunito', sans-serif" }}>
                Our Products
              </h4>
              <ul className="space-y-2 text-sm">
                {[
                  ["Cardboard Boxes", "/cardboard-boxes"],
                  ["Postal & Mailing", "/postal-mailing"],
                  ["Bubble, Foam & Paper", "/bubble-foam-paper"],
                  ["Tape & Strapping", "/tape-strapping"],
                  ["Polythene Products", "/polythene-products"],
                  ["Removal Packaging", "/removal-packaging"],
                ].map(([label, href]) => (
                  <li key={href}>
                    <Link href={href} className="text-blue-200 hover:text-white transition-colors">
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick links + brochure */}
            <div>
              <h4 className="font-extrabold text-white mb-4 text-base" style={{ fontFamily: "'Nunito', sans-serif" }}>
                Quick Links
              </h4>
              <ul className="space-y-2 text-sm mb-6">
                {[
                  ["About EDP", "/about"],
                  ["Contact Us", "/contact"],
                ].map(([label, href]) => (
                  <li key={href}>
                    <Link href={href} className="text-blue-200 hover:text-white transition-colors">
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
              <Link
                href="/download-brochure"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-bold text-white transition-all duration-200 btn-press"
                style={{ backgroundColor: "oklch(0.45 0.14 150)", fontFamily: "'Nunito', sans-serif" }}
              >
                <Download size={15} />
                Download Brochure
              </Link>
            </div>
          </div>

          <div className="border-t border-white/10 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-blue-300">
            <p>© {new Date().getFullYear()} EDP (UK) Ltd. All Rights Reserved. Registered in England &amp; Wales.</p>
            <p>Unit 1, 40 Comet Way, Southend-on-Sea, Essex SS2 6GD</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
