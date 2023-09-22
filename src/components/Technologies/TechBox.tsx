export interface Tech {
    name: string;
    icon: JSX.Element
}


export function TechBox({ name, icon }: Tech) {
    return (
        <div className=" w-1/3 sm:w-1/4 md:w-1/6 [&>svg:first-child]:w-20 [&>svg:first-child]:h-20 [&>svg:first-child]:mx-auto">
            {icon}
            <p className="text-secondary-dark text-center">{name}</p>
        </div>
    )
}