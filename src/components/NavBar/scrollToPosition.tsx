import { isMobile } from 'react-device-detect';
import { getPrefersReducedMotion } from "./getPrefersReducedMotion";

export const scrollToPosition = ({ id, event }:
    {
        id: string
        event: React.MouseEvent<HTMLElement>
    }
) => {
    event.preventDefault();
    const reduceMotion = getPrefersReducedMotion();
    const targetElement = document.getElementById(id);

    if (!targetElement) return

    const NAV_BAR = 68
    const position = targetElement.getBoundingClientRect().top + window.scrollY - NAV_BAR

    window.scrollTo({
        behavior: !reduceMotion ? "smooth" : undefined,
        top: position,
    });
};

export const scrollToHome = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    
    if (isMobile) {
        const reduceMotion = getPrefersReducedMotion();
        window.scrollTo({
            behavior: !reduceMotion ? "smooth" : undefined,
            top: 0,
        });
    } else {
        window.location.href = "/";
    }
};