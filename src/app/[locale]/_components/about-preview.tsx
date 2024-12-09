import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from '@/i18n/routing';

export function AboutPreview() {
  return (
    <section className='px-4 py-20'>
      <div className='mx-auto max-w-4xl'>
        <div className='mb-8 flex items-center justify-between'>
          <h2 className='text-3xl font-bold'>About</h2>
          <Button asChild variant='link'>
            <Link href='/about'>Learn more →</Link>
          </Button>
        </div>
        <Card>
          <CardContent className='p-6'>
            <p className='mb-8 leading-relaxed text-muted-foreground'>
              I&apos;m a passionate frontend developer with a keen eye for
              design and a commitment to creating intuitive user experiences.
              With a strong foundation in modern web technologies, I transform
              ideas into clean, efficient, and scalable code.
            </p>
            <Button asChild variant='outline'>
              <Link href='/about'>Learn More</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
