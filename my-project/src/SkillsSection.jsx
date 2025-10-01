// import React from 'react';
// import reactLogo from './assets/react-logo-1.svg';
// import jsLogo from './assets/js.png';
// import htmlLogo from './assets/html.png';
// import cssLogo from './assets/css-logo.svg';
// import tailwindLogo from './assets/tailwind.svg';
// import scssLogo from './assets/scss.svg';
// import tsLogo from './assets/TS.avif';
// import gitHubLogo from './assets/github.svg';

// const skills = [
//   { name: 'React', icon: reactLogo },
//   { name: 'JavaScript', icon: jsLogo },
//   { name: 'HTML', icon: htmlLogo },
//   { name: 'CSS', icon: cssLogo },
//   { name: 'SCSS', icon: scssLogo },
//   { name: 'Tailwind', icon: tailwindLogo },
//   { name: 'TypeScript', icon: tsLogo },
//   { name: 'Git', icon: gitHubLogo },
// ];

// const otherSkills = [
//   { name: 'API Calls', icon: jsLogo },
//   { name: 'Responsive Design', icon: htmlLogo },
//   { name: 'Git / GitHub', icon: jsLogo },
//   { name: 'Testing', icon: cssLogo },
//   { name: 'Performance Optimization', icon: tailwindLogo },
// ];

// const SkillsSection = () => {
//   return (
//     <section className="w-full flex flex-col text-white bg-gray-900 px-6 sm:px-12 lg:px-20 py-16 md:py-20 lg:py-24">
      
//       {/* Main Skills */}
//       <div className="w-full mb-16">
//         <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">My Skills</h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
//           {skills.map((skill, idx) => (
//             <div
//               key={idx}
//               className="flex flex-col items-center justify-start rounded-3xl p-6 bg-gray-800/30 shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-300 cursor-pointer"
//             >
//               <div className="flex items-center justify-center w-20 h-20 mb-4 rounded-full bg-gray-700/40">
//                 <img src={skill.icon} alt={skill.name} className="w-12 h-12 object-contain" />
//               </div>
//               <span className="text-lg md:text-xl font-semibold">{skill.name}</span>
//               <p className="mt-2 text-gray-300 text-sm md:text-base text-center">
//                 Lorem ipsum dolor sit amet.
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Other Frontend Skills */}
//       <div className="w-full mb-16">
//         <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Other Frontend Skills</h2>
//         <div className="flex flex-wrap justify-center gap-6">
//           {otherSkills.map((skill, idx) => (
//             <div
//               key={idx}
//               className="flex flex-col items-center justify-start rounded-2xl p-4 bg-gray-700/30 w-36 h-36 md:w-40 md:h-40 hover:scale-105 hover:shadow-xl transition-all duration-300 cursor-pointer"
//             >
//               <div className="flex items-center justify-center w-16 h-16 mb-3 rounded-full bg-gray-600/40">
//                 <img src={skill.icon} alt={skill.name} className="w-10 h-10 md:w-12 md:h-12 object-contain" />
//               </div>
//               <span className="text-md md:text-lg font-semibold">{skill.name}</span>
//               <p className="mt-1 text-gray-300 text-xs md:text-sm text-center">
//                 Lorem ipsum
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default SkillsSection;