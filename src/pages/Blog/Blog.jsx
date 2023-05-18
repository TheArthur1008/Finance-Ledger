import React from "react";

import s from "./Blog.module.scss";
import background from "../../images/blog/blog.jpg";

const Blog = () => {
  return (
    <section id="blog" className={s.wrapper}>
      <div
        className={s.image}
        style={{
          backgroundImage: `url(${background})`,
        }}
      ></div>
      <div className={s.wrapperTitle}>
        <h2 className={s.title}>April 16 2020</h2>
        <h3 className={s.subtitle}>Blog Post One</h3>
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

export default Blog;
