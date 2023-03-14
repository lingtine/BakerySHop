import { useState } from "react";
import styles from "./LoginPage.module.scss";
import classNames from "classnames/bind";
import { Button } from "~/components";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { login } from "~/store";
import { useDispatch } from "react-redux";

const cx = classNames.bind(styles);

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = {
      email: username,
      password: password,
    };
    try {
      const response = await axios.post(
        "http://localhost:81/api/auth/login",
        data
      );
      localStorage.setItem("accessToken", response.data.access_token);
      navigate("/");
      dispatch(login());
    } catch (error) {
      console.log(error);
      console.log("lỗi rồi");
    }
  };

  return (
    <div className={cx("wrapper")}>
      <div className={cx("login")}>
        <h2 className={cx("login-heading")}>Login</h2>
        <form className={cx("login-form")} onSubmit={handleSubmit}>
          <div className={cx("form-input")}>
            <input
              placeholder="Email"
              type="text"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
            />
          </div>
          <div className={cx("form-input")}>
            <input
              placeholder="Password"
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>

          <Button primary outline className={cx("btn-login")} type="submit">
            Login
          </Button>
        </form>

        <div className={cx("actions")}>
          <Button to={"/register"}>Sign In</Button>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
