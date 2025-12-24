import React from "react";
import { content } from "../../app/content";
import { motion } from "framer-motion";

interface IExperienceProps {
  lang: "pt" | "en";
}

const Experience: React.FC<IExperienceProps> = ({ lang }) => {
  const t = content[lang];
  return (
    <section id="experience" className="max-w-4xl mx-auto py-24 px-4 relative">
      <h3 className="text-3xl text-white font-bold mb-14 text-center">
        {t.experienceTitle}
      </h3>

      <div className="relative pl-8">
        {/* Linha principal da timeline */}
        <div className="absolute left-3 top-0 bottom-0 w-[2px] bg-zinc-800 rounded-full overflow-hidden">
          {/* Brilho animado que sobe e reinicia */}
          <div className="absolute inset-0 animate-timeline-glow bg-gradient-to-b from-transparent via-white/40 to-transparent" />
        </div>

        {/* Lista de experiências */}
        <div className="space-y-12 relative">
          {t.experience.map((exp, i) => {
            const flag = exp.location.includes("Brasil")
              ? "🇧🇷"
              : exp.location.includes("United")
              ? "🇺🇸"
              : exp.location.includes("Israel")
              ? "🇮🇱"
              : "🇧🇷";

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative group"
              >
                {/* Ponto animado */}
                <div className="absolute left-[2px] top-5 w-3 h-3 rounded-full bg-zinc-600 group-hover:bg-white transition-colors duration-300 animate-pulse shadow-[0_0_8px_rgba(255,255,255,0.3)]" />

                {/* Card */}
                <div className="ml-8 border border-neutral-700 bg-gradient-to-b from-neutral-900 via-neutral-950 to-black rounded-3xl p-8 backdrop-blur-xl shadow-[0_0_20px_-10px_rgba(255,255,255,0.08)] hover:border-neutral-500 hover:shadow-[0_0_25px_-8px_rgba(255,255,255,0.15)] transition-all duration-500">
                  {/* Cabeçalho */}
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                    <h4 className="text-xl font-semibold text-white flex items-center gap-2">
                      {exp.link ? (
                        <a
                          href={exp.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-zinc-300 transition-colors"
                        >
                          {exp.company}
                        </a>
                      ) : (
                        exp.company
                      )}
                      <span className="text-lg">{flag}</span>
                    </h4>
                    <p className="text-zinc-500 text-sm font-medium">
                      {exp.period}
                    </p>
                  </div>

                  {/* Localização */}
                  <p className="text-zinc-500 text-sm mb-3 flex items-center gap-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      className="w-4 h-4 text-zinc-500"
                    >
                      <path d="M10 2C6.134 2 3 5.134 3 9c0 5.25 7 9 7 9s7-3.75 7-9c0-3.866-3.134-7-7-7zM5 9c0-2.757 2.243-5 5-5s5 2.243 5 5c0 2.71-2.332 5.572-5 7.721C7.331 14.573 5 11.71 5 9zm3 0a2 2 0 114 0 2 2 0 01-4 0z" />
                    </svg>
                    {exp.location}
                  </p>

                  {/* Descrição */}
                  <p className="text-zinc-300 leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Estilo da animação */}
      <style jsx>{`
        @keyframes timeline-glow {
          0% {
            transform: translateY(100%);
            opacity: 0;
          }
          50% {
            transform: translateY(-100%);
            opacity: 1;
          }
          100% {
            transform: translateY(100%);
            opacity: 0;
          }
        }

        .animate-timeline-glow {
          animation: timeline-glow 4s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Experience;
