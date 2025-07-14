"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import { Project } from "@/lib/types";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    // We are removing the style prop and initial prop,
    // relying on the parent (ScrollAnimationWrapper or PageTransition)
    // to handle the entry state.
    <motion.div
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
      // The initial state is now defined by its starting render state
      className="opacity-0"
      style={{ y: 20 }}
    >
      <Link href={`/projects/${project.slug}`} className="group block h-full">
        <Card className="flex flex-col h-full overflow-hidden transition-all duration-300 border-2 border-transparent group-hover:border-primary group-hover:shadow-lg">
          <CardHeader>
            <div className="relative h-48 mb-4 overflow-hidden rounded">
              <Image
                src={project.imageUrl}
                alt={`Screenshot of ${project.title}`}
                fill
                className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
              />
            </div>
            <h3 className="text-lg font-semibold">{project.title}</h3>
            <p className="text-sm text-muted-foreground mt-1">
              {project.description}
            </p>
          </CardHeader>
          <CardContent className="flex-grow">
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <Badge key={tag} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>
          </CardContent>
          <CardFooter className="mt-auto">
            <span className="text-sm font-semibold text-primary flex items-center">
              View Case Study
              <ArrowRight className="h-4 w-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
          </CardFooter>
        </Card>
      </Link>
    </motion.div>
  );
};
