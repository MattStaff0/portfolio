import { useState } from "react";
import funny from "../assets/IMG_0797.jpg";
import real from "../assets/real.jpg";

export default function ProfileImage() {
  const [isHovered, setIsHovered] = useState(false);

  // 1. STYLES
  // When Hovered (True): "Funny" is Front, "Real" is Back
  // When Normal (False): "Real" is Front, "Funny" is Back

  const frontClasses = "z-20 scale-100 rotate-0 opacity-100";
  const backClasses = "z-10 scale-95 rotate-6 opacity-60";

  return (
    <div
      className="relative w-64 h-80 md:w-80 md:h-96 group cursor-pointer perspective-1000"
      // 2. THE TRIGGERS
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      // Optional: Keep onClick for mobile users so they can tap to see it
      onClick={() => setIsHovered(!isHovered)}
    >
      {/* PHOTO 1: THE FUNNY ONE (Hidden by default) */}
      <div
        className={`absolute inset-0 rounded-2xl shadow-2xl transition-all duration-500 ease-in-out border-4 border-gray-800
          ${isHovered ? frontClasses : backClasses}
        `}
      >
        <img
          src={funny}
          alt="Funny"
          className={`w-full h-full object-cover rounded-xl ${
            !isHovered ? "grayscale" : ""
          }`}
        />
      </div>

      {/* PHOTO 2: THE REAL ONE (Visible by default) */}
      <div
        className={`absolute inset-0 rounded-2xl shadow-2xl transition-all duration-500 ease-in-out border-4 border-gray-800 bg-gray-900
          ${isHovered ? backClasses : frontClasses}
        `}
      >
        <img
          src={real}
          alt="Real"
          className={`w-full h-full object-cover rounded-xl ${
            isHovered ? "grayscale" : ""
          }`}
        />
      </div>
    </div>
  );
}
