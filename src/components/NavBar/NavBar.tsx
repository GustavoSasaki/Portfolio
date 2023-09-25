import { MutableRefObject } from 'react'
import { MdMenu } from 'react-icons/md'
import { scrollToPosition } from './scrollToPosition';
import useScrollDirection from './useScrollDirection';

interface NavRefs {
    contact: MutableRefObject<HTMLInputElement | null>,
    about: MutableRefObject<HTMLInputElement | null>,
    projects: MutableRefObject<HTMLInputElement | null>,
}
export function NavBar({ contact: contactRef, about: aboutRef, projects: projectsRef }: NavRefs) {
    const scrollDirection = useScrollDirection();

    return (

        <header className={`sticky ${scrollDirection === "down" ? "-top-12" : "top-0"} transition-all duration-1000  
            z-50 w-full h-12 bg-primary-light flex items-center shadow`}
        >

            <nav className="flex justify-between items-center gu-container text-secondary ">

                <HomeButton />
                <MdMenu className='ml-auto w-7 h-7 sm:hidden' />

                <div className='sm:flex justify-between items-center gap-3 hidden ml-auto'>
                    <NavLink onClick={() => scrollToPosition(aboutRef)}><p>about</p></NavLink>
                    <NavLink onClick={() => scrollToPosition(projectsRef)}><p>portfolio</p></NavLink>
                    <NavLink onClick={() => scrollToPosition(contactRef)}><p>contact</p></NavLink>
                </div>
            </nav>
        </header>
    )
}


function NavLink({ children, onClick }: { children: JSX.Element[] | JSX.Element, onClick: () => void }) {
    return (
        <button onClick={onClick} className='capitalize text-sm font-semibold hover:text-accent-400'>{children}</button>
    )
}

export function HomeButton(){
    return (
        <a href='.' className='text-sm font-semibold hover:text-accent-400'>Gustavo Sasaki</a>
    )
}

//export const openResume = () => window.open(resumeUrl, "_blank", "noreferrer")