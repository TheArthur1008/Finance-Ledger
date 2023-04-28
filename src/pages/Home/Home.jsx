import React from "react";
import s from "./Home.module.scss";
import background from "../../images/background.png";
import Button from "../../components/Button/Button";
import Navigation from "../../components/Navigation/Navigation";

const Home = () => {
  return (
    <div
      id="home"
      className={s.wrapper}
      style={{
        backgroundImage: `url(${background})`,
      }}
    >
      <div className={s.container}>
        <Navigation />
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
