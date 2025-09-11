import { Button } from "@/shared/ui";
import { IFurniture } from "../../types/furniture.interface";
import { FurnitureButton } from "../FurnitureButton/FurnitureButton";
import IconHeart from "../../assets/heart.svg";
import IconShare from '../../assets/shared.svg';

interface IFurnitureInfoProps {
  furnitureInfo: Omit<IFurniture, "image">
}
  
export const FurnitureInfo = ({ furnitureInfo }: IFurnitureInfoProps) => {
  return (
    <div>
      <div>
        <p>{furnitureInfo.name}</p>

        <div>
          <FurnitureButton onClick={() => {}} ariaLabel="favorites">
            <IconHeart />
          </FurnitureButton>

          <FurnitureButton onClick={() => {}} ariaLabel="share">
            <IconShare />
          </FurnitureButton>
        </div>
      </div>

      <div>
        <p>${furnitureInfo.price}</p>

        <Button ariaLabel="Buy Now">Buy Now</Button>
      </div>
    </div>
  );
}