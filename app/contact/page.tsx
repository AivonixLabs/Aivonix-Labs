"use client";

import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import {
  FaInstagram,
  FaFacebook,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";

export default function Contact() {
  const { lang } = useLanguage();

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (data.success) {
        alert(
          lang === "en"
            ? "Message Sent Successfully 🚀"
            : "پیغام کامیابی سے بھیج دیا گیا 🚀"
        );
      } else {
        alert(lang === "en" ? "Failed ❌" : "ناکام ہو گیا ❌");
      }

      setForm({
        firstName: "",
        lastName: "",
        email: "",
        subject: "",
        message: "",
      });

    } catch (error) {
      alert(
        lang === "en"
          ? "Something went wrong ❌"
          : "کچھ غلط ہو گیا ❌"
      );
    }

    setLoading(false);
  };

  return (
    <main className="bg-black text-white overflow-hidden">

      {/* HERO */}
      <section className="relative pt-34 pb-20 px-5">

        {/* BACKGROUND */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.18),transparent_45%)]" />

        <div className="max-w-7xl mx-auto relative z-10 text-center">

          <button
            className="mb-6 border border-indigo-500/30 bg-indigo-500/10
            text-indigo-300 text-sm px-5 py-2 rounded-full
            backdrop-blur-xl"
          >
            {lang === "en"
              ? "Contact Aivonix Labs"
              : "ایوونکس لیبز سے رابطہ کریں"}
          </button>

          <h1
            className="text-4xl sm:text-5xl lg:text-5xl
            font-black leading-tight max-w-5xl mx-auto"
          >
            {lang === "en"
              ? "Let’s Build Something Amazing"
              : "آئیں کچھ شاندار بنائیں"}
          </h1>

          <p
            className="mt-6 text-gray-400 max-w-3xl
            mx-auto text-base sm:text-lg leading-8"
          >
            {lang === "en"
              ? "We help startups and businesses transform ideas into scalable digital products using modern technologies, AI systems and high-performance engineering."
              : "ہم جدید ٹیکنالوجی، AI سسٹمز اور جدید انجینئرنگ کے ذریعے آپ کے آئیڈیاز کو طاقتور ڈیجیٹل پروڈکٹس میں تبدیل کرتے ہیں۔"}
          </p>

        </div>
      </section>

      {/* CONTACT INFO */}
