import { SocialMediaButton } from "../SocialMediaButton/SocialMediaButton";
import { BiLogoGithub, BiLogoLinkedinSquare } from "react-icons/bi";
import { linkedinUrl, githubUrl } from "../SocialMediaButton/SocialMediaUrl";
import { Underline } from "../Underline";
import { ResumeButton } from "../SocialMediaButton/ResumeButton";
import { useTranslation } from "next-i18next";
import { forwardRef, RefObject } from "react";

interface Variants {
  variant: "back" | "main";
}


const Hero = forwardRef<HTMLDivElement, React.PropsWithChildren<Variants>>((props, ref) => {
  const variant = props.variant
  const { t } = useTranslation("hero");

  return (
    <section
      className=" pt-[7.75rem] pb-20"
      id="hero"
      style={{
        backgroundImage:
          "linear-gradient(to bottom, transparent,45%,#0c0a09) ," + bgImg,
      }}
      aria-label={"Gustavo Sasaki"}
      ref={ref as RefObject<HTMLDivElement>}
    >
      <div className="gu-container">
        <div className="mx-4">
          <div id="hero-title">
            <p className="text-secondary-dark text-sm sm:text-base pl-1">
              {t("hello")}
            </p>
            <div className="text-4xl sm:text-5xl font-bold">
              <h1 className="inline">Gustavo </h1>
              <span aria-hidden={true}>|</span>
              <br />
              <div className="pb-2" />
              <Underline variant="big">
                <p>{variant === "main" ? t("job.main") : t("job.back")}</p>
              </Underline>
            </div>
          </div>

          <div
            id="hero-social-links"
            className="flex justify-start items-centers mt-9"
          >
            <SocialMediaButton href={linkedinUrl} title="LinkedIn">
              <BiLogoLinkedinSquare className="h-[40px] w-[40px] text-secondary" />
            </SocialMediaButton>

            <SocialMediaButton
              href={githubUrl}
              title="GitHub"
              className="ml-1 mr-4"
            >
              <BiLogoGithub className="h-[40px] w-[40px]  text-secondary" />
            </SocialMediaButton>

            <ResumeButton variant={"hero"} />
          </div>

          <p className="text-secondary-dark mt-3 max-w-[36ch] sm:text-lg">
            {t("description")}
          </p>
        </div>
      </div>
    </section>
  );
})

const bgImg = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 80 40' width='80' height='40'%3E%3Cpath fill='%23263021' fill-opacity='0.42' d='M0 40a19.96 19.96 0 0 1 5.9-14.11 20.17 20.17 0 0 1 19.44-5.2A20 20 0 0 1 20.2 40H0zM65.32.75A20.02 20.02 0 0 1 40.8 25.26 20.02 20.02 0 0 1 65.32.76zM.07 0h20.1l-.08.07A20.02 20.02 0 0 1 .75 5.25 20.08 20.08 0 0 1 .07 0zm1.94 40h2.53l4.26-4.24v-9.78A17.96 17.96 0 0 0 2 40zm5.38 0h9.8a17.98 17.98 0 0 0 6.67-16.42L7.4 40zm3.43-15.42v9.17l11.62-11.59c-3.97-.5-8.08.3-11.62 2.42zm32.86-.78A18 18 0 0 0 63.85 3.63L43.68 23.8zm7.2-19.17v9.15L62.43 2.22c-3.96-.5-8.05.3-11.57 2.4zm-3.49 2.72c-4.1 4.1-5.81 9.69-5.13 15.03l6.61-6.6V6.02c-.51.41-1 .85-1.48 1.33zM17.18 0H7.42L3.64 3.78A18 18 0 0 0 17.18 0zM2.08 0c-.01.8.04 1.58.14 2.37L4.59 0H2.07z'%3E%3C/path%3E%3C/svg%3E"`;

Hero.displayName = "Hero";
export default Hero;