import { Background } from '@/app/(fade-in-animate)/about/_components/background';
import { Education } from '@/app/(fade-in-animate)/about/_components/education';
import { Experience } from '@/app/(fade-in-animate)/about/_components/experience';
import { Skills } from '@/app/(fade-in-animate)/about/_components/skills';

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
