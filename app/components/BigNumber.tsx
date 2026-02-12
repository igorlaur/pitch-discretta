import React from "react";

interface BigNumberProps {
  label: string;
  value: string | number;
  className?: string;
}

export default function BigNumber({ label, value, className = "" }: BigNumberProps) {
  // Aplica verde para valores financeiros, azul para outros
  const isMoney = typeof value === "string" && value.startsWith("R$");
  const colorClass = isMoney ? "text-green-600" : "text-blue-600";
  return (
    <div className={`flex flex-col items-center ${className}`}>
      <span className={`text-4xl font-extrabold mb-1 ${colorClass}`}>{value}</span>
      <span className="text-sm text-gray-500">{label}</span>
    </div>
  );
}
