import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import ServicesSection from '@/components/sections/ServicesSection';
import CTASection from '@/components/sections/CTASection';
import { CheckCircle2 } from 'lucide-react';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Services' });

  return {
    title: `${t('title')} | مكيفات الدمام`,
    description: t('description'),
  };
}

export default function ServicesPage() {
  const t = useTranslations('Services');

  return (
    <div className="flex flex-col min-h-screen">
      {/* Page Hero with Background Image */}
      <section className="pt-48 pb-24 bg-slate-900 relative overflow-hidden text-white">
        {/* Real Background Image */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-40"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1581094288338-2314dddb7eca?auto=format&fit=crop&q=80&w=2000')" }}
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 z-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-slate-900/80" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-6xl font-black mb-8 leading-tight tracking-tight drop-shadow-xl">
              {t('title')}
            </h1>
            <p className="text-lg sm:text-xl text-slate-200 font-medium leading-relaxed mb-10 max-w-2xl mx-auto drop-shadow-lg">
              {t('description')}
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm sm:text-base font-black uppercase tracking-widest">
               <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-xl backdrop-blur-md border border-white/10">
                  <CheckCircle2 className="w-5 h-5 text-brand-accent" /> 
                  <span>قطع غيار أصلية</span>
               </div>
               <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-xl backdrop-blur-md border border-white/10">
                  <CheckCircle2 className="w-5 h-5 text-brand-accent" /> 
                  <span>فنيون معتمدون</span>
               </div>
               <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-xl backdrop-blur-md border border-white/10">
                  <CheckCircle2 className="w-5 h-5 text-brand-accent" /> 
                  <span>ضمان على العمل</span>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Services Grid */}
      <ServicesSection />
      
      {/* CTA */}
      <CTASection />
    </div>
  );
}
