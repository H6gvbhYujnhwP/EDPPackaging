/* EDP Packaging — Removal Packaging Page */
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
    title: "Removal Boxes",
    desc: "Strong double wall removal boxes in a range of sizes — small, medium, large, and extra large. Ideal for house moves, office relocations, and storage. Sold flat-packed for easy storage before use.",
    features: ["Double wall strength", "Small to XL sizes", "Flat-packed", "House & office moves"],
    img: "https://images.unsplash.com/photo-1600518464441-9154a4dea21b?w=600&auto=format&fit=crop",
  },
  {
    title: "Wardrobe Cartons",
    desc: "Tall wardrobe cartons with a hanging rail included. Allows clothes to be transported on hangers without creasing. Ideal for house moves and storage. Available in single and double widths.",
    features: ["Hanging rail included", "Clothes stay on hangers", "No creasing", "Single & double width"],
    img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&auto=format&fit=crop",
  },
  {
    title: "Mattress Covers",
    desc: "Polythene mattress covers to protect mattresses during moves and storage. Available for single, double, king, and super king mattresses. Also available: sofa covers and chair covers.",
    features: ["All mattress sizes", "Sofa & chair covers", "Waterproof protection", "Storage & moving"],
    img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&auto=format&fit=crop",
  },
  {
    title: "Bubblewrap for Moving",
    desc: "Large bubble bubblewrap rolls specifically for house moves. Ideal for wrapping furniture, ornaments, glassware, and fragile items. Available in large rolls for maximum coverage.",
    features: ["Large bubble grade", "Large rolls", "Furniture & fragile items", "Maximum coverage"],
    img: "https://d2xsxph8kpxj0f.cloudfront.net/310519663048135071/5DHnb8eJT4kecrj9sBDMU6/edp_bubblewrap-YUcxvPXMjDJTcXxhsnQkfU.webp",
  },
  {
    title: "Complete Moving Kits",
    desc: "Everything you need for a house move in one convenient kit. Includes a selection of boxes, bubblewrap, packing tape, marker pens, and labels. Available in small, medium, and large kit sizes.",
    features: ["All-in-one kit", "Boxes, wrap & tape included", "Small, medium & large", "Marker pens & labels"],
    img: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&auto=format&fit=crop",
  },
  {
    title: "Packing Paper & Tissue",
    desc: "Unprinted newsprint packing paper for wrapping crockery, glassware, and breakables. Tissue paper for delicate items. Available in reams and rolls.",
    features: ["Unprinted newsprint", "Tissue paper available", "Crockery & glassware", "Reams & rolls"],
    img: "https://images.unsplash.com/photo-1553413077-190dd305871c?w=600&auto=format&fit=crop",
  },
];

export default function RemovalPackaging() {
  return (
    <Layout>
      <section style={{ background: "linear-gradient(135deg, oklch(0.95 0.03 240) 0%, oklch(0.93 0.04 80 / 0.15) 100%)" }} className="py-14">
        <div className="container">
          <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
            <Link href="/" className="hover:text-blue-700">Home</Link>
            <span>/</span>
            <span style={{ color: "oklch(0.32 0.12 255)" }}>Removal Packaging</span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-black mb-4" style={{ color: "oklch(0.22 0.01 260)", fontFamily: "'Nunito', sans-serif" }}>
            Removal Packaging
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl leading-relaxed">
            Moving house or office? EDP stocks everything you need — from removal boxes and wardrobe cartons to mattress covers and complete moving kits.
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
          <h2 className="text-2xl font-extrabold mb-3" style={{ color: "oklch(0.22 0.01 260)", fontFamily: "'Nunito', sans-serif" }}>Planning a Move?</h2>
          <p className="text-gray-600 mb-6 max-w-lg mx-auto">Call us for advice on the right products and quantities for your move.</p>
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
