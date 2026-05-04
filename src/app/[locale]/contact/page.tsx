import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import { Phone, MessageCircle, Mail, MapPin } from 'lucide-react';
import CTASection from '@/components/sections/CTASection';
import ContactForm from '@/components/sections/ContactForm';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Contact' });

  return {
    title: `${t('title')} | مكيفات الدمام`,
    description: t('description'),
  };
}

export default function ContactPage() {
  const t = useTranslations('Contact');

  return (
    <div className="flex flex-col min-h-screen">
      {/* Page Hero with Background Image */}
      <section className="pt-48 pb-24 bg-slate-900 relative overflow-hidden text-white text-center">
        {/* Real Background Image */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-40"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1423666639041-f56000c27a9a?auto=format&fit=crop&q=80&w=2000')" }}
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-slate-900 via-slate-900/40 to-slate-900" />
        
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

      {/* Contact Content */}
      <section className="py-24 bg-slate-50 relative overflow-hidden">
        <div className="absolute top-1/2 left-0 w-64 h-64 bg-brand-primary/5 rounded-full blur-3xl -translate-y-1/2 -ml-32" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            
            {/* Info Cards */}
            <div className="lg:col-span-5 space-y-6">
               <div className="p-8 rounded-[2rem] bg-white border border-slate-100 shadow-md flex items-start gap-6 group hover:border-brand-primary/20 hover:shadow-2xl transition-all duration-500 hover:-translate-x-1 rtl:hover:translate-x-1">
                  <div className="w-16 h-16 rounded-2xl bg-brand-primary/10 flex items-center justify-center text-brand-primary shrink-0 group-hover:bg-brand-primary group-hover:text-white transition-all">
                     <MapPin className="h-8 w-8" />
                  </div>
                  <div>
                     <h3 className="font-black text-2xl text-slate-900 mb-2">{t('address')}</h3>
                     <p className="text-slate-600 font-medium text-lg leading-relaxed">{t('addressDetail')}</p>
                  </div>
               </div>

               <div className="p-8 rounded-[2rem] bg-white border border-slate-100 shadow-md flex items-start gap-6 group hover:border-brand-primary/20 hover:shadow-2xl transition-all duration-500 hover:-translate-x-1 rtl:hover:translate-x-1">
                  <div className="w-16 h-16 rounded-2xl bg-brand-primary/10 flex items-center justify-center text-brand-primary shrink-0 group-hover:bg-brand-primary group-hover:text-white transition-all">
                     <Phone className="h-8 w-8" />
                  </div>
                  <div>
                     <h3 className="font-black text-2xl text-slate-900 mb-2">{t('phone')}</h3>
                     <p className="text-slate-600 font-bold text-xl" dir="ltr">+966 5X XXX XXXX</p>
                  </div>
               </div>

               <div className="p-8 rounded-[2rem] bg-white border border-emerald-100 shadow-md flex items-start gap-6 group hover:border-emerald-200 hover:shadow-2xl transition-all duration-500 hover:-translate-x-1 rtl:hover:translate-x-1">
                  <div className="w-16 h-16 rounded-2xl bg-emerald-50 flex items-center justify-center text-emerald-600 shrink-0 group-hover:bg-emerald-600 group-hover:text-white transition-all">
                     <MessageCircle className="h-8 w-8" />
                  </div>
                  <div>
                     <h3 className="font-black text-2xl text-slate-900 mb-2">{t('whatsapp')}</h3>
                     <p className="text-emerald-700 font-bold text-xl" dir="ltr">+966 5X XXX XXXX</p>
                  </div>
               </div>

               <div className="p-8 rounded-[2rem] bg-white border border-slate-100 shadow-md flex items-start gap-6 group hover:border-brand-primary/20 hover:shadow-2xl transition-all duration-500 hover:-translate-x-1 rtl:hover:translate-x-1">
                  <div className="w-16 h-16 rounded-2xl bg-brand-accent/10 flex items-center justify-center text-brand-primary shrink-0 group-hover:bg-brand-secondary group-hover:text-white transition-all">
                     <Mail className="h-8 w-8" />
                  </div>
                  <div>
                     <h3 className="font-black text-2xl text-slate-900 mb-2">{t('email')}</h3>
                     <p className="text-slate-600 font-bold text-lg">info@ac-dammam.com</p>
                  </div>
               </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-7">
               <ContactForm />
            </div>
            
          </div>
        </div>
      </section>
    </div>
  );
}
