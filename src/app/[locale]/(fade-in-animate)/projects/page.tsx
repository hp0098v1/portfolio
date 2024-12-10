import { getTranslations } from 'next-intl/server';

import { ProjectCard } from '@/app/[locale]/(fade-in-animate)/projects/_components/project-card';
import { projects } from '@/constants';

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

export default function ProjectsPage() {
  return (
    <main className='min-h-screen px-4 py-20'>
      <div className='mx-auto max-w-4xl'>
        <h1 className='mb-8 text-4xl font-bold'>Projects</h1>
        <div className='grid gap-8'>
          {projects.map(project => (
            <ProjectCard
              demoUrl={project.link}
              description={project.description}
              githubUrl={project.github}
              id={project.id}
              key={`project-${project.id}`}
              tech={project.tech}
              title={project.title}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
