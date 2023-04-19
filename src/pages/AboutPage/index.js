import styles from "./About.module.scss";
import classNames from "classnames/bind";
import { Banner } from "~/components";
import { useSelector } from "react-redux";
import { fetchAboutBaker, fetchAboutKitchen } from "~/store";
import { useThunk } from "~/hooks";
import { useEffect } from "react";

const cx = classNames.bind(styles);

function AboutPage() {
  const [
    doFetchAboutBaker,
    isLoadingOfFetchAboutBaker,
    errorOfFetchAboutBaker,
  ] = useThunk(fetchAboutBaker);
  const [
    doFetchAboutKitchen,
    isLoadingOfFetchAboutKitchen,
    errorOfFetchAboutKitchen,
  ] = useThunk(fetchAboutKitchen);
  const banner = {
    url: "https://cdn.shopify.com/s/files/1/2675/2320/files/IMG_5256_3000x.jpg?v=1652873085",
  };

  const { data: aboutBaker } = useSelector((state) => state.aboutBaker);
  const { data: aboutKitchen } = useSelector((state) => state.aboutKitchen);

  useEffect(() => {
    doFetchAboutBaker();
    doFetchAboutKitchen();
  }, [doFetchAboutKitchen, doFetchAboutBaker]);

  let contentAboutBaker;
  if (isLoadingOfFetchAboutBaker) {
    contentAboutBaker = "loading";
  } else if (errorOfFetchAboutBaker) {
    contentAboutBaker = "error";
  } else if (aboutBaker) {
    contentAboutBaker = aboutBaker.map((item) => {
      return (
        <>
          <div className={cx("row")}>
            <div className={cx("col", "l-12", "m-12", "c-12")}>
              <div className={cx("content-heading", "our-story-heading")}>
                <p>{item.title}</p>
              </div>
            </div>
          </div>
          <div className={cx("row")}>
            <div className={cx("col", "l-6", "m-6", "c-12")}>
              <div className={cx("our-story-content")}>
                {item.description_1}
              </div>
            </div>
            <div className={cx("col", "l-6", "m-6", "c-12")}>
              <div className={cx("our-story-content")}>
                {item.description_2}
              </div>
            </div>
          </div>
        </>
      );
    });
  }
  let contentAboutKitchen;
  if (isLoadingOfFetchAboutKitchen) {
    contentAboutKitchen = "loading";
  } else if (errorOfFetchAboutKitchen) {
    contentAboutKitchen = "error";
  } else if (aboutKitchen) {
    contentAboutKitchen = aboutKitchen.map((item) => {
      return (
        <div className={cx("row", "no-gutters")}>
          <div className={cx("col", "l-6", "m-6", "c-12")}>
            <div className={cx("our-kitchen-container")}>
              <div className={cx("content-heading", "our-kitchen-heading")}>
                <p>{item.name}</p>
              </div>
              <div className={cx("our-kitchen-content")}>
                {item.description}
              </div>
            </div>
          </div>
          <div className={cx("col", "l-6", "m-6", "c-12")}>
            <div className={cx("our-kitchen-container")}>
              <div
                className={cx("our-kitchen--image")}
                style={{
                  backgroundImage: `url(data:image/png;base64,${item.image})`,
                }}
              ></div>
            </div>
          </div>
        </div>
      );
    });
  }

  return (
    <div className={cx("wrapper")}>
      <Banner image={banner} />

      <div className={cx("our-story")}>
        <div className={cx("grid", "wide")}>{contentAboutBaker}</div>
      </div>
      <div className={cx("our-kitchen")}>
        <div className={cx("grid")}>{contentAboutKitchen}</div>
      </div>

      <div className={cx("recruitment")}>
        <div className={cx("grid", "wide")}>
          <div className={cx("row")}>
            <div className={cx("col", "l-4", "m-4", "c-12")}></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
