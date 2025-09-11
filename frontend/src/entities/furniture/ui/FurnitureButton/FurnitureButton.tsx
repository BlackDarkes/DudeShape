import { ReactNode } from "react";
import styles from "./FurnitureButton.module.scss";

interface IFurnitureButtonProps {
  children: ReactNode;
  onClick: () => void;
  ariaLabel: string;
  classname?: string;
}

export const FurnitureButton = ({
  children,
  onClick,
  ariaLabel,
  classname,
}: IFurnitureButtonProps) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`${styles.button} ${classname ? classname : ""}`}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
};
