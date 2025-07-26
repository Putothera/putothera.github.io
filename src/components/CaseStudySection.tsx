import React from "react";
import AnimatedContent from "./react-bits/AnimatedContent";

interface CaseStudySectionProps {
  title: string;
  children: React.ReactNode;
  delay?: number;
}

const CaseStudySection: React.FC<CaseStudySectionProps> = ({
  title,
  children,
  delay = 0,
}) => {
  return (
    <AnimatedContent distance={50} delay={delay}>
      <div className="mt-12">
        <h3 className="text-2xl font-bold text-primary mb-4">{title}</h3>
        <div className="prose dark:prose-invert max-w-none">
          {children}
        </div>
      </div>
    </AnimatedContent>
  );
};

export default CaseStudySection;