import { Inter } from "@next/font/google";
import { Footer } from "@/components/Footer/Footer";
import { MainStack } from "@/components/Hero/MainStack/MainStack";
import { Technologies } from "@/components/Technologies/Technologies";
import { NavBar, NavRefs } from "@/components/NavBar/NavBar";
import { HeadBox } from "@/components/HeadBox";
import { useRef } from "react";
import About from "@/components/About/About";
import Contact from "@/components/Contact/Contact";
import Projects from "@/components/Projects/Projects";
import localFont from "@next/font/local";
import Hero from "@/components/Hero/Hero";

//to-do:
//use better photo
//create detail project page
//rewrite amdocs pt ; cookies en-pt
// colocar araucaria
// tomodachi

const inter = Inter({ subsets: ["latin"] });
export const japFont = localFont({
  src: "../util/NotoSansJP-VariableFont_wght.ttf",
  variable: "--font-jap",
});

export default function Home() {
  const navRefs : NavRefs= {
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
          <div className="bg-primary-light">
            <div className="bg-primary pb-24">
              <Hero variant={"main"} ref={navRefs.heroRef}  />
            </div>

            <MainStack />
            <About ref={navRefs.aboutRef} />
          </div>
          <Technologies />
          <Projects ref={navRefs.projectsRef} />
          <Contact ref={navRefs.contactRef} />
        </main>

        <Footer />
      </div>
    </>
  );
}