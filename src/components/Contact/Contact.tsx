import { forwardRef, RefObject, useState } from "react";
import { useTranslation } from "next-i18next";
import { Araucaria } from "./Araucaria";
import { SendEmail } from "./SendEmail";

const Contact = forwardRef((props, ref) => {
  const { t } = useTranslation("contact");

  const [name, setName] = useState<string>();
  const [email, setEmail] = useState<string>();
  const [message, setMessage] = useState<string>();
  const nameError = name?.length === 0;
  const emailError = email?.length === 0;
  const messageError = message?.length === 0;

  return (
    <div className=" flex mx-auto max-w-[1315px] relative "
      ref={ref as RefObject<HTMLDivElement>}>
      <div className="absolute hidden min-[1315px]:block bottom-[-45px] left-[-10px]   ">
        <Araucaria />
      </div>

      <SendEmail />

      <div className="absolute hidden min-[1315px]:block bottom-[-90px] right-[15px]  scale-75 -scale-x-100">
        <Araucaria />
      </div>
    </div>
  );
});

Contact.displayName = "Contact";
export default Contact;
