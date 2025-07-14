"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { Card, CardHeader, CardTitle, CardDescription } from "./ui/card";
import { Zap } from "lucide-react";
import { cn } from "@/lib/utils";

// --- FIX: Hardcode the data directly into the component ---
// This bypasses any file import or caching issues.
const timelineData = [
  {
    date: "2022 - 2023",
    title: "IT Support & Systems Development at PT FARIKA BETON",
    description:
      "Built a foundation in IT infrastructure, managing servers, networks, and assets. Spearheaded the development of internal systems like an asset management app with QR integration and a digital ID card system using Laravel and PHP.",
  },
  {
    date: "Dec 2023 - Apr 2024",
    title: "Information Technology Support Officer at JULO",
    description:
      "Provided foundational IT support across multiple divisions, ensuring smooth operational workflows for both on-site and remote teams throughout the SEA region. Mastered troubleshooting and user assistance.",
  },
  {
    date: "Apr 2024 - May 2025",
    title: "Promotion: IT Corporate Apps & Support at JULO",
    description:
      "Promoted to a development-focused role to enhance operational efficiency by building and integrating internal applications. Played a key role in ISO 27001/27701 audits and achieved the highest performance rating (6.5/7) in Engineering.",
  },
  {
    date: "May 2025 - Present",
    title: "IT Specialist, Application & Platform at Kredivo Group",
    description:
      "Specializing in advanced automation and platform integration. Key achievements include creating complex Jira automations, fully automating employee onboarding, and developing an AI Agent from scratch using n8n.",
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export const InteractiveTimeline = () => {
  return (
    <section id="journey" className="py-24">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold">My Professional Journey</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mt-2">
            A look at the key milestones that have shaped my skills and
            experience.
          </p>
        </div>

        <div className="relative">
          <div
            className="absolute top-0 w-0.5 h-full bg-border left-4 md:left-1/2 md:-translate-x-1/2"
            aria-hidden="true"
          ></div>

          <motion.div
            className="space-y-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={containerVariants}
          >
            {timelineData.map((item, index) => (
              <motion.div
                key={index}
                className="relative"
                variants={itemVariants}
              >
                <div className="absolute top-1/2 -translate-y-1/2 bg-primary p-2 rounded-full z-10 border-4 border-background left-4 -translate-x-1/2 md:left-1/2">
                  <Zap className="text-primary-foreground size-5" />
                </div>

                <div
                  className={cn(
                    "w-full md:w-1/2",
                    index % 2 === 0 ? "md:ml-auto md:pl-12" : "md:pr-12"
                  )}
                >
                  <Card className="shadow-lg">
                    <CardHeader
                      className={cn(
                        "text-left",
                        index % 2 === 0 ? "md:text-left" : "md:text-right"
                      )}
                    >
                      <p className="text-sm text-primary font-semibold">
                        {item.date}
                      </p>
                      <CardTitle>{item.title}</CardTitle>
                      <CardDescription>{item.description}</CardDescription>
                    </CardHeader>
                  </Card>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
