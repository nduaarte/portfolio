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

      {/* Hero */}
      <section className="h-screen flex flex-col justify-center items-center text-center px-4 relative">
        <motion.p
          className="text-zinc-500 uppercase tracking-widest mb-4 text-sm"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          {t.hero.subtitleTop}
        </motion.p>

        <motion.h2
          className="text-4xl md:text-6xl font-bold mb-4 text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {t.hero.title}
        </motion.h2>

        <motion.p
          className="text-zinc-400 text-lg max-w-xl mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {t.hero.description}
        </motion.p>

        <div className="flex gap-4 mb-10">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/nduaarte"
          >
            <Button className="cursor-pointer bg-white text-black font-semibold px-6 py-3 hover:-translate-y-1 hover:scale-105 hover:bg-zinc-200 hover:shadow-[0_0_15px_rgba(255,255,255,0.3)] transition-all duration-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="w-4 h-4"
              >
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.207 11.387.6.112.793-.262.793-.582 0-.288-.01-1.05-.015-2.06-3.338.726-4.042-1.61-4.042-1.61-.547-1.388-1.337-1.757-1.337-1.757-1.093-.747.082-.732.082-.732 1.21.086 1.845 1.243 1.845 1.243 1.074 1.84 2.817 1.31 3.504 1 .108-.777.42-1.31.763-1.612-2.665-.303-5.467-1.333-5.467-5.93 0-1.31.468-2.383 1.235-3.223-.124-.304-.536-1.523.117-3.176 0 0 1.008-.322 3.3 1.23a11.45 11.45 0 0 1 3-.404c1.02.005 2.045.137 3 .404 2.29-1.552 3.297-1.23 3.297-1.23.655 1.653.243 2.872.12 3.176.77.84 1.233 1.913 1.233 3.223 0 4.61-2.807 5.625-5.48 5.922.43.37.816 1.1.816 2.22 0 1.603-.015 2.893-.015 3.287 0 .323.19.698.8.58C20.565 21.796 24 17.296 24 12 24 5.37 18.63 0 12 0z" />
              </svg>
              {t.hero.buttons[0]}
            </Button>
          </a>
          <Button
            className="cursor-pointer border border-zinc-600 text-white bg-transparent px-6 py-3 hover:-translate-y-1 hover:scale-105 hover:border-white hover:bg-white/10 hover:text-white transition-all duration-300"
            variant="outline"
          >
            <a href="cv_nycollas_2025.pdf" download>
              {t.hero.buttons[1]}
            </a>
          </Button>
        </div>

        <motion.div
          className="flex gap-6 text-zinc-500 text-sm justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          {t.hero.stats.map((s, i) => (
            <div key={i}>
              <span className="text-white font-semibold text-lg">
                {s.split(" ")[0]}
              </span>{" "}
              {s.replace(s.split(" ")[0], "")}
            </div>
          ))}
        </motion.div>

        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-zinc-950 to-black opacity-70" />
      </section>

      <Separator className="bg-zinc-800" />

      {/* Projects */}
      <section id="projects" className="max-w-6xl mx-auto py-24 px-4">
        <h3 className="text-3xl text-white font-bold mb-14 text-center">
          {t.projectsTitle}
        </h3>

        <div className="grid md:grid-cols-2 gap-8">
          {t.projects.map((p, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              className="group relative bg-neutral-900 border border-zinc-800 hover:border-zinc-600 transition-all rounded-2xl overflow-hidden"
            >
              {/* imagem ou placeholder */}
              <div className="h-48 bg-gradient-to-tr from-zinc-800 via-zinc-900 to-zinc-950 flex items-center justify-center">
                <span className="text-zinc-600 text-sm">
                  {p.name.toUpperCase()}
                </span>
              </div>

              <div className="p-6">
                <h4 className="text-xl font-semibold text-white mb-2 flex items-center justify-between">
                  {p.name}
                  <span className="text-zinc-500 text-sm group-hover:text-zinc-300 transition-colors">
                    {i + 1 < 10 ? `#0${i + 1}` : `#${i + 1}`}
                  </span>
                </h4>

                <p className="text-zinc-400 mb-4 leading-relaxed">{p.desc}</p>

                {/* tags de tecnologias */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {p.tech.split("·").map((tech, j) => (
                    <span
                      key={j}
                      className="px-2.5 py-0.5 text-xs rounded-md bg-zinc-800 text-zinc-300 border border-zinc-700"
                    >
                      {tech.trim()}
                    </span>
                  ))}
                </div>

                {/* links */}
                <div className="flex gap-4">
                  {p.links.map((l, j) => (
                    <a
                      key={j}
                      href={l.href}
                      target="_blank"
                      className="flex items-center gap-2 text-sm text-zinc-300 hover:text-white underline cursor-pointer transition-all"
                    >
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
      <section id="experience" className="max-w-4xl mx-auto py-24 px-4">
        <h3 className="text-3xl text-white font-bold mb-14 text-center">
          {t.experienceTitle}
        </h3>

        <div className="space-y-10">
          {t.experience.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="border-l border-zinc-800 pl-6 relative"
            >
              {/* Bullet sutil à esquerda */}
              <span className="absolute left-[-6px] top-2 w-3 h-3 rounded-full bg-zinc-700" />

              {/* Cabeçalho da empresa */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-1">
                <h4 className="text-white font-semibold text-lg">
                  {exp.link ? (
                    <a
                      href={exp.link}
                      target="_blank"
                      className="hover:underline hover:text-zinc-300 transition-colors"
                    >
                      {exp.company}
                    </a>
                  ) : (
                    exp.company
                  )}
                </h4>
                <p className="text-zinc-500 text-sm">{exp.period}</p>
              </div>

              {/* Local */}
              <p className="text-zinc-500 text-sm mb-2">{exp.location}</p>

              {/* Descrição */}
              <p className="text-zinc-300 leading-relaxed">{exp.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* About */}
      <section
        id="about"
        className="max-w-5xl mx-auto py-24 px-6 text-center sm:text-left"
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
          className="flex flex-col sm:flex-row gap-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Avatar ou placeholder */}
          <div className="flex-shrink-0 w-40 h-40 rounded-2xl overflow-hidden bg-gradient-to-tr from-zinc-800 via-zinc-900 to-zinc-950 border border-zinc-800 shadow-[0_0_40px_-15px_rgba(255,255,255,0.2)] flex items-center justify-center text-zinc-600 font-semibold text-3xl self-center sm:self-start">
            <img
              src="https://avatars.githubusercontent.com/u/60564538?s=400&u=53146ca5352feda6560107eabc193e877f6487f8&v=4" // substitui pelo teu link real
              alt="Foto de Nycollas Duarte"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Texto principal */}
          <div>
            <p className="text-zinc-400 leading-relaxed mb-6 max-w-2xl">
              {t.about.text}
            </p>

            {/* Tech badges */}
            <div className="flex flex-wrap gap-3 justify-center sm:justify-start mb-6 w-[90%]">
              {[
                "TypeScript",
                "React Native",
                "Next",
                "Expo",
                "CI/CD",
                "Zustand",
                "Context",
                "TanStack",
                "UI & UX",
                "Scrum",
                "Kanban",
              ].map((tech, i) => (
                <span
                  key={i}
                  className="px-3 py-1 text-xs rounded-full bg-zinc-800 text-zinc-300 border border-zinc-700"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* CTA */}
            <a
              href="mailto:nycollas.duaarte@hotmail.com"
              className="inline-block text-sm text-white font-medium border border-zinc-700 px-5 py-2 rounded-lg hover:bg-white hover:text-black hover:-translate-y-1 transition-all duration-300"
            >
              {lang === "pt" ? "Entre em contato" : "Get in touch"}
            </a>
          </div>
        </motion.div>
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
