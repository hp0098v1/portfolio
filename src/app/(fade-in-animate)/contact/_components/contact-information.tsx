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
      <h3 className='text-lg font-bold mb-2'>Email</h3>
      <a
        href={`mailto:${socialLinks.email}`}
        className='transition-colors hover:text-primary'
      >
        {socialLinks.email}
      </a>
    </div>
    <div>
      <h3 className='text-lg font-bold mb-2'>Location</h3>
      <p>
        {socialLinks.location}
        <br /> Available for Remote Work
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
