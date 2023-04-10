import styles from "./Collections.module.scss";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { fetchCollections } from "~/store";
import { useThunk } from "~/hooks";
import { useEffect } from "react";

const cx = classNames.bind(styles);

function Collections() {
  const { data } = useSelector((state) => {
    return state.collections;
  });

  // const { isLoading, data, isSuccess, isError } = useFetchCollectionsQuery();
  const [doFetchCollections, isLoading, error] = useThunk(fetchCollections);

  useEffect(() => {
    doFetchCollections();
  }, [doFetchCollections]);

  let content;
  if (isLoading) {
    content = <></>;
  } else if (error) {
    content = <h1>Lỗi rồi</h1>;
  } else if (data) {
    content = data.map((item) => {
      return (
        <div key={item.id} className={cx("col", "l-6", "m-6", "c-6")}>
          <Link className={cx("content")} to={`/collections/${item.id}`}>
            <div className={cx("content-title")}>{item.name}</div>
            <div className={cx("content-wrapper")}>
              <div
                style={{
                  backgroundImage: `url(data:image/png;base64,${item.image})`,
                }}
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
