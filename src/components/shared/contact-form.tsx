'use client';
import { useState } from 'react';

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

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className='text-2xl font-bold'>Send a Message</CardTitle>
        <CardDescription>
          I&apos;ll get back to you as soon as possible
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form className='space-y-4' onSubmit={handleSubmit}>
          <div className='space-y-2'>
            <Label htmlFor='name'>Name</Label>
            <Input
              required
              id='name'
              name='name'
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          <div className='space-y-2'>
            <Label htmlFor='email'>Email</Label>
            <Input
              required
              id='email'
              name='email'
              type='email'
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className='space-y-2'>
            <Label htmlFor='subject'>Subject</Label>
            <Input
              required
              id='subject'
              name='subject'
              value={formData.subject}
              onChange={handleChange}
            />
          </div>

          <div className='space-y-2'>
            <Label htmlFor='message'>Message</Label>
            <Textarea
              required
              id='message'
              name='message'
              rows={4}
              value={formData.message}
              onChange={handleChange}
            />
          </div>

          <Button className='w-full' type='submit'>
            Send Message
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
