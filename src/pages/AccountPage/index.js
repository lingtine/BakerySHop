import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import classNames from "classnames/bind";
import styles from "./account.module.scss";
import { authRefresh } from "~/store";
import { useThunk } from "~/hooks";

const cx = classNames.bind(styles);
function AccountPage() {
  const [doLogout, isLoading, error] = useThunk(authRefresh);
  const navigate = useNavigate();
  const { isAuthenticated } = useSelector((state) => state.auth);

  const handleLogout = () => {
    doLogout();
    navigate("/");
  };

  if (!isAuthenticated) {
    navigate("/");
  }
  return (
    <div className={cx("wrapper")}>
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
    </div>
  );
}

export default AccountPage;
