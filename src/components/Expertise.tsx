"use client";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "./ui/card";
import { motion } from "framer-motion"; // Import motion
import { Zap, Puzzle, Cog, Code } from "lucide-react";

const expertiseData = [
  {
    icon: <Cog className="w-8 h-8 text-primary" />,
    title: "Atlassian Suite Management",
    description:
      "Expert configuration, administration, and optimization of Jira, Confluence, and Bitbucket to fit your team's unique needs.",
  },
  {
    icon: <Puzzle className="w-8 h-8 text-primary" />,
    title: "Custom API & Integrations",
    description:
      "Connecting disparate systems like Salesforce, Slack, and internal tools with robust, custom-built API integrations.",
  },
  {
    icon: <Zap className="w-8 h-8 text-primary" />,
    title: "Workflow Automation",
    description:
      "Designing and implementing intelligent automations that eliminate manual tasks, reduce errors, and accelerate processes.",
  },
  {
    icon: <Code className="w-8 h-8 text-primary" />,
    title: "Internal Tool Development",
    description:
      "Building custom applications and scripts that provide teams with the exact functionality they need to succeed.",
  },
];

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // This creates the stagger effect
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export const Expertise = () => {
  return (
    <section className="py-16 bg-muted/40 dark:bg-muted/20">
      <div className="container mx-auto">
        <div className="text-center">
          <h2 className="text-3xl font-bold">Areas of Expertise</h2>
          <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
            I provide specialized solutions across the following key areas to
            drive efficiency and innovation.
          </p>
        </div>
        {/* We will wrap the grid in a motion.div */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {expertiseData.map((item) => (
            // Each card is now a motion.div with its own variant
            <motion.div key={item.title} variants={itemVariants}>
              <Card className="text-center items-center h-full">
                <CardHeader>
                  <div className="mx-auto bg-primary/10 p-3 rounded-full w-fit">
                    {item.icon}
                  </div>
                  <CardTitle>{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{item.description}</CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
