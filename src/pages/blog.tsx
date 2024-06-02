import { Inter } from "@next/font/google";
import { Footer } from "@/components/Footer/Footer";
import { NavBar, NavRefs } from "@/components/NavBar/NavBar";
import { HeadBox } from "@/components/HeadBox";
import { useRef } from "react";
import localFont from "@next/font/local";
import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { Title } from "@/components/Blog/Title";

const inter = Inter({ subsets: ["latin"] });
export const japFont = localFont({
    src: "../util/NotoSansJP-VariableFont_wght.ttf",
    variable: "--font-jap",
});

export default function Blog() {
    const navRefs: NavRefs = {
        contactRef: useRef(null),
        aboutRef: useRef(null),
        projectsRef: useRef(null),
        heroRef: useRef(null),
    };
    return (
        <>
            <HeadBox />
            <NavBar {...navRefs} />
            <div
                className={`flex flex-col justify-between items-stretch bg-primary min-h-screen ${inter.className} text-secondary font-medium`}
            >
                <main className=" grow ">

                    <Title />
                </main>

                <Footer />
            </div>
        </>
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
