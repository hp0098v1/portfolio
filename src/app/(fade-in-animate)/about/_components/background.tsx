import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { socialLinks } from '@/constants';
import { Github, Linkedin, Mail } from 'lucide-react';

export function Background() {
  return (
    <section>
      <h2 className='text-2xl font-bold mb-4 text-primary'>Background</h2>
      <Card>
        <CardContent className='p-6 space-y-4'>
          <p className='text-muted-foreground leading-relaxed'>
            I&apos;m a passionate frontend developer with several years of
            experience in creating modern web applications. My journey in web
            development started with a curiosity about how websites work, which
            led me to dive deep into the world of frontend development.
          </p>
          <p className='text-muted-foreground leading-relaxed'>
            I specialize in building responsive, user-friendly interfaces using
            modern technologies like React, Next.js, and TypeScript. I&apos;m
            particularly interested in creating seamless user experiences and
            optimizing web performance.
          </p>

          <div className='flex flex-wrap gap-4'>
            <Button asChild variant='outline'>
              <a
                href={socialLinks.github}
                target='_blank'
                rel='noopener noreferrer'
              >
                <Github /> GitHub
              </a>
            </Button>
            <Button asChild variant='outline'>
              <a
                href={socialLinks.linkedin}
                target='_blank'
                rel='noopener noreferrer'
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
