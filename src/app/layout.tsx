import './globals.css';

import type { Metadata } from 'next';
import { Space_Mono } from 'next/font/google';

import { Navbar } from '@/components/shared/navbar';
import { Providers } from '@/components/shared/providers';

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
    <html suppressHydrationWarning lang='en'>
      <body className={` ${spaceMono.variable} antialiased`}>
        <Providers>
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
