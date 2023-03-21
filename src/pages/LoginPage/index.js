import { useState } from "react";
import styles from "./LoginPage.module.scss";
import classNames from "classnames/bind";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import { obtainAccessToken } from "~/store";
import { useThunk } from "~/hooks";

import { Button } from "~/components";

const cx = classNames.bind(styles);

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [doObtainAccessToken, isLoading, error] = useThunk(obtainAccessToken);
  const navigate = useNavigate();
  const accessToken = useSelector((state) => state.auth.accessToken);

  const handleSubmit = (event) => {
    event.preventDefault();
    doObtainAccessToken({ email: username, password });
  };
  if (isLoading) {
  } else if (error) {
  } else if (accessToken) {
    navigate("/");
  }

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
