/* ==========================================================
   EDP Packaging — Cardboard Boxes Page
   ========================================================== */

import Layout from "@/components/Layout";
import { Link } from "wouter";
import { Phone, Download, ArrowRight, CheckCircle } from "lucide-react";

function WaveDivider({ topColor, bottomColor }: { topColor: string; bottomColor: string }) {
  return (
    <div style={{ backgroundColor: topColor }}>
      <svg viewBox="0 0 1440 60" preserveAspectRatio="none" style={{ height: 60, display: "block", width: "100%" }}>
        <path d="M0,30 C360,60 720,0 1080,30 C1260,45 1380,15 1440,30 L1440,60 L0,60 Z" fill={bottomColor} />
      </svg>
    </div>
  );
}

const PRODUCTS = [
  {
    title: "Single Wall Cardboard Boxes",
    desc: "Our most popular range. Available in a huge variety of sizes, single wall boxes are ideal for a wide range of applications. We stock a vast range of sizes from very small to very large. All boxes are manufactured in the UK to the highest quality standards.",
    features: ["Wide range of sizes", "UK manufactured", "Ideal for most applications", "Available in bulk quantities"],
    img: "https://d2xsxph8kpxj0f.cloudfront.net/310519663048135071/5DHnb8eJT4kecrj9sBDMU6/edp_boxes_group-MGQYTcDAtHjebR3UDzQHu8.webp",
  },
  {
    title: "Double Wall Cardboard Boxes",
    desc: "Double wall boxes offer superior strength and protection for heavier or more fragile items. Ideal for industrial use, export, and shipping heavy goods. Manufactured with two layers of fluting for extra rigidity.",
    features: ["Extra strength & rigidity", "Ideal for heavy goods", "Export quality", "Stacking strength"],
    img: "https://images.unsplash.com/photo-1553413077-190dd305871c?w=600&auto=format&fit=crop",
  },
  {
    title: "Bespoke Cardboard Boxes",
    desc: "Can't find the size you need? EDP specialises in manufacturing bespoke cardboard boxes to your exact specification. Whether you need a unique size, a specific board grade, or custom printing, we can help. Minimum quantities apply.",
    features: ["Any size made to order", "Custom board grades", "Print options available", "Competitive pricing"],
    img: "/bespoke-cardboard-boxes.webp",
  },
  {
    title: "Pizza Style Flat Boxes",
    desc: "Flat-pack style boxes with a hinged lid, ideal for artwork, prints, clothing, and flat items. Also popular as pizza boxes for the food industry. Available in a range of sizes.",
    features: ["Flat-pack design", "Hinged lid", "Food industry approved", "Multiple sizes"],
    img: "/pizza-boxes.jpg",
  },
  {
    title: "Export Pallet Boxes",
    desc: "Heavy-duty export boxes designed for pallet shipping. These large, robust boxes are ideal for bulk goods, industrial components, and export shipments. Available in double and triple wall grades.",
    features: ["Heavy duty construction", "Pallet compatible", "Triple wall available", "Export certified"],
    img: "/export-pallet-boxes.jpg",
  },
  {
    title: "Archive Storage Boxes",
    desc: "Strong, stackable archive boxes for document and file storage. Ideal for offices, solicitors, accountants, and any business needing secure document storage. Lids available separately.",
    features: ["Stackable design", "Secure document storage", "Lids available", "Bulk pricing"],
    img: "https://images.unsplash.com/photo-1568992687947-868a62a9f521?w=600&auto=format&fit=crop",
  },
];

export default function CardboardBoxes() {
  return (
    <Layout>
      {/* Hero */}
      <section
        style={{ background: "linear-gradient(135deg, oklch(0.95 0.03 240) 0%, oklch(0.93 0.04 80 / 0.15) 100%)" }}
        className="py-14"
      >
        <div className="container">
          <div className="flex items-center gap-2 text-sm text-gray-500 mb-4" style={{ fontFamily: "'Nunito Sans', sans-serif" }}>
            <Link href="/" className="hover:text-blue-700">Home</Link>
            <span>/</span>
            <span style={{ color: "oklch(0.32 0.12 255)" }}>Cardboard Boxes</span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-black mb-4" style={{ color: "oklch(0.22 0.01 260)", fontFamily: "'Nunito', sans-serif" }}>
            Cardboard Boxes
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl leading-relaxed">
            UK manufactured cardboard boxes in single wall, double wall, bespoke and specialist formats. From 1 box to 100,000 — delivered across the UK.
          </p>
        </div>
        <WaveDivider topColor="transparent" bottomColor="white" />
      </section>

      {/* Products */}
      <section className="bg-white py-12">
        <div className="container">
          <div className="space-y-16">
            {PRODUCTS.map((product, i) => (
              <div
                key={product.title}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center ${i % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
              >
                <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                  <img
                    src={product.img}
                    alt={product.title}
                    className="w-full h-72 object-cover rounded-2xl shadow-md"
                  />
                </div>
                <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                  <h2 className="text-2xl font-extrabold mb-3" style={{ color: "oklch(0.32 0.12 255)", fontFamily: "'Nunito', sans-serif" }}>
                    {product.title}
                  </h2>
                  <p className="text-gray-600 leading-relaxed mb-5">{product.desc}</p>
                  <ul className="space-y-2 mb-6">
                    {product.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm text-gray-700">
                        <CheckCircle size={16} style={{ color: "oklch(0.45 0.14 150)" }} className="flex-shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="tel:01702618877"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-white text-sm btn-press"
                    style={{ backgroundColor: "oklch(0.32 0.12 255)", fontFamily: "'Nunito', sans-serif" }}
                  >
                    <Phone size={14} /> Enquire: 01702 618877
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <WaveDivider topColor="white" bottomColor="oklch(0.95 0.03 240)" />
      <section style={{ backgroundColor: "oklch(0.95 0.03 240)" }} className="py-14 text-center">
        <div className="container">
          <h2 className="text-2xl font-extrabold mb-3" style={{ color: "oklch(0.22 0.01 260)", fontFamily: "'Nunito', sans-serif" }}>
            Can't Find What You're Looking For?
          </h2>
          <p className="text-gray-600 mb-6 max-w-lg mx-auto">Call our team or download our full product brochure for the complete range.</p>
          <div className="flex flex-wrap justify-center gap-3">
            <a href="tel:01702618877" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-white btn-press" style={{ backgroundColor: "oklch(0.32 0.12 255)", fontFamily: "'Nunito', sans-serif" }}>
              <Phone size={15} /> 01702 618877
            </a>
            <Link href="/download-brochure" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-white btn-press" style={{ backgroundColor: "oklch(0.45 0.14 150)", fontFamily: "'Nunito', sans-serif" }}>
              <Download size={15} /> Download Brochure
            </Link>
          </div>
        </div>
      </section>
      <WaveDivider topColor="oklch(0.95 0.03 240)" bottomColor="white" />
    </Layout>
  );
}
