import React from "react";

import s from "./Team.module.scss";
import TeamList from "../../components/TeamList/TeamList";

const Team = () => {
  return (
    <div className={s.container}>
      <div className={s.wrapperTitle}>
        <h2 className={s.title}>Who we are</h2>
        <h3 className={s.subtitle}>Our Professional Team</h3>
        <p className={s.description}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto,
          sapiente!
        </p>
      </div>
      <TeamList />
    </div>
  );
};

export default Team;
