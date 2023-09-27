type Variant = 'big' | 'small' | 'smaller'
export function Underline({ children, variant }: { children: JSX.Element, variant: Variant }) {
    const [textSize,underlineHeigth,underlineExtraW] = getVariantDifference(variant)


    return (<div className="relative inline [&_*]:inline">
        <div className={`z-10 relative font-bold ${textSize}`}>{children}</div>
        <div className={`absolute bg-accent-600 bottom-[-1px] ${underlineHeigth}`}
            style={{
                left:`-${underlineExtraW/2}px`,
                width: `calc(100% + ${underlineExtraW}px)`
            }}    
        />
    </div>)
}

function getVariantDifference(variant : Variant) : [string,string,number]{
    if(variant === 'big'){
        return ['text-4xl sm:text-5xl','h-[14px]',16]
    }
    if(variant === 'small'){
        return ['text-3xl sm:text-4xl','h-[9px]',16] 
    }
    return ['text-2xl sm:text-3xl','h-[6px]',10] 
}
