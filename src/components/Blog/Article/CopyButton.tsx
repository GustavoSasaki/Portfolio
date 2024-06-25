import { useEffect, useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import { BiCheck, BiCopy } from "react-icons/bi";
type Props = {
    text: string
};

const START_COUNT = 0

export function CopyButton({ text }: Props) {

    const [isCopied, setIscopied] = useState(false)
    const [count, setCount] = useState(START_COUNT);

    useEffect(() => {
        if (count === START_COUNT) return

        setIscopied(true)
        const timeout = setTimeout(function () {
            setIscopied(false)
        }, 3000)

        return () => clearTimeout(timeout)

    }, [count])

    return (

        <CopyToClipboard
            text={text}
            onCopy={async () => {
                setCount(count + 1)
            }}
        >
            <button>

                {isCopied ? <BiCheck className="h-6 w-6 cursor-pointer  text-accent" /> :
                    <BiCopy className="h-6 w-6 cursor-pointer text-secondary-darker hover:text-secondary" />}

            </button>
        </CopyToClipboard >
    )
}