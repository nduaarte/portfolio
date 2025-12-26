import React from "react";
import { motion } from "framer-motion";
import { content } from "@/app/content";
import GooglePlayIcon from "@/assets/google-play-logo.svg";
import AppleIcon from "@/assets/apple-logo.svg";
import WebsiteIcon from "@/assets/website-logo.svg";
import MailIcon from "@/assets/mail.svg";

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
                <div className="relative w-14 h-14 flex-shrink-0 rounded-2xl overflow-hidden bg-neutral-900/80 group">
                  {/* Borda */}
                  <div className="pointer-events-none absolute inset-0 rounded-2xl border border-white/10 transition-opacity duration-300 group-hover:opacity-0" />

                  {/* Placeholder */}
                  <div className="absolute inset-0 flex items-center justify-center text-lg transition-opacity duration-300 group-hover:opacity-0">
                    📱
                  </div>

                  {/* Ícone real */}
                  <img
                    src={`/icons/${p.name
                      .toLowerCase()
                      .replace(/\s+/g, "-")}.png`}
                    alt={`${p.name} icon`}
                    onError={(e) => (e.currentTarget.style.display = "none")}
                    className="absolute inset-0 w-full h-full object-cover opacity-0 scale-95 transition-all duration-500 group-hover:opacity-100 group-hover:scale-100"
                  />
                </div>

                <h4 className="text-2xl font-semibold text-white">{p.name}</h4>
              </div>

              {/* Tecnologias */}
              <div
                className={`flex flex-wrap gap-2 ${
                  i === 0 ? "justify-center" : ""
                }`}
              >
                {p.tech.split("·").map((rawTech, j) => {
                  const tech = rawTech.trim();
                  const prefix = tech[0];
                  const isPremium = ["#"].includes(prefix);

                  const label = isPremium ? tech.slice(1).trim() : tech;

                  return (
                    <span
                      key={j}
                      className={`px-3 py-1 text-xs rounded-md backdrop-blur-sm ${
                        isPremium
                          ? "text-white border border-transparent"
                          : "bg-white/2 text-zinc-300 border border-white/10"
                      }`}
                      style={
                        isPremium
                          ? {
                              background:
                                "linear-gradient(#09090b, #09090b) padding-box, linear-gradient(90deg, rgb(56,189,248), rgb(186,230,253), rgb(212,212,216)) border-box",
                            }
                          : undefined
                      }
                    >
                      {label}
                    </span>
                  );
                })}
              </div>

              {/* Descrição */}
              <p
                className={`text-zinc-400 leading-relaxed ${
                  i === 0 ? "text-base max-w-2xl" : "text-sm max-w-md"
                }`}
              >
                {p.desc}
              </p>

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
                    className="flex items-center gap-1  text-sm text-zinc-300 hover:text-white decoration-zinc-600 hover:decoration-white transition-all"
                  >
                    {l.label.includes("Apple") && <AppleIcon />}
                    {l.label.includes("Google") && <GooglePlayIcon />}
                    {l.label.includes("Site") || l.label.includes("Website") ? (
                      <WebsiteIcon />
                    ) : null}
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
          <div className="absolute inset-0 rounded-3xl bg-[conic-gradient(from_120deg,#38bdf8,#f0f9ff,#bae6fd,#d4d4d8,#38bdf8)] blur-[6px] opacity-60"></div>

          <div className="absolute inset-0 rounded-3xl bg-[conic-gradient(from_120deg,#38bdf8,#f0f9ff,#bae6fd,#d4d4d8,#38bdf8)] opacity-90"></div>

          {/* Conteúdo interno */}
          <div className="relative z-10 rounded-[calc(1.5rem-2px)] bg-neutral-950/95 border border-white/8  ring-1 ring-black/40 backdrop-blur-xl p-10 flex flex-col items-center text-center shadow-[0_0_70px_-20px_rgba(186,230,253,0.18)]">
            <div className="w-16 h-16 rounded-2xl border border-white/10 flex items-center justify-center bg-white/5 text-3xl">
              💎
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
