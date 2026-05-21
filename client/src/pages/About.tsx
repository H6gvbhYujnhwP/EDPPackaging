/* EDP Packaging — About Us Page */
import Layout from "@/components/Layout";
import { Link } from "wouter";
import { Phone, Download, CheckCircle, Users, Award, Truck, MapPin } from "lucide-react";

function WaveDivider({ topColor, bottomColor }: { topColor: string; bottomColor: string }) {
  return (
    <div style={{ backgroundColor: topColor }}>
      <svg viewBox="0 0 1440 60" preserveAspectRatio="none" style={{ height: 60, display: "block", width: "100%" }}>
        <path d="M0,30 C360,60 720,0 1080,30 C1260,45 1380,15 1440,30 L1440,60 L0,60 Z" fill={bottomColor} />
      </svg>
    </div>
  );
}

const STATS = [
  { icon: <Award size={28} />, value: "25+", label: "Years in Business" },
  { icon: <Users size={28} />, value: "1000s", label: "Happy Customers" },
  { icon: <Truck size={28} />, value: "UK Wide", label: "Delivery Coverage" },
  { icon: <MapPin size={28} />, value: "Essex", label: "UK Manufacturer" },
];

const VALUES = [
  {
    num: "01",
    title: "Customer Service",
    desc: "Every customer is treated equally — you will never feel second best. At EDP we ensure the customer is king, not commission. We are proud of our reputation for excellent customer service and aim to maintain it with every order.",
  },
  {
    num: "02",
    title: "No Hard Sell",
    desc: "We treat you as people, not customers. We don't try to sell you products you don't need. It's our job to keep your costs as low as possible. If you don't need it, we won't try to sell it to you.",
  },
  {
    num: "03",
    title: "Personal Touch",
    desc: "We know our customers and like to think our customers know us. We can offer to hold stock for you at NO EXTRA COST. This means you can order in bulk to get the best price, and we'll deliver when you need it.",
  },
  {
    num: "04",
    title: "Flexibility",
    desc: "Delivered when you need it, not when we want to deliver it. We can usually accommodate your delivery requirements, even same day in some cases. We understand that your business doesn't always run to a fixed schedule.",
  },
  {
    num: "05",
    title: "The EDP Price Promise",
    desc: "If our costs go down, so do yours. We pass on savings to our customers as a matter of course. Do you get that service from anyone else? We don't think so. It's just one of the ways we show we value your business.",
  },
];

