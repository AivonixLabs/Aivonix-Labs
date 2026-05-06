"use client";

import { useLanguage } from "../context/LanguageContext";
import {
  FaUsers,
  FaRocket,
  FaLightbulb,
} from "react-icons/fa";

export default function About() {
  const { lang } = useLanguage();

  return (
    <main className="min-h-screen bg-[#020817] text-white overflow-hidden">

      {/* HERO */}
      <section className="relative pt-28 pb-20 px-5">

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(37,99,235,0.18),transparent_40%)]" />

        <div className="max-w-7xl mx-auto relative z-10 text-center">

          <button
            className="mb-6 border border-blue-500/30 bg-blue-500/10
            text-blue-300 text-sm px-4 py-2 rounded-full"
          >
            {lang === "en"
              ? "About Aivonix Labs"
              : "ایوونکس لیبز کے بارے میں"}
          </button>

          <h1
            className="text-4xl sm:text-5xl lg:text-5xl
            font-black leading-tight"
          >
            {lang === "en"
              ? "Our Identity & Vision"
              : "ہماری شناخت اور وژن"}
          </h1>

          <p
            className="mt-6 text-gray-400 max-w-4xl mx-auto
            text-base sm:text-lg leading-8"
          >
            {lang === "en"
              ? "At Aivonix Labs, we are passionate about transforming ideas into powerful digital experiences. Our mission is to help businesses innovate, scale and succeed by building high-performance web, mobile and AI-driven solutions tailored to modern challenges."
              : "ایوونکس لیبز میں ہم آئیڈیاز کو جدید اور طاقتور ڈیجیٹل تجربات میں تبدیل کرنے پر یقین رکھتے ہیں۔ ہمارا مقصد کاروباروں کو جدید ویب، موبائل اور AI سلوشنز کے ذریعے ترقی اور کامیابی کی راہ پر گامزن کرنا ہے۔"}
          </p>

          
        </div>
      </section>

  
      {/* STORY */}
<section className="max-w-7xl mx-auto px-5 py-14">

  <div className="grid lg:grid-cols-2 gap-8">

    {/* CONTENT BOX */}
    <div
      className="bg-[#071224]
      border border-white/10 rounded-3xl
      p-8 md:p-10
      hover:border-blue-500/40
      transition-all duration-300"
    >

      <div
        className="w-16 h-16 rounded-2xl bg-blue-500/15
        text-blue-400 flex items-center justify-center text-2xl"
      >
        <FaUsers />
      </div>

      <h2 className="text-3xl font-black mt-6">
        {lang === "en"
          ? "Our Journey"
          : "ہماری کہانی"}
      </h2>

      <p className="text-gray-400 leading-8 mt-5">
        {lang === "en"
          ? "Aivonix Labs began as a small group of passionate developers with a shared vision — to create meaningful digital products that solve real-world problems. Over time, we evolved into a dynamic team delivering innovative solutions for startups and enterprises worldwide."
          : "ایوونکس لیبز ایک چھوٹی مگر پرجوش ٹیم سے شروع ہوا جس کا خواب تھا کہ ایسے ڈیجیٹل حل بنائے جائیں جو حقیقی دنیا کے مسائل حل کریں۔ وقت کے ساتھ ہم نے خود کو ایک مضبوط ٹیم میں تبدیل کیا جو دنیا بھر کے کلائنٹس کے لیے جدید سلوشنز فراہم کرتی ہے۔"}
      </p>

    </div>

    {/* IMAGE BOX */}
    <div
      className="bg-[#071224]
      border border-white/10 rounded-3xl
      overflow-hidden
      hover:border-blue-500/40
      transition-all duration-300"
    >
      <img
        src="https://images.unsplash.com/photo-1522071820081-009f0129c71c"
        alt="Our Journey"
        className="w-full h-full min-h-350px object-cover hover:scale-105 transition duration-500"
      />
    </div>

  </div>
</section>

