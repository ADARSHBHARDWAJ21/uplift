/* eslint-disable react/prop-types */
import { Star } from 'lucide-react';

// UPDATED: Testimonials now use your client data
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


export default function Testimonials({ id }) {
  return (
    <section id={id} className="py-32 bg-black/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-8 text-center">
        {/* Badge */}
        <span className="inline-block px-4 py-1 mb-6 text-sm font-medium text-gray-300 bg-gray-800/50 rounded-full border border-white/10">
          Testimonials
        </span>
        
        {/* Headline - adapted for your brand */}
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Why Our Clients Love Working With Us
        </h2>
        
        {/* Subtitle */}
        <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto mb-16">
          Real businesses, real results with Uplift Advertising.
        </p>

        {/* Testimonials Grid (2x2) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((item) => (
            <div
              key={item.name}
              // UPDATED: Switched to bg-black and added relative/overflow-hidden for the glow
              className="relative overflow-hidden bg-black border border-white/10 rounded-lg p-8 text-left flex flex-col justify-between"
            >
              {/* Violet glow effect from bottom right */}
              <div 
                className="absolute inset-0" 
                style={{ 
                  background: 'radial-gradient(ellipse at bottom right, rgba(126, 34, 206, 0.2) 0%, transparent 70%)' 
                }}
              ></div>
              
              {/* Top content (stars, quote) */}
              <div className="relative z-10">
                {/* 5-Star Rating - UPDATED to white */}
                <div className="flex items-center gap-1 text-white mb-6">
                  <Star className="w-5 h-5 fill-white" />
                  <Star className="w-5 h-5 fill-white" />
                  <Star className="w-5 h-5 fill-white" />
                  <Star className="w-5 h-5 fill-white" />
                  <Star className="w-5 h-5 fill-white" />
                </div>
                {/* Quote */}
                <blockquote className="text-lg text-gray-300 italic">
                  "{item.quote}"
                </blockquote>
              </div>
              
              {/* Author (bottom content) */}
              <div className="relative z-10 flex items-center gap-4 mt-8">
                <img
                  src={item.avatarUrl} // UPDATED: Now uses Unsplash
                  alt={item.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-bold text-white">{item.name}</p>
                  <p className="text-sm text-gray-400">{item.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}