import { FC, SVGProps } from "react";
import IconFacebook from "../assets/facebook.svg";
import IconTwitter from "../assets/twitter.svg";
import IconInstagram from "../assets/instagram.svg";
import IconYouTube from "../assets/youtube.svg";

interface ISocialItems {
  id: number;
  icon: FC<SVGProps<SVGSVGElement>>;
}

export const socialItems: ISocialItems[] = [
  {
    id: 1,
    icon: IconFacebook,
  },
  {
    id: 2,
    icon: IconInstagram,
  },
  {
    id: 3,
    icon: IconTwitter,
  },
  {
    id: 4,
    icon: IconYouTube,
  },
];
