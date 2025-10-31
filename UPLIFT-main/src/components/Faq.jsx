/* eslint-disable react/prop-types */
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqItems = [
  {
    question: 'How can Uplift Advertising Agency help my business?',
    answer:
      'We specialize in comprehensive digital marketing strategies, including social media management, content creation, paid advertising (Google & Meta Ads), and web development. Our goal is to boost your online presence, generate leads, and drive measurable business growth.',
  },
  {
    question: 'What kind of results can I expect?',
    answer:
      'Our clients typically see significant increases in views, follower counts, engagement, and organic leads. We focus on data-driven strategies to ensure a strong return on investment for your marketing spend. Check out our "Results" and "Case Studies" sections for specific examples!',
  },
  {
    question: 'Do you work with businesses of all sizes?',
    answer:
      'Yes, we tailor our strategies to fit the unique needs and budgets of businesses ranging from startups to established enterprises. We believe every business deserves a powerful online presence.',
  },
  {
    question: 'How do you create content (videos & graphics)?',
    answer:
      'We have a dedicated creative team that produces high-quality, engaging video content, graphic designs, and user-generated content (UGC). Our content is designed to resonate with your target audience and align with your brand\'s voice.',
  },
  {
    question: 'What is your process for starting a new project?',
    answer:
      'Our process involves four key steps: Discovery & Strategy, Content & Ad Creation, Execution & Launch, and Continuous Optimization. We start by understanding your goals, then craft a custom strategy, execute the plan, and continuously refine it for the best results.',
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
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          We've Got the Answers
          <br />
          You're Looking For
        </h2>
        <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-16">
          Quick answers to your digital marketing questions.
        </p>

        {/* FAQ Container with the violet effect */}
        <div className="relative overflow-hidden rounded-lg bg-black p-4 md:p-8 border border-white/10">
          
          {/* Violet radial gradient overlay from the middle */}
          <div 
            className="absolute inset-0" 
            style={{ 
              background: 'radial-gradient(ellipse at center, rgba(126, 34, 206, 0.25) 0%, transparent 70%)' 
            }}
          ></div>
          
          {/* Content container to stack on top of the gradient */}
          <div className="relative z-10 space-y-4">
            {faqItems.map((item, index) => (
              <div
                key={index}
                className="bg-gray-900/50 border border-white/10 rounded-lg overflow-hidden"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="flex justify-between items-center w-full px-6 py-4 text-left font-medium text-lg focus:outline-none"
                >
                  {item.question}
                  <ChevronDown
                    className={`w-5 h-5 transition-transform duration-300 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {openIndex === index && (
                  <div className="px-6 pb-4 text-gray-300 text-base">
                    {item.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}