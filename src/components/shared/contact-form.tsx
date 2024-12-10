'use client';
import { useTranslations } from 'next-intl';
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

const initialValues = {
  name: '',
  email: '',
  subject: '',
  message: '',
};

export function ContactForm() {
  const t = useTranslations('shared.contact.contactForm');

  const [formData, setFormData] = useState(initialValues);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/sendEmail', {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {
          'Content-type': 'application/json',
        },
      });

      const data = await response.json();
      console.log(data);
      setFormData(initialValues);
    } catch (error) {
      console.log(error);
    }
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
        <CardTitle className='text-2xl font-bold'>{t('title')}</CardTitle>
        <CardDescription>{t('description')}</CardDescription>
      </CardHeader>
      <CardContent>
        <form className='space-y-4' onSubmit={handleSubmit}>
          <div className='space-y-2'>
            <Label htmlFor='name'>{t('name')}</Label>
            <Input
              required
              id='name'
              name='name'
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          <div className='space-y-2'>
            <Label htmlFor='email'>{t('email')}</Label>
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
            <Label htmlFor='subject'>{t('subject')}</Label>
            <Input
              required
              id='subject'
              name='subject'
              value={formData.subject}
              onChange={handleChange}
            />
          </div>

          <div className='space-y-2'>
            <Label htmlFor='message'>{t('message')}</Label>
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
            {t('submitBtn')}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
