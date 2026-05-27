'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';
import { SCHOLARS_DATA } from '@/data/scholars-data';

export default function ScholarsSection() {
  return (
    <section className="py-24 px-4 bg-linear-to-b from-background to-secondary/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-foreground">
            SuperVisions
          </h2>
          <p className="text-lg text-muted-foreground">
            Meet our exceptional scholars and their research endeavors
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SCHOLARS_DATA.map((scholar, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col h-full"
            >
              {/* Scholar Image - Larger vertical section */}
              <div className="relative w-full h-48 sm:h-56 md:h-64 lg:h-72 overflow-hidden">
                {scholar.imageId ? (
                  <Image
                    src={`/scholars/${scholar.imageId}.jpg`}
                    alt={scholar.scholar}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-contain p-1"
                    priority
                  />
                ) : (
                  <div className="flex items-center justify-center w-full h-full bg-linear-to-br from-primary/20 to-primary/5">
                    <div className="text-center">
                      <div className="text-6xl font-bold text-primary/40 mb-2">
                        {scholar.scholar.charAt(0)}
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Scholar Portrait
                      </p>
                    </div>
                  </div>
                )}
              </div>

              <CardHeader className="pb-2">
                <CardTitle className="text-lg line-clamp-2">
                  {scholar.scholar}
                </CardTitle>
              </CardHeader>

              <CardContent className="grow space-y-3">
                <div>
                  <p className="text-xs text-muted-foreground line-clamp-2">
                    {scholar.title}
                  </p>
                </div>

                <div className="space-y-1.5">
                  <div className="flex items-start gap-2">
                    <span className="text-xs font-semibold text-muted-foreground">
                      Period:
                    </span>
                    <span className="text-xs">
                      {scholar.startDate} — {scholar.endDate}
                    </span>
                  </div>

                  {scholar.otherSupervisors && (
                    <div className="flex items-start gap-2">
                      <span className="text-xs font-semibold text-muted-foreground">
                        Co-Advisor:
                      </span>
                      <span className="text-xs line-clamp-2">
                        {scholar.otherSupervisors}
                      </span>
                    </div>
                  )}
                </div>

                <div className="pt-2 border-t border-border">
                  <Badge
                    variant="secondary"
                    className="bg-primary/10 text-primary hover:bg-primary/20 text-xs"
                  >
                    Active Supervision
                  </Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
