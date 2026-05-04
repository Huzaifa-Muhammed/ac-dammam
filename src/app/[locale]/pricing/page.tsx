import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import PricingTeaserSection from '@/components/sections/PricingTeaserSection';
import CTASection from '@/components/sections/CTASection';
import { HelpCircle } from 'lucide-react';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Pricing' });

  return {
    title: `${t('title')} | مكيفات الدمام`,
    description: t('description'),
  };
}

export default function PricingPage() {
  const t = useTranslations('Pricing');

  return (
    <div className="flex flex-col min-h-screen">
      {/* Page Hero with Background Image */}
      <section className="pt-48 pb-24 bg-slate-900 relative overflow-hidden text-white text-center">
        {/* Real Background Image */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-40"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=2000')" }}
        />
        
        {/* Multi-layer Overlay */}
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-slate-900 via-slate-900/60 to-slate-900" />
        
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

      <PricingTeaserSection />
      
      {/* FAQ Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
           <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6">الأسئلة الشائعة</h2>
              <p className="text-slate-600 text-lg font-medium">كل ما تحتاج معرفته عن أسعارنا وخدماتنا</p>
           </div>
           
           <div className="space-y-6">
              {[
                { q: "هل هناك رسوم خفية؟", a: "لا، أسعارنا واضحة وشفافة. سيتم إخبارك بالتكلفة الإجمالية قبل البدء بأي عمل." },
                { q: "هل يشمل السعر قطع الغيار؟", a: "أسعار الباقات تشمل أجور الفحص والعمالة والصيانة. في حال الحاجة لقطع غيار سيتم تسعيرها بشكل منفصل بعد موافقتك." },
                { q: "ما هي طرق الدفع المتاحة؟", a: "نقبل الدفع نقداً، أو عبر التحويل البنكي، أو باستخدام بطاقات مدى والبطاقات الائتمانية." }
              ].map((faq, idx) => (
                <div key={idx} className="p-8 rounded-[2.5rem] bg-slate-50 border border-slate-100 flex flex-col sm:flex-row gap-6 hover:shadow-xl transition-all hover:bg-white hover:border-brand-primary/10">
                   <div className="w-14 h-14 rounded-2xl bg-brand-primary/10 text-brand-primary flex items-center justify-center shrink-0 shadow-inner">
                      <HelpCircle className="w-7 h-7" />
                   </div>
                   <div>
                      <h3 className="text-xl sm:text-2xl font-black text-slate-900 mb-3">{faq.q}</h3>
                      <p className="text-slate-600 leading-relaxed font-medium text-lg">{faq.a}</p>
                   </div>
                </div>
              ))}
           </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
