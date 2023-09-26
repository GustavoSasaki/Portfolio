import { Underline } from "../Underline";
import { Tech, TechBox } from "./TechBox";
import { DiJavascript } from 'react-icons/di';
import { DiHtml5, DiCss3, DiReact, DiNodejsSmall, DiPostgresql } from 'react-icons/di';
import { DiTerminal, DiGit, DiJava } from 'react-icons/di';
import { TbBrandNextjs } from 'react-icons/tb'
import { BiLogoTailwindCss, BiLogoSpringBoot } from 'react-icons/bi'
import { useTrackVisibility } from "react-intersection-observer-hook";
import { useSlidInState } from "../useSlidInStyle";

export function Technologies() {

    const [observerRef, { wasEverVisible }] = useTrackVisibility();
    let slideState = useSlidInState({ wasEverVisible})
    const slideWhenVisible = GetSlideInClass(slideState)


    return (
        <section className="gu-container pt-8 mb-12">
            <div className="ml-4 mb-5">
                <Underline variant="small"><h1>Technologies</h1></Underline>
            </div>

            <div className="flex flex-wrap justify-between gap-y-4">
                {technologies.map((tech,index) => {
                    const delay = slideState === 'active' ? index * 100 + "ms" : "0ms"
                    return (
                        <div key={tech.name} className={`w-1/3 sm:w-1/4 md:w-1/6 `+slideWhenVisible}
                        style={{transitionDelay:delay}}>
                            <TechBox {...tech} />
                        </div>
                    )
                })}
            </div>

            <div ref={observerRef} />
        </section>
    )
}

function GetSlideInClass(state: "pre" | "active" | "locked" | undefined) {

    if(!state || state === 'locked') return ''
    if (state === 'active') return " transition-all duration-1000"

    return " opacity-0 translate-x-[50px]"
}



const technologies: Tech[] = [
    {
        name: 'Javascript',
        icon: <DiJavascript />
    },
    {
        name: 'HTML5',
        icon: <DiHtml5 />,
    },
    {
        name: 'CSS3',
        icon: <DiCss3 />
    },
    {
        name: 'React',
        icon: <DiReact />
    },
    {
        name: 'NextJs',
        icon: <TbBrandNextjs />
    },
    {
        name: 'TailwindCSS',
        icon: <BiLogoTailwindCss />
    },
    {
        name: 'NodeJS',
        icon: <DiNodejsSmall />
    },
    {
        name: 'PostgreSQL',
        icon: <DiPostgresql />
    },
    {
        name: 'Bash',
        icon: <DiTerminal />
    },
    {
        name: 'Java',
        icon: <DiJava />
    },
    {
        name: 'Spring',
        icon: <BiLogoSpringBoot />
    },
    {
        name: 'Git',
        icon: <DiGit />
    }
] 