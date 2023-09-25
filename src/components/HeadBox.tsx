import Head from "next/head";
import { description } from "./Hero/Hero";

export function HeadBox() {
    return (
        <Head>
            <title>
                Gustavo Sasaki Portfolio
            </title>
            <meta name='keywords' content='portfolio gustavo sasaki roncaglia javascript node java react' />
            <meta name='description' content={`Hello, My name is Gustavo. ${description}`} />
            <meta name='author' content='Gustavo Sasaki Roncaglia' />


            <meta property='og:title' content='Gustavo Sasaki Portfolio' />
            <meta property='og:description' content={`Hello, My name is Gustavo. ${description}`} />
            <meta property='og:type' content='website' />
            <meta property='og:url' content='https://hero-front-end.vercel.app/' />
            <meta property='og:image' content='https://dgufziqjubvbckrlwnjj.supabase.co/storage/v1/object/public/hero-back-end/44.png' />

            <meta name="twitter:card" content="https://dgufziqjubvbckrlwnjj.supabase.co/storage/v1/object/public/hero-back-end/44.png" />
            <meta property="twitter:domain" content="hero-front-end.vercel.app" />
            <meta property="twitter:url" content="https://hero-front-end.vercel.app/" />
            <meta name="twitter:title" content='Gustavo Sasaki Portfolio' />
            <meta name="twitter:description" content={`Hello, My name is Gustavo. ${description}`} />
            <meta name="twitter:image" content="https://dgufziqjubvbckrlwnjj.supabase.co/storage/v1/object/public/hero-back-end/44.png" />

        </Head>
    )
}