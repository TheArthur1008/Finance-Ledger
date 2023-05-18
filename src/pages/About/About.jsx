import React from "react";

import s from "./About.module.scss";
import background from "../../images/team/team.jpg";

const About = () => {
  return (
    <section id="about" className={s.wrapper}>
      <div
        className={s.image}
        style={{
          backgroundImage: `url(${background})`,
        }}
      ></div>
      <div className={s.wrapperTitle}>
        <h2 className={s.title}>What you are looking for</h2>
        <h3 className={s.subtitle}>We provide bespoke solutions</h3>
        <p className={s.description}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate,
          ipsum dignissimos quae laudantium asperiores nam aliquid impedit harum
          illum dolore explicabo ab dolores itaque rerum temporibus doloribus
          iste maiores deleniti?
        </p>
        <button type="button" className={s.button}>
          Read More
        </button>
      </div>
    </section>
  );
};

export default About;
