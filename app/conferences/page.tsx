import { conferences } from '@/data/conferences-data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export const metadata = {
  title: 'Conferences',
  description: 'Research conferences and presentations',
};

export default function ConferencesPage() {
  // Group conferences by year in descending order
  const conferencesByYear = conferences.reduce(
    (acc, conf) => {
      if (!acc[conf.year]) {
        acc[conf.year] = [];
      }
      acc[conf.year].push(conf);
      return acc;
    },
    {} as Record<number, typeof conferences>,
  );

  const sortedYears = Object.keys(conferencesByYear)
    .map(Number)
    .sort((a, b) => b - a);

  return (
    <main className="min-h-screen bg-background mt-8">
      <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-2">
            Research Conferences
          </h1>
          <p className="text-muted-foreground">
            A collection of research presentations and papers
          </p>
        </div>

        {/* Conferences grouped by year */}
        <div className="space-y-12">
          {sortedYears.map((year) => (
            <div key={year}>
              {/* Year header */}
              <h2 className="text-2xl font-bold text-foreground mb-6">
                {year}
              </h2>

              {/* Conferences for this year */}
              <div className="grid gap-4 md:grid-cols-2">
                {conferencesByYear[year].map((conf, idx) => (
                  <Card
                    key={`${year}-${idx}`}
                    className="border border-border hover:border-primary/50 hover:shadow-md transition-all duration-300"
                  >
                    <CardHeader className="pb-3">
                      <CardTitle className="text-base leading-tight text-balance">
                        {conf.title}
                      </CardTitle>
                      <p className="text-sm font-semibold text-primary mt-2">
                        {conf.conferenceName}
                      </p>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      {/* Location */}
                      <p className="text-sm text-muted-foreground">
                        📍 {conf.location}
                      </p>

                      {/* Authors */}
                      <div>
                        <p className="text-xs text-muted-foreground mb-2 font-medium">
                          Authors
                        </p>
                        <div className="flex flex-wrap gap-1">
                          {conf.authors.map((author, authorIdx) => (
                            <Badge
                              key={authorIdx}
                              variant="secondary"
                              className="text-xs"
                            >
                              {author}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* Award Badge */}
                      {conf.award && (
                        <Badge className="bg-amber-500/20 text-amber-700 dark:text-amber-400 border-amber-500/30">
                          ⭐ {conf.award}
                        </Badge>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
