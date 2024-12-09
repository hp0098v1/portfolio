import { Background } from '@/app/(fade-in-animate)/about/_components/background';
import { Education } from '@/app/(fade-in-animate)/about/_components/education';
import { Experience } from '@/app/(fade-in-animate)/about/_components/experience';
import { Skills } from '@/app/(fade-in-animate)/about/_components/skills';

export default function AboutPage() {
  return (
    <main className='mx-auto min-h-screen max-w-4xl px-4 py-20'>
      <h1 className='mb-8 text-4xl font-bold'>About Me</h1>

      <div className='space-y-12'>
        <Background />

        <Experience />

        <Skills />

        <Education />
      </div>
    </main>
  );
}
