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
            title: "'Faz o L' discord bot",
            url: ".",
            description: (
                <p>
                    Lets make an discord bot using go, deploying on AWS that handle parallel requests.
                </p>
            ),
        },
        {
            title: "'Faz o L' discord bot",
            url: ".",
            description: (
                <p>
                    Lets make an discord bot using go, deploying on AWS that handle parallel requests.
                </p>
            ),


        }
    ] 
