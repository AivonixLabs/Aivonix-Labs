"use client";

import { useLanguage } from "../context/LanguageContext";
import {
  Briefcase,
  Rocket,
  Brain,
  Cloud,
  Settings,
  Server,
  ArrowRight,
} from "lucide-react";

export default function Services() {
  const { lang } = useLanguage();

  const services = [
    {
      icon: <Briefcase size={26} />,
      title: lang === "en" ? "Web Development" : "ویب ڈویلپمنٹ",
      desc:
        lang === "en"
          ? "We design and develop high-performance, scalable and secure web applications using modern technologies. Our focus is on speed, SEO optimization, clean architecture, and enterprise-level scalability that helps businesses grow globally."
          : "ہم جدید، تیز اور اسکیل ایبل ویب ایپلیکیشنز تیار کرتے ہیں جو بزنس کو عالمی سطح پر ترقی دیتی ہیں۔",
      points: [
        lang === "en"
          ? "Enterprise SaaS platforms & business dashboards"
          : "انٹرپرائز SaaS پلیٹ فارمز اور بزنس ڈیش بورڈز",
        lang === "en"
          ? "Custom web applications with modern UI/UX"
          : "جدید UI/UX کے ساتھ کسٹم ویب ایپلیکیشنز",
        lang === "en"
          ? "REST APIs, GraphQL & backend systems"
          : "REST API، GraphQL اور بیک اینڈ سسٹمز",
        lang === "en"
          ? "SEO optimized & high-speed architecture"
          : "SEO آپٹمائزڈ اور ہائی اسپیڈ آرکیٹیکچر",
      ],
      tech: [
        "Next.js",
        "React",
        "Node.js",
        "TypeScript",
        "Tailwind CSS",
        "MongoDB",
        "PostgreSQL",
      ],
      color: "blue",
    },

    {
      icon: <Rocket size={26} />,
      title:
        lang === "en"
          ? "Mobile App Development"
          : "موبائل ایپ ڈویلپمنٹ",
      desc:
        lang === "en"
          ? "We build cross-platform mobile applications with smooth performance, intuitive user experience, real-time features, and secure backend integration for Android and iOS platforms."
          : "ہم اینڈرائیڈ اور آئی او ایس کے لیے جدید موبائل ایپس بناتے ہیں۔",
      points: [
        lang === "en"
          ? "Cross-platform Android & iOS applications"
          : "اینڈرائیڈ اور آئی او ایس کراس پلیٹ فارم ایپس",
        lang === "en"
          ? "Real-time chat, tracking & live systems"
          : "ریئل ٹائم چیٹ اور لائیو سسٹمز",
        lang === "en"
          ? "Secure authentication & cloud backend"
          : "محفوظ لاگ ان اور کلاؤڈ بیک اینڈ",
        lang === "en"
          ? "Play Store & App Store deployment"
          : "پلے اسٹور اور ایپ اسٹور ڈیپلائمنٹ",
      ],
      tech: [
        "Flutter",
        "React Native",
        "Firebase",
        "Dart",
        "Expo",
      ],
      color: "purple",
    },

    {
      icon: <Brain size={26} />,
      title: lang === "en" ? "AI Solutions" : "AI سلوشنز",
      desc:
        lang === "en"
          ? "We develop AI-powered systems that automate business processes, analyze large datasets, and deliver predictive insights using machine learning and modern LLM technologies."
          : "ہم AI سسٹمز بناتے ہیں جو بزنس کو اسمارٹ اور آٹومیٹ کرتے ہیں۔",
      points: [
        lang === "en"
          ? "AI chatbots & virtual assistants"
          : "AI چیٹ بوٹس اور ورچوئل اسسٹنٹس",
        lang === "en"
          ? "Predictive analytics & forecasting"
          : "پریڈکٹیو اینالیٹکس اور پیشن گوئی",
        lang === "en"
          ? "Machine learning automation systems"
          : "مشین لرننگ آٹومیشن سسٹمز",
        lang === "en"
          ? "Business intelligence dashboards"
          : "بزنس انٹیلیجنس ڈیش بورڈز",
      ],
      tech: [
        "Python",
        "OpenAI API",
        "TensorFlow",
        "PyTorch",
        "LangChain",
      ],
      color: "pink",
    },

    {
      icon: <Server size={26} />,
      title: lang === "en" ? "Automation Systems" : "آٹومیشن سسٹمز",
      desc:
        lang === "en"
          ? "We create intelligent automation systems that eliminate manual work, streamline workflows, and improve business efficiency using APIs, scripts, and AI-driven processes."
          : "ہم ایسے سسٹمز بناتے ہیں جو کاروباری کام خودکار بناتے ہیں۔",
      points: [
        lang === "en"
          ? "Business process automation"
          : "بزنس پروسیس آٹومیشن",
        lang === "en"
          ? "CRM & ERP automation systems"
          : "CRM اور ERP آٹومیشن",
        lang === "en"
          ? "Email & notification workflows"
          : "ای میل اور نوٹیفکیشن سسٹمز",
        lang === "en"
          ? "Task scheduling & pipelines"
          : "ٹاسک شیڈولنگ پائپ لائنز",
      ],
      tech: [
        "Node.js",
        "Python",
        "REST APIs",
        "Zapier",
        "n8n",
      ],
      color: "green",
    },

    {
      icon: <Cloud size={26} />,
      title: lang === "en" ? "Cloud & DevOps" : "کلاؤڈ اور ڈیو اوپس",
      desc:
        lang === "en"
          ? "We provide scalable cloud infrastructure, deployment pipelines, and DevOps solutions ensuring high availability, security, and performance optimization."
          : "ہم کلاؤڈ بیسڈ اسکیل ایبل سسٹمز فراہم کرتے ہیں۔",
      points: [
        lang === "en"
          ? "AWS / Azure cloud architecture"
          : "AWS اور Azure کلاؤڈ آرکیٹیکچر",
        lang === "en"
          ? "CI/CD pipelines & automation"
          : "CI/CD پائپ لائنز",
        lang === "en"
          ? "Server deployment & scaling"
          : "سرور ڈیپلائمنٹ اور اسکیلنگ",
        lang === "en"
          ? "Monitoring & performance optimization"
          : "مانیٹرنگ اور پرفارمنس آپٹیمائزیشن",
      ],
      tech: [
        "AWS",
        "Docker",
        "Kubernetes",
        "Nginx",
        "CI/CD",
      ],
      color: "orange",
    },

    {
      icon: <Settings size={26} />,
      title: lang === "en" ? "IT Consulting" : "آئی ٹی کنسلٹنگ",
      desc:
        lang === "en"
          ? "We provide strategic IT consulting to help businesses choose the right technology stack, architecture, and digital transformation roadmap for scalable growth."
          : "ہم بزنس کو بہترین ٹیکنالوجی اسٹریٹیجی فراہم کرتے ہیں۔",
      points: [
        lang === "en"
          ? "System architecture planning"
          : "سسٹم آرکیٹیکچر پلاننگ",
        lang === "en"
          ? "Technology stack selection"
          : "ٹیکنالوجی اسٹیک سلیکشن",
        lang === "en"
          ? "Digital transformation strategy"
          : "ڈیجیٹل ٹرانسفارمیشن",
        lang === "en"
          ? "Scalability & performance audits"
          : "اسکیل ایبلٹی اور آڈٹ",
      ],
      tech: [
        "System Design",
        "Architecture",
        "Scalability",
        "Cloud Strategy",
      ],
      color: "cyan",
    },
  ];

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
              ? "Professional Digital Services"
              : "پروفیشنل ڈیجیٹل سروسز"}
          </button>

          <h1
            className="text-4xl sm:text-5xl lg:text-5xl
            font-black leading-tight max-w-5xl mx-auto"
          >
            {lang === "en"
              ? "Scalable Engineering & Smart Technology Solutions"
              : "اسکیل ایبل انجینئرنگ اور اسمارٹ ٹیک سلوشنز"}
          </h1>

          <p
  className="mt-6 text-gray-400 max-w-4xl
  mx-auto text-base sm:text-lg leading-8"
