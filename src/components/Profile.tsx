"use client";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ArrowRight, Rss } from "lucide-react";
import Link from "next/link";
import RotatingText from "./react-bits/RotatingText"; // Import the new component
import GradientText from './react-bits/GradientText'; 
import SplitText from "./react-bits/SplitText";

export const Profile = () => {
  return (
    <section
      id="about"
      className="relative overflow-hidden h-screen flex items-center justify-center"
    >
      <div className="absolute top-0 left-0 w-full h-full bg-black/50 -z-10"></div>

      {/* --- Content --- */}
      <div className="container mx-auto text-center">
        <Badge
          variant="outline"
          className="py-1 px-3 border-primary/50 text-primary bg-background/20 backdrop-blur-sm"
        >
          <Rss className="size-3 mr-2 animate-pulse" />
          <GradientText
            colors={["#a855f7", "#fde047", "#a855f7"]}
          >
            Driving Efficiency Through Automation
          </GradientText>
        </Badge>
        
        {/* Replace the h1 with RotatingText */}
        <div className="text-4xl font-bold tracking-tight sm:text-6xl mt-6 text-white h-24 sm:h-32 flex justify-center items-center">
            <RotatingText
                texts={[
                    "Automation Expert",
                    "Platform Integrator",
                    "IT Specialist",
                    "Internal Tools Dev"
                ]}
                staggerDuration={0.02}
                rotationInterval={2500}
            />
        </div>

        <div className="mt-6 text-lg max-w-3xl mx-auto leading-8 text-slate-300">
          <SplitText
            text="I build, integrate, and automate the core systems that drive business efficiency. From custom Jira workflows to AI-powered agents, I deliver solutions that enhance performance and accelerate growth."
            splitType="words"
            duration={0.6}
            delay={10}
            from={{ y: 20, opacity: 0 }}
            to={{ y: 0, opacity: 1 }}
          />
        </div>
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
      </div>
    </section>
  );
};