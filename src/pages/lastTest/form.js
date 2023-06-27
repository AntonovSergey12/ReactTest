import { Formik, Form, Field, ErrorMessage } from "formik";

import style from "./form.module.css";
import { useDispatch } from "react-redux";

const LoginForm = () => {
  const dispatch = useDispatch();
  const validateForm = (values) => {
    const errors = {};

    if (!values.email) {
      errors.email = "Email обязателен";
    }
    if (!values.password) {
      errors.password = "Пароль обязателен";
    } else if (!!/[!@#$%^&*()]/.test(values.password)) {
      errors.password = "Некорректный пароль";
    }
    return errors;
  };

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validate={validateForm}
    >
      onSubmit ={" "}
      {(values) => {
        dispatch(values);
      }}
      <Form>
        <div className={style.Form}>
          <label htmlFor="email">Email:</label>
          <Field type="email" id="email" name="email" />
          <ErrorMessage name="email" component="div" />
        </div>
        <div>
          <label htmlFor="password">Email:</label>
          <Field type="password" id="password" name="password" />
          <ErrorMessage name="password" component="div" />
        </div>
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};

export default LoginForm;
