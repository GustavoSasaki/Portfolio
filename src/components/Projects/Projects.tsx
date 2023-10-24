import { Underline } from "../Underline";
import { Project, ProjectBox } from "./ProjectBox";
import { FiExternalLink } from "react-icons/fi"
import { forwardRef, RefObject, useRef } from "react";
import { TFunction, useTranslation } from "next-i18next";

const Projects = forwardRef((props, ref) => {

    const { t } = useTranslation('projects')
    const projects = getProjects(t)

    return (
        <section ref={ref as RefObject<HTMLDivElement>} className="gu-container pt-8 pb-4 sm:pb-8">
            <div className="ml-4 mb-5 sm:mb-8">
                <Underline variant="small">
                    <h1>
                        {t('title')}
                    </h1>
                </Underline>
            </div>

            {projects.map((project, index) => {
                return <ProjectBox {...project} key={project.title} index={index} />
            })}
        </section>
    )
})


const getProjects = (t: TFunction) => {
    return [
        {
            img: "https://ngchltiyfhxkbpitthto.supabase.co/storage/v1/object/public/portfolio/gamehongo.png",
            title: "GameHongo",
            stack: ["NextJS", "React", "MaterialUi", "Typescript", "NodeJS", "PostgresSQL", "Redis", "API Calls"],
            internalUrl: '.',
            externalUrl: "https://gamehongo.com/",
            projectLinks: [{
                url: "https://gamehongo.com/",
                name: t('view-button'),
                icon: <FiExternalLink />
            }],
            description: (
                <>
                    <p className=" text-xl">
                        <strong>{t("gamehongo.subtitle")} </strong>
                    </p>
                    <p >
                        {t("gamehongo.description")}
                    </p>
                    <p >
                        {t("gamehongo.care-experience")}
                    </p>
                    <ul>

                        <li>{t("gamehongo.redis")}</li>
                        <li>{t("gamehongo.optimistic")}</li>
                        <li>{t("gamehongo.ssr")}</li>
                        <li>{t("gamehongo.responsive")}</li>
                        <li>{t("gamehongo.oauth")}</li>
                    </ul>
                </>)
        },
        {
            img: "https://ngchltiyfhxkbpitthto.supabase.co/storage/v1/object/public/portfolio/amdocs.jpg",
            title: t("amdocs.title"),
            stack: ["Java", "Spring", "jQuery", "OracleSQL", "HTML", "javascript", "PLSQL"],
            internalUrl: '.',
            externalUrl: "https://www.amdocs.com/",
            projectLinks: [{
                url: "https://www.amdocs.com/",
                name: t('view-button'),
                icon: <FiExternalLink />
            }],
            description: (<>
                <p>{t("amdocs.introduction")}</p>
                <p>{t("amdocs.main-task")}</p>
                <p>{t("amdocs.other-tasks")}</p>
            </>)
        },
        {
            img: "https://ngchltiyfhxkbpitthto.supabase.co/storage/v1/object/public/portfolio/heroCreationAI.png",
            title: t("hero-ai.title"),
            stack: ["Angular", "React", "Tailwind", "Typescript", "PostgresSQL", "API Calls", "NodeJS"],
            internalUrl: '.',
            externalUrl: "https://hero-front-end.vercel.app/",
            projectLinks: [{
                url: "https://hero-front-end.vercel.app/",
                name: t('view-button'),
                icon: <FiExternalLink />
            }],
            description: (
                <>
                    <p className=" text-xl">
                        <strong>{t("hero-ai.subtitle")}</strong>
                    </p>
                    <p >
                        {t("hero-ai.description")}
                    </p>
                    <p>
                        {t("hero-ai.challenges")}
                    </p>
                    <ul>
                        <li>{t("hero-ai.paralalized")}</li>
                        <li>{t("hero-ai.loading-bar")}</li>
                    </ul>
                    <p>
                        {t("hero-ai.according")}
                        <a href="https://www.goodreads.com/en/book/show/61398962">
                            Irene Pereyra
                        </a>
                        {t("hero-ai.irene")}
                    </p>

                </>)
        },
    ] as Project[]
}

Projects.displayName = 'Projects';
export default Projects;