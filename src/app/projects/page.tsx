import { projects } from '@/constants'
import Link from 'next/link'

export default function ProjectsPage() {
  return (
    <main className="min-h-screen py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Projects</h1>
        <div className="grid gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-secondary p-6 rounded-lg">
              <h2 className="text-2xl font-bold mb-4">{project.title}</h2>
              <p className="text-gray-300 mb-6">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech, index) => (
                  <span
                    key={index}
                    className="bg-primary px-3 py-1 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                <Link
                  href={`/projects/${project.id}`}
                  className="bg-accent hover:bg-accent-light text-primary px-6 py-2 rounded-lg transition-colors"
                >
                  View Details
                </Link>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary hover:bg-secondary px-6 py-2 rounded-lg transition-colors"
                >
                  GitHub
                </a>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary hover:bg-secondary px-6 py-2 rounded-lg transition-colors"
                >
                  Live Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
