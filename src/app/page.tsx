import { AboutPreview } from '@/app/_components/about-preview';
import { Contact } from '@/app/_components/contact';
import { Hero } from '@/app/_components/hero';
import { ProjectsPreview } from '@/app/_components/projects-preview';

export default function Home() {
  return (
    <main className='min-h-screen'>
      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <AboutPreview />

      {/* Projects Section */}
      <ProjectsPreview />

      {/* Contact Section */}
      <Contact />
    </main>
  );
}
