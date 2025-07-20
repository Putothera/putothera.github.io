"use client";

import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';

interface Splash {
  id: number;
  x: number;
  y: number;
  scale: number;
  opacity: number;
}

const SplashCursor: React.FC = () => {
  const [splashes, setSplashes] = useState<Splash[]>([]);
  const lastPosition = useRef({ x: 0, y: 0 });
  const nextId = useRef(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;

      const deltaX = clientX - lastPosition.current.x;
      const deltaY = clientY - lastPosition.current.y;
      const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

      // Only create a splash if the mouse has moved a certain distance
      if (distance > 30) {
        const newSplash: Splash = {
          id: nextId.current++,
          x: clientX,
          y: clientY,
          scale: 1,
          opacity: 1,
        };

        setSplashes(prev => [...prev, newSplash]);
        lastPosition.current = { x: clientX, y: clientY };

        // Use GSAP to animate the splash and then remove it
        gsap.to(newSplash, {
          scale: 0,
          opacity: 0,
          duration: 1,
          ease: 'power2.out',
          onComplete: () => {
            setSplashes(prev => prev.filter(s => s.id !== newSplash.id));
          }
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-[9999]">
      {splashes.map(splash => (
        <div
          key={splash.id}
          className="absolute rounded-full bg-primary/50"
          style={{
            left: splash.x,
            top: splash.y,
            width: '30px',
            height: '30px',
            transform: `translate(-50%, -50%) scale(${splash.scale})`,
            opacity: splash.opacity,
          }}
        />
      ))}
    </div>
  );
};

export default SplashCursor;