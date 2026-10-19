"use client";

import React, { useState } from "react";
import { useModal } from "@/context/ModalContext";

interface DialogProps {
  closeModal: () => void;
  selectedService: string | null;
}

function ModalDialog({ closeModal, selectedService }: DialogProps) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    serviceType: selectedService || "Home Loan Consultation",
    notes: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setSubmitStatus(null);

    // Basic client-side phone validation
    const cleanedPhone = formData.phone.replace(/[^0-9+]/g, "");
    if (cleanedPhone.length < 10) {
      setSubmitStatus({
        type: "error",
        message: "Please enter a valid 10-digit phone number.",
      });
      setSubmitting(false);
      return;
    }

    try {
      const res = await fetch("/api/consultations", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || "Failed to submit inquiry");
      }
      setSubmitStatus({
        type: "success",
        message: data.message || "Consultation request received successfully!",
      });
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        serviceType: selectedService || "Home Loan Consultation",
        notes: "",
      });
      setTimeout(() => {
        closeModal();
        setSubmitStatus(null);
      }, 2400);
    } catch (err: unknown) {
      setSubmitStatus({
        type: "error",
        message: err instanceof Error ? err.message : "Submission failed",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="consultation-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
    >
      <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden text-[#0B1B3D]">
        {/* Header Bar */}
        <div className="bg-[#0B1B3D] text-white px-6 py-5 flex items-center justify-between">
          <div>
            <span className="text-[10px] font-bold text-[#F97316] uppercase tracking-wider block">
              First Truth Finance Desk
            </span>
            <h3 id="consultation-modal-title" className="text-lg font-bold">
              Book Financial Consultation
            </h3>
          </div>
          <button
            type="button"
            onClick={closeModal}
            aria-label="Close dialog"
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white/80 hover:text-white transition-colors cursor-pointer"
            suppressHydrationWarning
          >
            ✕
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-4">
          {submitStatus && (
            <div
              className={`p-3.5 rounded-xl text-xs sm:text-sm font-medium ${
                submitStatus.type === "success"
                  ? "bg-emerald-50 text-emerald-800 border border-emerald-200"
                  : "bg-rose-50 text-rose-800 border border-rose-200"
              }`}
            >
              {submitStatus.message}
            </div>
          )}

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Full Name <span className="text-[#F97316]">*</span>
            </label>
            <input
              type="text"
              required
              value={formData.fullName}
              onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
              placeholder="e.g. Rahul Sharma"
              className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#F97316]/50 focus:border-[#F97316]"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Mobile Number <span className="text-[#F97316]">*</span>
              </label>
              <input
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="10-digit mobile"
                className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#F97316]/50 focus:border-[#F97316]"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Email Address <span className="text-[#F97316]">*</span>
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="name@example.com"
                className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#F97316]/50 focus:border-[#F97316]"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Service Requirement
            </label>
            <select
              value={formData.serviceType}
              onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
              className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#F97316]/50 focus:border-[#F97316]"
            >
              <option value="Home Loan Consultation">Home Loan Consultation</option>
              <option value="Business Loan Consultation">Business Loan Consultation</option>
              <option value="Vehicle Loan Consultation">Vehicle Loan Consultation</option>
              <option value="Loan Against Property">Loan Against Property (LAP)</option>
              <option value="Personal Loan Consultation">Personal Loan Consultation</option>
              <option value="Credit Profile Guidance">Credit Profile Guidance</option>
              <option value="DSA Channel Partner Inquiry">DSA Channel Partner Inquiry</option>
              <option value="Loan EMI Consultation">Loan EMI Consultation</option>
              <option value="General Financial Advisory">General Financial Advisory</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Notes or Queries (Optional)
            </label>
            <textarea
              rows={3}
              value={formData.notes}
              onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
              placeholder="Provide any context regarding requirement amount, city, or existing loans..."
              className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#F97316]/50 focus:border-[#F97316]"
            />
          </div>

          <div className="pt-2 flex items-center justify-end gap-3">
            <button
              type="button"
              onClick={closeModal}
              className="px-5 py-2.5 rounded-full border border-slate-200 text-xs sm:text-sm font-semibold text-slate-600 hover:bg-slate-50 cursor-pointer transition-all active:scale-95"
              suppressHydrationWarning
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={submitting}
              className="btn-sheen px-6 py-2.5 rounded-full bg-[#F97316] hover:bg-[#EA580C] text-white text-xs sm:text-sm font-semibold shadow-md shadow-orange-500/25 disabled:opacity-50 cursor-pointer flex items-center gap-2 active:scale-95 transition-all"
              suppressHydrationWarning
            >
              {submitting ? "Booking..." : "Confirm Booking →"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default function ConsultationModal() {
  const { isOpen, closeModal, selectedService } = useModal();

  if (!isOpen) return null;

  return (
    <ModalDialog
      key={selectedService || "default-modal"}
      closeModal={closeModal}
      selectedService={selectedService}
    />
  );
}
