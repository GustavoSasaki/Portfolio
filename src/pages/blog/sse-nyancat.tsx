import { ArticleLayout } from "@/components/Blog/Article/ArticleLayout";
import { CodeBlock } from "@/components/Blog/Article/CodeBlock";
import React, { useEffect, useState } from "react";
import { FigureSequence } from "@/components/Blog/Article/FiguresSequence";
import { CodeBlockSimple } from "@/components/Blog/Article/CodeBlockSimple";
import Image from 'next/image'
import { NyanButton, NyanCat } from "@/components/Blog/Nyancat/Nyancat";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { BiLogoGithub } from "react-icons/bi";
import { CodeSequence } from "@/app/util/CodeSequence";

const mainLinks = [
    { title: "Introduction", id: "sse" },
    { title: "Backend in Go", id: "go" },
    { title: "Frontend in React", id: "react" },
    {
        title: "Deploy AWS", id: "aws",
    },
    { title: "TLDR", id: "tldr" },
];
const title = "Server sent nyancat"


//to-do
// write permit http sse request in firefox or browser
//fix nyan cat popping when enter page

export default function sseNyancat({ goSequence, reactSequence }: InferGetStaticPropsType<typeof getStaticProps>) {

    const [flavourUrl, setFlavourUrl] = useState("https://www.nyan.cat/cats/original.gif")

    useEffect(() => {
        const sseSource = new EventSource("http://184.72.221.34:8080/events?stream=flavour");

        sseSource.onmessage = (e) => {
            setFlavourUrl(e.data);
        };

        window.onbeforeunload = function () {
            sseSource.close();
        };

        //ensures close when exit page
        sseSource.onerror = () => sseSource.close()

    }, [])

    return (
        <ArticleLayout mainLinks={mainLinks} title={title}>
            <div className="prose prose-invert  hover:prose-a:text-accent prose-h3:text-2xl prose-code:bg-primary-lighter
            prose-code:rounded-md prose-code:px-1 prose-code:py-1 prose-code:mx-1 prose-code:before:content-none prose-code:after:content-none">
                <div id="sse">
                    <p >
                        The base communication in web is made by the client send <strong>one</strong> request and receiving <strong>one</strong> response,
                        But sometimes you need an different approach. With Server sent events instead of the client asking every time, it establish an long term connection, making the server send information as it seems fit.
                    </p>
                    <p>
                        For that, the server start sending an stream as a response, but never closes it.
                        Most of the streams has just junk, character with no meaning that are send to not time-out the connection.
                        But when the server wants to inform that an event just happens, it will put in the stream something in the format of <code>event: "event_name" data: "data_value"</code>.
                        The client can subscribe to specif events and ignore the others.
                    </p>

                    <Image
                        src={'https://100uselessmicroservices.s3.amazonaws.com/sse-nyancat/sse-introduction.png'}
                        alt={'server send event schema'}
                        width={0}
                        height={0}
                        sizes="100vw"
                        className=" rounded-md"
                        style={{ width: '100%', height: 'auto', maxHeight: '400px' }}
                    />

                    <p>
                        Lets make an nyan cat which change flavours every couple of seconds, it will be synchronized between all devices with the power of <strong>SSE</strong>.

                    </p>

                </div>

                <div>
                    <h2 id="go">Backend in Go</h2>

                    <p>
                        For creating the server, first setup the go project
                    </p>
                    <CodeBlockSimple code={"go mod init discord_bot && touch main.go"} />

                    <p>
                        Install the <a href="https://github.com/r3labs/sse">SSE library</a> .
                    </p>
                    <CodeBlockSimple code={"go get github.com/r3labs/sse/v2"} />
                    <p>
                        Open SSE connection to http://localhost:8080/events?stream=flavour .
                    </p>
                    <CodeBlock {...goSequence[0]} language="go" />
                    <p>
                        Currently the connection is sending no information, lets make it change flavour every 20 seconds and send the event .
                    </p>
                    <CodeBlock {...goSequence[1]} language="go" />

                    <p>
                        Add an service at http://localhost:8080/change-flavour to change the flavour manually
                    </p>
                    <CodeBlock {...goSequence[2]} language="go" />
                    <p>

                        For browsers to request a resource, they first need to confirm if it is allowed by the server. This mechanism is called a <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS">preflight request</a>.
                        Since we want to allow everyone to access the change-flavour URI with a GET request, the server should respond to an OPTIONS request with headers:
                        <code>"Access-Control-Allow-Origin":"*"</code> , <code>"Access-Control-Allow-Methods":"GET, OPTIONS"</code>,
                        <code>Access-Control-Allow-Headers":"Content-Type"</code>.
                    </p>
                    <CodeBlock {...goSequence[3]} language="go" file="main.go" />
                    <p>You can see the entire code in at <a href="https://github.com/GustavoSasaki/sse-nyancat">GitHub repository</a> <BiLogoGithub className=" inline-block" />. The code is slight different since I added logs and make it thread safe.</p>
                </div>

                <div>
                    <h2 id="react">Frontend in React</h2>
                    <p>To establish an SSE connection you will use the <code>EventSource</code> API.
                        <br />
                        Remember to put the code inside <code>{"useEffect(()=> {},[])"}</code>, ensuring this way it will only be executed on initial render of the client.
                    </p>
                    <CodeBlock {...reactSequence[0]} language="tsx" />
                    <p>Create an button to change manually the flavour.</p>
                    <CodeBlock {...reactSequence[1]} language="tsx" />
                    <p>And now you need to permit your browser to extrablash server side event with an HTTP url.
                        The optimal way would be make the back-end support HTTPS request, but this is outside the scope of this article.</p>
                    <div>
                        <NyanCat flavourUrl={flavourUrl} />
                        <NyanButton />
                    </div>
                </div>

                <div id="aws">
                    <h2>Deploy AWS</h2>
                    <p>AWS provides a small container in the free tier. We will deploy the Go server using this.</p>
                    <FigureSequence title={"Create EC2 Instance"} figures={awsSequence} />

                    <p className="mt-0">Change the permission of RSA key with <code>{'chmod 400 "ec2_permission.pem"'}</code>, then upload the server executable to EC2 instance.</p>
                    <CodeBlockSimple code={"scp -i ec2_permission.pem  server_executable ec2-user@<EC2_IP>:/home/ec2-user"} />
                    <br />

                    <p className="mb-0">Connect to the instance terminal with <code>{'ssh -i "ec2_permission.pem" ec2-user@<EC2_IP>'}</code>. And then start the server with nohup.</p>
                    <CodeBlockSimple code={"nohup ./server_executable"} />
                    <p className="mt-0">
                        The nohup commands makes processes continue running even if the terminal is closed.
                    </p>
                </div>
                <div>
                    <h2 id="tldr">TLDR</h2>
                    <div> And thats it, we have the flying toasty feline working. Among the way we learn about
                        <ul>
                            <li>How create Go server which provides Server Sent Event</li>
                            <li>What is CORS pre-flight</li>
                            <li>How consume Server Sent Event in React</li>
                            <li>Deploy with EC2 instance the GO server</li>
                        </ul>

                        <NyanCat flavourUrl={flavourUrl} />
                    </div>
                </div>
            </div>
        </ArticleLayout>
    )
}
const awsSequence = [{ url: "https://100uselessmicroservices.s3.amazonaws.com/sse-nyancat/aws/1.png", title: "Create EC2 Instance", description: 'Search for EC2 in search bar' },
{ url: "https://100uselessmicroservices.s3.amazonaws.com/sse-nyancat/aws/2.png", description: 'Click in new instance', title: "Create EC2 Instance" },
{ url: "https://100uselessmicroservices.s3.amazonaws.com/sse-nyancat/aws/3.png", description: "Choose a name for the instance and an operating system. We will use amazon linux", title: "Create EC2 Instance" },
{ url: "https://100uselessmicroservices.s3.amazonaws.com/sse-nyancat/aws/4.png", description: "Instance type is the specs of the machine, we will use t2.micro which is on free tier. Also click on Create new key pair.", title: "Create EC2 Instance" },
{ url: "https://100uselessmicroservices.s3.amazonaws.com/sse-nyancat/aws/7.png", description: "Key pair are cryptographic keys necessary for using SSH and SCP. If you are using linux select RSA, then click on Create key pair. You will download an .pem file, it will be used as input for commands latter", title: "Create EC2 Instance" },
{ url: "https://100uselessmicroservices.s3.amazonaws.com/sse-nyancat/aws/5.png", description: "On network settings you can open ports on the machine for specific protocols and IPs. Click on edit, add an rule with custom TCP for port 8080. This is the port which our server is using.", title: "Create EC2 Instance" },
{ url: "https://100uselessmicroservices.s3.amazonaws.com/sse-nyancat/aws/6.png", description: "This section configures the EBS volume attach to your EC2 instance. We need not change the default value, but remember even if you stop the EC2 instance, the EBS volumes continues running (and reducing your free quota)", title: "Create EC2 Instance" },
{ url: "https://100uselessmicroservices.s3.amazonaws.com/sse-nyancat/aws/8.png", description: "Thats all the configuration needed. Click on Launch Instance on the right. And now you can see the instance is alive", title: "Finish Creation" }
]

