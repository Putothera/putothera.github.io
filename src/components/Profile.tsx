// src/components/Profile.tsx

"use client";
import { motion } from "framer-motion";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ArrowRight, Rss } from "lucide-react";
import Link from "next/link";

export const Profile = () => {
  return (
    <section id="about" className="relative overflow-hidden py-24 sm:py-32">
      {/* Enhanced background with a slower, more subtle animation */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] dark:bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.15),rgba(255,255,255,0))]"></div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="container mx-auto text-center"
      >
        <Badge
          variant="outline"
          className="py-1 px-3 border-primary/50 text-primary"
        >
          <Rss className="size-3 mr-2 animate-pulse" />
          Open to new projects & collaborations
        </Badge>
        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mt-6">
          Architect of Digital Ecosystems
        </h1>
        <p className="mt-6 text-lg max-w-3xl mx-auto leading-8 text-muted-foreground">
          I design, build, and automate the critical software infrastructure
          that powers modern teams. From seamless API integrations to robust
          internal platforms, I create systems that just *work*.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Button asChild size="lg">
            <Link href="#projects">
              View My Work <ArrowRight className="ml-2 size-4" />
            </Link>
          </Button>
          <Button asChild variant="ghost" size="lg">
            <Link href="#contact">Get In Touch</Link>
          </Button>
        </div>
      </motion.div>
    </section>
  );
};
