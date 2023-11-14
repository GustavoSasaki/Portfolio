import { resumeUrl } from "./SocialMediaUrl";
import { useTranslation } from "next-i18next";

type Variant = "hero" | "footer";

export function ResumeButton({ variant }: { variant: Variant }) {
  const size = getSize(variant);

  const { t } = useTranslation("common");

  return (
    <a
      href={resumeUrl}
      target="_blank"
      title="Resume"
      className="group transition duration-300 transform hover:scale-110 flex items-center"
    >
      <div
        className={`border-accent-600 border-4 rounded-2xl ${size}
                flex justify-center items-center
                group-hover:bg-accent-600  group-focus:bg-accent-600`}
      >
        <p
          className="text-accent font-medium sm:text-xl
                    group-hover:text-secondary group-focus:text-secondary"
        >
          {t("resume")}
        </p>
      </div>
    </a>
  );
}

function getSize(variant: Variant) {
  if (variant === "hero") return " h-[2.25rem] w-[6.25rem] sm:h-11 sm:w-32";
  else return "  h-[2.4375rem] w-[6.77081rem] ";
}
