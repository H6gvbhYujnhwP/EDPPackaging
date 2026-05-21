/* EDP Packaging — Bubble, Foam & Paper Page */
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
    title: "Bubblewrap Rolls",
    desc: "Small bubble and large bubble bubblewrap rolls in a range of widths and lengths. Ideal for wrapping fragile items, glassware, ceramics, and electronics. Available in perforated rolls for easy tearing.",
    features: ["Small & large bubble", "Multiple widths & lengths", "Perforated rolls available", "Excellent protection"],
    img: "https://d2xsxph8kpxj0f.cloudfront.net/310519663048135071/5DHnb8eJT4kecrj9sBDMU6/edp_bubblewrap-YUcxvPXMjDJTcXxhsnQkfU.webp",
  },
  {
    title: "Foam Rolls & Sheets",
    desc: "Polyethylene foam rolls and sheets provide lightweight, non-abrasive protection. Ideal for polished surfaces, glassware, and delicate items. Available in a range of thicknesses from 1mm to 10mm.",
    features: ["Non-abrasive surface", "Multiple thicknesses", "Lightweight protection", "Rolls & sheets available"],
    img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&auto=format&fit=crop",
  },
  {
    title: "Corrugated Paper Rolls",
    desc: "Corrugated kraft paper rolls for wrapping and cushioning. Ideal for wrapping items individually before boxing. Provides excellent protection and is 100% recyclable.",
    features: ["100% recyclable", "Excellent cushioning", "Multiple widths", "Eco-friendly alternative"],
    img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&auto=format&fit=crop",
  },
  {
    title: "Kraft Paper Rolls",
    desc: "Strong brown kraft paper rolls for wrapping, void fill, and interleaving. Available in a range of weights from 70gsm to 120gsm. Ideal for parcels, wrapping, and protective packaging.",
    features: ["70gsm to 120gsm", "Wrapping & void fill", "Strong & durable", "Multiple widths"],
    img: "https://images.unsplash.com/photo-1553413077-190dd305871c?w=600&auto=format&fit=crop",
  },
  {
    title: "Void Fill & Air Bags",
    desc: "Inflatable air bags and void fill systems to protect products in transit. Air bags are inflated on demand and provide excellent void fill for boxes. Reduces packaging costs and waste.",
    features: ["Inflatable on demand", "Reduces packaging waste", "Excellent void fill", "Cost effective"],
    img: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&auto=format&fit=crop",
  },
  {
    title: "Tissue Paper & Crinkle Paper",
    desc: "Acid-free tissue paper for wrapping delicate items and retail presentation. Crinkle paper shreds for gift box filling and retail packaging. Available in white and a range of colours.",
    features: ["Acid-free tissue paper", "Crinkle paper shreds", "White & colours", "Retail presentation"],
    img: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600&auto=format&fit=crop",
  },
];

export default function BubbleFoamPaper() {
  return (
    <Layout>
      <section style={{ background: "linear-gradient(135deg, oklch(0.95 0.03 240) 0%, oklch(0.93 0.04 80 / 0.15) 100%)" }} className="py-14">
        <div className="container">
          <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
            <Link href="/" className="hover:text-blue-700">Home</Link>
            <span>/</span>
            <span style={{ color: "oklch(0.32 0.12 255)" }}>Bubble, Foam & Paper</span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-black mb-4" style={{ color: "oklch(0.22 0.01 260)", fontFamily: "'Nunito', sans-serif" }}>
            Bubble, Foam & Paper
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl leading-relaxed">
            Protect your products in transit with our full range of bubblewrap, foam, corrugated paper, kraft paper, and void fill solutions.
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
          <h2 className="text-2xl font-extrabold mb-3" style={{ color: "oklch(0.22 0.01 260)", fontFamily: "'Nunito', sans-serif" }}>Need Help Choosing?</h2>
          <p className="text-gray-600 mb-6 max-w-lg mx-auto">Our team is here to help you find the right protective packaging for your needs.</p>
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
