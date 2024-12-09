import { ProjectCard } from '@/app/(fade-in-animate)/projects/_components/project-card';
import { projects } from '@/constants';

export default function ProjectsPage() {
  return (
    <main className='min-h-screen px-4 py-20'>
      <div className='mx-auto max-w-4xl'>
        <h1 className='mb-8 text-4xl font-bold'>Projects</h1>
        <div className='grid gap-8'>
          {projects.map(project => (
            <ProjectCard
              demoUrl={project.link}
              description={project.description}
              githubUrl={project.github}
              id={project.id}
              key={`project-${project.id}`}
              tech={project.tech}
              title={project.title}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