{/* GROWTH */}
<section className="max-w-7xl mx-auto px-5 py-6">

  <div className="grid lg:grid-cols-2 gap-8">

    {/* IMAGE BOX */}
    <div
      className="bg-[#071224]
      border border-white/10 rounded-3xl
      overflow-hidden
      hover:border-green-500/40
      transition-all duration-300"
    >
      <img
        src="ab2.png"
        alt="Growth"
        className="w-full h-full min-h-350px object-cover hover:scale-105 transition duration-500"
      />
    </div>

    {/* CONTENT BOX */}
    <div
      className="bg-[#071224]
      border border-white/10 rounded-3xl
      p-8 md:p-10
      hover:border-green-500/40
      transition-all duration-300"
    >

      <div
        className="w-16 h-16 rounded-2xl bg-green-500/15
        text-green-400 flex items-center justify-center text-2xl"
      >
        <FaRocket />
      </div>

      <h2 className="text-3xl font-black mt-6">
        {lang === "en"
          ? "Continuous Growth & Innovation"
          : "مسلسل ترقی اور جدت"}
      </h2>

      <p className="text-gray-400 leading-8 mt-5">
        {lang === "en"
          ? "We constantly explore and adopt the latest technologies to stay ahead in the digital space. Our focus is on building fast, secure and scalable systems that empower businesses to grow confidently in a competitive market."
          : "ہم مسلسل نئی ٹیکنالوجیز سیکھتے اور اپناتے ہیں تاکہ ڈیجیٹل دنیا میں آگے رہ سکیں۔ ہمارا مقصد ایسے سسٹمز بنانا ہے جو تیز، محفوظ اور اسکیل ایبل ہوں اور کاروبار کو ترقی دیں۔"}
      </p>

    </div>

  </div>
</section>

{/* VISION */}
<section className="max-w-7xl mx-auto px-5 py-14">

  <div className="grid lg:grid-cols-2 gap-8">

    {/* CONTENT BOX */}
    <div
      className="bg-[#071224]
      border border-white/10 rounded-3xl
      p-8 md:p-10
      hover:border-purple-500/40
      transition-all duration-300"
    >

      <div
        className="w-16 h-16 rounded-2xl bg-purple-500/15
        text-purple-400 flex items-center justify-center text-2xl"
      >
        <FaLightbulb />
      </div>

      <h2 className="text-3xl font-black mt-6">
        {lang === "en"
          ? "Our Vision for the Future"
          : "مستقبل کے لیے ہماری ویژن"}
      </h2>

      <p className="text-gray-400 leading-8 mt-5">
        {lang === "en"
          ? "Our vision is to become a global leader in digital transformation by delivering innovative and impactful solutions. We aim to empower businesses with technology that drives long-term success and sustainable growth."
          : "ہماری ویژن ہے کہ ہم عالمی سطح پر ایک نمایاں ڈیجیٹل کمپنی بنیں جو جدید اور مؤثر حل فراہم کرے۔ ہم کاروباروں کو ایسی ٹیکنالوجی دینا چاہتے ہیں جو انہیں طویل مدتی کامیابی دے۔"}
      </p>

    </div>

    {/* IMAGE BOX */}
    <div
      className="bg-[#071224]
      border border-white/10 rounded-3xl
      overflow-hidden
      hover:border-purple-500/40
      transition-all duration-300"
    >
      <img
        src="ab3.png"
        alt="Vision"
        className="w-full h-full min-h-350px object-cover hover:scale-105 transition duration-500"
      />
    </div>

  </div>
