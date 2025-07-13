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
                        <Image src="https://placehold.co/400x400/e2e8f0/1c2b4d.png?text=Your\nPhoto" alt="A photo of the site author" width={400} height={400} className="rounded-lg shadow-md aspect-square object-cover" />
                    </div>
                    <div className="md:col-span-2">
                        <h2 className="text-3xl font-bold mb-4">Driven by Efficiency and a Passion for Problem-Solving</h2>
                        <p className="text-muted-foreground mb-4">
                            Hello! I'm an IT specialist with a deep-seated passion for untangling complex digital knots. My journey into the world of platform integration and automation began with a simple belief: technology should empower teams, not hinder them. I thrive on diving into a company's ecosystem, identifying bottlenecks, and building the robust, automated workflows that allow people to focus on what they do best.
                        </p>
                        <p className="text-muted-foreground mb-6">
                            Whether it's configuring a sophisticated Jira environment from the ground up, scripting a custom integration between two critical business platforms, or developing an internal tool to surface key data, my goal is always the same: to create systems that are not only powerful but also intuitive and reliable.
                        </p>
                        <Button asChild>
                           <Link href="#contact">Get In Touch</Link>
                        </Button>
                    </div>
                </div>
            </section>
        </ScrollAnimationWrapper>
    )
}