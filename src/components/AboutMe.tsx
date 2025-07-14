"use client";
import Image from "next/image";
import { ScrollAnimationWrapper } from "./ScrollAnimationWrapper";
import { Button } from "./ui/button";
import Link from "next/link";

export const AboutMe = () => {
  return (
    <ScrollAnimationWrapper>
      <section id="about-me" className="container mx-auto py-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
          <div className="md:col-span-1">
            <Image
              src="https://placehold.co/400x400/1e293b/93c5fd.png?text=Me"
              alt="A photo of the site author"
              width={400}
              height={400}
              className="rounded-lg shadow-md aspect-square object-cover"
            />
          </div>
          <div className="md:col-span-2">
            <h2 className="text-3xl font-bold mb-4">
              From IT Support to Automation Architect
            </h2>
            <p className="text-muted-foreground mb-4">
              My journey in technology began with a foundational role in IT
              support, where I learned the critical importance of smooth,
              reliable systems. This experience ignited my passion for not just
              fixing problems, but engineering them out of existence. I quickly
              moved beyond support tickets and into the world of development and
              automation, driven by a simple belief: technology should be a
              force multiplier for every team.
            </p>
            <p className="text-muted-foreground mb-6">
              Today, I specialize in architecting the digital workplace. Whether
              it's designing intricate Jira workflows, developing custom
              internal apps, or building AI agents, my focus is always on
              creating elegant, scalable, and automated solutions. I thrive on
              collaborating with diverse teams to deliver tools that are not
              only powerful but also secure and compliant with rigorous
              standards like ISO 27001/27701.
            </p>
            <Button asChild>
              <Link href="#contact">Get In Touch</Link>
            </Button>
          </div>
        </div>
      </section>
    </ScrollAnimationWrapper>
  );
};
