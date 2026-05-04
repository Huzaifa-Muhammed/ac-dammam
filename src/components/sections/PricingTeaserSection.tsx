import { useTranslations } from 'next-intl';
import { Check, ArrowRight, Zap, Snowflake, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from '@/i18n/routing';

export default function PricingTeaserSection() {
  const t = useTranslations('Pricing');

  const plans = [
    { id: 'basic', price: '49', icon: Zap, popular: false },
    { id: 'standard', price: '149', icon: Snowflake, popular: true },
    { id: 'premium', price: '299', icon: Shield, popular: false },
  ];

  return (
    <section className="section-padding bg-slate-50 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16 md:mb-24">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-brand-primary/10 text-brand-primary text-[10px] sm:text-xs font-black uppercase tracking-widest mb-4">
             {t('pricingLabel') || 'باقات مدروسة'}
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-black text-slate-900 mb-6 leading-tight">
            {t('title')}
          </h2>
          <p className="text-slate-600 text-base sm:text-lg md:text-xl font-medium leading-relaxed max-w-2xl mx-auto">
            {t('description')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
          {plans.map((plan) => {
            const Icon = plan.icon;
            return (
              <div
                key={plan.id}
                className={`relative group bg-white rounded-[2rem] sm:rounded-[2.5rem] p-6 sm:p-10 shadow-md transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 flex flex-col border-2 ${
                  plan.popular ? 'border-brand-primary' : 'border-white'
                }`}
              >
                {plan.popular && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-primary text-white text-[10px] sm:text-xs font-black uppercase tracking-widest px-6 py-2.5 rounded-full shadow-xl ring-4 ring-white">
                    {t('mostPopular')}
                  </div>
                )}

                <div className="mb-8 sm:mb-10">
                  <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110 group-hover:rotate-3 ${
                    plan.popular ? 'bg-brand-primary text-white' : 'bg-slate-100 text-slate-500'
                  }`}>
                    <Icon className="w-6 h-6 sm:w-7 sm:h-7" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black text-slate-900 mb-2">
                    {t(`${plan.id}.title`)}
                  </h3>
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl sm:text-5xl font-black text-brand-primary">{plan.price}</span>
                    <span className="text-slate-500 font-bold text-base sm:text-lg uppercase">{t('sar')}</span>
                  </div>
                </div>

                <div className="h-px bg-slate-100 w-full mb-8 sm:mb-10" />

                <ul className="flex flex-col gap-4 sm:gap-5 mb-10 sm:mb-12 flex-1">
                  {[1, 2, 3, 4].map((feature) => (
                    <li key={feature} className="flex items-start gap-3 sm:gap-4">
                      <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-emerald-500/10 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-emerald-600 stroke-[4]" />
                      </div>
                      <span className="text-slate-700 text-sm sm:text-base font-medium">
                        {t(`${plan.id}.features.f${feature}`)}
                      </span>
                    </li>
                  ))}
                </ul>

                <Button
                  size="lg"
                  className={`w-full rounded-2xl font-black h-14 sm:h-16 text-base sm:text-lg transition-all ${
                    plan.popular 
                      ? 'bg-brand-primary hover:bg-brand-primary/90 text-white shadow-lg shadow-brand-primary/20' 
                      : 'bg-slate-900 hover:bg-brand-primary text-white shadow-lg'
                  }`}
                >
                  {t('bookNow')}
                </Button>
              </div>
            );
          })}
        </div>
        
        <div className="mt-12 sm:mt-16 md:mt-20 text-center">
            <Link href="/pricing" className="group inline-flex items-center gap-4 px-6 sm:px-8 py-3 sm:py-4 rounded-2xl bg-white border border-slate-200 text-brand-primary font-black text-sm sm:text-base hover:bg-brand-primary hover:text-white hover:border-brand-primary transition-all duration-300 shadow-sm hover:shadow-lg">
                {t('viewAllPricing')}
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:translate-x-2 rtl:group-hover:-translate-x-2 rtl:rotate-180" />
            </Link>
        </div>
      </div>
    </section>
  );
}
