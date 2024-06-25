export function ArticleNav({ mainLinks, current }: { mainLinks: LinkI[], current: string }) {
    return (
        <aside className="sticky w-full ml-8 top-0">
            <nav>
                <h3 className="text-xl font-medium mb-2">On this page</h3>
                <ul className="pl-3 gA">
                    {mainLinks.map((link) => <Link {...link} key={link.id}  current={current} />)}
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


function Link({ title, id, children, current }: LinkI) {
    return (
        <li>
            <a href={"#" + id} className={current == id ? " text-accent" : "  text-primary-lightest" + " hover:text-secondary"}>
                {title}
            </a>
            <ul>
                {children?.map(child => <SubLink key={child.id} {...child} />)}
            </ul>
        </li>
    )
}

interface SubLinkI {
    title: string;
    id: string;
    current?: string;
}

function SubLink({ title, current, id }: SubLinkI) {
    return (
        <li className="pl-3">
            <a
                href={"#" + id} className={current == id ? " text-accent" : "  text-primary-lightest" + " hover:text-secondary"}>
                {title}
            </a>
        </li>
    )
}