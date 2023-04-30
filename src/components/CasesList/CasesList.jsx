import React, { useState } from "react";
import FsLightbox from "fslightbox-react";

import s from "./CasesList.module.scss";
import Picture from "../Picture/Picture";

import cases1jpg from "../../images/cases/cases1.jpg";
import cases1Webp from "../../images/cases/cases1.webp";
import cases1jpg2x from "../../images/cases/cases1@2x.jpg";
import cases1Webp2x from "../../images/cases/cases1@2x.webp";
import cases2jpg from "../../images/cases/cases2.jpg";
import cases2Webp from "../../images/cases/cases2.webp";
import cases2jpg2x from "../../images/cases/cases2@2x.jpg";
import cases2Webp2x from "../../images/cases/cases2@2x.webp";
import cases3jpg from "../../images/cases/cases3.jpg";
import cases3Webp from "../../images/cases/cases3.webp";
import cases3jpg2x from "../../images/cases/cases3@2x.jpg";
import cases3Webp2x from "../../images/cases/cases3@2x.webp";
import cases4jpg from "../../images/cases/cases4.jpg";
import cases4Webp from "../../images/cases/cases4.webp";
import cases4jpg2x from "../../images/cases/cases4@2x.jpg";
import cases4Webp2x from "../../images/cases/cases4@2x.webp";
import cases5jpg from "../../images/cases/cases5.jpg";
import cases5Webp from "../../images/cases/cases5.webp";
import cases5jpg2x from "../../images/cases/cases5@2x.jpg";
import cases5Webp2x from "../../images/cases/cases5@2x.webp";
import cases6jpg from "../../images/cases/cases6.jpg";
import cases6Webp from "../../images/cases/cases6.webp";
import cases6jpg2x from "../../images/cases/cases6@2x.jpg";
import cases6Webp2x from "../../images/cases/cases6@2x.webp";

const CasesList = () => {
  const [lightboxController, setLightboxController] = useState({
    toggler: false,
    slide: 1,
  });

  function openLightboxOnSlide(number) {
    setLightboxController({
      toggler: !lightboxController.toggler,
      slide: number,
    });
  }

  return (
    <>
      <FsLightbox
        toggler={lightboxController.toggler}
        sources={[
          cases1jpg2x,
          cases2jpg2x,
          cases3jpg2x,
          cases4jpg2x,
          cases5jpg2x,
          cases6jpg2x,
        ]}
        slide={lightboxController.slide}
      />
      <ul className={s.list}>
        <li className={s.item} onClick={() => openLightboxOnSlide(1)}>
          <Picture
            className={s.image}
            jpg1x={cases1jpg}
            jpg2x={cases1Webp}
            webp1x={cases1jpg2x}
            webp2x={cases1Webp2x}
          />
        </li>
        <li className={s.item} onClick={() => openLightboxOnSlide(2)}>
          <Picture
            className={s.image}
            jpg1x={cases2jpg}
            jpg2x={cases2Webp}
            webp1x={cases2jpg2x}
            webp2x={cases2Webp2x}
          />
        </li>
        <li className={s.item} onClick={() => openLightboxOnSlide(3)}>
          <Picture
            className={s.image}
            jpg1x={cases3jpg}
            jpg2x={cases3Webp}
            webp1x={cases3jpg2x}
            webp2x={cases3Webp2x}
          />
        </li>
        <li className={s.item} onClick={() => openLightboxOnSlide(4)}>
          <Picture
            className={s.image}
            jpg1x={cases4jpg}
            jpg2x={cases4Webp}
            webp1x={cases4jpg2x}
            webp2x={cases4Webp2x}
          />
        </li>
        <li className={s.item} onClick={() => openLightboxOnSlide(5)}>
          <Picture
            className={s.image}
            jpg1x={cases5jpg}
            jpg2x={cases5Webp}
            webp1x={cases5jpg2x}
            webp2x={cases5Webp2x}
          />
        </li>
        <li className={s.item} onClick={() => openLightboxOnSlide(6)}>
          <Picture
            className={s.image}
            jpg1x={cases6jpg}
            jpg2x={cases6Webp}
            webp1x={cases6jpg2x}
            webp2x={cases6Webp2x}
          />
        </li>
      </ul>
    </>
  );
};

export default CasesList;
