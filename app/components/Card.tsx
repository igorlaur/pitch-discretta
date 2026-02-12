import React from "react";

interface CardProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

export default function Card({ title, children, className = "" }: CardProps) {
  return (
    <div className={`bg-white rounded-xl shadow-md p-6 mb-6 ${className}`}>
      <h2 className="text-xl font-bold mb-2 text-gray-900">{title}</h2>
      <div>{children}</div>
    </div>
  );
}
