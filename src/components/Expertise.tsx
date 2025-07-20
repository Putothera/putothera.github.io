"use client";

import MagicBento from "./react-bits/MagicBento";
import ScrollFloat from "./react-bits/ScrollFloat";
import AnimatedContent from "./react-bits/AnimatedContent";

export const Expertise = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto flex flex-col items-center">
        <div className="text-center mb-8">
          <ScrollFloat containerClassName="text-3xl font-bold">
            Areas of Expertise
          </ScrollFloat>
          <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
            I provide specialized solutions across the following key areas to
            drive efficiency and innovation.
          </p>
        </div>
        
        <AnimatedContent distance={50}>
          <MagicBento 
            textAutoHide={true}
            enableStars={true}
            enableSpotlight={true}
            enableBorderGlow={true}
            enableTilt={false}
            enableMagnetism={false}
            clickEffect={true}
            spotlightRadius={300}
            particleCount={12}
            glowColor="132, 0, 255"
          />
        </AnimatedContent>

      </div>
    </section>
  );
};