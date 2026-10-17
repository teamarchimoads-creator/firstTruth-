"use client";

import React, { useState } from "react";
import Image from "next/image";
import MascotCard from "@/components/MascotCard";
import AnimatedHeadline from "@/components/AnimatedHeadline";

export default function PartnersPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    city: "",
    profession: "Independent Financial Advisor (IFA)",
    monthlyVolume: "₹25 Lakhs – ₹1 Crore",
    notes: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const supportPillars = [
    {
      num: "01",
      title: "Extensive Institutional Network",
      desc: "Gain access to a multi-lender syndication network spanning leading public banks, private commercial banks, specialized housing finance companies (HFCs), and tech-enabled NBFCs.",
    },
    {
      num: "02",
      title: "End-to-End Case Underwriting & Scrutiny",
      desc: "Our experienced loan processing desk in Rohtak reviews applicant files, analyzes balance sheets, computes FOIR/LTV ratios, and identifies suitable product programs before filing.",
    },
    {
      num: "03",
      title: "Transparent Payouts & Timely Reporting",
      desc: "Enjoy clear milestone updates from file login to final sanction and disbursement, backed by a transparent, contractual channel partner commission structure.",
    },
    {
      num: "04",
      title: "Comprehensive Multi-Product Portfolio",
      desc: "Empower your clients with a full suite of financing solutions: Home Loans, Business Financing, Machinery/Working Capital Loans, Loans Against Property, and Commercial Vehicle Loans.",
    },
    {
      num: "05",
      title: "Dedicated Relationship Management",
      desc: "Direct access to our senior credit leads and principal consultant Shubham Jain for complex profile structuring, collateral legal evaluations, and escalated file tracking.",
    },
  ];

  const whoCanPartner = [
    {
      title: "Chartered Accountants & Tax Consultants",
      desc: "Add comprehensive loan syndication services for your SME, corporate, and proprietor clients seeking working capital or commercial property financing.",
    },
    {
      title: "Real Estate Brokers & Developers",
      desc: "Ensure seamless home loan sanction and disbursement support for your property buyers, builders, and plot investors across Haryana and NCR.",
    },
    {
      title: "Insurance Agents & Mutual Fund Distributors",
      desc: "Broaden your financial advisory practice by catering to your clients' borrowing needs with secured and unsecured debt products.",
    },
    {
      title: "Independent Loan Agents & DSAs",
      desc: "Accelerate your local business operations by partnering with an established syndication desk with multi-lender tie-ups and prompt processing support.",
    },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    const cleanPhone = formData.phone.replace(/[^0-9]/g, "");
    if (cleanPhone.length < 10) {
      setError("Please enter a valid 10-digit mobile number.");
      return;
    }

    setLoading(true);

    try {
      const combinedNotes = `Partner Inquiry | Profession: ${formData.profession} | City: ${formData.city || "Not specified"} | Expected Monthly Volume: ${formData.monthlyVolume} | Remarks: ${formData.notes || "None"}`;

      const res = await fetch("/api/consultations", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: formData.fullName,
          phone: formData.phone,
          email: formData.email,
          serviceType: "DSA Channel Partner Inquiry",
          notes: combinedNotes,
        }),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || "Failed to submit partner inquiry.");
      }

      setSuccess(true);
      setFormData({
        fullName: "",
        phone: "",
        email: "",
        city: "",
        profession: "Independent Financial Advisor (IFA)",
        monthlyVolume: "₹25 Lakhs – ₹1 Crore",
        notes: "",
      });
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message || "An error occurred while submitting your inquiry.");
      } else {
        setError("An error occurred while submitting your inquiry.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-slate-50 min-h-screen text-slate-800">
      {/* Hero Section with Mascot */}
      <section className="bg-[#0B1B3D] text-white pt-24 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#F97316_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#122855] border border-[#1B3B7A] text-[#F97316] text-xs font-semibold mb-4 tracking-wide uppercase">
                <span>DSA &amp; Institutional Network</span>
              </div>
              <AnimatedHeadline
                text="Become an FI Channel Partner"
                accentWord="Partner"
                className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4 leading-tight"
              />
              <p className="max-w-2xl text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                Expand your financial services practice. Partner with First Truth Finance Consultations to provide your clients with verified lending solutions across home loans, business funding, and loan syndication.
              </p>
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 text-xs text-slate-300">
                <span className="px-3 py-1.5 rounded-full bg-white/10 border border-white/10 flex items-center gap-1.5">
                  🤝 Official DSA Institutional Tie-Ups
                </span>
                <span className="px-3 py-1.5 rounded-full bg-white/10 border border-white/10 flex items-center gap-1.5">
                  💼 Transparent Commission Matrix
                </span>
                <span className="px-3 py-1.5 rounded-full bg-white/10 border border-white/10 flex items-center gap-1.5 text-[#F97316] font-semibold">
                  ✓ Zero Onboarding Fee
                </span>
              </div>
            </div>

            {/* Mascot Column */}
            <div className="lg:col-span-4 flex items-center justify-center">
              <MascotCard
                src="/robo-partner.png"
                alt="First Truth Partner Mascot"
                width={260}
                height={390}
                badgeText="FI Partner Desk"
              />
            </div>

          </div>
        </div>
      </section>

      {/* Main Grid: Benefits + Registration Form */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Partnership Overview & Pillars (7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/80 shadow-lg">
              <h2 className="text-xl sm:text-2xl font-extrabold text-navy-900 mb-4">
                Build Your Financial Services Business with FTFC
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed mb-6">
                Whether you are a practicing Chartered Accountant, an active property consultant, or an independent loan advisor in Haryana or Delhi NCR, partnering with First Truth Finance Consultations gives you the institutional infrastructure to close complex funding mandates smoothly.
              </p>

              <div className="space-y-4">
                {supportPillars.map((pillar) => (
                  <div
                    key={pillar.num}
                    className="flex gap-4 p-4 rounded-2xl bg-slate-50/80 border border-slate-200/80"
                  >
                    <span className="text-brand-orange font-extrabold text-lg shrink-0">
                      {pillar.num}
                    </span>
                    <div>
                      <h3 className="text-sm font-bold text-navy-900 mb-1">{pillar.title}</h3>
                      <p className="text-xs text-slate-600 leading-relaxed">{pillar.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Who Can Partner Card */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/80 shadow-lg">
              <h3 className="text-lg font-bold text-navy-900 mb-4">
                Who Can Explore a Partnership?
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {whoCanPartner.map((item) => (
                  <div key={item.title} className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                    <h4 className="text-xs font-bold text-navy-900 mb-1">{item.title}</h4>
                    <p className="text-[11px] text-slate-600 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Agreement & Code of Conduct Notice */}
            <div className="bg-navy-900 text-white p-6 rounded-2xl border border-navy-800">
              <h4 className="text-sm font-bold text-brand-orange mb-2">
                Ethical Conduct & Regulatory Compliance
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                All FTFC channel partnerships operate under a structured Channel Partner Agreement complying with RBI and institutional lender norms. We uphold zero tolerance for forged documentation, unauthorized upfront client fees, or misrepresentation.
              </p>
            </div>
          </div>

          {/* Right Column: Functional Partner Enquiry Form (5 cols) */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-slate-200/80 sticky top-24">
            <div className="mb-6">
              <span className="text-xs font-bold text-brand-orange uppercase tracking-wider block mb-1">
                Channel Partner Application
              </span>
              <h3 className="text-2xl font-extrabold text-navy-900">
                Register Your Interest
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Submit your credentials and our team will get in touch within 24–48 business hours to discuss onboarding.
              </p>
            </div>

            {success ? (
              <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6 text-center">
                <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-3 text-xl font-bold">
                  ✓
                </div>
                <h4 className="text-base font-bold text-emerald-900 mb-2">
                  Partner Application Submitted!
                </h4>
                <p className="text-xs text-emerald-800 leading-relaxed mb-4">
                  Thank you for your interest in partnering with First Truth Finance Consultations. Our channel relationship desk in Rohtak will review your submission and connect shortly.
                </p>
                <button
                  type="button"
                  onClick={() => setSuccess(false)}
                  className="px-4 py-2 bg-emerald-600 text-white rounded-xl text-xs font-semibold hover:bg-emerald-700 transition-colors"
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {error && (
                  <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-xs text-rose-700">
                    {error}
                  </div>
                )}

                <div>
                  <label className="block text-xs font-bold text-navy-900 mb-1">
                    Full Name / Firm Name <span className="text-brand-orange">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="e.g. Rajesh Sharma & Associates"
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-navy-900"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-navy-900 mb-1">
                      Mobile Number <span className="text-brand-orange">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="10-digit mobile"
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-navy-900"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-navy-900 mb-1">
                      Email Address <span className="text-brand-orange">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@example.com"
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-navy-900"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-navy-900 mb-1">
                      City / Region <span className="text-brand-orange">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      placeholder="e.g. Rohtak / Delhi NCR"
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-navy-900"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-navy-900 mb-1">
                      Profession / Domain
                    </label>
                    <select
                      value={formData.profession}
                      onChange={(e) => setFormData({ ...formData, profession: e.target.value })}
                      className="w-full px-3 py-2.5 rounded-xl border border-slate-300 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-navy-900"
                    >
                      <option value="Chartered Accountant (CA)">Chartered Accountant (CA)</option>
                      <option value="Real Estate Consultant / Developer">Real Estate Consultant</option>
                      <option value="Independent Financial Advisor (IFA)">Independent Financial Advisor</option>
                      <option value="Insurance / Mutual Fund Advisor">Insurance / MF Advisor</option>
                      <option value="Existing Loan DSA / Agent">Existing Loan DSA / Agent</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-navy-900 mb-1">
                    Expected Monthly Loan Volume
                  </label>
                  <select
                    value={formData.monthlyVolume}
                    onChange={(e) => setFormData({ ...formData, monthlyVolume: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl border border-slate-300 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-navy-900"
                  >
                    <option value="Under ₹25 Lakhs">Under ₹25 Lakhs</option>
                    <option value="₹25 Lakhs – ₹1 Crore">₹25 Lakhs – ₹1 Crore</option>
                    <option value="₹1 Crore – ₹5 Crores">₹1 Crore – ₹5 Crores</option>
                    <option value="Above ₹5 Crores">Above ₹5 Crores</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-navy-900 mb-1">
                    Brief Background / Notes (Optional)
                  </label>
                  <textarea
                    rows={3}
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    placeholder="Tell us about your client base, loan products of interest, or queries..."
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-navy-900"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3.5 px-6 rounded-xl font-bold bg-brand-orange text-white hover:bg-orange-600 transition-all shadow-lg hover:shadow-orange-500/20 text-sm disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <>
                      <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Submitting Partner Form...
                    </>
                  ) : (
                    "Submit Partnership Application"
                  )}
                </button>

                <p className="text-[11px] text-slate-400 text-center leading-relaxed">
                  Your information is protected and used solely to evaluate mutual partnership synergy.
                </p>
              </form>
            )}
          </div>

        </div>
      </section>

      {/* Frequently Asked Partner Questions */}
      <section className="bg-slate-100/70 border-t border-slate-200 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h3 className="text-2xl font-extrabold text-navy-900">
              Partner FAQs
            </h3>
            <p className="text-xs text-slate-600 mt-1">
              Common questions about working alongside First Truth Finance Consultations.
            </p>
          </div>

          <div className="space-y-4">
            <div className="bg-white p-5 rounded-2xl border border-slate-200">
              <h4 className="text-sm font-bold text-navy-900 mb-1">
                Is there any registration fee to become an FTFC partner?
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                No. FTFC does not charge any upfront onboarding fee or registration deposit from genuine channel partners.
              </p>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-slate-200">
              <h4 className="text-sm font-bold text-navy-900 mb-1">
                Which geographical territories do you cater to?
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                While our central headquarters is located in Rohtak, Haryana, we syndicate and support retail and commercial loan cases across Haryana, Delhi NCR, and neighboring northern states.
              </p>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-slate-200">
              <h4 className="text-sm font-bold text-navy-900 mb-1">
                When and how are partner commissions disbursed?
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Commissions are calculated as per the agreed payout matrix and disbursed directly to your registered bank account upon formal loan disbursement by the lending institution and settlement of institutional accounts.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
