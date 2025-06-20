import { Underline } from "../Underline";
import { Tech, TechBox } from "./TechBox";
import { DiJavascript } from "react-icons/di";
import {
  DiHtml5,
  DiCss3,
  DiReact,
  DiNodejsSmall,
  DiPostgresql,
} from "react-icons/di";
import { DiTerminal, DiGit, DiRedis } from "react-icons/di";
import { TbBrandNextjs } from "react-icons/tb";
import { BiLogoTailwindCss, BiLogoSpringBoot } from "react-icons/bi";
import { useTranslation } from "next-i18next";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { SiLua } from "react-icons/si";

export function Technologies() {
  const { t } = useTranslation("common");

  const observerRef = useRef(null);
  const isInView = useInView(observerRef, { once: true })
  const slideWhenVisible = isInView ? " transition-all duration-1000" : " opacity-0 translate-x-[50px]"


  return (
    <section className="gu-container pt-8 mb-12 max-w-full overflow-hidden">
      <div className="ml-4 mb-5">
        <Underline variant="small">
          <h2>{t("technologies")}</h2>
        </Underline>
      </div>

      <div className="flex flex-wrap justify-between gap-y-4">
        {technologies.map((tech, index) => {
          const delay = isInView ? index * 100 + "ms" : "0ms";
          return (
            <div
              key={tech.name}
              className={`w-1/3 sm:w-1/4 md:w-1/6 ` + slideWhenVisible}
              style={{ transitionDelay: delay }}
            >
              <TechBox {...tech} />
            </div>
          );
        })}
      </div>

      <div ref={observerRef} />
    </section>
  );
}

const technologies: Tech[] = [
  {
    name: "Javascript",
    icon: <DiJavascript />,
  },
  {
    name: "HTML5",
    icon: <DiHtml5 />,
  },
  {
    name: "CSS3",
    icon: <DiCss3 />,
  },
  {
    name: "React",
    icon: <DiReact />,
  },
  {
    name: "NextJs",
    icon: <TbBrandNextjs />,
  },
  {
    name: "TailwindCSS",
    icon: <BiLogoTailwindCss />,
  },
  {
    name: "NodeJS",
    icon: <DiNodejsSmall />,
  },
  {
    name: "PostgreSQL",
    icon: <DiPostgresql />,
  },
  {
    name: "Bash",
    icon: <DiTerminal />,
  },
  {
    name: "Redis",
    icon: <DiRedis />,
  },
  {
    name: "Lua",
    icon: <SiLua />,
  },
  {
    name: "Git",
    icon: <DiGit />,
  },
];
