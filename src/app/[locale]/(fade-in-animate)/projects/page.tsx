import { getTranslations } from 'next-intl/server';

import { ProjectCard } from '@/app/[locale]/(fade-in-animate)/projects/_components/project-card';

export type Project = {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  tech: string[];
  image: string;
  features: string[];
  links: {
    github: string;
    live: string;
  };
};
type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Omit<Props, 'children'>) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'metadata.projects' });

  return {
    title: t('title'),
    description: t('description'),
  };
}

export default async function ProjectsPage({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'projects' });

  return (
    <main className='min-h-screen px-4 py-20'>
      <div className='mx-auto max-w-4xl'>
        <h1 className='mb-8 text-4xl font-bold'>{t('title')}</h1>
        <div className='grid gap-8'>
          {t.raw('items').map((project: Project) => (
            <ProjectCard
              description={project.description}
              key={`project-${project.slug}`}
              links={project.links}
              slug={project.slug}
              tech={project.tech}
              title={project.title}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
