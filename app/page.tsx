"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useLanguage } from "./context/LanguageContext";

import {
  Rocket,
  Users,
  Wallet,
  GraduationCap,
  Globe,
  Briefcase,
  ArrowUpRight,
} from "lucide-react";

function Counter({ value }: { value: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = value;

    const interval = setInterval(() => {
      start += Math.ceil(end / 30);

      if (start >= end) {
        start = end;
        clearInterval(interval);
      }

      setCount(start);
    }, 30);

    return () => clearInterval(interval);
  }, [value]);

  return <span>{count}+</span>;
}

export default function Home() {
  const router = useRouter();
  const { lang } = useLanguage();

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    setLoading(true);

    await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    alert(
      lang === "en"
        ? "Message Sent Successfully 🚀"
        : "پیغام کامیابی سے بھیج دیا گیا 🚀"
    );

    setForm({
      firstName: "",
      lastName: "",
      email: "",
      subject: "",
      message: "",
    });

    setLoading(false);
  };

  return (
    <main className="min-h-screen bg-[#020817] text-white overflow-hidden pt-16">

      {/* HERO */}
      <section className="relative pt-16 pb-16 px-5">

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(37,99,235,0.18),transparent_40%)]" />

        <div className="max-w-7xl mx-auto relative z-10 text-center">

          <button
            className="mb-6 border border-blue-500/30
            bg-blue-500/10 text-blue-300
            text-sm px-4 py-2 rounded-full"
          >
            {lang === "en"
              ? "Aivonix Labs"
              : "ایوونکس لیبز"}
          </button>

          <h1
            className="text-4xl sm:text-5xl lg:text-5xl
            font-black leading-tight max-w-5xl mx-auto"
          >
            {lang === "en"
              ? "Building Powerful Digital Experiences"
              : "جدید ڈیجیٹل تجربات تخلیق کر رہے ہیں"}
          </h1>

          <p
      className="mt-6 text-gray-400 max-w-2xl
      mx-auto text-base sm:text-lg leading-8 text-center"
    >
      {lang === "en"
        ? "Aivonix Labs helps startups and businesses build modern web applications, AI-powered systems, and scalable digital solutions. We focus on performance, user experience, and long-term growth to turn ideas into successful products."
        : "ایوونکس لیبز اسٹارٹ اپس اور بزنسز کو جدید ویب ایپس، AI سسٹمز اور اسکیل ایبل ڈیجیٹل سلوشنز بنانے میں مدد دیتا ہے۔ ہم پرفارمنس، یوزر ایکسپیرینس اور طویل مدتی ترقی پر فوکس کرتے ہیں۔"}
    </p>

          <div className="flex flex-wrap gap-4 justify-center mt-10">

            <button
              onClick={() => router.push("/contact")}
              className="bg-linear-to-r from-indigo-500 via-blue-500 to-purple-500
              px-8 h-14 rounded-xl font-semibold
              transition-all duration-300"
            >
              {lang === "en"
                ? "Start Your Project"
                : "پروجیکٹ شروع کریں"}
            </button>

            <button
              onClick={() => router.push("/services")}
              className="border border-white/10
              hover:border-blue-500
              px-8 h-14 rounded-xl
              text-gray-300 transition-all duration-300"
            >
              {lang === "en"
                ? "Explore Services"
                : "سروسز دیکھیں"}
            </button>

          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="px-5 py-14">

  <div className="max-w-7xl mx-auto">

    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">

      {[
        [150, lang === "en" ? "Projects Delivered" : "مکمل پروجیکٹس"],
        [100, lang === "en" ? "Happy Clients" : "خوش کلائنٹس"],
        [5, lang === "en" ? "Years Experience" : "سال تجربہ"],
        [15, lang === "en" ? "Global Reach" : "عالمی رسائی"],
      ].map(([num, label], i) => (
        <div key={i}>

          <h2
            className="text-5xl sm:text-6xl lg:text-7xl
            font-black text-blue-400"
          >
            <Counter value={Number(num)} />
          </h2>

          <p className="text-gray-400 mt-3 text-base sm:text-lg">
            {label}
          </p>

        </div>
      ))}

    </div>

  </div>
</section>

      {/* SERVICES */}
