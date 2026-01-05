import tcu from "../assets/logo/tcu.png";

const tcuDetails = [
  "Cumulative GPA: 3.69 / 4.0 • Dean's List (Multiple Semesters)",
  "Relevant Coursework: Cloud Computing, Database Systems, Computer Networks, Analysis of Algorithms, Artificial Intelligence, and Python for Data Analytics. ",
  "Mathematics Coursework: Linear Algebra, Statistics, Calculus I & II, Discrete Mathematics.",
];

export default function Education() {
  return (
    <div className="w-full border-solid border-gray-400 border flex flex-col justify-center items-center text-gray-400">
      {/* Going to be the main div since we want similar look to the work experience */}
      <div className="w-full px-8 py-4 flex flex-row">
        <div className="w-14 h-14 shrink-0 bg-gray-900 border-4 border-gray-900 rounded-full flex items-start justify-center overflow-hidden">
          <img
            src={tcu}
            alt="TCU School Icon Photo"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Details section -> date attend + class, School name, Major, Minor */}
        <div className="ml-4">
          <div className="text-left">
            <span className="text-gray-500">Aug 2023 - May 2027</span>
            <p className="text-xl">Texas Christian University</p>
            <p className="text-l font-bold">
              Computer Science Major + Mathematics Minor
            </p>
          </div>
          {/* Bullet points */}
          <div className="text-left pl-8">
            <ol>
              {tcuDetails.map((bulletPoint, bulletPointIndex) => (
                <li key={bulletPointIndex} className="list-disc mb-1">
                  {bulletPoint}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}
