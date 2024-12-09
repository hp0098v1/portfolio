import { BookOpen, Github, Monitor } from 'lucide-react';
import Link from 'next/link';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

type Props = {
  id: string;
  title: string;
  description: string;
  tech: string[];
  demoUrl: string;
  githubUrl: string;
};

export function ProjectCard({
  id,
  title,
  description,
  tech,
  demoUrl,
  githubUrl,
}: Props) {
  return (
    <Card>
      <CardContent className='p-6'>
        <h2 className='mb-4 text-2xl font-bold'>{title}</h2>
        <p className='mb-6 text-muted-foreground'>{description}</p>

        <div className='mb-6 flex flex-wrap gap-2'>
          {tech.map((tech, index) => (
            <Badge key={index} variant='outline'>
              {tech}
            </Badge>
          ))}
        </div>

        <div className='flex flex-wrap gap-4'>
          <Button asChild>
            <Link href={`/projects/${id}`}>
              <BookOpen /> View Details
            </Link>
          </Button>

          <Button asChild variant='outline'>
            <a href={githubUrl} rel='noopener noreferrer' target='_blank'>
              <Github />
              Github
            </a>
          </Button>
          <Button asChild variant='outline'>
            <a href={demoUrl} rel='noopener noreferrer' target='_blank'>
              <Monitor />
              Live Demo
            </a>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
