import { Card, CardContent } from '@/components/ui/card';

export function Experience() {
  return (
    <section>
      <h2 className='mb-4 text-2xl font-bold text-primary'>Experience</h2>
      <div className='space-y-6'>
        <Card>
          <CardContent className='p-6'>
            <h3 className='mb-2 text-xl font-bold'>
              Senior Frontend Developer
            </h3>
            <p className='mb-2 text-primary'>Tech Company • 2021 - Present</p>
            <ul className='list-inside list-disc space-y-2 text-muted-foreground'>
              <li>
                Led the development of multiple high-impact web applications
              </li>
              <li>Mentored junior developers and conducted code reviews</li>
              <li>
                Implemented best practices and modern development workflows
              </li>
            </ul>
          </CardContent>
        </Card>
        <Card>
          <CardContent className='p-6'>
            <h3 className='mb-2 text-xl font-bold'>Frontend Developer</h3>
            <p className='mb-2 text-primary'>Digital Agency • 2019 - 2021</p>
            <ul className='list-inside list-disc space-y-2 text-muted-foreground'>
              <li>
                Developed responsive web applications using React and TypeScript
              </li>
              <li>
                Collaborated with designers to implement pixel-perfect designs
              </li>
              <li>Improved site performance and SEO</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
