"use client";

import { useStore } from "@/app/store/store";
import { useEffect } from "react";

export const useTimeClose = () => {
  const { clearMessage, closeFlashModal, message } = useStore();

  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => {
        clearMessage();
        closeFlashModal();
      }, 5000);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [clearMessage, closeFlashModal, message]);
};
