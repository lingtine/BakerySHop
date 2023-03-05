import styles from "./Collections.module.scss";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

function Collections() {
  const data = [
    {
      id: Math.random(),
      title: "BDAY CAKES",
      imageUrl:
        "https://cdn.shopify.com/s/files/1/2675/2320/collections/772A8384_720x.jpg?v=1627351938",
      to: "/",
    },
    {
      id: Math.random(),
      title: "BDAY CAKES",
      imageUrl:
        "https://cdn.shopify.com/s/files/1/2675/2320/collections/772A8384_720x.jpg?v=1627351938",
      to: "",
    },
    {
      id: Math.random(),
      title: "BDAY CAKES",
      imageUrl:
        "https://cdn.shopify.com/s/files/1/2675/2320/collections/772A8384_720x.jpg?v=1627351938",
      to: "",
    },
    {
      id: Math.random(),
      title: "BDAY CAKES",
      imageUrl:
        "https://cdn.shopify.com/s/files/1/2675/2320/collections/772A8384_720x.jpg?v=1627351938",
      to: "",
    },
    {
      id: Math.random(),
      title: "BDAY CAKES",
      imageUrl:
        "https://cdn.shopify.com/s/files/1/2675/2320/collections/772A8384_720x.jpg?v=1627351938",
      to: "",
    },
    {
      id: Math.random(),
      title: "BDAY CAKES",
      imageUrl:
        "https://cdn.shopify.com/s/files/1/2675/2320/collections/772A8384_720x.jpg?v=1627351938",
      to: "",
    },
  ];

  const renderedData = data.map((item) => {
    return (
      <div key={item.id} className={cx("col", "l-6", "m-6", "c-6")}>
        <Link className={cx("content")} to={item.to}>
          <div className={cx("content-title")}>{item.title}</div>
          <div className={cx("content-wrapper")}>
            <div
              style={{ backgroundImage: `url(${item.imageUrl})` }}
              className={cx("content-wrapper-image")}
            ></div>
          </div>
        </Link>
      </div>
    );
  });

  return (
    <div className={cx("wrapper")}>
      <div className={cx("grid", "wide")}>
        <div className={cx("container")}>
          <div className={cx("row")}>
            <div className={cx("col", "l-12", "m-12", "c-12")}>
              <div className={cx("content-heading")}>
                <p>CATALOG</p>
              </div>
            </div>
          </div>
          <div className={cx("row")}>{renderedData}</div>
        </div>
      </div>
    </div>
  );
}

export default Collections;
