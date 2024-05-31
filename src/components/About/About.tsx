import { forwardRef, RefObject } from "react";
import { useTrackVisibility } from "react-intersection-observer-hook";
import { useSlidInStyle } from "../useSlidInStyle";
import { Underline } from "../Underline";
import { useTranslation } from "next-i18next";
import Image from 'next/image'

const About = forwardRef((props, ref) => {
  const { t } = useTranslation("about");

  const [observerRef, { wasEverVisible }] = useTrackVisibility();
  let slideWhenVisible = useSlidInStyle({
    wasEverVisible,
    preStyle: " opacity-0 translate-y-[50px]",
  });

  return (
    <section
      ref={ref as RefObject<HTMLDivElement>}
      className="gu-container pt-14 bg-primary-light pb-8"
      id="about"
    >
      <div className="ml-4 sm:mb-8">
        <Underline variant="small">
          <h2>{t("title")}</h2>
        </Underline>
      </div>

      <div className={"sm:flex sm:gap-8"}>
        <div className="h-[322px] bg-gradient-to-tr from-accent-200 to-purple-300 rounded-lg relative max-w-[250px]  flex-[0_0_25%] mx-auto my-7">
            <Image
              alt="Gustavo Sasaki Roncaglia"
              src="https://ngchltiyfhxkbpitthto.supabase.co/storage/v1/object/public/portfolio/photo"
              fill={true}
              sizes="(max-width: 640px) 250px, (max-width: 1048px) 25vw, 250px"
              className={
                "object-cover rounded-lg mix-blend-darken" +
                slideWhenVisible
              }
            />

        </div>

        <div className="prose prose-base prose-invert font-medium mx-auto hover:prose-a:text-accent sm:prose-lg flex-[1_0_0]">
          <p>{t("introduction")}</p>

          <p>
            <span>{t("grad.introduction")}</span>
            <a href="https://www5.usp.br/">{t("grad.usp")}</a>
            {t("grad.rest")}
          </p>
          <p ref={observerRef}>{t("hobby")}</p>
        </div>
      </div>
    </section>
  );
});

About.displayName = "About";
export default About;
