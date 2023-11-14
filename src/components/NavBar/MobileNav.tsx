import { Fragment, MutableRefObject } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { scrollToPosition } from "./scrollToPosition";
import { useTranslation } from "next-i18next";

interface Input {
  contactRef: MutableRefObject<HTMLInputElement | null>;
  aboutRef: MutableRefObject<HTMLInputElement | null>;
  projectsRef: MutableRefObject<HTMLInputElement | null>;
  open: boolean;
  setOpen: (input: boolean) => void;
}

export default function MobileNav({
  open,
  setOpen,
  contactRef,
  aboutRef,
  projectsRef,
}: Input) {
  const { t } = useTranslation("nav");

  const scrollToPositionMobile: typeof scrollToPosition = (ref) => {
    setOpen(false);
    scrollToPosition(ref);
  };

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-primary bg-opacity-75 transition-opacity " />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden ">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10 top-14">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto relative w-screen max-w-[16rem]">
                  <div className="flex items-start pl-8 gap-4 h-full flex-col overflow-y-scroll bg-primary-lighter py-6 shadow-xl">
                    <LinkMobile
                      onClick={() => scrollToPositionMobile(aboutRef)}
                    >
                      <p>{t("about")}</p>
                    </LinkMobile>
                    <LinkMobile
                      onClick={() => scrollToPositionMobile(projectsRef)}
                    >
                      <p>{t("portfolio")}</p>
                    </LinkMobile>
                    <LinkMobile
                      onClick={() => scrollToPositionMobile(contactRef)}
                    >
                      <p>{t("contact")}</p>
                    </LinkMobile>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}

function LinkMobile({
  children,
  onClick,
}: {
  children: JSX.Element[] | JSX.Element;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="capitalize text-2xl text-secondary font-semibold"
    >
      {children}
    </button>
  );
}
