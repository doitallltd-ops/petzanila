import { motion } from 'motion/react';
import { Star, Quote, Instagram, Twitter, MessageSquare } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Jenkins',
    pet: 'Max (Golden Retriever)',
    text: 'PETZANIA is truly a second home for Max. He gets so excited every time we pull up to the driveway. The staff is incredibly caring and the photo updates give me such peace of mind.',
    rating: 5,
    platform: 'Google Reviews',
    img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop'
  },
  {
    name: 'Vikram Singh',
    pet: 'Bella (Beagle)',
    text: 'I was nervous about leaving Bella for two weeks, but PETZANIA handled everything perfectly. Her grooming session was the best she’s ever had. Highly recommend their boarding services!',
    rating: 5,
    platform: 'Instagram',
    img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop'
  },
  {
    name: 'Ananya Rao',
    pet: 'Coco (Shih Tzu)',
    text: 'The day care service is a lifesaver. Coco is much more social and calm now. The facility is spotless and the staff clearly loves what they do.',
    rating: 5,
    platform: 'Facebook',
    img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop'
  },
  {
    name: 'Michael Chen',
    pet: 'Luna (Husky)',
    text: 'Best pet boarding in Mumbai. Luna has a lot of energy and they make sure she gets plenty of exercise. The 24/7 monitoring is a great feature.',
    rating: 4,
    platform: 'Google Reviews',
    img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop'
  }
];

export default function Testimonials() {
  return (
    <div className="pt-24 bg-slate-50 min-h-screen">
      <section className="py-24 max-w-7xl mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h1 className="text-5xl mb-4">Client Testimonials</h1>
          <p className="text-slate-600">Hear from our happy pet parents about their experiences at PETZANIA.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-24">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100 relative"
            >
              <Quote className="absolute top-8 right-8 text-slate-100" size={64} />
              <div className="flex gap-1 mb-6">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} size={20} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-xl text-slate-700 mb-8 leading-relaxed italic">
                "{t.text}"
              </p>
              <div className="flex items-center gap-4">
                <img src={t.img} alt={t.name} className="w-16 h-16 rounded-full object-cover shadow-md" referrerPolicy="no-referrer" />
                <div>
                  <h4 className="font-bold text-lg">{t.name}</h4>
                  <p className="text-sm text-slate-500">Parent of {t.pet}</p>
                  <span className="text-xs font-bold text-brand-600 uppercase tracking-wider">{t.platform}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Submit Review */}
        <div className="bg-brand-900 rounded-[3rem] p-12 md:p-20 text-center text-white relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
            <div className="absolute top-10 left-10"><MessageSquare size={120} /></div>
            <div className="absolute bottom-10 right-10"><Instagram size={120} /></div>
          </div>
          
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-4xl mb-6">Share Your Experience</h2>
            <p className="text-brand-100 mb-10 text-lg">
              We love hearing from our community! Your feedback helps us grow and continue providing the best care for your pets.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-white text-brand-900 px-8 py-4 rounded-full font-bold hover:bg-brand-50 transition-all flex items-center gap-2">
                <Instagram size={20} /> Tag us on Instagram
              </button>
              <button className="bg-brand-600 text-white px-8 py-4 rounded-full font-bold hover:bg-brand-700 transition-all flex items-center gap-2">
                <MessageSquare size={20} /> Write a Review
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
