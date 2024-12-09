import { Github, Linkedin } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { socialLinks } from '@/constants';

export function SocialLinks() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className='text-2xl font-bold'>Connect With Me</CardTitle>
      </CardHeader>
      <CardContent>
        <div className='space-y-4'>
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
      </CardContent>
    </Card>
  );
}
