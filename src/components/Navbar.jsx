import { LuSquareTerminal, LuMail } from "react-icons/lu";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className="w-full flex justify-between items-center">
      <div className="font-bold  text-gray-400 text-xl tracking-tigher">
        <LuSquareTerminal className="w-8 h-8 hover:text-white transition-colors" />
      </div>

      <div className="flex gap-4">
        {/* wrap these in a tags use href attr to make a link and use target _blank */}
        <a
          href="https://github.com/MattStaff0?tab=overview&from=2026-01-01&to=2026-01-03"
          target="_blank"
        >
          <FaGithub className="w-5 h-5 text-gray-400 hover:text-white" />
        </a>

        <a
          href="https://www.linkedin.com/in/matthew-stafford-992170250/"
          target="_blank"
        >
          <FaLinkedin className="w-5 h-5 text-gray-400 hover:text-white" />
        </a>

        <a href="mailto:mstafford135@gmail.com">
          <LuMail className="w-5 h-5 text-gray-400 hover:text-white" />
        </a>
      </div>
    </nav>
  );
}
