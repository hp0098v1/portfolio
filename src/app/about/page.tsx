import { socialLinks } from '@/constants'

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-primary text-white py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">About Me</h1>
        
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-accent">Background</h2>
          <p className="text-gray-300 leading-relaxed mb-6">
            I&apos;m a passionate frontend developer with several years of experience in creating 
            modern web applications. My journey in web development started with a curiosity 
            about how websites work, which led me to dive deep into the world of frontend development.
          </p>
          <p className="text-gray-300 leading-relaxed mb-6">
            I specialize in building responsive, user-friendly interfaces using modern technologies 
            like React, Next.js, and TypeScript. I&apos;m particularly interested in creating seamless 
            user experiences and optimizing web performance.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-accent">Experience</h2>
          <div className="space-y-6">
            <div className="bg-secondary p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2">Senior Frontend Developer</h3>
              <p className="text-gray-400 mb-2">Company Name • 2021 - Present</p>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Led the development of multiple high-impact web applications</li>
                <li>Mentored junior developers and conducted code reviews</li>
                <li>Implemented best practices and modern development workflows</li>
              </ul>
            </div>
            <div className="bg-secondary p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2">Frontend Developer</h3>
              <p className="text-gray-400 mb-2">Previous Company • 2019 - 2021</p>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Developed and maintained multiple client websites</li>
                <li>Collaborated with designers to implement pixel-perfect designs</li>
                <li>Improved site performance and SEO</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-accent">Education</h2>
          <div className="bg-secondary p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-2">Bachelor&apos;s in Computer Science</h3>
            <p className="text-gray-400 mb-2">University Name • 2015 - 2019</p>
            <p className="text-gray-300">
              Focused on web development and user interface design. Participated in various 
              hackathons and web development competitions.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 text-accent">Connect With Me</h2>
          <div className="flex flex-wrap gap-4">
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-secondary px-6 py-3 rounded-lg hover:bg-accent hover:text-primary transition-colors"
            >
              GitHub
            </a>
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-secondary px-6 py-3 rounded-lg hover:bg-accent hover:text-primary transition-colors"
            >
              LinkedIn
            </a>
            <a
              href={`mailto:${socialLinks.email}`}
              className="bg-secondary px-6 py-3 rounded-lg hover:bg-accent hover:text-primary transition-colors"
            >
              Email
            </a>
          </div>
        </section>
      </div>
    </main>
  )
}
