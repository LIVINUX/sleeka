import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, ArrowRight } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-geko-dark text-white pt-24 pb-12 rounded-t-[3rem] mt-[-3rem] relative z-20">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="space-y-6">
            <a href="#" className="flex items-center gap-2 text-2xl font-bold tracking-tight">
                <div className="w-8 h-8 rounded-full border-2 border-white flex items-center justify-center">
                    <span className="text-sm italic">bg</span>
                </div>
                <span>brandGeko</span>
            </a>
            <p className="text-gray-300 leading-relaxed text-sm">
              Helping forward-thinking brands win through strategic design and marketing that hooks the right audience.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Explore</h4>
            <ul className="space-y-3 text-gray-300 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Our Work</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Services</a></li>
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Journal</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Contact</h4>
            <ul className="space-y-3 text-gray-300 text-sm">
              <li>hello@brandgeko.com</li>
              <li>+1 (555) 123-4567</li>
              <li>Lagos, Nigeria</li>
            </ul>
          </div>

          <div>
             <h4 className="text-lg font-semibold mb-6">Stay Updated</h4>
             <div className="flex flex-col gap-4">
                <p className="text-sm text-gray-300">Subscribe to our newsletter for the latest insights.</p>
                <div className="relative">
                   <input 
                    type="email" 
                    placeholder="Email address" 
                    className="w-full bg-white/10 border border-white/20 rounded-full py-3 px-5 focus:outline-none focus:border-white transition-colors text-white placeholder-gray-400 text-sm"
                   />
                   <button className="absolute right-1 top-1 bottom-1 w-10 h-10 rounded-full flex items-center justify-center transition-colors" style={{ backgroundColor: '#47ff01' }}>
                      <ArrowRight size={16} className="text-black" />
                   </button>
                </div>
             </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
           <p className="text-gray-400 text-sm">© 2024 BrandGeko. All rights reserved.</p>
           <div className="flex gap-5">
              <a href="#" className="text-gray-300 hover:text-white transition-colors"><Facebook size={20} /></a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors"><Twitter size={20} /></a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors"><Instagram size={20} /></a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors"><Linkedin size={20} /></a>
           </div>
        </div>
      </div>
    </footer>
  );
};
