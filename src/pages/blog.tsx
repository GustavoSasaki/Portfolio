import { NavRefs } from "@/components/NavBar/NavBar";
import { useRef } from "react";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { Title } from "@/components/Blog/Title";
import { Articles } from "@/components/Blog/Articles";
import { SiteLayout } from "@/components/SiteLayout";
import { getAllArticles } from "@/app/util/DynamoClient";


export default function Blog( { articles }: InferGetStaticPropsType<typeof getStaticProps>) {
    const navRefs: NavRefs = {
        contactRef: useRef(null),
        aboutRef: useRef(null),
        projectsRef: useRef(null),
        heroRef: useRef(null),
    };
    return (
        <SiteLayout navRefs={navRefs}>
            <Title />
            <Articles articles={articles} />
        </SiteLayout>
    );
}


export const getStaticProps: GetStaticProps = async ({ locale }) => {
    const articles = await getAllArticles() || []

    return ({
        props: {
            articles,
            ...(await serverSideTranslations(locale ?? "en", [
                "common",
                "nav",
            ])),
        },
    })
};
