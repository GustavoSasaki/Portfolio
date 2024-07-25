import Link from "next/link";
import Image from 'next/image'

export interface BlogArticleI {
    title: string;
    description: JSX.Element;
    url: string;
    image: string
}


export function BlogArticle({ title, description, url, image }: BlogArticleI) {
    return (<article key={title}
        className=" group hover:scale-105 transition-transform duration-300 border-[1px] border-primary-lighter w-full rounded-md bg-primary-light">
        <div className=" m-5">
            <Link href={url}>
                <div className="m-9">
                    <div
                        className="aspect-video relative mx-auto">
                        <Image
                            alt={title}
                            src={image}
                            fill={true}
                            className={
                                "object-cover rounded-md"
                            }
                        />
                    </div>
                </div>
                <h2 className=" text-2xl mb-2 group-hover:text-accent-400 ">{title}</h2>
                <div className=" text-secondary-darker ">{description}</div>
            </Link>
        </div>
    </article>)
}