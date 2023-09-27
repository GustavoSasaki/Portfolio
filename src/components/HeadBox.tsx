import Head from "next/head";
import { description } from "./Hero/Hero";

export function HeadBox() {
    const headDescription = `Hello, My name is Gustavo. ${description}`
    const url = 'https://www.gustavosasaki.com/'
    const title = 'Gustavo Sasaki Portfolio'
    const img = 'https://ngchltiyfhxkbpitthto.supabase.co/storage/v1/object/public/portfolio/portfolioHeadImg.png'

    return (
        <Head>
            <title>
                {title}
            </title>
            <meta name='keywords' content='portfolio gustavo sasaki roncaglia javascript node java react' />
            <meta name='description' content={headDescription} />
            <meta name='author' content='Gustavo Sasaki Roncaglia' />


            <meta property='og:title' content={title} />
            <meta property='og:description' content={headDescription} />
            <meta property='og:type' content='website' />
            <meta property='og:url' content={url} />
            <meta property='og:image' content={img} />

            <meta name="twitter:card" content={img} />
            <meta property="twitter:domain" content={url}/>
            <meta property="twitter:url" content={url} />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={headDescription} />
            <meta name="twitter:image" content={img} />

        </Head>
    )
}