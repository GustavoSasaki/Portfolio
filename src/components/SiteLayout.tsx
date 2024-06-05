import { Footer } from "./Footer/Footer";
import { HeadBox } from "./HeadBox";
import { NavBar, NavRefs } from "./NavBar/NavBar";
import { Inter } from "@next/font/google";

type Props = {
    children: JSX.Element | JSX.Element[]
    navRefs: NavRefs
};

const inter = Inter({ subsets: ["latin"] });
export function SiteLayout({ children, navRefs }: Props ) {
    return (
        <>
            <HeadBox />
            <NavBar {...navRefs} />
            <div
                className={`flex flex-col justify-between items-stretch from-primary bg-gradient-to-b to-primary-light min-h-screen ${inter.className} text-secondary font-medium`}
            >
                <main className=" grow ">
                    {children}
                    
                </main>
                <Footer />
            </div>
        </>
    )
}