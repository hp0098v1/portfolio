import { projects } from '@/constants'
import Link from 'next/link'
import { notFound } from 'next/navigation'

export function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }))
}

export default function ProjectPage({ params }: { params: { id: string } }) {
  const project = projects.find((p) => p.id === params.id)

  if (!project) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-primary text-white py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <Link
          href="/projects"
          className="text-accent hover:text-accent-light mb-8 inline-block"
        >
          ← Back to Projects
        </Link>

        <h1 className="text-4xl font-bold mb-6">{project.title}</h1>
        <p className="text-xl text-gray-300 mb-8">{project.longDescription}</p>

        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Technologies Used</h2>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech, index) => (
              <span
                key={index}
                className="bg-secondary px-4 py-2 rounded-lg text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Key Features</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-300">
            {project.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>

        <div className="flex gap-4">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-accent hover:bg-accent-light text-primary px-8 py-3 rounded-lg transition-colors"
          >
            View on GitHub
          </a>
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-secondary hover:bg-accent hover:text-primary px-8 py-3 rounded-lg transition-colors"
          >
            Live Demo
          </a>
        </div>
      </div>
    </main>
  )
}
