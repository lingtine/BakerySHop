import styles from "./Card.module.scss";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import { usePriceFormatter } from "~/hooks";
const cx = classNames.bind(styles);

function Card({ content }) {
  const price = usePriceFormatter(content.unit_price, "VND");

  return (
    <div className={cx("wrapper")}>
      <Link to={`/collections/${content.id_type}/${content.id}`}>
        <div className={cx("container")}>
          <div className={cx("container-img")}>
            <img alt="" />
            <div className={cx("container-sub-img")}>
              {/* <img src="" alt="" /> */}
            </div>
          </div>
          <div className={cx("content")}>
            <div className={cx("content-title")}>{content.name}</div>
            <div className={cx("content-price")}>{price}</div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Card;
