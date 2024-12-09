
import { Github, Linkedin } from 'lucide-react';

import { socialLinks } from '@/constants';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

import { ContactForm } from '@/components/shared/contact-form';

export function Contact() {
  

  return (
    <section className='py-20 px-4 '>
      <div className='max-w-4xl mx-auto'>
        <h2 className='text-3xl font-bold mb-8'>Get in Touch</h2>
        <div className='grid md:grid-cols-2 gap-8'>
          <Card>
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
              <CardDescription>
                Feel free to reach out through any of these channels
              </CardDescription>
            </CardHeader>
            <CardContent className='space-y-4'>
              <div>
                <h3 className='font-semibold mb-2'>Email</h3>
                <a
                  href={`mailto:${socialLinks.email}`}
                  className='text-muted-foreground hover:text-primary transition-colors'
                >
                  {socialLinks.email}
                </a>
              </div>
              <div>
                <h3 className='font-semibold mb-2'>Location</h3>
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

          <ContactForm />
        </div>
      </div>
    </section>
  );
}
