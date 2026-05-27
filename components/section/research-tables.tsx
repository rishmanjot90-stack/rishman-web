import { projects } from '@/data/projects-data';

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-background text-foreground mt-8">
      <div className="max-w-full px-6 py-12">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold tracking-tight mb-3">
            Research Projects
          </h1>
          <p className="text-muted-foreground text-lg">
            A comprehensive overview of ongoing and completed research
            initiatives
          </p>
        </div>
        {/* Table Container */}
        <div className="border border-border rounded-lg overflow-hidden bg-card">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border bg-muted/50">
                  <th className="px-6 py-4 text-left font-semibold text-foreground">
                    Topic
                  </th>
                  <th className="px-6 py-4 text-left font-semibold text-foreground min-w-35">
                    Date
                  </th>
                  <th className="px-6 py-4 text-left font-semibold text-foreground">
                    Field
                  </th>
                  {/* <th className="px-6 py-4 text-left font-semibold text-foreground">
                    Financial Outlay
                  </th> */}
                  <th className="px-6 py-4 text-left font-semibold text-foreground">
                    Funding Agency
                  </th>
                </tr>
              </thead>
              <tbody>
                {projects.map((project, idx) => (
                  <tr
                    key={idx}
                    className="border-b border-border hover:bg-muted/50 transition-colors"
                  >
                    <td className="px-6 py-4 text-sm">
                      <p className="font-medium text-foreground">
                        {project.topic}
                      </p>
                    </td>
                    <td className="px-6 py-4 text-sm text-muted-foreground whitespace-nowrap">
                      {project.startDate}
                    </td>
                    <td className="px-6 py-4 text-sm text-muted-foreground">
                      {project.field}
                    </td>
                    {/* <td className="px-6 py-4 text-sm font-medium text-foreground">
                      {project.financialOutlay}
                    </td> */}
                    <td className="px-6 py-4 text-sm text-muted-foreground">
                      {project.fundingAgency}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="rounded-lg border border-border p-6 bg-card">
            <p className="text-muted-foreground text-sm mb-1">Total Projects</p>
            <p className="text-3xl font-bold text-foreground">
              {projects.length}
            </p>
          </div>
          <div className="rounded-lg border border-border p-6 bg-card">
            <p className="text-muted-foreground text-sm mb-1">Total Funding</p>
            <p className="text-3xl font-bold text-foreground">
              Rs. 579.86 Lacs
            </p>
          </div>
          <div className="rounded-lg border border-border p-6 bg-card">
            <p className="text-muted-foreground text-sm mb-1">Active Fields</p>
            <p className="text-3xl font-bold text-foreground">4</p>
          </div>
        </div> */}
      </div>
    </main>
  );
}
