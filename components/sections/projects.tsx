import React from "react";
import { content } from "../../app/content";
import { motion } from "framer-motion";

interface IProjectsProps {
  lang: "pt" | "en";
}

const Projects: React.FC<IProjectsProps> = ({ lang }) => {
  const t = content[lang];
  return (
    <section id="projects" className="max-w-6xl mx-auto py-24 px-4">
      <h3 className="text-3xl text-white font-bold mb-14 text-center">
        {t.projectsTitle}
      </h3>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {t.projects.map((p, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            className={`group relative overflow-hidden rounded-3xl border border-neutral-700 bg-gradient-to-b from-neutral-900 via-neutral-950 to-black backdrop-blur-xl shadow-[0_0_20px_-10px_rgba(255,255,255,0.08)] hover:border-neutral-500 hover:shadow-[0_0_25px_-8px_rgba(255,255,255,0.15)] transition-all duration-500 ${
              i === 0 ? "lg:col-span-2" : ""
            }`}
          >
            {/* Fundo visual */}
            <div className="absolute inset-0 bg-gradient-to-br from-zinc-900/80 via-zinc-950/70 to-black opacity-80 group-hover:opacity-100 transition-opacity duration-700" />

            {/* Conteúdo */}
            <div
              className={`relative z-10 flex flex-col ${
                i === 0 ? "items-center text-center" : "items-start text-left"
              } justify-between p-8 gap-6`}
            >
              {/* Ícone e nome */}
              <div
                className={`flex items-center gap-4 ${
                  i === 0 ? "justify-center" : ""
                }`}
              >
                <div className="w-14 h-14 flex-shrink-0 rounded-2xl overflow-hidden border border-zinc-700 bg-zinc-900/70">
                  <img
                    src={`/icons/${p.name
                      .toLowerCase()
                      .replace(/\s+/g, "-")}.png`}
                    alt={`${p.name} icon`}
                    onError={(e) => (e.currentTarget.style.display = "none")}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <h4 className="text-2xl font-semibold text-white">{p.name}</h4>
              </div>

              {/* Descrição */}
              <p
                className={`text-zinc-400 leading-relaxed ${
                  i === 0 ? "text-base max-w-2xl" : "text-sm max-w-md"
                }`}
              >
                {p.desc}
              </p>

              {/* Tecnologias */}
              <div
                className={`flex flex-wrap gap-2 ${
                  i === 0 ? "justify-center" : ""
                }`}
              >
                {p.tech.split("·").map((tech, j) => (
                  <span
                    key={j}
                    className="px-3 py-1 text-xs rounded-md bg-white/5 text-zinc-300 border border-white/10 backdrop-blur-sm"
                  >
                    {tech.trim()}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div
                className={`flex flex-wrap gap-4 ${
                  i === 0 ? "justify-center" : ""
                }`}
              >
                {p.links.map((l, j) => (
                  <a
                    key={j}
                    href={l.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-zinc-300 hover:text-white underline underline-offset-4 decoration-zinc-600 hover:decoration-white transition-all"
                  >
                    {l.label.includes("Apple") && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        className="w-4 h-4"
                      >
                        <path d="M16.365 1.43c0 1.14-.417 2.273-1.163 3.178-.69.845-1.833 1.497-2.904 1.42-.114-1.06.455-2.24 1.163-3.03.758-.87 2.004-1.507 2.904-1.568zm4.79 17.32c-.553 1.27-1.218 2.543-2.145 3.86-.86 1.227-1.94 2.744-3.37 2.767-1.266.022-1.676-.801-3.472-.801-1.798 0-2.248.778-3.513.823-1.414.045-2.494-1.353-3.354-2.58C3.462 20.17 2.1 15.07 4.567 11.53c.951-1.362 2.64-2.222 4.191-2.245 1.312-.023 2.548.891 3.47.891.871 0 2.4-1.097 4.04-.937.687.029 2.62.28 3.858 2.126-.098.062-2.308 1.338-2.285 3.996.023 3.174 2.724 4.23 2.777 4.247z" />
                      </svg>
                    )}
                    {l.label.includes("Google") && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        className="w-4 h-4"
                      >
                        <path d="M1.5 3.5l12.91 8.5L1.5 20.5v-17zm13.29 8.5l6.63 4.36c.23-.64.35-1.32.35-2.02 0-.72-.13-1.42-.38-2.07l-6.6-.27z" />
                      </svg>
                    )}
                    {l.label.includes("Site") || l.label.includes("Website")
                      ? "🌐"
                      : null}
                    {l.label}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
        {/* Card especial — Seu Projeto Aqui */}
        <motion.div
          whileHover={{ scale: 1.03 }}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
          className="group relative overflow-hidden rounded-3xl p-[1.5px] transition-all duration-500"
        >
          {/* Borda RGB estática */}
          <div className="absolute inset-0 rounded-3xl bg-[conic-gradient(from_0deg,#ff0055,#ff7b00,#ffee00,#00ff99,#00c2ff,#a100ff,#ff0055)] blur-[5px] opacity-80"></div>
          <div className="absolute inset-0 rounded-3xl bg-[conic-gradient(from_0deg,#ff0055,#ff7b00,#ffee00,#00ff99,#00c2ff,#a100ff,#ff0055)] opacity-90"></div>

          {/* Conteúdo interno */}
          <div className="relative z-10 bg-neutral-950 rounded-[calc(1.5rem-2px)] border border-neutral-900 backdrop-blur-xl p-10 flex flex-col items-center text-center shadow-[0_0_40px_-10px_rgba(255,255,255,0.15)]">
            <div className="w-16 h-16 rounded-2xl border border-white/10 flex items-center justify-center bg-white/5 text-3xl">
              🚀
            </div>

            <h4 className="text-2xl font-semibold text-white mt-4">
              {lang === "pt" ? "Seu Projeto Aqui" : "Your Project Here"}
            </h4>

            <p className="text-zinc-400 max-w-xs mt-2">
              {lang === "pt"
                ? "Que tal ver seu app, startup ou ideia digital sendo o próximo destaque desta lista? Vamos criar algo incrível juntos."
                : "How about seeing your app, startup, or digital idea become the next highlight on this list? Let’s build something amazing together."}
            </p>

            <a
              href="mailto:nycollas.duaarte@hotmail.com"
              className="mt-5 inline-block px-5 py-2 rounded-lg border border-white/20 text-white font-medium hover:bg-white hover:text-black hover:scale-105 transition-all duration-300"
            >
              {lang === "pt" ? "Entre em contato ✉️" : "Get in touch ✉️"}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
