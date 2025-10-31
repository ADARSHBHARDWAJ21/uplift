/* eslint-disable react/prop-types */
import { ArrowUpRight } from 'lucide-react';

// Helper function for smooth scrolling (re-used from Navigation)
const scrollToSection = (id) => {
  const element = document.getElementById(id.substring(1));
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-black py-20 px-8 border-t border-gray-800">
      {/* MODIFIED: Violet glowing effect from the top center */}
      <div 
        className="absolute inset-0" 
        style={{ 
          background: 'radial-gradient(ellipse at top center, rgba(126, 34, 206, 0.25) 0%, transparent 70%)' 
        }}
      ></div>

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-12">
        {/* Column 1: Logo & Newsletter */}
        <div className="flex-1 space-y-6 md:max-w-md">
          {/* Using your logo here for consistency */}
          <img src="/logo.png" alt="Uplift Advertising" className="h-12 w-auto" />
          
          <p className="text-gray-400 text-lg">
            Uplift Advertising Agency – Automate Smarter, Optimize Faster, and Grow Stronger.
          </p>
          
          <p className="text-gray-300 font-medium pt-4">Join our newsletter</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <input 
              type="email" 
              placeholder="name@email.com" 
              className="flex-grow px-4 py-3 bg-gray-900 border border-white/10 rounded-md focus:ring-violet-500 focus:border-violet-500"
            />
            <button className="bg-violet-600 hover:bg-violet-700 px-6 py-3 rounded-md font-medium transition-colors">
              Subscribe
            </button>
          </div>
        </div>

        {/* Column 2: Links */}
        <div className="flex-grow">
          <h3 className="text-lg font-semibold mb-6">Links</h3>
          <ul className="space-y-4">
            <li>
              <a href="#services" onClick={(e) => { e.preventDefault(); scrollToSection('#services'); }} className="text-gray-400 hover:text-white transition-colors">
                Services
              </a>
            </li>
            <li>
              <a href="#process" onClick={(e) => { e.preventDefault(); scrollToSection('#process'); }} className="text-gray-400 hover:text-white transition-colors">
                Process
              </a>
            </li>
            <li>
              <a href="#case-studies" onClick={(e) => { e.preventDefault(); scrollToSection('#case-studies'); }} className="text-gray-400 hover:text-white transition-colors">
                Case studies
              </a>
            </li>
            <li>
              <a href="#key-benefits" onClick={(e) => { e.preventDefault(); scrollToSection('#key-benefits'); }} className="text-gray-400 hover:text-white transition-colors">
                Benefits
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Pricing (Placeholder)
              </a>
            </li>
          </ul>
        </div>

        {/* Column 3: Pages */}
        <div className="flex-grow">
          <h3 className="text-lg font-semibold mb-6">Pages</h3>
          <ul className="space-y-4">
            <li>
              <a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('#home'); }} className="text-gray-400 hover:text-white transition-colors">
                Home
              </a>
            </li>
            <li>
              <a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('#about'); }} className="text-gray-400 hover:text-white transition-colors">
                About (Why Content)
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Blog (Placeholder)
              </a>
            </li>
            <li>
              <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('#contact'); }} className="text-gray-400 hover:text-white transition-colors">
                Contact
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                404 (Placeholder)
              </a>
            </li>
          </ul>
        </div>

        {/* Column 4: Socials (Bottom buttons removed) */}
        <div className="flex-grow"> {/* Removed flex-col and justify-between as buttons are gone */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Socials</h3>
            <ul className="space-y-4">
              <li>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                  Instagram
                </a>
              </li>
              <li>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                  Facebook
                </a>
              </li>
              <li>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                  Linkedin
                </a>
              </li>
              <li>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                  Twitter
                </a>
              </li>
            </ul>
          </div>

          {/* Bottom Right Buttons - REMOVED */}
          {/* <div className="flex flex-col gap-4 mt-8 md:mt-0 w-full md:w-auto">
            <button className="group bg-violet-600 hover:bg-violet-700 px-6 py-3 rounded-md font-medium transition-colors flex items-center justify-center md:justify-end gap-2 text-white">
              Use For Free
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
            <button className="group bg-transparent border border-gray-700 hover:border-gray-600 px-6 py-3 rounded-md font-medium transition-colors flex items-center justify-center md:justify-end gap-2 text-gray-300">
              Another AI Template
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div> */}
        </div>
      </div>

      {/* Copyright */}
      <div className="relative z-10 text-center text-gray-500 text-sm mt-16 pt-8 border-t border-gray-800">
        &copy; {currentYear} Uplift Advertising Agency. All rights reserved.
      </div>
    </footer>
  );
}