import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { socialLinks } from '@/constants';

export function ContactInformation() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className='text-2xl font-bold'>
          Contact Information
        </CardTitle>
      </CardHeader>
      <CardContent className='space-y-4'>
        <div>
          <h3 className='mb-2 text-lg font-bold'>Email</h3>
          <a
            className='transition-colors hover:text-primary'
            href={`mailto:${socialLinks.email}`}
          >
            {socialLinks.email}
          </a>
        </div>
        <div>
          <h3 className='mb-2 text-lg font-bold'>Location</h3>
          <p>
            {socialLinks.location}
            <br /> Available for Remote Work
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
