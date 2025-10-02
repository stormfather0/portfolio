import React from "react";
import telegramLogo from "./assets/social-svg-icons/telegram-icon.svg";
import whatsAppLogo from "./assets/social-svg-icons/whatsapp-icon.svg";
import viberLogo from "./assets/social-svg-icons/viber-icon.svg";

const Footer = () => {
  return (
    <footer className="relative  bg-blue-950/30 text-white py-8 px-6 shadow-inner border-t border-gray-700/40">
      <div className="max-w-5xl mx-auto flex flex-col items-center gap-6">
        
        {/* Title */}
        <p className="text-xl font-semibold text-center tracking-wide">
          Contact Me
        </p>

        {/* Phone */}
        <p className="text-lg font-bold text-blue-300 drop-shadow-md">
          +380 99 999 9999
        </p>

        {/* Social Icons */}
        <div className="flex gap-6">
          <a
            href="https://t.me/YourTelegramUsername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform"
          >
            <img
              src={telegramLogo}
              alt="Telegram"
              className="w-8 h-8 filter hover:brightness-125 hover:drop-shadow-[0_0_10px_rgba(59,130,246,0.8)] transition duration-300"
            />
          </a>
          <a
            href="https://wa.me/380999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform"
          >
            <img
              src={whatsAppLogo}
              alt="WhatsApp"
              className="w-8 h-8 filter hover:brightness-125 hover:drop-shadow-[0_0_10px_rgba(16,185,129,0.8)] transition duration-300"
            />
          </a>
          <a
            href="viber://chat?number=%2B380999999999"
            className="hover:scale-110 transition-transform"
          >
            <img
              src={viberLogo}
              alt="Viber"
              className="w-8 h-8 filter hover:brightness-125 hover:drop-shadow-[0_0_10px_rgba(167,139,250,0.8)] transition duration-300"
            />
          </a>
        </div>

        {/* Extra Info */}
        <div className="text-center space-y-1">
          <p className="text-gray-300">
            Telegram: <span className="font-medium">@IvanYatskovyna</span>
          </p>
          <p className="text-gray-300">
            Email:{" "}
            <a
              href="mailto:test@example.com"
              className="hover:underline text-blue-200"
            >
              test@example.com
            </a>
          </p>
        </div>

        {/* Copyright */}
        <p className="text-sm tracking-wide text-gray-400/90 pt-4 border-t border-gray-700/40 w-full text-center">
          &copy; 2025 <span className="font-semibold">Ivan Yatskovyna</span>. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;