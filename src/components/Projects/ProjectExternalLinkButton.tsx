import { ProjectLink } from "./ProjectBox";

export function ProjectExternalLinkButton({ url, name, icon }: ProjectLink) {
    return (
        <a href={url} target="_blank" title={name}
            className="inline-block group transition duration-300 transform"
        >
            <div className={`border-accent-600 border-4 rounded-3xl px-5 py-1
                flex justify-center items-center
                group-hover:bg-accent-600  group-focus:bg-accent-600`}
            >
                <p className="text-accent text-sm font-semibold
                group-hover:text-secondary group-focus:text-secondary"
                >
                    {name}
                </p>
            </div>
        </a>
    )
}