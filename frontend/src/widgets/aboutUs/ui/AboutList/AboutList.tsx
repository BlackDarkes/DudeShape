import Image from "next/image";
import { aboutItems } from "../../constants/aboutItems";
import styles from './AboutList.module.scss'

export const AboutList = () => {
  return (
    <ul className={styles.list}>
      {aboutItems.map((about) => (
        <li key={about.id} className={styles.listItem}>
          <Image src={about.image.src} width={about.image.width} height={about.image.height} alt="Иконка" />
          <div>
            <h3 className={styles.listTitle}>{about.title}</h3>
            <p className={styles.listText}>{about.body}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}