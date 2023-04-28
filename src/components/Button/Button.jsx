import React from "react";
import s from "./Button.module.scss";
import sprite from "../../images/sprite.svg";

const Button = () => {
  return (
    <button type="button" className={s.button}>
      <svg className={s.icon}>
        <use href={`${sprite}#smallright`} />
      </svg>
      <span className={s.title}>Read More</span>
    </button>
  );
};
export default Button;
