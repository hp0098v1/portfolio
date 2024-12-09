import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { socialLinks } from '@/constants';
import { Github, Linkedin } from 'lucide-react';
export function SocialLinks() {
  return (
    <Card>
      <CardHeader>
    <CardTitle className='text-2xl font-bold'>
      Connect With Me
    </CardTitle>
  </CardHeader>
  <CardContent>
    <div className='space-y-4'>
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
      </CardContent>
    </Card>
  );
}
