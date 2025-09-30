import React, { useEffect, useRef } from "react";
import reactLogo from "./assets/react.svg";
import jsLogo from "./assets/css.svg";
import htmlLogo from "./assets/css.svg";
import cssLogo from "./assets/css.svg";
import tailwindLogo from "./assets/css.svg";
import bgUniverse from "./assets/background-universe-1.jpg"; // your image

const ScrollAnimation = () => {
  const containerRef = useRef(null);
  const reactLogoRef = useRef(null);
  const smallLogos = useRef([]);

  useEffect(() => {
    const baseOffsets = [
      { x: -400, y: -300 }, // JS
      { x: 400, y: -250 },  // HTML
      { x: -350, y: 350 },  // CSS
      { x: 350, y: 300 },   // Tailwind
    ];

    const handleScroll = () => {
      const container = containerRef.current;
      const reactLogoEl = reactLogoRef.current;
      if (!container || !reactLogoEl) return;

      const rect = container.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const windowWidth = window.innerWidth;

      const offsets = baseOffsets.map(({ x, y }) => {
        let scale = 1;
        if (windowWidth < 768) scale = 0.6;
        else if (windowWidth < 1024) scale = 0.8;
        return { x: x * scale, y: y * scale };
      });

      const reactBottom = reactLogoEl.getBoundingClientRect().bottom + windowHeight * 0.1;
      let progress = (windowHeight - rect.top - reactBottom) / (windowHeight * 0.5);
      progress = Math.min(Math.max(progress, 0), 1);

      smallLogos.current.forEach((logo, index) => {
        if (!logo) return;
        const { x, y } = offsets[index];
        const minDistance = 100;
        const translateX = x * (1 - progress) + Math.sign(x) * minDistance * progress;
        const translateY = y * (1 - progress) + Math.sign(y) * minDistance * progress;
        logo.style.transform = `translate(${translateX}px, ${translateY}px)`;
        logo.style.zIndex = 5;
      });
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative h-[150vh] flex justify-center items-center"
    >
      {/* Blurred background */}
      <div
        className="absolute top-0 left-0 w-full h-full -z-10 bg-cover bg-center filter blur-sm opacity-40"
        style={{ backgroundImage: `url(${bgUniverse})` }}
      />

      {/* React logo */}
      <img
        ref={reactLogoRef}
        src={reactLogo}
        alt="React"
        className="w-40 h-40 z-20"
      />

      {/* Small logos */}
      {[jsLogo, htmlLogo, cssLogo, tailwindLogo].map((logo, idx) => (
        <img
          key={idx}
          src={logo}
          alt="logo"
          ref={(el) => (smallLogos.current[idx] = el)}
          className="w-16 h-16 absolute transition-transform duration-500"
        />
      ))}
    </div>
  );
};

export default ScrollAnimation;