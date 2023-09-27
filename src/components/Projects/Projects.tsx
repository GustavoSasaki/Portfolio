import { Underline } from "../Underline";
import { Project, ProjectBox } from "./ProjectBox";
import { FiExternalLink } from "react-icons/fi"
import { forwardRef, RefObject, useRef } from "react";


const Projects = forwardRef((props, ref) => {

    return (
        <section ref={ref as RefObject<HTMLDivElement>} className="gu-container py-8">
            <div className="ml-4 mb-5 sm:mb-8">
                <Underline variant="small"><h1>Projects</h1></Underline>
            </div>

            {projects.map((project, index) => {
                return <ProjectBox {...project} key={project.title} index={index} />
            })}
        </section>
    )
})



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
        description: (
            <>
                <p className=" text-xl">
                    <strong>The best way of learning a language is actually using it. </strong>
                </p>
                <p >
                    In GameHongo you can find games and channels suitable for your current japanese level.
                    The website is a list-like system in which users can rate how difficult is the language of games and videos.
                </p>
                <p >
                    There was a lot of care to ensure the user experience was snap and intuitive.
                </p>
                <ul>
                    <li>It was utilized redis for caching common searches</li>
                    <li>Every edition on information utilizes optimistic updates</li>
                    <li>Pages have server or static rendering</li>
                    <li>Responsive Design</li>
                    <li>OAuth Login</li>
                </ul>
            </>)
    },
    {
        img: "https://ngchltiyfhxkbpitthto.supabase.co/storage/v1/object/public/portfolio/amdocs.jpg",
        title: "Creation of telephony packages",
        stack: ["Java", "Spring", "jQuery", "OracleSQL", "HTML", "javascript", "PLSQL"],
        internalUrl: '.',
        externalUrl: "https://www.amdocs.com/",
        projectLinks: [{
            url: "https://www.amdocs.com/",
            name: "View it here",
            icon: <FiExternalLink />
        }],
        description: (<>
            <p> While working in Amdocs, I participate in the development of an web tool for creation telephony packages to Oi Company.</p>
            <p>I was the main back-end developer in the team. So I mostly worked on the spring boot java server and the oracleSQL database. But sometimes, I helped in the implementation of new pages with HTML/jQuery.</p>
            <p>I also created a bash tool for converting GitLab commits to ClearCase. Greatly improving the velocity of building new releases.</p>
        </>)
    },
    {
        img: "https://ngchltiyfhxkbpitthto.supabase.co/storage/v1/object/public/portfolio/heroCreationAI.png",
        title: "Hero Creation AI",
        stack: ["Angular", "React", "Tailwind", "Typescript", "PostgresSQL", "API Calls", "NodeJS"],
        internalUrl: '.',
        externalUrl: "https://hero-front-end.vercel.app/",
        projectLinks: [{
            url: "https://hero-front-end.vercel.app/",
            name: "View it here",
            icon: <FiExternalLink />
        }],
        description: (
            <>
                <p className=" text-xl">
                    <strong>Create your Super Hero with just one click </strong>
                </p>
                <p >
                    In this website you can quickly create a new hero with AI generated image and backstory.
                    The project was utilized to improve my front-end and design skills.
                </p>
                <p>
                    One challenge that I faced was that AI generation was taking too much time. To resolve this:
                </p>
                <ul>
                    <li>I parallelize the backstory and image generation.</li>
                    <li> I added a spinning wheel and loading bar.</li>
                </ul>
                <p>
                    {"According to "} <a href="https://www.goodreads.com/en/book/show/61398962">Irene Pereyra</a>, after 5 seconds of waiting you have to show the user that the system is progressing and not just stuck.
                </p>

            </>)
    },
]


Projects.displayName = 'Projects';
export default Projects;