"use client";

import React from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { Sun, Moon } from "lucide-react";

export const Header = () => {
  const { theme, setTheme } = useTheme();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur-sm">
      <div className="container flex h-16 items-center">
        <div className="mr-auto">
          <Link href="/" className="font-bold text-lg hover:no-underline">
            PUTRA A
          </Link>
        </div>
        <nav className="flex items-center space-x-6 text-sm font-medium">
          <Link
            href="/#projects"
            className="transition-colors hover:text-primary"
          >
            Projects
          </Link>
          <Link href="/#about" className="transition-colors hover:text-primary">
            About
          </Link>
          <Link
            href="/#contact"
            className="transition-colors hover:text-primary"
          >
            Contact
          </Link>
        </nav>
        <div className="ml-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          >
            <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>
        </div>
      </div>
    </header>
  );
};
