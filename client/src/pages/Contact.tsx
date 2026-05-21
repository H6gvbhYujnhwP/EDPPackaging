/* EDP Packaging — Contact Page with Formspree */
import { useState } from "react";
import Layout from "@/components/Layout";
import { Link } from "wouter";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, AlertCircle } from "lucide-react";

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

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
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
        setFormData({ name: "", company: "", email: "", phone: "", subject: "", message: "" });
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
            <span style={{ color: "oklch(0.32 0.12 255)" }}>Contact Us</span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-black mb-4" style={{ color: "oklch(0.22 0.01 260)", fontFamily: "'Nunito', sans-serif" }}>
            Get in Touch
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl leading-relaxed">
            Whether you need a quote, have a question about our products, or want to discuss a bespoke requirement — our team is here to help.
          </p>
        </div>
        <WaveDivider topColor="transparent" bottomColor="white" />
      </section>

      {/* Contact content */}
      <section className="bg-white py-14">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Contact info */}
            <div className="lg:col-span-1 space-y-6">
              <div>
                <h2 className="text-2xl font-extrabold mb-6" style={{ color: "oklch(0.22 0.01 260)", fontFamily: "'Nunito', sans-serif" }}>
                  Contact Information
                </h2>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4 p-5 rounded-2xl border border-gray-100 hover:border-blue-200 hover:bg-blue-50/30 transition-all">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center text-white flex-shrink-0" style={{ backgroundColor: "oklch(0.32 0.12 255)" }}>
                  <Phone size={20} />
                </div>
                <div>
                  <p className="font-bold text-sm text-gray-500 mb-1">Telephone</p>
                  <a href="tel:01702618877" className="text-xl font-extrabold hover:underline" style={{ color: "oklch(0.32 0.12 255)", fontFamily: "'Nunito', sans-serif" }}>
                    01702 618877
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4 p-5 rounded-2xl border border-gray-100 hover:border-blue-200 hover:bg-blue-50/30 transition-all">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center text-white flex-shrink-0" style={{ backgroundColor: "oklch(0.55 0.14 240)" }}>
                  <Mail size={20} />
                </div>
                <div>
                  <p className="font-bold text-sm text-gray-500 mb-1">Email</p>
                  <a href="mailto:sales@edpgroup.co.uk" className="font-bold hover:underline" style={{ color: "oklch(0.32 0.12 255)" }}>
                    sales@edpgroup.co.uk
                  </a>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-4 p-5 rounded-2xl border border-gray-100 hover:border-blue-200 hover:bg-blue-50/30 transition-all">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center text-white flex-shrink-0" style={{ backgroundColor: "oklch(0.45 0.14 150)" }}>
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="font-bold text-sm text-gray-500 mb-1">Address</p>
                  <address className="not-italic text-gray-700 text-sm leading-relaxed">
                    Unit 1, 40 Comet Way<br />
                    Southend-on-Sea<br />
                    Essex SS2 6GD
                  </address>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-4 p-5 rounded-2xl border border-gray-100 hover:border-blue-200 hover:bg-blue-50/30 transition-all">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center text-white flex-shrink-0" style={{ backgroundColor: "oklch(0.72 0.12 75)" }}>
                  <Clock size={20} />
                </div>
                <div>
                  <p className="font-bold text-sm text-gray-500 mb-1">Opening Hours</p>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Monday – Friday<br />
                    <strong>8:30am – 5:30pm</strong><br />
                    Saturday & Sunday: Closed
                  </p>
                </div>
              </div>
            </div>

            {/* Contact form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-8">
                <h2 className="text-2xl font-extrabold mb-2" style={{ color: "oklch(0.22 0.01 260)", fontFamily: "'Nunito', sans-serif" }}>
                  Send Us a Message
                </h2>
                <p className="text-gray-500 text-sm mb-8">We'll get back to you within one business day.</p>

                {status === "success" ? (
                  <div className="flex flex-col items-center justify-center py-16 text-center">
                    <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4" style={{ backgroundColor: "oklch(0.45 0.14 150 / 0.1)" }}>
                      <CheckCircle size={32} style={{ color: "oklch(0.45 0.14 150)" }} />
                    </div>
                    <h3 className="text-xl font-extrabold mb-2" style={{ fontFamily: "'Nunito', sans-serif" }}>Message Sent!</h3>
                    <p className="text-gray-600">Thank you for getting in touch. We'll be in contact shortly.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="edp-label" htmlFor="name">Full Name *</label>
                        <input id="name" name="name" type="text" required value={formData.name} onChange={handleChange} className="edp-input" placeholder="John Smith" />
                      </div>
                      <div>
                        <label className="edp-label" htmlFor="company">Company Name</label>
                        <input id="company" name="company" type="text" value={formData.company} onChange={handleChange} className="edp-input" placeholder="Your Company Ltd" />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="edp-label" htmlFor="email">Email Address *</label>
                        <input id="email" name="email" type="email" required value={formData.email} onChange={handleChange} className="edp-input" placeholder="john@company.co.uk" />
                      </div>
                      <div>
                        <label className="edp-label" htmlFor="phone">Phone Number</label>
                        <input id="phone" name="phone" type="tel" value={formData.phone} onChange={handleChange} className="edp-input" placeholder="01234 567890" />
                      </div>
                    </div>
                    <div>
                      <label className="edp-label" htmlFor="subject">Subject *</label>
                      <select id="subject" name="subject" required value={formData.subject} onChange={handleChange} className="edp-input">
                        <option value="">Please select...</option>
                        <option value="General Enquiry">General Enquiry</option>
                        <option value="Quote Request">Quote Request</option>
                        <option value="Bespoke Box Enquiry">Bespoke Box Enquiry</option>
                        <option value="Existing Order">Existing Order</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label className="edp-label" htmlFor="message">Message *</label>
                      <textarea id="message" name="message" required rows={5} value={formData.message} onChange={handleChange} className="edp-input resize-none" placeholder="Tell us about your packaging requirements..." />
                    </div>

                    {status === "error" && (
                      <div className="flex items-center gap-2 p-4 rounded-xl bg-red-50 text-red-700 text-sm">
                        <AlertCircle size={16} />
                        Something went wrong. Please try again or call us on 01702 618877.
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={status === "sending"}
                      className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-bold text-white text-base transition-all duration-200 btn-press disabled:opacity-60"
                      style={{ backgroundColor: "oklch(0.32 0.12 255)", fontFamily: "'Nunito', sans-serif" }}
                    >
                      {status === "sending" ? (
                        <>
                          <span className="animate-spin inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send size={16} /> Send Message
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map placeholder */}
      <WaveDivider topColor="white" bottomColor="oklch(0.95 0.03 240)" />
      <section style={{ backgroundColor: "oklch(0.95 0.03 240)" }} className="py-10">
        <div className="container">
          <div className="rounded-2xl overflow-hidden shadow-md" style={{ height: 320 }}>
            <iframe
              title="EDP Packaging Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2479.0!2d0.7!3d51.55!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8d4e2a2e2a2e2%3A0x0!2s40+Comet+Way%2C+Southend-on-Sea+SS2+6GD!5e0!3m2!1sen!2suk!4v1"
              width="100%"
              height="320"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
      <WaveDivider topColor="oklch(0.95 0.03 240)" bottomColor="white" />
    </Layout>
  );
}
