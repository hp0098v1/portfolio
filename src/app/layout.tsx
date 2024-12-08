import './globals.css';

import type { Metadata } from 'next';
import { Poppins, Space_Mono } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700'],
  variable: '--font-poppins',
});

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
    <html lang='en'>
      <body
        className={`${poppins.variable} ${spaceMono.variable}  antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
