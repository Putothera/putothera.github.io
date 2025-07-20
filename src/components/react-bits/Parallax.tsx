"use client";

import React, { useRef, useEffect, ReactNode } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface ParallaxProps {
  children: ReactNode;
  className?: string;
  speed?: number;
}

const Parallax: React.FC<ParallaxProps> = ({ children, className, speed = 1 }) => {
  const triggerRef = useRef<HTMLDivElement>(null);
  const targetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const trigger = triggerRef.current;
    const target = targetRef.current;
    if (!trigger || !target) return;

    const y = trigger.offsetHeight * speed * 0.1;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: trigger,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
    });

    tl.fromTo(target, { y: -y }, { y: y, ease: 'none' });

    return () => {
      tl.kill();
    };
  }, [speed]);

  return (
    <div ref={triggerRef} className={className}>
      <div ref={targetRef}>{children}</div>
    </div>
  );
};

export default Parallax;