import Link from "next/link";
import Image from 'next/image'
import { ArticleDynamo } from "@/app/util/DynamoClient";

export function BlogArticle({ title, description, path, image }: ArticleDynamo) {
    return (<article key={title}
        className=" group hover:scale-105 transition-transform duration-300 border-[1px] border-primary-lighter w-full rounded-md bg-primary-light">
        <div className=" m-5">
            <Link href={"./blog/"+path}>
                <div className="m-9">
                    <div
                        className="aspect-video relative mx-auto">
                        <Image
                            alt={title}
                            src={image}
                            fill={true}
                            className={
                                "object-cover rounded-md grayscale-[50%]"
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