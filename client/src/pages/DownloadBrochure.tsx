/* EDP Packaging — Download Brochure Page (Gated with Formspree) */
import { useState } from "react";
import Layout from "@/components/Layout";
import { Link } from "wouter";
import { Download, CheckCircle, AlertCircle, FileText, Package, Truck, Star } from "lucide-react";

function WaveDivider({ topColor, bottomColor }: { topColor: string; bottomColor: string }) {
  return (
    <div style={{ backgroundColor: topColor }}>
      <svg viewBox="0 0 1440 60" preserveAspectRatio="none" style={{ height: 60, display: "block", width: "100%" }}>
        <path d="M0,30 C360,60 720,0 1080,30 C1260,45 1380,15 1440,30 L1440,60 L0,60 Z" fill={bottomColor} />
      </svg>
    </div>
  );
}

const FORMSPREE_ID = "xeedgkvy";
const BROCHURE_URL = "/manus-storage/edp_brochure_af8ab3a3.pdf";

const BROCHURE_INCLUDES = [
  { icon: <Package size={18} />, text: "Full cardboard box range — single wall, double wall, bespoke" },
  { icon: <FileText size={18} />, text: "Postal & mailing products — boxes, bags, envelopes" },
  { icon: <Package size={18} />, text: "Protective packaging — bubblewrap, foam, paper, void fill" },
  { icon: <Package size={18} />, text: "Tape & strapping — packing tape, pallet wrap, strapping tools" },
  { icon: <Package size={18} />, text: "Polythene products — mailing bags, sacks, grip seal bags" },
  { icon: <Truck size={18} />, text: "Removal packaging — moving boxes, wardrobe cartons, kits" },
  { icon: <Star size={18} />, text: "Pricing guide and bulk discount information" },
];

