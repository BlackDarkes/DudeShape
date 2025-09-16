"use client";

import { useStore } from "@/app/store/store";
import { LoginForm } from "@/features/auth/ui/LoginForm/LoginForm";
import { RegisterForm } from "@/features/auth/ui/RegisterForm/RegisterForm";
import styles from './ModalForm.module.scss'
import { ModalButton } from "../ModalButton/ModalButton";
import { useModalScroll } from "../../hooks/useModalScroll";

export const ModalForm = () => {
  const { typeForm, isModalOpen, } = useStore();
  
  useModalScroll();

  return (
    <section className={`${styles.modal} ${isModalOpen ? styles.modalActive : ""}`}>
      <div className={styles.modalContainer}>
        <ModalButton />
        {typeForm === "register" ? <RegisterForm /> : <LoginForm />}
      </div>
    </section>
  );
};
