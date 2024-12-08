'use client';

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
import { socialLinks } from '@/constants';
import { Github, Linkedin } from 'lucide-react';
import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle form submission
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
    <main className='min-h-screen  py-20 px-4'>
      <div className='max-w-4xl mx-auto'>
        <h1 className='text-4xl font-bold mb-8'>Contact Me</h1>

        <div className='grid md:grid-cols-2 gap-12'>
          {/* Contact Information */}
          <div>
            <div className='bg-card text-card-foreground p-8 rounded-lg mb-8'>
              <h2 className='text-2xl font-bold mb-6'>Contact Information</h2>
              <div className='space-y-4'>
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
              </div>
            </div>

            {/* Social Links */}
            <div className='bg-card text-card-foreground p-8 rounded-lg'>
              <h2 className='text-2xl font-bold mb-6 '>Connect With Me</h2>
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
            </div>
          </div>

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
    </main>
  );
}