<section className="py-16 px-5">

  <div className="max-w-7xl mx-auto">

    <div className="text-center">

      <button
        className="mb-5 border border-blue-500/20
        bg-blue-500/10 text-blue-300
        px-4 py-2 rounded-full text-sm"
      >
        {lang === "en"
          ? "Our Expertise"
          : "ہماری مہارت"}
      </button>

      <h2 className="text-5xl font-black">
        {lang === "en"
          ? "Premium Digital Services"
          : "پریمیم ڈیجیٹل سروسز"}
      </h2>

      <p className="max-w-3xl mx-auto mt-6 text-gray-400 leading-8">
        {lang === "en"
          ? "We deliver end-to-end digital solutions that help businesses grow faster, operate smarter, and stay ahead in the competitive market. Our expertise covers modern web development, AI-powered systems, mobile applications, and scalable cloud infrastructure."
          : "ہم مکمل ڈیجیٹل سلوشنز فراہم کرتے ہیں جو بزنس کو تیزی سے ترقی کرنے، بہتر طریقے سے کام کرنے اور مارکیٹ میں آگے رہنے میں مدد دیتے ہیں۔"}
      </p>
    </div>

    <div className="grid md:grid-cols-2 gap-6 mt-14">

      {[
        {
          icon: <Briefcase size={22} />,
          title:
            lang === "en"
              ? "Web Development"
              : "ویب ڈویلپمنٹ",
          text:
            lang === "en"
              ? "We build modern, scalable and high-performance websites and web applications using the latest technologies like React, Next.js and cloud-based architectures. Our focus is on speed, SEO optimization, security, and long-term maintainability."
              : "ہم جدید، تیز اور اسکیل ایبل ویب ایپلیکیشنز تیار کرتے ہیں جو بزنس کی ترقی کے لیے بہترین ہوتی ہیں۔",
          bg: "bg-blue-500",
        },

        {
          icon: <Rocket size={22} />,
          title:
            lang === "en"
              ? "Mobile Applications"
              : "موبائل ایپلیکیشنز",
          text:
            lang === "en"
              ? "We develop cross-platform mobile applications for Android and iOS with smooth UI/UX, real-time features, and secure backend integration to ensure a seamless user experience."
              : "ہم اینڈرائیڈ اور آئی او ایس کے لیے جدید اور یوزر فرینڈلی موبائل ایپس تیار کرتے ہیں۔",
          bg: "bg-green-500",
        },

        {
          icon: <Users size={22} />,
          title:
            lang === "en"
              ? "AI Solutions"
              : "اے آئی سلوشنز",
          text:
            lang === "en"
              ? "Our AI solutions include intelligent automation, chatbots, predictive analytics, and smart systems that help businesses reduce manual work, improve efficiency, and make better decisions."
              : "ہم AI بیسڈ سسٹمز تیار کرتے ہیں جو بزنس کو اسمارٹ اور خودکار بناتے ہیں۔",
          bg: "bg-pink-500",
        },

        {
          icon: <Wallet size={22} />,
          title:
            lang === "en"
              ? "Cloud & DevOps"
              : "کلاؤڈ اور ڈیو اوپس",
          text:
            lang === "en"
              ? "We design and manage secure cloud infrastructures with CI/CD pipelines, automated deployments, and scalable systems using platforms like AWS and modern DevOps practices."
              : "ہم کلاؤڈ انفراسٹرکچر اور DevOps سسٹمز کو مؤثر طریقے سے مینج کرتے ہیں۔",
          bg: "bg-orange-500",
        },

        {
          icon: <GraduationCap size={22} />,
          title:
            lang === "en"
              ? "IT Consulting"
              : "آئی ٹی کنسلٹنگ",
          text:
            lang === "en"
              ? "We provide expert IT consulting to help startups and enterprises choose the right technologies, architecture, and strategies for building scalable and future-ready digital products."
              : "ہم بزنس کے لیے بہترین ٹیکنالوجی اور اسٹریٹیجی فراہم کرتے ہیں۔",
          bg: "bg-cyan-500",
        },

        {
          icon: <Globe size={22} />,
          title:
            lang === "en"
              ? "Automation Systems"
              : "آٹومیشن سسٹمز",
          text:
            lang === "en"
              ? "We automate repetitive business processes, workflows, and operations using modern tools and AI systems, helping organizations save time, reduce costs, and improve productivity."
              : "ہم بزنس کے کاموں کو خودکار بنا کر وقت اور لاگت بچاتے ہیں۔",
          bg: "bg-purple-500",
        },
      ].map((item, i) => (
        <div
          key={i}
          className="bg-[#071224]
          border border-white/10 rounded-3xl
          p-8 hover:border-blue-500/50
          hover:-translate-y-1
          transition-all duration-300"
        >

          <div
            className={`${item.bg}
            w-16 h-16 rounded-2xl
            flex items-center justify-center`}
          >
            {item.icon}
          </div>

          <h3 className="text-3xl font-bold mt-6">
            {item.title}
          </h3>

          <p className="text-gray-400 mt-4 leading-8 text-[15px]">
            {item.text}
          </p>

          <button
            className="mt-6 flex items-center gap-2
            text-blue-400 hover:text-blue-300 transition"
          >
            {lang === "en"
              ? "Learn More"
              : "مزید جانیں"}

            <ArrowUpRight size={18} />
          </button>

        </div>
      ))}

    </div>
  </div>
