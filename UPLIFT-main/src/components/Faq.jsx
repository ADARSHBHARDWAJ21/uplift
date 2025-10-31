/* eslint-disable react/prop-types */
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqData = [
  {
    question: 'What services does Uplift Advertising offer?',
    answer:
      // Fixed: Replaced 'brand's' with 'brand&apos;s'
      'We specialize in a core set of services: Social Media Management, Content Creation (video & graphics), Google/Meta Ads, and Web Development. We handle everything to build your brand&apos;s online presence.',
  },
  {
    question: 'How quickly can I expect to see results?',
    answer:
      'Results vary by service. You might see increased engagement from social media management within weeks, while building organic authority can take a few months. Ad campaigns can generate leads almost immediately. We focus on both short-term wins and long-term sustainable growth.',
  },
  {
    question: 'My business is small. Are your services affordable?',
    answer:
      'Yes! We work with businesses of all sizes. Our goal is to provide high-ROI strategies that are cost-effective. We can tailor a package that fits your specific budget and goals.',
  },
  {
    question: 'Why is content creation so important?',
    answer:
      'Content is how you build trust and authority with your audience. It answers their questions, showcases your personality, and fosters a community. Great content turns followers into customers and customers into fans.',
  },
  {
    question: 'How do I get started with Uplift?',
    answer:
      // Fixed: Replaced 'It's' with 'It&apos;s'
      'It&apos;s easy! Just scroll down to our contact form, send us a message, or email us directly. We&apos;ll set up a free consultation to discuss your goals and how we can help you achieve them.',
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-32">
      <div className="max-w-4xl mx-auto px-8 text-center">
        {/* Badge */}
        <span className="inline-block px-4 py-1 mb-6 text-sm font-medium text-gray-300 bg-gray-800/50 rounded-full border border-white/10">
          FAQs
        </span>
        
        {/* Headline */}
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          {/* Fixed: Replaced "We've" with "We&apos;ve" */}
          We&apos;ve Got The Answers You&apos;re Looking For
        </h2>
        
        {/* Subtitle */}
        <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto mb-16">
          Quick answers to common questions about our marketing services.
        </p>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqData.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={index} className="w-full">
                {/* Question Button */}
                <button
                  onClick={() => toggleFaq(index)}
                  className={`w-full flex justify-between items-center p-6 bg-gray-900/50 border border-white/10 ${
                    isOpen ? 'rounded-t-lg' : 'rounded-lg'
                  } hover:bg-gray-800/60 transition-all duration-200`}
                >
                  <span className="font-medium text-left text-lg">
                    {item.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                
                {/* Answer Panel */}
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? 'max-h-[500px]' : 'max-h-0'
                  }`}
                >
                  <div className="p-6 text-left text-gray-300 bg-gray-900/50 border border-t-0 border-white/10 rounded-b-lg">
                    {item.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}