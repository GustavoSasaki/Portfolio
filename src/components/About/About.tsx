import { forwardRef, RefObject } from "react";
import { useTrackVisibility } from "react-intersection-observer-hook";
import { useSlidInStyle } from "../useSlidInStyle";
import { Underline } from "../Underline";
import { useTranslation } from "next-i18next";

const About = forwardRef((props, ref) => {

    const { t } = useTranslation('about')

    const [observerRef, { wasEverVisible }] = useTrackVisibility();
    let slideWhenVisible = useSlidInStyle({ wasEverVisible, preStyle: " opacity-0 translate-y-[50px]" })

    return (
        <section ref={ref as RefObject<HTMLDivElement>} className="gu-container pt-14 bg-primary-light pb-8">
            <div className="ml-4 sm:mb-8" >
                <Underline variant="small">
                    <h1>
                        {t('title')}
                    </h1>
                </Underline>
            </div>

            <div id='wew' className={"sm:flex sm:gap-8 "} >
                <div className=' bg-gradient-to-tr from-accent-200 to-purple-300 rounded-3xl relative max-w-[250px] w-[1/4]  mx-auto my-7'>
                    <img alt='Gustavo Roncaglia' src='https://ngchltiyfhxkbpitthto.supabase.co/storage/v1/object/public/portfolio/photo'
                        className={'w-full rounded-lg mix-blend-darken object-cover' + slideWhenVisible}
                    />
                </div>


                <div className="prose prose-base prose-invert font-medium mx-auto hover:prose-a:text-accent sm:prose-lg">
                    <p>
                        {t('introduction')}
                    </p>

                    <p>
                        <span>
                            {t('grad.introduction')}
                        </span>
                        <a href="https://www5.usp.br/">
                            {t('grad.usp')}
                        </a>
                        {t('grad.rest')}
                    </p>
                    <p ref={observerRef} >
                        {t('hobby')}
                    </p>
                </div>
            </div>
        </section>
    )
})


About.displayName = 'About';
export default About;