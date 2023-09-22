import { Underline } from "../Underline";
import { ProjectDetailButton } from "./ProjectDetailButton";
import { ProjectExternalLinkButton } from "./ProjectExternalLinkButton";

export interface ProjectLink {
    url: string;
    name: string;
    icon: JSX.Element
}

export interface Project {
    img: string;
    title: string;
    description: string;
    stack: string[];
    internalUrl: string;
    externalUrl: string;
    projectLinks: ProjectLink[]
}


export function ProjectBox({ img, title, description, stack, internalUrl, externalUrl, projectLinks }: Project) {
    return (
        <article>
            <a href={externalUrl} target="_blank">
                <img className="mx-auto w-72 h-72 rounded-lg" src={img} alt={title} />
            </a>

            <div className="flex flex-wrap gap-2 pt-3 pb-4">
                {stack.map((stackName) => {
                    return <p key={stackName} className="bg-primary-light rounded-lg text-sm px-3 py-1">
                        {stackName}
                    </p>
                })}
            </div>
            <div className="ml-4 mb-4">
                <Underline variant="smaller"><h2>{title}</h2></Underline>
            </div>

            <p>
                {description}
            </p>

            <div className="flex justify-start gap-3 mt-5 items-center ml-4">
                <ProjectDetailButton internalUrl={internalUrl} projectTitle={title} />
                {projectLinks.map((links) => {
                    return <ProjectExternalLinkButton {...links} />
                })}

            </div>
        </article>
    )
}
