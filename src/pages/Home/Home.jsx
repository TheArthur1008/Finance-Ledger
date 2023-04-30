import React from "react";

import s from "./Home.module.scss";
import sprite from "../../images/sprite.svg";
import background from "../../images/background.jpg";

import Navigation from "../../components/Navigation/Navigation";

const Home = () => {
  return (
    <div
      id="home"
      className={s.wrapper}
      style={{
        backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(${background})`,
      }}
    >
      {" "}
      <Navigation />
      <div className={s.container}>
        <div className={s.wrapperTitle}>
          <h1 className={s.title}>The Sky Is The Limit</h1>
          <div className={s.wrapperSub}>
            <p className={s.subtitle}>
              We provide world class financial assistance
            </p>
          </div>
        </div>
        <button type="button" className={s.button}>
          <svg className={s.buttonIcon}>
            <use href={`${sprite}#smallright`} />
          </svg>
          <span>Read More</span>
        </button>
      </div>
    </div>
  );
};

export default Home;
