import { ReactNode } from "react";
import styles from "./Button.module.scss";

interface IButtonProps {
  children: ReactNode;
  ariaLabel: string;
  type?: "button" | "submit";
  className?: string;
  tabindex?: number,
  onClick?: () => void;
}

export const Button = ({
  children,
  ariaLabel,
  type = "button",
  className,
  tabindex=0,
  onClick,
}: IButtonProps) => {
  return (
    <button
      type={type}
      className={`${styles.button} ${className ? className : ""}`}
      aria-label={ariaLabel}
      tabIndex={tabindex}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
