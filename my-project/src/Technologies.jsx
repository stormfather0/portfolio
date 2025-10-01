// import React, { useEffect, useRef, useState } from "react";
// import reactLogo from "./assets/react.svg";
// import jsLogo from "./assets/css.svg";
// import htmlLogo from "./assets/css.svg";
// import cssLogo from "./assets/css.svg";
// import tailwindLogo from "./assets/css.svg";
// import bgUniverse from "./assets/background-universe-1.jpg";

// const ScrollAnimation = () => {
//   const containerRef = useRef(null);
//   const reactLogoRef = useRef(null);
//   const smallLogos = useRef([]);
//   const progressRef = useRef(0); // useRef for super smooth animation
//   const targetProgress = useRef(0);
//   const [locked, setLocked] = useState(false);

//   // Smooth animation loop
//   useEffect(() => {
//     let animationFrame;

//     const animate = () => {
//       const diff = targetProgress.current - progressRef.current;
//       progressRef.current += diff * 0.08; // smooth easing

//       // Animate logos
//       const baseOffsets = [
//         { x: -400, y: -300 },
//         { x: 400, y: -250 },
//         { x: -350, y: 350 },
//         { x: 350, y: 300 },
//       ];
//       const scale = window.innerWidth < 640 ? 0.5 : 1;

//       smallLogos.current.forEach((logo, index) => {
//         if (!logo) return;
//         const { x, y } = baseOffsets[index];
//         const minDistance = 120;
//         const translateX =
//           x * scale * (1 - progressRef.current) +
//           Math.sign(x) * minDistance * progressRef.current;
//         const translateY =
//           y * scale * (1 - progressRef.current) +
//           Math.sign(y) * minDistance * progressRef.current;
//         logo.style.transform = `translate(${translateX}px, ${translateY}px)`;
//       });

//       animationFrame = requestAnimationFrame(animate);
//     };

//     animate();
//     return () => cancelAnimationFrame(animationFrame);
//   }, []);

//   // Lock scroll when animation starts
//   useEffect(() => {
//     if (locked) document.body.style.overflow = "hidden";
//     else document.body.style.overflow = "";
//     return () => (document.body.style.overflow = "");
//   }, [locked]);

//   // Scroll detection & wheel handler
//   useEffect(() => {
//     const handleScroll = () => {
//       if (locked) return;

//       const reactEl = reactLogoRef.current;
//       if (!reactEl) return;

//       const rect = reactEl.getBoundingClientRect();
//       const center = window.innerHeight / 2;
//       const reactCenter = rect.top + rect.height / 2;

//       if (Math.abs(reactCenter - center) < 80) setLocked(true);
//     };

//     const handleWheel = (e) => {
//       if (!locked) return;
//       e.preventDefault();

//       targetProgress.current += e.deltaY * 0.002;
//       targetProgress.current = Math.max(0, Math.min(1, targetProgress.current));

//       if (targetProgress.current <= 0 || targetProgress.current >= 1) {
//         setLocked(false);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     window.addEventListener("wheel", handleWheel, { passive: false });

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//       window.removeEventListener("wheel", handleWheel);
//     };
//   }, [locked]);

//   return (
//     <div
//       ref={containerRef}
//       className="relative h-[200vh] flex justify-center items-center overflow-x-hidden"
//     >
//       {/* Background */}
//       <div
//         className="absolute top-0 left-0 w-full h-full -z-10 bg-cover bg-center filter blur-sm opacity-40"
//         style={{ backgroundImage: `url(${bgUniverse})` }}
//       />

//       {/* React logo */}
//       <img
//         ref={reactLogoRef}
//         src={reactLogo}
//         alt="React"
//         className="w-40 h-40 z-20"
//       />

//       {/* Small logos */}
//       {[jsLogo, htmlLogo, cssLogo, tailwindLogo].map((logo, idx) => (
//         <img
//           key={idx}
//           src={logo}
//           alt="logo"
//           ref={(el) => (smallLogos.current[idx] = el)}
//           className="w-16 h-16 absolute"
//         />
//       ))}
//     </div>
//   );
// };

// export default ScrollAnimation;