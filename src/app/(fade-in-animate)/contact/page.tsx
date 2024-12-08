'use client';

import { ContactForm } from '@/components/shared/contact-form';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

import { socialLinks } from '@/constants';
import { Github, Linkedin } from 'lucide-react';

export default function ContactPage() {
  return (
    <main className='min-h-screen  py-20 px-4'>
      <div className='max-w-4xl mx-auto'>
        <h1 className='text-4xl font-bold mb-8'>Contact Me</h1>

        <div className='grid md:grid-cols-2 gap-12'>
          <div className='space-y-8'>
            {/* Contact Information */}
            <Card>
              <CardHeader>
                <CardTitle className='text-2xl font-bold'>
                  Contact Information
                </CardTitle>
              </CardHeader>
              <CardContent className='space-y-4'>
                <div>
                  <h3 className='text-lg font-bold mb-2'>Email</h3>
                  <a
                    href={`mailto:${socialLinks.email}`}
                    className='transition-colors hover:text-primary'
                  >
                    {socialLinks.email}
                  </a>
                </div>
                <div>
                  <h3 className='text-lg font-bold mb-2'>Location</h3>
                  <p>
                    {socialLinks.location}
                    <br /> Available for Remote Work
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              {/* Social Links */}
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
          </div>

          <ContactForm />
        </div>
      </div>
    </main>
  );
}
