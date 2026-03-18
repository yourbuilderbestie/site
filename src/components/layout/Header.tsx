import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import logo from "@/assets/logo-white.png";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/consulting", label: "Consulting" },
  { href: "/real-estate", label: "Real Estate" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-primary border-b border-primary">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-18 md:h-20 py-1">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img 
              src={logo} 
              alt="Your Builder Bestie" 
              className="h-14 md:h-16 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="text-sm font-bold uppercase tracking-wide text-white hover:text-white/80 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <a href="https://www.jennaslinks.com/call/" target="_blank" rel="noopener noreferrer">
              <Button className="bg-white text-primary hover:bg-white/90 shadow-pink font-semibold">Book a Call</Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={cn(
            "md:hidden overflow-hidden transition-all duration-300",
            mobileMenuOpen ? "max-h-96 pb-4" : "max-h-0"
          )}
        >
          <nav className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="py-3 px-4 text-sm font-bold uppercase tracking-wide text-white hover:text-white/80 hover:bg-white/10 rounded-lg transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-2 px-4">
              <a href="https://www.jennaslinks.com/call/" target="_blank" rel="noopener noreferrer">
                <Button className="w-full bg-white text-primary hover:bg-white/90 shadow-pink font-semibold">Book a Call</Button>
              </a>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
