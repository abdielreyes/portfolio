"use client";

import { motion } from "framer-motion";
import { Briefcase, MapPin } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AnimatedSection } from "./AnimatedSection";
import type { ResumeWork } from "@/types/resume";

interface ExperienceProps {
  work: ResumeWork[];
}

function formatDate(dateString: string): string {
  if (!dateString) return "Present";
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", { month: "short", year: "numeric" });
}

export function Experience({ work }: ExperienceProps) {
  return (
    <AnimatedSection className="py-12 sm:py-16 md:py-20 px-4 sm:px-6">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-2 sm:gap-3 mb-8 sm:mb-12"
        >
          <div className="p-2 sm:p-3 rounded-lg bg-primary/10">
            <Briefcase className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">Experience</h2>
        </motion.div>

        <div className="relative">
          {/* Timeline line - hidden on mobile, shown on md+ */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2" />

          {/* Mobile timeline line */}
          <div className="md:hidden absolute left-2 top-0 bottom-0 w-px bg-border" />

          {work.map((job, index) => (
            <motion.div
              key={`${job.name}-${job.position}-${index}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className={`relative mb-6 sm:mb-8 md:w-1/2 ${
                index % 2 === 0 ? "md:pr-8 lg:pr-12 md:ml-0" : "md:pl-8 lg:pl-12 md:ml-auto"
              }`}
            >
              {/* Timeline dot - Mobile */}
              <div className="md:hidden absolute left-0 top-6 w-4 h-4 rounded-full bg-primary border-4 border-background z-10" />

              {/* Timeline dot - Desktop */}
              <motion.div
                className={`hidden md:block absolute top-6 w-4 h-4 rounded-full bg-primary border-4 border-background z-10 ${
                  index % 2 === 0 ? "-right-2" : "-left-2"
                }`}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 + 0.2 }}
              />

              <motion.div
                whileHover={{ scale: 1.01, y: -2 }}
                transition={{ duration: 0.2 }}
              >
                <Card className="ml-8 md:ml-0 shadow-md hover:shadow-lg transition-shadow">
                  <CardHeader className="p-4 sm:p-6">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                      <div className="min-w-0">
                        <CardTitle className="text-base sm:text-lg md:text-xl mb-1 leading-tight">
                          {job.position}
                        </CardTitle>
                        <p className="text-sm sm:text-base md:text-lg font-medium text-primary">
                          {job.name}
                        </p>
                      </div>
                      <Badge variant="secondary" className="whitespace-nowrap text-xs self-start">
                        {formatDate(job.startDate)} - {formatDate(job.endDate)}
                      </Badge>
                    </div>
                    {job.location && (
                      <div className="flex items-center gap-1 text-xs sm:text-sm text-muted-foreground mt-2">
                        <MapPin className="w-3 h-3 sm:w-4 sm:h-4 shrink-0" />
                        {job.location}
                      </div>
                    )}
                  </CardHeader>
                  <CardContent className="p-4 sm:p-6 pt-0 sm:pt-0">
                    <ul className="space-y-1.5 sm:space-y-2">
                      {job.highlights.map((highlight, hIndex) => (
                        <motion.li
                          key={hIndex}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.05 + hIndex * 0.02 }}
                          className="flex items-start gap-2 text-xs sm:text-sm text-muted-foreground"
                        >
                          <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-primary mt-1.5 sm:mt-2 shrink-0" />
                          <span>{highlight}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
