import { Underline } from "../Underline";
import { ProjectDetailButton } from "./ProjectDetailButton";
import { ProjectExternalLinkButton } from "./ProjectExternalLinkButton";
import { FiExternalLink } from "react-icons/fi"
import { useTrackVisibility } from "react-intersection-observer-hook";
import { useSlidInStyle } from "../useSlidInStyle";

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


export function ProjectBox({ img, title, description, stack, internalUrl, externalUrl, projectLinks, index }: Project & { index: number }) {
    const isEven = index % 2 == 0

    const [observerRef, { wasEverVisible }] = useTrackVisibility();
    const preStyle = isEven ?  " opacity-0 translate-x-[-50px]" :  " opacity-0 translate-x-[50px]"
    let slideWhenVisible = useSlidInStyle({ wasEverVisible, preStyle })
    
    const gridTemplateAreas = isEven
    ? `"img title" "img tech" "img description" "img buttom"`
    : `"title img" "tech img" "description img" "buttom img"`

    return (
        <article className="sm:grid sm:gap-x-4 mb-12"
            style={{ gridTemplateAreas }}
        >

            <a href={externalUrl} target="_blank" className={"overflow-hidden w-72 h-72 block mx-auto rounded-lg relative group [grid-area:_img] mb-3"+slideWhenVisible}>
                <div className="absolute opacity-0 bg-accent-600 group-hover:opacity-90 w-full h-full z-10 transition duration-500" />
                <div className=" absolute opacity-0 group-hover:opacity-100 w-full h-full z-20 transition duration-300 flex justify-center items-center">
                    <span className="font-bold text-xl pr-1">See Website</span>
                    <FiExternalLink className="font-bold text-xl" />
                </div>
                <img className="w-full h-full group-hover:scale-110 transition duration-500" src={img} alt={title} />
            </a>

            <div className="flex flex-wrap gap-2 pb-4 [grid-area:_tech]">
                {stack.map((stackName) => {
                    return <p key={stackName} className="bg-primary-light rounded-lg text-sm px-3 py-1">
                        {stackName}
                    </p>
                })}
            </div>

            <div className="ml-4 mb-4 sm:mb-3 [grid-area:_title]">
                <Underline variant="smaller"><h2>{title}</h2></Underline>
            </div>

            <p ref={observerRef} className="sm:text-lg sm:mt-2 [grid-area:_description]">
                {description}
            </p>

            <div className="flex justify-start gap-3 mt-5 sm:mt-1 items-center ml-4 [grid-area:_buttom]">
                <ProjectDetailButton internalUrl={internalUrl} projectTitle={title} />
                {projectLinks.map((links) => {
                    return <ProjectExternalLinkButton {...links} key={links.url} />
                })}

            </div>
        </article>
    )
}
