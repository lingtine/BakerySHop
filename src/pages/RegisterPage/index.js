import { useState } from "react";
import styles from "./RegisterPage.module.scss";
import classNames from "classnames/bind";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { login } from "~/store";
import { useDispatch } from "react-redux";

import { Button } from "~/components";

const cx = classNames.bind(styles);

function RegisterPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Handle form submission here
    console.log(formData);
    try {
      const response = await axios.post(
        "http://localhost:81/api/auth/register",
        formData
      );
      localStorage.setItem("accessToken", response.data.access_token);
      navigate("/");
      dispatch(login());
    } catch (error) {
      console.log(error);
      console.log("lỗi rồi");
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  return (
    <div className={cx("wrapper")}>
      <div className={cx("register")}>
        <h2 className={cx("register-heading")}>Sign up</h2>
        <form className={cx("register-form")} onSubmit={handleSubmit}>
          <div className={cx("form-input")}>
            <input
              type="text"
              name="name"
              placeholder="name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className={cx("form-input")}>
            <input
              placeholder="email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className={cx("form-input")}>
            <input
              placeholder="password"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className={cx("form-input")}>
            <input
              placeholder="passwordConfirmation"
              type="password"
              name="password_confirmation"
              value={formData.password_confirmation}
              onChange={handleInputChange}
              required
            />
          </div>
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
