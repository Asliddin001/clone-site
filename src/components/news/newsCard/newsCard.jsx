import React from "react";
import styles from "./newsCard.module.css";
import { MdOutlineShoppingBag } from "react-icons/md";

export const NewsCard = ({ title, description, price, currency, cardimg }) => {
  const displayCurrency = (currencyCode) => {
    switch (currencyCode) {
      case "USD":
        return "$";
      case "UZS":
        return "so'm";
      default:
        return currencyCode;
    }
  };

  return (
    <div className={styles.card}>
      <div className={styles.card__img}>
        <span>yan</span>
        <img src={cardimg} alt="card img" loading="lazy" />
      </div>
      <div className={styles.card__details}>
        <MdOutlineShoppingBag size={30} />
      </div>
      <div className={styles.card__info}>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <div className={styles.card__price}>
        <p>{price}</p>
        <p>{displayCurrency(currency)}</p>
      </div>
    </div>
  );
};
