// UPDATED: Imported the scroll animation hook
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Check } from 'lucide-react';

const benefits = [
  'Build Authority and Credibility',
  'Generate Leads and Sales',
  'Foster Community and Engagement',
  'Showcase Your Personality and Values',
];

// NEW: Created a ContentBenefitCard sub-component
const ContentBenefitCard = ({ benefit, index }) => {
  const [elementRef, isVisible] = useScrollAnimation({ threshold: 0.1 });
  const delay = (index % 2) * 100; // Staggered delay, resetting every 2 cards

  return (
    <div 
      ref={elementRef}
      key={benefit} 
      className={`relative overflow-hidden bg-black rounded-lg border border-white/10 p-6 ${
        isVisible ? 'animate-fade-in-up' : 'opacity-0'
      }`}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div 
        className="absolute inset-0" 
        style={{ 
          background: 'radial-gradient(ellipse at bottom right, rgba(126, 34, 206, 0.2) 0%, transparent 70%)' 
        }}
      ></div>
      <div className="relative z-10 flex items-center gap-4">
        <Check className="w-6 h-6 text-indigo-500 flex-shrink-0" />
        <span className="text-lg text-gray-200 text-left">
          {benefit}
        </span>
      </div>
    </div>
  );
};

export default function WhyContent({ id }) {
  return (
    <section id={id} className="py-32">
      <div className="max-w-4xl mx-auto px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-16">
          Why Your Business Needs to Create Content Online
        </h2>
        
        {/* UPDATED: Mapped to the new ContentBenefitCard component */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {benefits.map((benefit, index) => (
            <ContentBenefitCard key={benefit} benefit={benefit} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}