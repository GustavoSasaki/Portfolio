export function getPrefersReducedMotion(): boolean {
  if (!window) return false;

  const QUERY = "(prefers-reduced-motion: reduce)";
  const mediaQueryList = window.matchMedia(QUERY);

  const prefersReducedMotion = mediaQueryList.matches;
  return prefersReducedMotion;
}