<section className="px-5 pb-10">
  <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">

    {/* EMAIL */}
    <a
      href="mailto:info.aivonixlabs@gmail.com"
      className="group p-8 rounded-3xl
      bg-linear-to-br from-[#050816] via-[#0f172a] to-[#1a1b3d]
      border border-white/10
      hover:border-indigo-500
      hover:shadow-[0_0_50px_rgba(99,102,241,0.2)]
      hover:-translate-y-1
      transition duration-300 block"
    >
      <div
        className="w-14 h-14 rounded-2xl flex items-center justify-center
        bg-indigo-500/10 border border-indigo-500/20
        text-indigo-400 text-2xl mb-5
        group-hover:scale-110 transition"
      >
        <FaEnvelope />
      </div>

      <h3 className="text-xl font-bold mb-2">
        {lang === "en" ? "Email Us" : "ای میل کریں"}
      </h3>

      <p className="text-gray-400 text-sm break-all">
        info.aivonixlabs@gmail.com
      </p>
    </a>

    {/* WHATSAPP */}
    <a
      href="https://wa.me/923187564697"
      target="_blank"
      rel="noopener noreferrer"
      className="group p-8 rounded-3xl
      bg-linear-to-br from-[#050816] via-[#0f172a] to-[#1a1b3d]
      border border-white/10
      hover:border-cyan-500
      hover:shadow-[0_0_50px_rgba(34,211,238,0.2)]
      hover:-translate-y-1
      transition duration-300 block"
    >
      <div
        className="w-14 h-14 rounded-2xl flex items-center justify-center
        bg-cyan-500/10 border border-cyan-500/20
        text-cyan-400 text-2xl mb-5
        group-hover:scale-110 transition"
      >
        <FaPhoneAlt />
      </div>

      <h3 className="text-xl font-bold mb-2">
        {lang === "en" ? "WhatsApp Us" : "واٹس ایپ کریں"}
      </h3>

      <p className="text-gray-400 text-sm">
        +92 318 7564697
      </p>
    </a>

    {/* MAP */}
    <a
      href="https://maps.google.com/?q=Lahore,Pakistan"
      target="_blank"
      rel="noopener noreferrer"
      className="group p-8 rounded-3xl
      bg-linear-to-br from-[#050816] via-[#0f172a] to-[#1a1b3d]
      border border-white/10
      hover:border-purple-500
      hover:shadow-[0_0_50px_rgba(168,85,247,0.2)]
      hover:-translate-y-1
      transition duration-300 block"
    >
      <div
        className="w-14 h-14 rounded-2xl flex items-center justify-center
        bg-purple-500/10 border border-purple-500/20
        text-purple-400 text-2xl mb-5
        group-hover:scale-110 transition"
      >
        <FaMapMarkerAlt />
      </div>

      <h3 className="text-xl font-bold mb-2">
        {lang === "en" ? "Our Location" : "ہمارا مقام"}
      </h3>

      <p className="text-gray-400 text-sm">
        {lang === "en"
          ? "Lahore, Pakistan"
          : "لاہور، پاکستان"}
      </p>
    </a>

  </div>
</section>
      {/* FORM */}
      <section className="px-5 py-14">

        <div
          className="max-w-5xl mx-auto p-8 md:p-12 rounded-[35px]
          bg-linear-to-br from-[#050816] via-[#0f172a] to-[#1a1b3d]
          border border-white/10
          shadow-[0_0_80px_rgba(99,102,241,0.12)]"
        >

          <div className="text-center mb-10">

            <h2 className="text-3xl md:text-4xl font-black">
              {lang === "en"
                ? "Send Us a Message"
                : "ہمیں پیغام بھیجیں"}
            </h2>

            <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
              {lang === "en"
                ? "Tell us about your project, idea or business requirements and our team will get back to you shortly."
                : "اپنے پروجیکٹ یا آئیڈیا کے بارے میں ہمیں بتائیں اور ہماری ٹیم جلد آپ سے رابطہ کرے گی۔"}
            </p>

          </div>

          <form
            onSubmit={handleSubmit}
            className="grid md:grid-cols-2 gap-5"
          >

            <input
              name="firstName"
              value={form.firstName}
              onChange={handleChange}
              placeholder={lang === "en" ? "First Name" : "پہلا نام"}
              required
              className="p-4 rounded-2xl bg-white/5 border border-white/10
              focus:border-indigo-500 outline-none"
            />

            <input
              name="lastName"
              value={form.lastName}
              onChange={handleChange}
              placeholder={lang === "en" ? "Last Name" : "آخری نام"}
              required
              className="p-4 rounded-2xl bg-white/5 border border-white/10
              focus:border-indigo-500 outline-none"
            />

            <input
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Email"
              type="email"
              required
              className="p-4 rounded-2xl bg-white/5 border border-white/10
              focus:border-indigo-500 outline-none md:col-span-2"
            />

            <input
              name="subject"
              value={form.subject}
              onChange={handleChange}
              placeholder={lang === "en" ? "Subject" : "موضوع"}
              className="p-4 rounded-2xl bg-white/5 border border-white/10
              focus:border-indigo-500 outline-none md:col-span-2"
            />

            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder={lang === "en" ? "Your Message" : "آپ کا پیغام"}
              required
              className="p-4 rounded-2xl bg-white/5 border border-white/10
              focus:border-indigo-500 outline-none md:col-span-2 h-44"
            />

            <button
              disabled={loading}
              className="bg-linear-to-r from-indigo-500 via-blue-500 to-purple-500
              py-4 rounded-2xl font-semibold md:col-span-2
              hover:scale-[1.02] transition duration-300
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

      {/* SOCIAL */}
<section className="pb-24 px-5">

  <div className="max-w-4xl mx-auto text-center">

    <h2 className="text-3xl font-black mb-4">
      {lang === "en"
        ? "Follow Our Journey"
        : "ہمیں فالو کریں"}
    </h2>

    <p className="text-gray-400 mb-10">
      {lang === "en"
        ? "Stay connected with Aivonix Labs on social platforms."
        : "سوشل میڈیا پر ایوونکس لیبز کے ساتھ جڑے رہیں۔"}
    </p>

    <div className="flex justify-center flex-wrap gap-6">

      {/* Instagram */}
      <a
        href="https://www.instagram.com/aivonixlabs"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-3 px-8 py-4 rounded-2xl
        bg-white/5 border border-white/10
        hover:border-pink-500 hover:-translate-y-1
        transition duration-300"
      >
        <FaInstagram className="text-2xl text-pink-400" />
        <span>Instagram</span>
      </a>

      {/* Facebook */}
      <a
        href="https://www.facebook.com/share/1E4pueyWKA/"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-3 px-8 py-4 rounded-2xl
        bg-white/5 border border-white/10
        hover:border-blue-500 hover:-translate-y-1
        transition duration-300"
      >
        <FaFacebook className="text-2xl text-blue-400" />
        <span>Facebook</span>
      </a>

      {/* LinkedIn */}
      <a
        href="https://www.linkedin.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-3 px-8 py-4 rounded-2xl
        bg-white/5 border border-white/10
        hover:border-cyan-500 hover:-translate-y-1
        transition duration-300"
      >
        <CiLinkedin className="text-2xl text-cyan-400" />
        <span>LinkedIn</span>
      </a>

      

    </div>

  </div>

</section>
    </main>
  );
}