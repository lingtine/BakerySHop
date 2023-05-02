import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import classNames from "classnames/bind";
import styles from "./account.module.scss";
import { authRefresh } from "~/store";
import { useThunk } from "~/hooks";
import { Helmet } from "react-helmet-async";
import { Button } from "~/components";

const cx = classNames.bind(styles);
function AccountPage() {
  const [doLogout] = useThunk(authRefresh);
  const navigate = useNavigate();
  const { isAuthenticated, user } = useSelector((state) => state.auth);

  const handleLogout = () => {
    doLogout();
    navigate("/");
  };
  if (!isAuthenticated) {
    navigate("/");
  }
  let renderInfo;
  if (user) {
    console.log(user);
    renderInfo = (
      <div className={cx("account-info")}>
        <div className={cx("content-info")}>
          <div className={cx("content-title")}>Email:</div>
          <div>{user.email}</div>
        </div>
        <div className={cx("content-info")}>
          <div className={cx("content-title")}>Name:</div>
          <div>{user.name}</div>
        </div>
      </div>
    );
  }

  return (
    <div className={cx("wrapper")}>
      <Helmet>
        <title>Tài khoản – BAKES SAIGON</title>
      </Helmet>
      <div className={cx("grid", "wide")}>
        <div className={cx("account-header")}>
          <div className={cx("row")}>
            <div className={cx("col", "l-6", "m-6", "c-6")}>
              <div className={cx("header-title")}>
                <p>My Account</p>
              </div>
            </div>
            <div className={cx("col", "l-6", "m-6", "c-6")}>
              <div className={cx("action-logout")}>
                <button className={cx("btn-logout")} onClick={handleLogout}>
                  log out
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={cx("grid", "wide")}>
        <div className={cx("row")}>
          <div className={cx("col", "l-6", "m-6", "c-6")}>{renderInfo}</div>
          <div className={cx("col", "l-6", "m-6", "c-6")}>
            <div className={cx("account-content")}>
              {user && user.level === 1 && (
                <Button
                  primary
                  outline
                  className={cx("btn-admin")}
                  to={"/admin"}
                >
                  Go To Admin Page
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AccountPage;
