import { BiLogoGithub, BiLogoLinkedinSquare } from "react-icons/bi";
import { BiSolidUpArrow } from "react-icons/bi";
import { ResumeButton } from "../SocialMediaButton/ResumeButton";
import { SocialMediaButton } from "../SocialMediaButton/SocialMediaButton";
import { linkedinUrl, githubUrl } from "../SocialMediaButton/SocialMediaUrl";
import { HomeButton } from "../NavBar/NavBar";
import { useTranslation } from "next-i18next";

export function Footer() {
  return (
    <footer className=" h-min-6 bg-primary pt-4 pb-3  border-t-[1px] border-primary-lighter">
      <div className="flex justify-between items-center gap-1 gu-container">
        <a
          href="#hero"
          className="h-[70px] w-[70px] bg-accent-400 rounded-full group md:hidden mb-2 flex justify-center items-center"
          title="Home"
        >
          <BiSolidUpArrow
            className="h-[40px] w-[40px]  text-secondary
                        transition-all duration-200 hover:duration-300 linear group-hover:-translate-y-1"
          />
        </a>
        <div className=" hidden md:flex items-center">
          <HomeButton />
        </div>

        <div className=" hidden md:flex items-center">
          <Copyright />
        </div>

        <div className="ml-auto md:ml-0 flex items-center ">
          <SocialMediaButton href={linkedinUrl} title="LinkedIn">
            <BiLogoLinkedinSquare className="h-[45px] w-[45px] text-secondary" />
          </SocialMediaButton>

          <SocialMediaButton href={githubUrl} title="Resume" className="mr-3">
            <BiLogoGithub className="h-[40px] w-[40px] text-secondary" />
          </SocialMediaButton>

          <ResumeButton variant={"footer"} />
        </div>
      </div>

      <div className=" md:hidden gu-container">
        <Copyright />
      </div>
    </footer>
  );
}

function Copyright() {
  const { t } = useTranslation("common");

  return (
    <p className="text-secondary-darker font-medium text-sm">{t("footer")}</p>
  );
}
