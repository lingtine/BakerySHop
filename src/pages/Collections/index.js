import styles from "./Collections.module.scss";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import { useFetchCollectionsQuery } from "~/store";

const cx = classNames.bind(styles);

function Collections() {
  const { isLoading, data, isSuccess, isError } = useFetchCollectionsQuery();

  let content;

  if (isLoading) {
    content = <></>;
  } else if (isError) {
    content = <h1>Lỗi rồi</h1>;
  } else if (isSuccess) {
    content = data.map((item) => {
      return (
        <div key={item.id} className={cx("col", "l-6", "m-6", "c-6")}>
          <Link className={cx("content")} to={`/collections/${item.id}`}>
            <div className={cx("content-title")}>{item.name}</div>
            <div className={cx("content-wrapper")}>
              <div
                style={{ backgroundImage: `url(${item.image})` }}
                className={cx("content-wrapper-image")}
              ></div>
            </div>
          </Link>
        </div>
      );
    });
  }

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
          <div className={cx("row")}>{content}</div>
        </div>
      </div>
    </div>
  );
}

export default Collections;
