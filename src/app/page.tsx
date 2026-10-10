"use client";

import { useState } from "react";
import Image from "next/image";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    serviceType: "Investment Planning",
    notes: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);

  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
    setMousePos({ x, y });
  };

  const openServiceModal = (serviceName: string) => {
    setFormData((prev) => ({ ...prev, serviceType: serviceName }));
    setIsModalOpen(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setSubmitStatus(null);

    try {
      const res = await fetch("/api/consultations", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || "Failed to submit inquiry");
      }
      setSubmitStatus({
        type: "success",
        message: data.message || "Consultation booked successfully!",
      });
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        serviceType: "Investment Planning",
        notes: "",
      });
      setTimeout(() => {
        setIsModalOpen(false);
        setSubmitStatus(null);
      }, 2500);
    } catch (err: unknown) {
      setSubmitStatus({
        type: "error",
        message: err instanceof Error ? err.message : "Submission failed",
      });
    } finally {
      setSubmitting(false);
    }
  };

  const services = [
    {
      title: "Investment Planning",
      description:
        "Build wealth with smart, goal-based investment strategies tailored to your risk profile.",
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
    },
    {
      title: "Insurance & Risk Management",
      description:
        "Protect what matters with the right insurance and risk solutions for you and your family.",
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
    {
      title: "Loans & Credit Solutions",
      description:
        "Get the right loan for your needs with competitive options and hassle-free process.",
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
    {
      title: "Wealth & Retirement Planning",
      description:
        "Plan today for a comfortable and secure tomorrow with long-term wealth strategies.",
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
    },
    {
      title: "Tax Planning",
      description:
        "Optimize your taxes and keep more of what you earn with compliant strategies.",
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
    },
  ];

  const whyChooseUs = [
    {
      title: "Personalized Guidance",
      description: "Solutions tailored to your unique needs and goals.",
      icon: (
        <svg className="w-5 h-5 text-[#0B1B3D]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
    },
    {
      title: "Transparent Advice",
      description: "Honest, clear and easy-to-understand recommendations.",
      icon: (
        <svg className="w-5 h-5 text-[#0B1B3D]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
    {
      title: "Goal-Based Planning",
      description: "Focused strategies for short, medium and long-term goals.",
      icon: (
        <svg className="w-5 h-5 text-[#0B1B3D]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="9" />
          <circle cx="12" cy="12" r="5" />
          <circle cx="12" cy="12" r="1" fill="currentColor" />
        </svg>
      ),
    },
    {
      title: "Long-Term Partnership",
      description: "Your success is our success — we grow together.",
      icon: (
        <svg className="w-5 h-5 text-[#0B1B3D]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
        </svg>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-white text-[#0B1B3D] antialiased flex flex-col font-sans selection:bg-orange-500 selection:text-white">
      {/* Subtle background ambient gradients */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-orange-100/40 rounded-full blur-3xl" />
        <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-sky-50/60 rounded-full blur-3xl" />
        <div className="absolute top-[40%] right-[10%] w-[400px] h-[400px] bg-orange-50/50 rounded-full blur-3xl" />
        <div className="absolute top-[75%] left-[5%] w-[500px] h-[500px] bg-sky-50/50 rounded-full blur-3xl" />
      </div>

      {/* Navigation Header */}
      <header className="relative z-30 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-3">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <a href="#" className="flex items-center gap-2.5 group">
              <div className="relative h-12 w-auto flex items-center">
                <Image
                  src="/logo.png"
                  alt="FIRST TRUTH FINANCE CONSULTATIONS"
                  width={220}
                  height={60}
                  priority
                  className="h-11 sm:h-13 w-auto object-contain"
                  style={{ width: "auto" }}
                />
              </div>
            </a>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8 xl:gap-10">
            <a
              href="#home"
              className="relative text-[#0B1B3D] font-bold text-sm tracking-wide transition-colors py-1 group"
            >
              Home
              <span className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-[#F97316] rounded-full" />
            </a>
            <a
              href="#about"
              className="text-[#475569] hover:text-[#0B1B3D] font-medium text-sm tracking-wide transition-colors py-1"
            >
              About Us
            </a>
            <a
              href="#services"
              className="text-[#475569] hover:text-[#0B1B3D] font-medium text-sm tracking-wide transition-colors py-1"
            >
              Services
            </a>
            <a
              href="#resources"
              className="text-[#475569] hover:text-[#0B1B3D] font-medium text-sm tracking-wide transition-colors py-1"
            >
              Resources
            </a>
            <a
              href="#why-us"
              className="text-[#475569] hover:text-[#0B1B3D] font-medium text-sm tracking-wide transition-colors py-1"
            >
              Why First Truth
            </a>
            <a
              href="#contact"
              className="text-[#475569] hover:text-[#0B1B3D] font-medium text-sm tracking-wide transition-colors py-1"
            >
              Contact Us
            </a>
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-3.5">
            <button
              onClick={() => setIsModalOpen(true)}
              className="px-6 py-2 rounded-full border border-slate-300 text-xs sm:text-sm font-semibold text-[#0B1B3D] hover:bg-slate-50 hover:border-slate-400 transition-all cursor-pointer"
            >
              Login
            </button>
            <button
              onClick={() => setIsModalOpen(true)}
              className="px-5 sm:px-6 py-2.5 rounded-full bg-gradient-to-r from-[#F97316] to-[#FB923C] hover:from-[#EA580C] hover:to-[#F97316] text-white text-xs sm:text-sm font-semibold shadow-md shadow-orange-500/20 hover:shadow-orange-500/30 transition-all flex items-center gap-1.5 cursor-pointer group"
            >
              <span>Get Consultation</span>
              <svg
                className="w-4 h-4 transition-transform group-hover:translate-x-0.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </button>
          </div>

          {/* Mobile menu toggle button */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={() => setIsModalOpen(true)}
              className="px-3.5 py-1.5 rounded-full bg-[#F97316] text-white text-xs font-semibold"
            >
              Consultation
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:bg-slate-100"
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-2 p-4 bg-white/95 backdrop-blur-md rounded-2xl border border-slate-200 shadow-xl flex flex-col gap-3">
            <a href="#home" className="text-orange-600 font-semibold py-1">Home</a>
            <a href="#about" className="text-slate-700 font-medium py-1">About Us</a>
            <a href="#services" className="text-slate-700 font-medium py-1">Services</a>
            <a href="#resources" className="text-slate-700 font-medium py-1">Resources</a>
            <a href="#why-us" className="text-slate-700 font-medium py-1">Why First Truth</a>
            <a href="#contact" className="text-slate-700 font-medium py-1">Contact Us</a>
            <div className="pt-2 border-t border-slate-100 flex gap-2">
              <button
                onClick={() => { setIsModalOpen(true); setMobileMenuOpen(false); }}
                className="flex-1 py-2 rounded-full border border-slate-300 text-xs font-semibold text-slate-800"
              >
                Login
              </button>
              <button
                onClick={() => { setIsModalOpen(true); setMobileMenuOpen(false); }}
                className="flex-1 py-2 rounded-full bg-[#F97316] text-white text-xs font-semibold"
              >
                Get Consultation
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Main Content Area */}
      <main className="relative z-10 flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-20">
        
        {/* ========================================================= */}
        {/* HERO SECTION */}
        {/* ========================================================= */}
        <section id="home" className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center pt-2 sm:pt-6">
          
          {/* Left Column: Headlines & Content */}
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* Top Tagline */}
            <div className="inline-flex items-center gap-2 mb-4 sm:mb-5">
              <span className="w-5 sm:w-6 h-[2.5px] bg-[#F97316] rounded-full" />
              <span className="text-[11px] sm:text-xs font-bold tracking-widest text-[#0B1B3D] uppercase">
                YOUR TRUSTED FINANCIAL PARTNER
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[54px] xl:text-[60px] font-extrabold text-[#0B1B3D] tracking-tight leading-[1.12]">
              Financial Clarity.
              <br />
              Smarter Decisions.
              <br />
              <span className="text-[#F97316]">Stronger Future.</span>
            </h1>

            {/* Subheading / Description */}
            <p className="mt-5 sm:mt-6 text-sm sm:text-base lg:text-[17px] text-[#64748B] leading-relaxed max-w-xl font-normal">
              Expert financial consultation for your investment planning, loans,
              insurance and wealth guidance. We help you plan today for a more
              secure tomorrow.
            </p>

            {/* Call to action buttons */}
            <div className="mt-8 sm:mt-10 flex flex-wrap items-center gap-4">
              <button
                onClick={() => setIsModalOpen(true)}
                className="px-7 sm:px-8 py-3.5 sm:py-4 rounded-full bg-gradient-to-r from-[#F97316] to-[#FB923C] hover:from-[#EA580C] hover:to-[#F97316] text-white font-semibold text-sm sm:text-base shadow-lg shadow-orange-500/25 hover:shadow-orange-500/35 transition-all flex items-center gap-2.5 cursor-pointer group"
              >
                <span>Book a Consultation</span>
                <svg
                  className="w-4 h-4 transition-transform group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </button>

              <button
                onClick={() => {
                  const el = document.getElementById("services");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
                className="px-7 sm:px-8 py-3.5 sm:py-4 rounded-full bg-white hover:bg-slate-50 border border-slate-300 hover:border-slate-400 text-[#0B1B3D] font-semibold text-sm sm:text-base transition-all cursor-pointer shadow-sm"
              >
                Explore Services
              </button>
            </div>

            {/* Trust Badges Row */}
            <div className="mt-10 sm:mt-12 flex flex-wrap items-center gap-5 sm:gap-7 pt-4">
              {/* Badge 1: Trusted Guidance */}
              <div className="flex items-center gap-2.5">
                <div className="w-6 h-6 rounded-full border border-orange-400/80 bg-orange-50 flex items-center justify-center text-orange-500 flex-shrink-0">
                  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <circle cx="12" cy="12" r="9" />
                    <circle cx="12" cy="12" r="3" fill="currentColor" />
                  </svg>
                </div>
                <span className="text-xs sm:text-[13px] font-semibold text-[#0B1B3D]">
                  Trusted Guidance
                </span>
              </div>

              {/* Badge 2: Personalized Solutions */}
              <div className="flex items-center gap-2.5">
                <div className="w-6 h-6 rounded-full border border-orange-400/80 bg-orange-50 flex items-center justify-center text-orange-500 flex-shrink-0">
                  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <span className="text-xs sm:text-[13px] font-semibold text-[#0B1B3D]">
                  Personalized Solutions
                </span>
              </div>

              {/* Badge 3: Transparent Advice */}
              <div className="flex items-center gap-2.5">
                <div className="w-6 h-6 rounded-full border border-orange-400/80 bg-orange-50 flex items-center justify-center text-orange-500 flex-shrink-0">
                  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <span className="text-xs sm:text-[13px] font-semibold text-[#0B1B3D]">
                  Transparent Advice
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Clean Transparent 3D Mascot Graphic */}
          <div className="lg:col-span-5 relative flex items-center justify-center pt-4 lg:pt-0">
            <div className="relative w-full max-w-[360px] sm:max-w-[420px] xl:max-w-[450px] flex items-center justify-center">
              
              {/* Soft brand-matched ambient glow in background */}
              <div className="absolute inset-2 sm:inset-4 rounded-full bg-gradient-to-tr from-sky-100/50 via-amber-100/30 to-orange-100/40 blur-3xl animate-pulse-glow pointer-events-none" />

              {/* The Bespoke AI 3D Mascot Graphic with Smooth Levitation */}
              <div className="relative z-10 w-full flex items-center justify-center animate-float-robot">
                <Image
                  src="/first-truth-robot.jpg"
                  alt="First Truth AI Financial Mascot"
                  width={600}
                  height={600}
                  priority
                  className="w-full h-auto object-contain mix-blend-multiply select-none"
                />
              </div>

              {/* "Plan Save Grow" Handwritten Callout neatly positioned on the right */}
              <div className="absolute -right-2 sm:-right-6 md:-right-10 top-1/2 -translate-y-1/2 z-20 pointer-events-none select-none animate-float-badge-1">
                <div className="flex flex-col items-start leading-[1.05] text-[#0B1B3D] font-handwriting text-3xl sm:text-4xl xl:text-5xl font-bold rotate-[-3deg] drop-shadow-md">
                  <span className="hover:text-[#F97316] transition-colors">Plan</span>
                  <span className="ml-2.5 hover:text-[#F97316] transition-colors">Save</span>
                  <span className="ml-5 text-[#F97316]">Grow</span>
                  {/* Swoosh Underline */}
                  <svg
                    className="w-24 sm:w-32 h-6 text-[#F97316] mt-1 -ml-1 animate-pulse"
                    viewBox="0 0 100 20"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                  >
                    <path d="M5 12 Q 50 18 95 6" />
                  </svg>
                </div>
              </div>

            </div>
          </div>

        </section>

        {/* ========================================================= */}
        {/* METRICS BANNER CARD */}
        {/* ========================================================= */}
        <section className="mt-14 sm:mt-18 lg:mt-20 w-full">
          <div className="bg-[#F8FAFC]/90 border border-slate-200/80 rounded-2xl sm:rounded-3xl shadow-sm hover:shadow-md transition-shadow p-6 sm:p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 divide-y md:divide-y-0 md:divide-x divide-slate-200/80">
              
              {/* Stat 1: 10+ Years Experience */}
              <div className="flex items-center gap-4 sm:gap-5 pt-3 sm:pt-0 md:px-4 first:pt-0 first:pl-0">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-orange-50 border border-orange-200/80 flex items-center justify-center text-[#F97316] flex-shrink-0 shadow-sm">
                  <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                    <line x1="16" y1="2" x2="16" y2="6" />
                    <line x1="8" y1="2" x2="8" y2="6" />
                    <line x1="3" y1="10" x2="21" y2="10" />
                    <circle cx="8" cy="14" r="1" fill="currentColor" />
                    <circle cx="12" cy="14" r="1" fill="currentColor" />
                    <circle cx="16" cy="14" r="1" fill="currentColor" />
                    <circle cx="8" cy="18" r="1" fill="currentColor" />
                    <circle cx="12" cy="18" r="1" fill="currentColor" />
                  </svg>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-[#0B1B3D] tracking-tight">
                    10+
                  </div>
                  <div className="text-xs sm:text-sm font-medium text-slate-500 mt-0.5">
                    Years Experience
                  </div>
                </div>
              </div>

              {/* Stat 2: 500+ Happy Clients */}
              <div className="flex items-center gap-4 sm:gap-5 pt-3 sm:pt-0 md:px-6">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-orange-50 border border-orange-200/80 flex items-center justify-center text-[#F97316] flex-shrink-0 shadow-sm">
                  <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-[#0B1B3D] tracking-tight">
                    500+
                  </div>
                  <div className="text-xs sm:text-sm font-medium text-slate-500 mt-0.5">
                    Happy Clients
                  </div>
                </div>
              </div>

              {/* Stat 3: ₹100Cr+ Assets Under Advice */}
              <div className="flex items-center gap-4 sm:gap-5 pt-3 sm:pt-0 md:px-6">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-orange-50 border border-orange-200/80 flex items-center justify-center text-[#F97316] flex-shrink-0 shadow-sm">
                  <span className="font-bold text-xl sm:text-2xl text-[#F97316]">₹</span>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-[#0B1B3D] tracking-tight">
                    ₹100Cr+
                  </div>
                  <div className="text-xs sm:text-sm font-medium text-slate-500 mt-0.5">
                    Assets Under Advice
                  </div>
                </div>
              </div>

              {/* Stat 4: 100% Client Focus */}
              <div className="flex items-center gap-4 sm:gap-5 pt-3 sm:pt-0 md:px-6">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-orange-50 border border-orange-200/80 flex items-center justify-center text-[#F97316] flex-shrink-0 shadow-sm">
                  <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-[#0B1B3D] tracking-tight">
                    100%
                  </div>
                  <div className="text-xs sm:text-sm font-medium text-slate-500 mt-0.5">
                    Client Focus
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* SECTION: OUR SERVICES */}
        {/* ========================================================= */}
        <section id="services" className="mt-20 sm:mt-28">
          {/* Section Header */}
          <div className="flex flex-col items-start">
            <div className="inline-flex items-center gap-2 mb-2">
              <span className="w-5 sm:w-6 h-[2.5px] bg-[#F97316] rounded-full" />
              <span className="text-[11px] sm:text-xs font-bold tracking-widest text-[#0B1B3D] uppercase">
                OUR SERVICES
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1B3D] tracking-tight">
              Financial Solutions Designed Around You
            </h2>
            <p className="mt-2 text-sm sm:text-base text-[#64748B] max-w-3xl leading-relaxed">
              Comprehensive financial services to help you achieve your goals, at every stage of life.
            </p>
          </div>

          {/* 5 Service Cards Grid */}
          <div className="mt-8 sm:mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-5">
            {services.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl border border-slate-200/90 hover:border-orange-300 p-5 sm:p-6 flex flex-col justify-between shadow-sm hover:shadow-md transition-all duration-300 group"
              >
                <div>
                  {/* Service Icon */}
                  <div className="w-11 h-11 rounded-2xl bg-sky-50 border border-sky-100/80 flex items-center justify-center text-[#0B1B3D] group-hover:bg-orange-50 group-hover:text-[#F97316] group-hover:border-orange-200 transition-colors mb-4">
                    {item.icon}
                  </div>
                  {/* Service Title */}
                  <h3 className="text-base font-bold text-[#0B1B3D] leading-snug group-hover:text-[#F97316] transition-colors">
                    {item.title}
                  </h3>
                  {/* Service Description */}
                  <p className="mt-2 text-xs sm:text-[13px] text-[#64748B] leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Learn More link */}
                <button
                  onClick={() => openServiceModal(item.title)}
                  className="mt-5 text-xs font-bold text-[#F97316] hover:text-[#EA580C] inline-flex items-center gap-1.5 cursor-pointer self-start group/btn"
                >
                  <span>Learn More</span>
                  <span className="transition-transform group-hover/btn:translate-x-1">→</span>
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* ========================================================= */}
        {/* ========================================================= */}
        {/* SECTION: ADVISOR APP SHOWCASE (MATCHING USER REFERENCE) */}
        {/* ========================================================= */}
        <section id="why-us" className="mt-24 sm:mt-32">
          {/* Main Advisor App Header */}
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#0B1B3D] tracking-tight">
              First Truth Advisor App
            </h2>
            <p className="mt-2.5 text-base sm:text-lg text-[#64748B] font-medium">
              Trusted partner for your insurance & wealth business
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Column: Hand holding Smartphone Mockup + Rating & Play Store */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center">
              <div className="relative w-full max-w-[320px] sm:max-w-[370px] flex items-center justify-center drop-shadow-xl transition-transform hover:scale-[1.02] duration-300">
                <Image
                  src="/advisor-phone-hand.png"
                  alt="First Truth Advisor App in Hand"
                  width={600}
                  height={1000}
                  className="w-full h-auto object-contain max-h-[560px]"
                  priority
                />
              </div>

              {/* Rating and Google Play badge directly under the phone */}
              <div className="flex items-center justify-between w-full max-w-[300px] sm:max-w-[340px] mt-4 px-2">
                <div className="flex flex-col">
                  <span className="text-sm font-bold text-[#0B1B3D]">4.8 rating</span>
                  <div className="flex items-center text-amber-400 text-sm mt-0.5 tracking-tight">
                    {"★★★★★"}
                  </div>
                </div>

                <a
                  href="#contact"
                  onClick={() => setIsModalOpen(true)}
                  className="inline-flex items-center gap-2.5 px-4 py-2 bg-black text-white rounded-xl shadow-md hover:bg-slate-900 transition-all cursor-pointer hover:shadow-lg"
                >
                  <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24">
                    <path d="M3.609 1.814L13.793 12 3.61 22.186A1.666 1.666 0 0 1 3 20.975V3.025c0-.457.227-.887.609-1.211z" fill="#00E676" />
                    <path d="M17.18 8.613l-3.387 3.387 3.387 3.387 3.824-2.185c1.096-.627 1.096-2.762 0-3.389l-3.824-2.2z" fill="#FFD600" />
                    <path d="M13.793 12L3.609 1.814a1.696 1.696 0 0 1 .945-.26c.582 0 1.144.312 1.542.54l11.084 6.519L13.793 12z" fill="#00B0FF" />
                    <path d="M13.793 12l3.387 3.387-11.084 6.519c-.398.228-.96.54-1.542.54a1.696 1.696 0 0 1-.945-.26L13.793 12z" fill="#FF3D00" />
                  </svg>
                  <div className="flex flex-col text-left leading-none">
                    <span className="text-[9px] uppercase tracking-wider text-slate-300">GET IT ON</span>
                    <span className="text-xs font-bold text-white tracking-tight mt-0.5">Google Play</span>
                  </div>
                </a>
              </div>
            </div>

            {/* Right Column: 4 Stacked Horizontal Feature Cards */}
            <div className="lg:col-span-7 flex flex-col gap-4 sm:gap-4.5">
              
              {/* Card 1: Sell insurance, mutual funds, loans & more */}
              <div className="bg-[#F0F9FA] rounded-2xl p-5 sm:p-6 border border-[#DCF2F5] hover:border-cyan-300 hover:shadow-md transition-all flex items-start gap-4 sm:gap-5 group">
                <div className="w-12 h-12 rounded-xl bg-cyan-100/70 border border-cyan-200/60 flex items-center justify-center flex-shrink-0 text-cyan-600 group-hover:scale-105 transition-transform">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-base sm:text-[17px] font-bold text-[#0B1B3D] mb-1 group-hover:text-cyan-700 transition-colors">
                    Sell insurance, mutual funds, loans &amp; more
                  </h3>
                  <p className="text-xs sm:text-[13.5px] text-[#64748B] leading-relaxed">
                    Get instant access to a wide range of insurance, investment, credit, and loan products.
                  </p>
                </div>
              </div>

              {/* Card 2: Marketing tools to grow your business */}
              <div className="bg-[#F0F9FA] rounded-2xl p-5 sm:p-6 border border-[#DCF2F5] hover:border-amber-300 hover:shadow-md transition-all flex items-start gap-4 sm:gap-5 group">
                <div className="w-12 h-12 rounded-xl bg-amber-100/70 border border-amber-200/60 flex items-center justify-center flex-shrink-0 text-amber-600 group-hover:scale-105 transition-transform">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-base sm:text-[17px] font-bold text-[#0B1B3D] mb-1 group-hover:text-amber-700 transition-colors">
                    Marketing tools to grow your business
                  </h3>
                  <p className="text-xs sm:text-[13.5px] text-[#64748B] leading-relaxed">
                    Effortless customer management with personalised shareable content for lead generation.
                  </p>
                </div>
              </div>

              {/* Card 3: Get support from quotes to claims */}
              <div className="bg-[#F0F9FA] rounded-2xl p-5 sm:p-6 border border-[#DCF2F5] hover:border-emerald-300 hover:shadow-md transition-all flex items-start gap-4 sm:gap-5 group">
                <div className="w-12 h-12 rounded-xl bg-emerald-100/70 border border-emerald-200/60 flex items-center justify-center flex-shrink-0 text-emerald-600 group-hover:scale-105 transition-transform">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-base sm:text-[17px] font-bold text-[#0B1B3D] mb-1 group-hover:text-emerald-700 transition-colors">
                    Get support from quotes to claims
                  </h3>
                  <p className="text-xs sm:text-[13.5px] text-[#64748B] leading-relaxed">
                    A dedicated relationship manager and an expert support team.
                  </p>
                </div>
              </div>

              {/* Card 4: Training on latest products & sales skills */}
              <div className="bg-[#F0F9FA] rounded-2xl p-5 sm:p-6 border border-[#DCF2F5] hover:border-rose-300 hover:shadow-md transition-all flex items-start gap-4 sm:gap-5 group">
                <div className="w-12 h-12 rounded-xl bg-rose-100/70 border border-rose-200/60 flex items-center justify-center flex-shrink-0 text-rose-500 group-hover:scale-105 transition-transform">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-base sm:text-[17px] font-bold text-[#0B1B3D] mb-1 group-hover:text-rose-700 transition-colors">
                    Training on latest products &amp; sales skills
                  </h3>
                  <p className="text-xs sm:text-[13.5px] text-[#64748B] leading-relaxed">
                    PoSP training made easy with 500+ videos, live webinars, and classroom sessions.
                  </p>
                </div>
              </div>

            </div>

          </div>

          {/* ========================================================= */}
          {/* SUB-SECTION: CONSUMER APP (MATCHING USER REFERENCE) */}
          {/* ========================================================= */}
          <div className="mt-28 sm:mt-36">
            {/* Header matching user reference */}
            <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
              <h3 className="text-2xl sm:text-3xl lg:text-[36px] font-bold text-[#0B1B3D] tracking-tight">
                First Truth Consumer App
              </h3>
              <p className="mt-2 text-xl sm:text-2xl lg:text-[26px] font-normal text-[#1E293B]">
                All your insurance in one place
              </p>
            </div>

            {/* 3 Reference Phone Screens in Exact Sequence */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 max-w-5xl mx-auto px-4 items-end">
              
              {/* Phone 1: Policies at your fingertips */}
              <div className="flex flex-col items-center text-center group">
                <div className="w-full flex items-end justify-center h-[260px] sm:h-[290px]">
                  <Image
                    src="/consumer-phone-1.png"
                    alt="Policies at your fingertips"
                    width={250}
                    height={260}
                    className="w-auto h-full max-h-[260px] sm:max-h-[290px] object-contain object-bottom hover:scale-105 transition-transform duration-300"
                    priority
                  />
                </div>
                <h4 className="text-base sm:text-[17px] font-bold text-[#0B1B3D] mt-6 mb-1.5 group-hover:text-[#F97316] transition-colors">
                  Policies at your fingertips
                </h4>
                <p className="text-xs sm:text-[13px] text-[#64748B] leading-relaxed max-w-[260px]">
                  Track policy benefits, get offline, share them with your family
                </p>
              </div>

              {/* Phone 2: We handle your claims */}
              <div className="flex flex-col items-center text-center group">
                <div className="w-full flex items-end justify-center h-[260px] sm:h-[290px]">
                  <Image
                    src="/consumer-phone-2.png"
                    alt="We handle your claims"
                    width={250}
                    height={260}
                    className="w-auto h-full max-h-[260px] sm:max-h-[290px] object-contain object-bottom hover:scale-105 transition-transform duration-300"
                    priority
                  />
                </div>
                <h4 className="text-base sm:text-[17px] font-bold text-[#0B1B3D] mt-6 mb-1.5 group-hover:text-[#F97316] transition-colors">
                  We handle your claims
                </h4>
                <p className="text-xs sm:text-[13px] text-[#64748B] leading-relaxed max-w-[260px]">
                  Experts to guide and handle your claims to get you the best payouts
                </p>
              </div>

              {/* Phone 3: Renewal reminders & exclusive offers */}
              <div className="flex flex-col items-center text-center group">
                <div className="w-full flex items-end justify-center h-[260px] sm:h-[290px]">
                  <Image
                    src="/consumer-phone-3.png"
                    alt="Renewal reminders & exclusive offers"
                    width={250}
                    height={260}
                    className="w-auto h-full max-h-[260px] sm:max-h-[290px] object-contain object-bottom hover:scale-105 transition-transform duration-300"
                    priority
                  />
                </div>
                <h4 className="text-base sm:text-[17px] font-bold text-[#0B1B3D] mt-6 mb-1.5 group-hover:text-[#F97316] transition-colors">
                  Renewal reminders &amp; exclusive offers
                </h4>
                <p className="text-xs sm:text-[13px] text-[#64748B] leading-relaxed max-w-[260px]">
                  Never miss a deadline with personalised alerts and hassle-free renewal options
                </p>
              </div>

            </div>

            {/* Centered Google Play Badge */}
            <div className="flex justify-center mt-12 sm:mt-16">
              <a
                href="#contact"
                onClick={() => setIsModalOpen(true)}
                className="inline-flex items-center gap-3 px-6 py-2.5 bg-black text-white rounded-xl shadow-lg hover:bg-slate-900 hover:shadow-xl transition-all cursor-pointer group hover:scale-105 duration-200"
              >
                <svg className="w-6 h-6 flex-shrink-0" viewBox="0 0 24 24">
                  <path d="M3.609 1.814L13.793 12 3.61 22.186A1.666 1.666 0 0 1 3 20.975V3.025c0-.457.227-.887.609-1.211z" fill="#00E676" />
                  <path d="M17.18 8.613l-3.387 3.387 3.387 3.387 3.824-2.185c1.096-.627 1.096-2.762 0-3.389l-3.824-2.2z" fill="#FFD600" />
                  <path d="M13.793 12L3.609 1.814a1.696 1.696 0 0 1 .945-.26c.582 0 1.144.312 1.542.54l11.084 6.519L13.793 12z" fill="#00B0FF" />
                  <path d="M13.793 12l3.387 3.387-11.084 6.519c-.398.228-.96.54-1.542.54a1.696 1.696 0 0 1-.945-.26L13.793 12z" fill="#FF3D00" />
                </svg>
                <div className="flex flex-col text-left leading-none">
                  <span className="text-[10px] uppercase tracking-wider text-slate-300">GET IT ON</span>
                  <span className="text-sm font-bold text-white tracking-tight mt-0.5">Google Play</span>
                </div>
              </a>
            </div>

          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="w-full border-t border-slate-200 bg-slate-50/80 py-8 text-center text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© 2026 First Truth Finance Consultations. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#home" className="hover:text-slate-800">Home</a>
            <a href="#services" className="hover:text-slate-800">Services</a>
            <a href="#why-us" className="hover:text-slate-800">Why First Truth</a>
            <button onClick={() => setIsModalOpen(true)} className="text-[#F97316] font-semibold hover:underline">
              Book Consultation
            </button>
          </div>
        </div>
      </footer>

      {/* Book Consultation Modal with MongoDB storage */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden">
            {/* Modal Header */}
            <div className="px-6 sm:px-8 pt-6 pb-4 border-b border-slate-100 flex items-center justify-between">
              <div>
                <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#F97316]">
                  <span className="w-2 h-2 rounded-full bg-[#F97316]" />
                  Schedule Appointment
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#0B1B3D] mt-0.5">
                  Book Free Consultation
                </h3>
              </div>
              <button
                onClick={() => setIsModalOpen(false)}
                className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-500 hover:text-slate-700 transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                ✕
              </button>
            </div>

            {/* Modal Form */}
            <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-4">
              {submitStatus && (
                <div
                  className={`p-3.5 rounded-xl text-sm font-medium ${
                    submitStatus.type === "success"
                      ? "bg-emerald-50 text-emerald-800 border border-emerald-200"
                      : "bg-rose-50 text-rose-800 border border-rose-200"
                  }`}
                >
                  {submitStatus.message}
                </div>
              )}

              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Rahul Sharma"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#F97316] text-sm text-slate-800"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="name@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#F97316] text-sm text-slate-800"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#F97316] text-sm text-slate-800"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                  Service Interested In
                </label>
                <select
                  value={formData.serviceType}
                  onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#F97316] text-sm text-slate-800 bg-white"
                >
                  <option value="Investment Planning">Investment Planning</option>
                  <option value="Insurance & Risk Management">Insurance & Risk Management</option>
                  <option value="Loans & Credit Solutions">Loans & Credit Solutions</option>
                  <option value="Wealth & Retirement Planning">Wealth & Retirement Planning</option>
                  <option value="Tax Planning">Tax Planning</option>
                  <option value="General Consultation">General Consultation</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                  Optional Note / Query
                </label>
                <textarea
                  rows={2}
                  placeholder="Tell us what you'd like guidance with..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-4 py-2 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#F97316] text-sm text-slate-800 resize-none"
                />
              </div>

              <div className="pt-2 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-5 py-2.5 rounded-full border border-slate-200 text-xs sm:text-sm font-semibold text-slate-600 hover:bg-slate-50 cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={submitting}
                  className="px-6 py-2.5 rounded-full bg-[#F97316] hover:bg-[#EA580C] text-white text-xs sm:text-sm font-semibold shadow-md shadow-orange-500/25 disabled:opacity-50 cursor-pointer flex items-center gap-2"
                >
                  {submitting ? "Booking..." : "Confirm Booking →"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
