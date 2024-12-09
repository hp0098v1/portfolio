import { Github, Linkedin, Mail } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { socialLinks } from '@/constants';
import { cn } from '@/lib/utils';

type Props = {
  showEmail?: boolean;
  showGithub?: boolean;
  showLinkedin?: boolean;
  className?: string;
};

export function SocialLinks({
  showEmail = true,
  showGithub = true,
  showLinkedin = true,
  className,
}: Props) {
  return (
    <div className={cn('flex flex-wrap items-center gap-2', className)}>
      {showGithub && (
        <Button asChild variant='outline'>
          <a
            href={socialLinks.github}
            rel='noopener noreferrer'
            target='_blank'
          >
            <Github /> GitHub
          </a>
        </Button>
      )}
      {showLinkedin && (
        <Button asChild variant='outline'>
          <a
            href={socialLinks.linkedin}
            rel='noopener noreferrer'
            target='_blank'
          >
            <Linkedin /> LinkedIn
          </a>
        </Button>
      )}
      {showEmail && (
        <Button asChild variant='outline'>
          <a href={`mailto:${socialLinks.email}`}>
            <Mail />
            Email
          </a>
        </Button>
      )}
    </div>
  );
}
