import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import { useEffect, useRef, useState } from "react";
import { BsCart3 } from "react-icons/bs";
import { SlUser } from "react-icons/sl";
import { AiOutlineMenu } from "react-icons/ai";
import Tippy from "@tippyjs/react/headless";
// op
import { useSelector } from "react-redux";

import TopBar from "./TopBar";
import Button from "../Button";
import { fetchCollections } from "~/store";
import { useThunk } from "~/hooks";

const cx = classNames.bind(styles);

function Header() {
  const isLoggedIn = useSelector((state) => state.auth.isAuthenticated);
  const { data } = useSelector((state) => {
    return state.collections;
  });
  const [isDisplayFixed, setIsDisplayFixed] = useState(false);
  const headerRef = useRef(null);
  const [doFetchCollections, isLoading, error] = useThunk(fetchCollections);

  useEffect(() => {
    doFetchCollections();
  }, [doFetchCollections]);

  // hidden top bar
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

  let subNav;

  if (isLoading) {
    subNav = <></>;
  } else if (error) {
    subNav = <h1>Lỗi òi</h1>;
  } else if (data) {
    subNav = data.map((collection) => {
      return (
        <Button
          to={`/collections/${collection.id}`}
          className={cx("sub-nav-item")}
          key={collection.id}
        >
          {collection.name}
        </Button>
      );
    });
  }

  // function

  return (
    <header className={cx("header")} ref={headerRef}>
      {!isDisplayFixed ? <TopBar /> : <></>}
      <div className={cx("nav-bar")}>
        <div className={cx("grid", "wide")}>
          <div className={cx("row")}>
            <div className={cx("col", "l-0", "m-0", "c-2")}>
              <Button className={cx("action--menu")}>
                <AiOutlineMenu />
              </Button>
              {}
            </div>
            <div className={cx("col", "l-4", "m-3", "c-8")}>
              <Button to="/" className={cx("nav-bar--logo")}>
                <img alt="logo" src={logoSrc} />
              </Button>
            </div>
            <div className={cx("col", "l-7", "m-8", "c-0")}>
              <div className={cx("nav-bar--menu")}>
                <Button to="/b-day-booking" className={cx("menu-item")}>
                  PLAN A BIRTHDAY
                </Button>
                <Tippy
                  theme="light"
                  placement="bottom"
                  interactive={true}
                  appendTo="parent"
                  render={(attrs) => (
                    <div
                      className={cx("sub-nav")}
                      data-animation="shift-towards-subtle"
                      tabIndex="-1"
                      {...attrs}
                    >
                      {subNav}
                    </div>
                  )}
                >
                  <Button to="/collections" className={cx("menu-item")}>
                    SHOP ALL
                  </Button>
                </Tippy>
                <Button to="/bakes-club" className={cx("menu-item")}>
                  BAKES CLUB
                </Button>
                <Button to="/about" className={cx("menu-item")}>
                  ABOUT
                </Button>
                <Button to="/fags" className={cx("menu-item")}>
                  fags
                </Button>
              </div>
            </div>
            <div className={cx("col", "l-1", "m-1", "c-2")}>
              <div className={cx("nav-bar-actions")}>
                <Button
                  to={isLoggedIn ? "/account" : "/login"}
                  className={cx("action-item", "action-login")}
                >
                  <SlUser />
                </Button>
                <Button
                  to={"/cart"}
                  className={cx("action-item", "action-cart")}
                >
                  <BsCart3 />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
