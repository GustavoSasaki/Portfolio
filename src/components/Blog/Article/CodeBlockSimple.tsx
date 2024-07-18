import { Highlight, themes } from "prism-react-renderer";
import { CopyButton } from "./CopyButton";

type Props = {
    code: string,
    language?: string,
    copyButton?: boolean
};


export function CodeBlockSimple({ code, language, copyButton = true }: Props) {
    return (
        <Highlight
            //dracula okaidia oneDark vsDark
            theme={themes.okaidia}
            code={code}
            language={language ?? ''}
        >
            {({ className, style, tokens, getLineProps, getTokenProps }) => (
                <div className="mt-2">

                    {language &&
                        <div className=" w-full flex flex-row-reverse pr-10" >
                            <div style={style} className=" rounded-t-md px-3 pt-1">{language}</div>
                        </div>
                    }

                    <pre style={style} className="mb-1 mt-0 flex justify-between ">
                        <div >
                            {tokens.map((line, i) => (
                                <div key={i} {...getLineProps({ line })}>
                                    {line.map((token, key) => (
                                        <span key={key} {...getTokenProps({ token })} className="max-w-[400px]" />
                                    ))}
                                </div>
                            ))}
                        </div>
                        {copyButton && <CopyButton text={code} />}
                    </pre>
                </div>
            )}
        </Highlight>
    )

}