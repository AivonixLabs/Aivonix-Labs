"use client";

import Link from "next/link";
import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";



export default function Header() {
  const { lang, setLang } = useLanguage();
  const [langOpen, setLangOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 h-16 flex items-center justify-between px-6 bg-black/90 backdrop-blur border-b border-gray-800">

      {/* LOGO */}
      <Link href="/" className="flex items-center h-full">
      <img
       src="/logo.jpeg"
       alt="logo"
       className="h-12 w-12 rounded-full object-cover border border-gray-700"
       />
      </Link>

      {/* RIGHT SIDE */}
      <div className="flex items-center gap-6">

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex gap-6 text-gray-300">
          <Link href="/">{lang === "en" ? "Home" : "ہوم"}</Link>
          <Link href="/about">{lang === "en" ? "About" : "ہمارے بارے میں"}</Link>
          <Link href="/services">{lang === "en" ? "Services" : "خدمات"}</Link>
          <Link href="/portfolio">{lang === "en" ? "Portfolio" : "پورٹ فولیو"}</Link>
          <Link href="/careers">{lang === "en" ? "Careers" : "کیریئر"}</Link>
          <Link href="/contact">{lang === "en" ? "Contact" : "رابطہ"}</Link>
        </nav>

        {/* LANGUAGE */}
        <div className="relative">
          <button
            onClick={() => setLangOpen(!langOpen)}
            className="px-3 py-1 border border-gray-600 rounded text-sm hover:bg-white hover:text-black"
          >
            {lang === "en" ? "EN" : "اردو"} ▼
          </button>

          {langOpen && (
            <div className="absolute right-0 mt-2 w-32 bg-[#111] border border-gray-700 rounded z-50">
              <button
                onClick={() => {
                  setLang("en");
                  setLangOpen(false);
                }}
                className="w-full text-left px-3 py-2 hover:bg-purple-600"
              >
                English
              </button>

              <button
                onClick={() => {
                  setLang("ur");
                  setLangOpen(false);
                }}
                className="w-full text-left px-3 py-2 hover:bg-purple-600"
              >
                اردو
              </button>
            </div>
          )}
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-black border-t border-gray-800 md:hidden z-40">
          <div className="flex flex-col p-4 gap-3 text-gray-300">

            <Link onClick={() => setMenuOpen(false)} href="/">
              {lang === "en" ? "Home" : "ہوم"}
            </Link>

            <Link onClick={() => setMenuOpen(false)} href="/about">
              {lang === "en" ? "About" : "ہمارے بارے میں"}
            </Link>

            <Link onClick={() => setMenuOpen(false)} href="/services">
              {lang === "en" ? "Services" : "خدمات"}
            </Link>

            <Link onClick={() => setMenuOpen(false)} href="/portfolio">
              {lang === "en" ? "Portfolio" : "پورٹ فولیو"}
            </Link>

            <Link onClick={() => setMenuOpen(false)} href="/careers">
              {lang === "en" ? "Careers" : "کیریئر"}
            </Link>

            <Link onClick={() => setMenuOpen(false)} href="/contact">
              {lang === "en" ? "Contact" : "رابطہ"}
            </Link>

          </div>
        </div>
      )}
    </header>
  );
}