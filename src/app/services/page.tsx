"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useModal } from "@/context/ModalContext";
import MascotCard from "@/components/MascotCard";
import ScrollReveal from "@/components/ScrollReveal";
import AnimatedHeadline from "@/components/AnimatedHeadline";

export default function ServicesPage() {
  const { openModal } = useModal();

  const services = [
    {
      id: "home-loan",
      title: "Home Loan Consultation",
      href: "/services/home-loan",
      tagline: "For Purchasing Residential Property",
      description:
        "We help prospective homebuyers explore financing options for purchasing a residential property. The consultation can cover loan requirements, eligibility considerations, lender comparisons, repayment periods, and EMI estimates.",
      typicalDiscussion:
        "Property details, income profile, existing obligations, and available down payment.",
      badge: "Residential Property",
      category: "Secured Financing",
      tenure: "Up to 30 Years",
      icon: (
        <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
    },
    {
      id: "business-loan",
      title: "Business Loan Consultation",
      href: "/services/business-loan",
      tagline: "Working Capital, Equipment & Expansion",
      description:
        "Businesses may require funds for working capital, equipment, expansion, or other business-related expenses. We help applicants understand potential financing routes and the documentation commonly considered by lenders.",
      typicalDiscussion:
        "Business vintage, turnover, financial statements, funding purpose, and repayment capacity.",
      badge: "Commercial Growth",
      category: "Secured & Unsecured",
      tenure: "1 to 7 Years",
      icon: (
        <svg className="w-6 h-6 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
    },
    {
      id: "vehicle-loan",
      title: "Vehicle Loan Consultation",
      href: "/services/vehicle-loan",
      tagline: "Private & Commercial Vehicles",
      description:
        "Explore financing options for eligible private vehicles and commercial vehicles. Guidance may include understanding down payment requirements, repayment periods, and the terms offered by the lender.",
      typicalDiscussion:
        "Vehicle cost, applicant profile, and proposed repayment plan.",
      badge: "Auto & Commercial Fleet",
      category: "Asset-Backed",
      tenure: "1 to 7 Years",
      icon: (
        <svg className="w-6 h-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
        </svg>
      ),
    },
    {
      id: "loan-against-property",
      title: "Loan Against Property (LAP)",
      href: "/services/loan-against-property",
      tagline: "Unlock Capital with Existing Real Estate",
      description:
        "For eligible property owners, a loan against property may be one option to explore for business or personal financing needs. The lender evaluates the property, applicant's financial position, and applicable lending criteria.",
      typicalDiscussion:
        "Property valuation, ownership documents, income assessment, and lender policies.",
      badge: "Property Collateral",
      category: "Secured Mortgage",
      tenure: "Up to 15-20 Years",
      icon: (
        <svg className="w-6 h-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
        </svg>
      ),
    },
    {
      id: "personal-loan",
      title: "Personal Loan Consultation",
      href: "/services/personal-loan",
      tagline: "Unsecured Financing for Eligible Needs",
      description:
        "We help applicants explore personal financing options for eligible needs and understand the factors that may influence loan offers, including income, credit history, existing liabilities, and repayment capacity.",
      typicalDiscussion:
        "Approval, interest rates, loan amounts, and processing times depend on the lender's assessment.",
      badge: "Flexible Needs",
      category: "Unsecured Financing",
      tenure: "1 to 5 Years",
      icon: (
        <svg className="w-6 h-6 text-rose-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
    },
  ];

  const loanSteps = [
    {
      step: "01",
      title: "Understand Your Requirement",
      desc: "Discuss loan type, intended use of funds, and approximate financial requirements.",
    },
    {
      step: "02",
      title: "Review Your Profile",
      desc: "Consider income, employment/business details, existing obligations, and credit history.",
    },
    {
      step: "03",
      title: "Explore Suitable Lending Options",
      desc: "Discuss potentially relevant lenders and products subject to availability and policies.",
    },
    {
      step: "04",
      title: "Prepare Documentation",
      desc: "Understand required documents and organize thoroughly before application submission.",
    },
    {
      step: "05",
      title: "Application Follow-Up",
      desc: "Follow the application workflow and address any additional lender information requests.",
    },
  ];

  return (
    <div className="w-full py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs text-slate-500 mb-6">
          <Link href="/" className="hover:text-[#F97316]">Home</Link>
          <span>/</span>
          <span className="text-[#0B1B3D] font-bold">Loan Services</span>
        </nav>

        {/* Header with Mascot */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#0B1B3D] text-white rounded-3xl p-8 sm:p-12 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(#F97316_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none" />
          
          <div className="lg:col-span-8 relative z-10">
            <div className="inline-flex items-center gap-2 mb-3 px-3 py-1 rounded-full bg-[#122855] border border-[#1B3B7A] text-[#F97316] text-xs font-bold uppercase tracking-wider">
              <span>COMPREHENSIVE ADVISORY &amp; SYNDICATION</span>
            </div>
            <AnimatedHeadline
              text="Detailed Loan Consultation Services"
              accentWord="Services"
              className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight"
            />
            <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl">
              First Truth Finance Consultations helps borrowers explore financing routes, understand lender policies, and prepare verified documentation. Below are the key loan categories we consult on:
            </p>
            <div className="mt-6 flex flex-wrap gap-3 text-xs">
              <span className="px-3.5 py-1.5 rounded-full bg-white/10 text-white font-medium border border-white/10">
                🏠 Home Loans
              </span>
              <span className="px-3.5 py-1.5 rounded-full bg-white/10 text-white font-medium border border-white/10">
                💼 Business Loans
              </span>
              <span className="px-3.5 py-1.5 rounded-full bg-white/10 text-white font-medium border border-white/10">
                🚗 Vehicle Loans
              </span>
              <span className="px-3.5 py-1.5 rounded-full bg-white/10 text-white font-medium border border-white/10">
                🏢 Loan Against Property
              </span>
              <span className="px-3.5 py-1.5 rounded-full bg-white/10 text-[#F97316] font-semibold border border-white/10">
                ⚡ Personal Financing
              </span>
            </div>
          </div>

          <div className="lg:col-span-4 relative z-10 flex items-center justify-center">
            <MascotCard
              src="/robo-services.png"
              alt="First Truth Services Mascot"
              width={260}
              height={380}
              badgeText="Loan Services Desk"
            />
          </div>
        </div>

        {/* 5 Service Cards Grid */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <ScrollReveal key={service.id} delay={index * 80} direction="up">
              <div
                className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-8 flex flex-col justify-between shadow-sm group loan-card-elevate h-full cursor-pointer"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center group-hover:bg-orange-50 group-hover:border-orange-200 transition-all duration-300 group-hover:scale-110 group-hover:-rotate-3">
                      {service.icon}
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="px-3 py-1 rounded-full text-[10.5px] font-bold tracking-wide uppercase bg-slate-100 text-slate-700 transition-colors group-hover:bg-orange-100 group-hover:text-[#F97316]">
                        {service.badge}
                      </span>
                      <span className="px-2.5 py-1 rounded-full text-[10px] font-semibold bg-orange-50 text-[#F97316] border border-orange-100">
                        {service.category}
                      </span>
                    </div>
                  </div>

                <h2 className="text-xl sm:text-2xl font-bold text-[#0B1B3D] group-hover:text-[#F97316] transition-colors leading-snug">
                  {service.title}
                </h2>
                <div className="text-xs font-medium text-slate-500 mt-1">
                  {service.tagline}
                </div>

                <p className="mt-3.5 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {service.description}
                </p>

                <div className="mt-4 p-3.5 rounded-xl bg-slate-50 border border-slate-100 text-xs text-slate-700">
                  <span className="font-bold text-[#0B1B3D] block mb-1">
                    Typical Discussion:
                  </span>
                  <span className="leading-relaxed">
                    {service.typicalDiscussion}
                  </span>
                </div>
              </div>

              <div className="mt-6 pt-5 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
                <Link
                  href={service.href}
                  className="px-5 py-2.5 rounded-full bg-[#0B1B3D] hover:bg-[#1E293B] text-white text-xs font-semibold transition-all inline-flex items-center gap-1.5"
                >
                  <span>Read Full Guide &amp; Checklist</span>
                  <span>→</span>
                </Link>
                <button
                  onClick={() => openModal(service.title)}
                  className="px-4 py-2.5 rounded-full border border-[#F97316] text-[#F97316] hover:bg-orange-50 text-xs font-bold transition-all cursor-pointer"
                >
                  Book Consultation
                </button>
              </div>
            </div>
          </ScrollReveal>
          ))}

          {/* Custom Loan Syndication Card */}
          <ScrollReveal delay={services.length * 80} direction="up">
            <div className="bg-gradient-to-br from-[#0B1B3D] to-[#1c366e] text-white rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-lg loan-card-elevate h-full">
              <div>
                <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-white/10 text-orange-300">
                  Custom Loan Syndication
                </span>
                <h2 className="text-xl sm:text-2xl font-bold mt-4 leading-snug">
                  Multiple Lending Route Analysis
                </h2>
                <p className="mt-3 text-xs sm:text-sm text-slate-200 leading-relaxed">
                  Whether you need blended funding, balance transfer, loan top-up, or specialized working capital facilities, our Rohtak consulting desk reviews multiple lender channels.
                </p>
                <div className="mt-5 space-y-2 text-xs text-slate-300">
                  <div className="flex items-center gap-2">✓ Objective comparison across participating lenders</div>
                  <div className="flex items-center gap-2">✓ Realistic assessment without artificial turnaround claims</div>
                  <div className="flex items-center gap-2">✓ Comprehensive document structuring support</div>
                </div>
              </div>

              <div className="mt-6 pt-5 border-t border-white/10">
                <button
                  onClick={() => openModal("General Loan Consultation")}
                  className="btn-sheen w-full py-3 rounded-full bg-[#F97316] hover:bg-[#EA580C] text-white text-xs sm:text-sm font-semibold shadow-md transition-all cursor-pointer text-center active:scale-95"
                >
                  Schedule Custom Loan Consultation →
                </button>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* 5-Step Process */}
        <div id="process" className="mt-20 sm:mt-28 scroll-mt-24">
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-[#F97316] block mb-1">
              Structured Journey
            </span>
            <AnimatedHeadline
              as="h2"
              text="Our 5-Step Loan Consultation Process"
              accentWord="Process"
              className="text-2xl sm:text-3xl font-extrabold text-[#0B1B3D] tracking-tight"
            />
            <p className="mt-2 text-xs sm:text-sm text-slate-600">
              We guide you through each stage with documentation clarity and transparency.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {loanSteps.map((step) => (
              <div key={step.step} className="bg-white rounded-2xl border border-slate-200/90 p-5 shadow-sm">
                <span className="text-2xl font-black text-slate-200 block mb-1.5">{step.step}</span>
                <h3 className="text-sm font-bold text-[#0B1B3D] mb-1.5">{step.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 p-4 rounded-2xl bg-amber-50/70 border border-amber-200/70 text-amber-950 text-xs">
            <strong>Important Clarification:</strong> Loan approvals, turnaround times, and offered terms remain entirely at the discretion of the lending institution. First Truth Finance Consultations does not claim guaranteed approval.
          </div>
        </div>

      </div>
    </div>
  );
}
