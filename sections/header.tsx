import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { content } from "../../app/content";

const Header: React.FC = () => {
  const [lang, setLang] = useState<"pt" | "en">("en");
  const t = content[lang];
  return (
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
  );
};

export default Header;
