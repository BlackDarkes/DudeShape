/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"

import Image from "next/image";
import { categoryItems } from "../../constants/categoryItems";
import { useState } from "react";

export const CategoriesSelector = () => {
  const [categoryImage, setCategoryImage] = useState<string>("/categories/category.png");

  return (
    <div>
      <div>
        <Image src={categoryImage} width={552} height={389} alt="category image" />
      </div>

      <div>
        {categoryItems.map(({id, text, image: Icon }) => (
          <button type="button" key={id}>
            <Icon />
            {text}
          </button>
        ))}
      </div>
    </div>
  );
}