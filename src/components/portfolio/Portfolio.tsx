"use client";

import type { Resume } from "@/types/resume";
import { Hero } from "./Hero";
import { Experience } from "./Experience";
import { Education } from "./Education";
import { Skills } from "./Skills";
import { Contact } from "./Contact";

interface PortfolioProps {
  resume: Resume;
}

export function Portfolio({ resume }: PortfolioProps) {
  return (
    <main>
      <Hero basics={resume.basics} />
      <Experience work={resume.work} />
      <Education education={resume.education} />
      <Skills skills={resume.skills} />
      <Contact basics={resume.basics} />
    </main>
  );
}
