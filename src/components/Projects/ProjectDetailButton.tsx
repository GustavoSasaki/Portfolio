export function ProjectDetailButton({ internalUrl,projectTitle }: {internalUrl:string,projectTitle:string}) {
    return (
        <a href={internalUrl} title={projectTitle}
            className="inline-block group transition duration-300 transform"
        >
            <div className={` rounded-2xl px-5 py-[0.6rem]
                flex justify-center items-center
                bg-accent group-hover:bg-accent-600  group-focus:bg-accent-600`}
            >
                <p className="text-sm font-semibold">
                    Details
                </p>
            </div>
        </a>
    )
}