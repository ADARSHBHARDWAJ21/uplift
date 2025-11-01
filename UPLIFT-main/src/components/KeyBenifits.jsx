/* eslint-disable react/prop-types */
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Target, Filter, Users, DollarSign, Brain, Award } from 'lucide-react';

// ... (benefits array remains the same)
const benefits = [
  {
    icon: <Target className="w-8 h-8 text-white" />,
    title: 'Wider Brand Reach',
    description:
      'Reach a larger, more targeted audience across multiple platforms, building significant brand awareness and recognition.',
  },
  {
    icon: <Filter className="w-8 h-8 text-white" />,
    title: 'Quality Lead Generation',
    description:
      'Attract and capture high-quality leads that are more likely to convert into paying customers for your business.',
  },
  {
    icon: <Users className="w-8 h-8 text-white" />,
    title: 'Stronger Community',
    description:
      'Foster a loyal community around your brand, driving engagement, user-generated content, and long-term customer loyalty.',
  },
  {
    icon: <DollarSign className="w-8 h-8 text-white" />,
    title: 'Cost-Effective Strategy',
    description:
      'Digital marketing often provides a higher ROI than traditional methods, allowing for precise budgeting and measurable results.',
  },
  {
    icon: <Brain className="w-8 h-8 text-white" />,
    title: 'Data-Driven Insights',
    description:
      'Gain valuable insights from analytics to understand your audience, refine your strategy, and make smarter business decisions.',
  },
  {
    icon: <Award className="w-8 h-8 text-white" />,
    title: 'Build Authority & Trust',
    description:
      'Establish your brand as an industry leader and a trusted authority, making customers feel more confident choosing you.',
  },
];

const BenefitCard = ({ benefit, index }) => {
  const [elementRef, isVisible] = useScrollAnimation({ threshold: 0.1 });
  const delay = (index % 3) * 100;

  return (
    <div
      ref={elementRef}
      // UPDATED: Changed to 'animate-scale-in'
      className={`relative overflow-hidden bg-black border border-white/10 rounded-lg p-8 text-left ${
        isVisible ? 'animate-scale-in' : 'opacity-0'
      }`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* ... (rest of card remains the same) ... */}
      <div 
        className="absolute inset-0" 
        style={{ 
          background: 'radial-gradient(ellipse at bottom center, rgba(126, 34, 206, 0.2) 0%, transparent 70%)' 
        }}
      ></div>
      <div className="relative z-10 space-y-4">
        <div className="p-3 bg-indigo-900/30 w-fit rounded-lg">
          {benefit.icon}
        </div>
        <h3 className="text-xl font-bold text-white">{benefit.title}</h3>
        <p className="text-gray-300">{benefit.description}</p>
      </div>
    </div>
  );
};

export default function KeyBenefits({ id }) {
  return (
    <section id={id} className="py-32">
      <div className="max-w-7xl mx-auto px-8 text-center">
        {/* ... (header remains the same) ... */}
        <span className="inline-block px-4 py-1 mb-6 text-sm font-medium text-indigo-300 bg-indigo-900/30 rounded-full">
          Benefits
        </span>
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          The Key Benefits of Marketing for Your Business Growth
        </h2>
        <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto mb-16">
          Discover how our marketing strategies enhance efficiency, reduce costs, 
          and drive business growth with smarter, faster processes.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <BenefitCard key={benefit.title} benefit={benefit} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}