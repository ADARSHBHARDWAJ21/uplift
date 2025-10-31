/* eslint-disable react/prop-types */
import { Mail, Phone, Instagram } from 'lucide-react';

export default function Footer() {
  // Function to scroll to the top/home section
  const scrollToHome = () => {
    document.getElementById('home').scrollIntoView({ behavior: 'smooth' });
  };
  
  // Helper function to scroll to a generic ID
  const scrollToId = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  return (
    <footer className="relative z-10 border-t border-white/10 mt-20">
      <div className="max-w-7xl mx-auto px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Column 1: Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 cursor-pointer" onClick={scrollToHome}>
              <img src="/logo.png" alt="Uplift Advertising" className="h-12" />
            </div>
            <p className="text-gray-400 text-sm uppercase">
              WE TURN CREATIVITY INTO BUSINESS GROWTH
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              {/* These links now use the smooth scroll function */}
              <li><a href="#home" onClick={(e) => { e.preventDefault(); scrollToHome(); }} className="hover:text-white">Home</a></li>
              <li><a href="#about" onClick={(e) => { e.preventDefault(); scrollToId('about'); }} className="hover:text-white">About Us</a></li>
              <li><a href="#services" onClick={(e) => { e.preventDefault(); scrollToId('services'); }} className="hover:text-white">Services & Packages</a></li>
              <li><a href="#results" onClick={(e) => { e.preventDefault(); scrollToId('results'); }} className="hover:text-white">Our Work</a></li>
              <li><a href="#case-studies" onClick={(e) => { e.preventDefault(); scrollToId('case-studies'); }} className="hover:text-white">Case Studies</a></li>
              <li><a href="#testimonials" onClick={(e) => { e.preventDefault(); scrollToId('testimonials'); }} className="hover:text-white">Testimonials</a></li>
              <li><a href="#faq" onClick={(e) => { e.preventDefault(); scrollToId('faq'); }} className="hover:text-white">FAQs</a></li>
              <li><a href="#contact" onClick={(e) => { e.preventDefault(); scrollToId('contact'); }} className="hover:text-white">Contact Us</a></li>
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div>
            <h3 className="font-bold mb-4">Get in Touch</h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4" />
                <a href="tel:+918966043256" className="hover:text-white">
                  +91 89660 43256
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4" />
                <a
                  href="mailto:upliftmarketingagency360@gmail.com"
                  className="hover:text-white"
                >
                  upliftmarketingagency360@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Instagram className="w-4 h-4" />
                <a
                  href="https://www.instagram.com/Uplift_advertising_agency"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white"
                >
                  @Uplift_advertising_agency
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-16 pt-8 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Uplift Advertising Agency. All rights reserved.
        </div>
      </div>
    </footer>
  );
}