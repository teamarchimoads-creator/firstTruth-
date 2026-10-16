"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    serviceType: "Home Loan Consultation",
    consultationMode: "Office Visit (Rohtak)",
    preferredTime: "Morning (10 AM - 1 PM)",
    notes: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

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
      const combinedNotes = `Mode: ${formData.consultationMode} | Preferred Slot: ${formData.preferredTime} | Details: ${formData.notes || "None"}`;

      const res = await fetch("/api/consultations", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: formData.fullName,
          phone: formData.phone,
          email: formData.email,
          serviceType: formData.serviceType,
          notes: combinedNotes,
        }),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || "Failed to submit consultation request.");
      }

      setSuccess(true);
      setFormData({
        fullName: "",
        phone: "",
        email: "",
        serviceType: "Home Loan Consultation",
        consultationMode: "Office Visit (Rohtak)",
        preferredTime: "Morning (10 AM - 1 PM)",
        notes: "",
      });
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message || "An error occurred while submitting your request.");
      } else {
        setError("An error occurred while submitting your request.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-slate-50 min-h-screen text-slate-800">
      {/* Hero Header with Mascot */}
      <section className="bg-[#0B1B3D] text-white pt-24 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#F97316_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#122855] border border-[#1B3B7A] text-[#F97316] text-xs font-semibold mb-4 tracking-wide uppercase">
                <span>Direct Guidance &amp; Advisory</span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4 leading-tight">
                Contact <span className="text-[#F97316]">First Truth</span>
              </h1>
              <p className="max-w-2xl text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                Have questions regarding an upcoming loan application or want an objective evaluation of your borrowing options? Our advisory team in Rohtak is ready to assist you.
              </p>
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 text-xs text-slate-300">
                <span className="px-3 py-1.5 rounded-full bg-white/10 border border-white/10 flex items-center gap-1.5">
                  <svg className="w-3.5 h-3.5 text-[#F97316] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>Rohtak, Haryana (HQ)</span>
                </span>
                <span className="px-3 py-1.5 rounded-full bg-white/10 border border-white/10 flex items-center gap-1.5">
                  🕒 Mon–Sat: 9:30 AM – 6:30 PM
                </span>
                <span className="px-3 py-1.5 rounded-full bg-white/10 border border-white/10 flex items-center gap-1.5 text-[#F97316] font-semibold">
                  ✓ Verified Client Support Desk
                </span>
              </div>
            </div>

            {/* Mascot Column */}
            <div className="lg:col-span-4 flex items-center justify-center">
              <div className="relative w-56 sm:w-64 h-72 sm:h-80 flex items-center justify-center">
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-orange-500/20 via-sky-500/10 to-transparent blur-2xl animate-pulse-glow" />
                <div className="absolute -bottom-2 w-36 h-3 rounded-[100%] bg-black/40 blur-sm animate-pedestal-shadow" />
                <div className="relative z-10 animate-float-robot">
                  <Image
                    src="/robo-contact.png"
                    alt="First Truth Contact Mascot"
                    width={260}
                    height={390}
                    priority
                    unoptimized
                    className="w-48 sm:w-56 h-auto object-contain drop-shadow-[0_20px_35px_rgba(0,0,0,0.4)]"
                  />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Contact Cards & Office Details (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Office Card */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/80 shadow-lg">
              <span className="text-xs font-bold text-brand-orange uppercase tracking-wider block mb-2">
                Headquarters
              </span>
              <h3 className="text-xl font-extrabold text-navy-900 mb-2">
                First Truth Finance Consultations
              </h3>
              <p className="text-xs text-slate-500 mb-6 font-medium">
                Led by Founder & Principal Consultant Shubham Jain
              </p>

              <div className="space-y-4 text-sm text-slate-600">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-orange-50 text-brand-orange flex items-center justify-center shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-[#F97316]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <strong className="text-navy-900 block text-xs">Office Address:</strong>
                    <span className="text-xs text-slate-600">
                      Rohtak, Haryana, India — 124001
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-orange-50 text-brand-orange flex items-center justify-center shrink-0 mt-0.5">
                    📞
                  </div>
                  <div>
                    <strong className="text-navy-900 block text-xs">Telephone / WhatsApp:</strong>
                    <span className="text-xs text-slate-600">
                      +91 98960 XXXXX (Client Desk)
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-orange-50 text-brand-orange flex items-center justify-center shrink-0 mt-0.5">
                    ✉️
                  </div>
                  <div>
                    <strong className="text-navy-900 block text-xs">Official Email:</strong>
                    <span className="text-xs text-slate-600">
                      contact@firsttruthfinance.com
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-orange-50 text-brand-orange flex items-center justify-center shrink-0 mt-0.5">
                    ⏰
                  </div>
                  <div>
                    <strong className="text-navy-900 block text-xs">Consultation Hours:</strong>
                    <span className="text-xs text-slate-600">
                      Monday to Saturday: 9:30 AM – 6:30 PM<br />
                      Sunday: By Prior Appointment Only
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Action Buttons */}
            <div className="bg-navy-900 text-white p-6 rounded-3xl border border-navy-800 shadow-md">
              <h4 className="text-sm font-bold text-white mb-2">Direct Contact Options</h4>
              <p className="text-xs text-slate-300 mb-4 leading-relaxed">
                Need urgent file evaluation or prefer a direct conversation before booking?
              </p>
              <div className="space-y-2">
                <a
                  href="tel:+919896000000"
                  className="w-full py-2.5 px-4 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-xs flex items-center justify-center gap-2 transition-colors border border-white/10"
                >
                  <span>📞</span> Call Our Rohtak Desk
                </a>
                <a
                  href="mailto:contact@firsttruthfinance.com"
                  className="w-full py-2.5 px-4 rounded-xl bg-brand-orange/90 hover:bg-brand-orange text-white font-semibold text-xs flex items-center justify-center gap-2 transition-colors"
                >
                  <span>✉️</span> Email Documents for Review
                </a>
              </div>
            </div>

            {/* Truth-First Guarantee Box */}
            <div className="bg-slate-100 p-5 rounded-2xl border border-slate-200">
              <h5 className="text-xs font-bold text-navy-900 mb-1">Our Consultation Promise</h5>
              <p className="text-[11px] text-slate-600 leading-relaxed">
                We provide honest, objective eligibility reviews without sales pressure or artificial guarantees. We never ask for client netbanking credentials or advance unofficial cash deposits.
              </p>
            </div>

          </div>

          {/* Right Column: Interactive Consultation Booking Form (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 lg:p-10 shadow-xl border border-slate-200/80">
            <div className="mb-6">
              <span className="text-xs font-bold text-brand-orange uppercase tracking-wider block mb-1">
                Schedule an Appointment
              </span>
              <h3 className="text-2xl font-extrabold text-navy-900">
                Book Your Confidential Consultation
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Fill in the details below to schedule an in-person meeting in Rohtak or a structured phone discussion.
              </p>
            </div>

            {success ? (
              <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-8 text-center">
                <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  ✓
                </div>
                <h4 className="text-lg font-bold text-emerald-900 mb-2">
                  Consultation Request Received!
                </h4>
                <p className="text-xs text-emerald-800 leading-relaxed max-w-md mx-auto mb-6">
                  Thank you for reaching out to First Truth Finance Consultations. Our advisory team will review your requirement and confirm your scheduled slot within 24 business hours.
                </p>
                <div className="flex justify-center gap-3">
                  <button
                    type="button"
                    onClick={() => setSuccess(false)}
                    className="px-4 py-2 bg-emerald-600 text-white rounded-xl text-xs font-semibold hover:bg-emerald-700 transition-colors"
                  >
                    Send Another Message
                  </button>
                  <Link
                    href="/services"
                    className="px-4 py-2 bg-slate-200 text-slate-800 rounded-xl text-xs font-semibold hover:bg-slate-300 transition-colors"
                  >
                    Explore Services
                  </Link>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {error && (
                  <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-xs text-rose-700">
                    {error}
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-navy-900 mb-1">
                      Full Name <span className="text-brand-orange">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="e.g. Ramesh Kumar"
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-navy-900"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-navy-900 mb-1">
                      Mobile Number <span className="text-brand-orange">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="10-digit mobile number"
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-navy-900"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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

                  <div>
                    <label className="block text-xs font-bold text-navy-900 mb-1">
                      Service of Interest
                    </label>
                    <select
                      value={formData.serviceType}
                      onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                      className="w-full px-3 py-2.5 rounded-xl border border-slate-300 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-navy-900"
                    >
                      <option value="Home Loan Consultation">Home Loan Consultation</option>
                      <option value="Business Loan Consultation">Business Loan Consultation</option>
                      <option value="Vehicle Loan Consultation">Vehicle Loan Consultation</option>
                      <option value="Loan Against Property">Loan Against Property (LAP)</option>
                      <option value="Personal Loan Consultation">Personal Loan Consultation</option>
                      <option value="Credit Profile Guidance">Credit Profile Guidance</option>
                      <option value="General Financial Advisory">General Financial Advisory</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-navy-900 mb-1">
                      Preferred Mode
                    </label>
                    <select
                      value={formData.consultationMode}
                      onChange={(e) => setFormData({ ...formData, consultationMode: e.target.value })}
                      className="w-full px-3 py-2.5 rounded-xl border border-slate-300 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-navy-900"
                    >
                      <option value="Office Visit (Rohtak)">In-Person Visit (Rohtak Office)</option>
                      <option value="Phone Call">Telephone Discussion</option>
                      <option value="Video Call (Google Meet)">Video Call (Google Meet)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-navy-900 mb-1">
                      Preferred Time Slot
                    </label>
                    <select
                      value={formData.preferredTime}
                      onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                      className="w-full px-3 py-2.5 rounded-xl border border-slate-300 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-navy-900"
                    >
                      <option value="Morning (10 AM - 1 PM)">Morning (10:00 AM – 1:00 PM)</option>
                      <option value="Afternoon (1 PM - 4 PM)">Afternoon (1:00 PM – 4:00 PM)</option>
                      <option value="Evening (4 PM - 6:30 PM)">Evening (4:00 PM – 6:30 PM)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-navy-900 mb-1">
                    Requirement Summary / Questions (Optional)
                  </label>
                  <textarea
                    rows={4}
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    placeholder="Mention your approximate loan requirement amount, employment type, or any specific questions..."
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
                      Submitting Request...
                    </>
                  ) : (
                    "Schedule Consultation"
                  )}
                </button>

                <p className="text-[11px] text-slate-400 text-center leading-relaxed">
                  🔒 We strictly respect your privacy. No spam, no marketing calls, and zero unauthorized sharing of your financial information.
                </p>
              </form>
            )}
          </div>

        </div>
      </section>
    </div>
  );
}
