import { SocialLinks } from '@/components/shared/social-links';

export function Hero() {
  return (
    <section className='flex min-h-[calc(100vh-4rem)] items-center justify-center px-4'>
      <div className='mx-auto max-w-4xl text-center'>
        <h1 className='mb-6 text-4xl font-bold md:text-6xl'>
          Frontend Developer
        </h1>
        <p className='mx-auto mb-8 max-w-2xl text-lg text-muted-foreground md:text-xl'>
          I craft responsive and performant web applications with modern
          technologies
        </p>

        <SocialLinks className='justify-center' />
      </div>
    </section>
  );
}
