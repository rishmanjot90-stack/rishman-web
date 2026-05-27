import { experience } from '@/data/academic-data';

export default function ExperienceSection() {
  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold">Professional Background</h2>
      <div className="space-y-6">
        {experience.map((item, index) => (
          <div key={index} className="border-l-2 border-accent pl-6 py-2">
            <div className="flex items-baseline justify-between gap-4 mb-2">
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <span className="text-sm text-muted-foreground whitespace-nowrap">
                {item.duration}
              </span>
            </div>
            <p className="text-muted-foreground mb-2">{item.organization}</p>
            <p className="text-sm text-foreground/80">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
