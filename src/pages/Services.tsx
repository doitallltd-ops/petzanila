import { motion } from 'motion/react';
import { Home, Sun, Sparkles, Check, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    id: 'boarding',
    title: 'Dog Boarding',
    icon: Home,
    desc: 'Safe and comfortable overnight stays in our climate-controlled facility. Includes regular exercise, feeding, and lots of cuddles.',
    features: ['Climate-controlled suites', '24/7 supervision', 'Daily exercise sessions', 'Premium nutrition'],
    price: '₹800',
    unit: 'per night',
    image: 'https://images.unsplash.com/photo-1541599540903-216a46ca1ad0?q=80&w=2071&auto=format&fit=crop'
  },
  {
    id: 'daycare',
    title: 'Day Care Services',
    icon: Sun,
    desc: 'The perfect solution for busy pet parents. Your dog will enjoy a day full of socialization, play, and mental stimulation.',
    features: ['Supervised group play', 'Nap time in quiet zones', 'Socialization training', 'Regular updates & photos'],
    price: '₹400',
    unit: 'per day',
    image: 'https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?q=80&w=2071&auto=format&fit=crop'
  },
  {
    id: 'aftercare',
    title: 'Aftercare & Grooming',
    icon: Sparkles,
    desc: 'Professional grooming and post-stay health checks to ensure your pet returns home looking and feeling their absolute best.',
    features: ['Full bath & blow dry', 'Nail trimming & ear cleaning', 'Health & wellness checks', 'De-shedding treatments'],
    price: '₹600',
    unit: 'per session',
    image: 'https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?q=80&w=2071&auto=format&fit=crop'
  }
];

export default function Services() {
  return (
    <div className="pt-24">
      {/* Header */}
      <section className="bg-nature-900 py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1583337130417-3346a1be7dee?q=80&w=1964&auto=format&fit=crop"
            alt="Background"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl text-white mb-6"
          >
            Our Services
          </motion.h1>
          <p className="text-xl text-nature-100 max-w-2xl mx-auto leading-relaxed">
            From overnight boarding to professional grooming, we offer a full suite of services tailored to your pet's needs.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 space-y-24">
          {services.map((service, i) => (
            <div key={service.id} className={`grid lg:grid-cols-2 gap-16 items-center ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              <motion.div
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className={i % 2 === 1 ? 'lg:order-2' : ''}
              >
                <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: i % 2 === 0 ? 30 : -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className={i % 2 === 1 ? 'lg:order-1' : ''}
              >
                <div className="inline-flex p-3 bg-brand-50 text-brand-600 rounded-2xl mb-6">
                  <service.icon size={32} />
                </div>
                <h2 className="text-4xl mb-6">{service.title}</h2>
                <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                  {service.desc}
                </p>
                <ul className="grid sm:grid-cols-2 gap-4 mb-10">
                  {service.features.map((feature, j) => (
                    <li key={j} className="flex items-center gap-3 text-slate-700">
                      <div className="bg-nature-100 text-nature-600 p-1 rounded-full">
                        <Check size={14} />
                      </div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center gap-6">
                  <div className="text-3xl font-bold text-slate-900">
                    {service.price} <span className="text-lg font-normal text-slate-500">{service.unit}</span>
                  </div>
                  <Link
                    to="/book"
                    className="bg-brand-600 text-white px-8 py-3 rounded-full font-bold hover:bg-brand-700 transition-all flex items-center gap-2"
                  >
                    Book Now <ArrowRight size={18} />
                  </Link>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing Table */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-4xl mb-4">Transparent Pricing</h2>
            <p className="text-slate-600">Choose the plan that best fits your pet's needs and your schedule.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: 'Basic', price: '400', features: ['Day Care (8 hours)', 'Supervised Play', 'Basic Feeding', 'Daily Photo Update'] },
              { name: 'Standard', price: '800', features: ['Overnight Boarding', '3 Exercise Sessions', 'Premium Food', 'Health Monitoring', 'Daily Video Update'], featured: true },
              { name: 'Premium', price: '1,200', features: ['Overnight Boarding', 'Full Grooming Session', 'Individual Play Time', 'Behavioral Training', '24/7 Live Feed Access'] },
            ].map((plan, i) => (
              <div
                key={i}
                className={`bg-white p-10 rounded-3xl shadow-lg border-2 transition-transform hover:-translate-y-2 ${
                  plan.featured ? 'border-brand-500 scale-105 relative' : 'border-transparent'
                }`}
              >
                {plan.featured && (
                  <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-500 text-white px-4 py-1 rounded-full text-sm font-bold">
                    Most Popular
                  </span>
                )}
                <h3 className="text-2xl mb-2">{plan.name}</h3>
                <div className="text-4xl font-bold mb-8">
                  ₹{plan.price} <span className="text-lg font-normal text-slate-500">/day</span>
                </div>
                <ul className="space-y-4 mb-10">
                  {plan.features.map((f, j) => (
                    <li key={j} className="flex items-center gap-3 text-slate-600">
                      <Check size={18} className="text-nature-500 shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/book"
                  className={`w-full py-4 rounded-xl font-bold transition-colors block text-center ${
                    plan.featured ? 'bg-brand-600 text-white hover:bg-brand-700' : 'bg-slate-100 text-slate-900 hover:bg-slate-200'
                  }`}
                >
                  Choose {plan.name}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
