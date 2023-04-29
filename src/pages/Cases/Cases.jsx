import React from "react";

import s from "./Cases.module.scss";
import CasesList from "../../components/CasesList/CasesList";

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
      <CasesList />
    </div>
  );
};

export default Cases;
