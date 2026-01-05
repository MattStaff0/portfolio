import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Experience from "./components/Experience";
import "./App.css";

function App() {
  return (
    <>
      <div className="w-full min-h-screen flex flex-col items-center bg-gray-900">
        {/* this is where our navbar component will go */}
        <div className="w-full px-10 py-10">
          <Navbar />
        </div>
        <div className="w-[60%] flex flex-col items-center">
          {/* want to make the hero setction here! */}
          <Hero />
          <Experience></Experience>
        </div>
      </div>
    </>
  );
}

export default App;
