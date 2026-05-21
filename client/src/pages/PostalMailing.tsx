/* EDP Packaging — Postal & Mailing Page */
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
    title: "Postal Boxes",
    desc: "Strong, self-assembly postal boxes ideal for e-commerce, gifts, and retail. Available in white and brown kraft in a wide range of sizes. Easy to assemble with no tape required.",
    features: ["Self-assembly", "White & brown available", "E-commerce ready", "Multiple sizes"],
    img: "https://d2xsxph8kpxj0f.cloudfront.net/310519663048135071/5DHnb8eJT4kecrj9sBDMU6/edp_mailing_products-kef5ckBSLtpRETCP2yGNVo.webp",
  },
  {
    title: "Bookpacks & Bookwraps",
    desc: "Rigid bookwrap mailers that self-adjust to fit the contents. Ideal for books, DVDs, documents and flat items. No tape required — the self-locking design keeps contents secure.",
    features: ["Self-adjusting size", "No tape required", "Rigid protection", "Ideal for books & documents"],
    img: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=600&auto=format&fit=crop",
  },
  {
    title: "PiP (Packet in Post) Boxes",
    desc: "Designed to meet Royal Mail's Packet in Post size requirements. These slim-line boxes are perfect for items that need to go through the post at the most economical rate.",
    features: ["Royal Mail PiP compliant", "Economical postage rates", "Slim-line design", "Various sizes"],
    img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&auto=format&fit=crop",
  },
  {
    title: "Board Backed Envelopes",
    desc: "Rigid board-backed envelopes to protect documents, photos, and artwork in the post. Available in a range of sizes with 'Do Not Bend' printed on the front.",
    features: ["Rigid board backing", "'Do Not Bend' printed", "Protects photos & documents", "Range of sizes"],
    img: "https://images.unsplash.com/photo-1579208575657-c595a05383b7?w=600&auto=format&fit=crop",
  },
  {
    title: "Bubble-Lined Bags & Jiffy Bags",
    desc: "Padded bubble-lined envelopes for fragile items. Available in gold kraft, white, and clear. Jiffy bags provide excellent protection for jewellery, electronics, and small fragile items.",
    features: ["Bubble-lined protection", "Gold, white & clear available", "Peel & seal closure", "Multiple sizes"],
    img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&auto=format&fit=crop",
  },
  {
    title: "Polythene Mailers",
    desc: "Lightweight, waterproof polythene mailing bags ideal for clothing, soft goods, and non-fragile items. Available in grey, white, and a range of colours. Permanent peel & seal closure.",
    features: ["Waterproof", "Permanent peel & seal", "Lightweight", "Grey, white & colours"],
    img: "https://images.unsplash.com/photo-1553413077-190dd305871c?w=600&auto=format&fit=crop",
  },
];

export default function PostalMailing() {
  return (
    <Layout>
      <section style={{ background: "linear-gradient(135deg, oklch(0.95 0.03 240) 0%, oklch(0.93 0.04 80 / 0.15) 100%)" }} className="py-14">
        <div className="container">
          <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
            <Link href="/" className="hover:text-blue-700">Home</Link>
            <span>/</span>
            <span style={{ color: "oklch(0.32 0.12 255)" }}>Postal & Mailing</span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-black mb-4" style={{ color: "oklch(0.22 0.01 260)", fontFamily: "'Nunito', sans-serif" }}>
            Postal & Mailing Products
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl leading-relaxed">
            Everything you need to send goods safely through the post. From postal boxes to bubble-lined bags — EDP has your mailing needs covered.
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
          <p className="text-gray-600 mb-6 max-w-lg mx-auto">Our team is here to help you find the right product for your needs.</p>
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
