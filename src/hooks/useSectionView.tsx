import { NavRefs } from "@/components/NavBar/NavBar";
import { useInView } from "framer-motion";

export function useSectionView({
    contactRef,
    aboutRef,
    projectsRef,
    heroRef
}: NavRefs) {
    const viewContact = useInView(contactRef)
    const viewAbout = useInView(aboutRef)
    const viewProjects = useInView(projectsRef)
    const viewHome = useInView(heroRef, {amount:0.5})

    if (viewHome) return 'hero'
    if (viewContact) return 'contact'
    if (viewProjects) return 'projects'
    if (viewAbout) return 'about'
    return null
}