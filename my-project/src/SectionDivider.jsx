import React from "react";

const SectionDivider = ({ className = "" }) => {
  return (
    <div className={`w-full overflow-hidden ${className}`}>
      <svg
        className="w-full h-6 md:h-6"
        viewBox="0 0 1440 40"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="sectionGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#4f46e5" />
            <stop offset="50%" stopColor="#06b6d4" />
            <stop offset="100%" stopColor="#8b5cf6" />
          </linearGradient>
        </defs>
        <path
          d="M0,40 Q720,0 1440,40"
          stroke="url(#sectionGradient)"
          strokeWidth="2"
          fill="transparent"
        />
      </svg>
    </div>
  );
};

export default SectionDivider;