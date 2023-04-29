import React from "react";

import s from "./IconList.module.scss";
import sprite from "../../../images/sprite.svg";

const IconList = () => {
  return (
    <>
      <ul className={s.list}>
        <li className={s.item}>
          <svg className={s.icon}>
            <use href={`${sprite}#facebook`} />
          </svg>
        </li>
        <li className={s.item}>
          <svg className={s.icon}>
            <use href={`${sprite}#twiter`} />
          </svg>
        </li>
        <li className={s.item}>
          <svg className={s.icon}>
            <use href={`${sprite}#youtube`} />
          </svg>
        </li>
        <li className={s.item}>
          <svg className={s.icon}>
            <use href={`${sprite}#linkedin`} />
          </svg>
        </li>
      </ul>
    </>
  );
};

export default IconList;
