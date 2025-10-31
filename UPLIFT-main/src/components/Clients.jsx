import { Star } from 'lucide-react';

const clients = [
  {
    name: 'Tradex Markets',
    logoUrl: 'https://fakeimg.pl/120x60/2563eb/ffffff?text=TRADE+X&font=montserrat',
  },
  {
    name: 'Jhumaa Dutta',
    logoUrl: 'https://fakeimg.pl/120x60/1e3a8a/ffffff?text=J+D&font=roboto',
  },
  {
    name: 'Vihana Arya',
    logoUrl: 'https://fakeimg.pl/120x60/60a5fa/000000?text=VIHANA&font=museo',
  },
  {
    name: 'Manoj Adwani',
    logoUrl: 'https://fakeimg.pl/120x60/1d4ed8/ffffff?text=ADWANI&font=montserrat',
  },
  {
    name: 'Taste Great',
    logoUrl: 'https://fakeimg.pl/120x60/3b82f6/ffffff?text=T.G.&font=roboto',
  },
  {
    name: 'Global Corp',
    logoUrl: 'https://fakeimg.pl/120x60/9333ea/ffffff?text=GLOBAL&font=arial',
  },
  {
    name: 'Future Tech',
    logoUrl: 'https://fakeimg.pl/120x60/7e22ce/ffffff?text=F+TECH&font=arial',
  },
  {
    name: 'Peak Fitness',
    logoUrl: 'https://fakeimg.pl/120x60/4c1d95/ffffff?text=PEAK+F&font=montserrat',
  },
];

export default function Clients() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-8">
        <h2 className="text-center text-3xl font-bold mb-12">
          Clients We've Helped Grow
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {clients.map((client) => (
            <div
              key={client.name}
              className="bg-gray-900/50 border border-white/10 rounded-lg p-6 text-center space-y-3 flex flex-col items-center justify-center transition-all duration-300 hover:border-blue-500/50 hover:bg-gray-800/60"
            >
              <div className="flex items-center gap-1 text-yellow-400">
                <Star className="w-4 h-4 fill-yellow-400" />
                <Star className="w-4 h-4 fill-yellow-400" />
                <Star className="w-4 h-4 fill-yellow-400" />
                <Star className="w-4 h-4 fill-yellow-400" />
                <Star className="w-4 h-4 fill-yellow-400" />
              </div>
              <img
                src={client.logoUrl}
                alt={`${client.name} Logo`}
                className="w-full h-auto max-h-12 object-contain"
                // Tailwind utility classes for dark background images
                style={{ filter: 'grayscale(10%) brightness(1.2)' }}
              />
              <span className="text-sm font-medium text-gray-300">
                {client.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}