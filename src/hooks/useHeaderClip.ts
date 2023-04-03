import { RefObject, useLayoutEffect, useRef, useState } from "react";

export const useHeaderClip = (): [string, RefObject<HTMLElement>] => {
  const [clipPath, setClipPath] = useState<string>(`inset(0)`);
  const clipRef = useRef<HTMLElement>(null)

  useLayoutEffect(() => {
    const container = document.querySelector('.parallax-container')
    if (container) {
      const handleScroll = () => {
        const elementPos = clipRef.current?.offsetTop || 0
        const top = Math.max(0, container.scrollTop - elementPos + (document.querySelector('header')?.clientHeight || 0));
        setClipPath(`inset(${top}px 0 0 0)`);
      };
      handleScroll(); // initial calculation on mount
      container.addEventListener('scroll', handleScroll);
      return () => container.removeEventListener('scroll', handleScroll);
    }
  }, [])
  return [clipPath, clipRef]
}