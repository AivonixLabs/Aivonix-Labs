"use client";

import Link from "next/link";
import { useLanguage } from "../context/LanguageContext";
import {
  FaInstagram,
  FaFacebook,
  FaEnvelope,
  FaWhatsapp,
} from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

export default function Footer() {
  const { lang } = useLanguage();

  return (
    <footer className="bg-black border-t border-gray-800 py-6">

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10">

        {/* LOGO / ABOUT */}
        <div>
          <h2 className="font-bold text-2xl text-white">
          {lang === "en" ? "Aivonix Labs" : "ایوونکس لیبز"}
          </h2>

          <p className="text-gray-400 mt-3 text-sm leading-relaxed">
            {lang === "en"
              ? "We build high-performance web, mobile and AI-powered solutions designed to help businesses grow, scale and succeed in the modern digital world."
              : "ہم جدید ویب، موبائل اور AI بیسڈ سلوشنز تیار کرتے ہیں جو کاروبار کو بڑھنے، اسکیل کرنے اور کامیاب ہونے میں مدد دیتے ہیں۔"}
          </p>

          {/* SOCIAL */}
          <div className="flex gap-5 mt-5 text-2xl">

            <a
              href="https://www.instagram.com/aivonixlabs"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-pink-500 transition"
            >
              <FaInstagram />
            </a>

            <a
              href="https://www.facebook.com/share/1E4pueyWKA/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-500 transition"
            >
              <FaFacebook />
            </a>

            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-cyan-400 transition"
            >
              <FaLinkedin />
            </a>

          </div>
        </div>

        {/* NAVIGATION */}
        <div>
          <h3 className="font-semibold text-white mb-4">
            {lang === "en" ? "Navigation" : "نیویگیشن"}
          </h3>

          <ul className="space-y-2 text-gray-400 text-sm">

            <li>
              <Link href="/" className="hover:text-white">
                {lang === "en" ? "Home" : "ہوم"}
              </Link>
            </li>

            <li>
              <Link href="/services" className="hover:text-white">
                {lang === "en" ? "Services" : "سروسز"}
              </Link>
            </li>

            <li>
              <Link href="/portfolio" className="hover:text-white">
                {lang === "en" ? "Portfolio" : "پورٹ فولیو"}
              </Link>
            </li>

            <li>
              <Link href="/about" className="hover:text-white">
                {lang === "en" ? "About" : "ہمارے بارے میں"}
              </Link>
            </li>

            <li>
              <Link href="/careers" className="hover:text-white">
                {lang === "en" ? "Careers" : "کیریئرز"}
              </Link>
            </li>

            <li>
              <Link href="/contact" className="hover:text-white">
                {lang === "en" ? "Contact" : "رابطہ"}
              </Link>
            </li>

          </ul>
        </div>

        {/* SERVICES */}
<div>
  <h3 className="font-semibold text-white mb-4">
    {lang === "en" ? "Services" : "سروسز"}
  </h3>

  <ul className="space-y-2 text-gray-400 text-sm">

    <li>
      <Link href="/services" className="hover:text-white">
        {lang === "en" ? "Web Development" : "ویب ڈویلپمنٹ"}
      </Link>
    </li>

    <li>
      <Link href="/services" className="hover:text-white">
        {lang === "en" ? "Mobile App Development" : "موبائل ایپ ڈویلپمنٹ"}
      </Link>
    </li>

    <li>
      <Link href="/services" className="hover:text-white">
        {lang === "en" ? "AI Solutions" : "AI سلوشنز"}
      </Link>
    </li>

    <li>
      <Link href="/services" className="hover:text-white">
        {lang === "en" ? "Cloud & DevOps" : "کلاؤڈ اور ڈیواپس"}
      </Link>
    </li>

    <li>
      <Link href="/services" className="hover:text-white">
        {lang === "en" ? "Automation Systems" : "آٹومیشن سسٹمز"}
      </Link>
    </li>

    <li>
      <Link href="/services" className="hover:text-white">
        {lang === "en" ? "IT Consulting" : "آئی ٹی مشاورت"}
      </Link>
    </li>

  </ul>
</div>

        {/* CONTACT */}
        <div>
          <h3 className="font-semibold text-white mb-4">
            {lang === "en" ? "Contact" : "رابطہ"}
          </h3>

          <a
            href="mailto:info.aivonixlabs@gmail.com"
            className="flex items-center gap-2 text-gray-400 hover:text-white transition text-sm"
          >
            <FaEnvelope />
            {lang === "en" ? "info.aivonixlabs@gmail.com" : "ای میل کریں"}
          </a>

          <a
            href="https://wa.me/923187564697"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-400 hover:text-green-400 transition mt-3 text-sm"
          >
            <FaWhatsapp />
            {lang === "en" ? "+92 3187564697" : "واٹس ایپ چیٹ"}
          </a>

        </div>

      </div>

      {/* COPYRIGHT */}
      <div className="text-center text-gray-500 text-xs mt-10 border-t border-gray-800 pt-5">
        © 2026 Aivonix Labs.{" "}
        {lang === "en"
          ? "All rights reserved."
          : "تمام حقوق محفوظ ہیں۔"}
      </div>

    </footer>
  );
}