import { RefObject, useEffect } from "react"

interface IAutoScroll {
  scrollRef: RefObject<HTMLDivElement | null>;
}

export const useAutoScroll = ({ scrollRef }: IAutoScroll) => {
  const isMobile = /Mobi|Android/i.test(navigator.userAgent);
  const scrollSpeed = isMobile ? 0.6 : 1;

  useEffect(() => {
    const scroll = scrollRef.current;

    if (!scroll) {
      return;
    }

    let scrollLeft = 0;
    let animateFrameId: number;

    const animate = () => {
      scrollLeft += scrollSpeed;
      if (scrollLeft >= scroll.scrollWidth / 2) {
        scrollLeft = 0;
      };
      scroll.scrollLeft = scrollLeft;
      animateFrameId = requestAnimationFrame(animate);
    }

    animateFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animateFrameId);
  }, [scrollSpeed, scrollRef]);
}