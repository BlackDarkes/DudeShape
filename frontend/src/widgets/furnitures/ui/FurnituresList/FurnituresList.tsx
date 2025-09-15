"use client"

import { Furniture } from "@/entities/furniture";
import { useGetAllFurniture } from "@/entities/furniture/api/getAllFurniture";
import { memo, RefObject } from "react";
import styles from './FurnituresList.module.scss'

interface IFurnitureProps {
  scrollRef: RefObject<HTMLUListElement | null>
}

const FurnituresList = memo(({ scrollRef }: IFurnitureProps) => {
  const { isLoading, error, data: furnitures } = useGetAllFurniture();

  if (error) {
    return <p>{error.message}</p>
  }

  if (isLoading) {
    return <p>Loading...</p>
  }

  return (
    <ul className={styles.list} ref={scrollRef}>
      {furnitures?.map((furniture) => (
        <Furniture key={furniture.id} furniture={furniture} />
      ))}
    </ul>
  );
})

FurnituresList.displayName = "FurnituresList";
export { FurnituresList };