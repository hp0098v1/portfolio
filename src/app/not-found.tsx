import { Home } from 'lucide-react';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export default function NotFound() {
  return (
    <main className='motion-preset-fade min-h-screen px-4 py-40 motion-duration-1500'>
      <div className='mx-auto flex max-w-4xl flex-col items-center justify-center'>
        <Card className='w-full max-w-lg'>
          <CardContent className='p-6 text-center'>
            <h1 className='mb-4 text-6xl font-bold text-primary'>404</h1>
            <h2 className='mb-4 text-2xl font-bold'>Page Not Found</h2>
            <p className='mb-8 text-muted-foreground'>
              The page you&apos;re looking for doesn&apos;t exist or has been
              moved.
            </p>
            <Button asChild>
              <Link href='/'>
                <Home />
                Return Home
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
