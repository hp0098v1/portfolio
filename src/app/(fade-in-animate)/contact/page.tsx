import { ContactInformation } from '@/app/(fade-in-animate)/contact/_components/contact-information';
import { SocialLinks } from '@/app/(fade-in-animate)/contact/_components/social-links';
import { ContactForm } from '@/components/shared/contact-form';

export default function ContactPage() {
  return (
    <main className='min-h-screen px-4 py-20'>
      <div className='mx-auto max-w-4xl'>
        <h1 className='mb-8 text-4xl font-bold'>Contact Me</h1>

        <div className='grid gap-12 md:grid-cols-2'>
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
