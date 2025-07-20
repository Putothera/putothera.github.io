import React from 'react';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import projectsData from '@/data/projects.json';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';
import AnimatedContent from '@/components/react-bits/AnimatedContent'; // Import the component

export async function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }));
}

const getProject = (slug: string) => {
  return projectsData.find((project) => project.slug === slug);
};

interface ProjectPageProps {
  params: {
    slug: string;
  };
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = params;
  const project = getProject(slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <article className="max-w-4xl mx-auto">
        <AnimatedContent distance={50}>
            <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
        </AnimatedContent>

        <AnimatedContent distance={50} delay={0.1}>
            <div className="relative w-full h-96 mb-8 rounded-lg overflow-hidden border">
            <Image
                src={project.imageUrl}
                alt={`Screenshot of ${project.title}`}
                fill
                className="object-cover"
            />
            </div>
        </AnimatedContent>
        
        <AnimatedContent distance={50} delay={0.2}>
            <div className="prose dark:prose-invert max-w-none">
            <p className="lead">{project.description}</p>
            <h2>About The Project</h2>
            <p>{project.longDescription}</p>

            <h3>Technologies Used</h3>
            <div className="flex flex-wrap gap-2 mb-8">
                {project.technologies.map((tech, index) => (
                    <AnimatedContent key={tech} distance={20} delay={index * 0.05}>
                        <Badge variant="secondary">{tech}</Badge>
                    </AnimatedContent>
                ))}
            </div>
            </div>
        </AnimatedContent>

        <AnimatedContent distance={50} delay={0.3}>
            <a href={project.projectUrl} target="_blank" rel="noopener noreferrer">
            <Button>
                View on GitHub <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
            </a>
        </AnimatedContent>
      </article>
    </div>
  );
}