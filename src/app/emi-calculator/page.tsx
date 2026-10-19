"use client";

import React, { useState, useId } from "react";
import Link from "next/link";
import Image from "next/image";
import { useModal } from "@/context/ModalContext";
import MascotCard from "@/components/MascotCard";
import AnimatedHeadline from "@/components/AnimatedHeadline";

export default function EmiCalculatorPage() {
  const { openModal } = useModal();

  const [loanAmount, setLoanAmount] = useState<number>(2500000);
  const [interestRate, setInterestRate] = useState<number>(8.75);
  const [tenureYears, setTenureYears] = useState<number>(15);

  const amountInputId = useId();
  const rateInputId = useId();
  const tenureInputId = useId();

  // EMI Formula: P * r * (1 + r)^n / ((1 + r)^n - 1)
  const calculateEMI = (principal: number, annualRate: number, years: number) => {
    const monthlyRate = annualRate / 12 / 100;
    const totalMonths = years * 12;

    if (monthlyRate === 0) {
      return {
        monthlyEMI: principal / totalMonths,
        totalInterest: 0,
        totalPayment: principal,
      };
    }

    const emi =
      (principal * monthlyRate * Math.pow(1 + monthlyRate, totalMonths)) /
      (Math.pow(1 + monthlyRate, totalMonths) - 1);

    const totalPayment = emi * totalMonths;
    const totalInterest = totalPayment - principal;

    return {
      monthlyEMI: Math.round(emi),
      totalInterest: Math.round(totalInterest),
      totalPayment: Math.round(totalPayment),
    };
  };

  const { monthlyEMI, totalInterest, totalPayment } = calculateEMI(
    loanAmount,
    interestRate,
    tenureYears
  );

  const principalRatio = totalPayment > 0 ? ((loanAmount / totalPayment) * 100).toFixed(1) : "50.0";
  const interestRatio = totalPayment > 0 ? ((totalInterest / totalPayment) * 100).toFixed(1) : "50.0";

  const setPreset = (amount: number, rate: number, years: number) => {
    setLoanAmount(amount);
    setInterestRate(rate);
    setTenureYears(years);
  };

  // Generate Year-by-Year Amortization preview (first 5 years)
  const generateAmortization = () => {
    const schedule = [];
    let balance = loanAmount;
    const monthlyRate = interestRate / 12 / 100;

    for (let yr = 1; yr <= Math.min(tenureYears, 5); yr++) {
      let yearlyInterest = 0;
      let yearlyPrincipal = 0;

      for (let m = 0; m < 12; m++) {
        if (balance <= 0) break;
        const interestForMonth = balance * monthlyRate;
        const principalForMonth = monthlyEMI - interestForMonth;
        yearlyInterest += interestForMonth;
        yearlyPrincipal += principalForMonth;
        balance = Math.max(0, balance - principalForMonth);
      }

      schedule.push({
        year: yr,
        principalPaid: Math.round(yearlyPrincipal),
        interestPaid: Math.round(yearlyInterest),
        endingBalance: Math.round(balance),
      });
    }
    return schedule;
  };

  const amortizationPreview = generateAmortization();

  return (
    <div className="bg-slate-50 min-h-screen text-slate-800">
      {/* Hero Header with Mascot */}
      <section className="bg-[#0B1B3D] text-white pt-24 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#F97316_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#122855] border border-[#1B3B7A] text-[#F97316] text-xs font-semibold mb-4 tracking-wide uppercase">
                <span>Financial Planning Tool</span>
              </div>
              <AnimatedHeadline
                text="Loan EMI Calculator"
                accentWord="Calculator"
                className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4 leading-tight"
              />
              <p className="max-w-2xl text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                Estimate your monthly repayments, understand your overall interest outflow, and plan your borrowing with accurate, transparent calculations.
              </p>
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 text-xs text-slate-300">
                <span className="px-3 py-1.5 rounded-full bg-white/10 border border-white/10 flex items-center gap-1.5">
                  🧮 Live Interactive Slider Engine
                </span>
                <span className="px-3 py-1.5 rounded-full bg-white/10 border border-white/10 flex items-center gap-1.5">
                  📊 Principal vs Interest Breakdown
                </span>
                <span className="px-3 py-1.5 rounded-full bg-white/10 border border-white/10 flex items-center gap-1.5 text-[#F97316] font-semibold">
                  ✓ Amortization Schedule
                </span>
              </div>
            </div>

            {/* Mascot Column */}
            <div className="lg:col-span-4 flex items-center justify-center">
              <MascotCard
                src="/robo-calculator.png"
                alt="First Truth EMI Calculator Mascot"
                width={260}
                height={390}
                badgeText="Financial Planning Bot"
              />
            </div>

          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20 pb-20">
        <div className="bg-white rounded-3xl shadow-xl border border-slate-200/80 p-6 sm:p-8 lg:p-10">
          
          {/* Quick Presets */}
          <div className="mb-8">
            <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-3">
              Quick Loan Presets:
            </span>
            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                onClick={() => setPreset(3500000, 8.5, 20)}
                className="px-3.5 py-1.5 rounded-full text-xs font-medium bg-slate-100 hover:bg-navy-50 hover:text-navy-900 transition-colors border border-slate-200"
                suppressHydrationWarning
              >
                🏠 Home Loan (₹35L @ 8.5%, 20y)
              </button>
              <button
                type="button"
                onClick={() => setPreset(800000, 9.25, 5)}
                className="px-3.5 py-1.5 rounded-full text-xs font-medium bg-slate-100 hover:bg-navy-50 hover:text-navy-900 transition-colors border border-slate-200"
                suppressHydrationWarning
              >
                🚗 Vehicle Loan (₹8L @ 9.25%, 5y)
              </button>
              <button
                type="button"
                onClick={() => setPreset(1500000, 11.5, 5)}
                className="px-3.5 py-1.5 rounded-full text-xs font-medium bg-slate-100 hover:bg-navy-50 hover:text-navy-900 transition-colors border border-slate-200"
                suppressHydrationWarning
              >
                💼 Business Loan (₹15L @ 11.5%, 5y)
              </button>
              <button
                type="button"
                onClick={() => setPreset(400000, 12.0, 3)}
                className="px-3.5 py-1.5 rounded-full text-xs font-medium bg-slate-100 hover:bg-navy-50 hover:text-navy-900 transition-colors border border-slate-200"
                suppressHydrationWarning
              >
                ⚡ Personal Loan (₹4L @ 12%, 3y)
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* Input Controls (Left Column) */}
            <div className="lg:col-span-7 space-y-8">
              
              {/* Loan Amount */}
              <div className="bg-slate-50/80 p-5 rounded-2xl border border-slate-200">
                <div className="flex justify-between items-center mb-3">
                  <label htmlFor={amountInputId} className="text-sm font-semibold text-navy-900">
                    Loan Amount
                  </label>
                  <div className="flex items-center gap-1 bg-white border border-slate-300 rounded-lg px-3 py-1 text-sm font-bold text-navy-900">
                    <span className="text-slate-400">₹</span>
                    <input
                      id={amountInputId}
                      type="number"
                      aria-label="Loan Amount in Rupees"
                      value={loanAmount}
                      onChange={(e) => setLoanAmount(Math.max(10000, Number(e.target.value)))}
                      className="w-32 text-right focus:outline-none font-bold text-navy-900"
                    />
                  </div>
                </div>
                <input
                  type="range"
                  aria-label="Loan Amount Slider"
                  min="50000"
                  max="20000000"
                  step="50000"
                  value={loanAmount}
                  onChange={(e) => setLoanAmount(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-brand-orange"
                />
                <div className="flex justify-between text-[11px] text-slate-400 mt-2 font-medium">
                  <span>₹50,000</span>
                  <span>₹1 Crore</span>
                  <span>₹2 Crore</span>
                </div>
              </div>

              {/* Interest Rate */}
              <div className="bg-slate-50/80 p-5 rounded-2xl border border-slate-200">
                <div className="flex justify-between items-center mb-3">
                  <label htmlFor={rateInputId} className="text-sm font-semibold text-navy-900">
                    Interest Rate (% per annum)
                  </label>
                  <div className="flex items-center gap-1 bg-white border border-slate-300 rounded-lg px-3 py-1 text-sm font-bold text-navy-900">
                    <input
                      id={rateInputId}
                      type="number"
                      aria-label="Interest Rate per annum"
                      step="0.1"
                      min="1"
                      max="30"
                      value={interestRate}
                      onChange={(e) => setInterestRate(Math.max(0.1, Number(e.target.value)))}
                      className="w-16 text-right focus:outline-none font-bold text-navy-900"
                    />
                    <span className="text-slate-400">%</span>
                  </div>
                </div>
                <input
                  type="range"
                  aria-label="Interest Rate Slider"
                  min="6.0"
                  max="24.0"
                  step="0.25"
                  value={interestRate}
                  onChange={(e) => setInterestRate(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-brand-orange"
                />
                <div className="flex justify-between text-[11px] text-slate-400 mt-2 font-medium">
                  <span>6.0%</span>
                  <span>15.0%</span>
                  <span>24.0%</span>
                </div>
              </div>

              {/* Loan Tenure */}
              <div className="bg-slate-50/80 p-5 rounded-2xl border border-slate-200">
                <div className="flex justify-between items-center mb-3">
                  <label htmlFor={tenureInputId} className="text-sm font-semibold text-navy-900">
                    Loan Tenure (Years)
                  </label>
                  <div className="flex items-center gap-1 bg-white border border-slate-300 rounded-lg px-3 py-1 text-sm font-bold text-navy-900">
                    <input
                      id={tenureInputId}
                      type="number"
                      aria-label="Loan Tenure in Years"
                      min="1"
                      max="30"
                      value={tenureYears}
                      onChange={(e) => setTenureYears(Math.max(1, Number(e.target.value)))}
                      className="w-16 text-right focus:outline-none font-bold text-navy-900"
                    />
                    <span className="text-slate-400 text-xs">Yrs ({tenureYears * 12}m)</span>
                  </div>
                </div>
                <input
                  type="range"
                  aria-label="Loan Tenure Slider"
                  min="1"
                  max="30"
                  step="1"
                  value={tenureYears}
                  onChange={(e) => setTenureYears(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-brand-orange"
                />
                <div className="flex justify-between text-[11px] text-slate-400 mt-2 font-medium">
                  <span>1 Year</span>
                  <span>15 Years</span>
                  <span>30 Years</span>
                </div>
              </div>

            </div>

            {/* Output Card (Right Column) */}
            <div className="lg:col-span-5 bg-navy-900 text-white rounded-3xl p-6 sm:p-8 shadow-xl border border-navy-800 flex flex-col justify-between">
              <div>
                <span className="text-xs font-semibold text-slate-400 uppercase tracking-widest block mb-1">
                  Estimated Monthly Outflow
                </span>
                <div className="text-3xl sm:text-4xl font-extrabold text-brand-orange mb-6 tracking-tight">
                  ₹{monthlyEMI.toLocaleString("en-IN")}
                  <span className="text-sm font-normal text-slate-300 ml-1">/ month</span>
                </div>

                {/* Breakdown Progress Bar */}
                <div className="mb-6">
                  <div className="flex justify-between text-xs mb-2">
                    <span className="text-slate-300 flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-brand-orange inline-block" />
                      Principal: {principalRatio}%
                    </span>
                    <span className="text-slate-300 flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-slate-500 inline-block" />
                      Interest: {interestRatio}%
                    </span>
                  </div>
                  <div className="w-full h-3 rounded-full bg-slate-700 overflow-hidden flex">
                    <div
                      style={{ width: `${principalRatio}%` }}
                      className="bg-brand-orange transition-all duration-300"
                    />
                    <div
                      style={{ width: `${interestRatio}%` }}
                      className="bg-slate-500 transition-all duration-300"
                    />
                  </div>
                </div>

                {/* Details Breakdown */}
                <div className="space-y-3.5 border-t border-navy-800 pt-5 text-sm">
                  <div className="flex justify-between items-center">
                    <span className="text-slate-400">Principal Amount</span>
                    <span className="font-semibold text-white">₹{loanAmount.toLocaleString("en-IN")}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-400">Total Interest Payable</span>
                    <span className="font-semibold text-white">₹{totalInterest.toLocaleString("en-IN")}</span>
                  </div>
                  <div className="flex justify-between items-center border-t border-navy-800 pt-3 text-base">
                    <span className="text-slate-200 font-bold">Total Payment</span>
                    <span className="font-extrabold text-brand-orange">₹{totalPayment.toLocaleString("en-IN")}</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-8 space-y-3">
                <button
                  type="button"
                  onClick={() => openModal("Loan EMI Consultation")}
                  className="w-full py-3.5 px-6 rounded-xl font-bold bg-brand-orange text-white hover:bg-orange-600 transition-all shadow-lg hover:shadow-orange-500/20 text-center text-sm"
                  suppressHydrationWarning
                >
                  Consult an Advisor for This Loan
                </button>
                <p className="text-[11px] text-slate-400 text-center leading-relaxed">
                  *Figures shown are for illustrative planning purposes. Final EMI, rates, and charges are subject to lender policies and applicant eligibility.
                </p>
              </div>

            </div>

          </div>

          {/* Amortization Schedule Preview */}
          <div className="mt-12 border-t border-slate-200 pt-8">
            <h3 className="text-lg font-bold text-navy-900 mb-4">
              Estimated Yearly Repayment Preview (Initial {amortizationPreview.length} Years)
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm text-slate-600 border border-slate-200 rounded-xl overflow-hidden">
                <thead className="bg-slate-50 text-xs uppercase font-semibold text-navy-900">
                  <tr>
                    <th className="px-4 py-3">Year</th>
                    <th className="px-4 py-3">Principal Paid (₹)</th>
                    <th className="px-4 py-3">Interest Paid (₹)</th>
                    <th className="px-4 py-3">Total Annual Outflow (₹)</th>
                    <th className="px-4 py-3">Ending Balance (₹)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  {amortizationPreview.map((row) => (
                    <tr key={row.year} className="hover:bg-slate-50/50">
                      <td className="px-4 py-3 font-semibold text-navy-900">Year {row.year}</td>
                      <td className="px-4 py-3">₹{row.principalPaid.toLocaleString("en-IN")}</td>
                      <td className="px-4 py-3">₹{row.interestPaid.toLocaleString("en-IN")}</td>
                      <td className="px-4 py-3 font-medium text-navy-900">
                        ₹{(row.principalPaid + row.interestPaid).toLocaleString("en-IN")}
                      </td>
                      <td className="px-4 py-3">₹{row.endingBalance.toLocaleString("en-IN")}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

        </div>
      </section>

      {/* Educational & Advisory Guide */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
            <div className="w-10 h-10 rounded-xl bg-orange-50 text-brand-orange flex items-center justify-center font-bold mb-4">
              01
            </div>
            <h4 className="text-base font-bold text-navy-900 mb-2">How EMI is Calculated</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Equated Monthly Installment (EMI) consists of both principal and interest components. In the initial years, a higher proportion goes towards interest, gradually shifting toward principal repayment.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
            <div className="w-10 h-10 rounded-xl bg-orange-50 text-brand-orange flex items-center justify-center font-bold mb-4">
              02
            </div>
            <h4 className="text-base font-bold text-navy-900 mb-2">Impact of Loan Tenure</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              A longer tenure lowers your monthly payment obligation but increases the cumulative interest paid. A shorter tenure increases monthly outflow while significantly saving total interest.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
            <div className="w-10 h-10 rounded-xl bg-orange-50 text-brand-orange flex items-center justify-center font-bold mb-4">
              03
            </div>
            <h4 className="text-base font-bold text-navy-900 mb-2">Part-Prepayments & Savings</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Making periodic partial prepayments directly reduces the outstanding principal balance, thereby shortening your remaining tenure and lowering lifetime interest expenses.
            </p>
          </div>
        </div>

        {/* CTA Strip */}
        <div className="mt-12 bg-navy-900 text-white rounded-3xl p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-bold mb-2">Need Help Choosing the Right Structure?</h3>
            <p className="text-sm text-slate-300 max-w-xl">
              Connect with First Truth Finance Consultations in Rohtak. We help evaluate lender offerings, compare processing fees, and structure repayments to match your cash flows.
            </p>
          </div>
          <div className="flex gap-4 shrink-0">
            <button
              type="button"
              onClick={() => openModal("Loan Structure Consultation")}
              className="px-6 py-3 rounded-xl font-bold bg-brand-orange text-white hover:bg-orange-600 transition-all text-sm"
              suppressHydrationWarning
            >
              Request Consultation
            </button>
            <Link
              href="/services"
              className="px-6 py-3 rounded-xl font-semibold bg-white/10 text-white hover:bg-white/20 transition-all text-sm"
            >
              View Loan Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
