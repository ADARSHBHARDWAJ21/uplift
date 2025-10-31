/* eslint-disable react/prop-types */
import { ArrowRight } from 'lucide-react';

export default function Cta() {
  const scrollToContact = () => {
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-20">
      <div className="max-w-4xl mx-auto px-8">
        {/* The container is styled to match the image, using your site's blue/indigo theme */}
        <div className="relative overflow-hidden rounded-lg bg-gradient-to-r from-gray-900 via-indigo-950 to-gray-900 border border-white/10 p-16 text-center shadow-2xl shadow-indigo-500/10">
          
          {/* Headline - adapted for your brand */}
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let Us Do the Work so
            <br />
            You Can Scale Faster
          </h2>
          
          {/* Subtitle - adapted for your brand */}
          <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-10">
            Book a Call Today and Start Growing Your Brand
          </p>
          
          {/* Button - styled like the image but scrolls to your contact form */}
          <button
            onClick={scrollToContact}
            className="group bg-indigo-600 hover:bg-indigo-700 px-8 py-3 rounded-md font-medium transition-all flex items-center gap-2 mx-auto text-white shadow-lg shadow-indigo-500/30"
          >
            Book a free call
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
}