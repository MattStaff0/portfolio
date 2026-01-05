import WorkExp from "./WorkExp";

// icon imports
import generalGenoLogo from "../assets/logo/gg.jpg";
import therapodLogo from "../assets/logo/therapod.png";
import {
  SiPython,
  SiReact,
  SiTypescript,
  SiMysql,
  SiFirebase,
  SiApachespark,
} from "react-icons/si";

// TODO: array to store our information so we can map over it
const gg = [
  "Tasked with engineering and optimizing data workflows utilizing a technical stack that includes Python, SQL, Apache Spark/PySpark, Airflow, and dbt.",
  "Scheduled to analyze multi-modal datasets to support critical decision-making processes while adhering to strict security and compliance standards.",
];
const ggStack = [SiPython, SiMysql, SiApachespark];

const therapod = [
  "Built an AI scheduling feature that lets users book therapy sessions in plain English (ex. “next Friday at 2pm”). The system converts that into a real time slot, checks availability, handles time zones, and suggests alternatives automatically if the slot is taken.",
  "Improved backend reliability by standardizing how data is stored and validated (Firestore + Pydantic models), so different applications on differing platforms stayed in sync and features didn't break from inconsistent data.",
];
const therapodStack = [SiPython, SiReact, SiTypescript, SiFirebase];

export default function Work() {
  return (
    <div className="w-full border-solid border-gray-400 border flex flex-col justify-center items-center text-gray-400">
      {/* will be the most current work experince */}
      {/* { icon, date, company, title, details } */}
      <WorkExp
        icon={generalGenoLogo}
        date="Jan, 2026 - Present"
        company="General Genomics"
        title="Data Engineering/Analyist Intern"
        details={gg}
        techStack={ggStack}
      />
      <WorkExp
        icon={therapodLogo}
        date="May, 2025 - Jan, 2026"
        company="Therapod AI"
        title="Full Stack Engineer Intern"
        details={therapod}
        techStack={therapodStack}
      />
    </div>
  );
}
