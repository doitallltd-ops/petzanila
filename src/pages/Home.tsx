import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Heart, Clock, Star } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-screen min-h-[700px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?q=80&w=2069&auto=format&fit=crop"
            alt="Happy dogs playing"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-slate-900/40 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 w-full">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <span className="inline-block px-4 py-1.5 bg-brand-500 text-white rounded-full text-sm font-bold mb-6">
              Welcome to PETZANIA
            </span>
            <h1 className="text-5xl md:text-7xl text-white mb-6 leading-[1.1]">
              Your pet’s <span className="text-brand-400">second home</span> – Quality care and love!
            </h1>
            <p className="text-xl text-slate-200 mb-10 leading-relaxed max-w-lg">
              Providing a safe, fun, and loving environment for your furry friends while you're away. Professional care you can trust.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/book"
                className="bg-brand-600 text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-brand-700 transition-all flex items-center gap-2 shadow-xl shadow-brand-900/20"
              >
                Book a Stay <ArrowRight size={20} />
              </Link>
              <Link
                to="/services"
                className="bg-white text-slate-900 px-8 py-4 rounded-full text-lg font-bold hover:bg-slate-100 transition-all"
              >
                Our Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?q=80&w=2071&auto=format&fit=crop"
                  alt="Dog being cared for"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 bg-nature-500 text-white p-8 rounded-3xl shadow-xl hidden md:block">
                <p className="text-4xl font-bold mb-1">10+</p>
                <p className="font-medium opacity-90">Years of Experience</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="text-4xl mb-6">Why Choose PETZANIA?</h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                At PETZANIA, we believe every pet deserves a vacation as good as yours. Our facility in Mumbai is designed with your pet's comfort and safety as our top priority. We're not just a boarding facility; we're a community of pet lovers dedicated to providing the highest standard of care.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  { icon: Shield, title: 'Safe & Secure', desc: '24/7 monitoring and secure facilities.' },
                  { icon: Heart, title: 'Loving Care', desc: 'Personalized attention for every pet.' },
                  { icon: Clock, title: 'Flexible Hours', desc: 'Convenient drop-off and pick-up.' },
                  { icon: Star, title: 'Expert Staff', desc: 'Trained professionals who love animals.' },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="bg-brand-50 p-3 rounded-xl text-brand-600 shrink-0 h-fit">
                      <item.icon size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">{item.title}</h4>
                      <p className="text-sm text-slate-500">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Services Preview */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-4xl mb-4">Our Premium Services</h2>
            <p className="text-slate-600">Tailored care for every need, from long-term boarding to daily play sessions.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Dog Boarding',
                image: 'https://images.unsplash.com/photo-1541599540903-216a46ca1ad0?q=80&w=2071&auto=format&fit=crop',
                price: 'From ₹800/day'
              },
              {
                title: 'Day Care',
                image: 'https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?q=80&w=2071&auto=format&fit=crop',
                price: 'From ₹400/day'
              },
              {
                title: 'Grooming',
                image: 'https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?q=80&w=2071&auto=format&fit=crop',
                price: 'From ₹600/session'
              }
            ].map((service, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="bg-white rounded-3xl overflow-hidden shadow-lg border border-slate-100"
              >
                <div className="h-64 overflow-hidden">
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl mb-2">{service.title}</h3>
                  <p className="text-brand-600 font-bold mb-6">{service.price}</p>
                  <Link to="/services" className="text-slate-900 font-bold flex items-center gap-2 hover:text-brand-600 transition-colors">
                    Learn More <ArrowRight size={18} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
