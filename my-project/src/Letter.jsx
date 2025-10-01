import React from 'react';
import bgImage from './assets/letter-background.jpg'; 

const Letter = () => {
  return (
    <section
      className="relative w-full text-white min-h-[120vh] py-20 px-10 sm:px-6 md:px-10 lg:px-20 overflow-hidden"
      id="letter"
    >
      {/* Background image with blur */}
      <div
        className="absolute inset-0 -z-10 w-full h-full bg-cover bg-center filter blur-sm opacity-50"
        style={{ backgroundImage: `url(${bgImage})` }}
      />

      {/* Overlay for better readability */}
      <div className="absolute inset-0 -z-5 bg-black/30" />

      <div className="max-w-4xl mx-auto relative z-10">
   
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 px-2 leading-snug text-center md:text-left">
  A few more words
</h2>
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-8 p-2 leading-tight text-center md:text-left">
         {' '}
          <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-400 bg-clip-text text-transparent">
            I'm Ivan
          </span>{' '}
          — a passionate Frontend Developer from{' '}
          <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-yellow-400 bg-clip-text text-transparent font-semibold tracking-wide">
            Ukraine
          </span>{' '}
          dedicated to building engaging and efficient web experiences
        </h1>
     
        <p className="text-gray-300 mb-6 px-4 sm:mb-8 leading-relaxed text-base sm:text-lg md:text-xl text-justify md:text-left">
          I specialize in creating modern, responsive, and user-friendly web applications. With a strong focus on clean code and performance, I strive to deliver high-quality solutions that not only look great but also function seamlessly.
        </p>

        <p className="text-gray-300 mb-6 sm:mb-8 px-4 leading-relaxed text-base sm:text-lg md:text-xl text-justify md:text-left">
          Whether it's building interactive interfaces, optimizing user experiences, or collaborating on innovative projects, I am always eager to contribute my skills and grow as a developer. I love turning ideas into functional, beautiful web products.
        </p>

        <div className="flex flex-col justify-center items-center gap-4 bg-gray-900/70 backdrop-blur-sm rounded-2xl p-8">
          <p className="text-lg font-medium">Let's create something amazing together!</p>
          <a
  href="./assets/background-coding.jpg"   
  download
  className="bg-white text-black font-semibold px-6 py-2 rounded-2xl shadow-md hover:bg-gray-100 hover:shadow-lg transition-all duration-200 cursor-pointer inline-block"
>
  Download Resume
</a>
        </div>
      </div>
    </section>
  );
};

export default Letter;