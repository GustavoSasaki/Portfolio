import { forwardRef, RefObject, useRef } from "react";
import { Underline } from "../Underline";
import { useTranslation } from "next-i18next";
import Image from 'next/image'
import { useInView } from "framer-motion";

const About = forwardRef((props, ref) => {
  const { t } = useTranslation("about");

  const observerRef = useRef(null);
  const isInView = useInView(observerRef, { once: true })
  const slideWhenVisible = isInView ? " transition-all duration-1000 " : " opacity-0 translate-y-[50px]"

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
        <div className="sm:w-[25%] max-w-[250px] mx-auto my-7 flex flex-col-reverse sm:flex-col">
          <div
            className="h-[322px] bg-gradient-to-tr from-accent-200 to-purple-300 rounded-lg relative w-full">
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
          <div ref={observerRef} className="w-1 h-1"></div>
        </div>

        <div className="prose prose-base prose-invert font-medium mx-auto hover:prose-a:text-accent sm:prose-lg flex-[1_0_0]">

          <p>
            <span>{t("grad.introduction")}</span>
            <a href="https://www5.usp.br/">{t("grad.usp")}</a>
            {t("grad.rest")}
          </p>
          <p>{t("follow")}</p>
          <p >{t("hobby")}</p>
        </div>
      </div>
    </section>
  );
});

About.displayName = "About";
export default About;
