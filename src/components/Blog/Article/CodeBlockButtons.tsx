import { CopyButton } from "./CopyButton";
import { Checkbox } from '@headlessui/react'

type Props = {
    isWholeCode: boolean
    showingCode: string
    changeShowingCode: () => {}
    hasCopy: boolean
    hasShowWholeCode: boolean
};

export function CodeBlockButtons({ hasShowWholeCode, hasCopy, isWholeCode, showingCode, changeShowingCode }: Props) {

    if(!hasCopy && !hasShowWholeCode){
        return <></>
    }
    return (
        <div className="flex justify-end pb-1 gap-2">
            <div className="rounded-full bg-black/25 p-1 backdrop-blur-sm">
                {hasShowWholeCode &&
                    <Checkbox className="flex rounded-full py-1 px-2 text-xs/4 font-medium text-secondary-darker hover:bg-white/5 data-[selected]:bg-white/10
                                    data-[selected]:text-secondary
                                    data-[checked]:bg-white/10 hover:text-secondary data-[checked]:text-secondary
                                    "
                        checked={isWholeCode}
                        onChange={changeShowingCode}
                    >
                        <button>Show all</button>
                    </Checkbox>}
            </div>
            {hasCopy &&
                <CopyButton text={showingCode} />
            }
        </div>
    )
}