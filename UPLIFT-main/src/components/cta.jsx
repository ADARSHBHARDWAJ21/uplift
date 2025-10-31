/* eslint-disable react/prop-types */
import { ArrowRight } from 'lucide-react';

export default function Cta() {
  const scrollToContact = () => {
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-20">
      <div className="max-w-4xl mx-auto px-8">
        {/* The "box" element */}
        <div className="relative overflow-hidden rounded-lg bg-black p-16 text-center border border-white/10">
          
          {/* FIXED: 
            Now using two radial gradients positioned in the corners 
            instead of one in the center.
          */}
          <div 
            className="absolute inset-0" 
            style={{ 
              background: 'radial-gradient(ellipse at top right, rgba(126, 34, 206, 0.25) 0%, transparent 70%), radial-gradient(ellipse at bottom left, rgba(126, 34, 206, 0.25) 0%, transparent 70%)' 
            }}
          ></div>
          
          {/* Content container to stack on top of the gradient */}
          <div className="relative z-10">
            
            {/* Headline (Your previous text) */}
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Let Us Do the Work so
              <br />
              You Can Scale Faster
            </h2>
            
            {/* Subtitle (Your previous text) */}
            <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-10">
              Book a Call Today and Start Growing Your Brand
            </p>
            
            {/* Button (Your previous text, new violet color) */}
            <button
              onClick={scrollToContact}
              className="group bg-violet-600 hover:bg-violet-700 px-8 py-3 rounded-md font-medium transition-all flex items-center gap-2 mx-auto text-white"
            >
              Book a free call
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}