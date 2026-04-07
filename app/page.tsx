"use client";

import { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import Experience from "@/components/sections/experience";
import Projects from "@/components/sections/projects";
import Skills from "@/components/sections/skills";

export default function Home() {
  const [copied, setCopied] = useState(false);
  const email = "cristiancabrerab9@gmail.com";

  const textParts = useMemo(
    () => [
      { text: "Multimedia engineer", color: "text-blue-600" },
      { text: " and ", color: "text-foreground" },
      { text: "web developer", color: "text-blue-600" },
    ],
    []
  );

  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  // Lógica del Typewriter
  useEffect(() => {
    const fullText = textParts.map(p => p.text).join("");    
    const typingSpeed = isDeleting ? 30 : 50;    
    const timer = setTimeout(() => {
      if (!isDeleting && charIndex < fullText.length) {
        setDisplayedText(fullText.substring(0, charIndex + 1));
        setCharIndex(prev => prev + 1);
      } else if (isDeleting && charIndex > 0) {
        setDisplayedText(fullText.substring(0, charIndex - 1));
        setCharIndex(prev => prev - 1);
      } else if (!isDeleting && charIndex === fullText.length) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, textParts]);

  // Función para copiar al portapapeles
  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="max-w-5xl mx-auto p-6">
      <main>
        <div className="flex justify-center">
          <div className="w-48 h-48 relative">
            <Image
              src="/imgPortfolio.png"
              alt="Foto de perfil"
              fill
              className="rounded-full object-cover shadow-xl"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority
            />
          </div>
        </div>

        <h1 className="text-center text-4xl font-bold pt-6 tracking-tight text-foreground">
          {"Hi, I'm"} <span className="text-amber-700">Cristian</span>
        </h1>

        <h2 className="text-center text-2xl font-semibold pt-2 min-h-12.5 flex justify-center items-center">
          <span>
            {displayedText.split("").map((char, i) => {
              let count = 0;
              for (const part of textParts) {
                if (i < count + part.text.length) {
                  return (
                    <span key={i} className={part.color}>
                      {char}
                    </span>
                  );
                }
                count += part.text.length;
              }
              return char;
            })}
          </span>
          <span className="md:ml-1 md:w-1 md:h-7 bg-amber-600 animate-pulse inline-block"></span>
        </h2>

        <p className="text-center mt-5 text-base md:text-lg md:font-medium text-pretty text-foreground/80">
          Building fast and <span className="text-amber-700 font-extrabold">secure web applications</span> with a focus on high-quality 
          <span className="text-amber-700 font-extrabold"> user experiences</span> and scalable <span className="text-amber-700 font-extrabold">backend architecture</span>
        </p>

        <div className="flex justify-center mt-6 md:mt-8">

          <button 
            onClick={handleCopy}
            className="border-gray-500 border px-4 mr-2 rounded-2xl flex justify-center items-center py-1 hover:bg-gray-800 hover:text-gray-100 transition-all min-w-30 hover:cursor-pointer"
          >
            {copied ? (
              <span className="flex items-center font-medium hover:text-gray-100">
                ¡Copied!
              </span>
            ) : (
              <>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="mr-2 group hover:scale-200 "><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M22 7.535v9.465a3 3 0 0 1 -2.824 2.995l-.176 .005h-14a3 3 0 0 1 -2.995 -2.824l-.005 -.176v-9.465l9.445 6.297l.116 .066a1 1 0 0 0 .878 0l.116 -.066l9.445 -6.297z" /><path d="M19 4c1.08 0 2.027 .57 2.555 1.427l-9.555 6.37l-9.555 -6.37a2.999 2.999 0 0 1 2.354 -1.42l.201 -.007h14z" /></svg>
                Contact
              </>
            )}
          </button>

          <a 
            className="border-gray-500 border px-4 mr-2 rounded-2xl flex justify-center items-center py-1 hover:bg-gray-800 hover:text-gray-100 transition-all"
            href="https://www.linkedin.com/in/cristiancabrerab/" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M8 11v5" /><path d="M8 8v.01" /><path d="M12 16v-5" /><path d="M16 16v-3a2 2 0 1 0 -4 0" /><path d="M3 7a4 4 0 0 1 4 -4h10a4 4 0 0 1 4 4v10a4 4 0 0 1 -4 4h-10a4 4 0 0 1 -4 -4l0 -10" /></svg>
            LinkedIn
          </a>

          <a 
            className="border-gray-500 border px-4 mr-2 rounded-2xl flex justify-center items-center py-1 hover:bg-gray-800 hover:text-gray-100 transition-all gap-2"
            href="/resume.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            download="resume.pdf"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-file-cv"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M14 3v4a1 1 0 0 0 1 1h4" /><path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2" /><path d="M11 12.5a1.5 1.5 0 0 0 -3 0v3a1.5 1.5 0 0 0 3 0" /><path d="M13 11l1.5 6l1.5 -6" /></svg>
            Resume
          </a>
        </div>        
        <section id="Experience" className="scroll-mt-12 mt-4">
          <Experience />
        </section>
        <section id="Projects" className="scroll-mt-18 mt-4">
          <Projects />
        </section>
        <section id="Skills" className="scroll-mt-18">
          <Skills/>
        </section>
      </main>
    </div>
  );
}