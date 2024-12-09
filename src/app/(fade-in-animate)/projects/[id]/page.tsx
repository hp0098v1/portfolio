import { Github, Monitor } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { projects } from '@/constants';

export function generateStaticParams() {
  return projects.map(project => ({
    id: project.id,
  }));
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const awaitedParams = await params;
  const project = projects.find(p => p.id === awaitedParams.id);

  if (!project) {
    notFound();
  }

  return (
    <main className='min-h-screen px-4 py-20'>
      <div className='mx-auto max-w-4xl'>
        <Link
          className='mb-8 inline-block text-primary underline-offset-4 hover:underline'
          href='/projects'
        >
          ← Back to Projects
        </Link>

        <div className='relative mb-8 h-96 w-full md:h-[34rem]'>
          <Image
            fill
            alt={project.title}
            className='rounded-lg object-cover object-center shadow-lg'
            src={project.image}
          />
        </div>

        <h1 className='mb-6 text-4xl font-bold'>{project.title}</h1>
        <p className='mb-8 text-xl text-muted-foreground'>
          {project.longDescription}
        </p>

        <div className='mb-12'>
          <h2 className='mb-4 text-2xl font-bold'>Technologies Used</h2>
          <div className='flex flex-wrap gap-2'>
            {project.tech.map((tech, index) => (
              <Badge
                className='px-4 py-2 text-base'
                key={index}
                variant='secondary'
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>

        <div className='mb-12'>
          <h2 className='mb-4 text-2xl font-bold'>Key Features</h2>
          <ul className='list-inside list-disc space-y-2 text-muted-foreground'>
            {project.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>

        <div className='flex gap-4'>
          <Button asChild variant='outline'>
            <a href={project.github} rel='noopener noreferrer' target='_blank'>
              <Github />
              Github
            </a>
          </Button>
          <Button asChild variant='outline'>
            <a href={project.link} rel='noopener noreferrer' target='_blank'>
              <Monitor /> Live Demo
            </a>
          </Button>
        </div>
      </div>
    </main>
  );
}
