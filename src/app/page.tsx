import Link from "next/link";
import { Globe, Target, Sparkles, ChevronRight } from "lucide-react";

// Direct imports from your existing pages! (DRY Principle)
import LeadershipPage from "@/app/leadership/page";
import ProductsPage from "@/app/products/page";

export default function Home() {
  return (
    <div className="flex flex-col items-center w-full">
      
      {/* SECTION 1: Elevated Hero Section (Mature & Premium) */}
      <section className="flex flex-col items-center text-center max-w-5xl pt-20 pb-32 w-full animate-fade-in">
        
        {/* Sleek Top Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold tracking-wide text-zinc-300 mb-10 backdrop-blur-md uppercase">
          <Globe size={14} className="text-zinc-400" />
          <span>Building The Future Ecosystem</span>
        </div>
        
        {/* Ultra-Premium Headline with deep gradient */}
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-extrabold tracking-tighter mb-8 bg-gradient-to-b from-white via-zinc-200 to-zinc-600 text-transparent bg-clip-text">
          Exclamatory.
        </h1>
        
        {/* Mature, highly legible paragraph */}
        <p className="text-xl md:text-2xl text-zinc-400 leading-relaxed font-light mb-12 max-w-3xl text-balance">
          Engineering world-class software solutions from the ground up. We build digital ecosystems, drop by drop, seamlessly integrating into and elevating everyday life.
        </p>

        {/* Sophisticated Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-4xl mt-4">
          
          <div className="group text-left p-8 rounded-3xl bg-zinc-900/40 border border-white/5 hover:bg-zinc-900/80 hover:border-white/10 transition-all duration-500">
            <div className="w-12 h-12 rounded-2xl bg-black border border-white/10 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
              <Target className="text-white w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold tracking-tight mb-3">Global Scale</h3>
            <p className="text-zinc-500 text-base leading-relaxed">
              Architecting resilient platforms designed to scale dynamically and compete alongside the world's most dominant tech entities.
            </p>
          </div>

          <div className="group text-left p-8 rounded-3xl bg-zinc-900/40 border border-white/5 hover:bg-zinc-900/80 hover:border-white/10 transition-all duration-500">
            <div className="w-12 h-12 rounded-2xl bg-black border border-white/10 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
              <Sparkles className="text-white w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold tracking-tight mb-3">Elegant Utility</h3>
            <p className="text-zinc-500 text-base leading-relaxed">
              Forging tools that transcend pure functionality, delivering a frictionless, premium user experience at every interaction.
            </p>
          </div>

        </div>
      </section>

      {/* Elegant Divider */}
      <div className="w-full h-px bg-gradient-to-r from-black via-zinc-800 to-black mb-16"></div>

      {/* SECTION 2: Loaded directly from Products Route */}
      <div className="w-full relative">
        <ProductsPage />
      </div>

      {/* Elegant Divider */}
      <div className="w-full h-px bg-gradient-to-r from-black via-zinc-800 to-black my-16"></div>

      {/* SECTION 3: Loaded directly from Leadership Route */}
      <div className="w-full relative pb-20">
        <LeadershipPage />
      </div>

    </div>
  );
}