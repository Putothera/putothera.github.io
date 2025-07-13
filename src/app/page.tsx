import React from 'react';
import { ProjectCard } from '@/components/ProjectCard';
import { Project } from '@/lib/types';
import projectsData from '@/data/projects.json';
import { Profile } from '@/components/Profile';
import { ScrollAnimationWrapper } from '@/components/ScrollAnimationWrapper';
import { AboutMe } from '@/components/AboutMe';
import { Expertise } from '@/components/Expertise';

export default function Home() {
  const projects: Project[] = projectsData;

  return (
    <main>
      <Profile />
      <Expertise />
      <AboutMe />
      
      <ScrollAnimationWrapper>
        <section id="projects" className="py-24 bg-muted/40 dark:bg-muted/20">
          <div className="container mx-auto">
            <div className="text-center">
                <h2 className="text-3xl font-bold mb-4">Case Studies</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">Here are some examples of how I've solved real-world problems and delivered value.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              {projects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        </section>
      </ScrollAnimationWrapper>
    </main>
  );
}