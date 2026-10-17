"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useModal } from "@/context/ModalContext";

export default function Navbar() {
  const pathname = usePathname();
  const { openModal } = useModal();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const [prevPathname, setPrevPathname] = useState(pathname);
  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
  }

  // Handle outside click to close dropdown
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setServicesDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const isActive = (path: string) => {
    if (path === "/" && pathname === "/") return true;
    if (path !== "/" && pathname.startsWith(path)) return true;
    return false;
  };

  const serviceLinks = [
    { href: "/services", label: "All Loan Services", desc: "Overview & Comparison" },
    { href: "/services/home-loan", label: "Home Loan Consultation", desc: "Residential Property Purchase" },
    { href: "/services/business-loan", label: "Business Loan Consultation", desc: "Working Capital & Expansion" },
    { href: "/services/vehicle-loan", label: "Vehicle Loan Consultation", desc: "Private & Commercial Auto" },
    { href: "/services/loan-against-property", label: "Loan Against Property (LAP)", desc: "Collateralized Financing" },
    { href: "/services/personal-loan", label: "Personal Loan Consultation", desc: "Flexible Unsecured Options" },
  ];

  const [isScrolled, setIsScrolled] = useState(false);

  // Track scroll position to merge navbar with hero when at the top
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        isScrolled || mobileMenuOpen
          ? "bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs"
          : "bg-transparent border-b border-transparent shadow-none"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group focus:outline-none focus:ring-2 focus:ring-[#F97316] rounded-xl p-1">
            <div className="relative h-12 w-auto flex items-center">
              <Image
                src="/logo.png"
                alt="FIRST TRUTH FINANCE CONSULTATIONS"
                width={230}
                height={62}
                priority
                className="h-10 sm:h-12 w-auto object-contain transition-transform group-hover:scale-[1.01]"
                style={{ width: "auto" }}
              />
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-7" aria-label="Main Navigation">
            <Link
              href="/"
              className={`text-sm tracking-wide transition-colors py-1 relative nav-link-hover ${
                isActive("/") && pathname === "/"
                  ? "text-[#0B1B3D] font-bold"
                  : "text-[#475569] hover:text-[#0B1B3D] font-medium"
              }`}
            >
              Home
              {isActive("/") && pathname === "/" && (
                <span className="absolute -bottom-1 left-0 right-0 h-[2.5px] bg-[#F97316] rounded-full shadow-[0_1px_6px_rgba(249,115,22,0.5)]" />
              )}
            </Link>

            <Link
              href="/about"
              className={`text-sm tracking-wide transition-colors py-1 relative nav-link-hover ${
                isActive("/about")
                  ? "text-[#0B1B3D] font-bold"
                  : "text-[#475569] hover:text-[#0B1B3D] font-medium"
              }`}
            >
              About FTFC
              {isActive("/about") && (
                <span className="absolute -bottom-1 left-0 right-0 h-[2.5px] bg-[#F97316] rounded-full shadow-[0_1px_6px_rgba(249,115,22,0.5)]" />
              )}
            </Link>

            {/* Services Dropdown */}
            <div
              ref={dropdownRef}
              className="relative"
              onMouseEnter={() => setServicesDropdownOpen(true)}
              onMouseLeave={() => setServicesDropdownOpen(false)}
            >
              <button
                onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                className={`text-sm tracking-wide transition-colors py-1 inline-flex items-center gap-1 cursor-pointer nav-link-hover ${
                  isActive("/services")
                    ? "text-[#0B1B3D] font-bold"
                    : "text-[#475569] hover:text-[#0B1B3D] font-medium"
                }`}
                aria-expanded={servicesDropdownOpen}
                aria-haspopup="true"
              >
                <span>Loan Services</span>
                <svg
                  className={`w-3.5 h-3.5 transition-transform duration-300 ${
                    servicesDropdownOpen ? "rotate-180 text-[#F97316]" : "text-slate-400"
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
                {isActive("/services") && (
                  <span className="absolute -bottom-1 left-0 right-0 h-[2.5px] bg-[#F97316] rounded-full shadow-[0_1px_6px_rgba(249,115,22,0.5)]" />
                )}
              </button>

              {/* Dropdown Menu */}
              {servicesDropdownOpen && (
                <div className="absolute top-full -left-4 w-72 pt-3 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                  <div className="bg-white/95 backdrop-blur-md rounded-2xl border border-slate-200/90 shadow-2xl p-2.5 space-y-1">
                    {serviceLinks.map((service) => (
                      <Link
                        key={service.href}
                        href={service.href}
                        className={`block p-2.5 rounded-xl transition-all duration-200 ${
                          pathname === service.href
                            ? "bg-orange-50/90 text-[#F97316] font-semibold"
                            : "hover:bg-slate-50 text-slate-700 hover:text-[#0B1B3D] hover:translate-x-1"
                        }`}
                      >
                        <div className="font-semibold text-xs leading-snug">{service.label}</div>
                        <div className="text-[11px] text-slate-400 mt-0.5">{service.desc}</div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/emi-calculator"
              className={`text-sm tracking-wide transition-colors py-1 relative nav-link-hover ${
                isActive("/emi-calculator")
                  ? "text-[#0B1B3D] font-bold"
                  : "text-[#475569] hover:text-[#0B1B3D] font-medium"
              }`}
            >
              EMI Calculator
              {isActive("/emi-calculator") && (
                <span className="absolute -bottom-1 left-0 right-0 h-[2.5px] bg-[#F97316] rounded-full shadow-[0_1px_6px_rgba(249,115,22,0.5)]" />
              )}
            </Link>

            <Link
              href="/credit-profile"
              className={`text-sm tracking-wide transition-colors py-1 relative nav-link-hover ${
                isActive("/credit-profile")
                  ? "text-[#0B1B3D] font-bold"
                  : "text-[#475569] hover:text-[#0B1B3D] font-medium"
              }`}
            >
              Credit Guidance
              {isActive("/credit-profile") && (
                <span className="absolute -bottom-1 left-0 right-0 h-[2.5px] bg-[#F97316] rounded-full shadow-[0_1px_6px_rgba(249,115,22,0.5)]" />
              )}
            </Link>

            <Link
              href="/partners"
              className={`text-sm tracking-wide transition-colors py-1 relative nav-link-hover ${
                isActive("/partners")
                  ? "text-[#0B1B3D] font-bold"
                  : "text-[#475569] hover:text-[#0B1B3D] font-medium"
              }`}
            >
              FI Partner
              {isActive("/partners") && (
                <span className="absolute -bottom-1 left-0 right-0 h-[2.5px] bg-[#F97316] rounded-full shadow-[0_1px_6px_rgba(249,115,22,0.5)]" />
              )}
            </Link>

            <Link
              href="/contact"
              className={`text-sm tracking-wide transition-colors py-1 relative nav-link-hover ${
                isActive("/contact")
                  ? "text-[#0B1B3D] font-bold"
                  : "text-[#475569] hover:text-[#0B1B3D] font-medium"
              }`}
            >
              Contact
              {isActive("/contact") && (
                <span className="absolute -bottom-1 left-0 right-0 h-[2.5px] bg-[#F97316] rounded-full shadow-[0_1px_6px_rgba(249,115,22,0.5)]" />
              )}
            </Link>
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <Link
              href="/services"
              className="px-4 py-2 rounded-full border border-slate-300 text-xs sm:text-sm font-semibold text-[#0B1B3D] hover:bg-slate-50 transition-all duration-200 active:scale-95 cursor-pointer hover:border-slate-400"
            >
              Explore Services
            </Link>
            <button
              onClick={() => openModal()}
              className="btn-sheen px-5 py-2.5 rounded-full bg-gradient-to-r from-[#F97316] to-[#FB923C] hover:from-[#EA580C] hover:to-[#F97316] text-white text-xs sm:text-sm font-semibold shadow-md shadow-orange-500/25 hover:shadow-orange-500/35 transition-all duration-300 active:scale-95 flex items-center gap-1.5 cursor-pointer group"
            >
              <span>Talk to Our Team</span>
              <svg
                className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </button>
          </div>

          {/* Mobile menu toggle */}
          <div className="flex xl:hidden items-center gap-2">
            <button
              onClick={() => openModal()}
              className="px-3.5 py-1.5 rounded-full bg-[#F97316] text-white text-xs font-semibold"
            >
              Consultation
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-700 hover:bg-slate-100 cursor-pointer"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Drawer */}
        {mobileMenuOpen && (
          <div className="xl:hidden pb-6 pt-2 border-t border-slate-100 flex flex-col gap-1.5 animate-in slide-in-from-top-2 duration-200">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className={`px-3 py-2 rounded-xl text-sm font-semibold ${
                pathname === "/" ? "bg-orange-50 text-[#F97316]" : "text-slate-700 hover:bg-slate-50"
              }`}
            >
              Home
            </Link>

            <Link
              href="/about"
              onClick={() => setMobileMenuOpen(false)}
              className={`px-3 py-2 rounded-xl text-sm font-semibold ${
                pathname === "/about" ? "bg-orange-50 text-[#F97316]" : "text-slate-700 hover:bg-slate-50"
              }`}
            >
              About FTFC
            </Link>

            {/* Mobile Services Accordion */}
            <div className="px-3 py-1">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">
                Loan Services
              </div>
              <div className="pl-2 space-y-1 border-l-2 border-orange-200">
                {serviceLinks.map((service) => (
                  <Link
                    key={service.href}
                    href={service.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block py-1.5 px-2 rounded-lg text-xs font-medium ${
                      pathname === service.href
                        ? "text-[#F97316] font-bold"
                        : "text-slate-600 hover:text-[#0B1B3D]"
                    }`}
                  >
                    {service.label}
                  </Link>
                ))}
              </div>
            </div>

            <Link
              href="/emi-calculator"
              onClick={() => setMobileMenuOpen(false)}
              className={`px-3 py-2 rounded-xl text-sm font-semibold ${
                pathname === "/emi-calculator" ? "bg-orange-50 text-[#F97316]" : "text-slate-700 hover:bg-slate-50"
              }`}
            >
              Loan EMI Calculator
            </Link>

            <Link
              href="/credit-profile"
              onClick={() => setMobileMenuOpen(false)}
              className={`px-3 py-2 rounded-xl text-sm font-semibold ${
                pathname === "/credit-profile" ? "bg-orange-50 text-[#F97316]" : "text-slate-700 hover:bg-slate-50"
              }`}
            >
              Credit Guidance
            </Link>

            <Link
              href="/partners"
              onClick={() => setMobileMenuOpen(false)}
              className={`px-3 py-2 rounded-xl text-sm font-semibold ${
                pathname === "/partners" ? "bg-orange-50 text-[#F97316]" : "text-slate-700 hover:bg-slate-50"
              }`}
            >
              Become an FI Partner
            </Link>

            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className={`px-3 py-2 rounded-xl text-sm font-semibold ${
                pathname === "/contact" ? "bg-orange-50 text-[#F97316]" : "text-slate-700 hover:bg-slate-50"
              }`}
            >
              Contact Us
            </Link>

            <div className="pt-3 border-t border-slate-100 flex gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  openModal();
                }}
                className="flex-1 py-2.5 rounded-full bg-[#F97316] text-white text-xs font-semibold shadow text-center cursor-pointer"
              >
                Talk to Our Team →
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
