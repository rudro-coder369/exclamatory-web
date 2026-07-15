"use client";

import { useState } from "react";
import Link from "next/link";
import { Download, Menu, X } from "lucide-react";
import { Button } from "../ui/Button";

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/5 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        
        {/* Brand */}
        <Link href="/" className="text-2xl font-bold tracking-tighter text-white hover:opacity-80 transition-opacity">
          Exclamatory.
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
          <Link href="/products" className="hover:text-white transition-colors">Products</Link>
          <Link href="/leadership" className="hover:text-white transition-colors">Leadership</Link>
          <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
        </nav>

        {/* Desktop CTA & Mobile Toggle Button */}
        <div className="flex items-center gap-4">
          
          {/* New Minimalist Desktop Download Section */}
          <div className="hidden md:flex items-center gap-4 border-l border-white/10 pl-6">
            <span className="text-sm font-semibold text-zinc-300">Qaave</span>
            <a href="/Qaave.apk" download>
              <Button variant="primary" size="sm" className="gap-2 font-semibold h-8 px-4 text-xs rounded-full">
                <Download size={14} />
                <span>Download</span>
              </Button>
            </a>
          </div>
          
          {/* Mobile Menu Icon (3 lines/cross) */}
          <button 
            className="md:hidden text-zinc-400 hover:text-white p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-zinc-950 border-b border-white/5 px-6 py-6 flex flex-col gap-6 absolute w-full left-0 top-16 shadow-2xl">
          <Link href="/products" onClick={() => setIsMobileMenuOpen(false)} className="text-zinc-300 hover:text-white font-medium text-lg">Products</Link>
          <Link href="/leadership" onClick={() => setIsMobileMenuOpen(false)} className="text-zinc-300 hover:text-white font-medium text-lg">Leadership</Link>
          <Link href="/terms" onClick={() => setIsMobileMenuOpen(false)} className="text-zinc-300 hover:text-white font-medium text-lg">Terms</Link>
          
          {/* Minimalist Mobile Download Option */}
          <div className="pt-4 border-t border-white/10 mt-2">
            <a 
              href="/Qaave.apk" 
              download 
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center gap-3 text-zinc-400 hover:text-white font-medium text-lg transition-colors"
            >
              <Download size={20} />
              <span>Download Qaave</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}