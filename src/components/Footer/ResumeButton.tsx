export function ResumeButton() {
    return (
        <a href={resumeUrl} target="_blank" title="Resume"
            className="inline-block group transition duration-300 transform hover:scale-110"
        >
            <div className="border-accent-600 border-4 rounded-2xl  h-[2.4375rem] w-[6.77081rem] 
                flex justify-center items-center
                group-hover:bg-accent-600  group-focus:bg-accent-600 "
            >
                <p className="text-accent font-medium 
                    group-hover:text-secondary group-focus:text-secondary"
                >
                    Resume
                </p>
            </div>
        </a>
    )
}


const resumeUrl = "https://docs.google.com/document/d/e/2PACX-1vTloOwmncFD6-RLPCoJPg7S2YB_rL7G8DK9DlZbyUpsMD-_zGMRkfy5taKZWLaoHMhXIQ0-lMoUn3Y8/pub"
