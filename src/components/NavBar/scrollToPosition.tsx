import { MutableRefObject } from "react";
import { getPrefersReducedMotion } from "./getPrefersReducedMotion";

export const scrollToPosition = (ref?: MutableRefObject<HTMLInputElement | null>) => {
  console.log(ref)
  if (!ref?.current) return

  const redutceMotion = getPrefersReducedMotion()
  window.scrollTo({
    behavior: !redutceMotion ? 'smooth' : undefined,
    top: ref.current.offsetTop,
  });
}

export const scrollToHome = () => {

  const redutceMotion = getPrefersReducedMotion()
  window.scrollTo({
    behavior: !redutceMotion ? 'smooth' : undefined,
    top: 0
  });
}