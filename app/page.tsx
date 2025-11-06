"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { motion } from "framer-motion";
import { content } from "./content";

export default function Portfolio() {
  const [lang, setLang] = useState<"pt" | "en">("en");
  const t = content[lang];

  return (
    <div className="bg-neutral-950 text-zinc-100 min-h-screen font-sans">
      {/* Header */}
      <header className="fixed top-0 left-0 w-full backdrop-blur-md border-b border-zinc-800 z-50">
        <div className="max-w-5xl mx-auto flex justify-between items-center p-4">
          <h1 className="font-bold text-lg text-white tracking-wide">
            Nycollas<span className="text-zinc-500">.dev</span>
          </h1>

          <nav className="hidden sm:flex gap-6 text-zinc-400">
            {t.nav.map((item, i) => (
              <a
                key={i}
                href={`#${item.toLowerCase()}`}
                className="hover:text-white transition-all"
              >
                {item}
              </a>
            ))}
          </nav>

          <Button
            variant="ghost"
            onClick={() => setLang(lang === "pt" ? "en" : "pt")}
            className="cursor-pointer text-zinc-400 hover:text-white hover:bg-white/5 px-3 py-1 text-sm flex items-center gap-2 transition-all duration-300"
          >
            {lang === "en" ? (
              <>
                <span className="relative top-[1px]">🇺🇸</span>
                <span className="leading-none">English</span>
              </>
            ) : (
              <>
                <span className="relative top-[1px]">🇧🇷</span>
                <span className="leading-none">Português</span>
              </>
            )}
          </Button>
        </div>
      </header>
      {/* Hero */}{" "}
      <section className="h-screen flex flex-col justify-center items-center text-center px-4 relative">
        {" "}
        <motion.p
          className="text-zinc-500 uppercase tracking-widest mb-4 text-sm"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          {" "}
          {t.hero.subtitleTop}{" "}
        </motion.p>{" "}
        <motion.h2
          className="text-4xl md:text-6xl font-bold mb-4 text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {" "}
          {t.hero.title}{" "}
        </motion.h2>{" "}
        <motion.p
          className="text-zinc-400 text-lg max-w-xl mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {" "}
          {t.hero.description}{" "}
        </motion.p>{" "}
        <div className="flex gap-4 mb-10">
          {" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/nduaarte"
          >
            {" "}
            <Button className="cursor-pointer bg-white text-black font-semibold px-6 py-3 hover:-translate-y-1 hover:scale-105 hover:bg-zinc-200 hover:shadow-[0_0_15px_rgba(255,255,255,0.3)] transition-all duration-300">
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="w-4 h-4"
              >
                {" "}
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.207 11.387.6.112.793-.262.793-.582 0-.288-.01-1.05-.015-2.06-3.338.726-4.042-1.61-4.042-1.61-.547-1.388-1.337-1.757-1.337-1.757-1.093-.747.082-.732.082-.732 1.21.086 1.845 1.243 1.845 1.243 1.074 1.84 2.817 1.31 3.504 1 .108-.777.42-1.31.763-1.612-2.665-.303-5.467-1.333-5.467-5.93 0-1.31.468-2.383 1.235-3.223-.124-.304-.536-1.523.117-3.176 0 0 1.008-.322 3.3 1.23a11.45 11.45 0 0 1 3-.404c1.02.005 2.045.137 3 .404 2.29-1.552 3.297-1.23 3.297-1.23.655 1.653.243 2.872.12 3.176.77.84 1.233 1.913 1.233 3.223 0 4.61-2.807 5.625-5.48 5.922.43.37.816 1.1.816 2.22 0 1.603-.015 2.893-.015 3.287 0 .323.19.698.8.58C20.565 21.796 24 17.296 24 12 24 5.37 18.63 0 12 0z" />{" "}
              </svg>{" "}
              {t.hero.buttons[0]}{" "}
            </Button>{" "}
          </a>{" "}
          <Button
            className="cursor-pointer border border-zinc-600 text-white bg-transparent px-6 py-3 hover:-translate-y-1 hover:scale-105 hover:border-white hover:bg-white/10 hover:text-white transition-all duration-300"
            variant="outline"
          >
            {" "}
            <a href="cv_nycollas_2025.pdf" download>
              {" "}
              {t.hero.buttons[1]}{" "}
            </a>{" "}
          </Button>{" "}
        </div>{" "}
        <motion.div
          className="flex gap-6 text-zinc-500 text-sm justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          {" "}
          {t.hero.stats.map((s, i) => (
            <div key={i}>
              {" "}
              <span className="text-white font-semibold text-lg">
                {" "}
                {s.split(" ")[0]}{" "}
              </span>{" "}
              {s.replace(s.split(" ")[0], "")}{" "}
            </div>
          ))}{" "}
        </motion.div>{" "}
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-zinc-950 to-black opacity-70" />{" "}
      </section>
      <Separator className="bg-zinc-800" />
      {/* Projects */}
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
                  <h4 className="text-2xl font-semibold text-white">
                    {p.name}
                  </h4>
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
        </div>
      </section>
      {/* Experience */}
      <section
        id="experience"
        className="max-w-4xl mx-auto py-24 px-4 relative"
      >
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
                  <div className="ml-8 border border-zinc-800 bg-zinc-950/60 rounded-2xl p-6 hover:border-zinc-600 hover:bg-zinc-900/60 transition-all duration-500 shadow-[0_0_25px_-10px_rgba(255,255,255,0.1)]">
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
      {/* About */}
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
      <Separator className="bg-zinc-800" />
      {/* Contact */}
      <footer id="contact" className="text-center py-10 text-zinc-500 text-sm">
        <div className="flex justify-center gap-6 mb-4">
          <a
            href="https://www.linkedin.com/in/nduaarte/"
            target="_blank"
            className="hover:text-white"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/nduaarte"
            target="_blank"
            className="hover:text-white"
          >
            GitHub
          </a>
          <a
            href="mailto:nycollas.duaarte@hotmail.com"
            className="hover:text-white"
          >
            Email
          </a>
        </div>
        <p>© 2025 Nycollas Duarte — Built with Next.js & shadcn/ui</p>
      </footer>
    </div>
  );
}
