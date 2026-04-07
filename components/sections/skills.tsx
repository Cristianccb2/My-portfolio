"use client";

import Image from "next/image";
import NodeIcon from "../ui/nodeIcon"
import TsIcon from "../ui/tsIcon"
import SqlIcon from "../ui/sqlIcon"
import FigmaIcon from "../ui/figmaIcon"
import AngularIcon from "../ui/angularIcon"
import ReactIcon from "../ui/reactIcon"
import MongoIcon from "../ui/mongoIcon"
import TailwindIcon from "../ui/tailwind";
import NextIcon from "../ui/nextIcon";
import ExpressIcon from "../ui/expressIcon";
import AdobeIcon from "../ui/adobeIcon";
import GitHubIcon from "../ui/githubIcon";

const Stack = [
  {
    category: "Frontend",
    items: [
      { name: "Angular", Icon: AngularIcon, label: "Application Development" },
      { name: "React", Icon: ReactIcon, label: "Web Development" },
      { name: "TypeScript", Icon: TsIcon, label: "Primary Language" },
      { name: "Tailwind", Icon: TailwindIcon, label: "Modern UI Styling" }
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", Icon: NodeIcon, label: "REST API Development" },
      { name: "Express", Icon: ExpressIcon, label: "Backend Framework" },
      { name: "Nextjs", Icon: NextIcon, label: "Full-Stack Framework" }
    ],
  },
  {
    category: "Databases",
    items: [
      { name: "SQL", Icon: SqlIcon, label: "PostgreSQL / MySQL" },
      { name: "MongoDB", Icon: MongoIcon, label: "NoSQL Database" },
    ],
  },
  {
    category: "Tools",
    items: [        
      { name: "GitHub", Icon: GitHubIcon, label: "Version Control" },
      { name: "Figma", Icon: FigmaIcon, label: "UI/UX Design & Prototyping" },
      { name: "Adobe Suite", Icon: AdobeIcon, label: "Design Tools" },
    ],
  },
];

export default function Skills() {
  return (
    <div className="mt-30 min-h-screen">
        <div className="flex justify-start">
            <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-tools"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M3 21h4l13 -13a1.5 1.5 0 0 0 -4 -4l-13 13v4" /><path d="M14.5 5.5l4 4" /><path d="M12 8l-5 -5l-4 4l5 5" /><path d="M7 8l-1.5 1.5" /><path d="M16 12l5 5l-4 4l-5 -5" /><path d="M16 17l-1.5 1.5" /></svg>
            <h1 className="font-semibold px-2 text-2xl md:text-3xl">
                Skills and tools
            </h1>
        </div>

        <section className="py-10 bg-gray-200/30 rounded-3xl my-8 max-w-7xl mx-auto shadow-xl border border-gray-200 dark:border-0 dark:bg-gray-100/20">
            <div className="px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {Stack.map((skills) => (
                    <div key={skills.category} className="bg-white dark:bg-gray-400 dark:border-0 p-6 rounded-2xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300">
                        <h2 className="text-xl font-bold text-gray-800 mb-6 border-b-2 border-amber-200 dark:border-blue-950 pb-2 inline-block">
                        {skills.category}
                        </h2>
            
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 ">
                        {skills.items.map((tech, index) => {
                            const IconComponent = tech.Icon;
                            return (
                            <div key={index} className="flex flex-col items-center p-4 bg-gray-100/60 rounded-xl border border-gray-100 group hover:border-amber-300 hover:bg-amber-50/50 transition-all duration-300 transform hover:-translate-y-1">
                                <div className="w-12 h-12 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                                    <IconComponent />
                                </div>
                                <span className="text-sm font-semibold text-gray-800 tracking-tight text-center">
                                {tech.name}
                                </span>
                                {tech.label && (
                                <span className="text-xs text-gray-700 dark:text-gray-900 mt-1 text-center leading-tight">
                                    {tech.label}
                                </span>
                                )}
                            </div>
                            );
                        })}
                        </div>
                    </div>
                    ))}
                </div>
            </div>
        </section>
    </div>
  );
}