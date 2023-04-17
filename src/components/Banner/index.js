import styles from "./Banner.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

function Banner({ image, content }) {
  return (
    <div className={cx("wrapper")}>
      <div
        style={{ background: `url(${image.url})` }}
        className={cx("banner-image")}
      ></div>
      <div className={cx("container", "left-bottom")}>{content}</div>
    </div>
  );
}

export default Banner;
