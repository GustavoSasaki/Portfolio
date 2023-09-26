import { forwardRef, RefObject } from "react";
import { useTrackVisibility } from "react-intersection-observer-hook";
import { useSlidInStyle } from "../useSlidInStyle";
import { Underline } from "../Underline";

const About = forwardRef((props, ref) => {

    const [observerRef, { wasEverVisible }] = useTrackVisibility();
    let slideWhenVisible = useSlidInStyle({ wasEverVisible, preStyle: " opacity-0 translate-y-[50px]" })

    return (
        <section ref={ref as RefObject<HTMLDivElement>} className="gu-container pt-14 bg-primary-light pb-8">
            <div className="ml-4 sm:mb-8" >
                <Underline variant="small"><h1>About</h1></Underline>
            </div>

            <div id='wew' className={"sm:flex sm:gap-8 "} >
                <div className=' bg-gradient-to-tr from-accent-200 to-purple-300 rounded-3xl relative max-w-[250px] w-[1/4]  mx-auto my-7'>
                    <img alt='Gustavo Roncaglia' src='https://ngchltiyfhxkbpitthto.supabase.co/storage/v1/object/public/portfolio/photo'
                        className={'w-full rounded-lg mix-blend-darken object-cover' + slideWhenVisible}
                    />
                </div>


                <div className="prose prose-base prose-invert font-medium mx-auto hover:prose-a:text-accent sm:prose-lg">
                    <p>
                        As a developer, I am interested in the creation of websites as a whole.
                        From design, front-end to back-end.
                        Everything to create an intuitive and overall great user experience.
                    </p>

                    <p>
                        <span>
                            {"I am also a recent graduate of "}
                        </span>
                        <a href="https://www5.usp.br/">University of São Paulo</a> 🎓 in bachelor of computer science.
                        And worked approximately 1,5 years in Amdocs.
                    </p>
                    <p ref={observerRef} >
                        When not working, I am probably trying to make something edible, running or watching anime.
                    </p>
                </div>
            </div>
        </section>
    )
})


About.displayName = 'About';
export default About;