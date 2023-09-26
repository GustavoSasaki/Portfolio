export function GoRightIcon({ children }: { children: JSX.Element }) {
    return (
        <div className=' text-2xl absolute transition-all ease-out duration-300 opacity-0 group-hover:opacity-90 group-hover:right-2 right-8'>
            {children}
        </div>
    )
}