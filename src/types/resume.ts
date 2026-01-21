export interface ResumeProfile {
  network: string;
  username: string;
  url: string;
}

export interface ResumeLocation {
  city: string;
  countryCode?: string;
}

export interface ResumeBasics {
  name: string;
  label: string;
  email: string;
  phone?: string;
  summary: string;
  location?: ResumeLocation;
  profiles?: ResumeProfile[];
}

export interface ResumeWork {
  name: string;
  location?: string;
  position: string;
  startDate: string;
  endDate: string;
  summary?: string;
  highlights: string[];
}

export interface ResumeEducation {
  institution: string;
  area: string;
  studyType: string;
  location?: string;
  startDate?: string;
  endDate?: string;
  courses?: string[];
  highlights: string[];
}

export interface ResumeSkill {
  name: string;
  level?: string;
  keywords: string[];
}

export interface ResumeAward {
  title: string;
  date: string;
  awarder: string;
  summary: string;
}

export interface ResumeLanguage {
  language: string;
  fluency: string;
}

export interface Resume {
  $schema?: string;
  basics: ResumeBasics;
  work: ResumeWork[];
  education: ResumeEducation[];
  skills: ResumeSkill[];
  awards?: ResumeAward[];
  languages?: ResumeLanguage[];
}
