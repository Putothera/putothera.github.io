export interface Project {
    id: number;
    slug: string;
    title: string;
    description: string;
    longDescription: string;
    imageUrl: string;
    projectUrl: string;
    tags: string[];
    technologies: string[];
  }