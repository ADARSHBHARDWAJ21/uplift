// import { ArrowRight } from 'lucide-react';
// import AnimatedRing from './AnimatedRing';

// export default function Hero() {
//   return (
//     <main className="relative z-10 flex flex-col items-center justify-center min-h-[calc(100vh-100px)] px-4 pt-16 pb-32">
//       <div className="absolute inset-0">
//         <div className="stars"></div>
//       </div>

//       <AnimatedRing />

//       <div className="text-center max-w-5xl mx-auto space-y-8">
//         <div className="border-2 border-blue-500 rounded-lg p-12 bg-black/50 backdrop-blur-sm">
//           <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6 uppercase">
//             WE TURN CREATIVITY INTO<br />BUSINESS GROWTH
//           </h1>
//         </div>

//         <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto">
//           At Uplift Advertising Agency, we empower businesses of all sizes with
//           the tools and strategies needed to thrive online
//         </p>

//         <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
//           <button className="group bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-md font-medium transition-all flex items-center gap-2">
//             Let's Work Together
//             <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
//           </button>
//           <button className="bg-transparent border border-white/20 hover:border-white/40 px-8 py-3 rounded-md font-medium transition-all">
//             View All Services
//           </button>
//         </div>
//       </div>
//     </main>
//   );
// }
// import { ArrowRight } from 'lucide-react';
// import AnimatedRing from './AnimatedRing';

// export default function Hero() {
//   return (
//     <main 
//       id="home" // Added ID for Navigation
//       className="relative z-10 flex flex-col items-center justify-center min-h-[calc(100vh-100px)] px-4 pt-16 pb-32"
//     >
//       <div className="absolute inset-0">
//         <div className="stars"></div>
//       </div>

//       <AnimatedRing />

//       <div className="text-center max-w-5xl mx-auto space-y-8">
//         <div className="border-2 border-blue-500 rounded-lg p-12 bg-black/50 backdrop-blur-sm">
//           <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6 uppercase">
//             WE TURN CREATIVITY INTO<br />BUSINESS GROWTH
//           </h1>
//         </div>

//         <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto">
//           At Uplift Advertising Agency, we empower businesses of all sizes with
//           the tools and strategies needed to thrive online
//         </p>

//         <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
//           <button 
//             // Updated to scroll to contact section
//             onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })} 
//             className="group bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-md font-medium transition-all flex items-center gap-2"
//           >
//             Let's Work Together
//             <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
//           </button>
//           <button 
//             // Updated to scroll to services section
//             onClick={() => document.getElementById('services').scrollIntoView({ behavior: 'smooth' })} 
//             className="bg-transparent border border-white/20 hover:border-white/40 px-8 py-3 rounded-md font-medium transition-all"
//           >
//             View All Services
//           </button>
//         </div>
//       </div>
//     </main>
//   );
// }
import { ArrowRight } from 'lucide-react';
import AnimatedRing from './AnimatedRing';

export default function Hero() {
  return (
    <main 
      id="home" // Added ID for Navigation
      className="relative z-10 flex flex-col items-center justify-center min-h-[calc(100vh-100px)] px-4 pt-16 pb-32"
    >
      <div className="absolute inset-0">
        <div className="stars"></div>
      </div>

      <AnimatedRing />

      <div className="text-center max-w-5xl mx-auto space-y-8">
        <div className="border-2 border-indigo-500 rounded-lg p-12 bg-black/50 backdrop-blur-sm">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6 uppercase">
            WE TURN CREATIVITY INTO<br />BUSINESS GROWTH
          </h1>
        </div>

        <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto">
          At Uplift Advertising Agency, we empower businesses of all sizes with
          the tools and strategies needed to thrive online
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <button 
            // Updated to scroll to contact section
            onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })} 
            className="group bg-indigo-600 hover:bg-indigo-700 px-8 py-3 rounded-md font-medium transition-all flex items-center gap-2"
          >
            Let's Work Together
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
          <button 
            // Updated to scroll to services section
            onClick={() => document.getElementById('services').scrollIntoView({ behavior: 'smooth' })} 
            className="bg-transparent border border-white/20 hover:border-white/40 px-8 py-3 rounded-md font-medium transition-all"
          >
            View All Services
          </button>
        </div>
      </div>
    </main>
  );
}