"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatedSection } from "./AnimatedSection";
import type { ResumeBasics } from "@/types/resume";

interface ContactProps {
  basics: ResumeBasics;
}

export function Contact({ basics }: ContactProps) {
  return (
    <AnimatedSection className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-muted/30">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-12"
        >
          <div className="inline-flex p-2 sm:p-3 rounded-lg bg-primary/10 mb-3 sm:mb-4">
            <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">Get In Touch</h2>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-2">
            I'm always open to discussing new opportunities, interesting
            projects, or just having a chat about technology.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="bg-card rounded-xl sm:rounded-2xl border shadow-lg sm:shadow-xl p-5 sm:p-8 md:p-12"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            <div className="space-y-4 sm:space-y-6">
              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-center gap-3 sm:gap-4"
              >
                <div className="p-2 sm:p-3 rounded-lg bg-primary/10 shrink-0">
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs sm:text-sm text-muted-foreground">Email</p>
                  <a
                    href={`mailto:${basics.email}`}
                    className="text-sm sm:text-base font-medium hover:text-primary transition-colors break-all"
                  >
                    {basics.email}
                  </a>
                </div>
              </motion.div>

              {basics.phone && (
                <motion.div
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-3 sm:gap-4"
                >
                  <div className="p-2 sm:p-3 rounded-lg bg-primary/10 shrink-0">
                    <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs sm:text-sm text-muted-foreground">Phone</p>
                    <a
                      href={`tel:${basics.phone}`}
                      className="text-sm sm:text-base font-medium hover:text-primary transition-colors"
                    >
                      {basics.phone}
                    </a>
                  </div>
                </motion.div>
              )}

              {basics.location && (
                <motion.div
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-3 sm:gap-4"
                >
                  <div className="p-2 sm:p-3 rounded-lg bg-primary/10 shrink-0">
                    <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs sm:text-sm text-muted-foreground">Location</p>
                    <p className="text-sm sm:text-base font-medium">{basics.location.city}</p>
                  </div>
                </motion.div>
              )}
            </div>

            <div className="flex flex-col justify-center mt-2 md:mt-0">
              <motion.a
                href={`mailto:${basics.email}`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button size="lg" className="w-full gap-2 text-sm sm:text-base md:text-lg py-5 sm:py-6">
                  <Send className="w-4 h-4 sm:w-5 sm:h-5" />
                  Send a Message
                </Button>
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatedSection>
  );
}
