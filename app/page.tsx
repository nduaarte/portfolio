"use client";
import { useState } from "react";
import { Separator } from "@/components/ui/separator";
import Header from "@/components/sections/header";
import About from "@/components/sections/about";
import Hero from "@/components/sections/hero";
import Projects from "@/components/sections/projects";
import Experience from "@/components/sections/experience";
import Contact from "@/components/sections/contact";

export default function Portfolio() {
  const [lang, setLang] = useState<"pt" | "en">("en");

  return (
    <div className="bg-neutral-950 text-zinc-100 min-h-screen font-sans">
      <Header lang={lang} handleLang={setLang} />
      <Hero lang={lang} />
      <Separator className="bg-zinc-800" />
      <Projects lang={lang} />
      <Experience lang={lang} />
      <About lang={lang} />
      <Separator className="bg-zinc-800" />
      <Contact lang={lang} />
    </div>
  );
}
