import { Highlight, themes } from "prism-react-renderer";
import { CopyButton } from "./CopyButton";
import { useState } from "react";
import { Checkbox } from '@headlessui/react'

type Props = {
    code: string,
    wholeCode?: string,
    language?: string,
    file?: string,
    copyButton?: boolean,
    numberLines?: boolean,
    startLine?: number
};
//to-do-maybe: fix style when showTopBar == false
export function CodeBlock({ code, wholeCode, language, copyButton = true, numberLines = true, file, startLine = 0 }: Props) {

    const [showingCode, setShowingCode] = useState(code)
    const showingWholeCode = showingCode === wholeCode
    const showTopBar = !!wholeCode || copyButton


    return (
        <Highlight
            //dracula okaidia oneDark vsDark
            theme={themes.okaidia}
            code={showingCode}
            language={language ?? ''}
        >
            {({ className, style, tokens, getLineProps, getTokenProps }) => (
                <div className="mt-2">

                    {file &&
                        <div className=" w-full flex flex-row-reverse pr-10" >
                            <div style={style} className=" rounded-t-md px-3 pt-1">{file}</div>
                        </div>
                    }

                    {showTopBar &&
                        <div className="w-full rounded-t-md pt-2  pb-1 pr-2" style={{backgroundColor: style.backgroundColor}}>
                            <div className="flex justify-end gap-2 sticky right-0 ">
                                {wholeCode &&
                                    <div className="rounded-full bg-black/25 p-1 backdrop-blur-sm">

                                        <Checkbox className="flex rounded-full py-1 px-2 text-xs/4 font-medium text-secondary-darker hover:bg-white/5 data-[selected]:bg-white/10
                                    data-[selected]:text-secondary
                                    data-[checked]:bg-white/10 hover:text-secondary data-[checked]:text-secondary
                                    "
                                            checked={showingWholeCode}
                                            onChange={() => setShowingCode(showingWholeCode ? code : wholeCode)}
                                        >
                                            <button>Show all</button>
                                        </Checkbox>
                                    </div>
                                }
                                {copyButton &&
                                    <CopyButton text={showingCode} />
                                }
                            </div>
                        </div>
                    }

                    <pre className="mb-1 mt-0 pt-0 rounded-none">

                        {tokens.map((line, i) => (
                            <div key={i} {...getLineProps({ line })} className="max-w-[300px]">
                                {numberLines &&
                                    <span className="pr-4 text-secondary-dark select-none">{showingWholeCode ? 0 : startLine + i < 9 ? '0' : ''}{showingWholeCode ? 0 : startLine + i + 1}</span>
                                }
                                {line.map((token, key) => (
                                    <span key={key} {...getTokenProps({ token })} />
                                ))}
                            </div>
                        ))}
                    </pre>
                </div>
            )}
        </Highlight>
    )

}