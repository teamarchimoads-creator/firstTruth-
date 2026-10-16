"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useModal } from "@/context/ModalContext";

export default function VehicleLoanPage() {
  const { openModal } = useModal();

  const faqs = [
    {
      q: "What types of vehicles are covered under consultation?",
      a: "Financing consultation covers eligible private personal vehicles (cars, SUVs) and commercial vehicles (light commercial vehicles, trucks, buses, construction equipment vehicles).",
    },
    {
      q: "What is the typical repayment tenure for vehicle loans?",
      a: "Most lenders offer repayment tenures between 1 year and 7 years depending on vehicle type (commercial vs private), applicant profile, and lender policies.",
    },
    {
      q: "What down payment is required?",
      a: "Down payment generally ranges from 10% to 25% of the on-road or ex-showroom price, depending on applicant creditworthiness and lender loan-to-value (LTV) limits.",
    },
    {
      q: "How does First Truth Finance Consultations assist vehicle buyers?",
      a: "We help you compare lender quotes, understand processing fees and hypothecation charges, and structure down payments and repayment plans responsibly.",
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
          <span className="text-[#0B1B3D] font-bold">Vehicle Loan Consultation</span>
        </nav>

        {/* Hero with Mascot */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#0B1B3D] text-white rounded-3xl p-8 sm:p-12 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(#F97316_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none" />
          
          <div className="lg:col-span-8 relative z-10">
            <div className="inline-flex items-center gap-2 mb-3 px-3 py-1 rounded-full bg-[#122855] border border-[#1B3B7A] text-[#F97316] text-xs font-bold uppercase tracking-wider">
              <span>Private &amp; Commercial Auto</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Vehicle Loan Consultation
            </h1>
            <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl">
              Explore financing options for eligible private vehicles and commercial vehicles. Guidance may include understanding down payment requirements, repayment periods, and the terms offered by the lender.
            </p>
            <div className="mt-6 flex flex-wrap gap-3 text-xs">
              <span className="px-3.5 py-1.5 rounded-full bg-white/10 text-white font-medium border border-white/10">
                🚗 Private Cars &amp; SUVs
              </span>
              <span className="px-3.5 py-1.5 rounded-full bg-white/10 text-white font-medium border border-white/10">
                🚚 Commercial Fleet &amp; Trucks
              </span>
              <span className="px-3.5 py-1.5 rounded-full bg-white/10 text-[#F97316] font-semibold border border-white/10">
                ⚡ Flexible 1 to 7 Year Tenures
              </span>
            </div>
          </div>

          <div className="lg:col-span-4 relative z-10 flex items-center justify-center">
            <div className="relative w-52 sm:w-60 h-64 sm:h-72 flex items-center justify-center">
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-orange-500/20 via-sky-500/10 to-transparent blur-2xl animate-pulse-glow" />
              <div className="absolute -bottom-2 w-32 h-3 rounded-[100%] bg-black/40 blur-sm animate-pedestal-shadow" />
              <div className="relative z-10 animate-float-robot">
                <Image
                  src="/robo-vehicle-loan.png"
                  alt="First Truth Vehicle Loan Mascot"
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
                Typical Vehicle Loan Discussion Topics
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                During your vehicle consultation, we focus on matching proposed repayments with practical cash flows:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 font-medium">
                  🚗 <strong>Vehicle Cost &amp; Quotation:</strong> Ex-showroom, on-road price, and dealership proforma invoice.
                </div>
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 font-medium">
                  👤 <strong>Applicant Profile:</strong> Salaried, professional, transport operator, or commercial business entity.
                </div>
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 font-medium">
                  💵 <strong>Down Payment (Margin Money):</strong> Out-of-pocket contribution vs lender financing percentages.
                </div>
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 font-medium">
                  📅 <strong>Proposed Repayment Plan:</strong> Monthly EMI suitability and optimal tenure structure.
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
                  <strong className="text-[#0B1B3D]">1. KYC Documents:</strong> Photo ID, PAN card, Aadhaar card, and permanent address verification.
                </div>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                  <strong className="text-[#0B1B3D]">2. Income &amp; Banking:</strong> Salary slips/ITR and last 6 months bank statement showing regular earnings.
                </div>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                  <strong className="text-[#0B1B3D]">3. Commercial Fleet Proofs (If Applicable):</strong> Existing fleet details, permit/tax receipts, and trip contract receipts.
                </div>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                  <strong className="text-[#0B1B3D]">4. Vehicle Quotation:</strong> Official proforma invoice and margin money receipt issued by authorized automobile dealer.
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
                Auto Advisory Desk
              </span>
              <h3 className="text-xl font-bold">Consult for Vehicle Financing</h3>
              <p className="mt-2 text-xs text-slate-300 leading-relaxed">
                Review repayment terms, down payment calculations, and participating lender comparisons with our team in Rohtak.
              </p>
              <div className="mt-5 pt-4 border-t border-white/10 space-y-2 text-xs text-slate-300">
                <div>✓ Truth First &amp; Transparent Terms</div>
                <div>✓ Private &amp; Commercial Vehicle Coverage</div>
                <div>✓ Pre-submission Document Clarity</div>
              </div>
              <button
                onClick={() => openModal("Vehicle Loan Consultation")}
                className="mt-6 w-full py-3 rounded-full bg-[#F97316] hover:bg-[#EA580C] text-white text-xs sm:text-sm font-semibold shadow-md transition-all cursor-pointer text-center"
              >
                Schedule Vehicle Consultation →
              </button>
            </div>

            <div className="bg-white rounded-3xl border border-slate-200/90 p-6 shadow-sm">
              <h4 className="text-sm font-bold text-[#0B1B3D] mb-1">Simulate Auto EMIs</h4>
              <p className="text-xs text-slate-500 mb-3">
                Check monthly outgo for your proposed vehicle loan amount and tenure.
              </p>
              <Link
                href="/emi-calculator"
                className="text-xs font-bold text-[#F97316] hover:text-[#EA580C] inline-flex items-center gap-1"
              >
                <span>Calculate Monthly EMI</span>
                <span>→</span>
              </Link>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
