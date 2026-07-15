import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

// Tech standard premium font
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Exclamatory | Building the Future",
  description: "A world-class software ecosystem by Sourav Ahmed.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans bg-black text-white antialiased selection:bg-white selection:text-black min-h-screen flex flex-col`}>
        
        {/* Premium Glass Navbar (Fixed at top) */}
        <Navbar />

        {/* Main Content Area (Dynamic Pages will render here) */}
        {/* pt-24 deya hoyeche jeno fixed navbar er niche content na dhuke jay */}
        <main className="flex-grow pt-24 pb-12 w-full max-w-7xl mx-auto px-6">
          {children}
        </main>

        {/* Global Footer (Sticks to bottom) */}
        <Footer />
        
      </body>
    </html>
  );
}