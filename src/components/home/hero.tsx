import { socialLinks } from '@/constants';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Github, Linkedin } from 'lucide-react';

export function Hero() {
  return (
    <section className='min-h-[calc(100vh-4rem)] flex items-center justify-center px-4'>
      <div className='max-w-4xl mx-auto text-center'>
        <h1 className='text-4xl md:text-6xl font-bold mb-6'>
          Frontend Developer
        </h1>
        <p className='text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto'>
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
              <Linkedin /> LinkedIn
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
