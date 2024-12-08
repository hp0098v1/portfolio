import './globals.css';

import type { Metadata } from 'next';
import { Space_Mono } from 'next/font/google';

import { Navbar } from '@/components/shared/navbar';

const spaceMono = Space_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-space-mono',
});

export const metadata: Metadata = {
  title: 'Frontend Developer Portfolio',
  description:
    'Personal portfolio showcasing my frontend development projects and skills',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className='dark'>
      <body className={` ${spaceMono.variable}  antialiased`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
