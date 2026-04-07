const ExperienceData = [
  {
    id:1,
    title:'Web Developer — HV Multiplay',
    description:[
     ' Migrated internal system to a scalable web platform',
      'Built backend services with Node.js and TypeScript',
      'Developed REST APIs and authentication systems',
      'Managed multiple database connections',
      'Integrated automated reporting'
    ],
    date:'Feb 2025-Feb 2026'
  },
  {
    id:2,
    title:'Web Developer — Unilogix',
    description:[
      'Built payroll management web application',
      'Implemented file upload and data query features',
      'Developed frontend with React and TypeScript',
      'Worked in a small agile team'
    ],
    date:'Jul 2024-Dec 2024'
  },
  {
    id:3,
    title:'Web Developer — Seguros Bolívar (Contract Project)',
    description:[
      'Developed interactive gallery web platform',
      'Built UI components with React',
      'Implemented authentication system',
      'Integrated real-time features with WebSockets',
      'Managed data using MongoDB'
    ],
    date:'October-2024'
  }
]

export default function Experience() {
  return (
    <section className="py-10">
      <div className="flex items-center justify-start ml-3 md:justify-center md:mr-140">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="34"  height="34"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
          <path d="M3 9a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2l0 -9"/>
          <path d="M8 7v-2a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v2"/>
          <path d="M12 12l0 .01"/>
          <path d="M3 13a20 20 0 0 0 18 0"/>
        </svg>
        <h1 className="font-semibold px-2 text-2xl md:text-3xl">
          Experience
        </h1>
      </div>

      <div className="flex justify-center mt-8 px-4 md:mt-10">
        <ol className="border-s-2 border-default w-full max-w-3xl">
          {ExperienceData.map((card) => (
            <li key={card.id} className="relative pt-4 mb-10 ms-4 md:ms-6 border-2 p-4 rounded-2xl">

            <div className="absolute w-4 h-4 bg-white rounded-full mt-10 -left-6.5 md:-left-8.5 border-4 border-blue-300 dark:border-amber-200"></div>
            
            <time className="absolute left-2 -top-4 md:-left-3 md:-top-5 p-2 text-xs md:text-sm font-bold bg-amber-200 dark:bg-amber-700 rounded border-2">
              {card.date}
            </time>
            <h3 className="text-base md:text-lg font-semibold my-2">
              {card.title}
            </h3>

            {Array.isArray(card.description) ? (
                <ul className="mb-4 text-sm md:text-lg text-body list-disc pl-5 space-y-1">
                  {card.description.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              ) : (
                <p className="mb-4 text-sm md:text-lg text-body text-pretty">
                  {card.description}
                </p>
            )}
          </li>
          )) }
        </ol>
      </div>

    </section>
  );
}