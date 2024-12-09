import { SocialLinks as SharedSocialLinks } from '@/components/shared/social-links';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export function SocialLinks() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className='text-2xl font-bold'>Connect With Me</CardTitle>
      </CardHeader>
      <CardContent>
        <SharedSocialLinks />
      </CardContent>
    </Card>
  );
}
