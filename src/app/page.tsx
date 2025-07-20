import React from "react";
import { ProjectCard } from "@/components/ProjectCard";
import { Project } from "@/lib/types";
import projectsData from "@/data/projects.json";
import { Profile } from "@/components/Profile";
import { AboutMe } from "@/components/AboutMe";
import { Expertise } from "@/components/Expertise";
import { InteractiveTimeline } from "@/components/InteractiveTimeline";
import AnimatedContent from '@/components/react-bits/AnimatedContent';
import ScrollFloat from '@/components/react-bits/ScrollFloat'; // Import the component


export default function Home() {
  const projects: Project[] = projectsData;

  return (
    <main>
      <Profile />

      <AnimatedContent distance={50}>
        <Expertise />
      </AnimatedContent>

      <AnimatedContent distance={50}>
        <AboutMe />
      </AnimatedContent>
      
      <AnimatedContent distance={50}>
        <InteractiveTimeline />
      </AnimatedContent>

      <section id="projects" className="py-24 bg-muted/40 dark:bg-muted/20">
        <div className="container mx-auto">
          <AnimatedContent distance={50}>
            <div className="text-center">
            <ScrollFloat containerClassName="text-3xl font-bold">
              Case Studies
            </ScrollFloat>              
            <p className="text-muted-foreground max-w-2xl mx-auto">
                Here are some examples of how I've solved real-world problems
                and delivered value.
              </p>
            </div>
          </AnimatedContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {projects.map((project, index) => (
              <AnimatedContent 
                key={project.id} 
                distance={50} 
                delay={index * 0.1}
              >
                <ProjectCard project={project} />
              </AnimatedContent>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}