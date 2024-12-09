import { Github, Linkedin } from 'lucide-react';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { socialLinks } from '@/constants';

export function Hero() {
  return (
    <section className='flex min-h-[calc(100vh-4rem)] items-center justify-center px-4'>
      <div className='mx-auto max-w-4xl text-center'>
        <h1 className='mb-6 text-4xl font-bold md:text-6xl'>
          Frontend Developer
        </h1>
        <p className='mx-auto mb-8 max-w-2xl text-lg text-muted-foreground md:text-xl'>
          I craft responsive and performant web applications with modern
          technologies
        </p>
        <div className='flex flex-wrap justify-center gap-4'>
          <Button asChild variant='default'>
            <Link href='/projects'>View Projects</Link>
          </Button>
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
              <Linkedin /> LinkedIn
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
