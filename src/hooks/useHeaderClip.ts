import { RefObject, useLayoutEffect, useRef, useState } from "react";

export const useHeaderClip = (): [string, RefObject<HTMLElement>] => {
  const [clipPath, setClipPath] = useState<string>(`inset(0)`);
  const clipRef = useRef<HTMLElement>(null)

  useLayoutEffect(() => {
    const handleScroll = () => {
      const elementPos = clipRef.current?.offsetTop || 0
      const top = Math.max(0, window.scrollY - elementPos + (document.querySelector('header')?.clientHeight || 0));
      setClipPath(`inset(${top}px 0 0 0)`);
    };
    handleScroll(); // initial calculation on mount
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [])
  return [clipPath, clipRef]
}