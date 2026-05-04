'use client';

import { useTranslations } from 'next-intl';
import { Zap } from 'lucide-react';

export default function EmergencyBanner() {
  const t = useTranslations('CTA');

  return (
    <div className="bg-warning py-2 relative z-[60] overflow-hidden">
      <div className="flex whitespace-nowrap animate-marquee items-center gap-8">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="flex items-center gap-2 text-slate-900 font-black text-xs sm:text-sm uppercase tracking-widest">
            <Zap className="w-4 h-4 fill-slate-900" />
            <span>خدمة طارئة 24/7 متاحة الآن في الدمام والخبر</span>
            <span className="mx-4 text-slate-900/30">|</span>
            <span>اتصل الآن: 05XXXXXXXX</span>
            <span className="mx-4 text-slate-900/30">|</span>
          </div>
        ))}
      </div>
      
      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        :global([dir="rtl"]) .animate-marquee {
          animation: marquee-rtl 30s linear infinite;
        }
        @keyframes marquee-rtl {
          0% { transform: translateX(0); }
          100% { transform: translateX(50%); }
        }
      `}</style>
    </div>
  );
}
