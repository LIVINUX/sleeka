import React from 'react';
import { Instagram, Linkedin, Mail, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white py-20">
      <div className="container mx-auto px-6 md:px-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <a href="#" className="flex items-center gap-2 text-2xl font-bold tracking-tight mb-4">
              <div className="w-8 h-8 rounded-full border-2 border-gray-900 flex items-center justify-center">
                <span className="text-sm italic">Sl</span>
              </div>
              <span>sleeka</span>
            </a>
            <p className="text-gray-600 text-sm leading-relaxed">
              Your creative partner for design, video, and content that drives results.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-gray-900 mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#work" className="text-gray-600 hover:text-[#5c0386] transition-colors text-sm">
                  Our Work
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-600 hover:text-[#5c0386] transition-colors text-sm">
                  Services
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-600 hover:text-[#5c0386] transition-colors text-sm">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-[#5c0386] transition-colors text-sm">
                  Careers
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-gray-900 mb-4">Get in Touch</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-gray-600">
                <MapPin size={16} className="mt-1 flex-shrink-0" />
                <span>Porthacourt, Nigeria</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-gray-600">
                <Mail size={16} className="mt-1 flex-shrink-0" />
                <a href="mailto:hello@sleekahq.com" className="hover:text-[#5c0386] transition-colors">
                  hello@sleekahq.com
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-bold text-gray-900 mb-4">Follow Us</h4>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-[#5c0386] flex items-center justify-center text-white hover:bg-[#7a04b3] transition-all hover:scale-110"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-[#5c0386] flex items-center justify-center text-white hover:bg-[#7a04b3] transition-all hover:scale-110"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © 2025 Sleeka. All rights reserved
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-gray-500 hover:text-gray-900 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-900 transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
