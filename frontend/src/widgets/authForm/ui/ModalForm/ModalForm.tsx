"use client";

import { useStore } from "@/app/store/store";
import { LoginForm } from "@/features/auth/ui/LoginForm/LoginForm";
import { RegisterForm } from "@/features/auth/ui/RegisterForm/RegisterForm";
import styles from './ModalForm.module.scss'
import { ModalButton } from "../ModalButton/ModalButton";
import { useModalScroll } from "../../hooks/useModalScroll";
import { MouseEvent } from "react";

export const ModalForm = () => {
  const { typeForm, isModalOpen, handleModalOpen } = useStore();
  
  useModalScroll();

  const handleInnerClick = (event: MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
  }

  return (
    <section className={`${styles.modal} ${isModalOpen ? styles.modalActive : ""}`} onClick={() => handleModalOpen()}>
      <div className={styles.modalContainer} onClick={handleInnerClick}>
        <ModalButton />
        {typeForm === "register" ? <RegisterForm /> : <LoginForm />}
      </div>
    </section>
  );
};
