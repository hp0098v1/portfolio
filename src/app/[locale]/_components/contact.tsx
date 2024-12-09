import { ContactInformation } from '@/app/[locale]/(fade-in-animate)/contact/_components/contact-information';
import { SocialLinks } from '@/app/[locale]/(fade-in-animate)/contact/_components/social-links';
import { ContactForm } from '@/components/shared/contact-form';

export function Contact() {
  return (
    <section className='px-4 py-20'>
      <div className='mx-auto max-w-4xl'>
        <h2 className='mb-8 text-3xl font-bold'>Get in Touch</h2>
        <div className='grid items-start gap-8 md:grid-cols-2'>
          <div className='space-y-6'>
            <ContactInformation />

            <SocialLinks />
          </div>

          <ContactForm />
        </div>
      </div>
    </section>
  );
}
