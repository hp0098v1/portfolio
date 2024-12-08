'use client';

import { useState } from 'react';
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
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

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

          <Card>
            <CardHeader>
              <CardTitle>Send a Message</CardTitle>
              <CardDescription>
                I&apos;ll get back to you as soon as possible
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className='space-y-4'>
                <div className='space-y-2'>
                  <Label htmlFor='name'>Name</Label>
                  <Input
                    id='name'
                    name='name'
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className='space-y-2'>
                  <Label htmlFor='email'>Email</Label>
                  <Input
                    type='email'
                    id='email'
                    name='email'
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className='space-y-2'>
                  <Label htmlFor='message'>Message</Label>
                  <Textarea
                    id='message'
                    name='message'
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                  />
                </div>

                <Button type='submit' className='w-full'>
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
