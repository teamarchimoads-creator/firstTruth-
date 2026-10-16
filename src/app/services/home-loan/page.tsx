"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useModal } from "@/context/ModalContext";

export default function HomeLoanPage() {
  const { openModal } = useModal();

  const faqs = [
    {
      q: "What properties are eligible for home loan consultation?",
      a: "Prospective buyers can explore financing for ready-to-move residential apartments, under-construction builder projects, independent houses, or residential plots, subject to approved project titles and lender policies.",
    },
    {
      q: "What factors influence home loan eligibility?",
      a: "Primary factors include net monthly income, employment vintage, age, existing loan EMIs, proposed down payment, property valuation, and your credit profile history.",
    },
    {
      q: "Can self-employed applicants apply for a home loan?",
      a: "Yes. Self-employed professionals and business owners can apply by furnishing audited financial statements, ITRs, business vintage proof, and bank account statements.",
    },
    {
      q: "How does First Truth Finance Consultations help?",
      a: "We review your income and obligation profile, compare financing terms across participating lenders, assist in organizing your documentation, and help you navigate the process without unrealistic promises.",
    },
  ];

  return (
    <div className="w-full py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs text-slate-500 mb-6">
          <Link href="/" className="hover:text-[#F97316]">Home</Link>
          <span>/</span>
          <Link href="/services" className="hover:text-[#F97316]">Loan Services</Link>
          <span>/</span>
          <span className="text-[#0B1B3D] font-bold">Home Loan Consultation</span>
        </nav>

        {/* Hero with Mascot */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#0B1B3D] text-white rounded-3xl p-8 sm:p-12 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(#F97316_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none" />
          
          <div className="lg:col-span-8 relative z-10">
            <div className="inline-flex items-center gap-2 mb-3 px-3 py-1 rounded-full bg-[#122855] border border-[#1B3B7A] text-[#F97316] text-xs font-bold uppercase tracking-wider">
              <span>Residential Property Financing</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Home Loan Consultation
            </h1>
            <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl">
              We help prospective homebuyers explore financing options for purchasing a residential property. The consultation covers loan requirements, eligibility considerations, lender comparisons, repayment periods, and EMI estimates.
            </p>
            <div className="mt-6 flex flex-wrap gap-3 text-xs">
              <span className="px-3.5 py-1.5 rounded-full bg-white/10 text-white font-medium border border-white/10">
                🏡 Purchase &amp; Construction
              </span>
              <span className="px-3.5 py-1.5 rounded-full bg-white/10 text-white font-medium border border-white/10">
                🔄 Balance Transfer &amp; Top-Up
              </span>
              <span className="px-3.5 py-1.5 rounded-full bg-white/10 text-[#F97316] font-semibold border border-white/10">
                📅 Tenures up to 30 Years
              </span>
            </div>
          </div>

          <div className="lg:col-span-4 relative z-10 flex items-center justify-center">
            <div className="relative w-52 sm:w-60 h-64 sm:h-72 flex items-center justify-center">
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-orange-500/20 via-sky-500/10 to-transparent blur-2xl animate-pulse-glow" />
              <div className="absolute -bottom-2 w-32 h-3 rounded-[100%] bg-black/40 blur-sm animate-pedestal-shadow" />
              <div className="relative z-10 animate-float-robot">
                <Image
                  src="/robo-home-loan.png"
                  alt="First Truth Home Loan Mascot"
                  width={240}
                  height={360}
                  priority
                  unoptimized
                  className="w-44 sm:w-52 h-auto object-contain drop-shadow-[0_20px_35px_rgba(0,0,0,0.4)]"
                />
              </div>
            </div>
          </div>
        </div>

        {/* 2-Column Content */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Info */}
          <div className="lg:col-span-8 space-y-8">
            
            {/* Typical Discussion Card */}
            <div className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-8 shadow-sm">
              <h2 className="text-xl font-bold text-[#0B1B3D] mb-3 flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#F97316]" />
                Typical Consultation Topics
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                During your home loan consultation with our Rohtak team, we will discuss:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 font-medium">
                  🏡 <strong>Property Details:</strong> Location, cost, approvals, and legal verification considerations.
                </div>
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 font-medium">
                  💼 <strong>Income Profile:</strong> Salaried pay structure or self-employed financial records.
                </div>
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 font-medium">
                  💳 <strong>Existing Obligations:</strong> Credit cards, car loans, or active EMIs impacting DTI.
                </div>
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 font-medium">
                  💰 <strong>Available Down Payment:</strong> Own contribution vs loan-to-value (LTV) limits.
                </div>
              </div>
            </div>

            {/* Documentation Required */}
            <div className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-8 shadow-sm">
              <h2 className="text-xl font-bold text-[#0B1B3D] mb-4">
                Common Documentation Considered by Lenders
              </h2>
              <div className="space-y-3 text-xs sm:text-sm text-slate-600">
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                  <strong className="text-[#0B1B3D]">1. KYC Documents:</strong> PAN card, Aadhaar card, voter ID, passport, or utility bills for address proof.
                </div>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                  <strong className="text-[#0B1B3D]">2. Income Proof (Salaried):</strong> Latest 3-6 months salary slips, Form 16 (last 2 years), and 6 months bank statements.
                </div>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                  <strong className="text-[#0B1B3D]">3. Income Proof (Self-Employed):</strong> Last 2-3 years ITR with computation, audited balance sheets, and 6-12 months operative bank statements.
                </div>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                  <strong className="text-[#0B1B3D]">4. Property Documents:</strong> Agreement to sale, title deed copies, approved building plan, and builder allotment letter if applicable.
                </div>
              </div>
            </div>

            {/* FAQs */}
            <div className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-8 shadow-sm">
              <h2 className="text-xl font-bold text-[#0B1B3D] mb-4">
                Frequently Asked Questions
              </h2>
              <div className="space-y-4">
                {faqs.map((faq, idx) => (
                  <div key={idx} className="border-b border-slate-100 pb-3.5 last:border-0 last:pb-0">
                    <h3 className="font-bold text-xs sm:text-sm text-[#0B1B3D] mb-1">
                      {faq.q}
                    </h3>
                    <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed">
                      {faq.a}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Action Sidebar */}
          <div className="lg:col-span-4 space-y-6 sticky top-28">
            <div className="bg-gradient-to-br from-[#0B1B3D] to-[#1a3875] text-white rounded-3xl p-6 sm:p-8 shadow-lg">
              <span className="text-xs font-bold uppercase tracking-wider text-orange-300 block mb-1">
                Advisory Desk
              </span>
              <h3 className="text-xl font-bold">Book Home Loan Consultation</h3>
              <p className="mt-2 text-xs text-slate-300 leading-relaxed">
                Connect with Shubham Jain and our Rohtak team for an objective evaluation of your home buying eligibility.
              </p>
              <div className="mt-5 pt-4 border-t border-white/10 space-y-2 text-xs text-slate-300">
                <div>✓ Truth First &amp; Transparent Terms</div>
                <div>✓ Multi-Lender Option Analysis</div>
                <div>✓ EMI &amp; Repayment Planning</div>
              </div>
              <button
                onClick={() => openModal("Home Loan Consultation")}
                className="mt-6 w-full py-3 rounded-full bg-[#F97316] hover:bg-[#EA580C] text-white text-xs sm:text-sm font-semibold shadow-md transition-all cursor-pointer text-center"
              >
                Schedule Consultation Now →
              </button>
            </div>

            {/* Calculator Link Box */}
            <div className="bg-white rounded-3xl border border-slate-200/90 p-6 shadow-sm">
              <h4 className="text-sm font-bold text-[#0B1B3D] mb-1">Estimate Monthly Repayments</h4>
              <p className="text-xs text-slate-500 mb-4">
                Use our interactive EMI calculator to simulate different amounts, tenures, and interest rates.
              </p>
              <Link
                href="/emi-calculator"
                className="text-xs font-bold text-[#F97316] hover:text-[#EA580C] inline-flex items-center gap-1"
              >
                <span>Open Loan EMI Calculator</span>
                <span>→</span>
              </Link>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
