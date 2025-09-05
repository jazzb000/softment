import React from "react";
import { twMerge } from "tailwind-merge";

export interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * Layout container for consistent horizontal gutters and max width.
 * Mobile-first: full width with safe paddings; desktop: max-w aligned to design.
 */
export function Container({ children, className }: ContainerProps) {
  const base = "mx-auto w-full max-w-[1145px] px-4 sm:px-6 lg:px-8";
  return <div className={twMerge(base, className)}>{children}</div>;
}


