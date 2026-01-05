export default function WorkExp({
  icon,
  date,
  company,
  title,
  details,
  techStack,
}) {
  return (
    <>
      <div className="w-full px-8 py-4 flex flex-row justify-start">
        {/* Icon section */}
        {/* ADDED 'shrink-0' BELOW */}
        <div className="w-14 h-14 shrink-0 bg-gray-900 border-4 border-gray-900 rounded-full flex items-start justify-center overflow-hidden">
          <img
            src={icon}
            alt="General Genomics Company Logo"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Details section -> date, company, title, details obj */}
        <div className="ml-4">
          <div className="text-left">
            <span className="text-gray-500">{date}</span>
            <p className="text-xl">{company}</p>
            <p className="text-l font-bold">{title}</p>
          </div>

          <div className="text-left pl-8">
            <ol>
              {details.map((bulletPoint, bulletPointIndex) => (
                <li key={bulletPointIndex} className="list-disc mb-1">
                  {bulletPoint}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
      {/* Place to put icons */}
      <div className="w-full py-1 pl-32 flex flex-row">
        {/* render these tech stacks as their own icons */}
        {techStack.map((Icon, IconIndex) => (
          <Icon
            key={IconIndex}
            className="w-6 h-6 text-gray-400 hover:text-white transition-colors mx-2 mb-2"
          />
        ))}
      </div>
    </>
  );
}
