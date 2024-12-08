import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { projects } from '@/constants';
import { Github, Monitor } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }));
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const awaitedParams = await params;
  const project = projects.find((p) => p.id === awaitedParams.id);

  if (!project) {
    notFound();
  }

  return (
    <main className='min-h-screen py-20 px-4'>
      <div className='max-w-4xl mx-auto'>
        <Link
          href='/projects'
          className='text-primary hover:underline underline-offset-4 mb-8 inline-block'
        >
          ← Back to Projects
        </Link>

        <div className='w-full h-96 md:h-[34rem] relative mb-8'>
          <Image
            src={project.image}
            alt={project.title}
            className='rounded-lg shadow-lg object-cover object-center'
            fill
          />
        </div>

        <h1 className='text-4xl font-bold mb-6'>{project.title}</h1>
        <p className='text-xl text-gray-300 mb-8'>{project.longDescription}</p>

        <div className='mb-12'>
          <h2 className='text-2xl font-bold mb-4'>Technologies Used</h2>
          <div className='flex flex-wrap gap-2'>
            {project.tech.map((tech, index) => (
              <Badge
                className='px-4 py-2 text-base'
                variant='secondary'
                key={index}
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>

        <div className='mb-12'>
          <h2 className='text-2xl font-bold mb-4'>Key Features</h2>
          <ul className='list-disc list-inside space-y-2 text-gray-300'>
            {project.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>

        <div className='flex gap-4'>
          <Button variant='outline' asChild>
            <a href={project.github} target='_blank' rel='noopener noreferrer'>
              <Github />
              Github
            </a>
          </Button>
          <Button variant='outline' asChild>
            <a href={project.link} target='_blank' rel='noopener noreferrer'>
              <Monitor /> Live Demo
            </a>
          </Button>
        </div>
      </div>
    </main>
  );
}