</section>


      {/* VALUES */}
      <section className="py-20 px-5 bg-[#040d1d]">

        <div className="max-w-7xl mx-auto">

          <div className="text-center">

            <button
              className="mb-5 border border-blue-500/20
              bg-blue-500/10 text-blue-300
              px-4 py-2 rounded-full text-sm"
            >
              {lang === "en"
                ? "Our Core Values"
                : "ہماری بنیادی اقدار"}
            </button>

            <h2 className="text-5xl font-black">
              {lang === "en"
                ? "What Drives Us"
                : "ہماری طاقت"}
            </h2>

            <p className="max-w-3xl mx-auto mt-6 text-gray-400 leading-8">
              {lang === "en"
                ? "The principles that shape every project, partnership and innovation at Aivonix Labs."
                : "وہ اقدار جو ایوونکس لیبز کے ہر پروجیکٹ اور انوویشن کو مضبوط بناتی ہیں۔"}
            </p>

          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 mt-16">

            {[
              {
                icon: <FaUsers />,
                title:
                  lang === "en"
                    ? "Strong Collaboration"
                    : "مضبوط تعاون",
                desc:
                  lang === "en"
                    ? "We believe in working closely with our clients to fully understand their vision and deliver meaningful results."
                    : "ہم کلائنٹس کے ساتھ مل کر کام کرتے ہیں تاکہ ان کی ضروریات کو بہتر سمجھ کر بہترین نتائج دے سکیں۔",
                bg: "bg-blue-500",
              },

              {
                icon: <FaRocket />,
                title:
                  lang === "en"
                    ? "Performance & Quality"
                    : "کارکردگی اور معیار",
                desc:
                  lang === "en"
                    ? "Every product we build is optimized for speed, performance and scalability to ensure long-term success."
                    : "ہم ہر پروڈکٹ کو تیز، موثر اور اسکیل ایبل بناتے ہیں تاکہ طویل مدتی کامیابی حاصل ہو۔",
                bg: "bg-green-500",
              },

              {
                icon: <FaLightbulb />,
                title:
                  lang === "en"
                    ? "Innovation & Creativity"
                    : "جدت اور تخلیقی صلاحیت",
                desc:
                  lang === "en"
                    ? "We combine creative thinking with modern technology to build unique and powerful digital solutions."
                    : "ہم تخلیقی سوچ اور جدید ٹیکنالوجی کو ملا کر منفرد اور طاقتور حل تیار کرتے ہیں۔",
                bg: "bg-purple-500",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-[#071224]
                border border-white/10 rounded-3xl p-8
                hover:border-blue-500/40
                hover:-translate-y-1
                transition-all duration-300"
              >

                <div
                  className={`${item.bg}
                  w-14 h-14 rounded-2xl
                  flex items-center justify-center text-2xl`}
                >
                  {item.icon}
                </div>

                <h3 className="text-2xl font-bold mt-6">
                  {item.title}
                </h3>

                <p className="text-gray-400 mt-4 leading-7 text-sm">
                  {item.desc}
                </p>

              </div>
            ))}

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="max-w-6xl mx-auto px-5 py-24">

        <div
          className="bg-linear-to-r from-blue-600/20 to-indigo-600/20
          border border-blue-500/20 rounded-3xl p-10 text-center"
        >

          <div
            className="w-16 h-16 rounded-2xl bg-blue-500/20
            text-blue-400 flex items-center justify-center
            text-3xl mx-auto"
          >
            <FaLightbulb />
          </div>

          <h2 className="text-4xl font-black mt-6">
            {lang === "en"
              ? "Let’s Turn Your Vision Into Reality"
              : "اپنے خواب کو حقیقت میں بدلیں"}
          </h2>

          <p className="text-gray-400 mt-5 max-w-2xl mx-auto leading-8">
            {lang === "en"
              ? "Partner with Aivonix Labs and let’s create something innovative, scalable and impactful together."
              : "ایوونکس لیبز کے ساتھ مل کر جدید اور طاقتور پروڈکٹس بنائیں جو آپ کے کاروبار کو آگے لے جائیں۔"}
          </p>

          <button
            onClick={() => (window.location.href = "/contact")}
            className="mt-8 h-14 px-8 rounded-xl
            bg-linear-to-r from-indigo-500 via-blue-500 to-purple-500
            hover:scale-105 transition-all duration-300
            font-semibold text-lg"
          >
            {lang === "en"
              ? "Contact Us"
              : "رابطہ کریں"}
          </button>

        </div>
      </section>

    </main>
  );
}