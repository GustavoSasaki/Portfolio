import { Underline } from "../Underline";
import { Project, ProjectBox } from "./ProjectBox";
import { FiExternalLink } from "react-icons/fi"
export function Projects() {
    return (
        <section className="container py-8">
            <div className="ml-4 mb-5">
                <Underline variant="small"><h1>Projects</h1></Underline>
            </div>

            {projects.map((project) => {
                return <ProjectBox {...project} key={project.title} />
            })}
        </section>
    )
}



const projects: Project[] = [
    {
        img: "https://ngchltiyfhxkbpitthto.supabase.co/storage/v1/object/public/portfolio/gamehongo.png",
        title: "GameHongo",
        stack: ["NextJS", "React", "MaterialUi", "Typescript", "NodeJS", "PostgresSQL", "Redis", "API Calls"],
        internalUrl: '.',
        externalUrl: "https://gamehongo.com/",
        projectLinks: [{
            url: "https://gamehongo.com/",
            name: "View it here",
            icon: <FiExternalLink />
        }],
        description: "The best way of learning a language is actually using it. GameHongo is a list-like system in which users can rate how difficult it is the Japanese in games or YouTube channels."
    },
] 