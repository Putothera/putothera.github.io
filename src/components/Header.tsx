"use client";

import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { useActiveSection } from "@/hooks/useActiveSection";

// Added "Journey" to the navigation links
const navLinks = [
  { href: "#projects", label: "Projects" },
  { href: "#about-me", label: "About" },
  { href: "#journey", label: "Journey" },
  { href: "#contact", label: "Contact" },
];

export const Header = () => {
  // The hook will now also track the "journey" section
  const activeSection = useActiveSection(navLinks.map(link => link.href.substring(1)));

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-background">
      <div className="container flex h-16 items-center">
        <div className="mr-auto">
          <Link href="/" className="flex items-center gap-2 group">
            <div
              className="
              flex items-center justify-center 
              w-8 h-8 
              bg-white text-black 
              rounded-full 
              font-bold text-lg
              group-hover:bg-primary group-hover:text-white 
              transition-colors duration-300"
            >
              PA
            </div>
            <span className="font-bold text-lg hidden sm:block">PUTRA A</span>
          </Link>
        </div>
        <nav className="flex items-center space-x-6 text-sm font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "transition-colors hover:text-primary",
                activeSection === link.href.substring(1) ? "text-primary" : "text-foreground"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};