type ButtonInput = { children: JSX.Element} & React.LinkHTMLAttributes<HTMLAnchorElement> 

export function SocialMediaButton({ children, ...attr }: ButtonInput) {

    return (
        <a {...attr} target="_blank" className={"inline-block"+className+attr?.className}>
            {children}

        </a>
    );
}


//hover class
const className=" hover:[&_svg]:text-accent  focus:[&_svg]:text-accent active:[&_svg]:text-accent transition duration-300 transform hover:scale-125 focus:scale-125 active:scale-125 ease-in-out "