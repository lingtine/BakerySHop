import styles from "./RegisterPage.module.scss";
import classNames from "classnames/bind";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Button } from "~/components";
import { useThunk } from "~/hooks";
import { register } from "~/store";
import { useSelector } from "react-redux";

const cx = classNames.bind(styles);

function RegisterPage() {
  const navigate = useNavigate();

  const [doRegister, error] = useThunk(register);

  const { error: messengerError } = useSelector((state) => state.auth);

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      password_confirmation: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .required("Email is required")
        .email("Invalid email address"),
      password: Yup.string()
        .min(6, "Must be at least 6 characters")
        .required("Password is required"),
      name: Yup.string()
        .required("Name is required")
        .min(6, "Must be at least 6 characters"),
      password_confirmation: Yup.string()
        .required("Re-entered password is required")
        .oneOf(
          [Yup.ref("password"), null],
          "Re-entered password does not match"
        ),
    }),
    onSubmit: (values) => {
      // Xử lý logic submit form
      // ...
      doRegister(values);
    },
  });

  if (error) {
    console.log(messengerError);
  }
  return (
    <div className={cx("wrapper")}>
      <div className={cx("register")}>
        <h2 className={cx("register-heading")}>Sign up</h2>
        {messengerError && (
          <div className={cx("messenger-error-login")}>
            {messengerError.errors.email[0]}
          </div>
        )}
        <form className={cx("register-form")} onSubmit={formik.handleSubmit}>
          <div className={cx("form-input")}>
            <input
              type="text"
              name="name"
              placeholder="name"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </div>
          {formik.touched.name && formik.errors.name && (
            <div className={cx("messenger-error")}>{formik.errors.name}</div>
          )}
          <div className={cx("form-input")}>
            <input
              placeholder="email"
              type="email"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </div>
          {formik.touched.email && formik.errors.email && (
            <div className={cx("messenger-error")}>{formik.errors.email}</div>
          )}
          <div className={cx("form-input")}>
            <input
              placeholder="password"
              type="password"
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </div>
          {formik.touched.password && formik.errors.password && (
            <div className={cx("messenger-error")}>
              {formik.errors.password}
            </div>
          )}
          <div className={cx("form-input")}>
            <input
              placeholder="passwordConfirmation"
              type="password"
              name="password_confirmation"
              value={formik.values.password_confirmation}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </div>
          {formik.touched.password_confirmation &&
            formik.errors.password_confirmation && (
              <div className={cx("messenger-error")}>
                {formik.errors.password_confirmation}
              </div>
            )}
          <Button primary outline className={cx("btn-register")} type="submit">
            Sign Up
          </Button>
        </form>
        <div className={cx("actions")}>
          <Button to={"/login"}>login</Button>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;
