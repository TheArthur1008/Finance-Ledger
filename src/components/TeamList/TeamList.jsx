import React from "react";

import s from "./TeamList.module.scss";

import person1jpg from "../../images/team/person1.jpg";
import person1Webp from "../../images/team/person1.webp";
import person1jpg2x from "../../images/team/person1@2x.jpg";
import person1Webp2x from "../../images/team/person1@2x.webp";
import person2jpg from "../../images/team/person2.jpg";
import person2Webp from "../../images/team/person2.webp";
import person2jpg2x from "../../images/team/person2@2x.jpg";
import person2Webp2x from "../../images/team/person2@2x.webp";
import person3jpg from "../../images/team/person3.jpg";
import person3Webp from "../../images/team/person3.webp";
import person3jpg2x from "../../images/team/person3@2x.jpg";
import person3Webp2x from "../../images/team/person3@2x.webp";

import Picture from "../Picture/Picture";
import IconListTeam from "../IconLists/IconListTeam/IconListTeam";

const TeamList = () => {
  return (
    <>
      <ul className={s.list}>
        <li className={s.item}>
          <div className={s.wrapperImage}>
            <Picture
              className={s.image}
              jpg1x={person1jpg}
              jpg2x={person1Webp}
              webp1x={person1jpg2x}
              webp2x={person1Webp2x}
            />
            <div className={s.overlay}>
              <IconListTeam />
            </div>
          </div>
          <p className={s.descriptionTeam}>
            <span className={s.name}>John Doe</span>
            <span className={s.jobTitle}>President</span>
          </p>
        </li>
        <li className={s.item}>
          <div className={s.wrapperImage}>
            <Picture
              className={s.image}
              jpg1x={person2jpg}
              jpg2x={person2Webp}
              webp1x={person2jpg2x}
              webp2x={person2Webp2x}
            />
            <div className={s.overlay}>
              <IconListTeam />
            </div>
          </div>
          <p className={s.descriptionTeam}>
            <span className={s.name}>Jane Doe</span>
            <span className={s.jobTitle}>Vice President</span>
          </p>
        </li>
        <li className={s.item}>
          <div className={s.wrapperImage}>
            <Picture
              className={s.image}
              jpg1x={person3jpg}
              jpg2x={person3Webp}
              webp1x={person3jpg2x}
              webp2x={person3Webp2x}
            />
            <div className={s.overlay}>
              <IconListTeam />
            </div>
          </div>
          <p className={s.descriptionTeam}>
            <span className={s.name}>Steve Smith</span>
            <span className={s.jobTitle}>Marketing Head</span>
          </p>
        </li>
      </ul>
    </>
  );
};

export default TeamList;
