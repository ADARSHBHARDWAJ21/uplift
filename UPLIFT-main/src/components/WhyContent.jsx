// import { Check } from 'lucide-react';

// const benefits = [
//   'Build Authority and Credibility',
//   'Generate Leads and Sales',
//   'Foster Community and Engagement',
//   'Showcase Your Personality and Values',
// ];

// export default function WhyContent() {
//   return (
//     <section className="py-32">
//       <div className="max-w-4xl mx-auto px-8 text-center">
//         <h2 className="text-4xl md:text-5xl font-bold mb-16">
//           Why Your Business Needs to Create Content Online
//         </h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           {benefits.map((benefit) => (
//             <div key={benefit} className="flex items-center gap-4 p-4">
//               <Check className="w-6 h-6 text-blue-500 flex-shrink-0" />
//               <span className="text-lg text-gray-200 text-left">
//                 {benefit}
//               </span>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
import { Check } from 'lucide-react';

const benefits = [
  'Build Authority and Credibility',
  'Generate Leads and Sales',
  'Foster Community and Engagement',
  'Showcase Your Personality and Values',
];

export default function WhyContent({ id }) {
  return (
    <section id={id} className="py-32">
      <div className="max-w-4xl mx-auto px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-16">
          Why Your Business Needs to Create Content Online
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {benefits.map((benefit) => (
            <div key={benefit} className="flex items-center gap-4 p-4">
              <Check className="w-6 h-6 text-blue-500 flex-shrink-0" />
              <span className="text-lg text-gray-200 text-left">
                {benefit}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
