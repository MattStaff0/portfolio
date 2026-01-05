import ProfileImage from "./ProfileImage";
import resume from "../assets/resume/resume.pdf";
import { LuFileUser } from "react-icons/lu";

export default function Hero() {
  return (
    <div className="text-gray-300 flex flex-row">
      {/* this is where our text goes will be flex direction of row -> text | photo */}
      <div className="pt-30">
        <h1 className="text-5xl">Hey! I'm Matthew Stafford. 👋</h1>
        <div className="text-2xl pt-3 pl-3">
          <h3>21 years old based in Fort Worth, Texas. 📍</h3>
          <h3>
            Currently working as a Data Engineer Intern, but passionate about
            full stack development.
          </h3>

          <a
            href={resume}
            download="Matthew_Stafford_Resume.pdf"
            className="mt-12 w-fit flex items-center gap-2 border border-gray-500 rounded-lg px-5 py-3 hover:bg-gray-800 hover:text-white transition-all duration-300"
          >
            <LuFileUser className="w-7 h-7" />
            <span>Download My Resume</span>
          </a>
        </div>
      </div>
      {/* our photo goes here */}
      <div>
        <ProfileImage />
      </div>
    </div>
  );
}
