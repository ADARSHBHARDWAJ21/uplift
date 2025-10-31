
const processSteps = [
    {
      step: 'Step 1',
      title: 'Discovery & Strategy',
      description:
        'We assess your brand, goals, and target audience to identify the key strategies that will streamline workflows and improve efficiency.',
      imageUrl: 'https://source.unsplash.com/500x300/?strategy,whiteboard,meeting',
    },
    {
      step: 'Step 2',
      title: 'Content & Ad Creation',
      description:
        'Our team builds your marketing assets, from ad copy and video content to targeted audience personas, all tailored to your business.',
      imageUrl: 'https://source.unsplash.com/500x300/?design,code,laptop',
    },
    {
      step: 'Step 3',
      title: 'Execution & Launch',
      description:
        'We smoothly integrate the new campaigns into your existing infrastructure with minimal disruption, launching across all platforms.',
      imageUrl: 'https://source.unsplash.com/500x300/?rocket,launch,social,media',
    },
    {
      step: 'Step 4',
      title: 'Continuous Optimization',
      description:
        'We refine performance, analyze data, and enhance your campaigns for long-term growth, ensuring you always get the best ROI.',
      imageUrl: 'https://source.unsplash.com/500x300/?analytics,dashboard,data',
    },
  ];
  
  export default function Process() {
    return (
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-8">
          {/* Main Headline */}
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our Simple, Smart, and Scalable Process
            </h2>
            <p className="text-gray-300 text-lg md:text-xl">
              We design, develop, and implement marketing campaigns that help you
              work smarter, not harder.
            </p>
          </div>
  
          {/* Process Grid (2x2) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {processSteps.map((item) => (
              <div
                key={item.step}
                className="bg-gray-900/50 border border-white/10 rounded-lg p-8"
              >
                {/* Badge */}
                <span className="inline-block px-3 py-1 mb-4 text-sm font-medium text-gray-400 bg-gray-800/50 rounded-full border border-white/10">
                  {item.step}
                </span>
                
                {/* Title */}
                <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                
                {/* Description */}
                <p className="text-gray-400 mb-6">{item.description}</p>
                
                {/* Image */}
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="rounded-lg w-full h-[250px] object-cover shadow-lg"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }