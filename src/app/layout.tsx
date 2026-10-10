import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Caveat } from "next/font/google";
import "./globals.css";

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
  title: "First Truth - Financial Clarity. Smarter Decisions. Stronger Future.",
  description:
    "Expert financial consultation for your investment planning, loans, insurance and wealth guidance. We help you plan today for a more secure tomorrow.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${jakarta.variable} ${caveat.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-white text-[#0B1B3D] font-sans">
        {children}
      </body>
    </html>
  );
}
