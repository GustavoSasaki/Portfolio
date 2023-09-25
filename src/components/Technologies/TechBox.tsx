export interface Tech {
    name: string;
    icon: JSX.Element
}


export function TechBox({ name, icon }: Tech) {
    return (
        <div className=" w-1/3 sm:w-1/4 md:w-1/6 
        [&>svg:first-child]:w-full [&>svg:first-child]:h-full 
        [&>svg:first-child]:max-w-20 [&>svg:first-child]:max-h-20
        sm:[&>svg:first-child]:max-w-28 sm:[&>svg:first-child]:max-h-28 [&>svg:first-child]:mx-auto
        "
        >
            {icon}
            <p className="text-secondary-dark text-center">{name}</p>
        </div>
    )
}