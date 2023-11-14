import { TextField, ThemeProvider } from "@mui/material";
import { forwardRef, RefObject, useRef, useState } from "react";
import { useTranslation } from "next-i18next";
import { Underline } from "../Underline";
import { muiTheme } from "./FormTheme";
import { SendEmailButton } from "./SendEmailButton";

const Contact = forwardRef((props, ref) => {
  const { t } = useTranslation("contact");

  const [name, setName] = useState<string>();
  const [email, setEmail] = useState<string>();
  const [message, setMessage] = useState<string>();
  const nameError = name?.length === 0;
  const emailError = email?.length === 0;
  const messageError = message?.length === 0;

  return (
    <section
      ref={ref as RefObject<HTMLDivElement>}
      className="gu-container pb-10"
    >
      <Underline variant={"small"}>
        <h2>{t("title")}</h2>
      </Underline>

      <p className="text-sm sm:text-base pt-1 pb-4">
        {t("description.any-question")} {t("description.interest-hiring")}
        <br />
        {t("description.send-email")}
      </p>

      <ThemeProvider theme={muiTheme}>
        <form
          className="w-full"
          action="https://formspree.io/f/xdorepvg"
          method="POST"
        >
          <TextField
            id="name"
            label="name"
            inputProps={{ name: t("form.name.title") }}
            placeholder={t("form.name.placeholder")}
            variant="filled"
            fullWidth
            error={nameError}
            required
            type={"text"}
            onChange={(e) => setName(e.target.value)}
          />
          <div className="h-4"></div>

          <TextField
            id="email"
            label="email"
            inputProps={{ name: t("form.email.title") }}
            placeholder={t("form.email.placeholder")}
            variant="filled"
            fullWidth
            required
            type={"email"}
            error={emailError}
            onChange={(e) => setEmail(e.target.value)}
          />
          <div className="h-5"></div>

          <TextField
            id="message"
            multiline
            minRows={4}
            label="message"
            inputProps={{ name: t("form.message.title") }}
            placeholder={t("form.message.placeholder")}
            variant="filled"
            fullWidth
            required
            type={"text"}
            error={messageError}
            onChange={(e) => setMessage(e.target.value)}
          />
          <div className="h-6"></div>

          <SendEmailButton />
        </form>
      </ThemeProvider>
    </section>
  );
});

Contact.displayName = "Contact";
export default Contact;
