"use client";

import { useMemo, useRef, useState } from "react";
import {
  Briefcase,
  MapPin,
  Clock3,
  Search,
  ChevronDown,
  Rocket,
  Users,
  Wallet,
  GraduationCap,
  ArrowUpRight,
} from "lucide-react";

import { useLanguage } from "../context/LanguageContext";

type JobType = {
  id: number;
  title: {
    en: string;
    ur: string;
  };
  department: {
    en: string;
    ur: string;
  };
  type: {
    en: string;
    ur: string;
  };
  location: {
    en: string;
    ur: string;
  };
  remote: {
    en: string;
    ur: string;
  };
  description: {
    en: string;
    ur: string;
  };
  qualifications: {
    en: string[];
    ur: string[];
  };
  posted: string;
};

export default function Careers() {
  const { lang } = useLanguage();

  const formRef = useRef<HTMLDivElement | null>(null);

  const [selectedJob, setSelectedJob] = useState("");
  const [search, setSearch] = useState("");
  const [team, setTeam] = useState("All");
  const [jobType, setJobType] = useState("All");
  const [location, setLocation] = useState("All");
  const [remoteOption, setRemoteOption] = useState("All");

  const jobs: JobType[] = [
    {
      id: 1,
      title: {
        en: "Software Engineering Intern",
        ur: "سافٹ ویئر انجینئرنگ انٹرن",
      },
      department: {
        en: "Engineering Team",
        ur: "انجینئرنگ ٹیم",
      },
      type: {
        en: "Internship",
        ur: "انٹرن شپ",
      },
      location: {
        en: "Lahore, Pakistan",
        ur: "لاہور، پاکستان",
      },
      remote: {
        en: "Remote",
        ur: "ریموٹ",
      },
      description: {
        en: "Hands-on internship to learn full-stack engineering.",
        ur: "فل اسٹیک انجینئرنگ سیکھنے کے لیے عملی انٹرن شپ۔",
      },
      qualifications: {
        en: [
          "Currently enrolled in CS or related program",
          "Basic JavaScript / React knowledge",
        ],
        ur: [
          "کمپیوٹر سائنس یا متعلقہ پروگرام میں داخلہ",
          "جاوا اسکرپٹ / ری ایکٹ کی بنیادی سمجھ",
        ],
      },
      posted: "Nov 14, 2025",
    },

    {
      id: 2,
      title: {
        en: "Frontend Engineer",
        ur: "فرنٹ اینڈ انجینئر",
      },
      department: {
        en: "Engineering Team",
        ur: "انجینئرنگ ٹیم",
      },
      type: {
        en: "Full-time",
        ur: "فل ٹائم",
      },
      location: {
        en: "Lahore, Pakistan",
        ur: "لاہور، پاکستان",
      },
      remote: {
        en: "Remote",
        ur: "ریموٹ",
      },
      description: {
        en: "Build delightful user experiences using React and Next.js.",
        ur: "ری ایکٹ اور نیکسٹ جے ایس سے جدید یوزر انٹرفیس بنائیں۔",
      },
      qualifications: {
        en: [
          "2+ years frontend experience",
          "Strong React / Next.js skills",
        ],
        ur: [
          "2+ سال فرنٹ اینڈ تجربہ",
          "ری ایکٹ / نیکسٹ جے ایس میں مہارت",
        ],
      },
      posted: "Oct 10, 2025",
    },

    {
      id: 3,
      title: {
        en: "Product Designer",
        ur: "پروڈکٹ ڈیزائنر",
      },
      department: {
        en: "Design Team",
        ur: "ڈیزائن ٹیم",
      },
      type: {
        en: "Full-time",
        ur: "فل ٹائم",
      },
      location: {
        en: "Lahore, Pakistan",
        ur: "لاہور، پاکستان",
      },
      remote: {
        en: "Onsite",
        ur: "آن سائٹ",
      },
      description: {
        en: "Design intuitive interfaces and scalable design systems.",
        ur: "جدید اور آسان انٹرفیس ڈیزائن کریں۔",
      },
      qualifications: {
        en: [
          "Strong UI/UX portfolio",
          "Experience with Figma",
        ],
        ur: [
          "بہترین UI/UX پورٹ فولیو",
          "فگما کا تجربہ",
        ],
      },
      posted: "Sep 20, 2025",
    },

    {
      id: 4,
      title: {
        en: "Backend Developer",
        ur: "بیک اینڈ ڈویلپر",
      },
      department: {
        en: "Engineering Team",
        ur: "انجینئرنگ ٹیم",
      },
      type: {
        en: "Full-time",
        ur: "فل ٹائم",
      },
      location: {
        en: "Islamabad, Pakistan",
        ur: "اسلام آباد، پاکستان",
      },
      remote: {
        en: "Remote",
        ur: "ریموٹ",
      },
      description: {
        en: "Build APIs and scalable backend services.",
        ur: "اسکیل ایبل APIs اور بیک اینڈ سروسز بنائیں۔",
      },
      qualifications: {
        en: [
          "Node.js & Express expertise",
          "Database management experience",
        ],
        ur: [
          "Node.js اور Express میں مہارت",
          "ڈیٹا بیس مینجمنٹ کا تجربہ",
        ],
      },
      posted: "Oct 01, 2025",
    },

    {
      id: 5,
      title: {
        en: "AI / ML Engineer",
        ur: "اے آئی / ایم ایل انجینئر",
      },
      department: {
        en: "AI Team",
        ur: "اے آئی ٹیم",
      },
      type: {
        en: "Full-time",
        ur: "فل ٹائم",
      },
      location: {
        en: "Remote",
        ur: "ریموٹ",
      },
      remote: {
        en: "Remote",
        ur: "ریموٹ",
      },
      description: {
        en: "Work on intelligent automation and AI systems.",
        ur: "اے آئی اور آٹومیشن سسٹمز پر کام کریں۔",
      },
      qualifications: {
        en: [
          "Python & ML knowledge",
          "Experience with AI frameworks",
        ],
        ur: [
          "Python اور ML کی سمجھ",
          "AI فریم ورک کا تجربہ",
        ],
      },
      posted: "Nov 02, 2025",
    },

    {
      id: 6,
      title: {
        en: "DevOps Engineer",
        ur: "ڈیو اوپس انجینئر",
      },
      department: {
        en: "Cloud Team",
        ur: "کلاؤڈ ٹیم",
      },
      type: {
        en: "Full-time",
        ur: "فل ٹائم",
      },
      location: {
        en: "Karachi, Pakistan",
        ur: "کراچی، پاکستان",
      },
      remote: {
        en: "Hybrid",
        ur: "ہائبرڈ",
      },
      description: {
        en: "Manage CI/CD pipelines and cloud infrastructure.",
        ur: "CI/CD اور کلاؤڈ انفراسٹرکچر مینج کریں۔",
      },
      qualifications: {
        en: [
          "AWS / Docker experience",
          "CI/CD pipeline management",
        ],
        ur: [
          "AWS / Docker کا تجربہ",
          "CI/CD پائپ لائن مینجمنٹ",
        ],
      },
      posted: "Sep 15, 2025",
    },
  ];

  const filteredJobs = useMemo(() => {
    return jobs.filter((job) => {
      const matchesSearch =
        job.title[lang]
          .toLowerCase()
          .includes(search.toLowerCase()) ||
        job.department[lang]
          .toLowerCase()
          .includes(search.toLowerCase());

      const matchesTeam =
        team === "All" ||
        job.department.en.toLowerCase().includes(team.toLowerCase());

      const matchesType =
        jobType === "All" ||
        job.type.en.toLowerCase() === jobType.toLowerCase();

      const matchesLocation =
        location === "All" ||
        job.location.en.toLowerCase().includes(location.toLowerCase());

      const matchesRemote =
        remoteOption === "All" ||
        job.remote.en.toLowerCase() === remoteOption.toLowerCase();

      return (
        matchesSearch &&
        matchesTeam &&
        matchesType &&
        matchesLocation &&
        matchesRemote
      );
    });
  }, [search, team, jobType, location, remoteOption, jobs, lang]);

  const scrollToForm = (job: string) => {
    setSelectedJob(job);

    setTimeout(() => {
      formRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 150);
  };

  return (
    <main className="min-h-screen bg-[#020817] text-white overflow-hidden max-w-7xl mx-auto">

      {/* HERO */}
<section className="relative pt-34 pb-20 px-5 overflow-hidden">

  {/* BACKGROUND GLOW */}
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.22),transparent_45%)]" />

  <div className="max-w-7xl mx-auto relative z-10 text-center">

    {/* TOP BADGE */}
    <button
      className="mb-6 border border-indigo-500/30 bg-indigo-500/10
      text-indigo-300 text-sm px-5 py-2 rounded-full
      backdrop-blur-xl hover:border-indigo-400 transition"
    >
      {lang === "en"
        ? "We’re Hiring Developers"
        : "ہم ڈویلپرز ہائر کر رہے ہیں"}
    </button>

    {/* TITLE */}
    <h1
      className="text-4xl sm:text-5xl lg:text-5xl
      font-black leading-tight max-w-5xl mx-auto"
    >
      {lang === "en"
        ? "Shape Your Future in Tech With Us"
        : "ٹیکنالوجی میں اپنا مستقبل ہمارے ساتھ بنائیں"}
    </h1>

    {/* DESCRIPTION */}
    <p
      className="mt-6 text-gray-400 max-w-3xl
      mx-auto text-base sm:text-lg leading-8"
    >
      {lang === "en"
        ? "Join a fast-growing product team where innovation, creativity, and real-world impact come together to build powerful digital solutions."
        : "ایک تیزی سے بڑھتی ہوئی پروڈکٹ ٹیم کا حصہ بنیں جہاں انوویشن اور تخلیق مل کر مضبوط ڈیجیٹل سلوشنز بناتے ہیں۔"}
    </p>

    {/* STATS */}
