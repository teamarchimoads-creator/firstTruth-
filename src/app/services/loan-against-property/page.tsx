"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useModal } from "@/context/ModalContext";
import MascotCard from "@/components/MascotCard";
import AnimatedHeadline from "@/components/AnimatedHeadline";

export default function LoanAgainstPropertyPage() {
  const { openModal } = useModal();

  const faqs = [
    {
      q: "What types of properties can be pledged for a LAP?",
      a: "Residential houses, ready apartments, commercial office spaces, industrial plots, or self-occupied commercial premises with clear, marketable title deeds can generally be considered by lenders.",
    },
    {
      q: "How is the loan amount determined in Loan Against Property?",
      a: "The sanctioned amount is determined primarily by property valuation (typically 50% to 70% of the market value, known as LTV) alongside the applicant's proven debt-service and repayment capacity.",
    },
    {
      q: "Can funds from a Loan Against Property be used for any purpose?",
      a: "Yes, funds can be used for business expansion, debt consolidation, medical emergencies, working capital, or education, provided they are not utilized for speculative activities.",
    },
    {
      q: "How does First Truth Finance Consultations help with LAP?",
      a: "We help you organize property chain documents, review encumbrance and title considerations, and identify lenders whose valuation policies align with your financial goals.",
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
          <span className="text-[#0B1B3D] font-bold">Loan Against Property (LAP)</span>
        </nav>

        {/* Hero with Mascot */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#0B1B3D] text-white rounded-3xl p-8 sm:p-12 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(#F97316_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none" />
          
          <div className="lg:col-span-8 relative z-10">
            <div className="inline-flex items-center gap-2 mb-3 px-3 py-1 rounded-full bg-[#122855] border border-[#1B3B7A] text-[#F97316] text-xs font-bold uppercase tracking-wider">
              <span>Property Collateral Financing</span>
            </div>
            <AnimatedHeadline
              text="Loan Against Property Advisory"
              accentWord="Advisory"
              className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight"
            />
            <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl">
              For eligible property owners, a loan against property may be one option to explore for business or personal financing needs. The lender evaluates the property, applicant&apos;s financial position, and applicable lending criteria.
            </p>
            <div className="mt-6 flex flex-wrap gap-3 text-xs">
              <span className="px-3.5 py-1.5 rounded-full bg-white/10 text-white font-medium border border-white/10">
                🏢 Residential &amp; Commercial Properties
              </span>
              <span className="px-3.5 py-1.5 rounded-full bg-white/10 text-white font-medium border border-white/10">
                📈 High Loan Quantum &amp; Lower Rates
              </span>
              <span className="px-3.5 py-1.5 rounded-full bg-white/10 text-[#F97316] font-semibold border border-white/10">
                📅 Long Tenures Up to 15–20 Years
              </span>
            </div>
          </div>

          <div className="lg:col-span-4 relative z-10 flex items-center justify-center">
            <MascotCard
              src="/robo-lap.png"
              alt="First Truth LAP Mascot"
              width={260}
              height={380}
              badgeText="Property Collateral Desk"
            />
          </div>
        </div>

        {/* 2-Column Content */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          <div className="lg:col-span-8 space-y-8">
            
            {/* Typical Discussion Card */}
            <div className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-8 shadow-sm">
              <h2 className="text-xl font-bold text-[#0B1B3D] mb-3 flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#F97316]" />
                Key LAP Evaluation Factors
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                Property valuation, ownership documents, income assessment, and lender policies can affect eligibility:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 font-medium">
                  🏢 <strong>Property Valuation:</strong> Independent valuation report determining current market worth and realizable value.
                </div>
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 font-medium">
                  📜 <strong>Ownership &amp; Title Deeds:</strong> Clear title, registered sale deeds, chain documents, and encumbrance certificate.
                </div>
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 font-medium">
                  💼 <strong>Income Assessment:</strong> Salaried salary slips or business cash flows proving repayment capacity.
                </div>
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 font-medium">
                  ⚖️ <strong>Lender Policies &amp; LTV:</strong> Loan-to-value caps, legal clearance, and approval parameters.
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
                  <strong className="text-[#0B1B3D]">1. Title &amp; Chain Deeds:</strong> Original registered sale deed, conveyance deed, or gift deed proving clear ownership.
                </div>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                  <strong className="text-[#0B1B3D]">2. Property Approvals:</strong> Approved building plan, occupancy certificate (OC), property tax receipts, and municipal tax bills.
                </div>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                  <strong className="text-[#0B1B3D]">3. Encumbrance Certificate (EC):</strong> Latest non-encumbrance certificate showing property is free from prior legal charges.
                </div>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                  <strong className="text-[#0B1B3D]">4. Income &amp; Banking Proofs:</strong> Last 3 years ITRs/Form 16 and 12 months primary bank statements showing debt-servicing capability.
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
                Mortgage Advisory
              </span>
              <h3 className="text-xl font-bold">Consult for Loan Against Property</h3>
              <p className="mt-2 text-xs text-slate-300 leading-relaxed">
                Connect with Shubham Jain and our Rohtak team to discuss your property collateral and explore lender options.
              </p>
              <div className="mt-5 pt-4 border-t border-white/10 space-y-2 text-xs text-slate-300">
                <div>✓ Multi-Lender LTV &amp; Tenure Comparison</div>
                <div>✓ Legal &amp; Technical Pre-Screening</div>
                <div>✓ Truth First &amp; Transparent Terms</div>
              </div>
              <button
                onClick={() => openModal("Loan Against Property (LAP)")}
                className="mt-6 w-full py-3 rounded-full bg-[#F97316] hover:bg-[#EA580C] text-white text-xs sm:text-sm font-semibold shadow-md transition-all cursor-pointer text-center"
              >
                Request LAP Consultation →
              </button>
            </div>

            <div className="bg-white rounded-3xl border border-slate-200/90 p-6 shadow-sm">
              <h4 className="text-sm font-bold text-[#0B1B3D] mb-1">Check EMI for Large Sums</h4>
              <p className="text-xs text-slate-500 mb-3">
                LAP typically offers longer tenures (15-20 years) reducing monthly installment pressures.
              </p>
              <Link
                href="/emi-calculator"
                className="text-xs font-bold text-[#F97316] hover:text-[#EA580C] inline-flex items-center gap-1"
              >
                <span>Calculate Repayment EMI</span>
                <span>→</span>
              </Link>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
