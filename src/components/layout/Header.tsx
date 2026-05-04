'use client';

import { Link, usePathname } from '@/i18n/routing';
import { useTranslations, useLocale } from 'next-intl';
import { Button } from '@/components/ui/button';
import { Phone, MessageCircle, Menu, X, Globe } from 'lucide-react';
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

export default function Header() {
  const t = useTranslations('Header');
  const locale = useLocale();
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/', label: t('home') },
    { href: '/services', label: t('services') },
    { href: '/pricing', label: t('pricing') },
    { href: '/about', label: t('about') },
    { href: '/contact', label: t('contact') },
  ];

  const otherLocale = locale === 'ar' ? 'en' : 'ar';

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
      isScrolled ? "py-3 sm:py-4" : "py-5 sm:py-6"
    )}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className={cn(
          "flex items-center justify-between px-4 sm:px-6 py-2.5 sm:py-3 rounded-2xl transition-all duration-500 shadow-brand-primary/5",
          isScrolled ? "bg-white/90 backdrop-blur-xl shadow-xl border border-slate-100" : "bg-white/10 backdrop-blur-md border border-white/10"
        )}>
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group shrink-0">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-brand-primary rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg group-hover:rotate-12 transition-transform">
              <span className="text-white font-black text-lg sm:text-xl">D</span>
            </div>
            <span className={cn(
              "text-lg sm:text-xl font-black tracking-tight transition-colors whitespace-nowrap",
              isScrolled ? "text-slate-900" : "text-white"
            )}>
              مكيفات الدمام
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "px-4 py-2 rounded-lg text-sm font-bold transition-all",
                  isScrolled ? "text-slate-600 hover:text-brand-primary hover:bg-slate-50" : "text-white/80 hover:text-white hover:bg-white/10"
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2 sm:gap-4">
            <Link
              href={pathname}
              locale={otherLocale}
              className={cn(
                "hidden sm:flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-black uppercase tracking-widest transition-all",
                isScrolled ? "text-slate-500 hover:bg-slate-100" : "text-white/70 hover:bg-white/20"
              )}
            >
              <Globe className="w-4 h-4" />
              {otherLocale}
            </Link>
            <Button size="sm" className="bg-brand-primary hover:bg-brand-primary/90 text-white rounded-xl px-4 sm:px-6 h-10 sm:h-11 font-bold shadow-lg shadow-brand-primary/20 hidden xs:flex">
              <Phone className="ml-2 h-4 w-4" />
              <span className="hidden sm:inline">05XXXXXXXX</span>
              <span className="sm:hidden">اتصل</span>
            </Button>

            {/* Mobile Menu Toggle */}
            <button
              className={cn(
                "p-2 rounded-xl transition-colors",
                isScrolled ? "text-slate-900 hover:bg-slate-100" : "text-white hover:bg-white/10"
              )}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle Menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 right-0 mt-4 px-4 animate-in fade-in slide-in-from-top-4 duration-300">
          <div className="bg-white rounded-3xl shadow-2xl border border-slate-100 p-6 flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-4 rounded-xl text-lg font-bold text-slate-700 hover:bg-slate-50 hover:text-brand-primary transition-all flex items-center justify-between group"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
                <ArrowRight className="w-5 h-5 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all rtl:rotate-180" />
              </Link>
            ))}
            <div className="h-px bg-slate-100 my-4" />
            <div className="flex flex-col gap-4">
              <Button className="w-full bg-brand-primary text-white rounded-2xl h-14 font-black text-lg">
                <Phone className="ml-2 h-5 w-5" />
                05XXXXXXXX
              </Button>
              <div className="flex items-center gap-4">
                 <Link
                    href={pathname}
                    locale={otherLocale}
                    className="flex-1 flex items-center justify-center gap-2 h-14 rounded-2xl bg-slate-100 font-black text-slate-700 uppercase"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Globe className="w-5 h-5" />
                    {otherLocale === 'ar' ? 'العربية' : 'English'}
                  </Link>
                  <Button variant="outline" className="flex-1 border-emerald-500 text-emerald-600 rounded-2xl h-14 font-black" onClick={() => window.open('https://wa.me/966XXXXXXXXX')}>
                    <MessageCircle className="ml-2 h-5 w-5" />
                    واتساب
                  </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

// Helper to avoid build error
function ArrowRight({ className }: { className?: string }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
    </svg>
  );
}
