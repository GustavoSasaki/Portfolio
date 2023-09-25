import { DiJava } from 'react-icons/di';
import { DiNodejsSmall } from 'react-icons/di';
import { DiPostgresql } from 'react-icons/di';
import { DiReact } from 'react-icons/di';

export function MainStack() {

    return (
        <section className={`-mt-[68px] max-w-[600px] mx-auto`}>
            <h1 className="text-base font-bold text-secondary-dark pl-2">Main Stack</h1>
            <div className=" bg-primary-lighter rounded-xl  block px-4 py-1 border-secondary-700 border-b-2">
                <div className='flex justify-around items-center'>

                    <DiReact className={className} />
                    <DiNodejsSmall className={className} />
                    <DiJava className={className} />
                    <DiPostgresql className={className} />
                </div>
            </div>
        </section>
    )
}

//icon className
const className = "text-secondary h-20 w-20"