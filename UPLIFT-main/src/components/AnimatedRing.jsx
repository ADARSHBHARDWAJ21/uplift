// export default function AnimatedRing() {
//   return (
//     // We removed the `perspective` style to flatten the animation to 2D
//     <div
//       className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
//     >
//       <div
//         className="relative w-[700px] h-[700px]"
//         // We removed `transformStyle: 'preserve-d'`
//       >
//         {/* Layer 1: Outer "Hollow Blob" (Violet) - Rotates Anti-Clockwise */}
//         <div
//           className="absolute inset-0 animate-rotate-reverse" // UPDATED
//           // We removed `transformStyle: 'preserve-3d'`
//         >
//           <div
//             className="absolute inset-0 rounded-full opacity-70 blur-3xl"
//             style={{
//               backgroundImage:
//                 'radial-gradient(circle, transparent 30%, #8b5cf6 55%, transparent 70%)',
//             }}
//           />
//         </div>

//         {/* Layer 2: Inner "Hollow Blob" (Pink/Fuchsia) - Rotates Clockwise */}
//         <div
//           className="absolute inset-32 animate-rotate" // UPDATED
//           // We removed `transformStyle: 'preserve-3d'`
//         >
//           <div
//             className="absolute inset-0 rounded-full opacity-60 blur-3xl"
//             style={{
//               // UPDATED: Color changed from #c084fc to a pink/fuchsia shade
//               backgroundImage:
//                 'radial-gradient(circle, transparent 30%, #e879f9 55%, transparent 70%)',
//             }}
//           />
//         </div>

//         {/* Layer 3: Faint Central "Core" (Violet) - Rotates Clockwise */}
//         <div
//           className="absolute inset-16 animate-rotate" // UPDATED
//           style={{
//             // We removed `transformStyle: 'preserve-3d'`
//             animationDuration: '40s', // Make this layer rotate slower
//           }}
//         >
//           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-gradient-radial from-violet-600/10 to-transparent blur-2xl"></div>
//         </div>
//       </div>
//     </div>
//   );
// }
export default function AnimatedRing() {
  return (
    <div
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
    >
      <div
        className="relative w-[700px] h-[700px]"
      >
        {/* Layer 1: Violet (Clockwise) - Using 'animate-rotate' */}
        <div
          className="absolute inset-0 animate-rotate"
        >
          <div
            className="absolute inset-0 rounded-full opacity-70 blur-3xl"
            style={{
              // UPDATED: Made the gradient stops much narrower for a "C" shape
              backgroundImage:
                'conic-gradient(from 90deg, transparent 0%, transparent 20%, #8b5cf6 25%, transparent 30%, transparent 70%, #8b5cf6 75%, transparent 80%, transparent 100%)',
            }}
          />
        </div>

        {/* Layer 2: Pink (Anti-Clockwise) - Using 'animate-rotate-reverse' */}
        <div
          className="absolute inset-0 animate-rotate-reverse"
        >
          <div
            className="absolute inset-0 rounded-full opacity-60 blur-3xl"
            style={{
              // UPDATED: Made the gradient stops much narrower for a "C" shape
              backgroundImage:
                'conic-gradient(from 90deg, transparent 0%, transparent 20%, #e879f9 25%, transparent 30%, transparent 70%, #e879f9 75%, transparent 80%, transparent 100%)',
            }}
          />
        </div>

      </div>
    </div>
  );
}