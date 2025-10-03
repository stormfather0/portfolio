import React, { useRef,useEffect } from 'react';
import AOS from 'aos';

import NetflixImg from './assets/netflix.jpg';
import './index.css';

const Landings = () => {
  useEffect(() => {

    //animation on scroll
    AOS.init({
      duration: 1000, 
      once: true,     
    });
  }, []);
  const colors = ["bg-red-100", "bg-blue-100", "bg-red-100", "bg-blue-100"];

  const cards = [
    { id: 1, title: "Netflix", desc: "Popular movies and TV shows.", img: NetflixImg, link: "https://stormfather0.github.io/my-netflix-app/" },
    { id: 2, title: "Traveling App", desc: "Keep an eye on your progress every day.", img: NetflixImg },
    { id: 3, title: "Yoga Assistant", desc: "Improve flexibility with guided yoga.", img: NetflixImg },
    { id: 4, title: "Yoga Assistant", desc: "Improve flexibility with guided yoga.", img: NetflixImg },
  ];

  const sliderRef = useRef(null);

  const scrollLeft = () => {
    if (sliderRef.current) {
      const cardWidth = sliderRef.current.querySelector("li")?.offsetWidth || 300;
      sliderRef.current.scrollBy({ left: -cardWidth - 24, behavior: "smooth" }); 
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      const cardWidth = sliderRef.current.querySelector("li")?.offsetWidth || 300;
      sliderRef.current.scrollBy({ left: cardWidth + 24, behavior: "smooth" });
    }
  };

  return (
  
<div
  id="projects"
  className="flex flex-col items-center justify-center px-4 md:ml-20 lg:ml-30 mb-10 mt-30 scroll-mt-30"
>
        
      <p className="text-white text-5xl text-center mb-10" data-aos="slide-left">
      Selected landing pages and apps
      </p>

      <div
        ref={sliderRef}
        className="w-full overflow-x-auto hide-scrollbar py-4 scroll-smooth"
      >
        <ul className="flex gap-6 pl-[30px] items-stretch pb-8" data-aos="slide-up">
          {cards.map((card) => (
            <a href={card.link} key={card.id}>
              <li
                className={`flex flex-col justify-between ${colors[card.id % colors.length]} text-black text-2xl w-80 min-h-[380px] rounded-2xl flex-shrink-0 
                  shadow-md hover:shadow-xl transform transition-transform duration-500 ease-in-out origin-center hover:scale-105 hover:z-20
                  cursor-pointer`}
              >
                <div className="h-1/4">
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
      <div className="flex justify-end gap-2 w-full pr-10">
        <button
          onClick={scrollLeft}
          className="bg-white text-black px-3 py-2 rounded-full shadow-md hover:bg-gray-200 transition cursor-pointer"
        >
          ←
        </button>
        <button
          onClick={scrollRight}
          className="bg-white text-black px-3 py-2 rounded-full shadow-md hover:bg-gray-200 transition cursor-pointer"
        >
          →
        </button>
      </div>
    </div>
   
  );
};

export default Landings;