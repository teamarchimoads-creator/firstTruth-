import React from "react";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 - Page Not Found | First Truth Finance Consultations",
  description: "The page you are looking for does not exist. Browse our loan services, EMI calculator, or contact First Truth Finance in Rohtak.",
};

export default function NotFound() {
  return (
    <div className="min-h-[75vh] bg-slate-50 flex items-center justify-center px-4 py-16 sm:px-6 lg:px-8">
      <div className="max-w-xl w-full text-center">
        {/* 404 Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-100 text-brand-orange text-xs font-bold uppercase tracking-widest mb-6">
          <span>Error 404</span>
        </div>

        <h1 className="text-4xl sm:text-5xl font-black text-navy-900 tracking-tight mb-4">
          Page Not Found
        </h1>

        <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-8">
          The page or resource you are looking for might have been relocated, renamed, or is temporarily unavailable. Let us guide you back to the right path.
        </p>

        {/* Quick Route Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8 text-left">
          <Link
            href="/"
            className="p-4 rounded-2xl bg-white border border-slate-200 hover:border-brand-orange hover:shadow-md transition-all group"
          >
            <div className="font-bold text-navy-900 group-hover:text-brand-orange text-sm mb-1">
              🏠 Homepage
            </div>
            <div className="text-xs text-slate-500">
              Return to our central consultation overview.
            </div>
          </Link>

          <Link
            href="/services"
            className="p-4 rounded-2xl bg-white border border-slate-200 hover:border-brand-orange hover:shadow-md transition-all group"
          >
            <div className="font-bold text-navy-900 group-hover:text-brand-orange text-sm mb-1">
              💼 Loan Services
            </div>
            <div className="text-xs text-slate-500">
              Explore Home, Business, LAP & Vehicle financing.
            </div>
          </Link>

          <Link
            href="/emi-calculator"
            className="p-4 rounded-2xl bg-white border border-slate-200 hover:border-brand-orange hover:shadow-md transition-all group"
          >
            <div className="font-bold text-navy-900 group-hover:text-brand-orange text-sm mb-1">
              🧮 EMI Calculator
            </div>
            <div className="text-xs text-slate-500">
              Calculate monthly installments and interest schedules.
            </div>
          </Link>

          <Link
            href="/contact"
            className="p-4 rounded-2xl bg-white border border-slate-200 hover:border-brand-orange hover:shadow-md transition-all group"
          >
            <div className="font-bold text-navy-900 group-hover:text-brand-orange text-sm mb-1 flex items-center justify-center gap-1.5">
              <svg className="w-3.5 h-3.5 text-[#F97316]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>Contact &amp; Office</span>
            </div>
            <div className="text-xs text-slate-500">
              Connect with our Rohtak advisory desk directly.
            </div>
          </Link>
        </div>

        <Link
          href="/"
          className="inline-flex items-center justify-center px-8 py-3.5 rounded-xl font-bold bg-navy-900 text-white hover:bg-navy-800 transition-all text-sm shadow-md"
        >
          Return to Homepage
        </Link>
      </div>
    </div>
  );
}
