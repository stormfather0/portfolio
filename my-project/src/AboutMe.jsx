import React from 'react';
import photoProfile from './assets/profile.jpeg';
import bgCoding from './assets/background-coding.jpg';
import arrowDown from './assets/arrow-down.svg';

const AboutMe = () => {
  return (
    <section
    id="about"
    className="w-full relative text-white min-h-screen flex items-center py-20 px-6 md:px-12 lg:px-20"
  >
    {/* Background image */}
    <div
      className="absolute inset-0 -z-10 bg-cover bg-center filter blur-sm opacity-40"
      style={{ backgroundImage: `url(${bgCoding})` }}
    />
  
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 w-full">
      {/* Profile image */}
      <div className="w-40 h-40 md:w-64 md:h-64 flex-shrink-0 rounded-full overflow-hidden shadow-lg mt-12 md:mt-0">
        <img
          src={photoProfile}
          alt="Ivan Yatskovyna"
          className="w-full h-full object-cover"
        />
      </div>

        {/* Text content */}
        <div className="flex-1 text-center md:text-left bg-transparent backdrop-blur-sm rounded-2xl p-8 md:p-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">About Me</h2>
          <p className="text-xl font-bold text-gray-300 mb-4 leading-relaxed">
            Hi! I’m <span className="text-2xl text-blue-400 font-semibold">Ivan Yatskovyna</span>, a passionate Frontend Developer. I enjoy creating interactive, responsive, and user-friendly web applications that solve real-world problems.
          </p>
          <p className="text-gray-300 mb-6 leading-relaxed">
            I have experience in React, JavaScript, HTML, CSS, and modern frontend frameworks. I love learning new technologies, collaborating with teams, and turning ideas into functional websites and apps.
          </p>

          {/* Social media links */}
          <div className="flex flex-wrap gap-4 justify-center md:justify-start mt-4">
            <a
              href="#contact"
              className="bg-white text-black font-semibold px-6 py-2 rounded-2xl shadow-md hover:bg-gray-100 hover:shadow-lg transition-all duration-200"
            >
              Contact Me
            </a>

            {/* Facebook */}
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center bg-gray-900 rounded-full hover:bg-blue-400 transition-colors duration-200"
            >
              <svg
                width="39"
                height="39"
                viewBox="0 0 39 39"
                fill="white"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M19.2 0C8.596 0 0 8.59604 0 19.2001C0 29.8041 8.596 38.4002 19.2 38.4002C29.804 38.4002 38.4 29.8041 38.4 19.2001C38.4 8.59604 29.804 0 19.2 0ZM14.5 27.1581H10.612V14.6461H14.5V27.1581ZM12.532 13.1101C11.304 13.1101 10.51 12.2401 10.51 11.1641C10.51 10.066 11.328 9.22204 12.582 9.22204C13.836 9.22204 14.604 10.066 14.628 11.1641C14.628 12.2401 13.836 13.1101 12.532 13.1101ZM28.7 27.1581H24.812V20.2241C24.812 18.6101 24.248 17.5141 22.842 17.5141C21.768 17.5141 21.13 18.2561 20.848 18.9701C20.744 19.2241 20.718 19.5841 20.718 19.9421V27.1561H16.828V18.6361C16.828 17.0741 16.778 15.7681 16.726 14.6441H20.104L20.282 16.3821H20.36C20.872 15.5661 22.126 14.3621 24.224 14.3621C26.782 14.3621 28.7 16.0761 28.7 19.7601V27.1581Z" />
              </svg>
            </a>

            {/* Twitter */}
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center bg-gray-900 rounded-full hover:bg-blue-400 transition-colors duration-200"
            >
              <svg
                width="35"
                height="35"
                viewBox="0 0 35 35"
                fill="white"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M17.4844 0C7.82422 0 0 7.81641 0 17.4688C0 25.1016 4.89453 31.5899 11.7109 33.9727C12.6289 34.2032 12.4883 33.5508 12.4883 33.1055V30.0782C7.1875 30.6992 6.97266 27.1914 6.61719 26.6055C5.89844 25.3789 4.19922 25.0664 4.70703 24.4805C5.91406 23.8594 7.14453 24.6367 8.57031 26.7422C9.60156 28.2696 11.6133 28.0117 12.6328 27.7578C12.8555 26.8399 13.332 26.0196 13.9883 25.3828C8.49609 24.3985 6.20703 21.0469 6.20703 17.0625C6.20703 15.1289 6.84375 13.3516 8.09375 11.918C7.29688 9.5547 8.16797 7.53126 8.28516 7.23048C10.5547 7.02735 12.9141 8.85548 13.0977 9.00001C14.3867 8.65235 15.8594 8.46876 17.5078 8.46876C19.1641 8.46876 20.6406 8.66016 21.9414 9.01173C22.3828 8.67579 24.5703 7.10548 26.6797 7.29688C26.793 7.59766 27.6445 9.57423 26.8945 11.9063C28.1602 13.3438 28.8047 15.1367 28.8047 17.0742C28.8047 21.0664 26.5 24.4219 20.9922 25.3906C21.4639 25.8546 21.8385 26.4079 22.0941 27.0182C22.3496 27.6285 22.481 28.2837 22.4805 28.9453V33.3399C22.5117 33.6914 22.4805 34.0391 23.0664 34.0391C29.9844 31.7071 34.9648 25.1719 34.9648 17.4727C34.9648 7.81641 27.1367 0 17.4844 0Z" />
              </svg>
            </a>

        
          </div>
        </div>
        
      </div>

      <a
  href="#skills"
  className="hidden md:flex absolute bottom-5 left-1/2 transform -translate-x-1/2 items-center space-x-2 text-sm font-bold text-center text-white cursor-pointer animate-pulse border border-white/20 rounded-full py-2 px-4 hover:bg-white/10"
>
  <span>Skills</span>
  <img src={arrowDown} alt="Arrow down" className="w-4 h-4 animate-pulse" />
</a>
    </section>
  );
};

export default AboutMe;