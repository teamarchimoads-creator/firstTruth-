"use client";

import React from "react";
import Link from "next/link";
import { useModal } from "@/context/ModalContext";

export default function Footer() {
  const { openModal } = useModal();

  return (
    <footer suppressHydrationWarning className="w-full border-t border-slate-200 bg-white text-slate-700 pt-14 pb-10 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 pb-12 border-b border-slate-200">
          
          {/* Brand Col */}
          <div className="flex flex-col items-start space-y-3.5">
            <span className="font-extrabold text-[#0B1B3D] text-base sm:text-lg tracking-tight leading-snug">
              FIRST TRUTH FINANCE CONSULTATIONS
            </span>
            <p className="text-slate-600 leading-relaxed text-xs sm:text-[13px] font-normal">
              A premier financial consulting and loan syndication practice based in Rohtak, Haryana. Founded and led by <strong className="text-[#0B1B3D] font-bold">Shubham Jain</strong>.
            </p>
            <div className="p-3.5 rounded-xl bg-gradient-to-br from-orange-50/90 to-amber-50/60 border border-orange-200/90 w-full shadow-xs">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#F97316] block">
                Brand Philosophy
              </span>
              <span className="text-xs font-bold text-[#0B1B3D] mt-1 block leading-snug">
                Truth First. Transparent Guidance. Informed Decisions.
              </span>
            </div>
            <div className="flex items-center gap-2 text-slate-700 font-medium text-xs pt-1" suppressHydrationWarning>
              <svg className="w-4 h-4 text-[#F97316] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>Rohtak, Haryana, India</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col">
            <span className="font-extrabold text-[#0B1B3D] text-xs uppercase tracking-wider mb-4 pb-1 border-b border-orange-200/60 inline-block w-fit">
              Company
            </span>
            <ul className="space-y-2.5">
              <li>
                <Link href="/" className="text-slate-700 hover:text-[#F97316] font-medium transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-slate-700 hover:text-[#F97316] font-medium transition-colors">
                  About Us &amp; Founder
                </Link>
              </li>
              <li>
                <Link href="/partners" className="text-slate-700 hover:text-[#F97316] font-medium transition-colors">
                  Become an FI Partner
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-700 hover:text-[#F97316] font-medium transition-colors">
                  Contact Office
                </Link>
              </li>
              <li>
                <button
                  onClick={() => openModal()}
                  className="text-[#F97316] font-bold hover:underline cursor-pointer text-left inline-flex items-center gap-1.5"
                >
                  <span>Book Free Consultation</span>
                  <span>→</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Loan Services Links */}
          <div className="flex flex-col">
            <span className="font-extrabold text-[#0B1B3D] text-xs uppercase tracking-wider mb-4 pb-1 border-b border-orange-200/60 inline-block w-fit">
              Loan Consultations
            </span>
            <ul className="space-y-2.5">
              <li>
                <Link href="/services/home-loan" className="text-slate-700 hover:text-[#F97316] font-medium transition-colors">
                  Home Loan Consultation
                </Link>
              </li>
              <li>
                <Link href="/services/business-loan" className="text-slate-700 hover:text-[#F97316] font-medium transition-colors">
                  Business Loan Consultation
                </Link>
              </li>
              <li>
                <Link href="/services/vehicle-loan" className="text-slate-700 hover:text-[#F97316] font-medium transition-colors">
                  Vehicle Loan Consultation
                </Link>
              </li>
              <li>
                <Link href="/services/loan-against-property" className="text-slate-700 hover:text-[#F97316] font-medium transition-colors">
                  Loan Against Property (LAP)
                </Link>
              </li>
              <li>
                <Link href="/services/personal-loan" className="text-slate-700 hover:text-[#F97316] font-medium transition-colors">
                  Personal Loan Consultation
                </Link>
              </li>
              <li>
                <Link href="/services" className="font-bold text-[#F97316] hover:text-[#EA580C] transition-colors inline-flex items-center gap-1">
                  <span>View All Services</span>
                  <span>→</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Tools & Resources */}
          <div className="flex flex-col">
            <span className="font-extrabold text-[#0B1B3D] text-xs uppercase tracking-wider mb-4 pb-1 border-b border-orange-200/60 inline-block w-fit">
              Financial Tools
            </span>
            <ul className="space-y-2.5">
              <li>
                <Link href="/emi-calculator" className="text-slate-700 hover:text-[#F97316] font-medium transition-colors">
                  Interactive Loan EMI Calculator
                </Link>
              </li>
              <li>
                <Link href="/credit-profile" className="text-slate-700 hover:text-[#F97316] font-medium transition-colors">
                  Understand Your Credit Profile
                </Link>
              </li>
              <li>
                <Link href="/#process" className="text-slate-700 hover:text-[#F97316] font-medium transition-colors">
                  5-Step Consultation Process
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-700 hover:text-[#F97316] font-medium transition-colors">
                  Schedule Direct Advisory
                </Link>
              </li>
            </ul>

            <div className="mt-5 p-3.5 rounded-xl bg-gradient-to-r from-orange-50 to-amber-50 border border-orange-200/80 shadow-xs">
              <span className="text-[11px] font-bold text-slate-700 uppercase tracking-wide block">
                Direct Consultation Line
              </span>
              <span className="text-xs font-black text-[#F97316] block mt-0.5">
                Rohtak, Haryana Consulting Desk
              </span>
            </div>
          </div>

        </div>

        {/* Regulatory Disclaimer & Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p className="max-w-3xl leading-relaxed text-center md:text-left">
            <strong className="text-[#0B1B3D]">Important Regulatory Notice:</strong> First Truth Finance Consultations provides loan syndication and advisory assistance. Loan eligibility, processing timelines, interest rates, and final sanctions remain subject to individual lender verification and regulatory standards. Credit score improvement cannot be guaranteed.
          </p>
          <div className="flex-shrink-0 text-center md:text-right font-medium text-slate-600">
            © 2026 First Truth Finance Consultations. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
