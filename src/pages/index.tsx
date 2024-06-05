import { MainStack } from "@/components/Hero/MainStack/MainStack";
import { Technologies } from "@/components/Technologies/Technologies";
import {  NavRefs } from "@/components/NavBar/NavBar";
import { useRef } from "react";
import About from "@/components/About/About";
import Contact from "@/components/Contact/Contact";
import Projects from "@/components/Projects/Projects";
import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Hero from "@/components/Hero/Hero";
import { SiteLayout } from "@/components/SiteLayout";

export default function Home() {
  const navRefs: NavRefs = {
    contactRef: useRef(null),
    aboutRef: useRef(null),
    projectsRef: useRef(null),
    heroRef: useRef(null),
  };
  return (
    <SiteLayout navRefs={navRefs}>
      <div className="bg-primary-light">
        <div className="bg-primary pb-24">
          <Hero variant={"back"} ref={navRefs.heroRef} />
        </div>

        <MainStack />
        <About ref={navRefs.aboutRef} />
      </div>
      <Technologies />
      <div className="from-primary bg-gradient-to-b to-primary-light">
        <Projects ref={navRefs.projectsRef} />
        <Contact ref={navRefs.contactRef} />
      </div>
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
