import styles from "./Card.module.scss";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";

import { usePriceFormatter } from "~/hooks";
const cx = classNames.bind(styles);

function Card({ content }) {
  const price = usePriceFormatter(
    content.unit_price ? content.unit_price : 0,
    "VND"
  );
  return (
    <div className={cx("wrapper")}>
      <Link to={`/collections/${content.id_type}/${content.id}`}>
        <div className={cx("container")}>
          <div className={cx("container-img")}>
            <img src={`data:image/png;base64,${content.image}`} alt="" />
            {content.new ? (
              <div className={cx("status")}>
                {!content.stock ? "sold out" : "new in"}
              </div>
            ) : (
              <></>
            )}
          </div>
          <div className={cx("content")}>
            <div className={cx("content-title")}>{content.name}</div>
            <div className={cx("content-price")}>{price}</div>
            {!content.stock ? (
              <div className={cx("content-status")}>Sold out</div>
            ) : (
              <></>
            )}
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Card;
