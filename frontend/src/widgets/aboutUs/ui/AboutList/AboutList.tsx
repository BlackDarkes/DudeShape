import Image from "next/image";
import { aboutItems } from "../../constants/aboutItems";

export const AboutList = () => {
  return (
    <ul>
      {aboutItems.map((about) => (
        <li key={about.id}>
          <Image src={about.image.src} width={about.image.width} height={about.image.height} alt="Иконка" />
          <div>
            <h3>{about.title}</h3>
            <p>{about.body}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}