/* eslint-disable react/prop-types */
import { Target, Filter, Users, DollarSign, Brain, Award } from 'lucide-react';

// Marketing-focused benefits
const benefits = [
  {
    icon: <Target className="w-8 h-8 text-blue-400" />,
    title: 'Wider Brand Reach',
    description:
      'Reach a larger, more targeted audience across multiple platforms, building significant brand awareness and recognition.',
  },
  {
    icon: <Filter className="w-8 h-8 text-blue-400" />,
    title: 'Quality Lead Generation',
    description:
      'Attract and capture high-quality leads that are more likely to convert into paying customers for your business.',
  },
  {
    icon: <Users className="w-8 h-8 text-blue-400" />,
    title: 'Stronger Community',
    description:
      'Foster a loyal community around your brand, driving engagement, user-generated content, and long-term customer loyalty.',
  },
  {
    icon: <DollarSign className="w-8 h-8 text-blue-400" />,
    title: 'Cost-Effective Strategy',
    description:
      'Digital marketing often provides a higher ROI than traditional methods, allowing for precise budgeting and measurable results.',
  },
  {
    icon: <Brain className="w-8 h-8 text-blue-400" />,
    title: 'Data-Driven Insights',
    description:
      'Gain valuable insights from analytics to understand your audience, refine your strategy, and make smarter business decisions.',
  },
  {
    icon: <Award className="w-8 h-8 text-blue-400" />,
    title: 'Build Authority & Trust',
    description:
      'Establish your brand as an industry leader and a trusted authority, making customers feel more confident choosing you.',
  },
];

export default function KeyBenefits({ id }) {
  return (
    <section id={id} className="py-32">
      <div className="max-w-7xl mx-auto px-8 text-center">
        {/* Badge from the image */}
        <span className="inline-block px-4 py-1 mb-6 text-sm font-medium text-blue-300 bg-blue-900/30 rounded-full">
          Benefits
        </span>
        
        {/* Title and Subtitle from the image, adapted for marketing */}
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          The Key Benefits of Marketing for Your Business Growth
        </h2>
        <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto mb-16">
          Discover how our marketing strategies enhance efficiency, reduce costs, 
          and drive business growth with smarter, faster processes.
        </p>

        {/* 3-column grid for the benefits */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              // Re-using the card style from your ServicesOverview component
              className="bg-gray-900/50 border border-white/10 rounded-lg p-8 text-left space-y-4"
            >
              {/* Re-using the icon style */}
              <div className="p-3 bg-blue-900/30 w-fit rounded-lg">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold">{benefit.title}</h3>
              <p className="text-gray-400">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}