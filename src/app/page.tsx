import { projects, socialLinks } from '@/constants';
import Link from 'next/link';

export default function Home() {
  return (
    <main className='min-h-screen bg-primary text-white'>
      {/* Hero Section */}
      <section
        id='home'
        className='min-h-screen flex items-center justify-center px-4'
      >
        <div className='max-w-4xl mx-auto text-center'>
          <h1 className='text-4xl md:text-6xl font-bold mb-6'>
            Frontend Developer
            <span className='text-accent'>.</span>
          </h1>
          <p className='text-xl md:text-2xl text-gray-300 mb-4'>
            Crafting beautiful and responsive web experiences
          </p>
          <p className='text-gray-400 mb-8'> {socialLinks.location}</p>

          <div className='flex justify-center gap-4 mb-8'>
            <a
              href={socialLinks.github}
              target='_blank'
              rel='noopener noreferrer'
              className='text-gray-300 hover:text-accent transition-colors'
            >
              GitHub
            </a>
            <a
              href={socialLinks.linkedin}
              target='_blank'
              rel='noopener noreferrer'
              className='text-gray-300 hover:text-accent transition-colors'
            >
              LinkedIn
            </a>
            <a
              href={socialLinks.twitter}
              target='_blank'
              rel='noopener noreferrer'
              className='text-gray-300 hover:text-accent transition-colors'
            >
              Twitter
            </a>
          </div>

          <a
            href='#contact'
            className='bg-accent hover:bg-accent-light text-primary px-8 py-3 rounded-full transition-colors'
          >
            Get in touch
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id='about' className='py-20 px-4 '>
        <div className='max-w-4xl mx-auto'>
          <h2 className='text-3xl font-bold mb-8'>About Me</h2>
          <div className='bg-secondary p-6 rounded-lg'>
            <p className='text-gray-300 leading-relaxed mb-8'>
              I&apos;m a passionate frontend developer with a keen eye for
              design and a commitment to creating intuitive user experiences.
              With a strong foundation in modern web technologies, I transform
              ideas into clean, efficient, and scalable code.
            </p>
            <Link
              href='/about'
              className='text-accent hover:text-accent-light transition-colors'
            >
              Learn more about me →
            </Link>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id='projects' className='py-20 px-4'>
        <div className='max-w-4xl mx-auto'>
          <div className='flex justify-between items-center mb-8'>
            <h1 className='text-4xl font-bold'>Projects</h1>
            <Link
              href='/projects'
              className='text-accent hover:text-accent-light transition-colors'
            >
              View all projects →
            </Link>
          </div>
          <div className='grid md:grid-cols-2 gap-6'>
            {projects.slice(0, 2).map((project) => (
              <div key={project.id} className='bg-secondary p-6 rounded-lg'>
                <h3 className='text-xl font-bold mb-2'>{project.title}</h3>
                <p className='text-gray-300 mb-4'>{project.description}</p>
                <div className='flex flex-wrap gap-2 mb-4'>
                  {project.tech.slice(0, 3).map((tech, index) => (
                    <span
                      key={index}
                      className='bg-primary px-3 py-1 rounded-full text-sm'
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <Link
                  href={`/projects/${project.id}`}
                  className='text-accent hover:text-accent-light transition-colors'
                >
                  Learn more →
                </Link>
              </div>
            ))}
          </div>
          <div className='text-center mt-8'>
            <Link
              href='/projects'
              className='bg-accent hover:bg-accent-light text-primary px-8 py-3 rounded-full transition-colors inline-block'
            >
              View All Projects
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id='contact' className='py-20 px-4 '>
        <div className='max-w-4xl mx-auto'>
          <h2 className='text-3xl font-bold mb-8'>Get in Touch</h2>
          <div className='bg-secondary p-8 rounded-lg'>
            <div className='grid md:grid-cols-2 gap-8'>
              <div>
                <h3 className='text-xl font-bold mb-4'>Contact Information</h3>
                <div className='space-y-4'>
                  <p> {socialLinks.location}</p>
                  <p>
                    ✉️{' '}
                    <a
                      href={`mailto:${socialLinks.email}`}
                      className='text-accent hover:text-accent-light'
                    >
                      {socialLinks.email}
                    </a>
                  </p>
                  <div className='flex gap-4'>
                    <a
                      href={socialLinks.github}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='text-gray-300 hover:text-accent transition-colors'
                    >
                      GitHub
                    </a>
                    <a
                      href={socialLinks.linkedin}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='text-gray-300 hover:text-accent transition-colors'
                    >
                      LinkedIn
                    </a>
                  </div>
                </div>
              </div>
              <form className='space-y-4'>
                <div>
                  <label htmlFor='name' className='block mb-2'>
                    Name
                  </label>
                  <input
                    type='text'
                    id='name'
                    className='w-full px-4 py-2 rounded-lg bg-primary text-white border border-gray-600 focus:border-accent focus:outline-none'
                  />
                </div>
                <div>
                  <label htmlFor='email' className='block mb-2'>
                    Email
                  </label>
                  <input
                    type='email'
                    id='email'
                    className='w-full px-4 py-2 rounded-lg bg-primary text-white border border-gray-600 focus:border-accent focus:outline-none'
                  />
                </div>
                <div>
                  <label htmlFor='message' className='block mb-2'>
                    Message
                  </label>
                  <textarea
                    id='message'
                    rows={4}
                    className='w-full px-4 py-2 rounded-lg bg-primary text-white border border-gray-600 focus:border-accent focus:outline-none resize-none'
                  ></textarea>
                </div>
                <button
                  type='submit'
                  className='bg-accent hover:bg-accent-light text-primary px-8 py-3 rounded-full transition-colors'
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
