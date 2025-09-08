import { ReactNode } from "react";
import styles from "./Button.module.scss";

interface IButtonProps {
  children: ReactNode;
  type?: "button" | "submit";
  className?: string;
}

export const Button = ({
  children,
  type = "button",
  className,
}: IButtonProps) => {
  return (
    <button
      type={type}
      className={`${styles.button} ${className ? className : ""}`}
    >
      {children}
    </button>
  );
};
