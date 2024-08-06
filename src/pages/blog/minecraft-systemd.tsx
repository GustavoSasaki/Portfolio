import { ArticleLayout } from "@/components/Blog/Article/ArticleLayout";
import React from "react";
import Image from 'next/image'
import { CodeBlockSimple } from "@/components/Blog/Article/CodeBlockSimple";
import { CodeBlock } from "@/components/Blog/Article/CodeBlock";
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";
import { BiChevronUp } from "react-icons/bi";
import { FigureSequence } from "@/components/Blog/Article/FiguresSequence";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import { getArticleDefaultProps } from "@/app/util/GetArticleDefaultInfo";

const mainLinks = [
    { title: "Introduction", id: "Introduction" },
    { title: "Creating server", id: "minecraft" },
    {
        title: "Systemd", id: "daemon",
    },
    { title: "IPv4 problem", id: "ip" },
    { title: "Port forward", id: "port-forward" },
    { title: "TLDR", id: "tldr" },
];

export default function minecraftSystemd({ image, title }: InferGetStaticPropsType<typeof getStaticProps>) {

    return (
        <ArticleLayout mainLinks={mainLinks} title={title} image={image}>
            <div className="prose prose-invert  hover:prose-a:text-accent prose-h3:text-2xl prose-code:bg-primary-lighter
            prose-code:rounded-md prose-code:px-1 prose-code:py-1 prose-code:mx-1 prose-code:before:content-none prose-code:after:content-none 
            w-full"
            id="Introduction">
                <p>
                    Let's create a Minecraft server that starts every time the machine boots up. To do that, we need an daemon, a background process which don't have user interaction. But first, let's get the server files.
                </p>

                <h2 id="minecraft">Creating minecraft server</h2>
                <p>Download the server.jar from the <a href="https://www.minecraft.net/en-us/download/server">official site</a>. Put it in an separated folder such as
                    <code>/server/minecraft</code>
                    . This folder shouldn't be in the user folder, since we will block the server process from accessing <code>/home</code> for security reasons.  </p>
                <Image
                    src={"https://100uselessmicroservices.s3.amazonaws.com/minecraft-systemd/m1.png"}
                    alt={"download server.jar"}
                    width={0}
                    height={0}
                    sizes="100vw"
                    className=" rounded-md my-0"
                    style={{ width: '100%', height: 'auto', maxHeight: '400px' }}
                />
                <Space />

                Now install java. In the case of Minecraft 1.21, OpenJDK 16 or above will do.
                <CodeBlockSimple code={"sudo apt update; sudo apt install openjdk-21-jdk"} />

                <Space size="small" />
                Execute the JAR file to generate the server files:
                <CodeBlockSimple code={"java -Xmx1024M -Xms1024M -jar server.jar nogui"} />

                <p>
                    After that, change the eula property to true in <code>eula.txt</code>.
                </p>
                <p className="mb-0">
                    To start the server, execute again the command.
                </p>
                <CodeBlockSimple code={"java -Xmx1024M -Xms1024M -jar server.jar nogui"} />
                <p>
                    Currently the server will have 1GB of RAM, but you can change <code>-Xmx</code> to increase the memory. <a href="https://minecraft.fandom.com/wiki/Server/Requirements/Dedicated#Unix_(Linux,_BSD,_macOS)">Here</a> are the recommendation values.
                </p>
                <p>
                    In <code>server.properties</code> file you can change the server configurations, such as game mode, difficulty level, and maximum number of players.
                </p>

                <div>
                    <h2 id="daemon">Systemd</h2>
                    Systemd is a process manager that starts and manages processes based on configuration defined in .service files. These files are located in:
                    <ul>

                        <li><code>/run/systemd/system</code>: Stores runtime-defined processes.</li>
                        <li><code>/lib/systemd/system</code>: Contains processes defined by the operating system.</li>
                        <li><code>/etc/systemd/system</code>: Holds system-specific services, typically defined by the user.</li>
                    </ul>
                    <p className="mb-0">
                        Here is .service  file to start the server at boot:

                    </p>
                    <CodeBlock code={minecraftDaemonServer} file="minecraft-daemon.service" />
                    <ul>
                        <li>Line 3 makes the process start after internet process</li>
                        <li>Line 6 defines the command to start the process</li>
                        <li>Line 7 define the directory that will execute the command</li>
                        <li>Line 16-17 makes the process start when the machine starts</li>

                        <Disclosure as="div" defaultOpen={false} className=" bg-primary-lighter rounded-md px-4">
                            <DisclosureButton className="group flex items-center justify-between w-full">

                                <span>Line 8-14 are security configuration
                                </span>

                                <BiChevronUp className="size-5  group-data-[hover]:fill-secondary group-data-[open]:rotate-180 transition-all duration-[400ms]" />

                            </DisclosureButton >
                            <DisclosurePanel className="mt-2 text-sm/5">
                                <ul className="pb-2">
                                    <li>Line 8 defines what folder process can read</li>
                                    <li>Line 9 defines what folder process can write</li>
                                    <li>Line 10 makes process use an pseudo /dev (device folder) instead of real one</li>
                                    <li>Line 11 makes /home and /root appear empty to the process</li>
                                    <li>Line 12 makes process use it own /tmp instead of system share one</li>
                                    <li>Line 13 makes a bunch of folders read-only</li>
                                    <li>Line 14 makes impossible for process to get higher privileges</li>
                                </ul>
                            </DisclosurePanel>
                        </Disclosure>
                    </ul>



                </div>

                <Space size="smallest" />
                <p className="mb-0">
                    To make systemd manage your Minecraft server and start it, use the command:
                </p>
                <CodeBlockSimple code={"sudo systemctl --now enable minecraft-daemon.service"} />
                <p className=" placeholder-slate-500 text-sm mt-1">
                    (This will, in background, create an symlink of your .service file into /etc/systemd/system. )
                </p>


                <h4>Other systemd commands</h4>

                <ul>
                    <li>Show logs - <code>journalctl -u minecraft-daemon.service</code></li>
                    <li>List systemd managed process - <code>systemctl list-units --type=service</code></li>
                    <li>Stop systemd from manage process - <code>sudo systemctl disable minecraft-daemon.service</code></li>
                    <li>Manually start process - <code>sudo systemctl start minecraft-daemon.service</code></li>
                    <li>Manually stop process - <code>sudo systemctl stop minecraft-daemon.service</code></li>
                    <li>Load configurations after you changed an .service file - <code>sudo systemctl daemon-reload</code> </li>
                </ul>


                <p>
                    You can get your IP address using <code>ip -c -4 addr list</code>. And <i>voilà</i>, now the server is set up.
                    <br />
                    However, this server only work for players inside your local network (everyone using the same router). If that's not the case, we have an additional step.
                </p>


                <div>
                    <h2 id="ip">The IPv4 problem </h2>
                    <p>IPv4 addresses are used to identify devices on the internet. When you want to send a message to someone, you send to their IP address.</p>
                    <p>This system worked well during the early years.
                        But IPv4's 32-bit address is no longer sufficient. With only 2^32 possible addresses,
                        there is not enough IPs to accommodate the number of devices on the internet today.
                        However, transitioning to a longer IP address system is difficult since much of the existing infrastructure relies on IPv4. The solution to this problem is the local/global IPv4 system.</p>
                    <p>There is two types of IPv4 addresses: global and local. Global IP addresses are valid across the entire internet, while local IP addresses are only valid within a local network. This allows multiple local networks to reuse the same IP addresses. Typically, local IP addresses follow the format 192.168.X.X, which are reserved for local use only.
                    </p>
                    <p>
                        When a machine inside a local network needs to communicate with one outside, the message must pass through a router.
                        The router has both a local and a global IP.
                        If you check <a href="https://whatismyipaddress.com/">whatismyipaddress</a> from both your computer and your phone, you'll see the same IP address. This is because it shows the global IP of your router.</p>

                    <Image
                        src={'https://100uselessmicroservices.s3.amazonaws.com/minecraft-systemd/network.png'}
                        alt={'network explanation'}
                        width={0}
                        height={0}
                        sizes="100vw"
                        className=" rounded-md"
                        style={{ width: '100%', height: 'auto', maxHeight: '400px' }}
                    />


                    <p>Considering our Minecraft server setup:</p>
                    <ul>
                        <li>Player A, who is on your local network, needs to connect to the server using the local IP address:  <code>192.168.1.2</code> .</li>
                        <li>Player B, who is outside your LAN, needs to connect to the server using the router's global IP address: <code>189.34.51.36</code>. The router will then forward the traffic from  <code>192.168.1.1</code> to <code>192.168.1.2</code> .</li>
                    </ul>
                </div>

                <div>
                    <h2 id="port-forward">Port forwarding</h2>

                    <p>
                        To make the server accessible outside your local network, we'll configure the router to forward all traffic on port 25565 to your computer.
                        This process is known as port forwarding.
                        <br />
                        The next steps will change depending of the router machine, but the overall idea stays the same.
                    </p>

                    <FigureSequence title={"Port-forward"} figures={portForwardSequence} />
                </div>

                <div>
                    <h2 id="tldr">TLDR</h2>
                    <div> And thats it, we have the auto-start minecraft server and anyone on the internet can connect to it. Among the way we learn about
                        <ul>
                            <li>How create Start Minecraft server</li>
                            <li>What are Daemons</li>
                            <li>How use Systemd</li>
                            <li>IPv4 and sub-networks</li>
                            <li>How do Port-forward</li>
                        </ul>

                    </div>

                </div>
            </div>


        </ArticleLayout>
    )
}


