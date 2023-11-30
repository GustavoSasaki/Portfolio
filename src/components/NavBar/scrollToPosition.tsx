import { MutableRefObject } from "react";
import { getPrefersReducedMotion } from "./getPrefersReducedMotion";
import { isMobile } from 'react-device-detect';

export const scrollToPosition = (
  ref?: MutableRefObject<HTMLInputElement | null>,
) => {
  if (!ref?.current) return;

  const reduceMotion = getPrefersReducedMotion();
  window.scrollTo({
    behavior: !reduceMotion ? "smooth" : undefined,
    top: ref.current.offsetTop,
  });
};

export const scrollToHome = () => {
  if (isMobile) {
    const reduceMotion = getPrefersReducedMotion();
    window.scrollTo({
      behavior: !reduceMotion ? "smooth" : undefined,
      top: 0,
    });
  }else{
    location.reload()
  }
};
