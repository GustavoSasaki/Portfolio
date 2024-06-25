import { Highlight, themes } from "prism-react-renderer";
import { CopyButton } from "./CopyButton";
import { useState } from "react";
import { Checkbox } from '@headlessui/react'

type Props = {
    code: string,
    wholeCode?: string,
    language?: string,
    file?: string,
    copyButton?: boolean
    numberLines?: boolean
};

export function CodeBlock({ code, wholeCode, language, copyButton = true, numberLines = true, file }: Props) {

    const [showingCode, setShowingCode] = useState(code)
    const showingWholeCode = showingCode === wholeCode


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

                    <pre style={style} className="mb-1 mt-0">

                        {(!!wholeCode || copyButton) &&
                            <div className="flex justify-end pb-1 gap-2">
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
                        }
                        {tokens.map((line, i) => (
                            <div key={i} {...getLineProps({ line })}>
                                {numberLines &&
                                    <span className="pr-4 text-secondary-dark select-none">{i <9 ? '0':''}{i + 1}</span>
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