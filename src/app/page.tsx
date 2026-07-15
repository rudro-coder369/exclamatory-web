import Link from "next/link";
import { Network, Fingerprint } from "lucide-react";

// Direct imports (DRY Principle)
import LeadershipPage from "@/app/leadership/page";
import ProductsPage from "@/app/products/page";

export default function Home() {
  return (
    <div className="flex flex-col items-center w-full">
      
      {/* SECTION 1: Ultra-Minimal & Premium Hero Section */}
      <section className="flex flex-col items-center text-center max-w-4xl pt-12 pb-16 w-full animate-fade-in">
        
        {/* Redesigned Sleek Top Badge (Mature Status Indicator) */}
        <div className="inline-flex items-center gap-2.5 px-3 py-1 rounded-full border border-zinc-800/80 bg-zinc-900/30 text-[10px] font-semibold tracking-[0.2em] text-zinc-400 mb-8 uppercase">
          <span className="w-1.5 h-1.5 rounded-full bg-zinc-400 animate-pulse"></span>
          The Exclamatory Ecosystem
        </div>
        
        {/* Condensed Premium Headline */}
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter mb-6 bg-gradient-to-b from-white to-zinc-500 text-transparent bg-clip-text">
          Exclamatory.
        </h1>
        
        {/* Tighter, crisp paragraph */}
        <p className="text-lg md:text-xl text-zinc-400 leading-relaxed font-light mb-10 max-w-2xl text-balance">
          Engineering world-class software solutions from the ground up. We build digital ecosystems, drop by drop, seamlessly integrating into everyday life.
        </p>

        {/* Minimalist Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-3xl">
          
          <div className="group text-left p-6 rounded-2xl bg-zinc-900/20 border border-white/5 hover:bg-zinc-900/50 hover:border-white/10 transition-colors duration-300">
            <Network className="text-zinc-500 w-6 h-6 mb-4 group-hover:text-white transition-colors" />
            <h3 className="text-lg font-semibold tracking-tight mb-2">Global Scale</h3>
            <p className="text-zinc-500 text-sm leading-relaxed">
              Architecting resilient platforms designed to scale dynamically and compete alongside dominant tech entities.
            </p>
          </div>

          <div className="group text-left p-6 rounded-2xl bg-zinc-900/20 border border-white/5 hover:bg-zinc-900/50 hover:border-white/10 transition-colors duration-300">
            <Fingerprint className="text-zinc-500 w-6 h-6 mb-4 group-hover:text-white transition-colors" />
            <h3 className="text-lg font-semibold tracking-tight mb-2">Elegant Utility</h3>
            <p className="text-zinc-500 text-sm leading-relaxed">
              Forging tools that transcend pure functionality, delivering a frictionless user experience at every interaction.
            </p>
          </div>

        </div>
      </section>

      {/* Elegant Divider (Tighter Margin) */}
      <div className="w-full h-px bg-gradient-to-r from-black via-zinc-800 to-black my-4"></div>

      {/* SECTION 2: Leadership (Now comes first) */}
      <div className="w-full relative">
        <LeadershipPage />
      </div>

      {/* Elegant Divider */}
      <div className="w-full h-px bg-gradient-to-r from-black via-zinc-800 to-black my-4"></div>

      {/* SECTION 3: Ecosystem / Products (Now comes after leadership) */}
      <div className="w-full relative pb-12">
        <ProductsPage />
      </div>

    </div>
  );
}