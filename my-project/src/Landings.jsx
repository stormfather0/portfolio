import React, { useRef } from 'react';
import Placeholder from './assets/placeholder.jpg';
import './index.css';
// import {Link } from 'react-router-dom';

import NetflixImg from './assets/netflix.jpg';


const Landings = () => {
    const colors = ["bg-white", "bg-blue-100", "bg-green-100", "bg-purple-100"];
    
    const cards = [
        { id: 1, title: "Netflix", desc: "Popular movies and TV shows.", img: NetflixImg, link: "https://stormfather0.github.io/my-netflix-app/" },
        { id: 2, title: "Fitness Tracking", desc: "Keep an eye on your progress every day.", img: NetflixImg },
        { id: 3, title: "Yoga Assistant", desc: "Improve flexibility with guided yoga .", img: NetflixImg },
        { id: 4, title: "Yoga Assistant", desc: "Improve flexibility with guided yoga .", img: NetflixImg },

      ];
  const sliderRef = useRef(null);

  const smoothScroll = (distance) => {
    const slider = sliderRef.current;
    if (!slider) return;

    let start = slider.scrollLeft;
    const target = start + distance;
    const duration = 500; // total scroll duration in ms
    const startTime = performance.now();

    const animate = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      slider.scrollLeft = start + (distance * easeInOutQuad(progress));
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  };

  const easeInOutQuad = (t) => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t);

  const scrollLeft = () => smoothScroll(-300);
  const scrollRight = () => smoothScroll(300);

  return (
<div className="flex flex-col items-center justify-center px-4 md:ml-20 lg:ml-30 mb-10 mt-10">
      <p className="text-white text-5xl text-center mb-10">
        Landings pages designed for small projects
      </p>

      <div
  ref={sliderRef}
  className="w-full overflow-x-auto hide-scrollbar py-4"
>
  <ul className="flex gap-6 pl-[30px] items-stretch pb-8">
    {cards.map((card) => (
        <a href={card.link}>
   <li
  key={card.id}
  className={`flex flex-col justify-between ${colors[card.id % colors.length]} text-black text-2xl w-80 min-h-[380px] rounded-2xl flex-shrink-0 
             shadow-md hover:shadow-xl transform transition-transform duration-500 ease-in-out origin-center hover:scale-105 hover:z-20
             cursor-pointer`}
>
        <div className='h-1/4'>
          <p className="text-sm pt-5 pb-2 px-3 font-bold">{card.title}</p>
          <h1 className="text-3xl font-semibold px-3 pb-2">{card.desc}</h1>
        </div>
        <div className="flex justify-center">
          <img src={card.img} alt={card.title} className="w-full block" />
        </div>
      </li>
     </a>
    ))}
  </ul>
</div>
      {/* Navigation Buttons */}
      <div className="flex justify-end gap-2   w-full pr-10">
  <button
    onClick={scrollLeft}
    className="bg-white text-black px-3 py-2 rounded-full shadow-md hover:bg-gray-200 transition"
  >
    ←
  </button>
  <button
    onClick={scrollRight}
    className="bg-white text-black px-3 py-2 rounded-full shadow-md hover:bg-gray-200 transition"
  >
    →
  </button>
</div>
    </div>
  );
};

export default Landings;