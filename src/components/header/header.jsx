import React from "react";
import styles from "./header.module.css";
import chocolateCakeVideo from "/video/hero-video.mp4";
import menu from "/mock-img/icons/menu.svg";
import { heroData } from "../../data/data";

export const Header = () => {
  return (
    <>
      <header>
        <video className={styles.hero__video} autoPlay loop muted>
          <source src={chocolateCakeVideo} type="video/mp4" />
        </video>
        <div className={styles.hero__bg}>
          <div className="container">
            <div className={styles.hero__content}>
              <div className={styles.menu}>
                <img src={menu} alt="meu svg" loading="lazy" />
                <p>Menyu</p>
              </div>
              <div className={styles.cakes}>
                {heroData.map((item) => {
                  return (
                    <div className={styles.cake} key={item.name}>
                      <img src={item.image} alt="cake" loading="lazy" />
                      <p>{item.name}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
