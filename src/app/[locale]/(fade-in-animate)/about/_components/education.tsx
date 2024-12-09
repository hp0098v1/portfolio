import { Card, CardContent } from '@/components/ui/card';
import { education } from '@/constants';

export function Education() {
  return (
    <section>
      <h2 className='mb-4 text-2xl font-bold text-primary'>Education</h2>
      <Card>
        {education.map(edu => (
          <CardContent className='p-6' key={`edu-${edu.id}`}>
            <h3 className='mb-2 text-xl font-bold'>{edu.degree}</h3>
            <p className='mb-2 text-primary'>
              {edu.university} • {edu.startTime} - {edu.endTime}
            </p>
            <p className='text-muted-foreground'>{edu.description}</p>
          </CardContent>
        ))}
      </Card>
    </section>
  );
}
