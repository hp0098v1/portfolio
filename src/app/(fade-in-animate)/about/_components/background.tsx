import { Github, Linkedin, Mail } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { socialLinks } from '@/constants';

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

          <div className='flex flex-wrap gap-4'>
            <Button asChild variant='outline'>
              <a
                href={socialLinks.github}
                rel='noopener noreferrer'
                target='_blank'
              >
                <Github /> GitHub
              </a>
            </Button>
            <Button asChild variant='outline'>
              <a
                href={socialLinks.linkedin}
                rel='noopener noreferrer'
                target='_blank'
              >
                <Linkedin />
                LinkedIn
              </a>
            </Button>
            <Button asChild variant='outline'>
              <a href={`mailto:${socialLinks.email}`}>
                <Mail />
                Email
              </a>
            </Button>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