export default function DownloadBrochure() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    _subject: "EDP Brochure Download Request",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setStatus("success");
        // Trigger download
        const a = document.createElement("a");
        a.href = BROCHURE_URL;
        a.download = "EDP-Packaging-Product-Guide.pdf";
        a.target = "_blank";
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <Layout>
      {/* Hero */}
      <section style={{ background: "linear-gradient(135deg, oklch(0.95 0.03 240) 0%, oklch(0.93 0.04 80 / 0.15) 100%)" }} className="py-14">
        <div className="container">
          <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
            <Link href="/" className="hover:text-blue-700">Home</Link>
            <span>/</span>
            <span style={{ color: "oklch(0.32 0.12 255)" }}>Download Brochure</span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-black mb-4" style={{ color: "oklch(0.22 0.01 260)", fontFamily: "'Nunito', sans-serif" }}>
            Download Our Free Product Guide
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl leading-relaxed">
            Get our complete packaging product guide — covering the full range of boxes, mailing products, protective packaging, tape, polythene and more.
          </p>
        </div>
        <WaveDivider topColor="transparent" bottomColor="white" />
      </section>

      {/* Main content */}
      <section className="bg-white py-14">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* What's inside */}
            <div>
              <div className="rounded-3xl overflow-hidden shadow-xl mb-8">
                <img
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663048135071/5DHnb8eJT4kecrj9sBDMU6/edp_boxes_group-MGQYTcDAtHjebR3UDzQHu8.webp"
                  alt="EDP Packaging Product Guide"
                  className="w-full h-64 object-cover"
                />
                <div className="p-6" style={{ backgroundColor: "oklch(0.32 0.12 255)" }}>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center">
                      <FileText size={24} className="text-white" />
                    </div>
                    <div>
                      <p className="text-white font-extrabold text-lg" style={{ fontFamily: "'Nunito', sans-serif" }}>EDP Packaging Product Guide</p>
                      <p className="text-blue-200 text-sm">Complete product range — PDF format</p>
                    </div>
                  </div>
                </div>
              </div>

              <h2 className="text-2xl font-extrabold mb-5" style={{ color: "oklch(0.22 0.01 260)", fontFamily: "'Nunito', sans-serif" }}>
                What's Inside the Guide
              </h2>
              <ul className="space-y-3">
                {BROCHURE_INCLUDES.map((item) => (
                  <li key={item.text} className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: "oklch(0.32 0.12 255 / 0.1)", color: "oklch(0.32 0.12 255)" }}>
                      {item.icon}
                    </div>
                    <span className="text-gray-700 text-sm leading-relaxed pt-1">{item.text}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 p-5 rounded-2xl" style={{ backgroundColor: "oklch(0.45 0.14 150 / 0.08)", border: "1px solid oklch(0.45 0.14 150 / 0.2)" }}>
                <p className="text-sm text-gray-700 leading-relaxed">
                  <strong style={{ color: "oklch(0.45 0.14 150)" }}>Free to download.</strong> Simply fill in your details and your PDF will download automatically. We may occasionally contact you with relevant product updates — you can unsubscribe at any time.
                </p>
              </div>
            </div>

            {/* Form */}
            <div>
              <div className="bg-white rounded-3xl border border-gray-100 shadow-lg p-8">
                {status === "success" ? (
                  <div className="flex flex-col items-center justify-center py-12 text-center">
                    <div className="w-20 h-20 rounded-full flex items-center justify-center mb-5" style={{ backgroundColor: "oklch(0.45 0.14 150 / 0.1)" }}>
                      <CheckCircle size={40} style={{ color: "oklch(0.45 0.14 150)" }} />
                    </div>
                    <h3 className="text-2xl font-extrabold mb-3" style={{ fontFamily: "'Nunito', sans-serif" }}>Your Download Has Started!</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      Thank you! Your product guide should be downloading now. If it doesn't start automatically, click the button below.
                    </p>
                    <a
                      href={BROCHURE_URL}
                      download="EDP-Packaging-Product-Guide.pdf"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-white btn-press"
                      style={{ backgroundColor: "oklch(0.45 0.14 150)", fontFamily: "'Nunito', sans-serif" }}
                    >
                      <Download size={16} /> Download Again
                    </a>
                  </div>
                ) : (
                  <>
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-12 h-12 rounded-xl flex items-center justify-center text-white" style={{ backgroundColor: "oklch(0.45 0.14 150)" }}>
                        <Download size={22} />
                      </div>
                      <div>
                        <h2 className="text-xl font-extrabold" style={{ color: "oklch(0.22 0.01 260)", fontFamily: "'Nunito', sans-serif" }}>Get Your Free Guide</h2>
                        <p className="text-gray-500 text-sm">Fill in your details to download instantly</p>
                      </div>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <label className="edp-label" htmlFor="dl-name">Full Name *</label>
                        <input id="dl-name" name="name" type="text" required value={formData.name} onChange={handleChange} className="edp-input" placeholder="John Smith" />
                      </div>
                      <div>
                        <label className="edp-label" htmlFor="dl-company">Company Name *</label>
                        <input id="dl-company" name="company" type="text" required value={formData.company} onChange={handleChange} className="edp-input" placeholder="Your Company Ltd" />
                      </div>
                      <div>
                        <label className="edp-label" htmlFor="dl-email">Email Address *</label>
                        <input id="dl-email" name="email" type="email" required value={formData.email} onChange={handleChange} className="edp-input" placeholder="john@company.co.uk" />
                      </div>
                      <div>
                        <label className="edp-label" htmlFor="dl-phone">Phone Number</label>
                        <input id="dl-phone" name="phone" type="tel" value={formData.phone} onChange={handleChange} className="edp-input" placeholder="01234 567890" />
                      </div>

                      {status === "error" && (
                        <div className="flex items-center gap-2 p-4 rounded-xl bg-red-50 text-red-700 text-sm">
                          <AlertCircle size={16} />
                          Something went wrong. Please try again or call 01702 618877.
                        </div>
                      )}

                      <button
                        type="submit"
                        disabled={status === "sending"}
                        className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-bold text-white text-base transition-all duration-200 btn-press disabled:opacity-60 mt-2"
                        style={{ backgroundColor: "oklch(0.45 0.14 150)", fontFamily: "'Nunito', sans-serif" }}
                      >
                        {status === "sending" ? (
                          <>
                            <span className="animate-spin inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full" />
                            Processing...
                          </>
                        ) : (
                          <>
                            <Download size={18} /> Download Free Product Guide
                          </>
                        )}
                      </button>

                      <p className="text-xs text-gray-400 text-center leading-relaxed">
                        By downloading you agree to receive occasional product updates from EDP. We respect your privacy and will never share your data.
                      </p>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <WaveDivider topColor="white" bottomColor="oklch(0.95 0.03 240)" />
      <section style={{ backgroundColor: "oklch(0.95 0.03 240)" }} className="py-12 text-center">
        <div className="container">
          <h2 className="text-2xl font-extrabold mb-3" style={{ color: "oklch(0.22 0.01 260)", fontFamily: "'Nunito', sans-serif" }}>Prefer to Talk?</h2>
          <p className="text-gray-600 mb-6">Our team is happy to talk through your packaging requirements over the phone.</p>
          <a href="tel:01702618877" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-white btn-press" style={{ backgroundColor: "oklch(0.32 0.12 255)", fontFamily: "'Nunito', sans-serif" }}>
            Call 01702 618877
          </a>
        </div>
      </section>
      <WaveDivider topColor="oklch(0.95 0.03 240)" bottomColor="white" />
    </Layout>
  );
}
