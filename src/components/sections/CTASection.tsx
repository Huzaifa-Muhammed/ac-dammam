import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/button';
import { Phone, MessageCircle, ArrowLeft } from 'lucide-react';

export default function CTASection() {
  const t = useTranslations('CTA');

  return (
    <section className="py-20 md:py-40 bg-brand-primary relative overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[radial-gradient(circle_at_center,rgba(14,165,233,0.15)_0%,transparent_70%)]" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-accent/10 rounded-full blur-[100px] -mr-48 -mt-48" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-secondary/10 rounded-full blur-[100px] -ml-48 -mb-48" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white/5 backdrop-blur-2xl rounded-[3rem] border border-white/10 p-10 md:p-24 text-center shadow-2xl relative overflow-hidden group">
            {/* Inner Decoration */}
            <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-brand-accent/20 to-transparent rounded-br-full transition-transform group-hover:scale-150 duration-700" />
            
            <h2 className="text-4xl md:text-7xl font-black text-white mb-8 leading-tight tracking-tight">
              {t('title')}
            </h2>
            <p className="text-xl md:text-2xl text-slate-300 mb-16 max-w-2xl mx-auto leading-relaxed font-medium">
              {t('description')}
            </p>
            
            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
              <Button size="lg" className="bg-white text-brand-primary hover:bg-slate-100 rounded-[1.5rem] px-12 h-20 text-2xl font-black w-full md:w-auto shadow-2xl transition-all hover:scale-105 active:scale-95 group/btn">
                <Phone className="ml-4 h-7 w-7 text-brand-secondary group-hover/btn:rotate-12 transition-transform" />
                {t('callNow')}
              </Button>
              <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 rounded-[1.5rem] px-12 h-20 text-2xl font-black w-full md:w-auto backdrop-blur-md transition-all hover:scale-105 active:scale-95">
                <MessageCircle className="ml-4 h-7 w-7 text-brand-accent" />
                {t('whatsapp')}
              </Button>
            </div>
            
            <div className="mt-16 flex flex-wrap items-center justify-center gap-8 text-white/60 font-bold uppercase tracking-widest text-sm">
               <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-success animate-pulse" />
                  {t('availableNow')}
               </div>
               <div className="hidden sm:block w-1.5 h-1.5 rounded-full bg-white/20" />
               <div className="flex items-center gap-3">
                  <span>ضمان 90 يوماً</span>
               </div>
               <div className="hidden sm:block w-1.5 h-1.5 rounded-full bg-white/20" />
               <div className="flex items-center gap-3">
                  <span>فنيون معتمدون</span>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
