import styles from "./About.module.scss";
import classNames from "classnames/bind";
import { Banner, Card } from "~/components";

const cx = classNames.bind(styles);

function AboutPage() {
  const banner = {
    url: "https://cdn.shopify.com/s/files/1/2675/2320/files/IMG_5256_3000x.jpg?v=1652873085",
  };

  const dataRecruitment = [
    {
      id: Math.random(),
      imageUrl:
        "https://cdn.shopify.com/s/files/1/2675/2320/files/772A6271_360x.jpg?v=1638699160",
    },
  ];

  return (
    <div className={cx("wrapper")}>
      <Banner image={banner} />

      <div className={cx("our-story")}>
        <div className={cx("grid", "wide")}>
          <div className={cx("row")}>
            <div className={cx("col", "l-12", "m-12", "c-12")}>
              <div className={cx("content-heading", "our-story-heading")}>
                <p>OUR STORY</p>
              </div>
            </div>
          </div>
          <div className={cx("row")}>
            <div className={cx("col", "l-6", "m-6", "c-12")}>
              <div className={cx("our-story-content")}>
                Bakes is a French pâtisserie that believes pastry should be like
                love: exciting, thoughtful, honest. That pastries is a
                thoughtful opportunity to connect and express love. Whether it's
                throwing your parents a birthday party, sending your friend a
                pastry when they're heartbroken, or just sharing a cheese tart
                at the Turtle Lake.
              </div>
            </div>
            <div className={cx("col", "l-6", "m-6", "c-12")}>
              <div className={cx("our-story-content")}>
                Bakes is a French pâtisserie that believes pastry should be like
                love: exciting, thoughtful, honest. That pastries is a
                thoughtful opportunity to connect and express love. Whether it's
                throwing your parents a birthday party, sending your friend a
                pastry when they're heartbroken, or just sharing a cheese tart
                at the Turtle Lake.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={cx("our-kitchen")}>
        <div className={cx("grid")}>
          <div className={cx("row", "no-gutters")}>
            <div className={cx("col", "l-6", "m-6", "c-12")}>
              <div className={cx("our-kitchen-container")}>
                <div className={cx("content-heading", "our-kitchen-heading")}>
                  <p>OUR KITCHEN</p>
                </div>
                <div className={cx("our-kitchen-content")}>
                  1 Executive Pastry Chef (Brian), 12 passionate bakers baking
                  14 hours a day (2 shifts!), 7 days a week for daily fresh
                  baked goods. We bake right upstairs in our flagship, with
                  floor to ceiling window and mirrors for all to see.
                </div>
              </div>
            </div>
            <div className={cx("col", "l-6", "m-6", "c-12")}>
              <div className={cx("our-kitchen-container")}>
                <img src="https://cdn.shopify.com/s/files/1/2675/2320/files/kitchen_900x.jpg?v=1638723228" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={cx("recruitment")}>
        <div className={cx("grid", "wide")}>
          <div className={cx("row")}>
            <div className={cx("col", "l-4", "m-4", "c-12")}></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
