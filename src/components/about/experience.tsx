import { Card, CardContent } from '@/components/ui/card';

export function Experience() {
  return (
    <section>
      <h2 className='text-2xl font-bold mb-4 text-primary'>Experience</h2>
      <div className='space-y-6'>
        <Card>
          <CardContent className='p-6'>
            <h3 className='text-xl font-bold mb-2'>
              Senior Frontend Developer
            </h3>
            <p className='text-primary mb-2'>Tech Company • 2021 - Present</p>
            <ul className='list-disc list-inside text-muted-foreground space-y-2'>
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
            <h3 className='text-xl font-bold mb-2'>Frontend Developer</h3>
            <p className='text-primary mb-2'>Digital Agency • 2019 - 2021</p>
            <ul className='list-disc list-inside text-muted-foreground space-y-2'>
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
