import { useTranslations } from 'next-intl';
import { MessageSquare, Truck, ShieldCheck, ArrowRight } from 'lucide-react';

const steps = [
  { id: 'step1', icon: MessageSquare },
  { id: 'step2', icon: Truck },
  { id: 'step3', icon: ShieldCheck },
];

export default function HowItWorksSection() {
  const t = useTranslations('HowItWorks');

  return (
    <section className="section-padding bg-white overflow-hidden relative">
      {/* Dynamic Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full opacity-[0.02] pointer-events-none">
        <svg width="100%" height="100%" fill="none" xmlns="http://www.w3.org/2000/svg">
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1"/>
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-24">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-success/10 text-success text-xs font-black uppercase tracking-widest mb-4">
            {t('processLabel') || 'خطوات بسيطة'}
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-6">
            {t('title')}
          </h2>
          <p className="text-slate-500 text-lg md:text-xl font-medium leading-relaxed">
            {t('description')}
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* Connector Line (Desktop) */}
          <div className="hidden lg:block absolute top-[52px] left-[15%] right-[15%] h-1 bg-slate-100 z-0">
             <div className="w-1/2 h-full bg-gradient-to-r from-brand-primary to-brand-secondary animate-pulse" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 relative z-10">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={step.id} className="flex flex-col items-center text-center group">
                  <div className="w-28 h-28 rounded-[2.5rem] bg-white border-8 border-slate-50 flex items-center justify-center text-brand-primary mb-8 group-hover:bg-brand-primary group-hover:text-white group-hover:rotate-12 transition-all duration-500 shadow-xl shadow-slate-200/50 relative">
                    <Icon className="h-10 w-10" />
                    <div className="absolute -top-4 -right-4 w-10 h-10 rounded-2xl bg-brand-secondary text-white font-black flex items-center justify-center text-lg shadow-lg shadow-brand-secondary/30">
                      {index + 1}
                    </div>
                  </div>
                  <h3 className="text-2xl font-black text-slate-900 mb-4 group-hover:text-brand-primary transition-colors">
                    {t(`${step.id}.title`)}
                  </h3>
                  <p className="text-slate-500 text-base leading-relaxed font-medium">
                    {t(`${step.id}.description`)}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
