'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/button';

export default function ContactForm() {
  const t = useTranslations('Contact');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: t('serviceRepair'),
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const whatsappNumber = '966500000000'; // Replace with real number
    const text = `*طلب خدمة جديد*
*الاسم:* ${formData.name}
*الجوال:* ${formData.phone}
*الخدمة:* ${formData.service}
*التفاصيل:* ${formData.message}`;

    const encodedText = encodeURIComponent(text);
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedText}`, '_blank');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="bg-white p-8 md:p-12 rounded-[3rem] shadow-2xl border border-slate-100 relative overflow-hidden h-full">
      <div className="absolute top-0 right-0 w-48 h-48 bg-brand-primary/5 rounded-bl-[10rem]" />
      
      <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mb-10 relative z-10">{t('formTitle')}</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col gap-3">
            <label className="text-sm font-black text-slate-700 uppercase tracking-widest">{t('name')}</label>
            <input 
              type="text" 
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="h-16 rounded-[1.25rem] border border-slate-200 bg-slate-50 px-6 focus:ring-4 focus:ring-brand-primary/10 focus:border-brand-primary focus:bg-white outline-none transition-all font-bold text-slate-900 shadow-inner" 
              placeholder="اسمك الكريم" 
            />
          </div>
          <div className="flex flex-col gap-3">
            <label className="text-sm font-black text-slate-700 uppercase tracking-widest">{t('phoneLabel')}</label>
            <input 
              type="tel" 
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              className="h-16 rounded-[1.25rem] border border-slate-200 bg-slate-50 px-6 focus:ring-4 focus:ring-brand-primary/10 focus:border-brand-primary focus:bg-white outline-none transition-all font-bold text-slate-900 shadow-inner" 
              placeholder="05XXXXXXXX" 
              dir="ltr" 
            />
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <label className="text-sm font-black text-slate-700 uppercase tracking-widest">{t('serviceType')}</label>
          <select 
            name="service"
            value={formData.service}
            onChange={handleChange}
            className="h-16 rounded-[1.25rem] border border-slate-200 bg-slate-50 px-6 focus:ring-4 focus:ring-brand-primary/10 focus:border-brand-primary focus:bg-white outline-none transition-all font-bold text-slate-900 shadow-inner appearance-none cursor-pointer"
          >
            <option value={t('serviceRepair')}>{t('serviceRepair')}</option>
            <option value={t('serviceInstallation')}>{t('serviceInstallation')}</option>
            <option value={t('serviceCleaning')}>{t('serviceCleaning')}</option>
          </select>
        </div>
        <div className="flex flex-col gap-3">
          <label className="text-sm font-black text-slate-700 uppercase tracking-widest">{t('message')}</label>
          <textarea 
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="h-44 rounded-[1.5rem] border border-slate-200 bg-slate-50 p-6 focus:ring-4 focus:ring-brand-primary/10 focus:border-brand-primary focus:bg-white outline-none transition-all font-bold text-slate-900 shadow-inner resize-none" 
            placeholder="كيف يمكننا مساعدتك؟" 
          />
        </div>
        <Button 
          type="submit"
          size="lg" 
          className="w-full bg-brand-primary hover:bg-brand-primary/90 text-white rounded-[1.5rem] h-20 text-2xl font-black shadow-2xl shadow-brand-primary/20 transition-all hover:-translate-y-1 active:scale-95"
        >
          {t('send')}
        </Button>
      </form>
    </div>
  );
}
