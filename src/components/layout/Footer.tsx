import { Link } from "react-router-dom";
import { Heart, Instagram, Youtube, Mail, Phone } from "lucide-react";
import logo from "@/assets/logo-pink.png";

const footerLinks = {
  explore: [
    { href: "/about", label: "About Jenna" },
    { href: "/consulting", label: "Consulting" },
    { href: "/real-estate", label: "Real Estate" },
  ],
  support: [
    { href: "/contact", label: "Contact" },
    { href: "/faq", label: "FAQ" },
    { href: "/privacy", label: "Privacy Policy" },
    { href: "/terms", label: "Terms of Service" },
  ],
};

const socialLinks = [
  { href: "https://www.instagram.com/yourbuilderbestie", icon: Instagram, label: "Instagram" },
  { href: "https://www.youtube.com/@yourbuilderbestie", icon: Youtube, label: "YouTube" },
  { href: "mailto:jenna@yourbuilderbestie.com", icon: Mail, label: "Email" },
  { href: "tel:+18053145798", icon: Phone, label: "Phone" },
];

export function Footer() {
  return (
    <footer className="bg-pink-light border-t border-border">
      <div className="container mx-auto px-4 py-10">
        {/* Centered Logo */}
        <div className="flex justify-center mb-8">
          <Link to="/">
            <img 
              src={logo} 
              alt="Your Builder Bestie" 
              className="h-12 md:h-14 w-auto"
            />
          </Link>
        </div>

        {/* 3-Column Links Grid */}
        <div className="grid grid-cols-3 gap-6 max-w-2xl mx-auto text-center mb-8">
          {/* Explore Links */}
          <div>
            <h3 className="font-bold mb-3">Explore</h3>
            <ul className="space-y-2">
              {footerLinks.explore.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="font-bold mb-3">Support</h3>
            <ul className="space-y-2">
              {footerLinks.support.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="font-bold mb-3">Connect</h3>
            <div className="flex justify-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith("mailto:") ? undefined : "_blank"}
                  rel={social.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                  className="p-2 rounded-full bg-background hover:bg-primary hover:text-primary-foreground transition-colors shadow-sm"
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-border flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Bestie Brands LLC. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Made with <Heart size={12} className="text-accent fill-accent" /> in Texas
          </p>
        </div>
      </div>
    </footer>
  );
}
