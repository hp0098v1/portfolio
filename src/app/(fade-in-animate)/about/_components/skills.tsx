import { Card, CardContent } from '@/components/ui/card';
import { skills } from '@/constants';

export function Skills() {
  return (
    <section>
      <h2 className='mb-4 text-2xl font-bold text-primary'>Skills</h2>
      <div className='grid grid-cols-1 gap-6 sm:grid-cols-2'>
        {Object.entries(skills).map(([category, categorySkills]) => (
          <Card key={category}>
            <CardContent className='p-6'>
              <h3 className='mb-4 text-xl font-bold capitalize'>{category}</h3>
              <div className='flex flex-wrap gap-2'>
                {categorySkills.map((skill, index) => (
                  <span
                    className='rounded-lg text-center text-muted-foreground transition-colors hover:text-primary'
                    key={index}
                  >
                    • {skill}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
