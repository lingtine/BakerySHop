import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import { BsCart3 } from "react-icons/bs";
import { SlUser } from "react-icons/sl";

import TopBar from "./TopBar";

const cx = classNames.bind(styles);

function Header() {
  const logoSrc =
    "https://cdn.shopify.com/s/files/1/2675/2320/files/BAKES__Logo-06_220x.png?v=1638454703";

  return (
    <header>
      <TopBar />
      <div className={cx("nav-bar")}>
        <div className={cx("grid", "wide")}>
          <div className={cx("row")}>
            <div className={cx("col", "c-5")}>
              <div className={cx("nav-bar--logo")}>
                <img alt="logo" src={logoSrc} />
              </div>
            </div>
            <div className={cx("col", "c-5")}>
              <div className={cx("nav-bar--actions")}>
                <div className={cx("actions-item")}>PLAN A BIRTHDAY </div>
                <div className={cx("actions-item")}>SHOP ALL </div>
                <div className={cx("actions-item")}>BAKES CLUB</div>
                <div className={cx("actions-item")}>ABOUT</div>
                <div className={cx("actions-item", "actions-login")}>
                  <SlUser />
                </div>
              </div>
            </div>
            <div className={cx("col", "c-1")}>
              <div className={cx("nav-bar--cart")}>
                <BsCart3 />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
