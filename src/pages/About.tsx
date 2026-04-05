import { motion } from 'motion/react';
import { CheckCircle2, Award, Users, Building2 } from 'lucide-react';

export default function About() {
  return (
    <div className="pt-24">
      {/* Header */}
      <section className="bg-brand-900 py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1534361960057-19889db9621e?q=80&w=2070&auto=format&fit=crop"
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
            About PETZANIA
          </motion.h1>
          <p className="text-xl text-brand-100 max-w-2xl mx-auto leading-relaxed">
            Founded on a passion for animals, we've built a sanctuary where pets are treated like family.
          </p>
        </div>
      </section>

      {/* Mission & Story */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl mb-6">Our Mission</h2>
                <p className="text-lg text-slate-600 leading-relaxed">
                  Our mission is to provide a safe, nurturing, and stimulating environment for pets while offering peace of mind to their owners. we strive to be the gold standard in pet care through continuous education, superior facilities, and unconditional love for every animal in our care.
                </p>
              </div>
              
              <div className="grid gap-6">
                {[
                  { icon: CheckCircle2, title: 'Professional Standards', desc: 'We adhere to the highest industry standards for pet safety and hygiene.' },
                  { icon: CheckCircle2, title: 'Personalized Care', desc: 'Every pet has unique needs, and we tailor our care to match them.' },
                  { icon: CheckCircle2, title: 'Community Focused', desc: 'We are proud to be a part of the Mumbai pet lover community.' },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="text-nature-500 shrink-0">
                      <item.icon size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">{item.title}</h4>
                      <p className="text-slate-500">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4 pt-12">
                <img
                  src="https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?q=80&w=2069&auto=format&fit=crop"
                  alt="Dog"
                  className="rounded-2xl shadow-lg"
                  referrerPolicy="no-referrer"
                />
                <img
                  src="https://images.unsplash.com/photo-1541599540903-216a46ca1ad0?q=80&w=2071&auto=format&fit=crop"
                  alt="Facility"
                  className="rounded-2xl shadow-lg"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="space-y-4">
                <img
                  src="https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?q=80&w=2071&auto=format&fit=crop"
                  alt="Staff"
                  className="rounded-2xl shadow-lg"
                  referrerPolicy="no-referrer"
                />
                <img
                  src="https://images.unsplash.com/photo-1583337130417-3346a1be7dee?q=80&w=1964&auto=format&fit=crop"
                  alt="Dog playing"
                  className="rounded-2xl shadow-lg"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats & Certs */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { icon: Users, label: 'Happy Clients', value: '2,500+' },
              { icon: Building2, label: 'Facilities', value: '3 Locations' },
              { icon: Award, label: 'Awards Won', value: '12' },
              { icon: CheckCircle2, label: 'Years Experience', value: '10+' },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100"
              >
                <div className="inline-flex p-3 bg-brand-50 text-brand-600 rounded-2xl mb-4">
                  <stat.icon size={32} />
                </div>
                <h3 className="text-3xl mb-1">{stat.value}</h3>
                <p className="text-slate-500 font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Staff Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-4xl mb-4">Meet Our Expert Team</h2>
            <p className="text-slate-600">Our team consists of certified trainers, groomers, and pet lovers who treat your pets as their own.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              { name: 'Rahul Sharma', role: 'Founder & Head Trainer', img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop' },
              { name: 'Priya Patel', role: 'Senior Groomer', img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop' },
              { name: 'Amit Verma', role: 'Veterinary Consultant', img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop' },
            ].map((member, i) => (
              <div key={i} className="text-center group">
                <div className="aspect-[4/5] rounded-3xl overflow-hidden mb-6 shadow-lg">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <h4 className="text-2xl mb-1">{member.name}</h4>
                <p className="text-brand-600 font-medium">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