const minecraftDaemonServer = `[Unit]
Description=Minecraft Daemon Server
Requires=network.target

[Service]
ExecStart=java -Xmx1024M -Xms1024M -jar server.jar nogui
WorkingDirectory=/server/minecraft       
ReadWriteDirectories=/server/minecraft
WorkingDirectory=/server/minecraft
PrivateDevices=true
ProtectHome=true
PrivateTmp=true
ProtectSystem=full
NoNewPrivileges=true

[Install]
WantedBy=multi-user.target`

function Space({ size }: { size?: "smallest" | "small" | "mid" | "big" }) {
    if (size === "smallest") { return <div className="h-2 w-full" /> }
    if (!size || size === "small") { return <div className="h-5 w-full" /> }
    else if (size === "mid") { return <div className="h-5 w-full" /> }
    else return <div />
}


const portForwardSequence = [{ url: "https://100uselessmicroservices.s3.amazonaws.com/minecraft-systemd/port-foward/1.png", title: "Enter router website", description: 'Log-in on the internal IP of your router with admin user. Mine was 192.168.1.1.' },
{ url: "https://100uselessmicroservices.s3.amazonaws.com/minecraft-systemd/port-foward/2.png", title: 'Access port-forward page', description: "Click in Application -> Port Mapping" },
{
    url: "https://100uselessmicroservices.s3.amazonaws.com/minecraft-systemd/port-foward/3.png", title: "Configure port-forward",

    description: <ul>
        <li>Protocol: port protocol, set to ALL</li>
        <li>Public Port: router port, set to 25565 (Minecraft default server port)</li>
        <li>Private IP: local IP of your machine</li>
        <li>Private Port: your machine port, set to 25565</li>
        <li>Enable: set to Enable</li>
    </ul>
},
{ url: "https://100uselessmicroservices.s3.amazonaws.com/minecraft-systemd/port-foward/4.png", title: "Finished", description: "your port-forward was added :)" },
]


export const getStaticProps: GetStaticProps = async ({ locale }) => {

    const props = await getArticleDefaultProps({ path: 'minecraft-systemd', locale })
    return { props }
}