"use client";

import Image from "next/image";
import { 
  Mail, 
  Phone, 
  Globe, 
  MapPin, 
  Terminal
} from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-100 flex justify-center py-0 sm:py-8 print:py-0">
      {/* CV Container - Optimized for A4 aspect ratio */}
      <div className="w-full max-w-[900px] bg-white shadow-2xl flex flex-col sm:flex-row overflow-hidden min-h-[1100px] print:shadow-none print:w-full">
        
        {/* Sidebar */}
        <aside className="w-full sm:w-[35%] bg-[#002d44] text-white p-8 flex flex-col space-y-10 relative">
          {/* Profile Picture */}
          <div className="relative z-10 self-center">
            <div className="w-40 h-40 bg-white [clip-path:polygon(30%_0%,70%_0%,100%_30%,100%_70%,70%_100%,30%_100%,0%_70%,0%_30%)] flex items-center justify-center relative">
               <div className="w-[92%] h-[92%] overflow-hidden bg-zinc-800 [clip-path:polygon(30%_0%,70%_0%,100%_30%,100%_70%,70%_100%,30%_100%,0%_70%,0%_30%)] relative">
                  <Image 
                    src="/profile.jpg" 
                    alt="Tariq Asghar" 
                    fill 
                    className="object-cover"
                    priority
                  />
               </div>
            </div>
          </div>

          {/* Contact Section */}
          <section className="space-y-4">
            <h2 className="text-xl font-bold tracking-widest uppercase border-b border-white/20 pb-2">Contact</h2>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-cyan-400 shrink-0" />
                <span className="break-all">tariqasghar761@gmail.com</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-cyan-400 shrink-0" />
                <span>03402053859</span>
              </li>
              <li className="flex items-center gap-3">
                <MapPin size={16} className="text-cyan-400 shrink-0" />
                <span>Sindh, Pakistan</span>
              </li>
              <li className="flex items-center gap-3">
                <Globe size={16} className="text-cyan-400 shrink-0" />
                <span>portfolio-cv1.vercel.app</span>
              </li>
            </ul>
          </section>

          {/* Skills Section */}
          <section className="space-y-6">
            <h2 className="text-xl font-bold tracking-widest uppercase border-b border-white/20 pb-2">Skills</h2>
            
            <div className="space-y-4">
              <div>
                <h3 className="text-xs font-bold text-cyan-400 uppercase tracking-tighter mb-2">Frontend</h3>
                <ul className="space-y-1 text-sm">
                  {["HTML5, CSS3", "Tailwind CSS", "TypeScript", "Next.js", "Responsive Design"].map(s => (
                    <li key={s} className="flex items-start gap-2">
                      <span className="text-cyan-400/50">•</span>
                      <span>{s}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-xs font-bold text-cyan-400 uppercase tracking-tighter mb-2">Backend</h3>
                <ul className="space-y-1 text-sm">
                  {["Python & FastAPI", "REST API Dev", "Auth & Security"].map(s => (
                    <li key={s} className="flex items-start gap-2">
                      <span className="text-cyan-400/50">•</span>
                      <span>{s}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-xs font-bold text-cyan-400 uppercase tracking-tighter mb-2">Databases</h3>
                <ul className="space-y-1 text-sm">
                  {["PostgreSQL (Neon)", "MongoDB", "Qdrant (Vector DB)", "Sanity CMS"].map(s => (
                    <li key={s} className="flex items-start gap-2">
                      <span className="text-cyan-400/50">•</span>
                      <span>{s}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-xs font-bold text-cyan-400 uppercase tracking-tighter mb-2">Tools</h3>
                <ul className="space-y-1 text-sm">
                  {["Git & GitHub", "Docker", "Vercel", "Hugging Face"].map(s => (
                    <li key={s} className="flex items-start gap-2">
                      <span className="text-cyan-400/50">•</span>
                      <span>{s}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* Education Section */}
          <section className="space-y-4">
            <h2 className="text-xl font-bold tracking-widest uppercase border-b border-white/20 pb-2">Education</h2>
            <div className="space-y-4 text-sm">
              <div>
                <p className="font-bold">Web Development Program</p>
                <p className="italic text-zinc-300">Governor Sindh Initiative for AI, Web 3.0 & Metaverse</p>
                <p className="text-cyan-400">Ongoing</p>
              </div>
              <div>
                <p className="font-bold">Intermediate</p>
                <p className="text-zinc-300">Completed in 2007</p>
              </div>
            </div>
          </section>

          {/* Languages Section */}
          <section className="space-y-4">
            <h2 className="text-xl font-bold tracking-widest uppercase border-b border-white/20 pb-2">Languages</h2>
            <ul className="space-y-2 text-sm">
              <li className="flex justify-between uppercase tracking-tighter">
                <span>Urdu</span>
                <span className="text-cyan-400">Native</span>
              </li>
              <li className="flex justify-between uppercase tracking-tighter">
                <span>English</span>
                <span className="text-cyan-400">Professional</span>
              </li>
            </ul>
          </section>

          {/* Sidebar Bottom Accent */}
          <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-cyan-600/20 to-transparent pointer-events-none" />
        </aside>

        {/* Main Content */}
        <main className="flex-1 bg-white relative">
          {/* Header Accents */}
          <div className="absolute top-0 right-0 w-full h-32 flex flex-col items-end overflow-hidden pointer-events-none">
            <div className="w-[120%] h-12 bg-cyan-500 -rotate-3 translate-y-4 translate-x-12 opacity-80" />
            <div className="w-[100%] h-8 bg-[#002d44] -rotate-3 translate-y-6 translate-x-12" />
          </div>

          <div className="p-12 space-y-10 relative z-10">
            {/* Name and Title */}
            <div className="pt-20">
              <h1 className="text-5xl font-extrabold text-[#002d44] tracking-tight">TARIQ ASGHAR</h1>
              <div className="flex items-center gap-4 mt-2">
                <span className="h-[2px] w-12 bg-cyan-500" />
                <h2 className="text-2xl font-medium text-zinc-600 tracking-wide uppercase">Frontend & Full Stack Developer</h2>
              </div>
            </div>

            {/* Professional Summary */}
            <section className="space-y-4">
              <h3 className="text-lg font-bold text-[#002d44] uppercase tracking-[0.2em] border-b-2 border-zinc-100 pb-1 inline-block">Professional Summary</h3>
              <p className="text-zinc-700 leading-relaxed text-[15px]">
                Frontend and Full Stack Web Developer skilled in TypeScript, Next.js, Tailwind CSS, Python, FastAPI, MongoDB, and Neon PostgreSQL. Specialized in building AI Assistants, RAG Chatbots, and AI Automation solutions. Currently advancing expertise in Artificial Intelligence and Agentic AI development to create intelligent, responsive, and user-friendly web applications.
              </p>
            </section>

            {/* Work Experience (Projects) */}
            <section className="space-y-6">
              <h3 className="text-lg font-bold text-[#002d44] uppercase tracking-[0.2em] border-b-2 border-zinc-100 pb-1 inline-block">Projects & Experience</h3>
              
              <div className="space-y-8">
                {/* Project 1 */}
                <div className="relative pl-4 border-l-2 border-cyan-500/30">
                  <div className="absolute -left-[6px] top-0 w-[10px] h-[10px] rounded-full bg-cyan-500" />
                  <div className="flex justify-between items-start mb-1">
                    <h4 className="font-bold text-[#002d44] text-lg">E-Commerce Website</h4>
                    <span className="text-sm font-semibold text-zinc-500">Full-Stack Development</span>
                  </div>
                  <p className="text-sm italic text-zinc-500 mb-2">Next.js, TypeScript, FastAPI, Sanity CMS, Neon PostgreSQL</p>
                  <ul className="list-disc list-outside ml-4 text-sm text-zinc-700 space-y-1">
                    <li>Developed a comprehensive full-stack e-commerce application featuring robust user authentication and efficient product management.</li>
                    <li>Integrated professional content management using Sanity CMS and utilized Neon PostgreSQL for reliable, structured data relations.</li>
                  </ul>
                </div>

                {/* Project 2 */}
                <div className="relative pl-4 border-l-2 border-cyan-500/30">
                  <div className="absolute -left-[6px] top-0 w-[10px] h-[10px] rounded-full bg-cyan-500" />
                  <div className="flex justify-between items-start mb-1">
                    <h4 className="font-bold text-[#002d44] text-lg">Portfolio Website</h4>
                    <span className="text-sm font-semibold text-zinc-500">Frontend Design</span>
                  </div>
                  <p className="text-sm italic text-zinc-500 mb-2">Next.js, TypeScript, Tailwind CSS</p>
                  <ul className="list-disc list-outside ml-4 text-sm text-zinc-700 space-y-1">
                    <li>Built a high-performance, responsive personal portfolio to showcase technical skills and development projects.</li>
                    <li>Utilized Tailwind CSS for modern, utility-first styling ensuring a seamless experience across all device sizes.</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Career Objective */}
            <section className="space-y-4">
              <h3 className="text-lg font-bold text-[#002d44] uppercase tracking-[0.2em] border-b-2 border-zinc-100 pb-1 inline-block">Career Objective</h3>
              <p className="text-zinc-700 leading-relaxed text-[15px]">
                Seeking a Junior Frontend Developer, Full Stack Developer, or AI Developer role where I can apply my skills, gain industry experience, and contribute to innovative projects.
              </p>
            </section>

            {/* References */}
            <section className="space-y-4">
              <h3 className="text-lg font-bold text-[#002d44] uppercase tracking-[0.2em] border-b-2 border-zinc-100 pb-1 inline-block">References</h3>
              <p className="text-zinc-500 italic text-sm">Available upon request.</p>
            </section>
          </div>

          {/* Footer Accent */}
          <div className="absolute bottom-0 left-0 w-full h-16 flex items-end overflow-hidden pointer-events-none">
            <div className="w-[120%] h-10 bg-cyan-500 rotate-3 translate-y-4 -translate-x-12 opacity-80" />
            <div className="w-[100%] h-6 bg-[#002d44] rotate-3 translate-y-2 -translate-x-12" />
          </div>
        </main>
      </div>

      {/* Floating Action Button for PDF - Hidden on Print */}
      <button 
        onClick={() => window.print()}
        className="fixed bottom-8 right-8 bg-[#002d44] text-white p-4 rounded-full shadow-xl hover:bg-cyan-600 transition-all group flex items-center gap-2 print:hidden"
      >
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 font-medium">Print to PDF</span>
        <Terminal size={24} />
      </button>
    </div>
  );
}
