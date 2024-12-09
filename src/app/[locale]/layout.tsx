import { notFound } from 'next/navigation';
import { getTranslations, setRequestLocale } from 'next-intl/server';

import BaseLayout from '@/components/shared/base-layout';
import { routing } from '@/i18n/routing';

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return routing.locales.map(locale => ({ locale }));
}

export async function generateMetadata({ params }: Omit<Props, 'children'>) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'LocaleLayout' });

  return {
    title: t('title'),
  };
}

export default async function RootLayout({ children, params }: Props) {
  const { locale } = await params;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  // Enable static rendering
  setRequestLocale(locale);
  return <BaseLayout locale={locale}>{children}</BaseLayout>;
}
