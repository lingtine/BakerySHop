import styles from "./HomePage.module.scss";
import classNames from "classnames/bind";
import { GiFruitTree } from "react-icons/gi";
import { useSelector } from "react-redux";
import { useThunk } from "~/hooks";
import {
  fetchNewProducts,
  fetchSellingProducts,
  fetchNoNasties,
  fetchBranch,
  fetchForte,
} from "~/store";
import { Banner, Button, Slider } from "~/components";
import { useEffect } from "react";

const cx = classNames.bind(styles);

function HomePage() {
  const [doFetchNewProducts, isLoadingOfNewProducts, errorOfFetchNewProducts] =
    useThunk(fetchNewProducts);

  const [
    doFetchSellingProducts,
    isLoadingOfSellingProducts,
    errorOfFetchSellingProducts,
  ] = useThunk(fetchSellingProducts);

  const [doFetchNoNasties, isLoadingNoNasties, errorOfFetchNoNasties] =
    useThunk(fetchNoNasties);

  const [doFetchBranch, isLoadingOfBranch, errorOfFetchBranch] =
    useThunk(fetchBranch);
  const [doFetchForte, isLoadingOfForte, errorOfFetchForte] =
    useThunk(fetchForte);
  const { data: newProducts } = useSelector((state) => state.newProducts);
  const { data: sellingProducts } = useSelector(
    (state) => state.sellingProducts
  );
  const { data: noNasties } = useSelector((state) => state.noNasties);
  const { data: branch } = useSelector((state) => state.branch);
  const { data: forte } = useSelector((state) => state.forte);

  useEffect(() => {
    doFetchNewProducts();
    doFetchSellingProducts();
    doFetchNoNasties();
    doFetchBranch();
    doFetchForte();
  }, [
    doFetchNewProducts,
    doFetchSellingProducts,
    doFetchNoNasties,
    doFetchBranch,
    doFetchForte,
  ]);

  const banner = {
    url: "https://cdn.shopify.com/s/files/1/2675/2320/files/Bakes_Grab_ad_1_1950x.jpg?v=1667143562",
  };

  const BannerContent = (
    <div className={cx("banner-content")}>
      <h3>Collection of French Pastries</h3>
      <div className={cx("banner-content-btn")}>
        <Button to="/collections" className={cx("banner-btn")}>
          Buy the Cake
        </Button>
      </div>
    </div>
  );

  let contentNewProducts;
  if (isLoadingOfNewProducts) {
    contentNewProducts = "loading";
  } else if (errorOfFetchNewProducts) {
    contentNewProducts = "Lỗi tại thằng Thọ";
  } else if (newProducts) {
    contentNewProducts = <Slider data={newProducts} />;
  }

  let contentSellingProducts;
  if (isLoadingOfSellingProducts) {
    contentSellingProducts = "loading";
  } else if (errorOfFetchSellingProducts) {
    contentSellingProducts = "lỗi rồi";
  } else if (sellingProducts) {
    contentSellingProducts = sellingProducts.map((item, index) => {
      return (
        <div
          className={cx("row", {
            reverse: index % 2 !== 0,
          })}
        >
          <div className={cx("col", "l-6", "m-6", "c-6")}>
            <img
              className={cx("product-image")}
              src={`data:image/png;base64,${item.product.image}`}
              alt=""
            />
          </div>
          <div className={cx("col", "l-6", "m-6", "c-6")}>
            <div
              className={cx("selling-products-container", {
                "container-reverse": index % 2 !== 0,
              })}
            >
              <div
                className={cx("selling-products-heading", "content-heading")}
              >
                <p>{item.product.name}</p>
              </div>
              <div className={cx("selling-products-content")}>
                <p>{item.product.description}</p>
              </div>

              <div className={cx("selling-products-action")}>
                <Button
                  to={`/collections/${item.product.id_type}/${item.product.id}`}
                  className={cx("btn-browse")}
                >
                  browse
                </Button>
              </div>
            </div>
          </div>
        </div>
      );
    });
  }

  let contentNoNasties;
  if (isLoadingNoNasties) {
    contentNoNasties = "đang tải";
  } else if (errorOfFetchNoNasties) {
    contentNoNasties = "lổi rồi";
  } else if (noNasties) {
    contentNoNasties = noNasties.map((item) => {
      return (
        <div key={item.id} className={cx("col", "l-4", "m-4", "c-4")}>
          <div className={cx("no-nasties-container")}>
            <div className={cx("no-nasties-image")}>
              <img src={`data:image/png;base64,${item.image}`} />
            </div>
            <div className={cx("no-nasties-content")}>
              <div className={cx("no-nasties-heading")}>
                <p>{item.name}</p>
              </div>
              <div className={cx("no-nasties-description")}>
                <p>{item.description}</p>
              </div>
            </div>
          </div>
        </div>
      );
    });
  }

  let contentBranch;
  if (isLoadingOfBranch) {
    contentNoNasties = "đang tải";
  } else if (errorOfFetchBranch) {
    contentNoNasties = "lổi rồi";
  } else if (branch) {
    contentBranch = branch.map((item) => {
      return (
        <div className={cx("row", "no-gutters")}>
          <div className={cx("col", "l-6", "m-6", "c-6")}>
            <div className={cx("address-container")}>
              <div className={cx("address-heading", "content-heading")}>
                <p>{item.name}</p>
              </div>
              <div className={cx("address-content")}>
                <p>{item.address}</p>
                <p>{item.time_open}</p>
              </div>
            </div>
          </div>
          <div className={cx("col", "l-6", "m-6", "c-6")}>
            <div
              style={{
                backgroundImage: `url(data:image/png;base64,${item.image})`,
              }}
              className={cx("address-image")}
            ></div>
          </div>
        </div>
      );
    });
  }

  let contentForte;
  if (isLoadingOfForte) {
    contentForte = "đang tải";
  } else if (errorOfFetchForte) {
    contentForte = "lổi rồi";
  } else if (forte) {
    contentForte = forte.map((item) => {
      return (
        <div key={item.id} className={cx("col", "l-4", "m-4", "c-4")}>
          <div className={cx("about-us")}>
            <div className={cx("about-us-icon")}>
              <img src={`data:image/png;base64,${item.image}`} />
            </div>
            <div className={cx("about-us-heading")}>{item.name}</div>
            <div className={cx("about-us-content")}>{item.description}</div>
          </div>
        </div>
      );
    });
  }
  return (
    <div>
      {/* {banner} */}
      <div className={cx("grid")}>
        <div className={cx("row", "no-gutters")}>
          <div className={cx("col", "l-12", "c-12", "m-12")}>
            <Banner image={banner} content={BannerContent} />
          </div>
        </div>
      </div>
      {/* {new product} */}
      <div className={cx("new-product")}>
        <div className={cx("grid", "wide")}>
          <div className={cx("row")}>
            <div className={cx("col", "l-12", "c-12", "m-12")}>
              <div className={cx("address-heading", "content-heading")}>
                <p>NEW & FAVORITES</p>
              </div>
            </div>
          </div>
          <div className={cx("row")}>
            <div className={cx("col", "l-12", "c-12", "m-12")}>
              {contentNewProducts}
            </div>
          </div>
        </div>
      </div>

      {/* {selling product} */}

      <div className={cx("grid", "wide")}>
        <div className={cx("row")}>
          <div className={cx("col", "l-12", "c-12", "m-12")}>
            <div className={cx("selling-products")}>
              {contentSellingProducts}
            </div>
          </div>
        </div>
      </div>

      {/* NO NASTIES} */}

      <div className={cx("no-nasties")}>
        <div className={cx("grid", "wide")}>
          <div className={cx("row")}>
            <div className={cx("col", "l-12", "c-12", "m-12")}>
              <div className={cx("address-heading", "content-heading")}>
                <p>NO NASTIES</p>
              </div>
            </div>
          </div>
          <div className={cx("row")}>{contentNoNasties}</div>
        </div>
      </div>

      {/* {address} */}
      <div className={cx("grid")}>{contentBranch}</div>
      <div className={cx("grid", "wide")}>
        <div className={cx("row")}>{contentForte}</div>
      </div>
    </div>
  );
}

export default HomePage;
