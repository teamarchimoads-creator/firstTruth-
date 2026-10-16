"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useModal } from "@/context/ModalContext";

export default function BusinessLoanPage() {
  const { openModal } = useModal();

  const faqs = [
    {
      q: "What types of businesses can explore consultation?",
      a: "Proprietorships, partnerships, LLPs, and private limited companies operating across manufacturing, trading, retail, and professional services.",
    },
    {
      q: "How does business vintage affect loan options?",
      a: "Most lending institutions look for a minimum of 2 to 3 years of continuous operational vintage, though specific programs exist depending on turnover and collateral availability.",
    },
    {
      q: "Can businesses apply for unsecured working capital?",
      a: "Yes, eligible entities with established banking conduct, healthy GST turnover, and satisfactory debt-service coverage can explore unsecured business financing options.",
    },
    {
      q: "How does First Truth Finance Consultations assist business owners?",
      a: "We review your balance sheets, banking cash flows, and credit profiles to identify suitable lending routes and prepare your application with clarity.",
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
          <span className="text-[#0B1B3D] font-bold">Business Loan Consultation</span>
        </nav>

        {/* Hero with Mascot */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#0B1B3D] text-white rounded-3xl p-8 sm:p-12 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(#F97316_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none" />
          
          <div className="lg:col-span-8 relative z-10">
            <div className="inline-flex items-center gap-2 mb-3 px-3 py-1 rounded-full bg-[#122855] border border-[#1B3B7A] text-[#F97316] text-xs font-bold uppercase tracking-wider">
              <span>Commercial Growth &amp; Working Capital</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Business Loan Consultation
            </h1>
            <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl">
              Businesses may require funds for working capital, equipment, expansion, or other commercial expenses. We help applicants understand potential financing routes and the documentation commonly considered by lenders.
            </p>
            <div className="mt-6 flex flex-wrap gap-3 text-xs">
              <span className="px-3.5 py-1.5 rounded-full bg-white/10 text-white font-medium border border-white/10">
                💼 Working Capital &amp; CC/OD
              </span>
              <span className="px-3.5 py-1.5 rounded-full bg-white/10 text-white font-medium border border-white/10">
                🏭 Machinery &amp; Equipment
              </span>
              <span className="px-3.5 py-1.5 rounded-full bg-white/10 text-[#F97316] font-semibold border border-white/10">
                📊 Collateral &amp; Non-Collateral
              </span>
            </div>
          </div>

          <div className="lg:col-span-4 relative z-10 flex items-center justify-center">
            <div className="relative w-52 sm:w-60 h-64 sm:h-72 flex items-center justify-center">
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-orange-500/20 via-sky-500/10 to-transparent blur-2xl animate-pulse-glow" />
              <div className="absolute -bottom-2 w-32 h-3 rounded-[100%] bg-black/40 blur-sm animate-pedestal-shadow" />
              <div className="relative z-10 animate-float-robot">
                <Image
                  src="/robo-business-loan.png"
                  alt="First Truth Business Loan Mascot"
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
          
          <div className="lg:col-span-8 space-y-8">
            
            {/* Typical Discussion Card */}
            <div className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-8 shadow-sm">
              <h2 className="text-xl font-bold text-[#0B1B3D] mb-3 flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#F97316]" />
                Typical Business Loan Discussion Topics
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                Our business loan consultation covers the key financial metrics lenders look for:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 font-medium">
                  🏢 <strong>Business Vintage:</strong> Operational track record, registration history, and stability.
                </div>
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 font-medium">
                  📈 <strong>Turnover &amp; GST:</strong> Sales volumes, revenue patterns, and GST return filings.
                </div>
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 font-medium">
                  📊 <strong>Financial Statements:</strong> Audited P&amp;L, balance sheets, and depreciation schedules.
                </div>
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 font-medium">
                  🎯 <strong>Funding Purpose &amp; DSCR:</strong> Working capital vs asset expansion and repayment capacity.
                </div>
              </div>
            </div>

            {/* Documentation Required */}
            <div className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-8 shadow-sm">
              <h2 className="text-xl font-bold text-[#0B1B3D] mb-4">
                Documentation Commonly Considered by Lenders
              </h2>
              <div className="space-y-3 text-xs sm:text-sm text-slate-600">
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                  <strong className="text-[#0B1B3D]">1. Business Registration Proof:</strong> GST certificate, MSME/Udyam registration, Certificate of Incorporation, Partnership Deed, or Trade License.
                </div>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                  <strong className="text-[#0B1B3D]">2. Financial Records:</strong> Audited financial statements (last 2-3 years) with CA audit report and tax computation sheets.
                </div>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                  <strong className="text-[#0B1B3D]">3. Banking History:</strong> Last 12 months current account bank statements for all active operational business accounts.
                </div>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                  <strong className="text-[#0B1B3D]">4. Promoter KYC:</strong> PAN and Aadhaar of all partners/directors, along with existing sanction letters for running loans.
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
                Commercial Syndication
              </span>
              <h3 className="text-xl font-bold">Schedule Business Loan Advisory</h3>
              <p className="mt-2 text-xs text-slate-300 leading-relaxed">
                Discuss equipment financing, working capital lines, or term expansion loans with Shubham Jain and our Rohtak team.
              </p>
              <div className="mt-5 pt-4 border-t border-white/10 space-y-2 text-xs text-slate-300">
                <div>✓ Review of Cash Flow &amp; Debt Capacity</div>
                <div>✓ Objective Comparison of Lender Products</div>
                <div>✓ Zero Unrealistic Assurances</div>
              </div>
              <button
                onClick={() => openModal("Business Loan Consultation")}
                className="mt-6 w-full py-3 rounded-full bg-[#F97316] hover:bg-[#EA580C] text-white text-xs sm:text-sm font-semibold shadow-md transition-all cursor-pointer text-center"
              >
                Request Consultation Now →
              </button>
            </div>

            <div className="bg-white rounded-3xl border border-slate-200/90 p-6 shadow-sm">
              <h4 className="text-sm font-bold text-[#0B1B3D] mb-1">Need Equipment or LAP?</h4>
              <p className="text-xs text-slate-500 mb-3">
                If your business owns property, a Loan Against Property (LAP) can often provide larger funds with longer repayment horizons.
              </p>
              <Link
                href="/services/loan-against-property"
                className="text-xs font-bold text-[#F97316] hover:text-[#EA580C] inline-flex items-center gap-1"
              >
                <span>Explore Loan Against Property</span>
                <span>→</span>
              </Link>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
