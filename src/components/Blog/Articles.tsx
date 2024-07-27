import { BlogArticle, BlogArticleI } from "./BlogArticle";


export function Articles() {
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



const articles: BlogArticleI[] =
    [
        {
            title: "Interacting with devices using Sysfs",
            url: "/blog/sysfs",
            image: "https://100uselessmicroservices.s3.amazonaws.com/sysfs/mainImage.jpg",
            description: (
                <p>
                    Sysfs is the way to manipulate devices in linux system. Let's a little bit with it.
                </p>
            ),
        },
        {
            title: "Minecraft Daemons",
            url: "/blog/minecraft-systemd",
            image: "https://100uselessmicroservices.s3.amazonaws.com/minecraft-systemd/mainImage.jpg",
            description: (
                <p>
                    Lets create an minecraft that automatically start when boot up using systemd
                </p>
            ),
        },
        {
            title: "Server Sent Nyancat",
            url: "/blog/sse-nyancat",
            image: "https://100uselessmicroservices.s3.amazonaws.com/sse-nyancat/mainImage.jpg",
            description: (
                <p>
                    Lets make an nyan cat which change flavours synchronized between all devices with SSE.
                </p>
            ),
        }
    ] 
