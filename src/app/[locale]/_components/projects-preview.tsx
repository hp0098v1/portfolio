import { BookOpen } from 'lucide-react';
import { useTranslations } from 'next-intl';

import { Project } from '@/app/[locale]/(fade-in-animate)/projects/page';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Link } from '@/i18n/routing';

export function ProjectsPreview() {
  const t = useTranslations('home.projects');
  const t2 = useTranslations('projects');

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
          {t2
            .raw('items')
            .slice(0, 2)
            .map((project: Project) => (
              <Card key={project.slug}>
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
                    <Button asChild>
                      <Link href={`/projects/${project.slug}`}>
                        <BookOpen /> {t2('viewDetails')}
                      </Link>
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
