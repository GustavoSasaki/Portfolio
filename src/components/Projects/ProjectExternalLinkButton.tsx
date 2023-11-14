import { ProjectLink } from "./ProjectBox";
import { GoRightIcon } from "../GoRightIcon";

export function ProjectExternalLinkButton({ url, name, icon }: ProjectLink) {
  return (
    <a
      href={url}
      target="_blank"
      title={name}
      className={`border-accent-600 border-4 rounded-3xl px-6 py-1
                group relative hover:pl-2
                flex justify-center items-center
                hover:bg-accent-600  focus:bg-accent-600
                transition-all ease-out duration-300`}
    >
      <p
        className="text-accent font-bold transition-all ease-out duration-300
                group-hover:text-secondary group-focus:text-secondary group-hover:mr-4"
      >
        {name}
      </p>

      <GoRightIcon>{icon}</GoRightIcon>
    </a>
  );
}
