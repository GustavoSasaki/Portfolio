import { ArticleDynamo } from "@/app/util/DynamoClient";
import { BlogArticle } from "./BlogArticle";


export function Articles( {articles }: {articles:ArticleDynamo[]} ) {
    return (<section className=" gu-container flex flex-col sm:grid gap-x-8 gap-y-10 mb-8"
        style={{
            gridTemplateColumns: "repeat(auto-fill, minmax(350px, 1fr))"
        }}
    >
        {articles.map(a => {
            return <BlogArticle key={a.title} {...a} />
        })}
    </section>)
}