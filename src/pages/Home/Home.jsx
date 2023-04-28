import React from "react";
import sprite from "../../images/sprite.svg";
import s from "./Home.module.scss";
import background from "../../images/background.png";
import Button from "../../components/Button/Button";

const Home = () => {
  return (
    <div
      className={s.wrapper}
      style={{
        backgroundImage: `url(${background})`,
      }}
    >
      <div className={s.container}>
        <nav className={s.wrapperNav}>
          <div className={s.wrapperLogo}>
            <svg className={s.logo}>
              <use href={`${sprite}#logo`} />
            </svg>
            <p className={s.logoFirstTitle}>Finance</p>
            <p className={s.logoSecondTitle}>Ledger</p>
          </div>
          <ul className={s.navList}>
            <li className={s.navItem}>Home</li>
            <li className={s.navItem}>About</li>
            <li className={s.navItem}>Cases</li>
            <li className={s.navItem}>Blog</li>
            <li className={s.navItem}>Contact</li>
          </ul>
        </nav>
        <div className={s.wrapperTitle}>
          <h1 className={s.title}>The Sky Is The Limit</h1>
          <div className={s.wrapperSub}>
            <p className={s.subtitle}>
              We provide world class financial assistance
            </p>
          </div>
        </div>
        <Button />
      </div>
    </div>
  );
};

export default Home;
