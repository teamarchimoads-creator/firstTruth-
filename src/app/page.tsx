"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useModal } from "@/context/ModalContext";

export default function Home() {
  const { openModal } = useModal();

  // 3D Parallax Mascot state
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  // Quick Loan EMI Calculator preview state
  const [calcAmount, setCalcAmount] = useState(2500000);
  const [calcRate, setCalcRate] = useState(8.5);
  const [calcTenure, setCalcTenure] = useState(15);

  const calculateEMI = () => {
    const principal = calcAmount;
    const monthlyRate = calcRate / (12 * 100);
    const months = calcTenure * 12;
    if (monthlyRate === 0) return Math.round(principal / months);
    const emi =
      (principal * monthlyRate * Math.pow(1 + monthlyRate, months)) /
      (Math.pow(1 + monthlyRate, months) - 1);
    return Math.round(emi);
  };

  const monthlyEmi = calculateEMI();
  const totalPayment = monthlyEmi * (calcTenure * 12);
  const totalInterest = Math.max(0, totalPayment - calcAmount);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
    setMousePos({ x, y });
  };

  const featuredServices = [
    {
      title: "Home Loan Consultation",
      href: "/services/home-loan",
      tagline: "For Purchasing Residential Property",
      description:
        "Help prospective homebuyers explore financing options, eligibility criteria, lender comparisons, and EMI estimates.",
      badge: "Residential Financing",
      icon: (
        <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
    },
    {
      title: "Business Loan Consultation",
      href: "/services/business-loan",
      tagline: "Working Capital, Equipment & Expansion",
      description:
        "Understand financing routes, vintage requirements, turnover assessments, and documentation commonly reviewed by lenders.",
      badge: "Commercial Growth",
      icon: (
        <svg className="w-6 h-6 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
    },
    {
      title: "Loan Against Property (LAP)",
      href: "/services/loan-against-property",
      tagline: "Unlock Capital with Existing Real Estate",
      description:
        "Leverage property value for business or major personal financing needs with clear collateral evaluation and lender policy review.",
      badge: "Property Collateral",
      icon: (
        <svg className="w-6 h-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
        </svg>
      ),
    },
    {
      title: "Vehicle Loan Consultation",
      href: "/services/vehicle-loan",
      tagline: "Private & Commercial Vehicles",
      description:
        "Financing guidance for commercial fleet and private automobiles, covering down payments and repayment periods.",
      badge: "Auto & Commercial",
      icon: (
        <svg className="w-6 h-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
        </svg>
      ),
    },
    {
      title: "Personal Loan Consultation",
      href: "/services/personal-loan",
      tagline: "Unsecured Financing for Eligible Needs",
      description:
        "Understand factors influencing personal loan offers including income, credit history, existing liabilities, and repayment capacity.",
      badge: "Flexible Needs",
      icon: (
        <svg className="w-6 h-6 text-rose-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
    },
  ];

  const processSteps = [
    { step: "01", title: "Understand Requirement", desc: "Discuss loan type, intended use, and approximate funding need." },
    { step: "02", title: "Review Profile", desc: "Consider income, business details, obligations, and credit history." },
    { step: "03", title: "Explore Options", desc: "Review relevant lenders and products matching your profile." },
    { step: "04", title: "Prepare Documentation", desc: "Understand documents needed and organize for application." },
    { step: "05", title: "Follow-Up & Clarity", desc: "Follow the application process and address lender queries." },
  ];

  return (
    <div className="relative w-full overflow-hidden">
      {/* Ambient background blur circles */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute -top-32 -left-32 w-[550px] h-[550px] bg-orange-100/40 rounded-full blur-3xl" />
        <div className="absolute top-24 right-0 w-[600px] h-[600px] bg-sky-50/70 rounded-full blur-3xl" />
        <div className="absolute top-[45%] left-[5%] w-[450px] h-[450px] bg-amber-50/50 rounded-full blur-3xl" />
        <div className="absolute top-[75%] right-[5%] w-[500px] h-[500px] bg-sky-50/60 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-20">

        {/* ========================================================= */}
        {/* HERO SECTION */}
        {/* ========================================================= */}
        <section className="pt-2 sm:pt-6 w-full">
          {/* ========================================================= */}

          {/* ========================================================= */}
          <div className="lg:hidden w-full">
            {/* Brand Pill */}
            <div className="inline-flex items-center gap-2 mb-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-200/80">
              <span className="w-2 h-2 rounded-full bg-[#F97316] animate-pulse" />
              <span className="text-[10px] font-bold tracking-wider text-[#0B1B3D] uppercase">
                FIRST TRUTH FINANCE CONSULTATIONS • ROHTAK, HARYANA
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-2xl sm:text-4xl font-black text-[#0B1B3D] tracking-tight leading-[1.14]">
              The Right Financial Guidance{" "}
              <span className="inline">
                Starts with the{" "}
                <span className="text-[#F97316] font-handwriting italic font-normal text-3xl sm:text-5xl inline-block -rotate-1">
                  Truth.
                </span>
              </span>
            </h1>

            <p className="mt-1 text-xs sm:text-sm font-semibold text-[#475569]">
              Loan syndication &amp; financial advisory trusted by borrowers across Haryana.
            </p>

            {/* Side-by-side: Stats on Left + Robot Mascot on Right */}
            <div className="mt-4 grid grid-cols-12 gap-2 items-center w-full">
              {/* Left Column: 3 Stacked Stats */}
              <div className="col-span-7 flex flex-col justify-center space-y-3 pr-1">
                <div className="space-y-2.5">
                  <div>
                    <div className="text-lg xs:text-xl font-black text-[#0B1B3D] tracking-tight leading-none">
                      5+ Loan Types
                    </div>
                    <div className="text-[10px] xs:text-[11px] font-medium text-[#64748B] mt-0.5">
                      Home, Business, LAP &amp; Auto
                    </div>
                  </div>

                  <div>
                    <div className="text-lg xs:text-xl font-black text-[#0B1B3D] tracking-tight leading-none">
                      100% Truth First
                    </div>
                    <div className="text-[10px] xs:text-[11px] font-medium text-[#64748B] mt-0.5">
                      Zero Unrealistic Commitments
                    </div>
                  </div>

                  <div>
                    <div className="text-lg xs:text-xl font-black text-[#0B1B3D] tracking-tight leading-none">
                      Rohtak, HR
                    </div>
                    <div className="text-[10px] xs:text-[11px] font-medium text-[#64748B] mt-0.5">
                      Led by Shubham Jain
                    </div>
                  </div>
                </div>

                {/* Mobile CTA Buttons */}
                <div className="pt-1 flex flex-col gap-2 w-full">
                  <Link
                    href="/services"
                    className="w-full py-2.5 px-4 rounded-full bg-gradient-to-r from-[#F97316] to-[#FB923C] text-white font-bold text-xs shadow-md shadow-orange-500/25 flex items-center justify-center gap-1.5 cursor-pointer active:scale-95 transition-transform text-center"
                  >
                    <span>Explore Loan Services</span>
                    <span>→</span>
                  </Link>
                  <button
                    onClick={() => openModal()}
                    className="w-full py-2.5 px-4 rounded-full bg-white border border-slate-300 text-[#0B1B3D] font-bold text-xs shadow-sm flex items-center justify-center gap-1.5 cursor-pointer active:scale-95 transition-transform"
                  >
                    <span>Talk to Our Team</span>
                    <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  </button>
                </div>
              </div>

              {/* Right Column: 3D Robot Mascot */}
              <div className="col-span-5 relative flex items-center justify-center">
                <div className="relative w-full max-w-[155px] xs:max-w-[175px] flex items-center justify-center select-none">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-orange-400/25 via-amber-300/15 to-sky-300/20 blur-xl" />
                  <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-20 xs:w-24 h-2 rounded-[100%] bg-slate-900/15 blur-sm" />
                  <div className="relative z-10 animate-float-robot w-full flex items-center justify-center">
                    <Image
                      src="/hero-robo.png"
                      alt="First Truth Mascot"
                      width={320}
                      height={460}
                      priority
                      unoptimized
                      className="w-full h-auto object-contain drop-shadow-[0_12px_24px_rgba(11,27,61,0.2)]"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Narrative & Philosophy on Mobile (Below Mascot) */}
            <div className="mt-6 space-y-3.5">
              <p className="text-xs text-[#475569] leading-relaxed">
                Making financial decisions becomes easier when you understand your options. First Truth Finance Consultations helps individuals, salaried professionals, self-employed applicants, and business owners explore loan options and navigate the documentation process.
              </p>
              <div className="p-4 rounded-2xl bg-gradient-to-r from-orange-50/80 via-white to-sky-50/60 border border-orange-200/90 shadow-sm w-full">
                <div className="text-[10px] font-bold text-[#F97316] uppercase tracking-wider mb-1">
                  Our Brand Philosophy
                </div>
                <div className="text-sm font-extrabold text-[#0B1B3D] tracking-tight">
                  Truth First. Transparent Guidance. Informed Decisions.
                </div>
                <p className="text-xs text-[#64748B] mt-1">
                  Clear communication about loan eligibility, documentation clarity, and applicable lender terms.
                </p>
              </div>
            </div>
          </div>

          {/* ========================================================= */}
          {/* DESKTOP VIEW (hidden lg:grid): Zero Gap, Full Balance     */}
          {/* ========================================================= */}
          <div className="hidden lg:grid grid-cols-12 gap-8 lg:gap-12 items-center w-full">

            {/* Left Column: Full Content with Zero Gaps */}
            <div className="col-span-7 flex flex-col items-start w-full">
              {/* Brand Pill */}
              <div className="inline-flex items-center gap-2 mb-3 px-3 py-1 rounded-full bg-orange-50 border border-orange-200/80">
                <span className="w-2 h-2 rounded-full bg-[#F97316] animate-pulse" />
                <span className="text-xs font-bold tracking-wider text-[#0B1B3D] uppercase">
                  FIRST TRUTH FINANCE CONSULTATIONS • ROHTAK, HARYANA
                </span>
              </div>

              {/* Headline */}
              <h1 className="text-4xl lg:text-[48px] xl:text-[54px] font-extrabold text-[#0B1B3D] tracking-tight leading-[1.14]">
                The Right Financial Guidance{" "}
                <span className="inline">
                  Starts with the{" "}
                  <span className="text-[#F97316] font-handwriting italic font-normal text-5xl lg:text-6xl inline-block -rotate-1">
                    Truth.
                  </span>
                </span>
              </h1>

              {/* Subheading & Narrative Paragraphs */}
              <p className="mt-3 text-base text-[#475569] leading-relaxed max-w-2xl font-normal">
                Making financial decisions becomes easier when you understand your options. First Truth Finance Consultations helps individuals, salaried professionals, self-employed applicants, and business owners explore loan options and navigate the documentation process.
              </p>
              <p className="mt-2 text-sm text-[#64748B] leading-relaxed max-w-2xl font-normal">
                From home loans and business financing to loans against property and credit score guidance, our approach focuses on understanding your requirements and helping you explore suitable financial solutions.
              </p>

              {/* 3 Horizontal Stat Cards on Desktop: Bridges the Width! */}
              <div className="mt-6 grid grid-cols-3 gap-4 w-full max-w-2xl p-4 rounded-2xl bg-gradient-to-r from-orange-50/70 via-white to-sky-50/50 border border-orange-100 shadow-xs">
                <div className="border-l-2 border-[#F97316] pl-3.5">
                  <div className="text-2xl font-black text-[#0B1B3D] tracking-tight leading-none">
                    5+ Types
                  </div>
                  <div className="text-xs font-semibold text-[#64748B] mt-1">
                    Loan Categories
                  </div>
                </div>

                <div className="border-l-2 border-[#F97316] pl-3.5">
                  <div className="text-2xl font-black text-[#0B1B3D] tracking-tight leading-none">
                    100%
                  </div>
                  <div className="text-xs font-semibold text-[#64748B] mt-1">
                    Truth-First Guidance
                  </div>
                </div>

                <div className="border-l-2 border-[#F97316] pl-3.5">
                  <div className="text-2xl font-black text-[#0B1B3D] tracking-tight leading-none">
                    Rohtak, HR
                  </div>
                  <div className="text-xs font-semibold text-[#64748B] mt-1">
                    Led by Shubham Jain
                  </div>
                </div>
              </div>

              {/* Desktop CTA Buttons */}
              <div className="mt-6 flex flex-wrap items-center gap-4">
                <Link
                  href="/services"
                  className="px-8 py-3.5 rounded-full bg-gradient-to-r from-[#F97316] to-[#FB923C] hover:from-[#EA580C] hover:to-[#F97316] text-white font-semibold text-sm sm:text-base shadow-lg shadow-orange-500/25 hover:shadow-orange-500/35 transition-all flex items-center gap-2.5 cursor-pointer group"
                >
                  <span>Explore Loan Services</span>
                  <svg
                    className="w-4 h-4 transition-transform group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>

                <button
                  onClick={() => openModal()}
                  className="px-8 py-3.5 rounded-full bg-white hover:bg-slate-50 border border-slate-300 hover:border-slate-400 text-[#0B1B3D] font-semibold text-sm sm:text-base transition-all cursor-pointer shadow-sm flex items-center gap-2"
                >
                  <span>Talk to Our Team</span>
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                </button>
              </div>

              {/* Philosophy Callout Card */}
              <div className="mt-6 p-4 rounded-2xl bg-white border border-slate-200/90 shadow-xs max-w-2xl w-full">
                <div className="text-[11px] font-bold text-[#F97316] uppercase tracking-wider mb-0.5">
                  Our Brand Philosophy
                </div>
                <div className="text-base font-extrabold text-[#0B1B3D] tracking-tight">
                  Truth First. Transparent Guidance. Informed Decisions.
                </div>
                <p className="text-xs text-[#64748B] mt-0.5">
                  Clear communication about loan eligibility, documentation clarity, and applicable lender terms.
                </p>
              </div>

              {/* Trust Badges Row */}
              <div className="mt-6 flex flex-wrap items-center gap-6 pt-3 border-t border-slate-100 w-full max-w-2xl">
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-orange-100 text-[#F97316] flex items-center justify-center text-xs font-bold">✓</div>
                  <span className="text-[13px] font-semibold text-[#0B1B3D]">Truth First</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-orange-100 text-[#F97316] flex items-center justify-center text-xs font-bold">✓</div>
                  <span className="text-[13px] font-semibold text-[#0B1B3D]">Transparent Guidance</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-orange-100 text-[#F97316] flex items-center justify-center text-xs font-bold">✓</div>
                  <span className="text-[13px] font-semibold text-[#0B1B3D]">Documentation Clarity</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-orange-100 text-[#F97316] flex items-center justify-center text-xs font-bold">✓</div>
                  <span className="text-[13px] font-semibold text-[#0B1B3D]">Rohtak, Haryana Hub</span>
                </div>
              </div>
            </div>

            {/* Right Column: 3D Robot Mascot (Full Height, Floating Badges) */}
            <div className="col-span-5 relative flex items-center justify-center pt-4">
              <div
                onMouseMove={handleMouseMove}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => {
                  setIsHovered(false);
                  setMousePos({ x: 0, y: 0 });
                }}
                className="relative w-full max-w-[380px] sm:max-w-[420px] xl:max-w-[460px] flex flex-col items-center justify-center cursor-pointer select-none perspective-1000 py-6"
              >
                <div
                  className="relative w-full flex items-center justify-center transform-style-3d transition-transform duration-200 ease-out"
                  style={{
                    transform: isHovered
                      ? `rotateY(${mousePos.x * 8}deg) rotateX(${-mousePos.y * 8}deg)`
                      : "rotateY(0deg) rotateX(0deg)",
                  }}
                >
                  {/* Ambient Glow */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="w-[320px] sm:w-[380px] h-[320px] sm:h-[380px] rounded-full bg-gradient-to-tr from-amber-100/50 via-orange-100/35 to-sky-100/40 blur-3xl animate-pulse-glow" />
                  </div>

                  {/* Ground Shadow */}
                  <div className="absolute -bottom-2 sm:-bottom-3 left-1/2 -translate-x-1/2 flex items-center justify-center pointer-events-none z-0">
                    <div className="w-48 sm:w-56 h-4 sm:h-5 rounded-[100%] bg-slate-800/15 blur-md animate-pedestal-shadow" />
                  </div>

                  {/* Mascot Image */}
                  <div className="relative z-10 w-full flex items-center justify-center animate-float-robot">
                    <Image
                      src="/hero-robo.png"
                      alt="First Truth Finance Mascot"
                      width={520}
                      height={780}
                      priority
                      unoptimized
                      className="w-[300px] sm:w-[340px] xl:w-[380px] h-auto object-contain drop-shadow-[0_18px_30px_rgba(11,27,61,0.14)] select-none transition-transform duration-300 hover:scale-[1.01]"
                    />
                  </div>

                  {/* Floating Badge 1: Truth First */}
                  <div className="absolute -left-2 sm:-left-6 bottom-12 sm:bottom-16 z-20 pointer-events-none select-none animate-float-badge-2">
                    <div className="bg-white/95 backdrop-blur-md rounded-2xl border border-slate-200/90 shadow-xl px-3.5 py-2.5 flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-orange-50 border border-orange-200/80 flex items-center justify-center text-[#F97316] flex-shrink-0">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                      </div>
                      <div>
                        <span className="text-xs sm:text-[13px] font-bold text-[#0B1B3D] block leading-tight">
                          Truth First
                        </span>
                        <span className="text-[10px] text-slate-500 font-medium mt-0.5 block">
                          Zero False Commitments
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Floating Badge 2: Founder FTFC */}
                  <div className="absolute -right-2 sm:-right-8 top-36 sm:top-40 z-20 pointer-events-none select-none animate-float-badge-3">
                    <div className="bg-white/95 backdrop-blur-md rounded-2xl border border-slate-200/90 shadow-xl px-3.5 py-2.5 flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-sky-50 border border-sky-200/80 flex items-center justify-center text-sky-600 flex-shrink-0 font-bold text-xs">
                        FTFC
                      </div>
                      <div>
                        <span className="text-xs sm:text-[13px] font-bold text-[#0B1B3D] block leading-tight">
                          Led by Shubham Jain
                        </span>
                        <span className="text-[10px] text-slate-500 font-medium mt-0.5 block">
                          Rohtak, Haryana
                        </span>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>

          </div>
        </section>

        {/* ========================================================= */}
        {/* METRICS BANNER CARD */}
        {/* ========================================================= */}
        <section className="mt-14 sm:mt-18 lg:mt-20 w-full">
          <div className="bg-[#F8FAFC]/90 border border-slate-200/80 rounded-2xl sm:rounded-3xl shadow-sm p-6 sm:p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 divide-y md:divide-y-0 md:divide-x divide-slate-200/80">

              <div className="flex items-center gap-4 sm:gap-5 pt-3 sm:pt-0 md:px-4 first:pt-0 first:pl-0">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-orange-50 border border-orange-200/80 flex items-center justify-center text-[#F97316] flex-shrink-0 shadow-sm">
                  <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-extrabold text-[#0B1B3D] tracking-tight">Rohtak, HR</div>
                  <div className="text-xs sm:text-sm font-medium text-slate-500 mt-0.5">Consulting &amp; Syndication</div>
                </div>
              </div>

              <div className="flex items-center gap-4 sm:gap-5 pt-3 sm:pt-0 md:px-6">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-orange-50 border border-orange-200/80 flex items-center justify-center text-[#F97316] flex-shrink-0 shadow-sm">
                  <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-[#0B1B3D] tracking-tight">5+ Loans</div>
                  <div className="text-xs sm:text-sm font-medium text-slate-500 mt-0.5">Home, Business, LAP &amp; More</div>
                </div>
              </div>

              <div className="flex items-center gap-4 sm:gap-5 pt-3 sm:pt-0 md:px-6">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-orange-50 border border-orange-200/80 flex items-center justify-center text-[#F97316] flex-shrink-0 shadow-sm">
                  <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-extrabold text-[#0B1B3D] tracking-tight">Shubham Jain</div>
                  <div className="text-xs sm:text-sm font-medium text-slate-500 mt-0.5">Founder &amp; Principal</div>
                </div>
              </div>

              <div className="flex items-center gap-4 sm:gap-5 pt-3 sm:pt-0 md:px-6">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-orange-50 border border-orange-200/80 flex items-center justify-center text-[#F97316] flex-shrink-0 shadow-sm">
                  <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-[#0B1B3D] tracking-tight">100%</div>
                  <div className="text-xs sm:text-sm font-medium text-slate-500 mt-0.5">Truth &amp; Clarity</div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* CONCISE ABOUT US OVERVIEW */}
        {/* ========================================================= */}
        <section className="mt-20 sm:mt-28">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-gradient-to-r from-slate-50 via-white to-orange-50/40 rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-sm">
            <div className="lg:col-span-8">
              <div className="inline-flex items-center gap-2 mb-2">
                <span className="w-5 h-[2.5px] bg-[#F97316] rounded-full" />
                <span className="text-xs font-bold tracking-widest text-[#0B1B3D] uppercase">
                  ABOUT FIRST TRUTH FINANCE
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1B3D] tracking-tight">
                Financial Consulting Built on Transparency &amp; Integrity
              </h2>
              <p className="mt-3 text-sm sm:text-base text-[#475569] leading-relaxed">
                First Truth Finance Consultations (FTFC) is a financial consulting and loan syndication firm based in Rohtak, Haryana. Founded and led by <strong>Shubham Jain</strong>, we help borrowers understand their requirements, review relevant lending options, organize documentation, and navigate the application process with greater clarity.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-4">
                <Link
                  href="/about"
                  className="px-6 py-2.5 rounded-full bg-[#0B1B3D] hover:bg-[#1E293B] text-white text-xs sm:text-sm font-semibold transition-all inline-flex items-center gap-2"
                >
                  <span>Learn More About Us</span>
                  <span>→</span>
                </Link>
                <button
                  onClick={() => openModal()}
                  className="text-xs sm:text-sm font-bold text-[#F97316] hover:text-[#EA580C] cursor-pointer"
                >
                  Connect with Shubham Jain
                </button>
              </div>
            </div>

            <div className="lg:col-span-4 bg-white rounded-2xl border border-slate-200 p-5 shadow-sm">
              <div className="text-xs font-bold uppercase tracking-wider text-[#F97316]">
                Our Philosophy
              </div>
              <div className="text-base font-extrabold text-[#0B1B3D] mt-1">
                Truth First
              </div>
              <p className="mt-2 text-xs text-slate-500 leading-relaxed">
                Clear communication before applying. Understand lender requirements, interest terms, and documentation without misleading assurances.
              </p>
              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
                <span>Principal Consultant:</span>
                <span className="font-bold text-[#0B1B3D]">Shubham Jain</span>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* FEATURED LOAN SERVICES SECTION */}
        {/* ========================================================= */}
        <section className="mt-20 sm:mt-28">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <div className="inline-flex items-center gap-2 mb-2">
                <span className="w-5 h-[2.5px] bg-[#F97316] rounded-full" />
                <span className="text-xs font-bold tracking-widest text-[#0B1B3D] uppercase">
                  OUR SERVICES
                </span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0B1B3D] tracking-tight">
                Featured Loan Consultations
              </h2>
              <p className="mt-1 text-sm text-[#64748B]">
                Explore financing options tailored to your personal or commercial requirements.
              </p>
            </div>
            <Link
              href="/services"
              className="px-5 py-2.5 rounded-full border border-slate-300 text-xs sm:text-sm font-bold text-[#0B1B3D] hover:bg-slate-50 transition-all inline-flex items-center gap-1.5 self-start sm:self-auto"
            >
              <span>Explore All Loan Services</span>
              <span>→</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredServices.map((service) => (
              <div
                key={service.href}
                className="bg-white rounded-3xl border border-slate-200/90 hover:border-orange-300 p-6 flex flex-col justify-between shadow-sm hover:shadow-md transition-all group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center group-hover:bg-orange-50 group-hover:border-orange-200 transition-colors">
                      {service.icon}
                    </div>
                    <span className="px-3 py-1 rounded-full text-[10.5px] font-bold tracking-wide uppercase bg-slate-100 text-slate-700">
                      {service.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-[#0B1B3D] group-hover:text-[#F97316] transition-colors leading-snug">
                    {service.title}
                  </h3>
                  <div className="text-xs font-medium text-slate-500 mt-1">
                    {service.tagline}
                  </div>
                  <p className="mt-3 text-xs sm:text-[13px] text-[#475569] leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <Link
                    href={service.href}
                    className="text-xs sm:text-sm font-bold text-[#F97316] hover:text-[#EA580C] inline-flex items-center gap-1 group/btn"
                  >
                    <span>View Eligibility &amp; Details</span>
                    <span className="transition-transform group-hover/btn:translate-x-1">→</span>
                  </Link>
                  <button
                    onClick={() => openModal(service.title)}
                    className="text-[11px] text-slate-500 hover:text-slate-800 font-semibold cursor-pointer"
                  >
                    Quick Consult
                  </button>
                </div>
              </div>
            ))}

            {/* Custom Requirement Card */}
            <div className="bg-gradient-to-br from-[#0B1B3D] to-[#162a52] text-white rounded-3xl p-6 flex flex-col justify-between shadow-lg relative overflow-hidden group">
              <div>
                <span className="px-3 py-1 rounded-full text-[10.5px] font-bold tracking-wide uppercase bg-white/10 text-orange-300">
                  Custom Syndication
                </span>
                <h3 className="text-xl font-bold mt-4 leading-snug">
                  Unsure Which Loan Fits Your Profile?
                </h3>
                <p className="mt-2 text-xs sm:text-[13px] text-slate-300 leading-relaxed">
                  Discuss your specific financing requirement directly with Shubham Jain and our consulting desk in Rohtak.
                </p>
                <div className="mt-4 p-3 rounded-xl bg-white/5 border border-white/10 text-xs text-slate-300 space-y-1">
                  <div>✓ Multi-Lender Assessment</div>
                  <div>✓ Document Pre-check &amp; Eligibility</div>
                  <div>✓ Realistic Turnaround Expectations</div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10">
                <button
                  onClick={() => openModal("General Loan Consultation")}
                  className="w-full py-2.5 rounded-full bg-[#F97316] hover:bg-[#EA580C] text-white text-xs sm:text-sm font-semibold transition-all shadow-md cursor-pointer text-center"
                >
                  Discuss Custom Requirement →
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* 5-STEP CONSULTATION PROCESS PREVIEW */}
        {/* ========================================================= */}
        <section id="process" className="mt-20 sm:mt-28">
          <div className="flex flex-col items-start max-w-3xl mb-10">
            <div className="inline-flex items-center gap-2 mb-2">
              <span className="w-5 h-[2.5px] bg-[#F97316] rounded-full" />
              <span className="text-xs font-bold tracking-widest text-[#0B1B3D] uppercase">
                REALISTIC CUSTOMER JOURNEY
              </span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0B1B3D] tracking-tight">
              Our Loan Consultation Process
            </h2>
            <p className="mt-2 text-sm text-[#64748B] leading-relaxed">
              Step-by-step guidance without false guarantees or artificial turnaround times.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {processSteps.map((step) => (
              <div
                key={step.step}
                className="bg-white rounded-2xl border border-slate-200/90 p-5 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <span className="text-2xl font-black text-slate-200 block mb-2">
                    {step.step}
                  </span>
                  <h3 className="text-sm font-bold text-[#0B1B3D] leading-snug">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-xs text-[#64748B] leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ========================================================= */}
        {/* INTERACTIVE EMI CALCULATOR PREVIEW */}
        {/* ========================================================= */}
        <section className="mt-20 sm:mt-28">
          <div className="bg-[#F8FAFC] rounded-3xl border border-slate-200/90 p-6 sm:p-10 shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

              <div className="lg:col-span-7 flex flex-col">
                <div className="inline-flex items-center gap-2 mb-2">
                  <span className="w-5 h-[2.5px] bg-[#F97316] rounded-full" />
                  <span className="text-xs font-bold tracking-widest text-[#0B1B3D] uppercase">
                    FINANCIAL PLANNING TOOL
                  </span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1B3D] tracking-tight">
                  Loan EMI &amp; Repayment Estimator
                </h2>
                <p className="mt-1 text-xs sm:text-sm text-[#64748B]">
                  Estimate monthly installments before scheduling your consultation.
                </p>

                {/* Slider: Loan Amount */}
                <div className="mt-6">
                  <div className="flex justify-between items-center text-xs sm:text-sm font-semibold mb-2">
                    <span className="text-[#0B1B3D]">Loan Amount (₹)</span>
                    <span className="text-[#F97316] font-bold text-base">
                      ₹{calcAmount.toLocaleString("en-IN")}
                    </span>
                  </div>
                  <input
                    type="range"
                    min={100000}
                    max={20000000}
                    step={50000}
                    value={calcAmount}
                    onChange={(e) => setCalcAmount(Number(e.target.value))}
                    className="w-full accent-[#F97316] cursor-pointer"
                  />
                  <div className="flex justify-between text-[11px] text-slate-400 mt-1">
                    <span>₹1 Lakh</span>
                    <span>₹1 Crore</span>
                    <span>₹2 Crore</span>
                  </div>
                </div>

                {/* Slider: Interest Rate */}
                <div className="mt-5">
                  <div className="flex justify-between items-center text-xs sm:text-sm font-semibold mb-2">
                    <span className="text-[#0B1B3D]">Interest Rate (% p.a.)</span>
                    <span className="text-[#F97316] font-bold text-base">{calcRate}%</span>
                  </div>
                  <input
                    type="range"
                    min={6.5}
                    max={20}
                    step={0.1}
                    value={calcRate}
                    onChange={(e) => setCalcRate(Number(e.target.value))}
                    className="w-full accent-[#F97316] cursor-pointer"
                  />
                </div>

                {/* Slider: Tenure */}
                <div className="mt-5">
                  <div className="flex justify-between items-center text-xs sm:text-sm font-semibold mb-2">
                    <span className="text-[#0B1B3D]">Tenure</span>
                    <span className="text-[#F97316] font-bold text-base">{calcTenure} Years</span>
                  </div>
                  <input
                    type="range"
                    min={1}
                    max={30}
                    step={1}
                    value={calcTenure}
                    onChange={(e) => setCalcTenure(Number(e.target.value))}
                    className="w-full accent-[#F97316] cursor-pointer"
                  />
                </div>
              </div>

              {/* Result Preview Box */}
              <div className="lg:col-span-5 bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-8 shadow-md flex flex-col justify-between">
                <div>
                  <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">
                    Estimated Monthly Repayment
                  </div>
                  <div className="text-3xl font-extrabold text-[#0B1B3D] tracking-tight">
                    ₹{monthlyEmi.toLocaleString("en-IN")}
                    <span className="text-sm font-normal text-slate-500"> / mo</span>
                  </div>

                  <div className="mt-5 space-y-2.5 pt-4 border-t border-slate-100 text-xs sm:text-sm">
                    <div className="flex justify-between">
                      <span className="text-slate-600">Principal:</span>
                      <span className="font-bold text-[#0B1B3D]">₹{calcAmount.toLocaleString("en-IN")}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600">Total Interest:</span>
                      <span className="font-bold text-[#F97316]">₹{totalInterest.toLocaleString("en-IN")}</span>
                    </div>
                    <div className="flex justify-between pt-2 border-t border-slate-100 font-bold">
                      <span className="text-[#0B1B3D]">Total Repayable:</span>
                      <span className="text-[#0B1B3D]">₹{totalPayment.toLocaleString("en-IN")}</span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex flex-col gap-2">
                  <Link
                    href="/emi-calculator"
                    className="w-full py-2.5 rounded-full border border-slate-300 hover:bg-slate-50 text-[#0B1B3D] text-xs font-bold text-center transition-colors"
                  >
                    Open Full EMI Calculator &amp; Amortization →
                  </Link>
                  <button
                    onClick={() => openModal(`EMI Inquiry (₹${(calcAmount / 100000).toFixed(1)} Lakhs)`)}
                    className="w-full py-2.5 rounded-full bg-[#F97316] hover:bg-[#EA580C] text-white text-xs font-semibold shadow-md transition-all cursor-pointer text-center"
                  >
                    Discuss This Loan with Our Team →
                  </button>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* CREDIT PROFILE & PARTNER TEASERS */}
        {/* ========================================================= */}
        <section className="mt-20 sm:mt-28 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Credit Profile Teaser */}
          <div className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-8 shadow-sm flex flex-col justify-between">
            <div>
              <div className="text-[11px] font-bold text-[#F97316] uppercase tracking-wider mb-1">
                Credit Awareness
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#0B1B3D] tracking-tight">
                Understand Your Credit Profile
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                Your credit history plays a vital role in loan assessments. Learn how to review credit reports, identify potential discrepancies, and practice disciplined credit management before applying.
              </p>
              <div className="mt-4 p-3 rounded-xl bg-slate-50 border border-slate-100 text-xs text-slate-500">
                ⚠️ Credit score improvement is not guaranteed. Corrections require official bureau dispute procedures.
              </div>
            </div>
            <Link
              href="/credit-profile"
              className="mt-6 font-bold text-xs sm:text-sm text-[#F97316] hover:text-[#EA580C] inline-flex items-center gap-1.5"
            >
              <span>Explore Credit Profile Guidance</span>
              <span>→</span>
            </Link>
          </div>

          {/* FI Partner Teaser */}
          <div className="bg-gradient-to-br from-[#0B1B3D] to-[#1c366e] text-white rounded-3xl p-6 sm:p-8 shadow-md flex flex-col justify-between">
            <div>
              <div className="text-[11px] font-bold text-orange-400 uppercase tracking-wider mb-1">
                DSA Network
              </div>
              <h3 className="text-xl sm:text-2xl font-bold tracking-tight">
                Build Your Financial Services Network
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
                First Truth Finance Consultations offers DSA partnership opportunities for financial consultants, local business professionals, and referral agents looking to connect clients with suitable lending options.
              </p>
              <div className="mt-4 p-3 rounded-xl bg-white/10 border border-white/15 text-xs text-slate-300">
                🤝 Application guidance, coordination support, and transparent payout arrangements.
              </div>
            </div>
            <Link
              href="/partners"
              className="mt-6 font-bold text-xs sm:text-sm text-orange-400 hover:text-orange-300 inline-flex items-center gap-1.5"
            >
              <span>Learn About FI Partnerships</span>
              <span>→</span>
            </Link>
          </div>
        </section>

        {/* ========================================================= */}
        {/* FINAL CONSULTATION CTA BANNER */}
        {/* ========================================================= */}
        <section className="mt-20 sm:mt-28 bg-gradient-to-r from-orange-500 via-[#F97316] to-[#EA580C] text-white rounded-3xl p-8 sm:p-12 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-2xl text-center md:text-left">
            <span className="text-xs font-bold uppercase tracking-wider text-orange-200">
              Transparent Loan Syndication
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold mt-1 tracking-tight">
              Ready to Explore Your Financing Options?
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-orange-100 leading-relaxed">
              Speak directly with Shubham Jain and our consulting desk in Rohtak, Haryana. Truth First, zero hidden fees, and realistic eligibility guidance.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
            <button
              onClick={() => openModal()}
              className="px-7 py-3.5 rounded-full bg-white text-[#0B1B3D] text-xs sm:text-sm font-bold shadow-lg hover:bg-orange-50 transition-all cursor-pointer"
            >
              Book Free Consultation →
            </button>
            <Link
              href="/contact"
              className="px-6 py-3.5 rounded-full border border-white/40 hover:bg-white/10 text-white text-xs sm:text-sm font-semibold text-center transition-all"
            >
              Contact Office
            </Link>
          </div>
        </section>

      </div>
    </div>
  );
}