export const getStaticProps: GetStaticProps = async ({ locale }) => ({

    props: {
        ...(await serverSideTranslations(locale ?? "en", [
            "common",
            "nav",
        ])),

        goSequence: await CodeSequence([{
            url: "https://raw.githubusercontent.com/GustavoSasaki/sse-nyancat/main/blogVersion/mainStart.go",
            tag: "start"
        },
        {
            url: "https://raw.githubusercontent.com/GustavoSasaki/sse-nyancat/main/blogVersion/mainSSe.go",
            tag: "sse"
        },
        {
            url: "https://raw.githubusercontent.com/GustavoSasaki/sse-nyancat/main/blogVersion/mainManual.go",
            tag: "manual"
        },
        {
            url: "https://raw.githubusercontent.com/GustavoSasaki/sse-nyancat/main/blogVersion/mainCors.go",
            tag: "cors"
        }
        ]),
        reactSequence: await CodeSequence([{
            url: "https://raw.githubusercontent.com/GustavoSasaki/sse-nyancat/main/blogVersion/reactStart.tsx",
            tag: "start"
        },
        {
            url: "https://raw.githubusercontent.com/GustavoSasaki/sse-nyancat/main/blogVersion/reactButton.tsx",
            tag: "button"
        },
        ])
    },
});

