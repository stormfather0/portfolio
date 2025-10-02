import React from "react";
import telegramLogo from "./assets/social-svg-icons/telegram-icon.svg";
import whatsAppLogo from "./assets/social-svg-icons/whatsapp-icon.svg";
import viberLogo from "./assets/social-svg-icons/viber-icon.svg";

const Footer = () => {
  return (
    <footer className="relative bg-blue-950/30 backdrop-blur-md text-white py-12 px-6 border-t border-gray-700/40">
      <div className="max-w-5xl mx-auto flex flex-col items-center gap-8">
        
        {/* Title */}
        <h2 className="text-2xl sm:text-3xl font-bold tracking-wide text-center">
          Get in Touch
        </h2>

        {/* Phone */}
        <a
      
          className="text-lg sm:text-xl font-bold bg-gradient-to-r from-blue-600/30 to-blue-700/30 px-6 py-2 rounded-xl"
        >
          +380 73 156 5055
        </a>

        {/* Social Icons */}
        <div className="flex gap-8 mt-4">
          {[{
            href: "https://t.me/IvanYatskovyna",
            icon: telegramLogo,
            alt: "Telegram",
            shadow: "0_0_15px_rgba(59,130,246,0.7)"
          },{
            href: "https://wa.me/380731565055",
            icon: whatsAppLogo,
            alt: "WhatsApp",
            shadow: "0_0_15px_rgba(16,185,129,0.7)"
          },{
            href: "viber://chat?number=%2B3809731565055",
            icon: viberLogo,
            alt: "Viber",
            shadow: "0_0_15px_rgba(167,139,250,0.7)"
          }].map(({ href, icon, alt, shadow }, idx) => (
            <a
              key={idx}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform"
            >
              <img
                src={icon}
                alt={alt}
                className={`w-10 h-10 filter hover:brightness-125 hover:drop-shadow-[${shadow}] transition duration-300`}
              />
            </a>
          ))}
        </div>

        {/* Extra Info */}
        <div className="text-center space-y-1 mt-4">
          <p className="text-gray-300">
            Telegram: <span className="font-medium">@IvanYatskovyna</span>
          </p>
          <p className="text-gray-300">
            Email:{" "}
            <a
              href="mailto:ivan.yatskovyna@example.com"
              className="hover:underline text-blue-300 font-medium"
            >
              ivan.yatskovyna@gmail.com
            </a>
          </p>
        </div>

        {/* Copyright */}
        <p className="text-sm text-gray-400/90 pt-6 border-t border-gray-700/40 w-full text-center">
          &copy; 2025 <span className="font-semibold">Ivan Yatskovyna</span>. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;