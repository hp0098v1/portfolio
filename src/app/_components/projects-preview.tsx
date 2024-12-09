import { projects } from '@/constants';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

export function ProjectsPreview() {
  return (
    <section className='py-20 px-4'>
      <div className='max-w-4xl mx-auto'>
        <div className='flex justify-between items-center mb-8'>
          <h2 className='text-3xl font-bold'>Projects</h2>
          <Button asChild variant='link'>
            <Link href='/projects'>View all projects →</Link>
          </Button>
        </div>
        <div className='grid md:grid-cols-2 gap-6'>
          {projects.slice(0, 2).map((project) => (
            <Card key={project.id}>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className='flex flex-wrap gap-2 mb-4'>
                  {project.tech.map((tech, index) => (
                    <Badge key={index} variant='outline'>
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className='flex gap-4'>
                  <Button asChild size='sm' variant='outline'>
                    <Link href={`/projects/${project.id}`}>Learn More</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
