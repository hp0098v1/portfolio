import { Button } from '@/components/ui/button';
import { socialLinks } from '@/constants';
import { Github, Linkedin, Mail } from 'lucide-react';

export function ContactMe() {
  return (
    <section>
      <h2 className='text-2xl font-bold mb-4 text-primary'>Connect With Me</h2>
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
    </section>
  );
}
