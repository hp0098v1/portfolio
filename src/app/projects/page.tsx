import { projects } from '@/constants';
import { ProjectCard } from '@/app/projects/_components/project-card';

export default function ProjectsPage() {
  return (
    <main className='min-h-screen py-20 px-4'>
      <div className='max-w-4xl mx-auto'>
        <h1 className='text-4xl font-bold mb-8'>Projects</h1>
        <div className='grid gap-8'>
          {projects.map((project) => (
            <ProjectCard
              key={`project-${project.id}`}
              id={project.id}
              title={project.title}
              description={project.description}
              tech={project.tech}
              demoUrl={project.link}
              githubUrl={project.github}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
