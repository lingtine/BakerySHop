import styles from "./NotFoundPage.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

function NotFoundPage() {
  return (
    <div className={cx("wrapper")}>
      <h1>404 Page Not Found</h1>
      <p>We're sorry, but the page you requested could not be found.</p>
    </div>
  );
}

export default NotFoundPage;
