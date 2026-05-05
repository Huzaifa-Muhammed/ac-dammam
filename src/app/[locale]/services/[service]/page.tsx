import { useTranslations } from 'next-intl';
import { notFound } from 'next/navigation';
import { getTranslations } from 'next-intl/server';
import { 
  Wrench, 
  Settings, 
  Droplets, 
  Snowflake, 
  AlertTriangle, 
  ClipboardCheck, 
  CheckCircle2, 
  Phone, 
  MessageCircle,
  Clock,
  ShieldCheck,
  ThumbsUp
} from 'lucide-react';
import CTASection from '@/components/sections/CTASection';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const serviceIcons = {
  repair: Wrench,
  installation: Settings,
  cleaning: Droplets,
  gasRecharge: Snowflake,
  emergency: AlertTriangle,
  maintenance: ClipboardCheck,
};

const serviceImages = {
  repair: 'https://images.unsplash.com/photo-1581094288338-2314dddb7eca?auto=format&fit=crop&q=80&w=2000',
  installation: 'https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&q=80&w=2000',
  cleaning: 'https://images.unsplash.com/photo-1599700403969-f77b3aa74837?auto=format&fit=crop&q=80&w=2000',
  gasRecharge: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd6b?auto=format&fit=crop&q=80&w=2000',
  emergency: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=2000',
  maintenance: 'https://images.unsplash.com/photo-1454165833767-027eeed1b66e?auto=format&fit=crop&q=80&w=2000',
};

interface ServicePageProps {
  params: Promise<{
    locale: string;
    service: string;
  }>;
}

export async function generateMetadata({ params }: ServicePageProps) {
  const { locale, service } = await params;
  const t = await getTranslations({ locale, namespace: 'ServiceDetails' });
  const commonT = await getTranslations({ locale, namespace: 'Services' });

  if (!serviceIcons[service as keyof typeof serviceIcons]) {
    return { title: 'Not Found' };
  }

  return {
    title: `${commonT(`${service}.title`)} | مكيفات الدمام`,
    description: t(`${service}.heroSubtitle`),
    openGraph: {
      title: `${commonT(`${service}.title`)} | مكيفات الدمام`,
      description: t(`${service}.heroSubtitle`),
      images: [serviceImages[service as keyof typeof serviceImages]],
    },
  };
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { locale, service } = await params;
  
  if (!serviceIcons[service as keyof typeof serviceIcons]) {
    notFound();
  }

  const t = useTranslations('Services');
  const serviceT = useTranslations(`ServiceDetails.${service}`);
  const Icon = serviceIcons[service as keyof typeof serviceIcons];

  const features = [
    { icon: Clock, key: 'feature1' },
    { icon: ShieldCheck, key: 'feature2' },
    { icon: ThumbsUp, key: 'feature3' },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": t(`${service}.title`),
    "description": serviceT('heroSubtitle'),
    "provider": {
      "@type": "LocalBusiness",
      "name": "مكيفات الدمام",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "الدمام",
        "addressRegion": "المنطقة الشرقية",
        "addressCountry": "SA"
      }
    },
    "areaServed": ["الدمام", "الخبر", "الأحساء", "القطيف", "الظهران"],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": t(`${service}.title`),
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": serviceT('benefit1')
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": serviceT('benefit2')
          }
        }
      ]
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      {/* Hero Section */}
      <section className="pt-48 pb-24 bg-slate-900 relative overflow-hidden text-white">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-40"
          style={{ backgroundImage: `url('${serviceImages[service as keyof typeof serviceImages]}')` }}
        />
        <div className="absolute inset-0 z-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-slate-900/80" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-accent/20 text-brand-accent text-sm font-black uppercase tracking-widest mb-6 backdrop-blur-md border border-brand-accent/20">
              <Icon className="w-5 h-5" />
              {t(`${service}.title`)}
            </div>
            <h1 className="text-4xl sm:text-6xl font-black mb-8 leading-tight tracking-tight drop-shadow-xl">
              {serviceT('heroTitle')}
            </h1>
            <p className="text-lg sm:text-xl text-slate-200 font-medium leading-relaxed mb-10 max-w-2xl mx-auto drop-shadow-lg">
              {serviceT('heroSubtitle')}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-brand-primary hover:bg-brand-dark text-white rounded-full px-8 font-black text-lg h-14 shadow-lg shadow-brand-primary/20 transition-all hover:scale-105 active:scale-95">
                <Phone className="ml-2 h-5 w-5 rtl:mr-2 rtl:ml-0" />
                {t('learnMore')}
              </Button>
              <Button size="lg" variant="outline" className="bg-white/10 hover:bg-white/20 text-white border-white/20 rounded-full px-8 font-black text-lg h-14 backdrop-blur-md transition-all hover:scale-105 active:scale-95">
                <MessageCircle className="ml-2 h-5 w-5 rtl:mr-2 rtl:ml-0" />
                واتساب
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mb-8 leading-tight">
                {serviceT('overviewTitle')}
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-8">
                {serviceT('overviewText')}
              </p>
              <div className="space-y-4">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-brand-primary/10 flex items-center justify-center text-brand-primary flex-shrink-0">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <span className="text-slate-700 font-bold">{serviceT(`benefit${i}`)}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-brand-primary/5 rounded-[3rem] -rotate-3" />
              <img 
                src={serviceImages[service as keyof typeof serviceImages]} 
                alt={t(`${service}.title`)}
                className="relative rounded-[2.5rem] shadow-2xl z-10 w-full h-[500px] object-cover"
              />
              <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-xl z-20 hidden sm:block max-w-[240px]">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-brand-accent/10 flex items-center justify-center text-brand-accent">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 font-bold uppercase tracking-wider">ضمان معتمد</div>
                    <div className="text-lg font-black text-slate-900">90 يوم ضمان</div>
                  </div>
                </div>
                <div className="text-sm text-slate-500 leading-relaxed font-medium">
                  نضمن جودة العمل وقطع الغيار المستخدمة لمدة 3 أشهر كاملة.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="section-padding bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mb-6">
              لماذا تختار خدمتنا؟
            </h2>
            <p className="text-slate-600 text-lg font-medium">
              نحن نجمع بين الخبرة الطويلة والتقنيات الحديثة لتقديم أفضل خدمة تكييف في الدمام.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, i) => (
              <Card key={i} className="border-none shadow-lg hover:shadow-xl transition-shadow bg-white rounded-3xl overflow-hidden p-8">
                <CardContent className="p-0">
                  <div className="w-16 h-16 rounded-2xl bg-brand-primary/10 flex items-center justify-center text-brand-primary mb-6">
                    <feature.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-black text-slate-900 mb-4">{serviceT(`${feature.key}Title`)}</h3>
                  <p className="text-slate-600 leading-relaxed font-medium">
                    {serviceT(`${feature.key}Desc`)}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mb-6">
              الأسئلة الشائعة حول {t(`${service}.title`)}
            </h2>
            <p className="text-slate-600 text-lg font-medium">
              إجابات على أكثر التساؤلات شيوعاً لعملائنا في المنطقة الشرقية.
            </p>
          </div>
          <Accordion className="w-full space-y-4">
            {[1, 2, 3, 4].map((i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border border-slate-100 rounded-2xl px-6 bg-slate-50/50">
                <AccordionTrigger className="text-right font-black text-lg py-6 hover:no-underline hover:text-brand-primary transition-colors">
                  {serviceT(`faq${i}Q`)}
                </AccordionTrigger>
                <AccordionContent className="text-slate-600 text-lg leading-relaxed pb-6 text-right font-medium">
                  {serviceT(`faq${i}A`)}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
