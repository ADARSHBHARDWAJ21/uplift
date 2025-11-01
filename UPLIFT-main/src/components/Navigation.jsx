import { useState, useCallback } from 'react';
import { Menu, X } from 'lucide-react';

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About Us', href: '#about' },
  { name: 'Services & Packages', href: '#services' },
  { name: 'Our Work', href: '#results' },
  // UPDATED: Changed href from '#contact' to '#cta'
  { name: 'Contact Us', href: '#cta' },
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
        </div>
      </div>
    </nav>
  );
}