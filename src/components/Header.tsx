"use client";

import React from "react";
import Link from "next/link";


export const Header = () => {
  return (
    // Add z-50 to ensure it's on top of other content
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-transparent backdrop-blur-sm">
      <div className="container flex h-16 items-center">
        <div className="mr-auto">
          {/* Replace the text name with a stylized logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="
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
          <Link
            href="/#projects"
            className="transition-colors hover:text-primary"
          >
            Projects
          </Link>
          <Link href="/#about-me" className="transition-colors hover:text-primary">
            About
          </Link>
          <Link
            href="/#contact"
            className="transition-colors hover:text-primary"
          >
            Contact
          </Link>
        </nav>
        {/* The theme switcher button is now removed */}
      </div>
    </header>
  );
};