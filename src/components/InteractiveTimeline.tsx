"use client";

import React from "react";
import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardDescription } from "./ui/card";
import timelineData from "@/data/timeline.json";
import { Zap } from "lucide-react";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
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
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">My Professional Journey</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mt-2">
            A look at the key milestones that have shaped my skills and
            experience.
          </p>
        </div>
        <div className="relative">
          {/* The connecting line */}
          <div
            className="absolute left-1/2 -translate-x-1/2 top-10 bottom-10 w-0.5 bg-border"
            aria-hidden="true"
          ></div>

          <motion.div
            className="space-y-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
          >
            {timelineData.map((item, index) => (
              <motion.div
                key={index}
                className="relative flex items-center justify-center"
                variants={itemVariants}
              >
                <div className="absolute left-1/2 -translate-x-1/2 bg-primary p-2 rounded-full z-10 border-4 border-background">
                  <Zap className="text-primary-foreground size-5" />
                </div>
                <Card className="w-full md:w-2/5 shadow-lg">
                  <CardHeader
                    className={index % 2 === 0 ? "md:text-right" : ""}
                  >
                    <p className="text-sm text-primary font-semibold">
                      {item.date}
                    </p>
                    <CardTitle>{item.title}</CardTitle>
                    <CardDescription>{item.description}</CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
