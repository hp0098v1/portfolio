import { AboutPreview } from '@/components/home/about-preview';
import { Contact } from '@/components/home/contact';
import { Hero } from '@/components/home/hero';
import { ProjectsPreview } from '@/components/home/projects-preview';

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
