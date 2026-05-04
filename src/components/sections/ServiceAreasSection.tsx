'use client';

import { useTranslations } from 'next-intl';
import { MapPin, Navigation } from 'lucide-react';

export default function ServiceAreasSection() {
  const t = useTranslations('HomePage');

  const areas = [
    { name: 'الدمام', nameEn: 'Dammam' },
    { name: 'الخبر', nameEn: 'Al Khobar' },
    { name: 'الأحساء', nameEn: 'Al Ahsa' },
    { name: 'القطيف', nameEn: 'Qatif' },
    { name: 'الظهران', nameEn: 'Dhahran' },
    { name: 'الجبيل', nameEn: 'Jubail' },
  ];

  return (
    <section className="section-padding bg-slate-50 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-brand-primary/10 text-brand-primary text-xs font-black uppercase tracking-widest mb-6">
              <Navigation className="w-4 h-4" />
              تغطيتنا الجغرافية
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 mb-8 leading-tight">
              نخدم جميع مناطق المنطقة الشرقية
            </h2>
            <p className="text-slate-600 text-lg mb-10 font-medium leading-relaxed">
              بفضل أسطولنا المتحرك، نصل إليك في أي مكان بالدمام والخبر والمناطق المجاورة خلال وقت قياسي لضمان راحتك.
            </p>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {areas.map((area) => (
                <div key={area.nameEn} className="flex items-center gap-3 p-4 rounded-2xl bg-white border border-slate-100 shadow-sm hover:border-brand-primary/20 hover:shadow-md transition-all">
                  <MapPin className="w-5 h-5 text-brand-primary" />
                  <span className="font-bold text-slate-900">{area.name}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative h-[400px] sm:h-[500px] w-full rounded-[3rem] overflow-hidden shadow-2xl border-[12px] border-white">
            {/* Placeholder for Google Map - In a real app, use Google Maps API or Embed */}
            <div className="absolute inset-0 bg-slate-200 flex items-center justify-center">
              <div className="text-center p-8">
                <MapPin className="w-16 h-16 text-brand-primary mx-auto mb-4 animate-bounce" />
                <div className="text-xl font-black text-slate-900 mb-2">خريطة الخدمة المباشرة</div>
                <p className="text-slate-500 font-medium">نحن نغطي كامل المنطقة الشرقية</p>
              </div>
            </div>
            {/* Real Map Embed (Static Placeholder) */}
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m13!1d228784.050410425!2d49.851084224724!3d26.392723789454153!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e49fb925c0406df%3A0x673415f3358055f6!2sDammam%20Saudi%20Arabia!5e0!3m2!1sen!2s!4v1714820000000!5m2!1sen!2s" 
              className="absolute inset-0 w-full h-full grayscale contrast-125 border-0" 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
