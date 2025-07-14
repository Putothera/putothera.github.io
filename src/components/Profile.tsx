// src/components/Profile.tsx

"use client";
import { motion } from "framer-motion";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ArrowRight, Rss } from "lucide-react";
import Link from "next/link";

export const Profile = () => {
  return (
    <section
      id="about"
      className="relative overflow-hidden h-[80vh] flex items-center justify-center"
    >
      {/* --- Video Background --- */}
      <div className="absolute top-0 left-0 w-full h-full -z-20">
        <video
          autoPlay
          loop
          muted
          playsInline // Important for iOS devices
          className="w-full h-full object-cover"
        >
          {/* Reference your local video file here */}
          <source src="/videos/hero-background.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* --- Overlay for Readability --- */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/50 -z-10"></div>

      {/* --- Content --- */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="container mx-auto text-center"
      >
        <Badge
          variant="outline"
          className="py-1 px-3 border-primary/50 text-primary bg-background/20 backdrop-blur-sm"
        >
          <Rss className="size-3 mr-2 animate-pulse" />
          Open to new projects & collaborations
        </Badge>
        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mt-6 text-white">
          Architect of Digital Ecosystems
        </h1>
        <p className="mt-6 text-lg max-w-3xl mx-auto leading-8 text-slate-300">
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
          <Button
            asChild
            variant="ghost"
            size="lg"
            className="text-white hover:bg-white/10 hover:text-white"
          >
            <Link href="#contact">Get In Touch</Link>
          </Button>
        </div>
      </motion.div>
    </section>
  );
};
