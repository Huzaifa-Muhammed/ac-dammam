import Link from 'next/link';
import { useTranslations } from 'next-intl';

export default function NotFound() {
  const t = useTranslations('NotFound');

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-4 text-center">
      <h1 className="text-9xl font-black text-primary/20 mb-4">404</h1>
      <h2 className="text-3xl font-bold mb-6">{t('title')}</h2>
      <p className="text-muted-foreground mb-10 max-w-md mx-auto">
        {t('description')}
      </p>
      <Link
        href="/"
        className="bg-primary hover:bg-primary-dark text-white font-bold py-4 px-8 rounded-full transition-all"
      >
        {t('goHome')}
      </Link>
    </div>
  );
}
