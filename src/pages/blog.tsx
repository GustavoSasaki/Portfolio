import { NavRefs } from "@/components/NavBar/NavBar";
import { useRef } from "react";
import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { Title } from "@/components/Blog/Title";
import { Articles } from "@/components/Blog/Articles";
import { SiteLayout } from "@/components/SiteLayout";

export default function Blog() {
    const navRefs: NavRefs = {
        contactRef: useRef(null),
        aboutRef: useRef(null),
        projectsRef: useRef(null),
        heroRef: useRef(null),
    };
    return (
        <SiteLayout navRefs={navRefs}>
            <Title />
            <Articles />
        </SiteLayout>
    );
}

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
    props: {
        ...(await serverSideTranslations(locale ?? "en", [
            "common",
            "hero",
            "contact",
            "nav",
            "about",
            "projects",
        ])),
    },
});
