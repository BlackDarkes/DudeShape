"use client"

import { Furniture } from "@/entities/furniture";
import { useGetAllFurniture } from "@/entities/furniture/api/getAllFurniture";

export const FurnituresList = () => {
  const { isLoading, error, data: furnitures } = useGetAllFurniture();

  return (
    <ul>
      {furnitures?.map((furniture) => (
        <Furniture key={furniture.id} furniture={furniture} />
      ))}
    </ul>
  );
}