import { useEffect, useRef, useState } from "react";

export default function About() {
  // const [clipPath, setClipPath] = useState<string>('polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)');

  // useEffect(() => {
  //   function handleScroll() {
  //     const element = clipRef.current;
  //     console.log(element)
  //     if (!element) return;

  //     const elementOffset = element.offsetTop;
  //     const scrollPosition = window.scrollY;
  //     const viewportHeight = window.innerHeight;
  //     const distanceFromViewportTop = elementOffset - scrollPosition;
  //     const clipPathHeight = Math.max(0, viewportHeight - distanceFromViewportTop);
  //     const percentage = clipPathHeight / viewportHeight;
  //     setClipPath(`polygon(0% ${percentage * 100}%, 100% ${percentage * 100}%, 100% 100%, 0% 0%)`);
  //   }
  //   window.addEventListener('scroll', handleScroll);
  //   return () => window.removeEventListener('scroll', handleScroll);
  // }, []);

  // const clipRef = useRef<HTMLElement>(null);

  // style={{ clipPath }} ref={clipRef}

  return (
    <section >
      <h2>About Me</h2>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium cupiditate commodi, facere corporis vel culpa et hic cum. Quo quia vel, nemo repellat mollitia nobis id fuga vitae veniam aliquam.</p>

      <h2>Skills</h2>
      <div>skills here</div>
    </section>
  )
}