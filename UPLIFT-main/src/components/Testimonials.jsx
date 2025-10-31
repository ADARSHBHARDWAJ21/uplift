/* eslint-disable react/prop-types */
import { Star } from 'lucide-react';

// Testimonials focused on marketing results
const testimonials = [
  {
    quote:
      "Uplift transformed our social media presence. Our engagement has skyrocketed, and our workflow has never been easier. Scaling our brand felt effortless with them.",
    name: 'James Carter',
    title: 'CEO at TechFlow Solutions',
    avatarUrl: 'https://fakeimg.pl/100x100/3B82F6/FFFFFF?text=JC&font=montserrat',
  },
  {
    quote:
      "With Uplift's ad campaigns, we cut our lead cost and improved quality. Our team now focuses on high-impact tasks while their automation handles the rest!",
    name: 'Sophia Martinez',
    title: 'Operations Manager at NexaCorp',
    avatarUrl: 'https://fakeimg.pl/100x100/6366F1/FFFFFF?text=SM&font=montserrat',
  },
  {
    quote:
      'Their data-driven insights doubled our sales efficiency. We now engage leads at the right time with smarter, data-backed decisions!',
    name: 'David Reynolds',
    title: 'Head of Sales at GrowthPeak',
    avatarUrl: 'https://fakeimg.pl/100x100/1E40AF/FFFFFF?text=DR&font=montserrat',
  },
  {
    quote:
      "Our content is now seamless. Our video views are up 300%, and satisfaction is at an all-time high, thanks to Uplift's creative team.",
    name: 'Emily Wong',
    title: 'Customer Success Lead at SupportHive',
    avatarUrl: 'https://fakeimg.pl/100x100/4F46E5/FFFFFF?text=EW&font=montserrat',
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
              className="bg-gray-900/50 border border-white/10 rounded-lg p-8 text-left flex flex-col justify-between"
            >
              <div>
                {/* 5-Star Rating */}
                <div className="flex items-center gap-1 text-yellow-400 mb-6">
                  <Star className="w-5 h-5 fill-yellow-400" />
                  <Star className="w-5 h-5 fill-yellow-400" />
                  <Star className="w-5 h-5 fill-yellow-400" />
                  <Star className="w-5 h-5 fill-yellow-400" />
                  <Star className="w-5 h-5 fill-yellow-400" />
                </div>
                {/* Quote */}
                <blockquote className="text-lg text-gray-300 italic">
                  "{item.quote}"
                </blockquote>
              </div>
              {/* Author */}
              <div className="flex items-center gap-4 mt-8">
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
          ))}
        </div>
      </div>
    </section>
  );
}