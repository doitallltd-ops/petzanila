import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Send, MessageSquare, Instagram, Facebook, Twitter } from 'lucide-react';

export default function Contact() {
  return (
    <div className="pt-24 min-h-screen bg-slate-50">
      <section className="py-24 max-w-7xl mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h1 className="text-5xl mb-4">Contact Us</h1>
          <p className="text-slate-600">Have questions? We'd love to hear from you. Send us a message or visit our facility.</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-8">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
              <h3 className="text-2xl mb-8">Get in Touch</h3>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="bg-brand-50 p-3 rounded-xl text-brand-600 shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 mb-1">Phone Number</p>
                    <p className="font-bold text-lg">080975 85008</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="bg-nature-50 p-3 rounded-xl text-nature-600 shrink-0">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 mb-1">Email Address</p>
                    <p className="font-bold text-lg">hello@petzania.com</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="bg-earth-50 p-3 rounded-xl text-earth-600 shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 mb-1">Our Location</p>
                    <p className="font-bold">Vaibhav Industrial Estate, Punjawadi, Deonar, Chembur, Mumbai</p>
                  </div>
                </div>
              </div>

              <div className="mt-12 pt-8 border-t border-slate-100">
                <p className="font-bold mb-4">Follow Us</p>
                <div className="flex gap-3">
                  <a href="#" className="p-3 bg-slate-50 rounded-xl text-slate-600 hover:bg-brand-600 hover:text-white transition-all">
                    <Instagram size={20} />
                  </a>
                  <a href="#" className="p-3 bg-slate-50 rounded-xl text-slate-600 hover:bg-brand-600 hover:text-white transition-all">
                    <Facebook size={20} />
                  </a>
                  <a href="#" className="p-3 bg-slate-50 rounded-xl text-slate-600 hover:bg-brand-600 hover:text-white transition-all">
                    <Twitter size={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100">
              <h3 className="text-2xl mb-8">Send a Message</h3>
              <form className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Full Name</label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border-transparent focus:bg-white focus:ring-2 focus:ring-brand-500 outline-none transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Email Address</label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border-transparent focus:bg-white focus:ring-2 focus:ring-brand-500 outline-none transition-all"
                  />
                </div>
                <div className="sm:col-span-2 space-y-2">
                  <label className="text-sm font-bold text-slate-700">Subject</label>
                  <input
                    type="text"
                    placeholder="How can we help?"
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border-transparent focus:bg-white focus:ring-2 focus:ring-brand-500 outline-none transition-all"
                  />
                </div>
                <div className="sm:col-span-2 space-y-2">
                  <label className="text-sm font-bold text-slate-700">Your Message</label>
                  <textarea
                    rows={5}
                    placeholder="Tell us more about your needs..."
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border-transparent focus:bg-white focus:ring-2 focus:ring-brand-500 outline-none transition-all resize-none"
                  ></textarea>
                </div>
                <div className="sm:col-span-2">
                  <button className="w-full bg-brand-600 text-white py-4 rounded-xl font-bold hover:bg-brand-700 transition-all flex items-center justify-center gap-2 shadow-lg shadow-brand-200">
                    <Send size={20} /> Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Map Integration */}
        <div className="mt-12 rounded-3xl overflow-hidden h-96 shadow-lg border border-slate-100">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.2123456789!2d72.906789!3d19.056789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c60000000001%3A0x0!2sVaibhav%20Industrial%20Estate!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
    </div>
  );
}
