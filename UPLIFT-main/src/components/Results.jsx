// import { ArrowRight } from 'lucide-react';

// const stats = [
//   {
//     value: '7M+ Views',
//     label: 'And 5000+ Organic Leads generated for our client.',
//   },
//   {
//     value: '4k to 12.6k',
//     label: 'Grew a client\'s follower count in just one month.',
//   },
//   {
//     value: '13k Followers',
//     label: 'Helped a client gain 13k followers in one month.',
//   },
//   {
//     value: '1M Views',
//     label: 'Generated 1 million views from just 2 videos in one week.',
//   },
// ];

// export default function Results() {
//   return (
//     <section className="py-32 bg-black/50 backdrop-blur-sm">
//       <div className="max-w-7xl mx-auto px-8 text-center">
//         <h2 className="text-4xl md:text-5xl font-bold mb-16">
//           Results That Speak for Themselves
//         </h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
//           {stats.map((stat) => (
//             <div
//               key={stat.value}
//               className="bg-gray-900/50 border border-white/10 rounded-lg p-8"
//             >
//               <h3 className="text-5xl font-bold text-blue-400 mb-4">
//                 {stat.value}
//               </h3>
//               <p className="text-gray-400">{stat.label}</p>
//             </div>
//           ))}
//         </div>
//         <button className="group bg-transparent border border-white/20 hover:border-white/40 px-8 py-3 rounded-md font-medium transition-all flex items-center gap-2 mx-auto">
//           See Our Case Studies
//           <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
//         </button>
//       </div>
//     </section>
//   );
// }
import { ArrowRight } from 'lucide-react';

const stats = [
  {
    value: '7M+ Views',
    label: 'And 5000+ Organic Leads generated for our client.',
  },
  {
    value: '4k to 12.6k',
    label: 'Grew a client\'s follower count in just one month.',
  },
  {
    value: '13k Followers',
    label: 'Helped a client gain 13k followers in one month.',
  },
  {
    value: '1M Views',
    label: 'Generated 1 million views from just 2 videos in one week.',
  },
];

export default function Results({ id }) {
  return (
    <section id={id} className="py-32 bg-black/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-16">
          Results That Speak for Themselves
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat) => (
            <div
              key={stat.value}
              className="bg-gray-900/50 border border-white/10 rounded-lg p-8"
            >
              <h3 className="text-5xl font-bold text-blue-400 mb-4">
                {stat.value}
              </h3>
              <p className="text-gray-400">{stat.label}</p>
            </div>
          ))}
        </div>
        <button 
          // Updated to scroll to contact section
          onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })} 
          className="group bg-transparent border border-white/20 hover:border-white/40 px-8 py-3 rounded-md font-medium transition-all flex items-center gap-2 mx-auto"
        >
          See Our Case Studies
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </section>
  );
}
