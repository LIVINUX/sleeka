import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Our Work', href: '#work' },
  { label: 'Our Talent', href: '#talent' },
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
];

interface NavbarProps {
  /** When true the navbar is always solid (dark bg), ignoring scroll state */
  forceColored?: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({ forceColored = false }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isColored = forceColored || isScrolled;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isColored ? 'bg-geko-dark/95 backdrop-blur-md py-4 shadow-lg' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between text-white">
        {/* Logo */}
        <a href="#" className="flex items-center">
          <img src="/assets/1.png" alt="Sleeka" className="h-12 md:h-16 w-auto" />
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium hover:text-geko-accent transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <a
            href="https://calendar.app.google/2nWbeLXuC52dvZtq5"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2.5 rounded-full font-bold text-sm transition-all flex items-center gap-2 group shadow-lg hover:shadow-xl hover:scale-105 duration-300"
            style={{ backgroundColor: '#47ff01', color: '#000' }}
          >
            Book a Discovery Call
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden transition-transform duration-300 hover:scale-110"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <div className="relative w-6 h-6">
            <Menu
              size={24}
              className={`absolute inset-0 transition-all duration-300 ${
                isMobileMenuOpen ? 'opacity-0 rotate-90 scale-0' : 'opacity-100 rotate-0 scale-100'
              }`}
            />
            <X
              size={24}
              className={`absolute inset-0 transition-all duration-300 ${
                isMobileMenuOpen ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 rotate-90 scale-0'
              }`}
            />
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-geko-dark border-t border-white/10 shadow-xl overflow-hidden transition-all duration-300 ${
          isMobileMenuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="p-6 flex flex-col gap-4">
          {navLinks.map((link, index) => (
            <a
              key={link.label}
              href={link.href}
              className="text-white text-lg font-medium py-2 transform transition-all duration-300 hover:translate-x-2 hover:text-geko-accent"
              style={{
                transitionDelay: isMobileMenuOpen ? `${index * 50}ms` : '0ms',
                transform: isMobileMenuOpen ? 'translateX(0)' : 'translateX(-20px)',
                opacity: isMobileMenuOpen ? 1 : 0,
              }}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://calendar.app.google/2nWbeLXuC52dvZtq5"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-3 rounded-full font-bold mt-4 transform transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 group"
            style={{
              backgroundColor: '#47ff01',
              color: '#000',
              transitionDelay: isMobileMenuOpen ? `${navLinks.length * 50}ms` : '0ms',
              transform: isMobileMenuOpen ? 'translateY(0)' : 'translateY(-20px)',
              opacity: isMobileMenuOpen ? 1 : 0,
            }}
          >
            Book a Discovery Call
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </nav>
  );
};
