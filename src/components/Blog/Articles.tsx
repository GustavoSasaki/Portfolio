import { BlogArticle, BlogArticleI } from "./BlogArticle";


export function Articles() {
    return (<section className=" gu-container  gap-x-8 gap-y-10 grid"
        style={{
            gridTemplateColumns: "repeat(auto-fill, minmax(400px, 1fr))"
        }}
    >
        {articles.map(a => {
            return <BlogArticle {...a} />
        })}
    </section>)
}



const articles: BlogArticleI[] =
    [
        {
            title: "Minecraft Daemons",
            url: "/blog/minecraft-systemd",
            description: (
                <p>
                    Lets create an minecraft that automatically start when boot up using systemd
                </p>
            ),
        }
    ] 