import Link from "next/link";
import { Download } from "lucide-react";
import { Button } from "../ui/Button";

export function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-md border-b border-white/5 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        
        {/* Brand Title (Alphabet Style: Minimal, Bold, High Contrast) */}
        <Link 
          href="/" 
          className="text-2xl font-bold tracking-tighter text-white hover:opacity-80 transition-opacity"
        >
          Exclamatory.
        </Link>

        {/* Center Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
          <Link href="/products" className="hover:text-white transition-colors">
            Products
          </Link>
          <Link href="/leadership" className="hover:text-white transition-colors">
            Leadership
          </Link>
          <Link href="/terms" className="hover:text-white transition-colors">
            Terms
          </Link>
        </nav>

        {/* Call to Action: Core Button Component Usage */}
        <div className="flex items-center gap-4">
          <a href="/Qaave.apk" download>
            <Button variant="primary" size="sm" className="gap-2 font-semibold">
              <Download size={16} />
              <span>Get Qaave</span>
            </Button>
          </a>
        </div>
        
      </div>
    </header>
  );
}