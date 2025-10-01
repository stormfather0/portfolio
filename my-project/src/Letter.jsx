import React from 'react';
import bgImage from './assets/letter-background.jpg'; 

const Letter = () => {
  return (
    <section className="relative w-full text-white min-h-[120vh] py-20 px-4 sm:px-6 md:px-10 lg:px-20 overflow-hidden"
    id='letter'>
      
      {/* Background image with blur */}
      <div
        className="absolute inset-0 -z-10 w-full h-full bg-cover bg-center filter blur-sm opacity-50"
        style={{ backgroundImage: `url(${bgImage})` }}
      />
      
      {/* Optional overlay for better readability */}
      <div className="absolute inset-0 -z-5 bg-black/30" />

      <div className="max-w-4xl mx-auto relative z-10">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight text-center md:text-left">
          Hello,{' '}
          <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-400 bg-clip-text text-transparent">
            I'm Ivan
          </span>{' '}
          — a Frontend Developer from{' '}
          <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-yellow-400 bg-clip-text text-transparent font-semibold tracking-wide">
            Ukraine
          </span>{' '}
          looking for opportunities
        </h1>

        <p className="text-gray-300 mb-6 sm:mb-8 leading-relaxed text-base sm:text-lg md:text-xl text-justify md:text-left">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad provident vitae nemo exercitationem nobis fugiat voluptatibus qui vel dolores reiciendis. Sed officiis esse repudiandae. Aspernatur facere nostrum accusamus exercitationem doloribus.
        </p>

        <p className="text-gray-300 mb-6 sm:mb-8 leading-relaxed text-base sm:text-lg md:text-xl text-justify md:text-left">
          Assumenda aliquam sunt earum, perspiciatis aspernatur non pariatur soluta minus, illo, eos illum iure quasi laudantium in sit nesciunt fuga repellendus. Dolore, architecto id consequatur ipsam harum placeat maiores obcaecati.
        </p>

        {/* Add more paragraphs as needed */}
      </div>
    </section>
  );
};

export default Letter;