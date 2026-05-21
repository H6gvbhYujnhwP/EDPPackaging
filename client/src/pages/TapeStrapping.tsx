/* EDP Packaging — Tape & Strapping Page */
import Layout from "@/components/Layout";
import { Link } from "wouter";
import { Phone, Download, CheckCircle } from "lucide-react";

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
    title: "Brown Packing Tape",
    desc: "High quality brown polypropylene packing tape in standard and heavy duty grades. Available in 48mm and 72mm widths, in rolls of 66m. Supplied individually or in carton quantities for bulk savings.",
    features: ["48mm & 72mm widths", "66m rolls", "Standard & heavy duty", "Bulk carton pricing"],
    img: "https://d2xsxph8kpxj0f.cloudfront.net/310519663048135071/5DHnb8eJT4kecrj9sBDMU6/edp_tape_strapping-fPdh8Mejc6CHqCijsM7MrE.webp",
  },
  {
    title: "Clear Packing Tape",
    desc: "Crystal clear polypropylene packing tape. Ideal where a neat, invisible finish is required. Available in 48mm width, 66m rolls. Supplied with or without tape dispensers.",
    features: ["Crystal clear finish", "48mm width", "Dispensers available", "Carton quantities"],
    img: "https://images.unsplash.com/photo-1553413077-190dd305871c?w=600&auto=format&fit=crop",
  },
  {
    title: "Warning & Printed Tapes",
    desc: "Printed warning tapes including 'Fragile', 'Handle with Care', 'This Way Up', and custom printed options. Also available: yellow/black hazard tape, red/white barrier tape.",
    features: ["Fragile & Handle with Care", "This Way Up", "Custom print available", "Hazard tape"],
    img: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&auto=format&fit=crop",
  },
  {
    title: "Gummed Paper Tape",
    desc: "Water-activated gummed paper tape for a secure, tamper-evident seal. Available in plain and reinforced (crossweave) grades. Ideal for export and high-security applications.",
    features: ["Water-activated", "Tamper-evident seal", "Plain & reinforced", "Export grade"],
    img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&auto=format&fit=crop",
  },
  {
    title: "Pallet Wrap / Stretch Film",
    desc: "Machine and hand pallet wrap in standard and heavy duty grades. Available in clear and black (for security). Core sizes: 25mm and 76mm. Widths: 400mm and 500mm.",
    features: ["Hand & machine grades", "Clear & black", "25mm & 76mm cores", "Heavy duty available"],
    img: "https://images.unsplash.com/photo-1568992687947-868a62a9f521?w=600&auto=format&fit=crop",
  },
  {
    title: "Strapping & Tools",
    desc: "Polypropylene and polyester strapping in a range of widths and strengths. Complete with buckles, seals, and tensioning tools. Ideal for securing pallets and heavy loads.",
    features: ["PP & polyester grades", "Multiple widths", "Buckles & seals included", "Tensioning tools"],
    img: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600&auto=format&fit=crop",
  },
];

export default function TapeStrapping() {
  return (
    <Layout>
      <section style={{ background: "linear-gradient(135deg, oklch(0.95 0.03 240) 0%, oklch(0.93 0.04 80 / 0.15) 100%)" }} className="py-14">
        <div className="container">
          <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
            <Link href="/" className="hover:text-blue-700">Home</Link>
            <span>/</span>
            <span style={{ color: "oklch(0.32 0.12 255)" }}>Tape & Strapping</span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-black mb-4" style={{ color: "oklch(0.22 0.01 260)", fontFamily: "'Nunito', sans-serif" }}>
            Tape & Strapping
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl leading-relaxed">
            From brown packing tape to pallet wrap and strapping tools — EDP stocks everything you need to seal, secure and ship your goods safely.
          </p>
        </div>
        <WaveDivider topColor="transparent" bottomColor="white" />
      </section>

      <section className="bg-white py-12">
        <div className="container">
          <div className="space-y-16">
            {PRODUCTS.map((product, i) => (
              <div key={product.title} className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                  <img src={product.img} alt={product.title} className="w-full h-72 object-cover rounded-2xl shadow-md" />
                </div>
                <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                  <h2 className="text-2xl font-extrabold mb-3" style={{ color: "oklch(0.32 0.12 255)", fontFamily: "'Nunito', sans-serif" }}>{product.title}</h2>
                  <p className="text-gray-600 leading-relaxed mb-5">{product.desc}</p>
                  <ul className="space-y-2 mb-6">
                    {product.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm text-gray-700">
                        <CheckCircle size={16} style={{ color: "oklch(0.45 0.14 150)" }} className="flex-shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <a href="tel:01702618877" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-white text-sm btn-press" style={{ backgroundColor: "oklch(0.32 0.12 255)", fontFamily: "'Nunito', sans-serif" }}>
                    <Phone size={14} /> Enquire: 01702 618877
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <WaveDivider topColor="white" bottomColor="oklch(0.95 0.03 240)" />
      <section style={{ backgroundColor: "oklch(0.95 0.03 240)" }} className="py-14 text-center">
        <div className="container">
          <h2 className="text-2xl font-extrabold mb-3" style={{ color: "oklch(0.22 0.01 260)", fontFamily: "'Nunito', sans-serif" }}>Need Bulk Pricing?</h2>
          <p className="text-gray-600 mb-6 max-w-lg mx-auto">Call us for competitive bulk pricing on all tape and strapping products.</p>
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
