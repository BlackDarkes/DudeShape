"use client";

import Image from "next/image";
import { ChangeEvent, useState } from "react";
import { useProduct } from "../../api/useProduct";
import styles from './CartItem.module.scss'

interface ICartItemProps {
  id: string;
  quantity: number;
}

export const CartItem = ({ id, quantity }: ICartItemProps) => {
  const { data: product } = useProduct(id);
  const [count, setCount] = useState<number | string>(quantity);

  const handleQuality = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value === "" || (/^\d$/.test(value) && value.length === 1)) {
      setCount(value);
    }
  };

  return (
    <li className={styles.item}>
      <div className={styles.itemInfo}>
        {product && product.image ? (
          <Image
            src={`${process.env.API_URL}${product.image}`}
            alt={`image ${product.name}`}
            width={70}
            height={50}
          />
        ) : null}

        <div>
          <h3 className={styles.itemName}>{product ? product.name : ""}</h3>
          <p className={styles.itemPrice}>{product ? product.price : ""} $</p>
        </div>
      </div>

      <div className={styles.itemButtonContainer}>
        <button type="button" className={styles.itemClose} />
        <input
          type="text"
          id=" counter"
          value={count}
          onChange={handleQuality}
          className={styles.itemInput}
        />
      </div>
    </li>
  );
};
