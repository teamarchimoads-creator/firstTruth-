"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useModal } from "@/context/ModalContext";
import MascotCard from "@/components/MascotCard";
import AnimatedHeadline from "@/components/AnimatedHeadline";

export default function CreditProfilePage() {
  const { openModal } = useModal();

  const creditFactors = [
    {
      title: "Repayment Track Record (35%)",
      desc: "Timely repayment of past loan EMIs and credit card balances is the single largest factor influencing your credit score. Even occasional missed payments can leave negative remarks.",
      badge: "Highest Impact",
    },
    {
      title: "Credit Utilization Ratio (30%)",
      desc: "The proportion of available revolving credit you utilize each month. Keeping credit card utilization below 30% of your sanction limit generally signals prudent credit management.",
      badge: "High Impact",
    },
    {
      title: "Credit History Age (15%)",
      desc: "The vintage of your oldest active credit account and average tenure of all borrowing accounts. A longer demonstrated history of responsible borrowing is positively viewed by lenders.",
      badge: "Medium Impact",
    },
    {
      title: "Credit Mix & Profile (10%)",
      desc: "A balanced combination of secured debt (home or vehicle loans) and unsecured debt (personal loans or credit cards) indicates capability in handling multiple debt obligations.",
      badge: "Low Impact",
    },
    {
      title: "Hard Inquiries & New Applications (10%)",
      desc: "Applying for multiple loans or credit cards with several lenders within a compressed timeframe triggers multiple hard inquiries, which can temporarily dampen your credit score.",
      badge: "Low Impact",
    },
  ];

  const guidancePillars = [
    {
      step: "01",
      title: "Report Interpretation & Reading",
      desc: "Credit reports from bureaus (CIBIL, Experian, Equifax, CRIF High Mark) contain complex account status codes (DPD, settlement remarks, write-offs). We help you decipher what each section means.",
    },
    {
      step: "02",
      title: "Identifying Discrepancies & Dispute Process",
      desc: "Clerical mistakes, incorrect account statuses, or identity mix-ups sometimes occur. We guide you on the formal bureau dispute and rectification processes to correct legitimate errors.",
    },
    {
      step: "03",
      title: "Credit Utilization & Repayment Discipline",
      desc: "We analyze your existing credit card balances and active loan repayment structures, offering practical tips on structuring payments to lower credit utilization without unnecessary financial strain.",
    },
    {
      step: "04",
      title: "Cultivating Responsible Borrowing Habits",
      desc: "Building a durable credit score requires structured financial habits over time: setting auto-debits, avoiding frequent credit applications, and keeping older seasoned cards active.",
    },
    {
      step: "05",
      title: "Understanding the Underwriter's Lens",
      desc: "Beyond the raw 3-digit score, financial institutions evaluate Fixed Obligation to Income Ratio (FOIR), banking health, and employment stability. We explain how lenders evaluate your complete credit profile.",
    },
  ];

  return (
    <div className="bg-slate-50 min-h-screen text-slate-800">
      {/* Hero Section with Mascot */}
      <section className="bg-[#0B1B3D] text-white pt-24 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#F97316_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#122855] border border-[#1B3B7A] text-[#F97316] text-xs font-semibold mb-4 tracking-wide uppercase">
                <span>Credit Education &amp; Guidance</span>
              </div>
              <AnimatedHeadline
                text="Demystify Your Credit Profile"
                accentWord="Profile"
                className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4 leading-tight"
              />
              <p className="max-w-2xl text-slate-300 text-sm sm:text-base leading-relaxed mb-8">
                Understand how credit bureaus evaluate your repayment record, what lenders examine during credit appraisal, and how to maintain healthy financial habits over time.
              </p>
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
                <button
                  type="button"
                  onClick={() => openModal("Credit Profile Guidance")}
                  className="px-6 py-3 rounded-xl font-bold bg-[#F97316] text-white hover:bg-orange-600 transition-all text-sm shadow-lg shadow-orange-500/20"
                >
                  Request Credit Profile Consultation
                </button>
                <Link
                  href="/services"
                  className="px-6 py-3 rounded-xl font-semibold bg-white/10 text-white hover:bg-white/20 transition-all text-sm"
                >
                  Explore Loan Services
                </Link>
              </div>
            </div>

            {/* Mascot Column */}
            <div className="lg:col-span-4 flex items-center justify-center">
              <MascotCard
                src="/robo-credit.png"
                alt="First Truth Credit Score Mascot"
                width={260}
                height={390}
                badgeText="CIBIL & Score Desk"
              />
            </div>

          </div>
        </div>
      </section>

      {/* Compliance / Disclaimer Notice (Critical for Ethics & Truth-First Policy) */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 relative z-20">
        <div className="bg-amber-50 border-l-4 border-amber-500 rounded-2xl p-5 sm:p-6 shadow-md">
          <div className="flex items-start gap-4">
            <div className="text-amber-600 text-xl font-bold mt-0.5">⚠️</div>
            <div>
              <h3 className="text-sm font-bold text-amber-900 mb-1">
                Transparency First: No Guaranteed Score Hikes or Magical Fixes
              </h3>
              <p className="text-xs text-amber-800 leading-relaxed">
                First Truth Finance Consultations provides <strong>educational guidance and profile review services</strong>. We do not promise artificial credit score repair, removal of legitimate adverse remarks, or guaranteed loan sanctions. Credit scores are determined solely by authorized credit bureaus (such as TransUnion CIBIL, Experian, CRIF, and Equifax) based on actual financial history reported by regulated financial institutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Score Bands Overview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-900 mb-3">
            Understanding Credit Score Ranges
          </h2>
          <p className="text-sm text-slate-600">
            In India, consumer credit scores typically range from 300 to 900. Here is how institutional lenders generally perceive different score tiers:
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
            <div>
              <span className="inline-block px-2.5 py-1 rounded-full text-xs font-bold bg-emerald-50 text-emerald-700 mb-3">
                750 – 900 (Excellent)
              </span>
              <h3 className="text-base font-bold text-navy-900 mb-2">Prime Borrower</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Enjoys access to prime interest rates, quicker sanction turnaround, and higher negotiation leverage across major scheduled commercial banks and NBFCs.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] text-slate-500 font-medium">
              High approval probability subject to income verification.
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
            <div>
              <span className="inline-block px-2.5 py-1 rounded-full text-xs font-bold bg-blue-50 text-blue-700 mb-3">
                700 – 749 (Good)
              </span>
              <h3 className="text-base font-bold text-navy-900 mb-2">Standard Eligible</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Considered reliable by most institutional lenders. Standard interest rates and standard documentation guidelines apply for both secured and unsecured facilities.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] text-slate-500 font-medium">
              Regular lender underwriting norms apply.
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
            <div>
              <span className="inline-block px-2.5 py-1 rounded-full text-xs font-bold bg-amber-50 text-amber-700 mb-3">
                650 – 699 (Fair / Moderate)
              </span>
              <h3 className="text-base font-bold text-navy-900 mb-2">Conditional Eligibility</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                May face stricter scrutiny, requirements for higher collateral security, co-applicants with stronger profiles, or slightly elevated risk-adjusted interest margins.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] text-slate-500 font-medium">
              Focused loan syndication & documentation needed.
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
            <div>
              <span className="inline-block px-2.5 py-1 rounded-full text-xs font-bold bg-rose-50 text-rose-700 mb-3">
                Below 650 (Challenged)
              </span>
              <h3 className="text-base font-bold text-navy-900 mb-2">Needs Remediation</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Fresh unsecured credit is generally restricted. Borrowers should prioritize clearing settled/written-off obligations and establishing clean repayment records over 12-24 months.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] text-slate-500 font-medium">
              Advisable to pause fresh loan applications.
            </div>
          </div>
        </div>
      </section>

      {/* How FTFC Assists: 5 Guidance Pillars */}
      <section className="bg-navy-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-brand-orange text-xs font-bold tracking-widest uppercase">
              Practical Consultation
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
              5 Ways We Assist Borrowers With Credit Guidance
            </h2>
            <p className="text-slate-300 text-sm mt-2">
              Our principal consultant Shubham Jain and team provide step-by-step guidance to help you navigate credit bureau reports realistically.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {guidancePillars.map((pillar, idx) => (
              <div
                key={pillar.title}
                className={`bg-navy-800/80 p-6 rounded-2xl border border-navy-700 flex flex-col justify-between ${
                  idx === 4 ? "md:col-span-2 lg:col-span-1" : ""
                }`}
              >
                <div>
                  <div className="text-brand-orange font-extrabold text-xl mb-3">
                    {pillar.step}
                  </div>
                  <h3 className="text-base font-bold text-white mb-2">{pillar.title}</h3>
                  <p className="text-xs text-slate-300 leading-relaxed">{pillar.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Factors Influencing Credit Health */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-900 mb-3">
            Core Factors That Shape Your Credit Score
          </h2>
          <p className="text-sm text-slate-600">
            Bureau scoring algorithms evaluate your financial behavior across five weighted dimensions.
          </p>
        </div>

        <div className="space-y-4 max-w-4xl mx-auto">
          {creditFactors.map((factor) => (
            <div
              key={factor.title}
              className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
            >
              <div className="max-w-2xl">
                <div className="flex items-center gap-3 mb-1">
                  <h3 className="text-sm font-bold text-navy-900">{factor.title}</h3>
                  <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-slate-100 text-slate-600">
                    {factor.badge}
                  </span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">{factor.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Consultation Booking CTA */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="bg-gradient-to-br from-navy-900 to-navy-800 text-white rounded-3xl p-8 sm:p-10 shadow-xl border border-navy-700 text-center">
          <h3 className="text-2xl sm:text-3xl font-bold mb-3">
            Have Questions About Your Credit Health?
          </h3>
          <p className="text-slate-300 text-sm max-w-xl mx-auto mb-6 leading-relaxed">
            Schedule a 1-on-1 consultation at our office in Rohtak or connect telephonically. We review your bureau report, explain what lenders will ask, and guide you towards financial readiness.
          </p>
          <button
            type="button"
            onClick={() => openModal("Credit Profile Guidance")}
            className="px-8 py-3.5 rounded-xl font-bold bg-brand-orange text-white hover:bg-orange-600 transition-all text-sm shadow-lg shadow-orange-500/20"
          >
            Schedule a Credit Review Session
          </button>
        </div>
      </section>
    </div>
  );
}
