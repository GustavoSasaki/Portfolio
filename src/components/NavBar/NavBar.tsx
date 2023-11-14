import { japFont } from "@/pages";
import { MutableRefObject, useState } from "react";
import { MdMenu } from "react-icons/md";
import MobileNav from "./MobileNav";
import { scrollToPosition } from "./scrollToPosition";
import useScrollDirection from "./useScrollDirection";
import { useTranslation } from "next-i18next";

interface NavRefs {
  contact: MutableRefObject<HTMLInputElement | null>;
  about: MutableRefObject<HTMLInputElement | null>;
  projects: MutableRefObject<HTMLInputElement | null>;
}
export function NavBar({
  contact: contactRef,
  about: aboutRef,
  projects: projectsRef,
}: NavRefs) {
  const scrollDirection = useScrollDirection();
  const [openMobile, setOpenMobile] = useState(false);
  const { t } = useTranslation("nav");

  return (
    <header
      className={`sticky ${
        scrollDirection === "down" ? "-top-14" : "top-0"
      } transition-all duration-1000  
            z-40 w-full h-14 bg-primary-light flex items-center shadow`}
    >
      <nav className="flex justify-between items-center gu-container text-secondary ">
        <HomeButton />
        <MobileNav
          open={openMobile}
          setOpen={setOpenMobile}
          contactRef={contactRef}
          aboutRef={aboutRef}
          projectsRef={projectsRef}
        />

        <button
          className={`sm:hidden relative z-20 ${
            openMobile ? "text-accent-400" : ""
          }`}
          onClick={() => setOpenMobile(!openMobile)}
        >
          <MdMenu className="ml-auto w-7 h-7" />
        </button>

        <div className="sm:flex justify-between items-center gap-3 hidden ml-auto">
          <NavLink onClick={() => scrollToPosition(aboutRef)}>
            <p>{t("about")}</p>
          </NavLink>
          <NavLink onClick={() => scrollToPosition(projectsRef)}>
            <p>{t("portfolio")}</p>
          </NavLink>
          <NavLink onClick={() => scrollToPosition(contactRef)}>
            <p>{t("contact")}</p>
          </NavLink>
        </div>
      </nav>
    </header>
  );
}

function NavLink({
  children,
  onClick,
}: {
  children: JSX.Element[] | JSX.Element;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="capitalize text-base font-semibold hover:text-accent-400"
    >
      {children}
    </button>
  );
}

export function HomeButton() {
  return (
    <a href="." className="text-xl font-semibold "
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
      <span className="z-20 relative">avo Sasaki</span>
    </a>
  );
}

//export const openResume = () => window.open(resumeUrl, "_blank", "noreferrer")
