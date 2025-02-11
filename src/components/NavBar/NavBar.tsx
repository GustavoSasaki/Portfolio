import { MutableRefObject, useEffect, useState } from "react";
import MobileNav from "./MobileNav";
import { useTranslation } from "next-i18next";
import { useSectionView } from "@/hooks/useSectionView";
import Hamburger from 'hamburger-react'
import localFont from "@next/font/local";
import Link from "next/link";
import { scrollToHome, scrollToPosition } from "./scrollToPosition";


export const japFont = localFont({
  src: "../../util/NotoSansJP-VariableFont_wght.ttf",
  variable: "--font-jap",
});


export interface NavRefs {
  heroRef: MutableRefObject<HTMLInputElement | null>;
  contactRef: MutableRefObject<HTMLInputElement | null>;
  aboutRef: MutableRefObject<HTMLInputElement | null>;
  projectsRef: MutableRefObject<HTMLInputElement | null>;
}
export function NavBar({
  heroRef,
  contactRef,
  aboutRef,
  projectsRef,
}: NavRefs) {
  const [openMobile, setOpenMobile] = useState(false);
  const { t } = useTranslation("nav");
  const viewSection = useSectionView({ heroRef, contactRef, aboutRef, projectsRef })

  return (
    <header
      className={`sticky top-0 z-40 w-full h-14 border-b-[1px] border-primary-lighter
                 bg-primary  flex items-center shadow-2xl`}
    >
      <nav className="flex justify-between items-center gu-container text-secondary ">
        <HomeButton />
        <MobileNav
          open={openMobile}
          setOpen={setOpenMobile}
          contactRef={contactRef}
          aboutRef={aboutRef}
          projectsRef={projectsRef}
          heroRef={heroRef}
        />


        <div
          className={`sm:hidden relative z-20 ${openMobile ? "text-accent-400" : ""
            }`}>
          <Hamburger toggled={openMobile} toggle={setOpenMobile} />


        </div>

        <div className="sm:flex justify-between items-center gap-3 hidden ml-auto">
          <NavLink href={"about"} inView={viewSection === 'about'}>
            <p>{t("about")}</p>
          </NavLink>
          <NavLink href={"projects"} inView={viewSection === 'projects'}>
            <p>{t("projects")}</p>
          </NavLink>
          <NavLink href={"contact"} inView={viewSection === 'contact'}>
            <p>{t("contact")}</p>
          </NavLink>
          <Link
            href={"/blog"}
            className={`capitalize text-base font-semibold hover:text-accent hidden `}
          >
            <p>{t("blog")}</p>
          </Link>

        </div>
      </nav>
    </header>
  );
}

function NavLink({
  children,
  inView,
  href,
}: {
  children: JSX.Element[] | JSX.Element;
  inView: boolean
  href: string
}) {

  const [isSection, setIsSection] = useState(false)
  useEffect(() => {
    setIsSection(!!document.getElementById(href))
      , [isSection]
  })


  return (
    <Link
      href={isSection ? href : "/#" + href}
      onClick={event => {
        if (isSection)
          scrollToPosition({ event, id: href })
      }}
      className={`capitalize text-base font-semibold hover:text-accent ${inView ? 'text-primary-lightest' : ''} `}
    >
      {children}
    </Link>
  );
}

export function HomeButton() {
  return (
    <Link href="/" className="text-xl font-semibold "
      onClick={event => scrollToHome(event)}
      aria-label="Gustavo Sasaki"
    >
      <span className="z-20 relative">Gus</span>
      <span
        className={`text-accent-400 font-bold text-3xl mx-[-10px] z-10 relative ${japFont.className} `}
        style={{
          maskImage:
            "radial-gradient(529.42% 80.77% at 50% 19.23%, #D9D9D9 0%, rgba(234, 220, 220, 0.00) 80%)",
          WebkitMaskImage:
            "radial-gradient(529.42% 80.77% at 50% 19.23%, #D9D9D9 0%, rgba(234, 220, 220, 0.00) 80%)",
        }}
      >
        木
      </span>
      <span className="z-20 relative ">avo Sasaki</span>
    </Link>
  );
}