import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import { BsCart3 } from "react-icons/bs";
import { useRef, useState } from "react";
import { SlUser } from "react-icons/sl";
import { AiOutlineMenu } from "react-icons/ai";
import Tippy from "@tippyjs/react/headless";
// op

import TopBar from "./TopBar";
import Button from "../Button";

const cx = classNames.bind(styles);

function Header() {
  const [isDisplayFixed, setIsDisplayFixed] = useState(false);
  const headerRef = useRef(null);

  document.addEventListener("scroll", (e) => {
    let scrollVal = e.target.documentElement.scrollTop;

    if (scrollVal >= 35) {
      setIsDisplayFixed(true);
    } else {
      setIsDisplayFixed(false);
    }
    return () => {
      document.removeEventListener("scroll");
    };
  });

  const logoSrc =
    "https://cdn.shopify.com/s/files/1/2675/2320/files/BAKES__Logo-06_220x.png?v=1638454703";
  const subNav = [
    {
      id: Math.random(),
      content: "birthday cakes",
    },
    {
      id: Math.random(),
      content: "girt & decor",
    },
    {
      id: Math.random(),
      content: "INDIVIDUAL CAKES",
    },
    {
      id: Math.random(),
      content: "PET GOODS",
    },
    {
      id: Math.random(),
      content: "macarons",
    },
    {
      id: Math.random(),
      content: "drinks",
    },
  ];

  const renderSubNav = subNav.map((item) => {
    return (
      <Button className={cx("sub-nav-item")} key={item.id}>
        {item.content}
      </Button>
    );
  });
  return (
    <header className={cx("header")} ref={headerRef}>
      {!isDisplayFixed ? <TopBar /> : <></>}
      <div className={cx("nav-bar")}>
        <div className={cx("grid", "wide")}>
          <div className={cx("row")}>
            <div className={cx("col", "l-0", "m-0", "c-2")}>
              <Button className={cx("nav-bar--menu")}>
                <AiOutlineMenu />
              </Button>
            </div>
            <div className={cx("col", "l-4", "m-3", "c-8")}>
              <Button to="/" className={cx("nav-bar--logo")}>
                <img alt="logo" src={logoSrc} />
              </Button>
            </div>
            <div className={cx("col", "l-7", "m-8", "c-0")}>
              <div className={cx("nav-bar--actions")}>
                <Button to="/b-day-booking" className={cx("actions-item")}>
                  PLAN A BIRTHDAY
                </Button>
                <Tippy
                  theme="light"
                  placement="bottom"
                  interactive={true}
                  render={(attrs) => (
                    <div
                      className={cx("sub-nav")}
                      data-animation="shift-towards-subtle"
                      tabIndex="-1"
                      {...attrs}
                    >
                      {renderSubNav}
                    </div>
                  )}
                >
                  <Button to="/collections" className={cx("actions-item")}>
                    SHOP ALL{" "}
                  </Button>
                </Tippy>
                <Button to="/bakes-club" className={cx("actions-item")}>
                  BAKES CLUB
                </Button>
                <Button to="/about" className={cx("actions-item")}>
                  ABOUT
                </Button>
                <Button to="/fags" className={cx("actions-item")}>
                  fags
                </Button>
                <Button
                  to="/login"
                  className={cx("actions-item", "actions-login")}
                >
                  <SlUser />
                </Button>
              </div>
            </div>
            <div className={cx("col", "l-1", "m-1", "c-2")}>
              <Button to={""} className={cx("nav-bar--cart")}>
                <BsCart3 />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
