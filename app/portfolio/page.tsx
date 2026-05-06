"use client";

import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import {
  Globe,
  Smartphone,
  ArrowUpRight,
  Layers3,
  Sparkles,
} from "lucide-react";

export default function Portfolio() {
  const { lang } = useLanguage();
  const [filter, setFilter] = useState("All");

  const projects = [
    {
      title: {
        en: "PulseCare Telehealth Platform",
        ur: "پلس کیئر ٹیلی ہیلتھ پلیٹ فارم",
      },
      category: "Mobile",
      desc: {
        en: "AI-powered telehealth system enabling remote consultations, patient tracking, real-time monitoring and intelligent health reports with predictive analytics.",
        ur: "ایک AI پر مبنی ٹیلی ہیلتھ سسٹم جو مریضوں کی دور سے نگرانی، آن لائن مشاورت اور اسمارٹ ہیلتھ رپورٹس فراہم کرتا ہے۔",
      },
      impact: {
        en: "Reduced patient response time by 65% and improved consultation efficiency globally.",
        ur: "مریضوں کے رسپانس ٹائم میں 65% کمی اور میڈیکل کارکردگی میں نمایاں بہتری۔",
      },
    },

    {
      title: {
        en: "CityLink Mobility System",
        ur: "سٹی لنک موبیلیٹی سسٹم",
      },
      category: "Mobile",
      desc: {
        en: "Smart transport ecosystem with real-time ride tracking, route optimization, and AI-based traffic prediction.",
        ur: "ایک اسمارٹ ٹرانسپورٹ سسٹم جو ریئل ٹائم ٹریکنگ اور روٹ آپٹیمائزیشن فراہم کرتا ہے۔",
      },
      impact: {
        en: "Improved ride efficiency and reduced booking delays by 40%.",
        ur: "سفر کی کارکردگی بہتر اور بکنگ میں 40% کمی۔",
      },
    },

    {
      title: {
        en: "HarvestPay Fintech App",
        ur: "ہارویسٹ پے فِن ٹیک ایپ",
      },
      category: "Mobile",
      desc: {
        en: "Secure mobile payment system with wallet, instant transfers, and financial analytics dashboard.",
        ur: "ایک محفوظ موبائل پیمنٹ سسٹم جس میں والٹ، ٹرانسفرز اور فنانشل اینالیٹکس شامل ہیں۔",
      },
      impact: {
        en: "Processed 100K+ transactions with 99.9% uptime reliability.",
        ur: "100K سے زائد ٹرانزیکشنز 99.9% اپ ٹائم کے ساتھ مکمل ہوئیں۔",
      },
    },

    {
      title: {
        en: "Aurora Wealth Dashboard",
        ur: "اورورا ویلتھ ڈیش بورڈ",
      },
      category: "Web",
      desc: {
        en: "Advanced investment dashboard with AI insights, portfolio tracking, and financial forecasting.",
        ur: "ایک جدید انویسٹمنٹ ڈیش بورڈ جو AI انسائٹس اور پورٹ فولیو ٹریکنگ فراہم کرتا ہے۔",
      },
      impact: {
        en: "Improved investment decision accuracy by 50%.",
        ur: "سرمایہ کاری کے فیصلوں کی درستگی میں 50% اضافہ۔",
      },
    },

    {
      title: {
        en: "Mira Travel Marketplace",
        ur: "میرا ٹریول مارکیٹ پلیس",
      },
      category: "Web",
      desc: {
        en: "Global travel booking platform with hotels, flights, and experiences integration.",
        ur: "دنیا بھر کے ہوٹل، فلائٹس اور ٹورز بک کرنے کا جدید پلیٹ فارم۔",
      },
      impact: {
        en: "Increased booking conversions by 55% after optimization.",
        ur: "بکنگ کنورژن میں 55% اضافہ۔",
      },
    },

    {
      title: {
        en: "Verdant Clinic System",
        ur: "ورڈنٹ کلینک سسٹم",
      },
      category: "Web",
      desc: {
        en: "Complete healthcare management system for clinics, patient records, and digital appointments.",
        ur: "کلینکس کے لیے مکمل ہیلتھ کیئر مینجمنٹ سسٹم۔",
      },
      impact: {
        en: "Digitized operations for 30+ clinics successfully.",
        ur: "30+ کلینکس کو مکمل طور پر ڈیجیٹل بنایا گیا۔",
      },
    },
  ];

  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((p) => p.category === filter);

  return (
    <main className="min-h-screen bg-[#020817] text-white overflow-hidden">

      {/* HERO */}
      <section className="relative pt-34 pb-16 px-5">

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(37,99,235,0.18),transparent_40%)]" />

        <div className="max-w-7xl mx-auto relative z-10 text-center">

          <button
            className="mb-6 border border-blue-500/30 bg-blue-500/10
            text-blue-300 text-sm px-4 py-2 rounded-full"
          >
            {lang === "en"
              ? "Creative Digital Portfolio"
              : "کریئیٹو ڈیجیٹل پورٹ فولیو"}
          </button>

          <h1
            className="text-4xl sm:text-5xl lg:text-5xl
            font-black leading-tight max-w-5xl mx-auto"
          >
            {lang === "en"
              ? "Engineering Digital Excellence"
              : "ڈیجیٹل ایکسیلنس کی تخلیق"}
          </h1>

          <p
            className="mt-6 text-gray-400 max-w-4xl
            mx-auto text-base sm:text-lg leading-8"
          >
            {lang === "en"
              ? "We design and build scalable, high-performance digital products using modern technologies like AI, cloud systems and advanced UI/UX engineering. Our solutions are built for global impact, automation and long-term scalability."
              : "ہم جدید AI، کلاؤڈ سسٹمز اور UI/UX انجینئرنگ کے ذریعے ایسے ڈیجیٹل سلوشنز تیار کرتے ہیں جو عالمی سطح پر استعمال، آٹومیشن اور لانگ ٹرم گروتھ کے لیے بنائے جاتے ہیں۔"}
          </p>

        </div>
      </section>

      {/* FILTER */}
      <section className="px-5 pb-10">

        <div className="flex justify-center gap-4 flex-wrap">

          {["All", "Web", "Mobile"].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-xl border transition-all duration-300 ${
              filter === cat
              ? "bg-linear-to-r from-indigo-500 via-blue-500 to-purple-500 text-white border-transparent"
              : "bg-[#071224] border-white/10 text-gray-300 hover:border-blue-500"
              }`}
            >
              {cat}
            </button>
          ))}

        </div>
      </section>

      {/* PROJECTS */}
      <section className="max-w-7xl mx-auto px-5 pb-24">

        <div className="grid lg:grid-cols-2 gap-6">

          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="bg-[#071224]
              border border-white/10 rounded-3xl p-8
              hover:border-blue-500/40
              hover:-translate-y-1
              transition-all duration-300"
            >

              {/* TOP */}
              <div className="flex items-center justify-between mb-6">

                <div
                  className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs border
                  ${
                    project.category === "Web"
                      ? "bg-blue-500/10 border-blue-500/20 text-blue-300"
                      : "bg-green-500/10 border-green-500/20 text-green-300"
                  }`}
                >

                  {project.category === "Web" ? (
                    <Globe size={14} />
                  ) : (
                    <Smartphone size={14} />
                  )}

                  {project.category === "Web"
                    ? lang === "en"
                      ? "WEB PLATFORM"
                      : "ویب پلیٹ فارم"
                    : lang === "en"
                    ? "MOBILE APP"
                    : "موبائل ایپ"}

                </div>

                <ArrowUpRight
                  className="text-gray-500"
                  size={22}
                />

              </div>

              {/* TITLE */}
              <h3 className="text-2xl font-black mb-4">
                {project.title[lang]}
              </h3>

              {/* DESC */}
              <p className="text-gray-400 leading-7 text-sm">
                {project.desc[lang]}
              </p>

              {/* IMPACT */}
              <div
                className="mt-6 p-5 rounded-2xl
                bg-blue-500/5 border border-white/10"
              >

                <div className="flex items-center gap-2 mb-2">

                  <Sparkles
                    size={16}
                    className="text-blue-400"
                  />

                  <p className="text-sm font-semibold text-blue-300">
                    {lang === "en"
                      ? "Business Impact"
                      : "بزنس امپیکٹ"}
                  </p>

                </div>

                <p className="text-sm text-gray-300 leading-6">
                  {project.impact[lang]}
                </p>

              </div>

              {/* TAGS */}
              <div className="flex flex-wrap gap-2 mt-6">

                {["React", "Next.js", "Node.js", "Cloud"].map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-3 py-2 rounded-full
                    bg-white/5 border border-white/10
                    text-gray-300 hover:border-blue-500/40 transition"
                  >
                    {tag}
                  </span>
                ))}

              </div>

            </div>
          ))}

        </div>
      </section>

      

      {/* CTA */}
      <section className="py-24 px-5 text-center">

        <div className="max-w-4xl mx-auto">

          <div
            className="w-16 h-16 rounded-2xl
            bg-blue-500/10 text-blue-400
            flex items-center justify-center mx-auto mb-6"
          >
            <Layers3 size={30} />
          </div>

          <h2 className="text-4xl md:text-5xl font-black">
            {lang === "en"
              ? "Let’s Build Something Extraordinary"
              : "آئیں کچھ غیر معمولی بنائیں"}
          </h2>

          <p className="text-gray-400 mt-6 max-w-2xl mx-auto leading-8">
            {lang === "en"
              ? "We transform innovative ideas into scalable digital products using AI, cloud technologies and modern software engineering."
              : "ہم جدید AI، کلاؤڈ ٹیکنالوجی اور سوفٹ ویئر انجینئرنگ کے ذریعے آپ کے آئیڈیاز کو مکمل ڈیجیٹل پروڈکٹس میں تبدیل کرتے ہیں۔"}
          </p>

          <button
            onClick={() => (window.location.href = "/contact")}
            className="mt-8 bg-linear-to-r from-indigo-500 via-blue-500 to-purple-500
            px-8 h-12 rounded-xl font-semibold transition"
          >
            {lang === "en"
              ? "Start Your Project"
              : "اپنا پروجیکٹ شروع کریں"}
          </button>

        </div>
      </section>

    </main>
  );
}