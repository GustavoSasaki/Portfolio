const underlineExtraW = 16

export function Underline({ children }: { children: JSX.Element }) {
    return (<div className="relative inline [&_*]:inline">
        <div className="z-10 relative font-bold text-3xl ">{children}</div>
        <div className="absolute bg-accent-600 bottom-[-1px] h-[14px]"
            style={{
                left:`-${underlineExtraW/2}px`,
                width: `calc(100% + ${underlineExtraW}px)`
            }}    
        />
    </div>)
}