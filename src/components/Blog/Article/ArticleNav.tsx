import { scrollToPosition } from "@/components/NavBar/scrollToPosition";
import Link from "next/link"
export function ArticleNav({ mainLinks, current }: { mainLinks: LinkI[], current: string }) {
    return (
        <aside className="flex-none w-[170px]  hidden sm:block">
            <nav className="sticky top-[83px]">
                <h3 className="text-xl font-medium mb-2">On this page</h3>
                <ul className="pl-3">
                    {mainLinks.map((link) => <ArticleLink {...link} key={link.id} current={current} />)}
                </ul>
            </nav>
        </aside>
    )
}


export interface LinkI {
    title: string;
    id: string;
    children?: SubLinkI[];
    current?: string;
}


function ArticleLink({ title, id, children, current }: LinkI) {
    return (
        <li>
            <Link
                href={"#" + id}
                onClick={event =>
                    scrollToPosition({ event, id })
                }

                className={current == id ? " text-accent" : "  text-primary-lightest" + " hover:text-secondary"}>
                {title}
            </Link>
            <ul>
                {children?.map(child => <ArticleSubLink key={child.id} {...child} />)}
            </ul>
        </li>
    )
}

interface SubLinkI {
    title: string;
    id: string;
    current?: string;
}

function ArticleSubLink({ title, current, id }: SubLinkI) {
    return (
        <li className="pl-3">
            <a
                href={"#" + id} className={current == id ? " text-accent" : "  text-primary-lightest" + " hover:text-secondary"}>
                {title}
            </a>
        </li>
    )
}