import { Underline } from "../Underline";
import { ProjectExternalLinkButton } from "./ProjectExternalLinkButton";
import { FiExternalLink } from "react-icons/fi";
import { useTranslation } from "next-i18next";
import { useRef } from "react";
import Image from 'next/image'
import { useInView } from "framer-motion";


export interface ProjectLink {
  url: string;
  name: string;
  icon: JSX.Element;
}

export interface Project {
  img: string;
  title: string;
  description: JSX.Element;
  stack: string[];
  internalUrl: string;
  externalUrl: string;
  projectLinks: ProjectLink[];
}

export function ProjectBox({
  img,
  title,
  description,
  stack,
  externalUrl,
  projectLinks,
  index,
}: Project & { index: number }) {
  const isEven = index % 2 == 0;

  const { t } = useTranslation("projects");


  const ref = useRef(null);
  const isInView = useInView(ref, { once: true })

  const postStyle = "transition-all duration-1000 "
  const preStyle = isEven
    ? " opacity-0 sm:translate-x-[-50px] sm:translate-y-[0px] translate-y-[50px] translate-y-[0px]"
    : " opacity-0 sm:translate-x-[50px] sm:translate-y-[0px] translate-y-[50px] translate-y-[0px]";
  const sliInStyle = isInView ? postStyle : preStyle

  const gridTemplateAreas = isEven
    ? `"img title" "img tech" "img description" "img button"`
    : `"title img" "tech img" "description img" "button img"`;

  return (
    <article
      className="sm:grid sm:gap-x-4 mb-24 sm:mb-16"
      style={{ gridTemplateAreas }}
    >
      <a
        href={externalUrl}
        target="_blank"
        className={
          "overflow-hidden w-72 h-72 md:w-80 md:h-80 block mx-auto rounded-lg relative group [grid-area:_img] mb-3 " +
          sliInStyle
        }
      >
        <div className="absolute opacity-0 bg-accent-600 group-hover:opacity-90 w-full h-full z-10 transition duration-500" />
        <div className=" absolute opacity-0 group-hover:opacity-100 w-full h-full z-20 transition duration-300 flex justify-center items-center">
          <span className="font-bold text-xl pr-1">{t("see-website")}</span>
          <FiExternalLink className="font-bold text-xl" />
        </div>
        <div className="relative w-full h-full group-hover:scale-110 transition duration-500">
          <Image
            className="object-cover"
            fill={true}
            sizes="(max-width: 768px) 288px, 320px"
            src={img}
            alt={title}
          />
        </div>
      </a>

      <div className="flex flex-wrap gap-2 pb-4 [grid-area:_tech] justify-center sm:justify-start items-start">
        {stack.map((stackName) => {
          return (
            <p
              key={stackName}
              className="bg-primary-light rounded-lg text-sm px-3 py-1"
            >
              {stackName}
            </p>
          );
        })}
      </div>

      <div className="ml-4 mb-4 sm:mb-3 [grid-area:_title]">
        <Underline variant="smaller">
          <h3>{title}</h3>
        </Underline>
      </div>

      <div
        ref={ref}
        className="sm:text-lg mx-2 sm:mx-0 sm:mt-2 [grid-area:_description] prose prose-base prose-invert hover:prose-a:text-accent"
      >
        {description}
      </div>

      <div className="flex justify-start gap-3 mt-5 items-center [grid-area:_button]">
        {projectLinks.map((links) => {
          return <ProjectExternalLinkButton {...links} key={links.url} />;
        })}
      </div>
    </article>
  );
}
