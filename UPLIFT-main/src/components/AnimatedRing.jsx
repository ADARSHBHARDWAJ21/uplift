export default function AnimatedRing() {
  return (
    // We add `perspective` to the parent container to create a 3D "scene"
    <div
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
      style={{ perspective: '1000px' }}
    >
      <div
        className="relative w-[700px] h-[700px]"
        // This tells the children to render in 3D space
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Layer 1: Outer "Hollow Blob" (Violet) */}
        <div
          className="absolute inset-0 animate-tumble" // Use new 3D tumble animation
          style={{ transformStyle: 'preserve-3d' }} // Apply to each rotating layer
        >
          <div
            className="absolute inset-0 rounded-full opacity-70 blur-3xl"
            style={{
              // This creates the "ring" shape with a hollow/transparent center
              backgroundImage:
                'radial-gradient(circle, transparent 30%, #8b5cf6 55%, transparent 70%)',
            }}
          />
        </div>

        {/* Layer 2: Inner "Hollow Blob" (Purple) - rotates in reverse */}
        <div
          className="absolute inset-32 animate-tumble-reverse" // Use reverse 3D tumble
          style={{ transformStyle: 'preserve-3d' }} // Apply to each rotating layer
        >
          <div
            className="absolute inset-0 rounded-full opacity-60 blur-3xl"
            style={{
              // This creates the "ring" shape with a hollow/transparent center
              backgroundImage:
                'radial-gradient(circle, transparent 30%, #c084fc 55%, transparent 70%)',
            }}
          />
        </div>

        {/* Layer 3: Faint Central "Core" (Violet) */}
        <div
          className="absolute inset-16 animate-tumble" // Use 3D tumble
          style={{
            transformStyle: 'preserve-3d', // Apply to each rotating layer
            animationDuration: '40s', // Make this layer tumble slower
          }}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-gradient-radial from-violet-600/10 to-transparent blur-2xl"></div>
        </div>
      </div>
    </div>
  );
}