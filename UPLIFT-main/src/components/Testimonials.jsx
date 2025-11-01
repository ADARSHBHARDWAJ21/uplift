/* eslint-disable react/prop-types */
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Star } from 'lucide-react';

// ... (testimonials array remains the same)
const testimonials = [
  {
    quote:
      "7M+ views and 5,000+ organic leads... the results from Uplift are just insane. They transformed our finance content into viral clips.",
    name: 'Tradex Markets',
    title: 'Finance Education Client',
    avatarUrl: 'https://source.unsplash.com/100x100/?portrait,man,finance',
  },
  {
    quote:
      "They grew my follower count from 4k to over 12.6k in just one month! My personal brand authority has never been stronger.",
    name: 'Vihana Arya',
    title: 'Personal Brand Client',
    avatarUrl: 'https://source.unsplash.com/100x100/?portrait,woman,fashion',
  },
  {
    quote:
      'Working with Uplift was a game-changer. Their content strategy took our social engagement to a new level and built a real community.',
    name: 'Jhumaa Dutta',
    title: 'Online Coach',
    avatarUrl: 'https://source.unsplash.com/100x100/?portrait,woman,professional',
  },
  {
    quote:
      "The web development team delivered a sleek, fast, and professional website that perfectly captures our brand. Highly recommend!",
    name: 'Manoj Adwani',
    title: 'Business Owner',
    avatarUrl: 'https://source.unsplash.com/100x100/?portrait,man,business',
  },
];

const TestimonialCard = ({ item, index }) => {
  const [elementRef, isVisible] = useScrollAnimation({ threshold: 0.1 });
  const delay = (index % 2) * 100;

  return (
    <div
      ref={elementRef}
      // UPDATED: Changed to 'animate-scale-in'
      className={`relative overflow-hidden bg-black border border-white/10 rounded-lg p-8 text-left flex flex-col justify-between ${
        isVisible ? 'animate-scale-in' : 'opacity-0'
      }`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* ... (rest of card remains the same) ... */}
      <div 
        className="absolute inset-0" 
        style={{ 
          background: 'radial-gradient(ellipse at bottom right, rgba(126, 34, 206, 0.2) 0%, transparent 70%)' 
        }}
      ></div>
      <div className="relative z-10">
        <div className="flex items-center gap-1 text-white mb-6">
          <Star className="w-5 h-5 fill-white" />
          <Star className="w-5 h-5 fill-white" />
          <Star className="w-5 h-5 fill-white" />
          <Star className="w-5 h-5 fill-white" />
          <Star className="w-5 h-5 fill-white" />
        </div>
        <blockquote className="text-lg text-gray-300 italic">
          "{item.quote}"
        </blockquote>
      </div>
      <div className="relative z-10 flex items-center gap-4 mt-8">
        <img
          src={item.avatarUrl}
          alt={item.name}
          className="w-12 h-12 rounded-full object-cover"
        />
        <div>
          <p className="font-bold text-white">{item.name}</p>
          <p className="text-sm text-gray-400">{item.title}</p>
        </div>
      </div>
    </div>
  );
};

export default function Testimonials({ id }) {
  return (
    <section id={id} className="py-32 bg-black/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-8 text-center">
        {/* ... (header remains the same) ... */}
        <span className="inline-block px-4 py-1 mb-6 text-sm font-medium text-gray-300 bg-gray-800/50 rounded-full border border-white/10">
          Testimonials
        </span>
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Why Our Clients Love Working With Us
        </h2>
        <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto mb-16">
          Real businesses, real results with Uplift Advertising.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((item, index) => (
            <TestimonialCard key={item.name} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}