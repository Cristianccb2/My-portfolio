import Image from "next/image";
import NodeIcon from "../ui/nodeIcon"
import TsIcon from "../ui/tsIcon"
import SqlIcon from "../ui/sqlIcon"
import FigmaIcon from "../ui/figmaIcon"
import AngularIcon from "../ui/angularIcon"
import ReactIcon from "../ui/reactIcon"
import MongoIcon from "../ui/mongoIcon"
import TailwindIcon from "../ui/tailwind";
import ExpressIcon from "../ui/expressIcon";
import AdobeIcon from "../ui/adobeIcon";
import GitHubIcon from "../ui/githubIcon";

const ProjectsData = [
  {
    id:1,
    title: "SIOWEB — Internal Management System",
    description: "Migration of a legacy internal system into a scalable web platform. Development of backend services, REST APIs, authentication, and multi-database integration to support business processes.",
    image: "/imgSio.png",
    tags: [NodeIcon, SqlIcon, ExpressIcon, TsIcon, AngularIcon, TailwindIcon, FigmaIcon, GitHubIcon]
  },
  {
    id:2,
    title: "Seguros Bolívar Anniversary Platform",
    description: "Development of an interactive web platform for a corporate anniversary campaign, enabling users to share and explore content. Implementation of authentication, real-time features, and dynamic data handling.",
    image: "/imgSB.png",
    tags: [ NodeIcon,MongoIcon,ExpressIcon,TsIcon,ReactIcon,TailwindIcon,GitHubIcon]
  },

  {
    id:3,
    title: "Unilogix Payroll System",
    description: "Development of a web-based payroll management system for processing employee data. Implementation of file handling, data queries, and integration with Firebase.",
    image: "/imgUnilogix.png",
    tags: [TsIcon,ReactIcon,TailwindIcon,GitHubIcon]
  },
  {
    id:4,
    title: "JG deportivos Landing page",
    description: "Design and development of a responsive landing page focused on user experience and modern UI. Implementation of reusable components and optimized layout.",
    image: "/imgJg.png",
    tags: [TsIcon,ReactIcon,TailwindIcon,GitHubIcon, AdobeIcon]
  }
]
export default function Proyects(){
    return(
        <section className="mt-20">
            <ol className="border-s-2 border-default w-full max-w-3xl">
                
            </ol>
            <div className="flex justify-start">
                <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="34" height="34" 
                    viewBox="0 0 24 24" fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    className="icon icon-tabler icons-tabler-outline icon-tabler-code-dots"
                >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <path d="M15 12h.01" /><path d="M12 12h.01" />
                    <path d="M9 12h.01" /><path d="M6 19a2 2 0 0 1 -2 -2v-4l-1 -1l1 -1v-4a2 2 0 0 1 2 -2" />
                    <path d="M18 19a2 2 0 0 0 2 -2v-4l1 -1l-1 -1v-4a2 2 0 0 0 -2 -2" />
                </svg>
                <h1 className="font-semibold px-2 text-2xl md:text-3xl">
                    Proyects
                </h1>
            </div>

            {ProjectsData.map((project) =>(
                <div key={project.id} className="md:flex md:flex-row mt-8 p-6 rounded-3xl shadow-lg bg-gray-200/30 dark:bg-gray-100/20"> {/* bg-gray-200/25 */}
                    <div key={project.id} className="md:basis-1/2 rounded-2xl relative h-50 shadow-lg md:h-70 group overflow-hidden">
                        <Image
                        src= {project.image}
                        alt= {project.title}
                        fill
                        className="object-cover object-[25%_center] rounded-2xl transition-transform duration-700 ease-in-out group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 50vw"
                        />
                    </div>
                    <div className="md:basis-1/2 mx-4 md:ml-8 align-text-bottom mt-5">
                        <h2 className="font-semibold text-xl md:text-xl">{project.title}</h2>
                        <p className="text-gray-800 dark:text-gray-200 text-base mt-4">
                            {project.description} 
                        </p>
                        <h3 className="mt-4 font-semibold dark:text-white">Stack</h3>
                        <div className="mt-4 flex justify-center flex-wrap gap-6 ">
                            {project.tags.map((Icon,i)=>(
                                <Icon key={i}/>
                            ))}
                        </div>
                    </div>
                </div>
                
            ))}  
        </section>
    )
}