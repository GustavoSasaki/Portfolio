import { FormControl, TextField, ThemeProvider } from "@mui/material";
import { forwardRef, RefObject, useRef, useState } from "react";
import { Underline } from "../Underline";
import { muiTheme } from "./FormTheme";
import { SendEmailButton } from "./SendEmailButton";

export const Contact = forwardRef((props, ref) => {
    const [name, setName] = useState<string>()
    const [email, setEmail] = useState<string>()
    const [message, setMessage] = useState<string>()
    const nameError = name?.length === 0
    const emailError = email?.length === 0
    const messageError = message?.length === 0

    return (
        <section ref={ref as RefObject<HTMLDivElement>}  className="gu-container pb-10">
            <Underline variant={"small"}><h6>Contact Me</h6></Underline>

            <p className="text-sm pt-1 pb-4">
                Have any question?
                Interested in hiring?
                <br />
                Send an e-mail
            </p>


            <ThemeProvider theme={muiTheme}>
                <form className="w-full" action='https://formspree.io/f/xdorepvg' method='POST'>

                    <TextField
                        id="name"
                        label="name"
                        inputProps={{ name: 'name' }}
                        placeholder="John"
                        variant="filled"
                        fullWidth
                        error={nameError}
                        required
                        type={'text'}
                        onChange={e => setName(e.target.value)}
                    />
                    <div className="h-4"></div>

                    <TextField
                        id="email"
                        label="email"
                        inputProps={{ name: 'email' }}
                        placeholder="some_guy@email.com"
                        variant="filled"
                        fullWidth
                        required
                        type={'email'}
                        error={emailError}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <div className="h-5"></div>

                    <TextField
                        id="message"
                        multiline
                        minRows={4}
                        label="message"
                        inputProps={{ name: 'message' }}
                        placeholder="I am John"
                        variant="filled"
                        fullWidth
                        required
                        type={'text'}
                        error={messageError}
                        onChange={e => setMessage(e.target.value)}
                    />
                    <div className="h-6"></div>

                    <SendEmailButton />
                </form>
            </ThemeProvider>
        </section>
    )
})