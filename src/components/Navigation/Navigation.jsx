import React from "react";
import sprite from "../../images/sprite.svg";
import s from "./Navigation.module.scss";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className={s.wrapperNav}>
      <NavLink className={s.wrapperLogo}>
        <svg className={s.logo}>
          <use href={`${sprite}#logo`} />
        </svg>
        <p className={s.logoFirstTitle}>Finance</p>
        <p className={s.logoSecondTitle}>Ledger</p>
      </NavLink>
      <ul className={s.navList}>
        <li className={s.navItem}>
          <a href="#home">Home</a>
        </li>
        <li className={s.navItem}>
          <a href="#about">About</a>
        </li>
        <li className={s.navItem}>
          <a href="#cases">Cases</a>
        </li>
        <li className={s.navItem}>
          <a href="#blog">Blog</a>
        </li>
        <li className={s.navItem}>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
};
export default Navigation;
