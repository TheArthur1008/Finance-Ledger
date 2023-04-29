import React, { useEffect, useState } from "react";
import sprite from "../../images/sprite.svg";
import s from "./Navigation.module.scss";
import { Link } from "react-scroll";

const Navigation = () => {
  const [addBgHeader, setAddBgHeader] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setAddBgHeader(true);
    }
    if (window.scrollY === 0) {
      setAddBgHeader(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [addBgHeader]);

  const setBg = () => {
    if (addBgHeader) {
      return {
        backgroundColor: `rgba(0, 0, 0, 0.8)`,
      };
    }
  };

  const background = setBg();
  return (
    <nav className={s.wrapperNav} style={background}>
      <Link
        to="home"
        spy={true}
        smooth={true}
        offset={-100}
        duration={500}
        className={s.wrapperLogo}
      >
        <svg className={s.logo}>
          <use href={`${sprite}#logo`} />
        </svg>
        <p className={s.logoFirstTitle}>
          Finance<span className={s.logoSecondTitle}>Ledger</span>
        </p>
      </Link>
      <ul className={s.navList}>
        <li className={s.navItem}>
          <Link to="home" spy={true} smooth={true} offset={-100} duration={500}>
            Home
          </Link>
        </li>
        <li className={s.navItem}>
          <Link
            to="about"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            About
          </Link>
        </li>
        <li className={s.navItem}>
          <Link
            to="cases"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            Cases
          </Link>
        </li>
        <li className={s.navItem}>
          <Link to="blog" spy={true} smooth={true} offset={-100} duration={500}>
            Blog
          </Link>
        </li>
        <li className={s.navItem}>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};
export default Navigation;
