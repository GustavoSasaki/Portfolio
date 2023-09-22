const underlineExtraW = 16
type Variant = 'big' | 'small'
export function Underline({ children, variant }: { children: JSX.Element, variant: Variant }) {
    const textSize = 'big' ? 'text-4xl' : 'text-3xl'
    const underlineHeigth = 'big' ? 'h-[14px]' : 'h-[9px]'

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