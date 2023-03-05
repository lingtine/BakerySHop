import styles from "./HomePage.module.scss";
import classNames from "classnames/bind";
import { GiFruitTree } from "react-icons/gi";

import { Banner, Button, Card, ShopifySectionTemplate } from "~/components";

const cx = classNames.bind(styles);

function HomePage() {
  const banner = {
    url: "https://cdn.shopify.com/s/files/1/2675/2320/files/Bakes_Grab_ad_1_1950x.jpg?v=1667143562",
  };

  const cardProduct = {
    id: Math.random(),
    images: {
      urlImage1:
        "https://cdn.shopify.com/s/files/1/2675/2320/products/ComboChillcopy_360x.jpg?v=1662970516",
      urlImage2: "",
    },
    name: "COMBO CHILL",
    price: 750,
  };

  const BannerContent = (
    <div className={cx("banner-content")}>
      <h3>Collection of French Pastries</h3>
      <div className={cx("banner-content-btn")}>
        <Button className={cx("banner-btn")}>Buy the Cake</Button>
      </div>
    </div>
  );

  const dataNoNasties = {
    title: "NO NASTIES",
    content: [
      {
        id: Math.random(),
        images: {
          urlImage1:
            "https://cdn.shopify.com/s/files/1/2675/2320/products/ComboChillcopy_360x.jpg?v=1662970516",
          urlImage2: "",
        },
        name: "COMBO CHILL",
        price: 750,
      },
      {
        id: Math.random(),
        images: {
          urlImage1:
            "https://cdn.shopify.com/s/files/1/2675/2320/products/ComboChillcopy_360x.jpg?v=1662970516",
          urlImage2: "",
        },
        name: "COMBO CHILL",
        price: 750,
      },
      {
        id: Math.random(),
        images: {
          urlImage1:
            "https://cdn.shopify.com/s/files/1/2675/2320/products/ComboChillcopy_360x.jpg?v=1662970516",
          urlImage2: "",
        },
        name: "COMBO CHILL",
        price: 750,
      },
    ],
  };
  const dataNewIn = {
    title: "New In",
    content: [
      {
        id: Math.random(),
        images: {
          urlImage1:
            "https://cdn.shopify.com/s/files/1/2675/2320/products/ComboChillcopy_360x.jpg?v=1662970516",
          urlImage2: "",
        },
        name: "COMBO CHILL",
        price: 750,
      },
    ],
  };
  return (
    <div>
      {/* {baner} */}
      <Banner image={banner} content={BannerContent} />
      {/* {new product} */}
      <ShopifySectionTemplate data={dataNewIn} />

      {/* NO NASTIES} */}
      <ShopifySectionTemplate data={dataNoNasties} />

      <div className={cx("grid")}>
        <div className={cx("row", "no-gutters")}>
          <div className={cx("col", "l-6", "m-6", "c-6")}>
            <div className={cx("address-container")}>
              <div className={cx("address-heading", "content-heading")}>
                <p>New In</p>
              </div>
              <div className={cx("address-content")}>
                <p>
                  47 Tran Cao Van, District 3,
                  <br></br>
                  Ho Chi Minh City
                  <br></br>
                  Vietnam
                </p>
                <p className={cx("my-4")}>
                  Monday - Sunday <br></br> 8am - 10pm
                </p>
              </div>

              <Button className={cx("address-action")}>Directions</Button>
            </div>
          </div>
          <div className={cx("col", "l-6", "m-6", "c-6")}>
            <div className={cx("address-image")}></div>
          </div>
        </div>
      </div>
      <div className={cx("grid", "wide")}>
        <div className={cx("row")}>
          <div className={cx("col", "l-4", "m-4", "c-4")}>
            <div className={cx("about-us")}>
              <div className={cx("about-us-icon")}>
                <GiFruitTree />
              </div>
              <div className={cx("about-us-heading")}>
                ENVIRONMENTAL FRIENDLY
              </div>
              <div className={cx("about-us-content")}>
                Our bags are made from cassava starch, which will biodegrade
                naturally. Our handwritten notes comes from recycled paper.
              </div>
            </div>
          </div>
          <div className={cx("col", "l-4", "m-4", "c-4")}>
            <div className={cx("about-us")}>
              <div className={cx("about-us-icon")}>
                <GiFruitTree />
              </div>
              <div className={cx("about-us-heading")}>
                ENVIRONMENTAL FRIENDLY
              </div>
              <div className={cx("about-us-content")}>
                Our bags are made from cassava starch, which will biodegrade
                naturally. Our handwritten notes comes from recycled paper.
              </div>
            </div>
          </div>
          <div className={cx("col", "l-4", "m-4", "c-4")}>
            <div className={cx("about-us")}>
              <div className={cx("about-us-icon")}>
                <GiFruitTree />
              </div>
              <div className={cx("about-us-heading")}>
                ENVIRONMENTAL FRIENDLY
              </div>
              <div className={cx("about-us-content")}>
                Our bags are made from cassava starch, which will biodegrade
                naturally. Our handwritten notes comes from recycled paper.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
