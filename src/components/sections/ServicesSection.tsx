import { useTranslations } from 'next-intl';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Wrench, Settings, Droplets, Snowflake, AlertTriangle, ClipboardCheck, ArrowRight } from 'lucide-react';
import { Link } from '@/i18n/routing';

const serviceIcons = {
  repair: Wrench,
  installation: Settings,
  cleaning: Droplets,
  gasRecharge: Snowflake,
  emergency: AlertTriangle,
  maintenance: ClipboardCheck,
};

export default function ServicesSection() {
  const t = useTranslations('Services');

  const services = [
    { id: 'repair', icon: 'repair', color: 'brand-primary' },
    { id: 'installation', icon: 'installation', color: 'brand-secondary' },
    { id: 'cleaning', icon: 'cleaning', color: 'brand-accent' },
    { id: 'gasRecharge', icon: 'gasRecharge', color: 'emerald-500' },
    { id: 'emergency', icon: 'emergency', color: 'error' },
    { id: 'maintenance', icon: 'maintenance', color: 'warning' },
  ];

  return (
    <section className="section-padding bg-slate-50/50 relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 md:mb-24 gap-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-brand-primary/10 text-brand-primary text-[10px] sm:text-xs font-black uppercase tracking-widest mb-4">
              <span className="w-2 h-2 rounded-full bg-brand-primary animate-pulse" />
              {t('categoryLabel') || 'خدماتنا المتكاملة'}
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-black text-slate-900 leading-tight">
              {t('title')}
            </h2>
          </div>
          <p className="text-slate-600 text-base sm:text-lg md:text-xl max-w-md font-medium leading-relaxed">
            {t('description')}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service) => {
            const Icon = serviceIcons[service.icon as keyof typeof serviceIcons];
            return (
              <Link key={service.id} href={`/services/${service.id}`} className="group">
                <Card className="relative h-full border-none shadow-md hover:shadow-2xl transition-all duration-500 bg-white rounded-[2rem] overflow-hidden pt-8 px-2 pb-6 group-hover:-translate-y-2">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-brand-primary/5 to-transparent rounded-bl-full transition-all group-hover:scale-150" />
                  
                  <CardHeader className="relative z-10 pt-0">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-slate-100 flex items-center justify-center text-slate-600 mb-6 group-hover:bg-brand-primary group-hover:text-white group-hover:rotate-6 transition-all duration-500 shadow-inner">
                      <Icon className="h-7 w-7 sm:h-8 sm:w-8" />
                    </div>
                    <CardTitle className="text-xl sm:text-2xl font-black text-slate-900 group-hover:text-brand-primary transition-colors">
                      {t(`${service.id}.title`)}
                    </CardTitle>
                  </CardHeader>
                  
                  <CardContent className="relative z-10">
                    <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-8 font-medium">
                      {t(`${service.id}.description`)}
                    </p>
                    
                    <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-50">
                      <span className="text-brand-primary font-black text-xs sm:text-sm uppercase tracking-widest flex items-center gap-2 group-hover:gap-3 transition-all">
                        {t('learnMore')}
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1 rtl:rotate-180" />
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
