import { motion } from 'motion/react';
import { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const images = [
  { url: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?q=80&w=2069&auto=format&fit=crop', title: 'Playful Puppies' },
  { url: 'https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?q=80&w=2071&auto=format&fit=crop', title: 'Care Session' },
  { url: 'https://images.unsplash.com/photo-1541599540903-216a46ca1ad0?q=80&w=2071&auto=format&fit=crop', title: 'Sleeping Area' },
  { url: 'https://images.unsplash.com/photo-1534361960057-19889db9621e?q=80&w=2070&auto=format&fit=crop', title: 'Outdoor Fun' },
  { url: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?q=80&w=2069&auto=format&fit=crop', title: 'Grooming Day' },
  { url: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?q=80&w=1964&auto=format&fit=crop', title: 'Training Time' },
  { url: 'https://images.unsplash.com/photo-1552053831-71594a27632d?q=80&w=1924&auto=format&fit=crop', title: 'Happy Golden' },
  { url: 'https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?q=80&w=1988&auto=format&fit=crop', title: 'Small Breeds Corner' },
];

export default function Gallery() {
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);

  const next = () => setSelectedIdx((prev) => (prev === null ? null : (prev + 1) % images.length));
  const prev = () => setSelectedIdx((prev) => (prev === null ? null : (prev - 1 + images.length) % images.length));

  return (
    <div className="pt-24 min-h-screen bg-slate-50">
      <section className="py-24 max-w-7xl mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h1 className="text-5xl mb-4">Our Gallery</h1>
          <p className="text-slate-600">Take a look at our facilities and the happy pets that stay with us.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((img, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="aspect-square rounded-2xl overflow-hidden cursor-pointer shadow-md group relative"
              onClick={() => setSelectedIdx(i)}
            >
              <img
                src={img.url}
                alt={img.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="text-white font-bold">{img.title}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Lightbox */}
      {selectedIdx !== null && (
        <div className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4">
          <button
            className="absolute top-6 right-6 text-white/70 hover:text-white p-2"
            onClick={() => setSelectedIdx(null)}
          >
            <X size={32} />
          </button>
          
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white p-2"
            onClick={prev}
          >
            <ChevronLeft size={48} />
          </button>

          <div className="max-w-5xl w-full max-h-[80vh] flex flex-col items-center">
            <img
              src={images[selectedIdx].url}
              alt={images[selectedIdx].title}
              className="w-full h-full object-contain rounded-lg"
              referrerPolicy="no-referrer"
            />
            <p className="text-white mt-6 text-xl font-bold">{images[selectedIdx].title}</p>
          </div>

          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white p-2"
            onClick={next}
          >
            <ChevronRight size={48} />
          </button>
        </div>
      )}
    </div>
  );
}
