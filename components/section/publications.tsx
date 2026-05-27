'use client';

import { publications } from '@/data/publication-data';
import { ExternalLink } from 'lucide-react';

export function Publications() {
  return (
    <section className="py-16 px-4 md:px-8 lg:px-12">
      <div className="max-w-5xl mx-auto">
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-balance mb-3">
            Journal Publications
          </h2>
          <p className="text-lg text-muted-foreground">
            A curated selection of peer-reviewed research contributions
          </p>
        </div>

        <div className="space-y-8">
          {publications.map((publication, index) => (
            <article
              key={index}
              className="group border-b border-border pb-8 last:border-0 transition-all hover:bg-muted/30 -mx-4 px-4 py-4 rounded-lg"
            >
              <div className="flex gap-3 mb-3 text-sm text-muted-foreground">
                <span className="font-semibold">{publication.year}</span>
                <span className="text-border">•</span>
                <span className="italic">{publication.journal}</span>
              </div>

              <h3 className="text-xl font-semibold mb-3 leading-snug text-foreground group-hover:text-primary transition-colors">
                {publication.title}
              </h3>

              <div className="mb-4">
                <p className="text-sm text-muted-foreground">
                  {publication.authors.join(', ')}
                </p>
              </div>

              <a
                href={publication.doi}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
              >
                View Publication
                <ExternalLink className="w-4 h-4" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