<div className="flex flex-wrap justify-center gap-12 mt-24">

  {/* 1 */}
  <div className="text-center">
    <h3 className="text-5xl font-black text-blue-400">
      6+
    </h3>

    <p className="text-gray-400 text-sm mt-2 tracking-wide">
      {lang === "en" ? "Open Positions" : "اوپن پوزیشنز"}
    </p>
  </div>

  {/* 2 */}
  <div className="text-center">
    <h3 className="text-5xl font-black text-green-400">
      100%
    </h3>

    <p className="text-gray-400 text-sm mt-2 tracking-wide">
      {lang === "en" ? "Remote Friendly" : "ریموٹ فرینڈلی"}
    </p>
  </div>

  {/* 3 */}
  <div className="text-center">
    <h3 className="text-5xl font-black text-purple-400">
      24/7
    </h3>

    <p className="text-gray-400 text-sm mt-2 tracking-wide">
      {lang === "en"
        ? "Support & Mentorship"
        : "سپورٹ اور مینٹورشپ"}
    </p>
  </div>

  {/* 4 */}
  <div className="text-center">
    <h3 className="text-5xl font-black text-cyan-400">
      Global
    </h3>

    <p className="text-gray-400 text-sm mt-2 tracking-wide">
      {lang === "en"
        ? "Team Collaboration"
        : "عالمی ٹیم ورک"}
    </p>
  </div>

