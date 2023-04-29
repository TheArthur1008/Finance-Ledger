import React from "react";

import s from "./Contacts.module.scss";

import background from "../../images/team/callback.jpg";
import Footer from "../../components/Footer/Footer";
import Form from "../../components/Form/Form";

const Contacts = () => {
  return (
    <>
      <div id="contact" className={s.wrapper}>
        <div
          className={s.image}
          style={{
            backgroundImage: `url(${background})`,
          }}
        ></div>
        <div className={s.container}>
          <h2 className={s.title}>Request Callback</h2>
          <Form />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contacts;
