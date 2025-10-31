// import { ArrowRight, BarChart3, Bot, Megaphone, MonitorPlay } from 'lucide-react';

// const services = [
//   {
//     icon: <Megaphone className="w-8 h-8 text-blue-400" />,
//     title: 'Social Media Management',
//     description: 'Profile optimization, content calendars, and community engagement.',
//   },
//   {
//     icon: <MonitorPlay className="w-8 h-8 text-blue-400" />,
//     title: 'Content Creation (Video & Graphics)',
//     description: 'Engaging video creation, graphic design, UGC content, and more.',
//   },
//   {
//     icon: <Bot className="w-8 h-8 text-blue-400" />,
//     title: 'Google and Meta Ads',
//     description: 'Targeted paid advertising campaigns to reach specific audiences.',
//   },
//   {
//     icon: <BarChart3 className="w-8 h-8 text-blue-400" />,
//     title: 'Web Development',
//     description: 'Creating professional, modern websites for businesses.',
//   },
// ];

// export default function ServicesOverview() {
//   return (
//     <section className="py-32">
//       <div className="max-w-7xl mx-auto px-8 text-center">
//         <h2 className="text-4xl md:text-5xl font-bold mb-16">Our Services</h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
//           {services.map((service) => (
//             <div
//               key={service.title}
//               className="bg-gray-900/50 border border-white/10 rounded-lg p-8 text-left space-y-4"
//             >
//               <div className="p-3 bg-blue-900/30 w-fit rounded-lg">
//                 {service.icon}
//               </div>
//               <h3 className="text-xl font-bold">{service.title}</h3>
//               <p className="text-gray-400">{service.description}</p>
//             </div>
//           ))}
//         </div>
//         <button className="group bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-md font-medium transition-all flex items-center gap-2 mx-auto">
//           View All Services
//           <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
//         </button>
//       </div>
//     </section>
//   );
// }
import { ArrowRight, BarChart3, Bot, Megaphone, MonitorPlay } from 'lucide-react';

const services = [
  {
    icon: <Megaphone className="w-8 h-8 text-blue-400" />,
    title: 'Social Media Management',
    description: 'Profile optimization, content calendars, and community engagement.',
  },
  {
    icon: <MonitorPlay className="w-8 h-8 text-blue-400" />,
    title: 'Content Creation (Video & Graphics)',
    description: 'Engaging video creation, graphic design, UGC content, and more.',
  },
  {
    icon: <Bot className="w-8 h-8 text-blue-400" />,
    title: 'Google and Meta Ads',
    description: 'Targeted paid advertising campaigns to reach specific audiences.',
  },
  {
    icon: <BarChart3 className="w-8 h-8 text-blue-400" />,
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
              className="bg-gray-900/50 border border-white/10 rounded-lg p-8 text-left space-y-4"
            >
              <div className="p-3 bg-blue-900/30 w-fit rounded-lg">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold">{service.title}</h3>
              <p className="text-gray-400">{service.description}</p>
            </div>
          ))}
        </div>
        <button 
          // Updated to scroll to contact section
          onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })} 
          className="group bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-md font-medium transition-all flex items-center gap-2 mx-auto"
        >
          View All Services
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </section>
  );
}