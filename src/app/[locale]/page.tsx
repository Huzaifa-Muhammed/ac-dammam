import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import { Button } from '@/components/ui/button';
import { Phone, MessageCircle, Star, ShieldCheck, Clock, CheckCircle2 } from 'lucide-react';
import ServicesSection from '@/components/sections/ServicesSection';
import HowItWorksSection from '@/components/sections/HowItWorksSection';
import WhyUsSection from '@/components/sections/WhyUsSection';
import PricingTeaserSection from '@/components/sections/PricingTeaserSection';
import CTASection from '@/components/sections/CTASection';
import BrandLogosSection from '@/components/sections/BrandLogosSection';
import ServiceAreasSection from '@/components/sections/ServiceAreasSection';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'HomePage' });

  return {
    title: t('title'),
    description: t('subHeadline'),
  };
}

export default function Home() {
  const t = useTranslations('HomePage');

  return (
    <div className="flex flex-col min-h-screen">
      {/* Premium Hero Section with Background Image */}
      <section className="relative min-h-[95vh] flex items-center justify-center overflow-hidden bg-slate-900">
        {/* Real Background Image */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat transition-transform duration-[10s] hover:scale-110"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=2000')" }}
        />
        
        {/* Multi-layer Overlay for Readability */}
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-slate-900/80 via-slate-900/60 to-slate-900/90" />
        <div className="absolute inset-0 z-0 bg-brand-primary/20 mix-blend-multiply" />
        
        <div className="container relative z-10 px-4 sm:px-6 lg:px-8 pt-20">
          <div className="max-w-4xl mx-auto text-center">
            {/* Trust Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-md mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-success"></span>
              </span>
              <span className="text-white text-xs sm:text-sm font-black tracking-wide uppercase">
                {t('availableNowBadge') || 'خدمة طارئة 24/7 في الدمام'}
              </span>
            </div>

            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white mb-8 leading-[1.1] tracking-tight drop-shadow-2xl">
              {t('title')}
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl text-slate-100 mb-12 max-w-2xl mx-auto leading-relaxed font-medium drop-shadow-lg">
              {t('subHeadline')}
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-20">
              <Button size="lg" className="bg-brand-primary hover:bg-brand-primary/90 text-white rounded-2xl px-10 h-16 text-xl font-black w-full sm:w-auto shadow-2xl shadow-brand-primary/40 transition-all hover:scale-105 active:scale-95">
                <Phone className="ml-3 h-6 w-6" />
                {t('callNow')}
              </Button>
              <Button size="lg" variant="outline" className="bg-white/10 border-white/30 text-white hover:bg-white/20 rounded-2xl px-10 h-16 text-xl font-black w-full sm:w-auto backdrop-blur-md transition-all hover:scale-105 active:scale-95">
                <MessageCircle className="ml-3 h-6 w-6 text-brand-accent" />
                {t('whatsapp')}
              </Button>
            </div>

            {/* Trust Bar Premium */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-12 py-10 border-y border-white/10 max-w-5xl mx-auto backdrop-blur-sm bg-white/5 rounded-3xl md:bg-transparent md:border-y md:backdrop-blur-none">
              <div className="flex flex-col items-center gap-2">
                <div className="flex items-center gap-1 mb-1">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} className="w-4 h-4 fill-warning text-warning" />
                  ))}
                </div>
                <span className="text-white font-black text-lg">4.9/5</span>
                <span className="text-slate-300 text-sm font-bold uppercase tracking-wider">{t('trustBar.googleReviews')}</span>
              </div>
              
              <div className="flex flex-col items-center gap-2 border-x border-white/10 px-4">
                <ShieldCheck className="w-8 h-8 text-brand-accent mb-1" />
                <span className="text-white font-black text-lg">+500</span>
                <span className="text-slate-300 text-sm font-bold uppercase tracking-wider">{t('trustBar.satisfiedCustomers')}</span>
              </div>
              
              <div className="hidden md:flex flex-col items-center gap-2">
                <Clock className="w-8 h-8 text-emerald-400 mb-1" />
                <span className="text-white font-black text-lg">10+</span>
                <span className="text-slate-300 text-sm font-bold uppercase tracking-wider">{t('trustBar.experience')}</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <BrandLogosSection />
      <ServicesSection />
      <HowItWorksSection />
      <WhyUsSection />
      <PricingTeaserSection />
      <ServiceAreasSection />
      <CTASection />
    </div>
  );
}
