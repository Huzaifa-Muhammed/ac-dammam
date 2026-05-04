import { Link } from '@/i18n/routing';
import { useTranslations } from 'next-intl';
import { Phone, MessageCircle, Mail, MapPin, Share2, Globe, Camera } from 'lucide-react';

export default function Footer() {
  const t = useTranslations('Footer');
  const h = useTranslations('Header');

  return (
    <footer className="bg-bg-dark text-white pt-24 pb-12 relative overflow-hidden">
      {/* Decorative Gradient */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-primary/5 rounded-full blur-[100px] -mr-48 -mb-48" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          {/* Brand & About */}
          <div className="flex flex-col gap-8">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-10 h-10 bg-brand-primary rounded-xl flex items-center justify-center shadow-lg group-hover:rotate-12 transition-transform">
                <span className="text-white font-black text-xl">D</span>
              </div>
              <span className="text-2xl font-black tracking-tight text-white">
                مكيفات الدمام
              </span>
            </Link>
            <p className="text-slate-400 text-lg leading-relaxed font-medium">
              {t('aboutText')}
            </p>
            <div className="flex items-center gap-4">
              {[
                { icon: Camera, label: 'Instagram' },
                { icon: Globe, label: 'Twitter' },
                { icon: Share2, label: 'Facebook' }
              ].map((social, idx) => (
                <a 
                  key={idx} 
                  href="#" 
                  className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center hover:bg-brand-primary hover:text-white transition-all duration-300 border border-white/10 group/social"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5 group-hover/social:scale-110 transition-transform" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-black mb-8 text-white uppercase tracking-widest">{t('quickLinks')}</h4>
            <ul className="flex flex-col gap-5">
              {[
                { href: '/', label: h('home') },
                { href: '/services', label: h('services') },
                { href: '/pricing', label: h('pricing') },
                { href: '/about', label: h('about') },
                { href: '/contact', label: h('contact') },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-slate-400 hover:text-brand-accent transition-colors text-lg font-medium flex items-center gap-2 group">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-black mb-8 text-white uppercase tracking-widest">{t('ourServices')}</h4>
            <ul className="flex flex-col gap-5">
              {[
                t('repair'),
                t('installation'),
                t('cleaning'),
                t('gasRecharge'),
                t('emergency')
              ].map((service, idx) => (
                <li key={idx} className="text-slate-400 text-lg font-medium hover:text-slate-300 transition-colors cursor-default">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-black mb-8 text-white uppercase tracking-widest">{t('contactInfo')}</h4>
            <ul className="flex flex-col gap-8">
              <li className="flex items-start gap-5 group">
                <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-brand-accent shrink-0 border border-white/10 group-hover:bg-brand-primary/20 transition-colors">
                  <MapPin className="h-6 w-6" />
                </div>
                <span className="text-slate-400 text-lg leading-tight font-medium">
                  الدمام، المنطقة الشرقية، المملكة العربية السعودية
                </span>
              </li>
              <li className="flex items-center gap-5 group">
                <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-brand-accent shrink-0 border border-white/10 group-hover:bg-brand-primary/20 transition-colors">
                  <Phone className="h-6 w-6" />
                </div>
                <span className="text-slate-400 text-lg font-bold">05XXXXXXXX</span>
              </li>
              <li className="flex items-center gap-5 group">
                <div className="w-12 h-12 rounded-2xl bg-success/10 flex items-center justify-center text-success shrink-0 border border-success/10 group-hover:bg-success/20 transition-colors">
                  <MessageCircle className="h-6 w-6" />
                </div>
                <span className="text-slate-400 text-lg font-bold">واتساب: 05XXXXXXXX</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-12 flex flex-col md:flex-row items-center justify-between gap-8">
          <p className="text-slate-500 text-sm font-bold">
            {t('copyright', { year: new Date().getFullYear() })}
          </p>
          <div className="flex items-center gap-10">
            <a href="#" className="text-slate-500 hover:text-white transition-colors text-sm font-bold uppercase tracking-widest">
              {t('privacyPolicy')}
            </a>
            <a href="#" className="text-slate-500 hover:text-white transition-colors text-sm font-bold uppercase tracking-widest">
              {t('termsOfService')}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
