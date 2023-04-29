import React from "react";

import s from "./Form.module.scss";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { sendFormNetlify } from "../../services/formNetlify";

const SignupSchema = Yup.object().shape({
  name: Yup.string().min(2, "Too Short!").max(50, "Too Long!"),
  email: Yup.string()
    .email("Invalid email")
    .required("This is a required field"),
});

export default function FormContact() {
  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
      }}
      validationSchema={SignupSchema}
      onSubmit={(values, onSubmitProps) => {
        sendFormNetlify(values);
        onSubmitProps.resetForm();
      }}
    >
      {({ errors, touched }) => (
        <Form className={s.form} method="POST" data-netlify="true">
          <div className={s.formField}>
            <Field
              name="name"
              type="text"
              placeholder=" "
              className={s.input}
            />
            {errors.firstName && touched.firstName ? (
              <div>{errors.firstName}</div>
            ) : null}
            <label className={s.label}>Enter your name</label>
          </div>
          <div className={s.formField}>
            <Field
              name="email"
              type="email"
              placeholder=" "
              className={s.input}
            />
            {errors.email && touched.email ? (
              <div className={s.inputRequired}>{errors.email}</div>
            ) : null}
            <label className={s.label}>Enter email*</label>
          </div>

          <button type="submit" className={s.button}>
            Send
          </button>
        </Form>
      )}
    </Formik>
  );
}
