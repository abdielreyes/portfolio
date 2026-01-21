"use client";

import { motion } from "framer-motion";
import { GraduationCap, Award, Trophy } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AnimatedSection } from "./AnimatedSection";
import type { ResumeEducation } from "@/types/resume";

interface EducationProps {
  education: ResumeEducation[];
}

export function Education({ education }: EducationProps) {
  return (
    <AnimatedSection className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-muted/30">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-2 sm:gap-3 mb-8 sm:mb-12"
        >
          <div className="p-2 sm:p-3 rounded-lg bg-primary/10">
            <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">Education</h2>
        </motion.div>

        <div className="space-y-6 sm:space-y-8">
          {education.map((edu, index) => (
            <motion.div
              key={`${edu.institution}-${index}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <motion.div
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.2 }}
              >
                <Card className="overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                  <CardHeader className="bg-gradient-to-r from-primary/5 to-transparent p-4 sm:p-6">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 sm:gap-4">
                      <div className="min-w-0">
                        <CardTitle className="text-base sm:text-lg md:text-xl mb-1 sm:mb-2 leading-tight">
                          {edu.studyType} in {edu.area}
                        </CardTitle>
                        <p className="text-sm sm:text-base md:text-lg font-medium text-primary">
                          {edu.institution}
                        </p>
                        {edu.location && (
                          <p className="text-xs sm:text-sm text-muted-foreground mt-1">
                            {edu.location}
                          </p>
                        )}
                      </div>
                      {edu.endDate && (
                        <Badge variant="secondary" className="self-start whitespace-nowrap text-xs">
                          Graduated {new Date(edu.endDate).getFullYear()}
                        </Badge>
                      )}
                    </div>
                  </CardHeader>
                  <CardContent className="p-4 sm:p-6 pt-4 sm:pt-6">
                    <ul className="space-y-2 sm:space-y-3">
                      {edu.highlights.map((highlight, hIndex) => {
                        const isAward =
                          highlight.includes("1st Place") ||
                          highlight.includes("1st place") ||
                          highlight.includes("Honorable Mention") ||
                          highlight.includes("Honorable mention");
                        return (
                          <motion.li
                            key={hIndex}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 + hIndex * 0.03 }}
                            className="flex items-start gap-2 sm:gap-3"
                          >
                            {isAward ? (
                              <Trophy className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-500 mt-0.5 shrink-0" />
                            ) : (
                              <Award className="w-4 h-4 sm:w-5 sm:h-5 text-primary mt-0.5 shrink-0" />
                            )}
                            <span className="text-xs sm:text-sm text-muted-foreground">
                              {highlight}
                            </span>
                          </motion.li>
                        );
                      })}
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
