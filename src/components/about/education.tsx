import { Card, CardContent } from '@/components/ui/card';

export function Education() {
  return (
    <section>
      <h2 className='text-2xl font-bold mb-4 text-primary'>Education</h2>
      <Card>
        <CardContent className='p-6'>
          <h3 className='text-xl font-bold mb-2'>Bachelor in Computer Science</h3>
          <p className='text-primary mb-2'>University Name • 2015 - 2019</p>
          <p className='text-muted-foreground'>
            Focused on web development and software engineering principles. 
            Participated in various hackathons and coding competitions.
          </p>
        </CardContent>
      </Card>
    </section>
  );
}
