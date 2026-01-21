"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { ResumeBasics } from "@/types/resume";

interface HeroProps {
  basics: ResumeBasics;
}

export function Hero({ basics }: HeroProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.21, 0.47, 0.32, 0.98],
      },
    },
  };

  const floatingAnimation = {
    y: [-10, 10, -10],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut",
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 sm:px-6">
      {/* Animated background gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/10" />
        <motion.div
          className="absolute top-1/4 left-1/4 w-48 h-48 sm:w-72 sm:h-72 md:w-96 md:h-96 bg-primary/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-48 h-48 sm:w-72 sm:h-72 md:w-96 md:h-96 bg-secondary/20 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.3, 0.5],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="w-full max-w-4xl mx-auto text-center pt-4 sm:pt-20 pb-8"
      >
        <motion.div variants={itemVariants} className="mb-4 sm:mb-6">
          <motion.div
            animate={floatingAnimation}
            className="inline-block mb-2 sm:mb-4"
          >
            <div className="w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 mx-auto rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center text-2xl sm:text-3xl md:text-4xl font-bold text-primary-foreground shadow-xl">
              {basics.name.split(" ").map((n) => n[0]).slice(0, 2).join("")}
            </div>
          </motion.div>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-2 sm:mb-4 bg-gradient-to-r from-foreground via-foreground/80 to-foreground bg-clip-text px-2"
        >
          {basics.name}
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-4 sm:mb-6"
        >
          {basics.label}
        </motion.p>

        <motion.p
          variants={itemVariants}
          className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed px-2"
        >
          {basics.summary}
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-wrap gap-3 sm:gap-4 justify-center px-2"
        >
          {basics.profiles?.map((profile) => (
            <motion.a
              key={profile.network}
              href={profile.url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button variant="outline" size="default" className="gap-2 text-sm sm:text-base">
                {profile.network === "GitHub" && <Github className="w-4 h-4 sm:w-5 sm:h-5" />}
                {profile.network === "LinkedIn" && <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />}
                {profile.network}
              </Button>
            </motion.a>
          ))}
          <motion.a
            href={`mailto:${basics.email}`}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button variant="outline" size="default" className="gap-2 text-sm sm:text-base">
              <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
              Email
            </Button>
          </motion.a>
          <motion.a
            href="/resume"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button size="default" className="gap-2 text-sm sm:text-base">
              <FileText className="w-4 h-4 sm:w-5 sm:h-5" />
              Resume
            </Button>
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator - positioned at bottom of viewport with safe spacing */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-muted-foreground"
        >
          <span className="text-xs sm:text-sm">Scroll</span>
          <div className="w-5 h-8 sm:w-6 sm:h-10 rounded-full border-2 border-muted-foreground/50 flex justify-center pt-2">
            <motion.div
              animate={{ y: [0, 8, 0], opacity: [1, 0.3, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-2 bg-muted-foreground/50 rounded-full"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
