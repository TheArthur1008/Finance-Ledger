import React from "react";

import s from "./Team.module.scss";
import john from "../../images/team/john.jpg";
import jane from "../../images/team/jane.jpg";
import smith from "../../images/team/smith.jpg";

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
      <ul className={s.list}>
        <li className={s.item}>
          <img className={s.image} src={john} alt="team work" />
          <p className={s.descriptionTeam}>
            <span className={s.name}>John Doe</span>
            <span className={s.jobTitle}>President</span>
          </p>
        </li>
        <li className={s.item}>
          <img className={s.image} src={jane} alt="write" />
          <p className={s.descriptionTeam}>
            <span className={s.name}>Jane Doe</span>
            <span className={s.jobTitle}>Vice President</span>
          </p>
        </li>
        <li className={s.item}>
          <img className={s.image} src={smith} alt="handshake" />
          <p className={s.descriptionTeam}>
            <span className={s.name}>Steve Smith</span>
            <span className={s.jobTitle}>Marketing Head</span>
          </p>
        </li>
      </ul>
    </div>
  );
};

export default Team;
