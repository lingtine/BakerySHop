import { Accordion, Banner } from "~/components";
import styles from "./Fags.module.scss";
import classNames from "classnames/bind";
import { fetchFags } from "~/store";
import { useThunk } from "~/hooks";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const cx = classNames.bind(styles);

function FagsPage() {
  const [doFetchFags, isLoading, error] = useThunk(fetchFags);
  const { data } = useSelector((state) => state.fags);
  useEffect(() => {
    doFetchFags();
  }, [doFetchFags]);

  const banner = {
    url: "https://cdn.shopify.com/s/files/1/2675/2320/files/IMG_5256_3000x.jpg?v=1652873085",
  };

  let content;
  if (isLoading) {
    content = "Đang tải";
  } else if (error) {
    content = "lỗi ùi";
  } else if (data) {
    console.log(data);
    content = <Accordion items={data} />;
  }

  return (
    <div className={cx("wrapper")}>
      <Banner image={banner} />
      <div className={cx("grid", "wide")}>
        <div className={cx("row")}>
          <div className={cx("col", "l-12", "m-12", "c-12")}>
            <div className={cx("accordion-wrapper")}>{content}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FagsPage;
