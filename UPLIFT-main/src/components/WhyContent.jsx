import { Check } from 'lucide-react';

const benefits = [
  'Build Authority and Credibility',
  'Generate Leads and Sales',
  'Foster Community and Engagement',
  'Showcase Your Personality and Values',
];

export default function WhyContent({ id }) {
  return (
    <section id={id} className="py-32">
      <div className="max-w-4xl mx-auto px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-16">
          Why Your Business Needs to Create Content Online
        </h2>
        
        {/* UPDATED: This is now the grid container for the 4 boxes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* We map over the benefits to create a separate box for each */}
          {benefits.map((benefit) => (
            
            // This is the individual box
            <div 
              key={benefit} 
              className="relative overflow-hidden bg-black rounded-lg border border-white/10 p-6"
            >
              
              {/* Violet glow effect from bottom right */}
              <div 
                className="absolute inset-0" 
                style={{ 
                  background: 'radial-gradient(ellipse at bottom right, rgba(126, 34, 206, 0.2) 0%, transparent 70%)' 
                }}
              ></div>
              
              {/* Content (check and text) */}
              <div className="relative z-10 flex items-center gap-4">
                <Check className="w-6 h-6 text-indigo-500 flex-shrink-0" />
                <span className="text-lg text-gray-200 text-left">
                  {benefit}
                </span>
              </div>
            </div>

          ))}
        </div>
      </div>
    </section>
  );
}