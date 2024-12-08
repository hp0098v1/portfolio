import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { BookOpen, Github, Monitor } from 'lucide-react';
import Link from 'next/link';

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
        <h2 className='text-2xl font-bold mb-4'>{title}</h2>
        <p className='text-gray-300 mb-6'>{description}</p>

        <div className='flex flex-wrap gap-2 mb-6'>
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

          <Button variant='outline' asChild>
            <a href={githubUrl} target='_blank' rel='noopener noreferrer'>
              <Github />
              Github
            </a>
          </Button>
          <Button variant='outline' asChild>
            <a href={demoUrl} target='_blank' rel='noopener noreferrer'>
              <Monitor />
              Live Demo
            </a>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
