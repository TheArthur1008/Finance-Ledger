import React from "react";

import s from "./Cases.module.scss";
import one from "../../images/cases/one.jpg";
import two from "../../images/cases/two.jpg";
import three from "../../images/cases/three.jpg";
import four from "../../images/cases/four.jpg";
import five from "../../images/cases/five.jpg";
import six from "../../images/cases/six.jpg";

const Cases = () => {
  return (
    <div id="cases" className={s.container}>
      <div className={s.wrapperTitle}>
        <h2 className={s.title}>This is what we do</h2>
        <h3 className={s.subtitle}>Business Cases</h3>
        <p className={s.description}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto,
          sapiente!
        </p>
      </div>
      <ul className={s.list}>
        <li className={s.item}>
          <img className={s.image} src={one} alt="team work" />
        </li>
        <li className={s.item}>
          <img className={s.image} src={two} alt="write" />
        </li>
        <li className={s.item}>
          <img className={s.image} src={three} alt="handshake" />
        </li>
        <li className={s.item}>
          <img className={s.image} src={four} alt="many hands" />
        </li>
        <li className={s.item}>
          <img className={s.image} src={five} alt="computer work" />
        </li>
        <li className={s.item}>
          <img className={s.image} src={six} alt="towers" />
        </li>
      </ul>
    </div>
  );
};

export default Cases;
