"use client";

import { memo } from "react";
import { categoryItems } from "../../constants/categoryItems";
import styles from "./CategoryList.module.scss";
import { useStore } from "@/app/store/store";

const CategoryList = memo(() => {
  const { categoryNumber, handleNumber } = useStore();

  return (
    <div className={styles.buttons}>
      {categoryItems.map(({ id, text, image: Icon }) => (
        <button
          type="button"
          key={id}
          className={`${styles.buttonsButton} ${
            categoryNumber === id ? styles.buttonsButtonActive : ""
          }`}
          onClick={() => handleNumber(id)}
        >
          <Icon />
          {text}
        </button>
      ))}
    </div>
  );
});

CategoryList.displayName = "CategoryList";
export { CategoryList };
