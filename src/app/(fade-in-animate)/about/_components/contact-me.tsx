import { Github, Linkedin, Mail } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { socialLinks } from '@/constants';

export function ContactMe() {
  return (
    <section>
      <h2 className='mb-4 text-2xl font-bold text-primary'>Connect With Me</h2>
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
    </section>
  );
}
