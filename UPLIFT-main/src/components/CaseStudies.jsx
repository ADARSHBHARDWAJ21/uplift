/* eslint-disable react/prop-types */
import { useRef, useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

// We'll create case studies based on your Results and Clients components
const studies = [
  {
    client: 'Tradex Markets',
    logo: 'https://fakeimg.pl/150x50/ffffff/000000?text=Tradex&font=montserrat',
    image: 'https://fakeimg.pl/600x600/1e293b/ffffff?text=Stock+Chart',
    quote:
      '"7M+ views and 5,000+ organic leads... the results are just insane."',
    description:
      'This finance client faced low engagement. We launched a high-impact video content strategy on Instagram and YouTube, turning complex topics into viral, shareable clips.',
    impact: [
      '7M+ Total Views',
      '5,000+ Organic Leads',
      '150% Increase in Engagement',
      'Grew from 2k to 25k followers',
    ],
  },
  {
    client: 'Vihana Arya',
    logo: 'https://fakeimg.pl/150x50/ffffff/000000?text=Vihana+Arya&font=museo',
    image: 'https://fakeimg.pl/600x600/4a1d95/ffffff?text=Fashion',
    quote:
      '"They grew my follower count from 4k to over 12.6k in just one month!"',
    description:
      'As a personal brand, Vihana needed to build authority. We optimized her profile, created a consistent content calendar, and ran targeted Meta ads to her ideal audience.',
    impact: [
      '4k to 12.6k Followers (1 Month)',
      '3x Increase in Profile Visits',
      '200% More Inbound Enquiries',
    ],
  },
];

export default function CaseStudies({ id }) {
  const sliderRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const onMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - sliderRef.current.offsetLeft);
    setScrollLeft(sliderRef.current.scrollLeft);
  };

  const onMouseLeaveOrUp = () => {
    setIsDragging(false);
  };

  const onMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 2; // *2 for faster drag
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <section id={id} className="py-32 bg-black/50 backdrop-blur-sm overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 text-center">
        {/* Badge */}
        <span className="inline-block px-4 py-1 mb-6 text-sm font-medium text-gray-300 bg-gray-800/50 rounded-full border border-white/10">
          Case Studies
        </span>
        
        {/* Headline */}
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          See How Our Strategies Transform Businesses
        </h2>
        
        {/* Subtitle */}
        <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto mb-16">
          See how our work streamlines operations, boosts, and drives growth.
        </p>
      </div>

      {/* Slider Container */}
      <div
        className="flex overflow-x-auto cursor-grab active:cursor-grabbing snap-x snap-mandatory"
        ref={sliderRef}
        onMouseDown={onMouseDown}
        onMouseLeave={onMouseLeaveOrUp}
        onMouseUp={onMouseLeaveOrUp}
        onMouseMove={onMouseMove}
        // Hide scrollbar
        style={{ scrollbarWidth: 'none', '-ms-overflow-style': 'none' }}
      >
        {studies.map((study, index) => (
          // Individual Slide
          <div
            key={index}
            className="flex-shrink-0 w-full max-w-7xl mx-auto px-8 snap-center"
          >
            <div className="flex flex-col md:flex-row gap-12 items-center">
              {/* Image Column */}
              <div className="w-full md:w-1/2">
                <img
                  src={study.image}
                  alt={`${study.client} case study`}
                  className="rounded-lg object-cover w-full h-[400px] shadow-2xl"
                />
              </div>
              
              {/* Content Column */}
              <div className="w-full md:w-1/2 text-left">
                <img
                  src={study.logo}
                  alt={`${study.client} logo`}
                  className="w-32 h-auto mb-6"
                  style={{ filter: 'brightness(0) invert(1)' }}
                />
                <h3 className="text-3xl font-bold italic mb-6">
                  {study.quote}
                </h3>
                <p className="text-lg text-gray-300 mb-6">
                  {study.description}
                </p>
                
                <h4 className="text-xl font-semibold mb-4">Impact:</h4>
                <ul className="space-y-2">
                  {study.impact.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-gray-300">
                      <span className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Drag Hint */}
      <div className="flex justify-center items-center gap-4 mt-12 text-gray-500">
        <ArrowLeft className="w-4 h-4" />
        <span className="text-sm font-semibold uppercase tracking-wider">
          Drag to Explore
        </span>
        <ArrowRight className="w-4 h-4" />
      </div>
    </section>
  );
}