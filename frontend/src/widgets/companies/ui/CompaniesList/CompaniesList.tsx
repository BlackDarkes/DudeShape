import Image from "next/image";
import { companiesImages } from "../../constants/companiesImages";
import styles from './CompaniesList.module.scss'

export const CompaniesList = () => {
  return (
    <ul className={styles.list}>
      {companiesImages.map((image) => (
        <li key={image.id} className={styles.listItem}>
          <Image src={image.src} alt="компания" width={image.width} height={image.height} />
        </li>
      ))}
    </ul>
  );
}