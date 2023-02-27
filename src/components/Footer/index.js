import styles from "./Footer.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

function Footer() {
  return (
    <div className={cx("footer")}>
      <div className={cx("grid", "wide")}>
        <div className={cx("row")}>
          <div className={cx("col", "l-4", "m-4", "c-12")}>
            <div>
              <h3 className={cx("footer-heading")}>GET IN TOUCH</h3>
              <div className={cx("separate", "w-full")}></div>
              <div className={cx("footer-content")}>
                <p>
                  Hotline: +84 902 77 42 44 <br />
                  Wholesales: +84 909 55 88 49 <br />
                  (Mon - Fr, 09:00 - 18:00)
                  <br /> Email: team@bakes-saigon.com
                  <br /> Address: 47 Tran Cao Van, D3, HCMC
                </p>
              </div>
            </div>
          </div>
          <div className={cx("col", "l-4", "m-4", "c-12")}>
            <div>
              <h3 className={cx("footer-heading")}>ABOUT BAKES</h3>
              <div className={cx("separate", "w-full")}></div>
              <div className={cx("footer-content")}>
                <p>
                  Bakes is a French pâtisserie that believes pastry should be
                  like love: exciting, thoughtful, honest. The rest is just
                  packaging.
                </p>
              </div>
            </div>
          </div>
          <div className={cx("col", "l-4", "m-4", "c-12")}>
            <div>
              <h3 className={cx("footer-heading")}>BAKES CLUB</h3>
              <div className={cx("separate", "w-full")}></div>
              <div className={cx("footer-content")}>
                <p>
                  Love pastries? You're gonna love Bakes Club. Become a member
                  to earn points, redeem points for free drinks & pastries, and
                  receive special offers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
