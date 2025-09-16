import { useStore } from "@/app/store/store";
import { useEffect } from "react";

export const useModalScroll = () => {
  const { isModalOpen } = useStore();

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isModalOpen]);
};
