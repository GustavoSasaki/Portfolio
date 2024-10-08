import { NavRefs } from "@/components/NavBar/NavBar";
import { SiteLayout } from "@/components/SiteLayout";
import { useRef } from "react";
import { ArticleNav, LinkI } from "./ArticleNav";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import Image from 'next/image'

type Props = {
    children: JSX.Element | JSX.Element[]
    mainLinks: LinkI[]
    title: string
    image: string
};

export function ArticleLayout({ children, mainLinks, title, image }: Props) {

    const navRefs: NavRefs = {
        contactRef: useRef(null),
        aboutRef: useRef(null),
        projectsRef: useRef(null),
        heroRef: useRef(null),
    };
    return (
        <SiteLayout navRefs={navRefs}>
            <article className=" pb-6 gu-container-blog ">
                <div className="mb-10">

                    <div
                        className="aspect-[12/9] sm:aspect-video relative mx-auto mt-[4rem] mb-6">
                        <Image
                            alt={title}
                            src={image}
                            fill={true}
                            className={
                                "object-cover rounded-md grayscale-[50%]"
                            }
                        />
                    </div>

                    <h3 className=" text-5xl font-bold mb-4 text-secondary">{title}</h3>
                    <CustomAvatar />
                </div>
                <div className="flex relative gap-x-4 flex-row">

                    {children}

                    <ArticleNav mainLinks={mainLinks} current={""} />
                </div>
            </article>
        </SiteLayout>
    )
}


function CustomAvatar() {
    return (
        <div className="flex items-center gap-4 pr-3">
            <Avatar >
                <AvatarImage src="https://100uselessmicroservices.s3.amazonaws.com/circleImage.jpg" />
                <AvatarFallback>GS</AvatarFallback>
            </Avatar>
            <Link href="https://www.gustavosasaki.com/" className=" font-semibold ">Gustavo Sasaki</Link>
        </div>
    )
}
