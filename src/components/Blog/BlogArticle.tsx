
export interface BlogArticleI {
    title: string;
    description: JSX.Element;
    url: string
}


export function BlogArticle({ title, description, url }: BlogArticleI) {
    return (<article className=" group hover:scale-105 transition-transform duration-300 border-[1px] border-primary-lighter w-full rounded-md bg-primary-light">
        <div className=" m-4">
            <a   href={url}>
                <h2 className=" text-2xl mb-2 group-hover:text-accent-400 ">{title}</h2>
                <div className=" text-secondary-darker ">{description}</div>
            </a>
        </div>
    </article>)
}