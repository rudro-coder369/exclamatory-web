import Image from "next/image";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Download, Zap, Shield, Sparkles } from "lucide-react";

export default function ProductsPage() {
  return (
    <div className="flex flex-col items-center animate-fade-in w-full">
      
      {/* Header */}
      <div className="text-center max-w-2xl mb-16 mt-8">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4">
          Ecosystem
        </h1>
        <p className="text-lg text-zinc-400">
          Discover the tools we are building to solve everyday problems.
        </p>
      </div>

      {/* Flagship Product: Qaave */}
      <section className="w-full max-w-5xl">
        <Card className="flex flex-col lg:flex-row items-center gap-10 p-8 md:p-12 border-zinc-800 hover:border-zinc-700 transition-colors bg-gradient-to-br from-zinc-900/80 to-black relative overflow-hidden">
          
          {/* Background Glow Effect */}
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-white/5 blur-[100px] rounded-full pointer-events-none"></div>

          {/* Product Icon / Logo Area */}
          <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-3xl overflow-hidden border border-zinc-800 shrink-0 bg-black flex items-center justify-center shadow-2xl">
            {/* Jodi Qaave er kono logo thake, tahole nicher Image ta use korben */}
            {/* <Image src="/qaave-logo.png" alt="Qaave Logo" fill className="object-cover" /> */}
            <span className="text-6xl font-bold text-white tracking-tighter">Q.</span>
          </div>
          
          {/* Product Info */}
          <div className="text-center lg:text-left flex-grow z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-800/50 border border-zinc-700/50 text-xs font-medium text-zinc-300 mb-6">
              <Sparkles size={14} className="text-white" />
              <span>Flagship Product (v1.0)</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Qaave</h2>
            
            <p className="text-zinc-400 leading-relaxed text-lg mb-8 max-w-2xl">
              Qaave is our revolutionary utility application designed to streamline your daily workflow. Built with cutting-edge architecture, it ensures maximum performance, bulletproof security, and a seamless user experience. 
            </p>

            {/* Feature Highlights */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-6 mb-10">
              <div className="flex items-center gap-2 text-sm font-medium text-zinc-300">
                <Zap size={18} className="text-white" />
                <span>Lightning Fast</span>
              </div>
              <div className="flex items-center gap-2 text-sm font-medium text-zinc-300">
                <Shield size={18} className="text-white" />
                <span>Secure Core</span>
              </div>
            </div>

            {/* Download Action */}
            <a href="/Qaave.apk" download>
              <Button variant="primary" size="lg" className="gap-3 w-full sm:w-auto font-semibold shadow-lg shadow-white/10 hover:shadow-white/20 transition-all">
                <Download size={20} />
                <span>Download Qaave APK</span>
              </Button>
            </a>
            <p className="mt-4 text-xs text-zinc-500 font-medium">Requires Android 8.0 or later.</p>
          </div>

        </Card>
      </section>

    </div>
  );
}