</div>

  </div>
</section>

{/* FILTER */}
<section className="px-16">

  <div className="max-w-7xl mx-auto bg-[#071224]
  border border-white/10 rounded-3xl p-6">

    {/* HEADER */}
    <div className="flex items-center gap-2 mb-5">
      <Briefcase size={18} className="text-blue-400" />

      <h2 className="font-semibold text-lg text-white">
        {lang === "en"
          ? "Filter Opportunities"
          : "مواقع تلاش کریں"}
      </h2>
    </div>

    {/* SEARCH + BUTTON */}
    <div className="flex gap-3 flex-col md:flex-row">

      <div className="relative w-full">

        <Search
          className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
          size={18}
        />

        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder={lang === "en" ? "Role, team, skills..." : "رول، ٹیم، اسکلز..."}
          className="w-full bg-[#0c1729]
          border border-white/10 rounded-xl
          h-14 pl-12 pr-4 outline-none
          focus:border-blue-500 transition"
        />
      </div>

      <button
        onClick={() => window.scrollTo({ top: 800, behavior: "smooth" })}
        className="h-14 px-8 rounded-xl
        bg-linear-to-r from-indigo-500 via-blue-500 to-purple-500
        font-semibold text-white
        hover:opacity-90 hover:scale-[1.02]
        transition whitespace-nowrap"
      >
        {lang === "en" ? "Apply Filters" : "فلٹر لگائیں"}
      </button>

    </div>

    {/* FILTER GRID */}
    <div className="grid md:grid-cols-4 gap-4 mt-5">

      {/* TEAM */}
      <div className="relative">
        <p className="text-sm text-gray-400 mb-2">
          {lang === "en" ? "Team" : "ٹیم"}
        </p>

        <select
          value={team}
          onChange={(e) => setTeam(e.target.value)}
          className="appearance-none w-full h-12 rounded-xl
          bg-[#0c1729] border border-white/10 px-4 outline-none"
        >
          <option>All</option>
          <option>Engineering</option>
          <option>Design</option>
          <option>AI</option>
        </select>

        <ChevronDown size={18}
          className="absolute right-4 top-[55%] text-gray-500 pointer-events-none"
        />
      </div>

      {/* TYPE */}
      <div className="relative">
        <p className="text-sm text-gray-400 mb-2">
          {lang === "en" ? "Job Type" : "قسم"}
        </p>

        <select
          value={jobType}
          onChange={(e) => setJobType(e.target.value)}
          className="appearance-none w-full h-12 rounded-xl
          bg-[#0c1729] border border-white/10 px-4 outline-none"
        >
          <option>All</option>
          <option>Full-time</option>
          <option>Internship</option>
        </select>

        <ChevronDown size={18}
          className="absolute right-4 top-[55%] text-gray-500 pointer-events-none"
        />
      </div>

      {/* LOCATION */}
      <div className="relative">
        <p className="text-sm text-gray-400 mb-2">
          {lang === "en" ? "Location" : "مقام"}
        </p>

        <select
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="appearance-none w-full h-12 rounded-xl
          bg-[#0c1729] border border-white/10 px-4 outline-none"
        >
          <option>All</option>
          <option>Lahore, Pakistan</option>
          <option>Remote</option>
        </select>

        <ChevronDown size={18}
          className="absolute right-4 top-[55%] text-gray-500 pointer-events-none"
        />
      </div>

      {/* WORK MODE */}
      <div className="relative">
        <p className="text-sm text-gray-400 mb-2">
          {lang === "en" ? "Work Mode" : "کام کا انداز"}
        </p>

        <select
          value={remoteOption}
          onChange={(e) => setRemoteOption(e.target.value)}
          className="appearance-none w-full h-12 rounded-xl
          bg-[#0c1729] border border-white/10 px-4 outline-none"
        >
          <option>All</option>
          <option>Remote</option>
          <option>Onsite</option>
          <option>Hybrid</option>
        </select>

        <ChevronDown size={18}
          className="absolute right-4 top-[55%] text-gray-500 pointer-events-none"
        />
      </div>

    </div>

  </div>

</section>

    

      {/* JOBS */}
<section className="max-w-7xl mx-auto px-5 py-20">

  <div className="mb-10">

    <h2 className="text-4xl font-black">
      {lang === "en" ? "Current Opportunities" : "موجودہ مواقع"}
    </h2>

    <p className="text-gray-400 mt-2">
      {filteredJobs.length}{" "}
      {lang === "en"
        ? "positions waiting for you"
        : "مواقع آپ کے انتظار میں ہیں"}
    </p>
  </div>

  {/* GRID UPDATED → 2 PER ROW */}
  <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6">

    {filteredJobs.map((job) => (
      <div
        key={job.id}
        className="bg-[#071224]
        border border-white/10 rounded-3xl p-6
        hover:border-blue-500/50
        hover:-translate-y-1
        transition-all duration-300"
      >

        {/* TAGS */}
        <div className="flex gap-2 flex-wrap mb-5">

          <span className="bg-blue-500/15 text-blue-300 px-3 py-1 rounded-full text-xs">
            {job.type[lang]}
          </span>

          <span className="bg-green-500/15 text-green-300 px-3 py-1 rounded-full text-xs">
            {job.remote[lang]}
          </span>

        </div>

        <h3 className="text-2xl font-bold">
          {job.title[lang]}
        </h3>

        <p className="text-gray-400 mt-2">
          {job.department[lang]}
        </p>

        <p className="text-sm text-gray-400 mt-5 leading-7">
          {job.description[lang]}
        </p>

        {/* INFO */}
        <div className="flex flex-wrap gap-4 text-gray-400 text-sm mt-6">

          <div className="flex items-center gap-2">
            <MapPin size={15} />
            {job.location[lang]}
          </div>

          <div className="flex items-center gap-2">
            <Clock3 size={15} />
            {lang === "en" ? "Posted Recently" : "حال ہی میں پوسٹ کیا گیا"}
          </div>

        </div>

        {/* QUALIFICATIONS */}
        <div className="mt-6 border-t border-white/10 pt-5">

          <p className="text-sm font-semibold mb-3 text-gray-300">
            {lang === "en"
              ? "WHAT WE ARE LOOKING FOR"
              : "ہم کیا تلاش کر رہے ہیں"}
          </p>

          <ul className="space-y-2 text-sm text-gray-400">

            {job.qualifications[lang].map((item, index) => (
              <li key={index}>• {item}</li>
            ))}

          </ul>
        </div>

        {/* BUTTONS */}
        <div className="grid grid-cols-2 gap-3 mt-8">

          <button
            onClick={() => scrollToForm(job.title[lang])}
            className="h-12 rounded-xl 
           bg-linear-to-r from-indigo-500 via-blue-500 to-purple-500"
          >
            {lang === "en" ? "Apply Now" : "اب اپلائی کریں"}
          </button>

          <button
            onClick={() =>
              alert(
                lang === "en"
                  ? `More info: ${job.title.en}`
                  : `مزید معلومات: ${job.title.ur}`
              )
            }
            className="h-12 rounded-xl border border-white/10
            hover:border-blue-500 text-gray-300
            flex items-center justify-center gap-2 transition"
          >
            {lang === "en" ? "Details" : "تفصیل"}
            <ArrowUpRight size={16} />
          </button>

        </div>
      </div>
    ))}
  </div>
</section>

      {/* WHY JOIN */}
<section className="py-24 px-5 bg-[#040d1d]">

  <div className="max-w-7xl mx-auto">

    <div className="text-center">

      <button
        className="mb-5 border border-blue-500/20
        bg-blue-500/10 text-blue-300
        px-4 py-2 rounded-full text-sm"
      >
        {lang === "en" ? "Work With Us" : "ہمارے ساتھ کام کریں"}
      </button>

      <h2 className="text-5xl font-black">
        {lang === "en" ? "Grow Your Career With Us" : "اپنے کیریئر کو ہمارے ساتھ بڑھائیں"}
      </h2>

      <p className="max-w-3xl mx-auto mt-6 text-gray-400 leading-8">
        {lang === "en"
          ? "We believe in innovation, teamwork, and continuous growth. Join us and be part of a future-driven tech company."
          : "ہم جدت، ٹیم ورک اور مسلسل ترقی پر یقین رکھتے ہیں۔ ہمارے ساتھ شامل ہوں۔"}
      </p>
    </div>

    <div className="grid md:grid-cols-2 gap-6 mt-16">

      {[
        {
          icon: <Wallet size={22} />,
          title:
            lang === "en"
              ? "Great Salary Packages"
              : "بہترین تنخواہ پیکیج",
          text:
            lang === "en"
              ? "We offer competitive salaries with performance-based growth."
              : "ہم بہترین تنخواہ اور پرفارمنس بیسڈ گروتھ دیتے ہیں۔",
          bg: "bg-green-500",
        },

        {
          icon: <GraduationCap size={22} />,
          title:
            lang === "en"
              ? "Skill Development"
              : "مہارت کی ترقی",
          text:
            lang === "en"
              ? "Learn new technologies and improve your career skills."
              : "نئی ٹیکنالوجیز سیکھیں اور اپنی مہارت بڑھائیں۔",
          bg: "bg-blue-500",
        },

        {
          icon: <Users size={22} />,
          title:
            lang === "en"
              ? "Strong Team Culture"
              : "بہترین ٹیم کلچر",
          text:
            lang === "en"
              ? "Work with friendly and highly skilled professionals."
              : "ماہر اور دوستانہ ٹیم کے ساتھ کام کریں۔",
          bg: "bg-pink-500",
        },

        {
          icon: <Rocket size={22} />,
          title:
            lang === "en"
              ? "Future-Ready Projects"
              : "مستقبل کے پروجیکٹس",
          text:
            lang === "en"
              ? "Work on modern and innovative real-world projects."
              : "جدید اور حقیقی دنیا کے پروجیکٹس پر کام کریں۔",
          bg: "bg-orange-500",
        },
      ].map((item, i) => (
        <div
          key={i}
          className="bg-[#071224]
          border border-white/10 rounded-3xl p-8"
        >

          <div
            className={`${item.bg}
            w-14 h-14 rounded-2xl
            flex items-center justify-center`}
          >
            {item.icon}
          </div>

          <h3 className="text-2xl font-bold mt-6">
            {item.title}
          </h3>

          <p className="text-gray-400 mt-4 leading-7">
            {item.text}
          </p>
        </div>
      ))}
    </div>

    <div className="text-center mt-14">

      <button
        onClick={() => {
          formRef.current?.scrollIntoView({
            behavior: "smooth",
          });
        }}
        className="bg-linear-to-r from-indigo-500 via-blue-500 to-purple-500
        px-8 h-12 rounded-xl font-semibold transition"
      >
        {lang === "en" ? "Start Your Journey" : "اپنا سفر شروع کریں"}
      </button>

    </div>
  </div>
</section>
      {/* APPLY FORM */}
<section
  ref={formRef}
  className="max-w-4xl mx-auto px-5 py-24"
>

  <div
    className="bg-[#071224]
    border border-white/10 rounded-3xl p-8 sm:p-10"
  >

    <h2 className="text-4xl font-black text-center">

      {selectedJob
        ? lang === "en"
          ? `Apply for ${selectedJob}`
          : `${selectedJob} کے لیے درخواست دیں`
        : lang === "en"
        ? "Join Our Team Today"
        : "آج ہی ہماری ٹیم جوائن کریں"}

    </h2>

    <p className="text-center text-gray-400 mt-4">
      {lang === "en"
        ? "Send your application and take the first step toward your tech career."
        : "اپنی درخواست بھیجیں اور اپنے کیریئر کا پہلا قدم اٹھائیں۔"}
    </p>

    <form
      onSubmit={(e) => {
        e.preventDefault();

        alert(
          lang === "en"
            ? "Your application has been submitted successfully 🎉"
            : "آپ کی درخواست کامیابی سے جمع ہوگئی 🎉"
        );

        setSelectedJob("");
      }}
      className="grid gap-5 mt-10"
    >

      <div className="grid md:grid-cols-2 gap-5">

        <input
          required
          type="text"
          placeholder={
            lang === "en" ? "Enter Your Full Name" : "اپنا پورا نام لکھیں"
          }
          className="h-14 px-4 rounded-xl
          bg-[#0c1729] border border-white/10
          outline-none focus:border-blue-500"
        />

        <input
          required
          type="email"
          placeholder="Enter Your Email Address"
          className="h-14 px-4 rounded-xl
          bg-[#0c1729] border border-white/10
          outline-none focus:border-blue-500"
        />
      </div>

      <div className="grid md:grid-cols-2 gap-5">

        <input
          required
          type="tel"
          placeholder={
            lang === "en"
              ? "Enter Phone Number"
              : "فون نمبر درج کریں"
          }
          className="h-14 px-4 rounded-xl
          bg-[#0c1729] border border-white/10
          outline-none focus:border-blue-500"
        />

        <input
          type="text"
          placeholder={
            lang === "en"
              ? "Portfolio / GitHub / LinkedIn"
              : "پورٹ فولیو / گٹ ہب / لنکڈ اِن"
          }
          className="h-14 px-4 rounded-xl
          bg-[#0c1729] border border-white/10
          outline-none focus:border-blue-500"
        />
      </div>

      <select
        required
        value={selectedJob}
        onChange={(e) => setSelectedJob(e.target.value)}
        className="h-14 px-4 rounded-xl
        bg-[#0c1729] border border-white/10
        outline-none focus:border-blue-500"
      >
        <option value="">
          {lang === "en"
            ? "Select a Job Position"
            : "جاب پوزیشن منتخب کریں"}
        </option>

        {jobs.map((job) => (
          <option key={job.id} value={job.title[lang]}>
            {job.title[lang]}
          </option>
        ))}
      </select>

      <textarea
        required
        placeholder={
          lang === "en"
            ? "Tell us why you're the best fit for this role..."
            : "ہمیں بتائیں کہ آپ اس رول کے لیے کیوں بہترین ہیں..."
        }
        className="min-h-40 p-4 rounded-xl
        bg-[#0c1729] border border-white/10
        outline-none focus:border-blue-500"
      />

      <input
        type="file"
        className="file:bg-linear-to-r file:from-indigo-500 file:via-blue-500 file:to-purple-500
        file:border-0 file:text-white file:px-5 file:py-3 file:rounded-lg
      text-gray-400"
      />

      <button
        className="h-14 rounded-xl
        bg-linear-to-r from-indigo-500 via-blue-500 to-purple-500
        hover:scale-[1.02] transition-all duration-300
        font-semibold text-lg"
      >
        {lang === "en"
          ? "Send Application"
          : "درخواست بھیجیں"}
      </button>

    </form>
  </div>
</section>
    </main>
  );
}