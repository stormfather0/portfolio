import React, { useEffect } from "react";
import telegramImg from "./assets/telegram.png";
import emailImg from "./assets/email.png";
import viberImg from "./assets/viber-1.webp";
import whatsappImg from "./assets/whatsapp.png";
import dowloadIcon from "./assets/download.svg";
import phoneIcon from "./assets/phone-icon.png";

const PopUpMenu = ({ contactMenuOpen, setContactMenuOpen }) => {
  // Disable body scroll when popup is open
  useEffect(() => {
    if (contactMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [contactMenuOpen]);

  if (!contactMenuOpen) return null;

  const handleClick = (link) => {
    window.open(link, "_blank");
  };

  const icons = [
    { src: telegramImg, alt: "Telegram", link: "https://t.me/YourTelegramUsername" },
    { src: whatsappImg, alt: "WhatsApp", link: "https://wa.me/380999999999" },
    { src: viberImg, alt: "Viber", link: "viber://chat?number=%2B380999999999" },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Popup */}
      <div
  className="relative bg-gray-300/40 backdrop-blur-md rounded-2xl shadow-2xl w-full max-w-3xl
             p-6 sm:overflow-hidden overflow-auto max-h-[90vh]"
>
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition font-bold text-xl cursor-pointer"
          onClick={() => setContactMenuOpen(false)}
        >
          ×
        </button>

        {/* Header */}
        <h2 className="text-3xl font-bold mb-2 text-white text-center">Contact Me</h2>
        <p className="text-white text-center mb-6">I'd love to hear from you — feel free to reach out!</p>

        {/* Phone Section */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 bg-blue-50/80 rounded-2xl p-4 sm:p-6 mb-6">
          <img src={phoneIcon} alt="Phone" className="w-12 h-12" />
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
            <p className="text-lg font-semibold text-gray-800">+380 99 999 9999</p>
            <p className="text-sm text-gray-600">Call me at your earliest convenience</p>
          </div>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Messaging Apps */}
          <div className="flex flex-col bg-blue-50/80 rounded-2xl p-6 shadow-md hover:shadow-lg transition gap-2">
  {icons.map((icon, i) => (
    <React.Fragment key={i}>
      <button
        onClick={() => handleClick(icon.link)}
        className="flex items-center w-full p-3 gap-4 cursor-pointer hover:bg-white/30 transition rounded-xl"
      >
        <div
          className={`flex-shrink-0 w-16 h-16 flex items-center justify-center bg-white/10 rounded-full ${
            icon.alt === "Viber" ? "scale-90" : ""
          }`}
        >
          <img src={icon.src} alt={icon.alt} className="max-w-full max-h-full object-contain" />
        </div>

        <div className="flex flex-col items-start">
          <p className="text-gray-800 font-semibold text-lg">+380 99 999 9999</p>
          <p className="text-gray-500 text-sm">Click to chat</p>
        </div>
      </button>

      {/* Divider goes OUTSIDE the button */}
      {i < icons.length - 1 && (
  <div className="h-[1px] w-full bg-gradient-to-r from-blue-300  to-violet-300 my-1"></div>
)}
    </React.Fragment>
  ))}
</div>

          {/* Email */}
          <div className="flex flex-col justify-center items-center bg-blue-50/80 rounded-2xl p-6 shadow-md hover:shadow-lg transition gap-4">
            <button
              onClick={() => handleClick("mailto:XqIeI@example.com")}
              className="flex items-center justify-center w-20 h-20 rounded-xl mb-4 transition transform hover:scale-105 bg-white/20"
            >
              <img src={emailImg} alt="Email" className="w-12 h-12 object-contain" />
            </button>
            <p className="text-gray-800 font-semibold text-lg">Email</p>
            <p className="text-gray-600 text-sm break-words">test@example.com</p>
            <p
              className="text-sm text-blue-600 font-medium mt-2 cursor-pointer hover:underline"
              onClick={() => handleClick("mailto:XqIeI@example.com")}
            >
              Write me now →
            </p>
          </div>
        </div>

        {/* Download Resume */}
        <div className="mt-6 flex items-center justify-center">
          <a
            href="./assets/background-coding.jpg"
            download
            className="flex items-center gap-2 bg-blue-600 text-white font-semibold px-6 py-2 rounded-2xl shadow-md hover:bg-blue-700 hover:shadow-lg transition-all duration-200 cursor-pointer"
          >
            <img src={dowloadIcon} alt="Download Icon" className="w-6 h-6" />
            Download Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default PopUpMenu;