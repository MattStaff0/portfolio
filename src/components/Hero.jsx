import ProfileImage from "./ProfileImage";

export default function Hero() {
  return (
    <div className="text-gray-300 flex flex-row">
      {/* this is where our text goes will be flex direction of row -> text | photo */}
      <div className="pt-30">
        <h1 className="text-3xl">Hey! I'm Matthew Stafford. 👋</h1>
        <div className="text-xl pt-3 pl-3">
          <h3>21 years old based in Fort Worth, Texas. 📍</h3>
          <h3>
            Currently working as a Data Engineer Intern, but passionate about
            full stack development.
          </h3>
        </div>
      </div>
      {/* our photo goes here */}
      <div>
        <ProfileImage />
      </div>
    </div>
  );
}