>
  {lang === "en"
    ? "We specialize in designing, developing and scaling powerful digital products using modern technologies, cloud systems and AI-driven engineering. Our team builds fast, secure and scalable solutions that help businesses grow, automate operations and deliver better digital experiences."
    : "ہم جدید ٹیکنالوجی، کلاؤڈ سسٹمز اور AI انجینئرنگ کے ذریعے طاقتور ڈیجیٹل پروڈکٹس تیار کرتے ہیں۔ ہماری ٹیم ایسے تیز، محفوظ اور اسکیل ایبل سلوشنز بناتی ہے جو بزنس کی گروتھ، آٹومیشن اور بہتر ڈیجیٹل ایکسپیرینس میں مدد دیتے ہیں۔"}
</p>
        </div>
      </section>

      {/* SERVICES */}
      <section className="max-w-7xl mx-auto px-5 pb-20">

        <div className="grid md:grid-cols-2 gap-6">

          {services.map((s, i) => (
            <div
              key={i}
              className="bg-[#071224]
              border border-white/10
              rounded-3xl p-8
              hover:border-blue-500/40
              hover:-translate-y-2
              transition-all duration-300"
            >

              {/* ICON */}
              <div
                className={`
                w-14 h-14 rounded-2xl flex items-center justify-center mb-6
                ${s.color === "blue" && "bg-blue-500/20 text-blue-400"}
                ${s.color === "purple" && "bg-purple-500/20 text-purple-400"}
                ${s.color === "pink" && "bg-pink-500/20 text-pink-400"}
                ${s.color === "green" && "bg-green-500/20 text-green-400"}
                ${s.color === "orange" && "bg-orange-500/20 text-orange-400"}
                ${s.color === "cyan" && "bg-cyan-500/20 text-cyan-400"}
                `}
              >
                {s.icon}
              </div>

              {/* TITLE */}
              <h2 className="text-2xl font-black">
                {s.title}
              </h2>

              {/* DESC */}
              <p className="text-gray-400 mt-4 leading-7 text-sm">
                {s.desc}
              </p>

              {/* FEATURES */}
              <div className="mt-6 space-y-3">

                {s.points.map((p, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 text-gray-300 text-sm"
                  >
                    <ArrowRight
                      size={16}
                      className="text-blue-400 mt-1"
                    />

                    <span>{p}</span>
                  </div>
                ))}

              </div>

              {/* TECH */}
              <div className="flex flex-wrap gap-2 mt-7">

                {s.tech.map((t, idx) => (
                  <span
                    key={idx}
                    className="text-xs px-3 py-2 rounded-full
                    bg-white/5 border border-white/10
                    text-gray-300 hover:border-blue-500/40 transition"
                  >
                    {t}
                  </span>
                ))}

              </div>

            </div>
          ))}

        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-5 bg-[#040d1d]">

        <div className="max-w-5xl mx-auto text-center">

          <button
            className="mb-5 border border-blue-500/20
            bg-blue-500/10 text-blue-300
            px-4 py-2 rounded-full text-sm"
          >
            {lang === "en"
              ? "Ready To Build?"
              : "پروجیکٹ شروع کریں"}
          </button>

          <h2 className="text-4xl md:text-5xl font-black">
            {lang === "en"
              ? "Let’s Build Something Extraordinary"
              : "آئیں کچھ غیر معمولی بنائیں"}
          </h2>

          <p className="text-gray-400 mt-6 max-w-2xl mx-auto leading-8">
            {lang === "en"
              ? "We transform ideas into scalable digital products using modern engineering, AI automation and cloud technologies."
              : "ہم جدید انجینئرنگ، AI آٹومیشن اور کلاؤڈ ٹیکنالوجی کے ذریعے آپ کے آئیڈیاز کو مکمل ڈیجیٹل پروڈکٹس میں بدلتے ہیں۔"}
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