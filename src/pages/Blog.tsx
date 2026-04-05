import { motion } from 'motion/react';
import { Calendar, User, ArrowRight, Search } from 'lucide-react';
import { Link } from 'react-router-dom';

const posts = [
  {
    id: 1,
    title: '5 Tips for First-Time Boarding',
    excerpt: 'Preparing your dog for their first overnight stay can be stressful. Here are 5 tips to make it a breeze...',
    category: 'Pet Care',
    date: 'March 28, 2024',
    author: 'Rahul Sharma',
    image: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?q=80&w=2069&auto=format&fit=crop'
  },
  {
    id: 2,
    title: 'Understanding Dog Body Language',
    excerpt: 'Is your dog happy or anxious? Learn to read the subtle signs your furry friend is giving you...',
    category: 'Behavior',
    date: 'March 22, 2024',
    author: 'Priya Patel',
    image: 'https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?q=80&w=2071&auto=format&fit=crop'
  },
  {
    id: 3,
    title: 'The Best Diet for Senior Dogs',
    excerpt: 'As dogs age, their nutritional needs change. Discover the best foods to keep your senior dog healthy...',
    category: 'Health',
    date: 'March 15, 2024',
    author: 'Amit Verma',
    image: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?q=80&w=2069&auto=format&fit=crop'
  }
];

export default function Blog() {
  return (
    <div className="pt-24 bg-slate-50 min-h-screen">
      <section className="py-24 max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <h1 className="text-5xl mb-4">Pet Care Blog</h1>
            <p className="text-slate-600">Expert tips, news, and updates from the world of PETZANIA.</p>
          </div>
          <div className="relative w-full md:w-80">
            <input
              type="text"
              placeholder="Search articles..."
              className="w-full pl-12 pr-4 py-3 bg-white rounded-xl border border-slate-200 focus:ring-2 focus:ring-brand-500 outline-none"
            />
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, i) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-100 group"
            >
              <div className="h-64 overflow-hidden relative">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <span className="absolute top-4 left-4 bg-brand-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                  {post.category}
                </span>
              </div>
              <div className="p-8">
                <div className="flex items-center gap-4 text-xs text-slate-400 mb-4">
                  <span className="flex items-center gap-1"><Calendar size={14} /> {post.date}</span>
                  <span className="flex items-center gap-1"><User size={14} /> {post.author}</span>
                </div>
                <h3 className="text-2xl mb-4 group-hover:text-brand-600 transition-colors">
                  {post.title}
                </h3>
                <p className="text-slate-600 mb-6 line-clamp-2">
                  {post.excerpt}
                </p>
                <Link
                  to={`/blog/${post.id}`}
                  className="text-slate-900 font-bold flex items-center gap-2 hover:text-brand-600 transition-colors"
                >
                  Read More <ArrowRight size={18} />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </section>
    </div>
  );
}
