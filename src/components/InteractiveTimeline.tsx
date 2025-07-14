"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { Card, CardHeader, CardTitle, CardDescription } from "./ui/card";
import timelineData from "@/data/timeline.json";
import { Zap } from "lucide-react";
import { cn } from "@/lib/utils";

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

        {/* --- Main Timeline Container --- */}
        <div className="relative">
          {/* The Vertical Line */}
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
                {/* The Icon on the line */}
                <div className="absolute top-1/2 -translate-y-1/2 bg-primary p-2 rounded-full z-10 border-4 border-background left-4 -translate-x-1/2 md:left-1/2">
                  <Zap className="text-primary-foreground size-5" />
                </div>

                {/* The Card - Positioned conditionally */}
                <div
                  className={cn(
                    "w-full md:w-1/2",
                    // On desktop, odd items are on the right, even on the left
                    index % 2 === 0 ? "md:ml-auto md:pl-12" : "md:pr-12"
                  )}
                >
                  <Card className="shadow-lg">
                    {/* On desktop, text aligns away from the center line */}
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
