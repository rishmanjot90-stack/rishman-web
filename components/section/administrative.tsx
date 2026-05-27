import { positions } from '@/data/academic-data';

export default function AdministrativeSection() {
  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold">Administrative Positions</h2>
      <div className="space-y-4">
        {positions.map((item, index) => (
          <div key={index} className="border-l-2 border-accent pl-6 py-3">
            <div className="flex items-baseline justify-between gap-4 mb-2">
              <h3 className="text-lg font-semibold">{item.position}</h3>
              <span className="text-sm text-muted-foreground whitespace-nowrap">
                {item.duration}
              </span>
            </div>
            <p className="text-muted-foreground">{item.organization}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
