import { useState } from "react";
import Image from 'next/image'
import { BiRadioCircle } from "react-icons/bi";
import { BiRadioCircleMarked } from "react-icons/bi";
import { Description, Field, Label, Radio, RadioGroup } from '@headlessui/react'


export interface FigureItem {
    url: string
    description: string
    title:string
}

type Props = {
    title: string
    figures: FigureItem[]
};


export function FigureSequence({ figures, title }: Props) {

    let [curImg, setCurImg] = useState(figures[0])
    const { description, title: titleImg , url } = curImg


    return (
        <figure>
            <figcaption className=" text-secondary px-2 text-lg font-semibold ">{titleImg}</figcaption>
            <Image
                src={url}
                alt={titleImg}
                width={0}
                height={0}
                sizes="100vw"
                className=" rounded-md"
                style={{ width: '100%', height: 'auto', maxHeight: '400px' }}
            />
                <RadioGroup className="w-full" value={curImg} onChange={setCurImg} aria-label="Server size">
                    <div className="flex  justify-end px-2 items-center text-4xl ">
                        {figures.map((img) => {
                            return (
                                <Radio value={img} key={img.url} className="">
                                    <div className="cursor-pointer ">
                                        {curImg.url == img.url
                                            ? <BiRadioCircleMarked />
                                            : <BiRadioCircle />
                                        }
                                    </div>
                                </Radio>
                            )
                        })}
                    </div>
                    <Label className="">
                        {description}
                    </Label>
                </RadioGroup>
                
        </figure>

    )
}