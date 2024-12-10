import ProjectLinks from '@/app/[locale]/(fade-in-animate)/projects/_components/project-links';
import { Project } from '@/app/[locale]/(fade-in-animate)/projects/page';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';

type Props = Pick<Project, 'title' | 'description' | 'tech' | 'slug' | 'links'>;

export function ProjectCard({ title, description, tech, slug, links }: Props) {
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

        <ProjectLinks links={links} slug={slug} />
      </CardContent>
    </Card>
  );
}
