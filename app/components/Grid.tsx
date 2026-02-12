import React from "react";

interface GridProps {
  children: React.ReactNode;
  className?: string;
}

export default function Grid({ children, className = "" }: GridProps) {
  return (
    <div className={`grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ${className}`}>
      {children}
    </div>
  );
}
