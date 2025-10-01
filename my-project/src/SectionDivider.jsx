import React from "react";

const SectionDivider = ({
  className = "",
  colors = ["#4f46e5", "#06b6d4", "#8b5cf6"], // default gradient colors
}) => {
  // Generate a unique id for gradient so multiple dividers don't clash
  const gradientId = `sectionGradient-${Math.random().toString(36).substr(2, 9)}`;

  return (
    <div className={`w-full overflow-hidden ${className}`}>
      <svg
        className="w-full h-6 md:h-6"
        viewBox="0 0 1440 40"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id={gradientId} x1="0%" y1="100%" x2="100%" y2="0%">
            {colors.map((color, index) => (
              <stop
                key={index}
                offset={`${(index / (colors.length - 1)) * 100}%`}
                stopColor={color}
              />
            ))}
          </linearGradient>
        </defs>
        <path
          d="M0,40 Q720,0 1440,40"
          stroke={`url(#${gradientId})`}
          strokeWidth="2"
          fill="transparent"
        />
      </svg>
    </div>
  );
};

export default SectionDivider;