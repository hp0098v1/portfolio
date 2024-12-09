import { Github, Linkedin } from 'lucide-react';

import { ContactForm } from '@/components/shared/contact-form';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { socialLinks } from '@/constants';

export function Contact() {
  return (
    <section className='px-4 py-20'>
      <div className='mx-auto max-w-4xl'>
        <h2 className='mb-8 text-3xl font-bold'>Get in Touch</h2>
        <div className='grid gap-8 md:grid-cols-2'>
          <Card>
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
              <CardDescription>
                Feel free to reach out through any of these channels
              </CardDescription>
            </CardHeader>
            <CardContent className='space-y-4'>
              <div>
                <h3 className='mb-2 font-semibold'>Email</h3>
                <a
                  className='text-muted-foreground transition-colors hover:text-primary'
                  href={`mailto:${socialLinks.email}`}
                >
                  {socialLinks.email}
                </a>
              </div>
              <div>
                <h3 className='mb-2 font-semibold'>Location</h3>
                <p className='text-muted-foreground'>
                  {socialLinks.location}
                  <br />
                  Available for Remote Work
                </p>
              </div>
              <div className='flex gap-4 pt-4'>
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

          <ContactForm />
        </div>
      </div>
    </section>
  );
}
