import { DiRedis } from "react-icons/di";
import { DiNodejsSmall } from "react-icons/di";
import { DiPostgresql } from "react-icons/di";
import { DiReact } from "react-icons/di";
import { useTranslation } from "next-i18next";
export function MainStack() {
  const { t } = useTranslation("hero");

  return (
    <section
      className={`-mt-[68px] max-w-[min(600px,_calc(100%_-_32px))] mx-auto`}
      aria-hidden={true}
    >
      <h2 className="text-base font-bold text-secondary-dark pl-2">
        {t("main-stack")}
      </h2>
      <div className=" bg-primary-lighter rounded-xl  block px-4 py-1 border-secondary-700 border-b-2">
        <div className="flex justify-around items-center">
          <DiReact className={className} />
          <DiNodejsSmall className={className} />
          <DiRedis className={className} />
          <DiPostgresql className={className} />
        </div>
      </div>
    </section>
  );
}

//icon className
const className = "text-secondary h-20 w-20";
