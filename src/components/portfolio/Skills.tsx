"use client";

import { motion } from "framer-motion";
import { Code2, Database, Cloud, Layout, Shield, Wrench } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { AnimatedSection } from "./AnimatedSection";
import type { ResumeSkill } from "@/types/resume";

interface SkillsProps {
  skills: ResumeSkill[];
}

const skillIcons: Record<string, React.ReactNode> = {
  Backend: <Code2 className="w-5 h-5 sm:w-6 sm:h-6" />,
  Frontend: <Layout className="w-5 h-5 sm:w-6 sm:h-6" />,
  Databases: <Database className="w-5 h-5 sm:w-6 sm:h-6" />,
  "Cloud & DevOps": <Cloud className="w-5 h-5 sm:w-6 sm:h-6" />,
  "Cloud & Infrastructure": <Cloud className="w-5 h-5 sm:w-6 sm:h-6" />,
  Security: <Shield className="w-5 h-5 sm:w-6 sm:h-6" />,
  Other: <Wrench className="w-5 h-5 sm:w-6 sm:h-6" />,
};

const skillColors: Record<string, string> = {
  Backend: "from-blue-500/20 to-blue-600/10",
  Frontend: "from-purple-500/20 to-purple-600/10",
  Databases: "from-green-500/20 to-green-600/10",
  "Cloud & DevOps": "from-orange-500/20 to-orange-600/10",
  "Cloud & Infrastructure": "from-orange-500/20 to-orange-600/10",
  Security: "from-red-500/20 to-red-600/10",
  Other: "from-gray-500/20 to-gray-600/10",
};

export function Skills({ skills }: SkillsProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: [0.21, 0.47, 0.32, 0.98],
      },
    },
  };

  return (
    <AnimatedSection className="py-12 sm:py-16 md:py-20 px-4 sm:px-6">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-2 sm:gap-3 mb-8 sm:mb-12"
        >
          <div className="p-2 sm:p-3 rounded-lg bg-primary/10">
            <Code2 className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">Skills</h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              variants={itemVariants}
              whileHover={{ scale: 1.02, y: -3 }}
              className={`p-4 sm:p-6 rounded-xl border bg-gradient-to-br ${
                skillColors[skill.name] || "from-primary/10 to-primary/5"
              } shadow-md hover:shadow-lg transition-shadow backdrop-blur-sm`}
            >
              <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                <div className="p-1.5 sm:p-2 rounded-lg bg-background/50">
                  {skillIcons[skill.name] || <Code2 className="w-5 h-5 sm:w-6 sm:h-6" />}
                </div>
                <h3 className="text-base sm:text-lg md:text-xl font-semibold">{skill.name}</h3>
              </div>
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {skill.keywords.map((keyword, kIndex) => (
                  <motion.div
                    key={keyword}
                    initial={{ opacity: 0, y: 5 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.03 + kIndex * 0.02 }}
                  >
                    <Badge
                      variant="secondary"
                      className="text-xs sm:text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                    >
                      {keyword}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </AnimatedSection>
  );
}
