import React from "react";
import { content } from "@/app/content";

interface IContactProps {
  lang: "pt" | "en";
}

const Contact: React.FC<IContactProps> = ({ lang }) => {
  const t = content[lang];
  return (
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
  );
};

export default Contact;