export default function About() {
  return (
    <Layout>
      {/* Hero */}
      <section style={{ background: "linear-gradient(135deg, oklch(0.95 0.03 240) 0%, oklch(0.93 0.04 80 / 0.15) 100%)" }} className="py-14">
        <div className="container">
          <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
            <Link href="/" className="hover:text-blue-700">Home</Link>
            <span>/</span>
            <span style={{ color: "oklch(0.32 0.12 255)" }}>About Us</span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-black mb-4" style={{ color: "oklch(0.22 0.01 260)", fontFamily: "'Nunito', sans-serif" }}>
            About EDP Packaging
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl leading-relaxed">
            A family-owned UK packaging manufacturer and distributor with over 25 years of experience. Based in Southend-on-Sea, Essex — supplying businesses across the UK.
          </p>
        </div>
        <WaveDivider topColor="transparent" bottomColor="white" />
      </section>

      {/* Stats */}
      <section className="bg-white py-12">
        <div className="container">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {STATS.map((stat) => (
              <div key={stat.label} className="text-center p-6 rounded-2xl border border-gray-100 hover:border-blue-200 hover:bg-blue-50/30 transition-all duration-200">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-white mx-auto mb-4" style={{ backgroundColor: "oklch(0.32 0.12 255)" }}>
                  {stat.icon}
                </div>
                <div className="text-3xl font-black mb-1" style={{ color: "oklch(0.32 0.12 255)", fontFamily: "'Nunito', sans-serif" }}>{stat.value}</div>
                <div className="text-sm text-gray-600 font-semibold">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Our Story */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-black mb-5" style={{ color: "oklch(0.22 0.01 260)", fontFamily: "'Nunito', sans-serif" }}>Our Story</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  EDP was founded in 2000 by brothers Mark and Terry Willett and continues as a family owned and operated business. Our management team have extensive experience in their respective industry fields and work closely with our customers and suppliers.
                </p>
                <p>
                  From our Southend-on-Sea warehouse and distribution centre, we supply products nationwide across the UK with deliveries available on our own fleet and with specialist transport partners including a nationwide pallet haulier and next day parcel carrier.
                </p>
                <p>
                  We are a manufacturer of corrugated cardboard boxes as well as a distributor of a wide range of packaging materials. This means we can offer our customers the best of both worlds — the quality and flexibility of a manufacturer with the breadth of range of a distributor.
                </p>
                <p>
                  Our customers range from small independent businesses to large national companies. We treat every customer with the same level of care and attention, regardless of the size of their order.
                </p>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663048135071/5DHnb8eJT4kecrj9sBDMU6/edp_hero_warehouse-23gznrcsesHHg7Mp72Mkcj.webp"
                alt="EDP warehouse and distribution centre — Southend-on-Sea"
                className="w-full h-80 object-cover"
              />
            </div>
          </div>

          {/* What We Do */}
          <div className="bg-blue-50 rounded-3xl p-8 lg:p-12 mb-16">
            <h2 className="text-3xl font-black mb-6" style={{ color: "oklch(0.22 0.01 260)", fontFamily: "'Nunito', sans-serif" }}>What We Do</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "Manufacture corrugated cardboard boxes to your exact specification",
                "Supply a complete range of packaging materials from stock",
                "Deliver nationwide on our own fleet and specialist carriers",
                "Hold stock for customers at no extra cost",
                "Offer bespoke box manufacturing from 1 to 100,000 boxes",
                "Provide same-day delivery in many cases",
                "Pass on cost savings to customers as a matter of course",
                "Treat every customer with the same level of care and attention",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle size={18} style={{ color: "oklch(0.45 0.14 150)" }} className="flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-sm leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <WaveDivider topColor="white" bottomColor="oklch(0.95 0.03 240)" />
      <section style={{ backgroundColor: "oklch(0.95 0.03 240)" }} className="py-16">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black mb-3" style={{ color: "oklch(0.22 0.01 260)", fontFamily: "'Nunito', sans-serif" }}>Our Values</h2>
            <p className="text-gray-600 max-w-xl mx-auto">The five key principles that define how we do business — and why our customers keep coming back.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {VALUES.map((item) => (
              <div key={item.num} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="text-4xl font-black mb-3" style={{ color: "oklch(0.72 0.12 75)", fontFamily: "'Nunito', sans-serif" }}>{item.num}</div>
                <h3 className="text-lg font-extrabold mb-2" style={{ color: "oklch(0.32 0.12 255)", fontFamily: "'Nunito', sans-serif" }}>{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <WaveDivider topColor="oklch(0.95 0.03 240)" bottomColor="oklch(0.32 0.12 255)" />
      <section style={{ backgroundColor: "oklch(0.32 0.12 255)" }} className="py-14 text-white text-center">
        <div className="container">
          <h2 className="text-3xl font-black mb-4" style={{ fontFamily: "'Nunito', sans-serif" }}>Ready to Work With EDP?</h2>
          <p className="text-blue-100 text-lg max-w-xl mx-auto mb-8">Get in touch today for a no-obligation quote or download our full product brochure.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="tel:01702618877" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold bg-white btn-press" style={{ color: "oklch(0.32 0.12 255)", fontFamily: "'Nunito', sans-serif" }}>
              <Phone size={15} /> 01702 618877
            </a>
            <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold border-2 border-white text-white btn-press" style={{ fontFamily: "'Nunito', sans-serif" }}>
              Contact Us
            </Link>
            <Link href="/download-brochure" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-white btn-press" style={{ backgroundColor: "oklch(0.45 0.14 150)", fontFamily: "'Nunito', sans-serif" }}>
              <Download size={15} /> Download Brochure
            </Link>
          </div>
        </div>
      </section>
      <WaveDivider topColor="oklch(0.32 0.12 255)" bottomColor="white" />
    </Layout>
  );
}
