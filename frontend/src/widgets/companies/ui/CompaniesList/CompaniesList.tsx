import Image from "next/image";
import { companiesImages } from "../../constants/companiesImages";

export const CompaniesList = () => {
  return (
    <ul>
      {companiesImages.map((image) => (
        <li key={image.id}>
          <Image src={image.src} alt="компания" width={image.width} height={image.height} />
        </li>
      ))}
    </ul>
  );
}