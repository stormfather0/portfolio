import React from 'react';
import AOS from 'aos';
import { useEffect } from 'react';


import skillsBg from './assets/skills-background-3.jpg';
import reactLogo from './assets/react-logo-1.svg';
import jsLogo from './assets/js.png';
import htmlLogo from './assets/html.png';
import cssLogo from './assets/css-logo.svg';
import tailwindLogo from './assets/tailwind.svg';
import scssLogo from './assets/scss.svg';
import tsLogo from './assets/TS.avif';
import gitHubLogo from './assets/github.svg';


const skills = [
  { name: 'React', icon: reactLogo },
  { name: 'JavaScript', icon: jsLogo },
  { name: 'HTML', icon: htmlLogo },
  { name: 'CSS', icon: cssLogo },
  { name: 'SCSS', icon: scssLogo },
  { name: 'Tailwind', icon: tailwindLogo },
  { name: 'TypeScript', icon: tsLogo },
  { name: 'Git', icon: gitHubLogo },
];

const otherSkills = [
  { name: 'API Calls', icon: jsLogo },
  { name: 'Responsive Design', icon: htmlLogo },
  { name: 'Git / GitHub', icon: jsLogo },
  { name: 'Testing', icon: cssLogo },

];

const Skills = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: true,     
    });
  }, []);

  return (
    <section id="skills" className="relative w-full flex flex-col text-white py-20 px-6 sm:px-12 lg:px-20">

      {/* Blurred Background */}
      <div
        className="absolute inset-0 -z-10 bg-cover bg-center filter blur-sm opacity-60"
        style={{ backgroundImage: `url(${skillsBg})` }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col mt-10">

        {/* Main Skills */}
        <h2 className="text-4xl font-bold text-center mb-12" >My Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-4 gap-4 "data-aos='slide-up'>
          {skills.map((skill, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center justify-center rounded-3xl p-6 bg-gray-800/30 shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-300 cursor-pointer"
            >
              <div className="flex items-center justify-center w-20 h-20 mb-4 rounded-full bg-gray-700/40">
                <img src={skill.icon} alt={skill.name} className="w-12 h-12 object-contain" />
              </div>
              <span className="text-lg font-semibold">{skill.name}</span>
              <p className="mt-2 text-gray-300 text-sm text-center">
                Lorem ipsum dolor sit amet.
              </p>
            </div>
          ))}
        </div>

     


{/* Other  Skills */}
<div className="mt-20 flex flex-col items-center "data-aos='slide-up'>
  <h2 className="text-3xl font-bold text-center mb-8">Other Skills</h2>

  <div className="flex flex-wrap justify-center gap-6 max-w-[960px] mx-auto">
    {otherSkills.map((skill, idx) => (
      <div
        key={idx}
        className="flex flex-col items-center justify-start rounded-2xl p-6 bg-white/10 w-[45%] sm:w-[30%] md:w-[22%] lg:w-48 h-52 hover:scale-105 hover:shadow-xl transition-all duration-300 cursor-pointer"
      >
        {/* Circular container for icon */}
        <div className="flex items-center justify-center w-28 h-28 mb-2 rounded-full bg-white/20 p-2">
          <img
            src={skill.icon}
            alt={skill.name}
            className="w-full h-full object-contain scale-80"
          />
        </div>

        {/* Fixed height container for text */}
        <div className="flex flex-col items-center justify-center h-20">
          <span className="text-md font-semibold text-center">{skill.name}</span>
        
        </div>
      </div>
    ))}
  </div>
</div>

<div className="bg-white/20 flex justify-center items-center m-0 mt-5 p-2 w-[88%] rounded-md mx-auto hover:scale-105 hover:shadow-xl transition-all duration-300   " >

  <p className="text-md px-2 py-1 font-semibold" aos-data='slide up'>English - Advanced C1 </p>
</div>
      </div>
    </section>
  );
};

export default Skills;