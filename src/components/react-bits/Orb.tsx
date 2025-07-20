"use client";

import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { cn } from '@/lib/utils';

interface OrbProps {
  className?: string;
  orbSize?: number;
  orbColor?: string; // e.g., "hsla(265, 100%, 50%, 0.3)"
}

const Orb: React.FC<OrbProps> = ({ 
  className,
  orbSize = 400,
  orbColor = "hsla(265, 90%, 60%, 0.2)" // A color that matches your primary theme
}) => {
  const orbRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const orb = orbRef.current;
    const container = containerRef.current;
    if (!orb || !container) return;
    
    const onMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { top, left } = container.getBoundingClientRect();
      
      gsap.to(orb, {
        x: clientX - left,
        y: clientY - top,
        duration: 1.5,
        ease: 'power3.out',
      });
    };

    container.addEventListener('mousemove', onMouseMove);

    return () => {
      container.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  return (
    <div ref={containerRef} className={cn("relative w-full h-full overflow-hidden", className)}>
      <div
        ref={orbRef}
        className="absolute -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        style={{
          width: `${orbSize}px`,
          height: `${orbSize}px`,
          background: `radial-gradient(circle, ${orbColor} 0%, transparent 70%)`,
          filter: 'blur(40px)',
          opacity: 0.8,
        }}
      />
      {/* The rest of your content will go here */}
    </div>
  );
};

export default Orb;