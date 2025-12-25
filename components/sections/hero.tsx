import React from "react";
import { Button } from "@/components/ui/button";
import { content } from "@/app/content";
import { motion } from "framer-motion";

interface IHeroProps {
  lang: "pt" | "en";
}

const Hero: React.FC<IHeroProps> = ({ lang }) => {
  const t = content[lang];
  return (
    <section className="h-screen flex flex-col justify-center items-center text-center px-4 relative overflow-hidden">
      {/* Fundo com leve halo */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-zinc-950 via-black to-zinc-950 opacity-90" />
      <div className="absolute -z-10 w-[600px] h-[600px] bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_70%)] blur-3xl" />

      {/* Subtítulo */}
      <motion.p
        className="text-zinc-500 uppercase tracking-[0.25em] mb-4 text-xs md:text-sm"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        {t.hero.subtitleTop}
      </motion.p>

      {/* Título principal com brilho leve */}
      <motion.h2
        className="text-4xl md:text-6xl font-bold mb-4 text-white bg-clip-text text-transparent bg-gradient-to-r from-white via-zinc-300 to-white animate-gradient-x"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        {t.hero.title}
      </motion.h2>

      {/* Descrição */}
      <motion.p
        className="text-zinc-400 text-lg max-w-xl mb-8 leading-relaxed"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        {t.hero.description}
      </motion.p>

      {/* Botões */}
      <div className="flex gap-4 mb-10">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/nduaarte"
        >
          <Button className="cursor-pointer bg-white text-black font-semibold px-6 py-3 hover:-translate-y-1 hover:scale-105 hover:bg-zinc-200 shadow-[0_0_20px_rgba(255,255,255,0.15)] transition-all duration-300">
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
        <Button className="cursor-pointer border border-zinc-600 text-white bg-transparent px-6 py-3 hover:-translate-y-1 hover:scale-105 hover:border-white hover:bg-white/10 shadow-[0_0_15px_rgba(255,255,255,0.1)] transition-all duration-300">
          <a href="cv_nycollas_2025.pdf" download>
            {t.hero.buttons[1]}
          </a>
        </Button>
      </div>

      {/* Stats */}
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

      {/* Estilos extras */}
      <style jsx>{`
        @keyframes gradient-x {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 6s ease infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;
