/* eslint-disable react/prop-types */
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { ArrowRight } from 'lucide-react';

// UPDATED: Accept 'id' and 'setIsBookingPageVisible' props
export default function Cta({ id, setIsBookingPageVisible }) {
  const [elementRef, isVisible] = useScrollAnimation({ threshold: 0.1 });

  return (
    // UPDATED: Added the 'id' and animation props
    <section 
      id={id}
      ref={elementRef}
      className={`py-20 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
    >
      <div className="max-w-4xl mx-auto px-8">
        <div className="relative overflow-hidden rounded-lg bg-black p-16 text-center border border-white/10">
          
          <div 
            className="absolute inset-0" 
            style={{ 
              background: 'radial-gradient(ellipse at top right, rgba(126, 34, 206, 0.25) 0%, transparent 70%), radial-gradient(ellipse at bottom left, rgba(126, 34, 206, 0.25) 0%, transparent 70%)' 
            }}
          ></div>
          
          <div className="relative z-10">
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Let Us Do the Work so
              <br />
              You Can Scale Faster
            </h2>
            
            <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-10">
              Book a Call Today and Start Growing Your Brand
            </p>
            
            {/* UPDATED: onClick now shows the booking page */}
            <button
              onClick={() => setIsBookingPageVisible(true)}
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