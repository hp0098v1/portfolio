import { skills } from '@/constants';
import { Card, CardContent } from '@/components/ui/card';

export function Skills() {
  return (
    <section>
      <h2 className='text-2xl font-bold mb-4 text-primary'>Skills</h2>
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
        {Object.entries(skills).map(([category, categorySkills]) => (
          <Card key={category}>
            <CardContent className='p-6'>
              <h3 className='text-xl font-bold mb-4 capitalize'>{category}</h3>
              <div className='flex flex-wrap gap-2'>
                {categorySkills.map((skill, index) => (
                  <span
                    key={index}
                    className='text-muted-foreground rounded-lg text-center hover:text-primary transition-colors'
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
