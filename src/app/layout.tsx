import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Caveat } from "next/font/google";
import "./globals.css";
import { ModalProvider } from "@/context/ModalContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ConsultationModal from "@/components/ConsultationModal";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  title: "First Truth Finance Consultations | Loan Syndication & Financial Consulting",
  description:
    "First Truth Finance Consultations (FTFC) based in Rohtak, Haryana, founded and led by Shubham Jain. Transparent loan syndication and financial consultation for Home Loans, Business Loans, LAP, Vehicle Loans, and Credit Profile guidance.",
  keywords: [
    "First Truth Finance Consultations",
    "Shubham Jain Rohtak",
    "Home Loan Consultation Rohtak",
    "Business Loan Syndication",
    "Loan Against Property LAP",
    "Vehicle Loan Consultation Haryana",
    "Credit Profile Guidance",
    "DSA Partner Financial Services",
  ],
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/apple-icon.png", sizes: "192x192", type: "image/png" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${jakarta.variable} ${caveat.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-white text-[#0B1B3D] font-sans selection:bg-[#F97316] selection:text-white">
        <ModalProvider>
          <Navbar />
          <main className="flex-1 flex flex-col">{children}</main>
          <Footer />
          <ConsultationModal />
        </ModalProvider>
      </body>
    </html>
  );
}
