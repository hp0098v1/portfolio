import { ContactInformation } from '@/app/(fade-in-animate)/contact/_components/contact-information';
import { SocialLinks } from '@/app/(fade-in-animate)/contact/_components/social-links';
import { ContactForm } from '@/components/shared/contact-form';

export default function ContactPage() {
  return (
    <main className='min-h-screen  py-20 px-4'>
      <div className='max-w-4xl mx-auto'>
        <h1 className='text-4xl font-bold mb-8'>Contact Me</h1>

        <div className='grid md:grid-cols-2 gap-12'>
          <div className='space-y-8'>
            
        <ContactInformation />

            <SocialLinks />
          </div>

          <ContactForm />
        </div>
      </div>
    </main>
  );
}
