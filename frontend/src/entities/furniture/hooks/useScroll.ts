"use client"

import { useRef } from "react"

export const useScroll = () => {
  const scrollRef = useRef<HTMLUListElement | null>(null);

  const scrollPreview = () => {
    if (scrollRef.current) {
      const listItem = scrollRef.current?.firstElementChild as HTMLElement | null;
      
      if (listItem) {
        scrollRef.current.scrollBy({ left: -listItem.clientWidth, behavior: "smooth" });
      }
    }
  }

  const scrollNext = () => {
    if (scrollRef.current) {
      const listItem = scrollRef.current?.firstElementChild as HTMLElement | null;
      
      if (listItem) {
        scrollRef.current.scrollBy({ left: listItem.clientWidth, behavior: "smooth" });
      }
    }
  }

  return { scrollRef, scrollPreview, scrollNext };
}