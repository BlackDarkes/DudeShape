import Image from "next/image";
import { IFurniture } from "../../types/furniture.interface";
import { FurnitureInfo } from "../FurnitureInfo/FurnitureInfo";
import styles from './Furniture.module.scss'

interface IFurnitureProps {
  furniture: IFurniture
}
  
export const Furniture = ({ furniture }: IFurnitureProps) => {
  return (
    <li className={styles.listItem}>
      <Image src={`${process.env.API_URL}${furniture.image}`} width={380} height={246} alt={furniture.name} loading="lazy" />

      <FurnitureInfo furnitureInfo={furniture} />
    </li>
  );
}