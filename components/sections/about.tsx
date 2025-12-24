import React from "react";
import { motion } from "framer-motion";
import { content } from "../../app/content";

interface IAboutProps {
  lang: "pt" | "en";
}

const About: React.FC<IAboutProps> = ({ lang }) => {
  const t = content[lang];
  return (
    <section
      id="about"
      className="max-w-5xl mx-auto py-24 px-6 text-center sm:text-left relative"
    >
      <motion.h3
        className="text-3xl text-white font-bold mb-10 text-center"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        {t.about.title}
      </motion.h3>

      <motion.div
        className="flex flex-col sm:flex-row gap-10 items-center sm:items-start"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {/* Avatar aprimorado */}
        <div className="relative flex-shrink-0 w-44 h-44 rounded-2xl overflow-hidden">
          {/* Fundo animado */}
          <div className="absolute inset-0 bg-gradient-to-tr from-zinc-800 via-zinc-900 to-zinc-950 border border-zinc-800 animate-spin-slow rounded-2xl blur-md opacity-70" />
          <img
            src="https://avatars.githubusercontent.com/u/60564538?s=400&u=53146ca5352feda6560107eabc193e877f6487f8&v=4"
            alt="Foto de Nycollas Duarte"
            className="relative w-full h-full object-cover rounded-2xl border border-zinc-700 shadow-[0_0_40px_-15px_rgba(255,255,255,0.25)]"
          />
        </div>

        {/* Texto principal */}
        <div className="max-w-2xl">
          <p className="text-zinc-400 leading-relaxed mb-6">
            <span className="text-white font-medium">
              {lang === "pt"
                ? "Sou um desenvolvedor frontend especializado em experiências mobile,"
                : "I'm a frontend developer specialized in mobile experiences,"}
            </span>{" "}
            {lang === "pt"
              ? "criando aplicações completas que unem performance, design e usabilidade. Tenho 5 anos de experiência e já trabalhei em projetos para empresas no Brasil, Estados Unidos e Israel."
              : "building complete applications that merge performance, design, and usability. With 5 years of experience, I've worked on projects for companies in Brazil, the US, and Israel."}
          </p>

          {/* Tech badges */}
          <div className="flex flex-wrap gap-3 justify-center sm:justify-start mb-8">
            {[
              "TypeScript",
              "React Native",
              "Next.js",
              "Expo",
              "Zustand",
              "TanStack Query",
              "UX/UI",
              "CI/CD",
              "Agile",
              "Scrum",
              "Kanban",
            ].map((tech, i) => (
              <span
                key={i}
                className="px-3 py-1.5 text-xs rounded-full bg-white/5 border border-white/10 text-zinc-300 hover:bg-white/10 hover:border-white/20 transition-all duration-300 backdrop-blur-sm"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* CTA */}
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            href="mailto:nycollas.duaarte@hotmail.com"
            className="inline-flex items-center gap-2 text-sm text-white font-medium border border-zinc-700 px-5 py-2 rounded-lg hover:bg-white hover:text-black transition-all duration-300"
          >
            ✉️ {lang === "pt" ? "Entre em contato" : "Get in touch"}
          </motion.a>
        </div>
      </motion.div>

      {/* Estilos adicionais */}
      <style jsx>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default About;
