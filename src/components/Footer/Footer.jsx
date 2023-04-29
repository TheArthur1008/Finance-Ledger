import React from "react";

import s from "./Footer.module.scss";
import IconList from "../IconLists/IconList/IconList";

const Footer = () => {
  return (
    <div className={s.wrapper}>
      <IconList />
      <p className={s.copyright}>Copyright © 2021 - FinanceLedger</p>
    </div>
  );
};

export default Footer;
