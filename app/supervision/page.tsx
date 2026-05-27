'use client';

import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { supervisionData } from '@/data/superVision-data';



export default function SupervisionPage() {
  const [activeTab, setActiveTab] = useState('mtech');

  return (
    <div className="min-h-screen bg-background mt-10">
      {/* Header */}
      <div className="border-b border-border bg-card">
        <div className="mx-auto max-w-6xl px-6 py-12">
          <h1 className="text-4xl font-bold text-foreground mb-2">
            Research Supervision
          </h1>
          <p className="text-lg text-muted-foreground">
            Prof. Rishman Jot Kaur Chahal
          </p>
          {/* <p className="text-sm text-muted-foreground mt-2">
            M. Tech. Dissertation & Research Records
          </p> */}
        </div>
      </div>

      {/* Main Content */}
      <div className="mx-auto max-w-6xl px-6 py-12">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full max-w-md grid-cols-3 mb-8">
            <TabsTrigger value="mtech">M. Tech.</TabsTrigger>
            <TabsTrigger value="mscecon">MSc Economics</TabsTrigger>
            <TabsTrigger value="bsms">BS-MS</TabsTrigger>
          </TabsList>

          {/* M. Tech. Tab */}
          <TabsContent value="mtech" className="space-y-6">
            <div className="mb-4">
              <h2 className="text-2xl font-semibold text-foreground mb-1">
                M. Tech. Dissertations
              </h2>
              <p className="text-muted-foreground">
                {supervisionData.mtech.length} students
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-2">
              {supervisionData.mtech.map((student, idx) => (
                <Card key={idx} className="hover:shadow-lg transition-shadow">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg text-foreground">
                      {student.name}
                    </CardTitle>
                    <CardDescription className="text-sm">
                      <span className="inline-block bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-xs font-medium mr-2 mt-2">
                        {student.batch}
                      </span>
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div>
                      <p className="text-xs text-muted-foreground font-semibold uppercase mb-1">
                        Course
                      </p>
                      <p className="text-sm text-foreground">
                        {student.course}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground font-semibold uppercase mb-1">
                        Dissertation
                      </p>
                      <p className="text-sm text-foreground leading-relaxed">
                        {student.title}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* MSc Economics Tab */}
          <TabsContent value="mscecon" className="space-y-6">
            <div className="mb-4">
              <h2 className="text-2xl font-semibold text-foreground mb-1">
                MSc (Economics) Dissertations
              </h2>
              <p className="text-muted-foreground">
                {supervisionData.mscecon.length} students
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-2">
              {supervisionData.mscecon.map((student, idx) => (
                <Card key={idx} className="hover:shadow-lg transition-shadow">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg text-foreground">
                      {student.name}
                    </CardTitle>
                    <CardDescription className="text-sm">
                      <span className="inline-block bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-xs font-medium mt-2">
                        {student.year}
                      </span>
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div>
                      <p className="text-xs text-muted-foreground font-semibold uppercase mb-1">
                        Dissertation
                      </p>
                      <p className="text-sm text-foreground leading-relaxed">
                        {student.title}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* BS-MS Tab */}
          <TabsContent value="bsms" className="space-y-6">
            <div className="mb-4">
              <h2 className="text-2xl font-semibold text-foreground mb-1">
                BS-MS (Economics) Dissertations
              </h2>
              <p className="text-muted-foreground">
                {supervisionData.bsms.length} students
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-2">
              {supervisionData.bsms.map((student, idx) => (
                <Card key={idx} className="hover:shadow-lg transition-shadow">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg text-foreground">
                      {student.name}
                    </CardTitle>
                    <CardDescription className="text-sm">
                      <span className="inline-block bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-xs font-medium mt-2">
                        {student.year}
                      </span>
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div>
                      <p className="text-xs text-muted-foreground font-semibold uppercase mb-1">
                        Dissertation
                      </p>
                      <p className="text-sm text-foreground leading-relaxed">
                        {student.title}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
