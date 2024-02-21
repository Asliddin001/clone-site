import React, { useState } from "react";
import Slider from "react-slick";
import styles from "./cakes.module.css";
import { cakesData } from "../../data/data";

export const Cakes = () => {
  const [activeItem, setActiveItem] = useState(null);

  const settings = {
    centerMode: true,
    infinite: true,
    centerPadding: "0",
    slidesToShow: 5,
    speed: 500,
    focusOnSelect: true,

    beforeChange: (current, next) => {
      setActiveItem(next);
    },
  };

  return (
    <>
      <div className="container">
        <div className={styles.cakes__title}>
          <h3>tortlar</h3>
        </div>
      </div>

      <div className={styles.cakes__bg}>
        <div className="container">
          <Slider {...settings}>
            {cakesData.map((cake, index) => (
              <button
                key={cake.id}
                className={`${styles.carouselItem} ${
                  activeItem === index ? styles.active : ""
                }`}
                onClick={() => setActiveItem(index)}>
                <img src={cake.image} alt={cake.name} />
              </button>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
};
