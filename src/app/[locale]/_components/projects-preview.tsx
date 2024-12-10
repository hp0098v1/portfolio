import { useTranslations } from 'next-intl';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { projects } from '@/constants';
import { Link } from '@/i18n/routing';

export function ProjectsPreview() {
  const t = useTranslations('home.projects');

  return (
    <section className='px-4 py-20'>
      <div className='mx-auto max-w-4xl'>
        <div className='mb-8 flex items-center justify-between'>
          <h2 className='text-3xl font-bold'>{t('title')}</h2>
          <Button asChild variant='link'>
            <Link href='/projects'>{t('link')}</Link>
          </Button>
        </div>
        <div className='grid gap-6 md:grid-cols-2'>
          {projects.slice(0, 2).map(project => (
            <Card key={project.id}>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className='mb-4 flex flex-wrap gap-2'>
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
