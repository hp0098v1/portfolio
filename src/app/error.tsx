'use client';

import { Home, RotateCcw } from 'lucide-react';
import Link from 'next/link';
import { useEffect } from 'react';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <main className='motion-preset-fade min-h-screen px-4 py-40 motion-duration-1500'>
      <div className='mx-auto flex max-w-4xl flex-col items-center justify-center'>
        <Card className='w-full max-w-lg'>
          <CardContent className='p-6 text-center'>
            <h1 className='mb-4 text-6xl font-bold text-destructive'>Error</h1>
            <h2 className='mb-4 text-2xl font-bold'>Something went wrong!</h2>
            <p className='mb-8 text-muted-foreground'>
              An unexpected error has occurred. Please try again later.
            </p>
            <div className='flex flex-wrap justify-center gap-4'>
              <Button onClick={() => reset()}>
                <RotateCcw />
                Try Again
              </Button>
              <Button asChild variant='outline'>
                <Link href='/'>
                  <Home />
                  Return Home
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
