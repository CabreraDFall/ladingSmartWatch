import { Figma, Github, Globe, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <div className="flex justify-between border-t border-slate-100 py-10">
      <div>
        <h2 className="font-semibold text-2xl">LENTUS</h2>
      </div>
      <div>
        {`Inspirado en `}
        <a
          href="https://www.behance.net/gallery/174285023/Entes-E-commerce-Website-design-and-development?tracking_source=search_projects|entes&l=7"
          target="_blank"
          rel="noopener noreferrer"
        >
          Entes |{" "}
        </a>
        Desarrollado por{" "}
        <a
          href="https://cabreradfall.dev/"
          target="_blank"
          rel="noopener noreferrer"
        >
          CabreraDfall
        </a>
      </div>
      <div className="flex gap-4 justify-center items-center">
        <a
          href="https://cabreradfall.dev/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Globe />
        </a>
        <a
          href="https://github.com/CabreraDFall"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Github />
        </a>
        <a
          href="https://www.figma.com/@cabreradfall"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Figma />
        </a>
        <a
          href="https://www.linkedin.com/in/cabreradfall/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Linkedin />
        </a>
      </div>
    </div>
  );
};

export default Footer;
