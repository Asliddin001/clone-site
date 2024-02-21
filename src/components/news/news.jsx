import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./news.module.css";
import { NewsCard } from "./newsCard/newsCard";
import { newsData } from "../../data/data";

export const News = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };

  return (
    <div className="container">
      <div className={styles.news}>
        <h1>YANGILARI</h1>
      </div>
      <div className={styles.cards}>
        <Slider {...settings}>
          {newsData.map((item) => (
            <NewsCard
              key={item.id}
              title={item.title}
              description={item.description}
              price={item.price}
              currency={item.currency}
              cardimg={item.cardImg}
            />
          ))}
        </Slider>
      </div>
    </div>
  );
};
