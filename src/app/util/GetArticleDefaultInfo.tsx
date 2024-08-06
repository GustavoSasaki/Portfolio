import { getArticle } from "./DynamoClient";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";


export async function getArticleDefaultProps({ locale, path }: { locale: string | undefined, path: string }) {
    const articleInfo = await getArticle({ path })

    return ({
        ...(await serverSideTranslations(locale ?? "en", [
            "common",
            "nav",
        ])),
        ...articleInfo,
    }
    );
}
