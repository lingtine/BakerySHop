import styles from "./BakesClub.module.scss";
import classNames from "classnames/bind";
import { Banner } from "~/components";
import { BsCalendarFill } from "react-icons/bs";

const cx = classNames.bind(styles);

function BakesClubPage() {
  const banner = {
    url: "https://cdn.shopify.com/s/files/1/2675/2320/files/IMG_5256_3000x.jpg?v=1652873085",
  };

  const message = {
    backgroundImageUrl:
      "https://cdn.shopify.com/s/files/1/2675/2320/files/IMG_5251-_shopifytest_10b28d57-aa82-49b4-b9bc-1ceb6b99c2aa_1950x.jpg?v=1655615553",
  };

  return (
    <div className={cx("wrapper")}>
      <Banner image={banner} />
      <div className={cx("introducer")}>
        <div className={cx("grid", "wide")}>
          <div className={cx("row")}>
            <div className={cx("col", "l-12", "m-12", "c-12")}>
              <div className={cx("introducer-heading")}>
                MAKING YOUR LIFE SWEETER & EASIER WITH:
              </div>
            </div>
          </div>
          <div className={cx("row")}>
            <div className={cx("col", "l-4", "m-4", "c-12")}>
              <div className={cx("introducer-container")}>
                <div className={cx("introducer-icon")}>
                  <BsCalendarFill />
                </div>
                <div className={cx("introducer-content")}>
                  <h4 className={cx("introducer-content-title")}>
                    BIRTHDAY TREATS & DISCOUNTS
                  </h4>
                  <p className={cx("introducer-content-sub")}>
                    Get special offers on your birthday month and a birthday
                    treat on us.
                  </p>
                </div>
              </div>
            </div>
            <div className={cx("col", "l-4", "m-4", "c-12")}>
              <div className={cx("introducer-container")}>
                <div className={cx("introducer-icon")}>
                  <BsCalendarFill />
                </div>
                <div className={cx("introducer-content")}>
                  <h4 className={cx("introducer-content-title")}>
                    BIRTHDAY TREATS & DISCOUNTS
                  </h4>
                  <p className={cx("introducer-content-sub")}>
                    Get special offers on your birthday month and a birthday
                    treat on us.
                  </p>
                </div>
              </div>
            </div>
            <div className={cx("col", "l-4", "m-4", "c-12")}>
              <div className={cx("introducer-container")}>
                <div className={cx("introducer-icon")}>
                  <BsCalendarFill />
                </div>
                <div className={cx("introducer-content")}>
                  <h4 className={cx("introducer-content-title")}>
                    BIRTHDAY TREATS & DISCOUNTS
                  </h4>
                  <p className={cx("introducer-content-sub")}>
                    Get special offers on your birthday month and a birthday
                    treat on us.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={cx("message")}>
        <div className={cx("message-container")}>
          <div className={cx("message-sub-heading")}>
            IF IT'S IMPORTANT TO YOU, IT'S IMPORTANT TO US. 💖
          </div>
          <div className={cx("message-heading")}>
            Tell us 2 dates that are important for you.
          </div>
          <div className={cx("message-content")}>
            Your parents' birthday, your wedding anniversary, your boss'
            birthday. You tell us. We'll send you reminders and special offers.
          </div>
        </div>
        <div className={cx("message-image")}>
          <div
            style={{ backgroundImage: `url(${message.backgroundImageUrl})` }}
            className={cx("message-image-url")}
          ></div>
        </div>
      </div>

      <div className={cx("benefits")}>
        <div className={cx("grid", "wide")}>
          <div className={cx("row")}>
            <div className={cx("col", "l-12", "m-12", "c-12")}>
              <div className={cx("benefit-heading")}>TIERS & BENEFITS</div>
            </div>
          </div>
          <div className={cx("row")}>
            <div className={cx("col", "l-4", "m-4", "c-12")}>
              <div className={cx("benefit-container")}>
                <div className={cx("benefit-image")}>
                  <img
                    src="https://cdn.shopify.com/s/files/1/2675/2320/files/Screen_Shot_2022-06-17_at_15.53.00_360x.png?v=1655457619"
                    alt="da-1"
                  />
                </div>
                <div className={cx("benefit-content")}>
                  <div className={cx("title")}>🍰 BAKES FRIENDS</div>
                  <div className={cx("description")}>
                    5% discount on the 1st purchase <br></br>
                    5% discount on your birthday month<br></br>
                    Reminders and 5% discount on your 2 special dates.
                  </div>
                </div>
              </div>
            </div>
            <div className={cx("col", "l-4", "m-4", "c-12")}>
              <div className={cx("benefit-container")}>
                <div className={cx("benefit-image")}>
                  <img
                    src="https://cdn.shopify.com/s/files/1/2675/2320/files/Screen_Shot_2022-06-17_at_15.53.00_360x.png?v=1655457619"
                    alt="dá-2"
                  />
                </div>
                <div className={cx("benefit-content")}>
                  <div className={cx("title")}>🍰 BAKES FRIENDS</div>
                  <div className={cx("description")}>
                    5% discount on the 1st purchase <br></br>
                    5% discount on your birthday month<br></br>
                    Reminders and 5% discount on your 2 special dates.
                  </div>
                </div>
              </div>
            </div>
            <div className={cx("col", "l-4", "m-4", "c-12")}>
              <div className={cx("benefit-container")}>
                <div className={cx("benefit-image")}>
                  <img
                    src="https://cdn.shopify.com/s/files/1/2675/2320/files/Screen_Shot_2022-06-17_at_15.53.00_360x.png?v=1655457619"
                    alt="dá-3"
                  />
                </div>
                <div className={cx("benefit-content")}>
                  <div className={cx("title")}>🍰 BAKES FRIENDS</div>
                  <div className={cx("description")}>
                    5% discount on the 1st purchase <br></br>
                    5% discount on your birthday month<br></br>
                    Reminders and 5% discount on your 2 special dates.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BakesClubPage;
