import IconFirst from "../assets/first.svg";
import IconSecond from "../assets/second.svg";
import IconThree from "../assets/three.svg";
import IconFour from "../assets/four.svg";
import IconFive from "../assets/five.svg";
import IconSix from "../assets/six.svg";
import { FC, SVGProps } from "react";

interface ICategoryItems {
  id: number;
  text: string;
  image: FC<SVGProps<SVGSVGElement>>;
}

export const categoryItems: ICategoryItems[] = [
  {
    id: 1,
    text: "Living Room",
    image: IconFirst,
  },
  {
    id: 2,
    text: "Kitchen",
    image: IconSecond,
  },
  {
    id: 3,
    text: "Dining Room",
    image: IconThree,
  },
  {
    id: 4,
    text: "Office",
    image: IconFour,
  },
  {
    id: 5,
    text: "Bed Room",
    image: IconFive,
  },
  {
    id: 6,
    text: "Hallway",
    image: IconSix,
  },
] ;