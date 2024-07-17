import { NavRefs } from "@/components/NavBar/NavBar";
import { SiteLayout } from "@/components/SiteLayout";
import { useRef } from "react";
import { ArticleNav, LinkI } from "./ArticleNav";

type Props = {
    children: JSX.Element | JSX.Element[]
    mainLinks: LinkI[]
    title: String
};

export function ArticleLayout({ children, mainLinks, title }: Props) {

    const navRefs: NavRefs = {
        contactRef: useRef(null),
        aboutRef: useRef(null),
        projectsRef: useRef(null),
        heroRef: useRef(null),
    };
    return (
        <SiteLayout navRefs={navRefs}>
            <article className=" pt-[6rem] pb-2 gu-container-blog ">
                <h3 className=" text-4xl font-semibold mb-10 text-secondary">{title}</h3>
                <div className="flex relative gap-x-4 flex-row">

                    {children}

                    <ArticleNav mainLinks={mainLinks} current={""} />
                </div>
            </article>
        </SiteLayout>
    )
}