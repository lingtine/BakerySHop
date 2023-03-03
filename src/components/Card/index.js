import styles from "./Card.module.scss";
import classNames from "classnames/bind";
import { Button } from "~/components";

const cx = classNames.bind(styles);

function Card({ content }) {
  return (
    <div className={cx("wrapper")}>
      <Button to="/">
        <div className={cx("container")}>
          <div className={cx("container-img")}>
            <img src={content.images.urlImage1} alt="" />
            <div className={cx("container-sub-img")}>
              {/* <img src="" alt="" /> */}
            </div>
          </div>
          <div className={cx("content")}>
            <div className={cx("content-title")}>{content.name}</div>
            <div className={cx("content-price")}>{content.price}.000₫</div>
          </div>
        </div>
      </Button>
    </div>
  );
}

export default Card;
