import styles from "./DefaultPage.module.scss";
import classNames from "classnames/bind";
import { Header, Footer } from "~/components";

const cx = classNames.bind(styles);

function DefaultPage({ children }) {
  return (
    <div className={cx("wrapper")}>
      <Header />
      <div className={cx("container")}>{children}</div>
      <Footer />
    </div>
  );
}

export default DefaultPage;
