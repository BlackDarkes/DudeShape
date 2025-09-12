/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"

import Image from "next/image";
import { categoryItems } from "../../constants/categoryItems";
import { useState } from "react";
import styles from './CategoriesSelector.module.scss'
import { CategoryList } from "../CategoryList/CategoryList";

export const CategoriesSelector = () => {
  const [categoryImage, setCategoryImage] = useState<string>("/categories/category.png");

  return (
    <div className={styles.container}>
      <div className={styles.containerImage}>
        <Image src={categoryImage} width={552} height={389} alt="category image" className={styles.containerImagePic} />
      </div>

      <CategoryList />
    </div>
  );
}