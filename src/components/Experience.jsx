import { useState } from "react";
import Work from "./Work";

export default function Experience() {
  const [activeTab, setActiveTab] = useState("work");

  return (
    <div className="w-full max-w-5xl mt-20 px-4">
      <div className="flex w-full bg-gray-800 p-1 rounded-xl mb-8">
        <button
          onClick={() => setActiveTab("work")}
          className={`w-1/2 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
            activeTab === "work"
              ? "bg-gray-600 text-white shadow-sm" // Active
              : "text-gray-400 hover:text-white" // Inactive
          }`}
        >
          Work Experience
        </button>

        <button
          onClick={() => setActiveTab("education")}
          className={`w-1/2 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
            activeTab === "education"
              ? "bg-gray-600 text-white shadow-sm"
              : "text-gray-400 hover:text-white"
          }`}
        >
          Education
        </button>
      </div>

      {/* Content Area */}
      <div className="text-gray-300 text-center w-full">
        {activeTab === "work" ? <Work /> : "Education Component Goes Here"}
      </div>
    </div>
  );
}
