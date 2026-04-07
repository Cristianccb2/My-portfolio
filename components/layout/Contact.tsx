"use client";

import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

export default function Footer() {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState<{type: 'success' | 'error', msg: string} | null>(null);

  const sendEmail = (e: React.SubmitEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setIsSending(true);
    setStatus(null);

    emailjs.sendForm(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,   
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!, 
      formRef.current,
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
    )
    .then(() => {
      setStatus({ 
        type: 'success', 
        msg: 'Thanks for reaching out! I’ll review your message and get back to you shortly.'
      });
      formRef.current?.reset(); 
    })
    .catch((error) => {
      console.error("Error EmailJS:", error);
      setStatus({ 
        type: 'error', 
        msg: 'Something went wrong. Please try again or contact me directly via email.'
      });
    })
    .finally(() => {
      setIsSending(false);
      setTimeout(() => setStatus(null), 6000);
    });
  };

  return (
    <footer className="mt-24 shadow-[0_-20px_50px_rgba(0,0,0,0.02)]">
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* INFORMACIÓN DE CONTACTO */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight dark:text-white">
                Ready to build high-impact products <br />
                <span className="text-amber-700">with a reliable developer?</span>
              </h2>
              <p className="mt-6 text-lg text-gray-600 dark:text-gray-200 max-w-md leading-relaxed">
                I’m a Web Developer focused on building scalable, high-performance applications with a strong emphasis on user experience and clean architecture. 
                I’m currently open to new opportunities where I can contribute, grow, and deliver real impact.
              </p>
            </div>

            <div className="space-y-6">
              <a 
                href="tel:+573132918070"
                className="group flex items-center gap-4 p-4 bg-gray-50 dark:bg-white/0 dark:border-0 rounded-2xl border border-gray-100 hover:border-amber-200 transition-all w-fit shadow-sm"
              >
                <div className="bg-amber-100 p-3 rounded-xl text-amber-700 group-hover:bg-amber-700 group-hover:text-white transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" /></svg>
                </div>
                <div>
                  <span className="block text-xs font-bold uppercase tracking-widest text-gray-400 dark:text-gray-100">Call me</span>
                  <span className="text-lg font-semibold text-gray-800 dark:text-gray-200">+57 313 291 8070</span>
                </div>
              </a>

              <div className="flex items-center gap-4 text-gray-500 font-medium">
                <span className="text-xl">📍</span>
                <span>Bogotá, Colombia · Open to work</span>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-8 md:p-10 rounded-[2.5rem] border border-gray-200 shadow-xl dark:bg-gray-100/20 dark:border-0">
            <form ref={formRef} onSubmit={sendEmail} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700 dark:text-gray-50 ml-1">Full Name</label>
                  <input 
                    name="user_name" 
                    type="text" 
                    placeholder="John Doe"
                    required
                    className="w-full px-5 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-700 transition-all bg-white text-gray-800 dark:placeholder:text-gray-500"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700 dark:text-gray-50 ml-1">Company</label>
                  <input 
                    name="user_company" 
                    type="text" 
                    placeholder="Your company"
                    required
                    className="w-full px-5 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-700 transition-all bg-white text-gray-800 dark:placeholder:text-gray-500"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700 dark:text-gray-50 ml-1">Work email</label>
                <input 
                  name="user_email" 
                  type="email" 
                  placeholder="yourComany@email.com"
                  required
                  className="w-full px-5 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-700 transition-all bg-white text-gray-800 dark:placeholder:text-gray-500"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700 dark:text-gray-50 ml-1">Message</label>
                <textarea 
                  name="message" 
                  rows={4} 
                  placeholder="Tell me about your project or how I can help..."
                  required
                  className="w-full px-5 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-700 transition-all resize-none bg-white text-gray-800 dark:placeholder:text-gray-500"
                ></textarea>
              </div>

              <button 
                type="submit"
                disabled={isSending}
                className={`w-full py-4 font-bold rounded-xl transition-all shadow-lg active:scale-[0.98] ${
                  isSending 
                    ? "bg-gray-400 cursor-not-allowed text-white" 
                    : "bg-gray-900 text-white hover:bg-amber-700 shadow-gray-900/10 dark:bg-amber-700 dark:hover:bg-gray-950 hover:cursor-pointer"
                }`}
              >
                {isSending ? "Sending..." : "Let’s work together"}
              </button>

              {status && (
                <div className={`mt-4 p-4 rounded-xl text-center text-sm font-bold animate-pulse ${
                  status.type === 'success' ? 'bg-green-100 text-green-700 border border-green-200' : 'bg-red-100 text-red-700 border border-red-200'
                }`}>
                  {status.msg}
                </div>
              )}
            </form>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
          <div className="flex gap-6 font-medium">
             <span className="flex items-center gap-2">
               <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></span>
               Open to new opportunities
             </span>
          </div>
        </div>
      </div>
    </footer>
  );
}