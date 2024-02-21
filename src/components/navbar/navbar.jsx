import React, { useState, useEffect } from "react";
import styles from "./navbar.module.css";
import { CiSearch } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import { MdOutlineShoppingBag } from "react-icons/md";
import logo from "/mock-img/icons/logo.svg";
import { RxHamburgerMenu } from "react-icons/rx";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 1);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`${styles.nav__bg} ${isScrolled ? styles.scrolled : ""}`}>
      <div className="container">
        <nav className={styles.nav}>
          <div className={styles.nav__logo}>
            <img src={logo} alt="logo" loading="lazy" />
            <p>Toshkent</p>
          </div>
          <ul className={styles.nav__list}>
            <li>
              <a href="#">Biz haqimizda</a>
            </li>
            <li>
              <a href="#">Menyu</a>
            </li>
            <li>
              <a href="#">Qadriyatlarimiz</a>
            </li>
            <li>
              <a href="#">Manzillarimiz</a>
            </li>
            <li>
              <a href="#">Karyera</a>
            </li>
            <li>
              <a href="#">Keytring</a>
            </li>
            <li>
              <a href="#">Safia Store</a>
            </li>
          </ul>
          <div className={styles.nav__search}>
            <p>78 113 40 40</p>
            <CiSearch size={25} />
            <CgProfile size={25} />
            <MdOutlineShoppingBag size={25} />
            <RxHamburgerMenu size={25} />
          </div>
        </nav>
      </div>
    </div>
  );
};
