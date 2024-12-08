import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function AboutPreview() {
  return (
    <section className='py-20 px-4'>
      <div className='max-w-4xl mx-auto'>
        <div className='flex justify-between items-center mb-8'>
          <h2 className='text-3xl font-bold'>About</h2>
          <Button asChild variant='link'>
            <Link href='/about'>Learn more →</Link>
          </Button>
        </div>
        <Card>
          <CardContent className='p-6'>
            <p className='text-muted-foreground leading-relaxed mb-8'>
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
