import { Background } from '@/components/about/background';
import { Education } from '@/components/about/education';
import { Experience } from '@/components/about/experience';
import { Skills } from '@/components/about/skills';

export default function AboutPage() {
  return (
    <main className='min-h-screen max-w-4xl mx-auto py-20 px-4'>
      <h1 className='text-4xl font-bold mb-8'>About Me</h1>

      <div className='space-y-12'>
        <Background />

        <Experience />

        <Skills />

        <Education />
      </div>
    </main>
  );
}
