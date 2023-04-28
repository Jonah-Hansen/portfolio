import { RefObject, useEffect, useRef, useState } from "react";

export const useHeaderClip = (): [string, RefObject<HTMLElement>] => {
  const [maskImage, setMask] = useState<string>(`none`);
  const clipRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const container = document.querySelector('.parallax-container')
    if (container) {
      const handleScroll = () => {
        const elementPos = clipRef.current?.offsetTop || 0
        const top = Math.max(0, container.scrollTop - elementPos + 80 + (document.querySelector('header')?.clientHeight || 0));
        setMask(`linear-gradient(to bottom, transparent 0%, transparent ${top - 100}px, black ${top}px, black 100%)`);
      };
      handleScroll(); // initial calculation on mount
      container.addEventListener('scroll', handleScroll);
      return () => container.removeEventListener('scroll', handleScroll);
    }
  }, [])
  return [maskImage, clipRef]
}