import { SocialLinks } from '@/components/shared/social-links';
import { Card, CardContent } from '@/components/ui/card';

export function Background() {
  return (
    <section>
      <h2 className='mb-4 text-2xl font-bold text-primary'>Background</h2>
      <Card>
        <CardContent className='space-y-4 p-6'>
          <p className='leading-relaxed text-muted-foreground'>
            I&apos;m a passionate frontend developer with several years of
            experience in creating modern web applications. My journey in web
            development started with a curiosity about how websites work, which
            led me to dive deep into the world of frontend development.
          </p>
          <p className='leading-relaxed text-muted-foreground'>
            I specialize in building responsive, user-friendly interfaces using
            modern technologies like React, Next.js, and TypeScript. I&apos;m
            particularly interested in creating seamless user experiences and
            optimizing web performance.
          </p>

          <SocialLinks />
        </CardContent>
      </Card>
    </section>
  );
}
