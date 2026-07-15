import Image from "next/image";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Download, Zap, Shield, Sparkles, Target, Globe } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col items-center animate-fade-in w-full gap-24">
      
      {/* SECTION 1: Mission & Goals (Hero) */}
      <section className="flex flex-col items-center text-center max-w-4xl pt-12">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-sm font-medium text-zinc-300 mb-8">
          <Globe size={16} className="text-white" />
          <span>Building the future ecosystem</span>
        </div>
        
        <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-8 bg-gradient-to-br from-white to-zinc-500 text-transparent bg-clip-text">
          Exclamatory.
        </h1>
        
        <p className="text-xl md:text-2xl text-zinc-400 leading-relaxed font-light mb-10 max-w-3xl text-balance">
          Our mission is to engineer world-class software solutions from the ground up. We believe in building an ecosystem, drop by drop, that seamlessly integrates into and elevates everyday life.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full mt-8">
          <Card className="text-left p-6 flex flex-col gap-4">
            <Target className="text-white w-8 h-8" />
            <h3 className="text-xl font-bold">Global Scale</h3>
            <p className="text-zinc-400 text-sm">Architecting platforms designed to scale and compete with the world's most dominant tech entities.</p>
          </Card>
          <Card className="text-left p-6 flex flex-col gap-4">
            <Sparkles className="text-white w-8 h-8" />
            <h3 className="text-xl font-bold">Elegant Utility</h3>
            <p className="text-zinc-400 text-sm">Creating tools that are not just functional, but deliver a premium, frictionless user experience.</p>
          </Card>
        </div>
      </section>

      {/* Divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent"></div>

      {/* SECTION 2: Leadership */}
      <section className="w-full max-w-5xl flex flex-col items-center">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">Leadership</h2>
          <p className="text-zinc-400">The vision driving the Exclamatory ecosystem.</p>
        </div>
        
        <Card className="flex flex-col md:flex-row items-center gap-10 p-8 md:p-12 w-full bg-zinc-900/30">
          <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-zinc-800 shrink-0 bg-black flex items-center justify-center">
            {/* Apnar chobi public folder e thakle Image tag use hobe, noyto 'SA' dekhabe */}
            <Image src="/sourav.jpg" alt="Sourav Ahmed" fill className="object-cover" />
            <span className="text-4xl font-bold text-zinc-700 absolute -z-10">SA</span>
          </div>
          
          <div className="text-center md:text-left flex-grow">
            <h3 className="text-3xl font-bold tracking-tight mb-2">Sourav Ahmed</h3>
            <p className="text-lg text-zinc-400 font-medium mb-4">Founder & CEO</p>
            <p className="text-zinc-300 leading-relaxed text-base max-w-2xl">
              Driving the strategic direction and technical architecture of Exclamatory. Committed to a multi-year roadmap focused on sophisticated problem-solving, advanced competitive algorithms, and pushing the boundaries of what local innovation can achieve on a global stage.
            </p>
          </div>
        </Card>
      </section>

      {/* Divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent"></div>

      {/* SECTION 3: Flagship Product (Qaave) */}
      <section className="w-full max-w-5xl mb-12">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">Our Ecosystem</h2>
          <p className="text-zinc-400">Experience the first drop in our ocean.</p>
        </div>

        <Card className="flex flex-col lg:flex-row items-center gap-10 p-8 md:p-12 border-zinc-700 bg-gradient-to-br from-zinc-900 to-black relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 blur-[100px] rounded-full pointer-events-none"></div>

          <div className="relative w-48 h-48 rounded-3xl overflow-hidden border border-zinc-700 shrink-0 bg-black flex items-center justify-center shadow-2xl">
            <span className="text-6xl font-bold text-white tracking-tighter">Q.</span>
          </div>
          
          <div className="text-center lg:text-left flex-grow z-10">
            <h3 className="text-4xl font-bold tracking-tight mb-4">Qaave</h3>
            <p className="text-zinc-400 leading-relaxed text-lg mb-8 max-w-xl">
              Our flagship utility application designed to streamline workflows with maximum performance and bulletproof security.
            </p>

            <div className="flex flex-wrap justify-center lg:justify-start gap-6 mb-8">
              <div className="flex items-center gap-2 text-sm font-medium text-zinc-300">
                <Zap size={18} className="text-white" />
                <span>Lightning Fast</span>
              </div>
              <div className="flex items-center gap-2 text-sm font-medium text-zinc-300">
                <Shield size={18} className="text-white" />
                <span>Secure Core</span>
              </div>
            </div>

            <a href="/Qaave.apk" download>
              <Button variant="primary" size="lg" className="gap-3 w-full sm:w-auto font-semibold">
                <Download size={20} />
                <span>Download Qaave APK</span>
              </Button>
            </a>
          </div>
        </Card>
      </section>

    </div>
  );
}