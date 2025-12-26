import React from "react";
import { content } from "@/app/content";
import { motion } from "framer-motion";

interface IExperienceProps {
  lang: "pt" | "en";
}

const Experience: React.FC<IExperienceProps> = ({ lang }) => {
  const t = content[lang];

  return (
    <section id="experience" className="relative max-w-4xl mx-auto py-24 px-4">
      <h3 className="text-3xl font-bold text-white mb-14 text-center">
        {t.experienceTitle}
      </h3>

      <div className="relative pl-8">
        {/* Linha principal da timeline */}
        <div className="absolute left-3 top-0 bottom-0 w-[1.5px] bg-gradient-to-b from-zinc-800 via-zinc-700 to-zinc-600 rounded-full overflow-hidden">
          <div className="ab  olute inset-0 animate-timeline-glow bg-gradient-to-b from-transparent via-white/20 to-transparent" />
        </div>

        {/* Lista */}
        <div className="relative space-y-14">
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
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="relative"
              >
                {/* Ponto da timeline */}
                <div className="absolute left-[1px] top-6 w-2.5 h-2.5 rounded-full bg-white/70">
                  <div className="absolute inset-0 rounded-full ring-4 ring-white/10" />
                </div>

                {/* Card */}
                <div className="ml-8 rounded-3xl p-8 backdrop-blur-xl bg-neutral-950/95 border border-white/10 shadow-[0_0_40px_-20px_rgba(186,230,253,0.12)] transition-all duration-500 hover:border-white/20">
                  {/* Header */}
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
                      <span className="text-sm opacity-70">{flag}</span>
                    </h4>

                    <p className="text-zinc-500 text-xs uppercase tracking-wide font-medium">
                      {exp.period}
                    </p>
                  </div>

                  {/* Localização */}
                  <p className="text-zinc-500 text-sm mb-4 flex items-center gap-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      className="w-4 h-4"
                    >
                      <path d="M10 2C6.134 2 3 5.134 3 9c0 5.25 7 9 7 9s7-3.75 7-9c0-3.866-3.134-7-7-7zM5 9c0-2.757 2.243-5 5-5s5 2.243 5 5c0 2.71-2.332 5.572-5 7.721C7.331 14.573 5 11.71 5 9zm3 0a2 2 0 114 0 2 2 0 01-4 0z" />
                    </svg>
                    {exp.location}
                  </p>

                  {/* Descrição */}
                  <p className="text-zinc-400 leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Glow da timeline */}
      <style jsx>{`
        @keyframes timeline-glow {
          0% {
            transform: translateY(120%);
            opacity: 0;
          }
          50% {
            transform: translateY(-120%);
            opacity: 1;
          }
          100% {
            transform: translateY(120%);
            opacity: 0;
          }
        }

        .animate-timeline-glow {
          animation: timeline-glow 5s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Experience;
