
import React from 'react';
import { Product } from '../types';

const gadgets: Product[] = [
  {
    id: 'g1',
    name: 'Fast Charging Power Bank',
    category: 'Accessory',
    price: 1250,
    description: '20000mAh high capacity with dual USB ports and PD fast charging.',
    image: 'https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?auto=format&fit=crop&q=80&w=400',
    rating: 4.8
  },
  {
    id: 'g2',
    name: 'Wireless Earbuds',
    category: 'Accessory',
    price: 1850,
    description: 'Crystal clear sound with long battery life and touch controls.',
    image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&q=80&w=400',
    rating: 4.9
  },
  {
    id: 'g3',
    name: 'Premium Data Cable',
    category: 'Accessory',
    price: 350,
    description: 'Durable braided cable supporting fast data transfer and charging.',
    image: 'https://images.unsplash.com/photo-1589561253898-768105ca91a8?auto=format&fit=crop&q=80&w=400',
    rating: 4.7
  },
  {
    id: 'g4',
    name: 'Fast Wall Charger',
    category: 'Accessory',
    price: 550,
    description: '33W GAN charger for safe and rapid mobile charging.',
    image: 'https://images.unsplash.com/photo-1608632616428-569d12354728?auto=format&fit=crop&q=80&w=400',
    rating: 4.8
  }
];

const Gadgets: React.FC = () => {
  return (
    <section id="gadgets" className="py-16 md:py-24 bg-slate-900/20 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-orbitron font-bold mb-4">Latest <span className="text-sky-400">Gadgets</span></h2>
          <p className="text-slate-400 mb-6 md:mb-8 max-w-2xl mx-auto text-sm md:text-base">সিন্তিয়া টেলিকমে পাবেন সেরা মানের মোবাইল অ্যাকসেসরিজ ও ইলেকট্রনিক গ্যাজেট।</p>
          <div className="w-16 md:w-24 h-1 bg-sky-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {gadgets.map((item) => (
            <div key={item.id} className="glass bg-slate-900 border border-white/10 rounded-[2rem] overflow-hidden group hover:border-sky-500/50 transition-all duration-300">
              <div className="relative aspect-[4/3] sm:aspect-square overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-sky-500 text-white text-[10px] font-bold px-3 py-1 rounded-full shadow-lg">
                  {item.category}
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-start mb-2 gap-2">
                  <h3 className="font-bold text-base md:text-lg text-white group-hover:text-sky-400 transition-colors line-clamp-1">{item.name}</h3>
                  <span className="flex items-center gap-1 text-yellow-400 text-xs shrink-0">
                    <svg className="w-3 h-3 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                    {item.rating}
                  </span>
                </div>
                
                <p className="text-slate-400 text-xs md:text-sm mb-6 line-clamp-2 min-h-[2.5rem]">
                  {item.description}
                </p>
                
                <div className="flex items-center justify-between mt-auto">
                  <span className="text-xl md:text-2xl font-bold text-sky-400">৳{item.price}</span>
                  <a 
                    href={`https://api.whatsapp.com/send?phone=8801307085310&text=I%20want%20to%20buy%20${item.name}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white/5 hover:bg-sky-500 text-slate-300 hover:text-white rounded-xl transition-all active:scale-90"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gadgets;
