import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import CTASection from '@/components/sections/CTASection';
import { Target, Users, ShieldCheck, History } from 'lucide-react';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'About' });

  return {
    title: `${t('title')} | مكيفات الدمام`,
    description: t('description'),
  };
}

export default function AboutPage() {
  const t = useTranslations('About');

  const stats = [
    { label: 'سنوات خبرة', value: '+10', icon: History },
    { label: 'عميل راضٍ', value: '+5000', icon: Users },
    { label: 'فني معتمد', value: '+25', icon: ShieldCheck },
    { label: 'تغطية المدن', value: '3', icon: Target },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Page Hero with Background Image */}
      <section className="pt-48 pb-24 bg-slate-900 relative overflow-hidden text-white text-center">
        {/* Real Background Image */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-40"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80&w=2000')" }}
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 z-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-slate-900/80" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-6xl font-black mb-8 leading-tight tracking-tight drop-shadow-2xl">
              {t('title')}
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-slate-100 font-medium leading-relaxed max-w-2xl mx-auto drop-shadow-lg">
              {t('description')}
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-primary/5 rounded-full blur-3xl -mr-32 -mt-32" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
           <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-6xl mx-auto">
              {stats.map((stat, idx) => {
                 const Icon = stat.icon;
                 return (
                    <div key={idx} className="text-center p-8 rounded-[2.5rem] bg-slate-50 border border-slate-100 hover:shadow-xl transition-all duration-500 hover:-translate-y-2 group">
                       <div className="w-16 h-16 rounded-2xl bg-white text-brand-primary flex items-center justify-center mx-auto mb-6 shadow-sm shadow-brand-primary/10 group-hover:bg-brand-primary group-hover:text-white transition-all">
                          <Icon className="w-8 h-8" />
                       </div>
                       <div className="text-4xl font-black text-slate-900 mb-2">{stat.value}</div>
                       <div className="text-slate-500 font-black uppercase tracking-widest text-xs sm:text-sm">{stat.label}</div>
                    </div>
                 );
              })}
           </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-32 bg-slate-50 relative overflow-hidden">
         <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl relative z-10">
            <div className="flex flex-col lg:flex-row gap-20 items-center">
               <div className="flex-1 space-y-8">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-brand-primary/10 text-brand-primary text-xs font-black uppercase tracking-widest">
                     رسالتنا وقيمنا
                  </div>
                  <h2 className="text-4xl md:text-6xl font-black text-slate-900 leading-tight">نسعى لتقديم تجربة تبريد لا تُنسى</h2>
                  <p className="text-slate-600 text-lg md:text-xl leading-relaxed font-medium">
                     بدأنا في مكيفات الدمام بهدف واحد: تقديم خدمة صيانة وتكييف تضع العميل في المقام الأول. نحن ندرك أهمية التكييف في أجوائنا الحارة، لذا حرصنا على توفير استجابة سريعة، جودة عالية، وأسعار واضحة خالية من المفاجآت.
                  </p>
                  <p className="text-slate-600 text-lg md:text-xl leading-relaxed font-medium">
                     فريقنا مكون من أمهر الفنيين المعتمدين الذين يخضعون لتدريب مستمر للتعامل مع أحدث تقنيات التبريد، مما يجعلنا الخيار الأول لأكثر من 5000 عميل في المنطقة الشرقية.
                  </p>
               </div>
               <div className="flex-1 relative w-full">
                  <div className="aspect-[4/5] bg-slate-900 rounded-[4rem] relative overflow-hidden shadow-2xl border-[12px] border-white ring-1 ring-slate-200">
                     <div 
                        className="absolute inset-0 bg-cover bg-center opacity-70"
                        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=1000')" }}
                     />
                     <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
                     <div className="absolute bottom-10 left-10 right-10 p-8 rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 text-center">
                        <p className="text-2xl font-black text-white italic">
                           "راحتك وبرودة منزلك هي أولويتنا القصوى"
                        </p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>

      <CTASection />
    </div>
  );
}
