'use client';

import { socialLinks } from '@/constants';
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
            <div className='bg-secondary p-8 rounded-lg mb-8'>
              <h2 className='text-2xl font-bold mb-6 text-accent'>
                Contact Information
              </h2>
              <div className='space-y-4'>
                <div>
                  <h3 className='text-lg font-bold mb-2'>Email</h3>
                  <a
                    href={`mailto:${socialLinks.email}`}
                    className='text-gray-300 hover:text-accent transition-colors'
                  >
                    {socialLinks.email}
                  </a>
                </div>
                <div>
                  <h3 className='text-lg font-bold mb-2'>Location</h3>
                  <p className='text-gray-300'>Available for Remote Work</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className='bg-secondary p-8 rounded-lg'>
              <h2 className='text-2xl font-bold mb-6 text-accent'>
                Connect With Me
              </h2>
              <div className='space-y-4'>
                <a
                  href={socialLinks.github}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='flex items-center text-gray-300 hover:text-accent transition-colors'
                >
                  <span className='text-lg'>GitHub</span>
                </a>
                <a
                  href={socialLinks.linkedin}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='flex items-center text-gray-300 hover:text-accent transition-colors'
                >
                  <span className='text-lg'>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className='bg-secondary p-8 rounded-lg'>
            <h2 className='text-2xl font-bold mb-6 text-accent'>
              Send a Message
            </h2>
            <form onSubmit={handleSubmit} className='space-y-6'>
              <div>
                <label
                  htmlFor='name'
                  className='block text-sm font-medium mb-2'
                >
                  Name
                </label>
                <input
                  type='text'
                  id='name'
                  name='name'
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className='w-full px-4 py-2 rounded-lg bg-primary text-white border border-gray-600 focus:border-accent focus:outline-none'
                />
              </div>

              <div>
                <label
                  htmlFor='email'
                  className='block text-sm font-medium mb-2'
                >
                  Email
                </label>
                <input
                  type='email'
                  id='email'
                  name='email'
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className='w-full px-4 py-2 rounded-lg bg-primary text-white border border-gray-600 focus:border-accent focus:outline-none'
                />
              </div>

              <div>
                <label
                  htmlFor='message'
                  className='block text-sm font-medium mb-2'
                >
                  Message
                </label>
                <textarea
                  id='message'
                  name='message'
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className='w-full px-4 py-2 rounded-lg bg-primary text-white border border-gray-600 focus:border-accent focus:outline-none resize-none'
                />
              </div>

              <button
                type='submit'
                className='w-full bg-accent text-primary font-bold py-3 px-6 rounded-lg hover:bg-accent-light transition-colors'
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
