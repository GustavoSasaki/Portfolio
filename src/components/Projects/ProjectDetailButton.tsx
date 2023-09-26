import { FiExternalLink } from "react-icons/fi"
import { GoRightIcon } from "../GoRightIcon"
export function ProjectDetailButton({ internalUrl, projectTitle }: { internalUrl: string, projectTitle: string }) {
    return (
        <a href={internalUrl} title={projectTitle}
            className={` rounded-2xl px-5 py-2
            flex justify-center items-center
            bg-accent hover:bg-accent-600  focus:bg-accent-600 hover:pl-3 
            group transition-all duration-300 transform`}
        >

            <p className=" font-bold transition-all duration-300 group-hover:mr-4">
                Details
            </p>

            <GoRightIcon>
                <FiExternalLink />
            </GoRightIcon>
        </a>
    )
}