import React from "react";

interface BarData {
  label: string;
  value: number;
  color?: string;
}

interface SimpleBarChartProps {
  data: BarData[];
  className?: string;
}

export default function SimpleBarChart({ data, className = "" }: SimpleBarChartProps) {
  const max = Math.max(...data.map(d => d.value));
  return (
    <div className={`w-full ${className}`}>
      {data.map((d, i) => (
        <div key={i} className="mb-2">
          <div className="flex justify-between items-center mb-1">
            <span className="text-xs text-gray-700 font-medium">{d.label}</span>
            <span className="text-xs text-gray-500">R$ {d.value.toLocaleString("pt-BR")}</span>
          </div>
          <div className="h-3 rounded bg-gray-200">
            <div
              className="h-3 rounded"
              style={{
                width: `${(d.value / max) * 100}%`,
                background: d.color || "#3b82f6",
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
