import { Card, CardContent } from '@/components/ui/card';
import { education } from '@/constants';

export function Education() {
  return (
    <section>
      <h2 className='text-2xl font-bold mb-4 text-primary'>Education</h2>
      <Card>
        {education.map((edu) => (
          <CardContent key={`edu-${edu.id}`} className='p-6'>
            <h3 className='text-xl font-bold mb-2'>{edu.degree}</h3>
            <p className='text-primary mb-2'>
              {edu.university} • {edu.startTime} - {edu.endTime}
            </p>
            <p className='text-muted-foreground'>{edu.description}</p>
          </CardContent>
        ))}
      </Card>
    </section>
  );
}
