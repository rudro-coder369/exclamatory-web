import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Download } from "lucide-react";

export default function ProductsPage() {
  return (
    <div className="flex flex-col items-center animate-fade-in w-full">
      
      {/* Header - Kept minimal */}
      <div className="text-center max-w-2xl mb-12 mt-4">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-3">
          Ecosystem
        </h2>
        <p className="text-base text-zinc-400">
          Discover the tools engineered for your daily workflow.
        </p>
      </div>

      {/* Flagship Product: Qaave */}
      <section className="w-full max-w-5xl">
        <Card className="flex flex-col lg:flex-row items-center gap-8 md:gap-10 p-6 md:p-12 border-zinc-800/80 hover:border-zinc-700 transition-colors bg-gradient-to-br from-zinc-900/40 to-black relative overflow-hidden">
          
          {/* Background Glow Effect */}
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-white/5 blur-[100px] rounded-full pointer-events-none"></div>

          {/* Product Icon / Logo Area */}
          <div className="relative w-40 h-40 md:w-56 md:h-56 rounded-3xl overflow-hidden border border-zinc-800 shrink-0 bg-black flex items-center justify-center shadow-2xl">
            <span className="text-6xl font-bold text-white tracking-tighter">Q.</span>
          </div>
          
          {/* Product Info */}
          <div className="text-center lg:text-left flex-grow z-10 flex flex-col items-center lg:items-start">
            
            {/* Minimalist Badge (Removed extra icon, made it text-only) */}
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-zinc-800/30 border border-zinc-700/50 text-[10px] font-semibold tracking-widest text-zinc-400 mb-5 uppercase">
              Flagship Product (v1.0)
            </div>
            
            <h3 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Qaave</h3>
            
            <p className="text-zinc-400 leading-relaxed text-base md:text-lg mb-8 max-w-xl">
              Our revolutionary utility application designed to streamline your daily workflow. Built with cutting-edge architecture for maximum performance and bulletproof security. 
            </p>

            {/* Download Action: Removed w-full, changed size to default/md, made it inline */}
            <a href="/Qaave.apk" download className="inline-block">
              <Button variant="primary" className="gap-2 px-6 py-2 shadow-lg shadow-white/5 hover:shadow-white/10 transition-all rounded-full">
                <Download size={18} />
                <span className="font-semibold text-sm">Download Qaave</span>
              </Button>
            </a>
            
            <p className="mt-4 text-[11px] text-zinc-600 font-medium tracking-wide uppercase">Requires Android 8.0+</p>
          </div>

        </Card>
      </section>

    </div>
  );
}