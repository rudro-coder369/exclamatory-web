import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-black mt-auto">
      <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center gap-4">
        
        <div className="text-zinc-500 text-sm">
          © {currentYear} Exclamatory. All rights reserved.
        </div>

        <nav className="flex items-center gap-6 text-sm text-zinc-500 font-medium">
          <Link href="/privacy-policy" className="hover:text-white transition-colors">
            Privacy Policy
          </Link>
          <Link href="/terms" className="hover:text-white transition-colors">
            Terms of Service
          </Link>
        </nav>
        
      </div>
    </footer>
  );
}