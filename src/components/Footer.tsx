import { Link } from 'react-router-dom';
import { Dog, Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
        {/* Brand */}
        <div className="space-y-6">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="bg-brand-500 p-2 rounded-xl text-white">
              <Dog size={24} />
            </div>
            <span className="font-display text-2xl font-bold tracking-tighter text-white">
              PETZANIA
            </span>
          </Link>
          <p className="text-slate-400 leading-relaxed">
            Your pet’s second home – Quality care and love for your furry friends. We provide a safe, fun, and loving environment for your pets.
          </p>
          <div className="flex gap-4">
            <a href="#" className="p-2 bg-slate-800 rounded-lg hover:bg-brand-600 hover:text-white transition-colors">
              <Facebook size={20} />
            </a>
            <a href="#" className="p-2 bg-slate-800 rounded-lg hover:bg-brand-600 hover:text-white transition-colors">
              <Instagram size={20} />
            </a>
            <a href="#" className="p-2 bg-slate-800 rounded-lg hover:bg-brand-600 hover:text-white transition-colors">
              <Twitter size={20} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-bold mb-6">Quick Links</h4>
          <ul className="space-y-4">
            <li><Link to="/about" className="hover:text-brand-400 transition-colors">About Us</Link></li>
            <li><Link to="/services" className="hover:text-brand-400 transition-colors">Our Services</Link></li>
            <li><Link to="/testimonials" className="hover:text-brand-400 transition-colors">Testimonials</Link></li>
            <li><Link to="/gallery" className="hover:text-brand-400 transition-colors">Gallery</Link></li>
            <li><Link to="/blog" className="hover:text-brand-400 transition-colors">Pet Care Blog</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-white font-bold mb-6">Contact Us</h4>
          <ul className="space-y-4">
            <li className="flex gap-3">
              <Phone size={20} className="text-brand-500 shrink-0" />
              <span>080975 85008</span>
            </li>
            <li className="flex gap-3">
              <Mail size={20} className="text-brand-500 shrink-0" />
              <span>hello@petzania.com</span>
            </li>
            <li className="flex gap-3">
              <MapPin size={20} className="text-brand-500 shrink-0" />
              <span>Vaibhav Industrial Estate, Deonar, Chembur, Mumbai</span>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="text-white font-bold mb-6">Newsletter</h4>
          <p className="text-sm text-slate-400 mb-4">Subscribe for pet care tips and special offers!</p>
          <form className="flex flex-col gap-2">
            <input
              type="email"
              placeholder="Your email address"
              className="bg-slate-800 border-none rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-brand-500 outline-none"
            />
            <button className="bg-brand-600 text-white font-bold py-3 rounded-lg hover:bg-brand-700 transition-colors">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
        <p>© 2024 PETZANIA. All rights reserved.</p>
        <div className="flex gap-6">
          <Link to="/privacy" className="hover:text-slate-300">Privacy Policy</Link>
          <Link to="/terms" className="hover:text-slate-300">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
