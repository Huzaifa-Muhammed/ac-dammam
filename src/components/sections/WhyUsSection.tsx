import { useTranslations } from 'next-intl';
import { CheckCircle2, ShieldCheck, Award, Zap } from 'lucide-react';

export default function WhyUsSection() {
  const t = useTranslations('WhyUs');

  const advantages = [
    { id: 'certified', icon: ShieldCheck },
    { id: 'pricing', icon: Zap },
    { id: 'warranty', icon: Award },
    { id: 'allBrands', icon: CheckCircle2 },
    { id: 'available247', icon: ShieldCheck },
    { id: 'areas', icon: CheckCircle2 }
  ];

  return (
    <section className="section-padding bg-bg-dark text-white overflow-hidden relative">
      {/* Abstract Background Design */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-primary/10 rounded-full blur-[120px] -mr-64 -mt-64" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          {/* Left Content */}
          <div className="flex-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-white/5 text-brand-accent text-xs font-black uppercase tracking-widest mb-6 border border-white/10">
              {t('advantageLabel') || 'لماذا نحن الأفضل؟'}
            </div>
            <h2 className="text-4xl md:text-6xl font-black mb-10 leading-tight">
              {t('title')}
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10">
              {advantages.map((adv) => {
                const Icon = adv.icon;
                return (
                  <div key={adv.id} className="group">
                    <div className="flex items-center gap-4 mb-3">
                      <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-brand-accent group-hover:bg-brand-accent group-hover:text-bg-dark transition-all duration-300">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h4 className="text-lg font-black text-white/90">{t(`advantages.${adv.id}`)}</h4>
                    </div>
                    <div className="h-0.5 w-0 bg-brand-accent transition-all duration-500 group-hover:w-full opacity-50" />
                  </div>
                );
              })}
            </div>
            
            <div className="mt-16 p-10 bg-gradient-to-br from-white/5 to-transparent rounded-[2.5rem] border border-white/10 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-40 h-40 bg-brand-primary/20 blur-3xl -mr-20 -mt-20 group-hover:bg-brand-primary/40 transition-colors" />
              <div className="relative z-10">
                <p className="text-2xl font-black mb-4 text-brand-accent">
                  {t('experienceBanner.title')}
                </p>
                <p className="text-slate-400 text-lg leading-relaxed font-medium">
                  {t('experienceBanner.description')}
                </p>
              </div>
            </div>
          </div>
          
          {/* Right Visuals */}
          <div className="flex-1 relative">
            <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl border-[12px] border-white/5 bg-slate-800">
              <div className="aspect-[4/5] flex items-center justify-center relative bg-gradient-to-tr from-slate-900 to-slate-800">
                 {/* Visual Representation of Reliability */}
                 <div className="text-center px-12">
                    <div className="w-24 h-24 rounded-3xl bg-brand-primary/20 flex items-center justify-center text-brand-accent mx-auto mb-8 animate-bounce">
                       <ShieldCheck className="w-12 h-12" />
                    </div>
                    <h3 className="text-3xl font-black mb-4 tracking-tight">نضمن لكم الراحة والبرودة</h3>
                    <p className="text-slate-400 text-lg">فنيون مدربون على أعلى مستوى للتعامل مع كافة المشاكل</p>
                 </div>
                 
                 <div className="absolute bottom-10 left-10 right-10">
                    <div className="bg-white/10 backdrop-blur-xl p-6 rounded-[2rem] border border-white/10 flex items-center gap-6">
                      <div className="w-16 h-16 rounded-2xl bg-success/20 flex items-center justify-center text-success shrink-0 font-black text-2xl">
                        98%
                      </div>
                      <div>
                        <p className="font-black text-xl mb-1">رضا العملاء</p>
                        <p className="text-sm text-slate-400 font-bold uppercase tracking-wider">Customer Satisfaction</p>
                      </div>
                    </div>
                 </div>
              </div>
            </div>
            
            {/* Ambient glows */}
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-brand-secondary/20 blur-[100px] rounded-full" />
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-brand-accent/20 blur-[100px] rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
}
