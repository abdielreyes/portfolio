"use client";

import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import type { Resume } from "@/types/resume";

interface PrintableResumeProps {
  resume: Resume;
}

function formatDate(dateString: string): string {
  if (!dateString) return "Present";
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", { month: "short", year: "numeric" });
}

export function PrintableResume({ resume }: PrintableResumeProps) {
  return (
    <div className="min-h-screen bg-background">
      {/* Resume Content - SEO-friendly HTML structure for ATS parsers */}
      <article
        className="resume-container w-full max-w-4xl mx-auto px-4 sm:px-6 py-6 sm:py-12"
        itemScope
        itemType="https://schema.org/Person"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="resume-card bg-card rounded-lg border shadow-sm p-4 sm:p-6 md:p-10"
        >
          {/* Header */}
          <header className="resume-header border-b border-border pb-4 sm:pb-6 mb-4 sm:mb-6">
            <h1
              className="resume-name text-2xl sm:text-3xl md:text-4xl font-bold mb-1 sm:mb-2"
              itemProp="name"
            >
              {resume.basics.name}
            </h1>
            <p
              className="resume-title text-base sm:text-lg md:text-xl text-muted-foreground mb-3 sm:mb-4"
              itemProp="jobTitle"
            >
              {resume.basics.label}
            </p>

            {/* Contact Info - Semantic markup for ATS */}
            <address className="resume-contact flex flex-wrap gap-2 sm:gap-3 md:gap-4 text-xs sm:text-sm text-muted-foreground not-italic">
              {resume.basics.location && (
                <span
                  className="flex items-center gap-1"
                  itemProp="address"
                  itemScope
                  itemType="https://schema.org/PostalAddress"
                >
                  <MapPin className="w-3 h-3 sm:w-4 sm:h-4 shrink-0" aria-hidden="true" />
                  <span itemProp="addressLocality">{resume.basics.location.city}</span>
                </span>
              )}
              <a
                href={`mailto:${resume.basics.email}`}
                className="flex items-center gap-1 hover:text-primary transition-colors"
                itemProp="email"
              >
                <Mail className="w-3 h-3 sm:w-4 sm:h-4 shrink-0" aria-hidden="true" />
                <span className="break-all">{resume.basics.email}</span>
              </a>
              {resume.basics.phone && (
                <a
                  href={`tel:${resume.basics.phone}`}
                  className="flex items-center gap-1 hover:text-primary transition-colors"
                  itemProp="telephone"
                >
                  <Phone className="w-3 h-3 sm:w-4 sm:h-4 shrink-0" aria-hidden="true" />
                  <span>{resume.basics.phone}</span>
                </a>
              )}
              {resume.basics.profiles?.map((profile) => (
                <a
                  key={profile.network}
                  href={profile.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 hover:text-primary transition-colors"
                  itemProp="sameAs"
                >
                  {profile.network === "GitHub" && (
                    <Github className="w-3 h-3 sm:w-4 sm:h-4 shrink-0" aria-hidden="true" />
                  )}
                  {profile.network === "LinkedIn" && (
                    <Linkedin className="w-3 h-3 sm:w-4 sm:h-4 shrink-0" aria-hidden="true" />
                  )}
                  <span>{profile.network}</span>
                </a>
              ))}
            </address>
          </header>

          {/* Summary */}
          <section className="resume-summary mb-4 sm:mb-6" aria-labelledby="summary-heading">
            <h2 id="summary-heading" className="sr-only">
              Professional Summary
            </h2>
            <p
              className="text-sm sm:text-base text-muted-foreground leading-relaxed"
              itemProp="description"
            >
              {resume.basics.summary}
            </p>
          </section>

          {/* Experience */}
          <section className="mb-4 sm:mb-6" aria-labelledby="experience-heading">
            <h2
              id="experience-heading"
              className="resume-section-title text-lg sm:text-xl font-bold mb-3 sm:mb-4 border-b border-border pb-2"
            >
              Experience
            </h2>
            <div className="space-y-4 sm:space-y-5">
              {resume.work.slice(0, 3).map((job, index) => (
                <article
                  key={`${job.name}-${job.position}-${index}`}
                  className="resume-job"
                  itemProp="hasOccupation"
                  itemScope
                  itemType="https://schema.org/Occupation"
                >
                  <div className="resume-job-header flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 sm:gap-2 mb-1">
                    <div className="min-w-0">
                      <h3
                        className="resume-job-title font-semibold text-sm sm:text-base md:text-lg"
                        itemProp="name"
                      >
                        {job.position}
                      </h3>
                      <p className="resume-job-company text-sm sm:text-base text-primary font-medium">
                        <span itemProp="occupationLocation">{job.name}</span>
                        {job.location && (
                          <span className="resume-job-location text-muted-foreground font-normal">
                            {" "}
                            | {job.location}
                          </span>
                        )}
                      </p>
                    </div>
                    <time className="resume-job-dates text-xs sm:text-sm text-muted-foreground whitespace-nowrap">
                      {formatDate(job.startDate)} – {formatDate(job.endDate)}
                    </time>
                  </div>
                  <ul
                    className="resume-bullets mt-2 space-y-1"
                    itemProp="responsibilities"
                  >
                    {job.highlights.map((highlight, hIndex) => (
                      <li
                        key={hIndex}
                        className="resume-bullet text-xs sm:text-sm text-muted-foreground pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-muted-foreground"
                      >
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </section>

          {/* Education */}
          <section
            className="resume-education mb-4 sm:mb-6"
            aria-labelledby="education-heading"
          >
            <h2
              id="education-heading"
              className="resume-section-title text-lg sm:text-xl font-bold mb-3 sm:mb-4 border-b border-border pb-2"
            >
              Education
            </h2>
            <div className="space-y-3 sm:space-y-4">
              {resume.education.map((edu, index) => (
                <article
                  key={`${edu.institution}-${index}`}
                  className="resume-job"
                  itemProp="alumniOf"
                  itemScope
                  itemType="https://schema.org/EducationalOrganization"
                >
                  <div className="resume-job-header flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 sm:gap-2 mb-1">
                    <div className="min-w-0">
                      <h3 className="resume-job-title font-semibold text-sm sm:text-base">
                        {edu.studyType} in {edu.area}
                      </h3>
                      <p className="resume-job-company text-sm sm:text-base text-primary font-medium">
                        <span itemProp="name">{edu.institution}</span>
                        {edu.location && (
                          <span className="resume-job-location text-muted-foreground font-normal">
                            {" "}
                            | {edu.location}
                          </span>
                        )}
                      </p>
                    </div>
                    {edu.endDate && (
                      <time className="resume-job-dates text-xs sm:text-sm text-muted-foreground">
                        {new Date(edu.endDate).getFullYear()}
                      </time>
                    )}
                  </div>
                  <ul className="resume-bullets mt-2 space-y-1">
                    {edu.highlights.map((highlight, hIndex) => (
                      <li
                        key={hIndex}
                        className="resume-bullet text-xs sm:text-sm text-muted-foreground pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-muted-foreground"
                      >
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </section>

          {/* Skills */}
          <section aria-labelledby="skills-heading">
            <h2
              id="skills-heading"
              className="resume-section-title text-lg sm:text-xl font-bold mb-3 sm:mb-4 border-b border-border pb-2"
            >
              Skills
            </h2>
            <div className="resume-skills-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
              {resume.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="resume-skill-category"
                  itemProp="knowsAbout"
                >
                  <h3 className="resume-skill-name font-semibold text-sm sm:text-base mb-2">
                    {skill.name}
                  </h3>
                  <div className="resume-skill-tags flex flex-wrap gap-1 sm:gap-1.5">
                    {skill.keywords.map((keyword) => (
                      <span
                        key={keyword}
                        className="resume-skill-tag text-xs px-2 py-0.5 sm:py-1 bg-muted rounded-md"
                      >
                        {keyword}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </motion.div>
      </article>
    </div>
  );
}
