export function NyanButton() {

    return (
        <button className=" rounded-3xl px-5 flex justify-center items-center group relative
                bg-accent-400 hover:bg-accent-600  focus:bg-accent-600 transition-all ease-out duration-300 font-bold text-lg mx-auto"
            onClick={async () => await fetch('http://184.72.221.34:8080/change-flavour')}>
            <p className="my-4">Change flavour</p>
        </button>
    )
}


export function NyanCat({ flavourUrl }: { flavourUrl: string }) {

    return (
        <div className="h-60 flex justify-center items-center">
            <div className=" animate-nyan-moves-upDown" >
                <img className=" animate-nyan-moves-leftRight w-[258px] h-[159px]" src={flavourUrl} />
            </div>
        </div>
    )
}
