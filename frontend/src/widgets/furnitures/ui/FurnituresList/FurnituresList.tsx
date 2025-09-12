"use client"

import { Furniture } from "@/entities/furniture";
import { useGetAllFurniture } from "@/entities/furniture/api/getAllFurniture";
import { memo } from "react";
import styles from './FurnituresList.module.scss'

const FurnituresList = memo(() => {
  const { isLoading, error, data: furnitures } = useGetAllFurniture();

  if (error) {
    return <p>{error.message}</p>
  }

  if (isLoading) {
    return <p>Loading...</p>
  }

  return (
    <ul className={styles.list}>
      {furnitures?.map((furniture) => (
        <Furniture key={furniture.id} furniture={furniture} />
      ))}
    </ul>
  );
})

FurnituresList.displayName = "FurnituresList";
export { FurnituresList };