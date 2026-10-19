"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useModal } from "@/context/ModalContext";
import MascotCard from "@/components/MascotCard";
import ScrollReveal from "@/components/ScrollReveal";
import AnimatedHeadline from "@/components/AnimatedHeadline";

export default function AboutPage() {
  const { openModal } = useModal();

  const coreValues = [
    {
      title: "Truth and Transparency",
      description:
        "Clear communication about the application process, documentation, and lender terms.",
      icon: (
        <svg className="w-6 h-6 text-[#F97316]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
    {
      title: "Client Understanding",
      description:
        "Taking time to understand the purpose and requirements behind each financing request.",
      icon: (
        <svg className="w-6 h-6 text-[#F97316]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
    {
      title: "Responsible Guidance",
      description:
        "Helping clients make informed decisions rather than relying on unrealistic promises.",
      icon: (
        <svg className="w-6 h-6 text-[#F97316]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
    },
    {
      title: "Documentation Clarity",
      description:
        "Helping applicants understand the information and documents generally required during loan processing.",
      icon: (
        <svg className="w-6 h-6 text-[#F97316]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
    },
    {
      title: "Professional Relationships",
      description:
        "Supporting constructive working relationships between borrowers, financial consultants, and lending institutions.",
      icon: (
        <svg className="w-6 h-6 text-[#F97316]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
        </svg>
      ),
    },
  ];

  return (
    <div className="w-full py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs text-slate-500 mb-6">
          <Link href="/" className="hover:text-[#F97316]">Home</Link>
          <span>/</span>
          <span className="text-[#0B1B3D] font-bold">About Us</span>
        </nav>

        {/* Page Hero with Mascot */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#0B1B3D] text-white rounded-3xl p-8 sm:p-12 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(#F97316_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none" />
          
          <div className="lg:col-span-8 relative z-10">
            <div className="inline-flex items-center gap-2 mb-3 px-3 py-1 rounded-full bg-[#122855] border border-[#1B3B7A] text-[#F97316] text-xs font-bold uppercase tracking-wider">
              <span>ABOUT FTFC • ROHTAK, HARYANA</span>
            </div>
            <AnimatedHeadline
              text="Transparent Guidance Starts with the Truth."
              accentWord="Truth."
              className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight"
            />
            <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl">
              First Truth Finance Consultations (FTFC) is a dedicated loan syndication and financial consulting firm based in <strong>Rohtak, Haryana</strong>. Founded and led by <strong>Shubham Jain</strong>, the firm focuses on helping borrowers understand available financing options and navigate the documentation and application journey with complete clarity.
            </p>
            <div className="mt-6 flex flex-wrap gap-3 text-xs">
              <span className="px-3.5 py-1.5 rounded-full bg-white/10 text-white font-medium border border-white/10">
                🏢 Rohtak Headquarters
              </span>
              <span className="px-3.5 py-1.5 rounded-full bg-white/10 text-white font-medium border border-white/10">
                ⭐ Zero Hidden Fees
              </span>
              <span className="px-3.5 py-1.5 rounded-full bg-white/10 text-[#F97316] font-semibold border border-white/10">
                ✓ Institutional Multi-Lender Network
              </span>
            </div>
          </div>

          <div className="lg:col-span-4 relative z-10 flex items-center justify-center">
            <MascotCard
              src="/robo-about.png"
              alt="First Truth Advisory Mascot"
              width={260}
              height={380}
              badgeText="Shubham Jain Desk"
            />
          </div>
        </div>

        {/* Company Overview & Founder Highlight Grid */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          <div className="lg:col-span-7 space-y-6 text-sm sm:text-base text-slate-700 leading-relaxed">
            <div className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-8 shadow-sm">
              <h2 className="text-xl sm:text-2xl font-bold text-[#0B1B3D] mb-3">
                Our Story &amp; Practice
              </h2>
              <p>
                We understand that every financial requirement is different. A family planning to purchase their first residential home, a business owner seeking working capital for expansion, and an individual looking for an unsecured personal loan each require a distinct, tailored approach.
              </p>
              <p className="mt-3">
                Our role is to help clients understand their requirements, review relevant lending options, organize documentation, and navigate the application process with greater clarity and realistic expectations.
              </p>
            </div>

            {/* Philosophy Box */}
            <div className="p-6 sm:p-8 rounded-3xl bg-orange-50/60 border border-orange-200/90">
              <span className="text-xs font-bold uppercase tracking-wider text-[#F97316] block mb-1">
                Founding Philosophy
              </span>
              <AnimatedHeadline
                as="h3"
                text="Truth First. Transparent Guidance. Informed Decisions."
                accentWord="Truth"
                className="text-xl font-extrabold text-[#0B1B3D]"
              />
              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                We believe financial consulting should begin with clear communication. Clients should understand the documentation required, the nature of the financing being considered, and the applicable terms communicated by the lender before committing to an application.
              </p>
            </div>
          </div>

          {/* Right Column: Founder Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-gradient-to-br from-[#0B1B3D] via-[#10244c] to-[#1a3875] text-white rounded-3xl p-6 sm:p-8 shadow-xl relative overflow-hidden">
              <div className="flex items-center gap-4 mb-5">
                <div className="w-16 h-16 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center text-2xl font-black text-[#F97316]">
                  SJ
                </div>
                <div>
                  <h3 className="text-xl font-bold tracking-tight">Shubham Jain</h3>
                  <span className="text-xs text-orange-300 font-medium">Founder &amp; Principal Consultant</span>
                  <div className="text-xs text-slate-300 mt-0.5">Rohtak, Haryana, India</div>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                Dedicated to bridging borrowers with verified financing channels while maintaining absolute documentation integrity and zero unrealistic promises.
              </p>

              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
                <span className="text-[11px] text-slate-400 uppercase tracking-wider">
                  Direct Advisory Desk
                </span>
                <button
                  type="button"
                  onClick={() => openModal()}
                  className="px-4 py-2 rounded-full bg-[#F97316] hover:bg-[#EA580C] text-white text-xs font-semibold shadow transition-all cursor-pointer"
                  suppressHydrationWarning
                >
                  Consult Shubham
                </button>
              </div>
            </div>

            {/* Who We Assist */}
            <div className="bg-white rounded-3xl border border-slate-200/90 p-6 shadow-sm">
              <h3 className="text-sm font-bold text-[#0B1B3D] uppercase tracking-wider mb-3">
                Who We Assist
              </h3>
              <div className="grid grid-cols-2 gap-2.5 text-xs text-slate-700">
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 font-semibold">
                  👤 Salaried Professionals
                </div>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 font-semibold">
                  💼 Business Owners
                </div>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 font-semibold">
                  🏢 Self-Employed Applicants
                </div>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 font-semibold">
                  🏡 First-Time Homebuyers
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Mission & Vision Section */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          <div className="bg-gradient-to-br from-orange-50/70 to-white rounded-3xl border border-orange-200/80 p-6 sm:p-8 shadow-sm">
            <span className="text-xs font-bold uppercase tracking-wider text-[#F97316] block mb-1">
              Our Purpose
            </span>
            <h2 className="text-2xl font-extrabold text-[#0B1B3D] tracking-tight">Our Mission</h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
              To simplify the loan consultation process by helping individuals and businesses understand their financing requirements, explore relevant lending options, and prepare their applications with clarity.
            </p>
          </div>

          <div className="bg-gradient-to-br from-sky-50/70 to-white rounded-3xl border border-sky-200/80 p-6 sm:p-8 shadow-sm">
            <span className="text-xs font-bold uppercase tracking-wider text-sky-700 block mb-1">
              Our Vision
            </span>
            <h2 className="text-2xl font-extrabold text-[#0B1B3D] tracking-tight">Our Vision</h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
              To build a financial consulting practice recognized for transparent communication, responsible guidance, and a client-focused approach to loan facilitation.
            </p>
          </div>
        </div>

        {/* Core Values */}
        <div className="mt-16 sm:mt-20">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 mb-2">
              <span className="w-5 h-[2.5px] bg-[#F97316] rounded-full" />
              <span className="text-xs font-bold tracking-widest text-[#0B1B3D] uppercase">
                FOUNDATIONAL PILLARS
              </span>
              <span className="w-5 h-[2.5px] bg-[#F97316] rounded-full" />
            </div>
            <AnimatedHeadline
              as="h2"
              text="Our Core Values"
              accentWord="Values"
              className="text-2xl sm:text-4xl font-extrabold text-[#0B1B3D] tracking-tight justify-center text-center"
            />
            <p className="mt-2 text-sm text-slate-600">
              The ethical standards that guide every consultation and recommendation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {coreValues.map((val, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-slate-200/90 p-5 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-orange-50 border border-orange-100 flex items-center justify-center mb-3">
                    {val.icon}
                  </div>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1">
                    Value 0{idx + 1}
                  </span>
                  <h3 className="text-sm font-bold text-[#0B1B3D] leading-snug">{val.title}</h3>
                  <p className="mt-2 text-xs text-slate-600 leading-relaxed">{val.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 sm:mt-20 text-center bg-slate-50 rounded-3xl p-8 border border-slate-200">
          <h2 className="text-xl sm:text-2xl font-extrabold text-[#0B1B3D]">
            Have a Specific Financing Need?
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-600 max-w-lg mx-auto">
            Explore our detailed loan services or speak with our consulting team directly.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link
              href="/services"
              className="px-6 py-2.5 rounded-full bg-[#0B1B3D] hover:bg-[#1E293B] text-white text-xs sm:text-sm font-semibold transition-all"
            >
              Explore Loan Services →
            </Link>
            <button
              type="button"
              onClick={() => openModal()}
              className="px-6 py-2.5 rounded-full bg-[#F97316] hover:bg-[#EA580C] text-white text-xs sm:text-sm font-semibold transition-all cursor-pointer shadow"
              suppressHydrationWarning
            >
              Talk to Our Team
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
