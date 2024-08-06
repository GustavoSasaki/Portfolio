import { ArticleLayout } from "@/components/Blog/Article/ArticleLayout";
import React from "react";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import Image from 'next/image'
import { getArticleDefaultProps } from "@/app/util/GetArticleDefaultInfo";

const mainLinks = [
    { title: "Introduction", id: "introduction" },
    { title: "Hands on", id: "hands" },
    { title: "TLDR", id: "tldr" },
];

export default function Sysfs({ image, title }: InferGetStaticPropsType<typeof getStaticProps>) {

    return (
        <ArticleLayout mainLinks={mainLinks} title={title} image={image}>
            <div className="prose prose-invert  hover:prose-a:text-accent prose-h3:text-2xl prose-code:bg-primary-lighter
            prose-code:rounded-md prose-code:px-1 prose-code:py-1 prose-code:mx-1 prose-code:before:content-none prose-code:after:content-none 
            w-full">
                <section id="introduction">
                    <p>
                        When USB devices became popular, arose the necessity of providing an interface to interact with hot-swappable devices that could be inserted at any moment,
                        for this reason Sysfs was created on the Unix system.
                    </p>
                    <p>
                        Sysfs is a pseudo-filesystem that provides runtime files representing these devices. These files serve as the link between user-space and kernel-space.
                        Manipulating them doesn't change data on the disk; instead, it interacts with the kernel driver, which then directly communicates with the hardware.
                    </p>
                    <p>
                        The /sys/class directory contains subdirectories for each device class in the system, such as leds, block, backlight, and usb. Here is mine:
                    </p>

                    <Image
                        src={'https://100uselessmicroservices.s3.amazonaws.com/sysfs/sysclass.png'}
                        alt={'/sys/class'}
                        width={0}
                        height={0}
                        sizes="100vw"
                        className=" rounded-md my-0"
                        style={{ width: '100%', height: 'auto', maxHeight: '400px' }}
                    />
                    <p>
                        Let's play around a bit.
                    </p>
                </section>

                <div id="hands">
                    <section>
                        <h2>Block devices</h2>
                        <p >
                            In <code>/sys/class/block</code>, you have information about block devices.
                        </p>
                        <Image
                            src={'https://100uselessmicroservices.s3.amazonaws.com/sysfs/block.png'}
                            alt={'/sys/class'}
                            width={0}
                            height={0}
                            sizes="100vw"
                            className=" rounded-md my-0"
                            style={{ width: '100%', height: 'auto', maxHeight: '400px' }}
                        />
                        <ul>
                            <li>nvme0n1, nvme0n1p1, nvme0n1p2 is my SSD and it partitions</li>
                            <li>sr0 is the DVD-ROM</li>
                            <li>loop0, loop1, loop2 ... are pseudo-devices that exist logically only</li>
                            <li>there is also sda, sda1, sdb. They represent other block devices such as HHD or USB pen-drives</li>
                        </ul>
                        <p>Entering a folder you have access to the device information such as size, if it is read-only, if it is hidden, if it is movable, what are the partitions. Just <code>cat</code> the files.</p>
                        <Image
                            src={'https://100uselessmicroservices.s3.amazonaws.com/sysfs/ssd.png'}
                            alt={'/sys/class'}
                            width={0}
                            height={0}
                            sizes="100vw"
                            className=" rounded-md my-0"
                            style={{ width: '100%', height: 'auto', maxHeight: '400px' }}
                        />
                    </section>
                    <section>
                        <h2>Turn on CapsLock light</h2>
                        <p>
                            In <code>/sys/class/leds</code> folder, you have the led devices.
                            To turn on a light, just enter it folder, then <code>{'sudo cat max_brightness > brightness.'}</code>
                        </p>
                        <Image
                            src={'https://100uselessmicroservices.s3.amazonaws.com/sysfs/led.png'}
                            alt={'/sys/class'}
                            width={0}
                            height={0}
                            sizes="100vw"
                            className=" rounded-md my-0"
                            style={{ width: '100%', height: 'auto', maxHeight: '400px' }}
                        />
                        <p>
                            And you got Permission denied. That's because we give root permission to cat command, not the write file command.
                            <br />
                            Let's try again with
                            <code>cat max_brightness | sudo tee brightness.</code>
                            Now the light is on.
                        </p>
                    </section>
                    <section>
                        <h2>Change monitor brightness</h2>
                        <p>
                            We can do something similar with notebook monitor.
                            <br />
                            Go to monitor folder inside <code>/sys/class/backlight</code>
                            and <code>echo "0" | sudo tee brightness</code> to turn everything dark.
                        </p>
                    </section>
                </div>

                <section id="tldr">
                    <h2>TLDR</h2>
                    <p>Sysfs is the standard way of interacting with devices in unix system, now you know how to used it and can do some terminal magic by turning on/off devices programmatically. </p>
                </section>
            </div>
        </ArticleLayout>
    )
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {

    const props = await getArticleDefaultProps({ path: 'sysfs', locale })
    return { props }
}