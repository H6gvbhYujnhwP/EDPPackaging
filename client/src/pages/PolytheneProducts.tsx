/* EDP Packaging — Polythene Products Page */
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
    title: "Grey Mailing Bags",
    desc: "Our most popular polythene mailing bag. Strong, lightweight grey polythene bags with a permanent peel & seal closure. Ideal for clothing, soft goods, and e-commerce fulfilment. Available in a huge range of sizes.",
    features: ["Permanent peel & seal", "Lightweight & strong", "E-commerce ready", "Huge range of sizes"],
    img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&auto=format&fit=crop",
  },
  {
    title: "Coloured Mailing Bags",
    desc: "Stand out from the crowd with coloured polythene mailing bags. Available in pink, blue, red, green, purple, and more. Same strong construction as our grey bags with permanent peel & seal.",
    features: ["Multiple colours", "Permanent peel & seal", "Brand differentiation", "Strong construction"],
    img: "https://images.unsplash.com/photo-1553413077-190dd305871c?w=600&auto=format&fit=crop",
  },
  {
    title: "Polythene Sacks",
    desc: "Heavy duty polythene sacks for waste, storage, and industrial use. Available in clear, black, and coloured. Sizes from small bin liners to large industrial sacks. Various gauges available.",
    features: ["Heavy duty grades", "Clear, black & coloured", "Multiple sizes", "Industrial & domestic"],
    img: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&auto=format&fit=crop",
  },
  {
    title: "Layflat Tubing",
    desc: "Polythene layflat tubing supplied in rolls. Ideal for making custom-sized bags, covering long items, and protecting products. Available in a range of widths and gauges.",
    features: ["Custom size bags", "Multiple widths", "Various gauges", "Rolls & cut lengths"],
    img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&auto=format&fit=crop",
  },
  {
    title: "Grip Seal Bags",
    desc: "Resealable grip seal bags in a range of sizes. Ideal for small parts, jewellery, food, and retail. Available in plain and write-on panel versions. Sold in packs of 1,000.",
    features: ["Resealable grip seal", "Plain & write-on panel", "Multiple sizes", "Packs of 1,000"],
    img: "https://images.unsplash.com/photo-1568992687947-868a62a9f521?w=600&auto=format&fit=crop",
  },
  {
    title: "Polythene Sheeting",
    desc: "Heavy duty polythene sheeting on rolls for covering, protecting, and wrapping large items. Available in clear and black, various widths and gauges. Ideal for construction, storage, and packaging.",
    features: ["Clear & black", "Multiple widths", "Construction grade", "Storage & protection"],
    img: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600&auto=format&fit=crop",
  },
];

export default function PolytheneProducts() {
  return (
    <Layout>
      <section style={{ background: "linear-gradient(135deg, oklch(0.95 0.03 240) 0%, oklch(0.93 0.04 80 / 0.15) 100%)" }} className="py-14">
        <div className="container">
          <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
            <Link href="/" className="hover:text-blue-700">Home</Link>
            <span>/</span>
            <span style={{ color: "oklch(0.32 0.12 255)" }}>Polythene Products</span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-black mb-4" style={{ color: "oklch(0.22 0.01 260)", fontFamily: "'Nunito', sans-serif" }}>
            Polythene Products
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl leading-relaxed">
            Mailing bags, polythene sacks, layflat tubing, grip seal bags and polythene sheeting — EDP stocks the full range for all your polythene packaging needs.
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
          <p className="text-gray-600 mb-6 max-w-lg mx-auto">Call us for competitive pricing on all polythene products.</p>
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
