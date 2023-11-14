import { useEffect, useState } from "react";
import useScrollDirection from "./NavBar/useScrollDirection";

export function useSlidInStyle({
  wasEverVisible,
  preStyle,
}: {
  wasEverVisible: boolean;
  preStyle: string;
}) {
  const animationState = useSlidInState({ wasEverVisible });

  return GetSlideInClass(animationState, preStyle);
}

function GetSlideInClass(
  state: "pre" | "active" | "locked" | undefined,
  preStyle: string,
) {
  if (!state || state === "locked") return "";
  if (state === "active") return " transition-all duration-1000 ";

  return preStyle;
}

export function useSlidInState({
  wasEverVisible,
}: {
  wasEverVisible: boolean;
}) {
  const scrollDirection = useScrollDirection();
  const [animationState, setAnimationState] = useState<
    "pre" | "active" | "locked"
  >();
  const [firstScrollRendered, setFirstScrollRendered] = useState(false);

  useEffect(() => {
    if (scrollDirection === null) return;

    const firstScroll = !firstScrollRendered;
    setFirstScrollRendered(true);

    if (animationState === "locked" || animationState === "active") return;

    if (wasEverVisible && firstScroll) {
      setAnimationState("locked");
    } else if (wasEverVisible && scrollDirection === "up") {
      setAnimationState("locked");
    } else if (wasEverVisible && scrollDirection === "down") {
      setAnimationState("active");
    } else {
      setAnimationState("pre");
    }
  }, [wasEverVisible, scrollDirection]);

  return animationState;
}
