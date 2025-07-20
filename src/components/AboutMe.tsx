"use client";
import { Button } from "./ui/button";
import Link from "next/link";
import Orb from "./react-bits/Orb";
import ScrollReveal from "./react-bits/ScrollReveal";
import ScrollFloat from "./react-bits/ScrollFloat";
import ProfileCard from "./react-bits/ProfileCard";

export const AboutMe = () => {
  const handleContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="about-me" className="relative py-24">
      <Orb className="absolute inset-0 z-0" />
      
      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
          
          <div className="md:col-span-1 flex justify-center">
            <ProfileCard
              name="PUTRA A"
              title="IT Specialist"
              handle="putra"
              status="Available for Work"
              contactText="Get In Touch"
              avatarUrl="https://placehold.co/400x400/1e293b/93c5fd.png?text=Me"
              onContactClick={handleContact}
              enableTilt={false}
            />
          </div>

          <div className="md:col-span-2">
            <ScrollFloat containerClassName="mb-4">
              From IT Support to Automation Architect
            </ScrollFloat>
            
            <ScrollReveal textClassName="text-muted-foreground mb-4">
              My journey in technology began with a foundational role in IT
              support, where I learned the critical importance of smooth,
              reliable systems. This experience ignited my passion for not just
              fixing problems, but engineering them out of existence. I quickly
              moved beyond support tickets and into the world of development and
              automation, driven by a simple belief: technology should be a
              force multiplier for every team.
            </ScrollReveal>
            
            <ScrollReveal textClassName="text-muted-foreground mb-6">
              Today, I specialize in architecting the digital workplace. Whether
              it's designing intricate Jira workflows, developing custom
              internal apps, or building AI agents, my focus is always on
              creating elegant, scalable, and automated solutions. I thrive on
              collaborating with diverse teams to deliver tools that are not
              only powerful but also secure and compliant with rigorous
              standards like ISO 27001/27701.
            </ScrollReveal>

            <Button asChild>
              <Link href="#contact">Get In Touch</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};