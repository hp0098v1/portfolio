import { getTranslations } from 'next-intl/server';

import { Background } from '@/app/[locale]/(fade-in-animate)/about/_components/background';
import { Education } from '@/app/[locale]/(fade-in-animate)/about/_components/education';
import { Experience } from '@/app/[locale]/(fade-in-animate)/about/_components/experience';
import { Skills } from '@/app/[locale]/(fade-in-animate)/about/_components/skills';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Omit<Props, 'children'>) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'metadata.about' });

  return {
    title: t('title'),
    description: t('description'),
  };
}

export default async function AboutPage() {
  return (
    <main className='mx-auto min-h-screen max-w-4xl px-4 py-20'>
      <h1 className='mb-8 text-4xl font-bold'>About Me</h1>

      <div className='space-y-12'>
        <Background />

        <Experience />

        <Skills />

        <Education />
      </div>
    </main>
  );
}
