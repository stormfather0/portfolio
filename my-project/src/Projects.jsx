
import React from "react";
import projectImg1 from "./assets/rozetka-project-2.jpg";
import projectImg2 from "./assets/project2.jpg";
import projectImg3 from "./assets/project3.jpg";
import bgProjects from "./assets/background-projects.jpg";
import reactLogo from "./assets/react.svg";
import tailwindLogo from "./assets/tailwind.svg";
import jsLogo from "./assets/js.png";
import cssLogo from "./assets/css-logo.svg";


const projects = [
  {
    id: 1,
    title: "Rozetka-Inspired E-commerce Platform",
    description: "Developed a marketplace app inspired by Rozetka, featuring product browsing, search, and API integration for dynamic data.",
    image: projectImg1,
    link: "#",
    technologies: ["React", "Tailwind CSS"],
  },
  {
    id: 2,
    title: "Rozetka-Inspired E-commerce Platform",
    description: "Developed a marketplace app inspired by Rozetka, featuring product browsing, search, and API integration for dynamic data.",
    image: projectImg1,
    link: "#",
    technologies: ["JavaScript", "CSS"],
  },
  // {
  //   id: 3,
  //   title: "Social Media Dashboard",
  //   description: "A responsive dashboard with analytics and user interactions.",
  //   image: projectImg3,
  //   link: "#",
  //   technologies: ["React", "Tailwind CSS"],
  // },
];

const techLogos = {
  React: reactLogo,
  "Tailwind CSS": tailwindLogo,
  "JavaScript": jsLogo,
  "CSS": cssLogo,
};

const Projects = () => {
  return (
    <section
  
      className="relative flex flex-col w-full text-white  px-4 sm:px-6 md:px-10 lg:px-20 min-h-[1800px] sm:min-h-[calc(100vh+150px)] md:min-h-[calc(100vh+400px)] overflow-hidden"
    >
      {/* Background */}

{/* Background image with general blur */}
<div
  className="absolute inset-0 w-full h-full bg-cover bg-center filter blur-sm brightness-90 -z-10"
  style={{ backgroundImage: `url(${bgProjects})` }}
/>

{/* Gradient overlay for smooth transition from black at top */}
<div className="absolute inset-0 w-full h-full -z-5 bg-gradient-to-b from-black/70 via-black/30 to-transparent" />

{/* Extra top blur overlay */}
<div className="absolute top-0 left-0 w-full h-1/3 -z-5 backdrop-blur-2lg bg-black/20" />

      {/* Section Header */}
      <div className="max-w-5xl mx-auto text-center mb-12 px-4 sm:px-8 md:px-12 ">
      <p className="text-white text-5xl text-center mb-10">
      Marketplace Apps with API calls 
      </p>
      </div>

      {/* Projects */}
      <div className="flex flex-col gap-8 max-w-6xl mx-auto">
        {projects.map((project) => (
          <a
            key={project.id}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col md:flex-row rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 bg-gray-800/50 backdrop-blur-sm"
          >
        {/* Project Image */}
        <div className="rounded-2xl overflow-hidden w-full md:w-1/3">
  <img
    src={project.image}
    alt={project.title}
    className="w-full h-48 sm:h-56 md:h-64 lg:h-auto object-cover object-top-left"
  />
</div>

            {/* Content */}
            <div className="flex-1 p-4 sm:p-6 md:p-8 flex flex-col justify-center">
              <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-2">
                {project.title}
              </h3>
              <p className="text-gray-300 mb-4 text-sm sm:text-base md:text-lg">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-4">
                {project.technologies.map((tech, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-1 sm:gap-2 bg-gray-700/30 text-gray-200 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm"
                  >
                    {techLogos[tech] && (
                      <img
                        src={techLogos[tech]}
                        alt={tech}
                        className="w-4 h-4 sm:w-5 sm:h-5"
                      />
                    )}
                    <span>{tech}</span>
                  </div>
                ))}
              </div>

              {/* Buttons */}
{/* Buttons */}
<div className="flex flex-wrap items-center gap-3 mt-4">
  {/* View Project Button */}
  <a
    href="#"
    className="flex items-center justify-center bg-blue-500 text-white px-5 h-12 rounded-xl font-semibold shadow-md hover:bg-blue-600 hover:shadow-lg transition-all duration-300 text-sm sm:text-base"
  >
    View Project
  </a>

  {/* Source Code Button */}
  <a
    href="https://github.com"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-600 rounded-xl px-5 h-12 shadow-md hover:shadow-lg transition-all duration-300"
  >
    <span className="text-white font-semibold text-sm sm:text-base">
      Source Code
    </span>
    <div className="w-6 h-6 flex items-center justify-center bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full shadow-md hover:scale-110 hover:shadow-lg transition-transform duration-300">
      <svg
        className="w-3 h-3 sm:w-4 sm:h-4 text-white"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M12 2A10 10 0 002 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.12-1.47-1.12-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.88 1.5 2.31 1.07 2.87.82.09-.65.35-1.07.63-1.32-2.22-.25-4.55-1.11-4.55-4.92 0-1.08.39-1.96 1.03-2.65-.1-.25-.45-1.25.1-2.61 0 0 .84-.27 2.75 1.02A9.56 9.56 0 0112 6.8c.85 0 1.71.11 2.51.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.36.2 2.36.1 2.61.64.69 1.03 1.57 1.03 2.65 0 3.82-2.33 4.67-4.56 4.92.36.31.68.93.68 1.88v2.79c0 .27.16.58.67.5A10 10 0 0022 12 10 10 0 0012 2z" />
      </svg>
    </div>
  </a>
</div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Projects;