</section>

      {/* CTA */}
      <section className="py-16 px-5 bg-[#040d1d]">

        <div className="max-w-5xl mx-auto text-center">

          <button
            className="mb-5 border border-blue-500/20
            bg-blue-500/10 text-blue-300
            px-4 py-2 rounded-full text-sm"
          >
            {lang === "en"
              ? "Let’s Build Together"
              : "آئیے مل کر بنائیں"}
          </button>

          <h2 className="text-5xl font-black leading-tight">
            {lang === "en"
              ? "Turn Your Vision Into Reality"
              : "اپنے آئیڈیا کو حقیقت بنائیں"}
          </h2>

          <p className="text-gray-400 mt-6 max-w-3xl mx-auto leading-8">
            {lang === "en"
              ? "From startup ideas to enterprise platforms, Aivonix Labs helps businesses design, develop and scale modern digital products."
              : "ایوونکس لیبز آپ کے آئیڈیاز کو جدید اور طاقتور ڈیجیٹل پروڈکٹس میں تبدیل کرتا ہے۔"}
          </p>

          <button
            onClick={() => router.push("/contact")}
            className="mt-10 bg-linear-to-r from-indigo-500 via-blue-500 to-purple-500
            px-8 h-14 rounded-xl font-semibold
            transition-all duration-300"
          >
            {lang === "en"
              ? "Contact Us"
              : "رابطہ کریں"}
          </button>

        </div>
      </section>

      {/* CONTACT FORM */}
      <section className="max-w-5xl mx-auto px-5 py-20">

        <div
          className="bg-[#071224]
          border border-white/10 rounded-3xl
          p-8 sm:p-10"
        >

          <h2 className="text-4xl font-black text-center">

            {lang === "en"
              ? "Let’s Talk About Your Project"
              : "اپنے پروجیکٹ کے بارے میں بات کریں"}

          </h2>

          <p className="text-center text-gray-400 mt-4">
            {lang === "en"
              ? "Tell us about your idea and our team will contact you shortly."
              : "اپنے آئیڈیا کے بارے میں بتائیں، ہماری ٹیم جلد رابطہ کرے گی۔"}
          </p>

          <form
            onSubmit={handleSubmit}
            className="grid gap-5 mt-10"
          >

            <div className="grid md:grid-cols-2 gap-5">

              <input
                name="firstName"
                value={form.firstName}
                onChange={handleChange}
                placeholder={
                  lang === "en"
                    ? "First Name"
                    : "پہلا نام"
                }
                className="h-14 px-4 rounded-xl
                bg-[#0c1729] border border-white/10
                outline-none focus:border-blue-500"
              />

              <input
                name="lastName"
                value={form.lastName}
                onChange={handleChange}
                placeholder={
                  lang === "en"
                    ? "Last Name"
                    : "آخری نام"
                }
                className="h-14 px-4 rounded-xl
                bg-[#0c1729] border border-white/10
                outline-none focus:border-blue-500"
              />

            </div>

            <input
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Email Address"
              className="h-14 px-4 rounded-xl
              bg-[#0c1729] border border-white/10
              outline-none focus:border-blue-500"
            />

            <input
              name="subject"
              value={form.subject}
              onChange={handleChange}
              placeholder={
                lang === "en"
                  ? "Project Subject"
                  : "پروجیکٹ سبجیکٹ"
              }
              className="h-14 px-4 rounded-xl
              bg-[#0c1729] border border-white/10
              outline-none focus:border-blue-500"
            />

            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder={
                lang === "en"
                  ? "Tell us about your project..."
                  : "اپنے پروجیکٹ کے بارے میں بتائیں..."
              }
              className="min-h-180px p-4 rounded-xl
              bg-[#0c1729] border border-white/10
              outline-none focus:border-blue-500"
            />

            <button
              disabled={loading}
              className="h-14 rounded-xl
              bg-linear-to-r from-indigo-500 via-blue-500 to-purple-500
              hover:scale-[1.02]
              transition-all duration-300
              font-semibold text-lg
              disabled:opacity-50"
            >
              {loading
                ? lang === "en"
                  ? "Sending..."
                  : "بھیجا جا رہا ہے..."
                : lang === "en"
                ? "Send Message"
                : "پیغام بھیجیں"}
            </button>

          </form>
        </div>
      </section>

    </main>
  );
}