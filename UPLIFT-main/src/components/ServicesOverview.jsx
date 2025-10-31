import { ArrowRight, BarChart3, Bot, Megaphone, MonitorPlay } from 'lucide-react';

const services = [
  {
    icon: <Megaphone className="w-8 h-8 text-white" />,
    title: 'Social Media Management',
    description: 'Profile optimization, content calendars, and community engagement.',
  },
  {
    icon: <MonitorPlay className="w-8 h-8 text-white" />,
    title: 'Content Creation (Video & Graphics)',
    description: 'Engaging video creation, graphic design, UGC content, and more.',
  },
  {
    icon: <Bot className="w-8 h-8 text-white" />,
    title: 'Google and Meta Ads',
    description: 'Targeted paid advertising campaigns to reach specific audiences.',
  },
  {
    icon: <BarChart3 className="w-8 h-8 text-white" />,
    title: 'Web Development',
    description: 'Creating professional, modern websites for businesses.',
  },
];

export default function ServicesOverview({ id }) {
  return (
    <section id={id} className="py-32">
      <div className="max-w-7xl mx-auto px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-16">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {services.map((service) => (
            <div
              key={service.title}
              className="relative overflow-hidden bg-black border border-white/10 rounded-lg p-8 text-left"
            >
              {/* Violet glow effect from top-right and bottom-left */}
              <div 
                className="absolute inset-0" 
                style={{ 
                  background: 'radial-gradient(ellipse at top right, rgba(126, 34, 206, 0.2) 0%, transparent 70%), radial-gradient(ellipse at bottom left, rgba(126, 34, 206, 0.2) 0%, transparent 70%)' 
                }}
              ></div>

              {/* Content container stacked on top */}
              <div className="relative z-10 space-y-4">
                <div className="p-3 bg-indigo-900/30 w-fit rounded-lg">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold">{service.title}</h3>
                <p className="text-gray-400">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
        <button 
          // Updated to scroll to contact section
          onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })} 
          // UPDATED: Button color changed to violet
          className="group bg-violet-600 hover:bg-violet-700 px-8 py-3 rounded-md font-medium transition-all flex items-center gap-2 mx-auto"
        >
          View All Services
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </section>
  );
}