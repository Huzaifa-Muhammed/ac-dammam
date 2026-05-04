'use client';

import { MessageCircle } from 'lucide-react';
import { useLocale } from 'next-intl';

export default function WhatsAppFAB() {
  const locale = useLocale();
  const phone = '966XXXXXXXXX';
  const message = locale === 'ar' ? 'مرحباً، أحتاج صيانة مكيف' : 'Hello, I need AC maintenance';
  const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`fixed bottom-6 ${locale === 'ar' ? 'left-6' : 'right-6'} z-40 bg-success text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform duration-300 animate-bounce group`}
      aria-label="WhatsApp"
    >
      <MessageCircle className="h-8 w-8" />
      <span className={`absolute ${locale === 'ar' ? 'right-full mr-3' : 'left-full ml-3'} top-1/2 -translate-y-1/2 bg-white text-text-ar px-3 py-1 rounded-lg text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-md pointer-events-none`}>
        {locale === 'ar' ? 'تحدث معنا' : 'Chat with us'}
      </span>
    </a>
  );
}
