'use client';

import { useTranslations } from 'next-intl';

export default function BrandLogosSection() {
  const t = useTranslations('HomePage');

  const brands = [
    'Samsung', 'LG', 'Carrier', 'Midea', 'Daikin', 'Gree', 'Trane', 'York'
  ];

  return (
    <section className="py-12 bg-white border-y border-slate-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
           <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">نحن نخدم جميع الماركات العالمية</span>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
          {brands.map((brand) => (
            <div key={brand} className="text-xl md:text-2xl font-black text-slate-900 tracking-tighter">
              {brand}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
