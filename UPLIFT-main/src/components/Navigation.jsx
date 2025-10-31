import { useState, useCallback } from 'react';
import { Menu, X } from 'lucide-react';

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About Us', href: '#about' }, // Targeting the 'About Us' section (assuming it's near 'WhyContent')
  { name: 'Services & Packages', href: '#services' },
  { name: 'Our Work', href: '#results' },
  { name: 'Contact Us', href: '#contact' },
];

// Helper function for smooth scrolling
const scrollToSection = (id) => {
  const element = document.getElementById(id.substring(1));
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle mobile menu state
  const toggleMenu = useCallback(() => {
    setIsOpen(prev => !prev);
  }, []);

  // Handle navigation click for both desktop and mobile
  const handleNavClick = useCallback((e, href) => {
    e.preventDefault();
    scrollToSection(href);
    if (isOpen) {
      setIsOpen(false); // Close menu after selection on mobile
    }
  }, [isOpen]);

  return (
    // UPDATED: Changed max-w-7xl to max-w-screen-xl to widen the container
    <nav className="relative z-20 flex items-center justify-between px-8 py-6 max-w-screen-xl mx-auto">
      {/* Logo Area (Left) */}
      <div className="flex items-center gap-2">
        <a href="#home" onClick={(e) => handleNavClick(e, '#home')}>
          <img src="/logo.png" alt="Uplift Advertising" className="h-12" />
        </a>
      </div>

      {/* Desktop Navigation (Center) */}
      <div className="hidden md:flex items-center gap-8">
        {navItems.map((item) => (
          <a
            key={item.name}
            href={item.href}
            onClick={(e) => handleNavClick(e, item.href)}
            className="text-sm hover:text-gray-300 transition-colors"
          >
            {item.name}
          </a>
        ))}
        <button 
          onClick={(e) => handleNavClick(e, '#contact')}
          className="bg-indigo-600 hover:bg-indigo-700 px-6 py-2 rounded-md text-sm font-medium transition-colors shadow-lg shadow-indigo-500/30"
        >
          Let's Work Together
        </button>
      </div>
      
      {/* Mobile Menu Button (Right) */}
      <button 
        className="md:hidden text-white p-2" 
        onClick={toggleMenu}
        aria-label="Toggle navigation menu"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 top-[80px] bg-black/95 backdrop-blur-md transition-transform transform ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } md:hidden z-30`}
      >
        <div className="flex flex-col items-center justify-start py-8 space-y-6">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className="text-xl font-medium text-white hover:text-indigo-400 transition-colors"
            >
              {item.name}
            </a>
          ))}
          <button 
            onClick={(e) => handleNavClick(e, '#contact')}
            className="mt-8 bg-indigo-600 hover:bg-indigo-700 px-8 py-3 rounded-md text-lg font-medium transition-colors shadow-xl shadow-indigo-500/40"
          >
            Let's Work Together
          </button>
        </div>
      </div>
    </nav>
  );
}