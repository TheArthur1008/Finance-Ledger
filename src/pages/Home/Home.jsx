import React from "react";
import sprite from "../../images/sprite.svg";
import s from "./Home.module.scss";
import background from "../../images/background.png";

export const Home = () => {
  return (
    <div
      className={s.wrapper}
      style={{
        backgroundImage: `url(${background})`,
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className={s.container}>
        <div className={s.wrapperLogo}>
          <svg className={s.logo}>
            <use href={`${sprite}#logo`} />
          </svg>
          <p>Finance </p>
        </div>
      </div>
    </div>
  );
};
