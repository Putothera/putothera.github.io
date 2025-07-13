"use client";
import { ReactTyped } from "react-typed";
import { motion } from "framer-motion";
import { Badge } from "./ui/badge";

export const Profile = () => {
  return (
    <section id="about" className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] dark:bg-[radial-gradient(rgba(255,255,255,0.1)_1px,transparent_1px)] [background-size:16px_16px]"></div>
      
      <div className="container mx-auto py-24 sm:py-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
            IT Platform Specialist
          </h1>
          <p className="mt-6 text-lg max-w-2xl mx-auto leading-8 text-muted-foreground">
            I architect and automate the digital nervous system of organizations, connecting platforms and streamlining workflows to enhance productivity.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-2">
            <Badge variant="secondary">Atlassian Administration</Badge>
            <Badge variant="secondary">API & Platform Integration</Badge>
            <Badge variant="secondary">Process Automation</Badge>
            <Badge variant="secondary">Internal App Development</Badge>
          </div>
        </motion.div>
      </div>
    </section>
  )
}