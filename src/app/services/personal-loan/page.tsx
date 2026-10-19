"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useModal } from "@/context/ModalContext";
import MascotCard from "@/components/MascotCard";
import AnimatedHeadline from "@/components/AnimatedHeadline";

export default function PersonalLoanPage() {
  const { openModal } = useModal();

  const faqs = [
    {
      q: "Is any collateral or security required for a personal loan?",
      a: "No, personal loans are unsecured credit facilities where eligibility is assessed based on the applicant's income, employer category, credit profile, and debt repayment capability.",
    },
    {
      q: "What factors influence interest rates and approved amounts?",
      a: "Your credit score, monthly take-home salary, employer vintage, existing active EMI obligations, and lender internal risk score models influence the offered interest rates and sanctioned limit.",
    },
    {
      q: "What is the typical repayment tenure for personal loans?",
      a: "Tenures generally range from 12 months (1 year) to 60 months (5 years), allowing flexibility in matching monthly EMIs to your budget.",
    },
    {
      q: "How does First Truth Finance Consultations assist applicants?",
      a: "We evaluate your debt-to-income ratio, review potential lender policies, help you understand processing fees and foreclosure terms, and guide your application transparently.",
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
          <span className="text-[#0B1B3D] font-bold">Personal Loan Consultation</span>
        </nav>

        {/* Hero with Mascot */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#0B1B3D] text-white rounded-3xl p-8 sm:p-12 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(#F97316_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none" />
          
          <div className="lg:col-span-8 relative z-10">
            <div className="inline-flex items-center gap-2 mb-3 px-3 py-1 rounded-full bg-[#122855] border border-[#1B3B7A] text-[#F97316] text-xs font-bold uppercase tracking-wider">
              <span>Unsecured Personal Credit</span>
            </div>
            <AnimatedHeadline
              text="Personal Loan Consultation"
              accentWord="Consultation"
              className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight"
            />
            <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl">
              We help applicants explore personal financing options for eligible needs and understand the factors that may influence loan offers, including income, credit history, existing liabilities, and repayment capacity.
            </p>
            <div className="mt-6 flex flex-wrap gap-3 text-xs">
              <span className="px-3.5 py-1.5 rounded-full bg-white/10 text-white font-medium border border-white/10">
                ⚡ Minimal Documentation
              </span>
              <span className="px-3.5 py-1.5 rounded-full bg-white/10 text-white font-medium border border-white/10">
                🔓 Zero Collateral Required
              </span>
              <span className="px-3.5 py-1.5 rounded-full bg-white/10 text-[#F97316] font-semibold border border-white/10">
                📅 Flexible 12 to 60 Months
              </span>
            </div>
          </div>

          <div className="lg:col-span-4 relative z-10 flex items-center justify-center">
            <MascotCard
              src="/robo-personal-loan.png"
              alt="First Truth Personal Loan Mascot"
              width={260}
              height={380}
              badgeText="Personal Finance Guide"
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
                Factors Influencing Personal Loan Offers
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                Approval, interest rates, loan amounts, and processing times depend entirely on the lender&apos;s assessment across key factors:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 font-medium">
                  💵 <strong>Income Profile:</strong> Net monthly salary or verifiable self-employed profit stability.
                </div>
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 font-medium">
                  📊 <strong>Credit History:</strong> Bureau score, repayment timeliness, and absence of recent defaults.
                </div>
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 font-medium">
                  ⚖️ <strong>Existing Liabilities:</strong> Active credit card balances and running EMIs (FOIR/DTI ratio).
                </div>
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 font-medium">
                  🏢 <strong>Employer Category:</strong> Corporate tier, government service, or business vintage.
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
                  <strong className="text-[#0B1B3D]">1. KYC Documents:</strong> PAN card, Aadhaar card, passport or voter ID card for identity and address proof.
                </div>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                  <strong className="text-[#0B1B3D]">2. Income Proof (Salaried):</strong> Latest 3 months salary slips and Form 16 / appointment letter.
                </div>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                  <strong className="text-[#0B1B3D]">3. Banking Statements:</strong> Last 3 to 6 months bank statement showing salary credits or primary business inflows.
                </div>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                  <strong className="text-[#0B1B3D]">4. Employment Verification:</strong> Official corporate email ID, employee ID card, and company office address proof.
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
                Personal Financing
              </span>
              <h3 className="text-xl font-bold">Consult for Personal Loan</h3>
              <p className="mt-2 text-xs text-slate-300 leading-relaxed">
                Connect with our team in Rohtak for an honest evaluation of your credit profile and borrowing options.
              </p>
              <div className="mt-5 pt-4 border-t border-white/10 space-y-2 text-xs text-slate-300">
                <div>✓ Truth First &amp; Transparent Terms</div>
                <div>✓ FOIR &amp; Repayment Capacity Pre-check</div>
                <div>✓ Zero Unrealistic Assurances</div>
              </div>
              <button
                type="button"
                onClick={() => openModal("Personal Loan Consultation")}
                className="mt-6 w-full py-3 rounded-full bg-[#F97316] hover:bg-[#EA580C] text-white text-xs sm:text-sm font-semibold shadow-md transition-all cursor-pointer text-center"
                suppressHydrationWarning
              >
                Schedule Consultation Now →
              </button>
            </div>

            <div className="bg-white rounded-3xl border border-slate-200/90 p-6 shadow-sm">
              <h4 className="text-sm font-bold text-[#0B1B3D] mb-1">Check Your Credit Profile First</h4>
              <p className="text-xs text-slate-500 mb-3">
                Since personal loans are unsecured, having an accurate credit report is crucial before submitting applications.
              </p>
              <Link
                href="/credit-profile"
                className="text-xs font-bold text-[#F97316] hover:text-[#EA580C] inline-flex items-center gap-1"
              >
                <span>Understand Credit Profile</span>
                <span>→</span>
              </Link>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
