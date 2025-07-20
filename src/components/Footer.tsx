import React from "react";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";
import Magnetic from "./react-bits/Magnetic"; // Import the component

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="border-t py-10">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
        <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
          I'm always open to discussing new projects, creative ideas, or
          opportunities to be part of your vision. Feel free to reach out.
        </p>
        <div className="flex justify-center gap-4 mb-8">
          <Magnetic>
            <a
              href="https://github.com/your-username"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline" size="icon">
                <Github className="h-4 w-4" />
              </Button>
            </a>
          </Magnetic>
          <Magnetic>
            <a
              href="https://linkedin.com/in/your-profile"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline" size="icon">
                <Linkedin className="h-4 w-4" />
              </Button>
            </a>
          </Magnetic>
          <Magnetic>
            <a href="mailto:your-email@example.com">
              <Button variant="outline" size="icon">
                <Mail className="h-4 w-4" />
              </Button>
            </a>
          </Magnetic>
        </div>
        <p className="text-sm text-muted-foreground">
          © {currentYear} PUTRA A. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};