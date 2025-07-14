"use client";

import React from "react";

/**
 * All animation logic has been removed for debugging.
 * This component now renders its children directly without any transitions.
 */
export const PageTransition = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};
