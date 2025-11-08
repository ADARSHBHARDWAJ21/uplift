/* eslint-disable react/prop-types */
import { useScrollAnimation } from '../hooks/useScrollAnimation';

// UPDATED: Import the new images from the assets folder
import profileGrowthImage from '../assets/ChatGPT Image Nov 8, 2025, 10_34_02 AM.png';
import brandStorytellingImage from '../assets/ChatGPT Image Nov 8, 2025, 10_34_09 AM.png';
import paidAdvertisingImage from '../assets/ChatGPT Image Nov 8, 2025, 10_34_12 AM.png';
import digitalStorefrontImage from '../assets/ChatGPT Image Nov 8, 2025, 10_34_15 AM.png';

// UPDATED: The features array now uses the imported image variables
const features = [
  {
    badge: 'Profile Growth',
    title: 'Automate Repetitive Tasks',
    description:
      'We help you streamline your social presence by automating posting, monitoring, and basic engagement, freeing you up to focus on strategy.',
    links: ['Engagement', 'Scheduling', 'Reporting'],
    imageUrl: profileGrowthImage, // <-- Updated
    imageSide: 'right',
  },
  {
    badge: 'Brand Storytelling',
    title: 'Delegate Daily Content',
    description:
      'Stop worrying about "what to post". We handle the full content lifecycle, from video ideation and shooting to graphic design and copywriting, all aligned with your brand voice.',
    links: ['Video Production', 'Graphic Design', 'Copywriting'],
    imageUrl: brandStorytellingImage, // <-- Updated
    imageSide: 'left',
  },
  {
    badge: 'Paid Advertising',
    title: 'Accelerate Sales Growth',
    description:
      'Attract high-quality leads with targeted Google & Meta ad campaigns. We analyze data to find your customers, optimize your ad spend, and maximize your return on investment.',
    links: ['Lead Gen', 'ROAS', 'Targeting'],
    imageUrl: paidAdvertisingImage, // <-- Updated
    imageSide: 'right',
  },
  {
    badge: 'Digital Storefront',
    title: 'Build Smarter Systems',
    description:
      'Your website is your 24/7 salesperson. We build fast, professional, and mobile-responsive websites that not only look great but are also optimized for search engines (SEO) to attract organic traffic.',
    links: ['Websites', 'E-commerce', 'SEO'],
    imageUrl: digitalStorefrontImage, // <-- Updated
    imageSide: 'left',
  },
];


const FeatureSection = ({ feature }) => {
  // We use one hook for the whole section
  const [elementRef, isVisible] = useScrollAnimation({ threshold: 0.2 }); // Trigger at 20%

  return (
    // Attach the ref to the parent grid
    <div
      ref={elementRef}
      className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
    >
      {/* Image Column */}
      <div
        className={`w-full ${
          feature.imageSide === 'left' ? 'md:order-1' : 'md:order-2'
        } ${
          // UPDATED: Apply left/right animation
          isVisible 
            ? feature.imageSide === 'left' 
              ? 'animate-fade-in-left' 
              : 'animate-fade-in-right' 
            : 'opacity-0'
        }`}
      >
        <img
          src={feature.imageUrl}
          alt={feature.title}
          className="rounded-lg w-full h-[350px] object-cover shadow-2xl shadow-black/50"
        />
      </div>
      
      {/* Text Column */}
      <div
        className={`w-full text-left ${
          feature.imageSide === 'left' ? 'md:order-2' : 'md:order-1'
        } ${
          // UPDATED: Apply the *opposite* left/right animation
          isVisible 
            ? feature.imageSide === 'left' 
              ? 'animate-fade-in-right' 
              : 'animate-fade-in-left' 
            : 'opacity-0'
        }`}
        // Add a slight delay to the text
        style={{ animationDelay: '0.2s' }}
      >
        <span className="inline-block px-3 py-1 mb-4 text-sm font-medium text-indigo-300 bg-indigo-900/30 rounded-full border border-indigo-500/30">
          {feature.badge}
        </span>
        <h3 className="text-3xl font-bold mb-4">{feature.title}</h3>
        <p className="text-lg text-gray-400 mb-6">
          {feature.description}
        </p>
        <div className="flex flex-wrap gap-4">
          {feature.links.map((link) => (
            <span
              key={link}
              className="text-sm text-gray-400 bg-gray-800/50 px-3 py-1 rounded"
            >
              {link}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default function FeatureGrid() {
  return (
    <section className="py-32">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Marketing Solutions That Take Your Business to the Next Level
          </h2>
          <p className="text-gray-300 text-lg md:text-xl">
            We design, develop, and implement proven marketing tools that help
            you work smarter, not harder.
          </p>
        </div>

        <div className="space-y-24">
          {features.map((feature) => (
            <FeatureSection key={feature.title} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
}