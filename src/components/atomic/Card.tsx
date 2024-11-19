import React from "react";

export default function Card({ children }: { children?: React.ReactNode }) {
  return (
    <div className="w-container.xs bg-cyan-200 border shadow-sm border-t-4 border-black">
      {children}
    </div>
  );
}
