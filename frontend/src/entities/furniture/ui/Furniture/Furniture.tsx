import Image from "next/image";
import { IFurniture } from "../../types/furniture.interface";
import { FurnitureInfo } from "../FurnitureInfo/FurnitureInfo";

interface IFurnitureProps {
  furniture: IFurniture
}
  
export const Furniture = ({ furniture }: IFurnitureProps) => {
  return (
    <li>
      <Image src={`${process.env.API_URL}${furniture.image}`} width={380} height={246} alt={furniture.name} />

      <FurnitureInfo furnitureInfo={furniture} />
    </li>
  );
}