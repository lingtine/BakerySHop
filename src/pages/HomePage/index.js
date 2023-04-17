import styles from "./HomePage.module.scss";
import classNames from "classnames/bind";
import { GiFruitTree } from "react-icons/gi";
import { useSelector } from "react-redux";
import { useThunk } from "~/hooks";
import { fetchNewProducts, fetchSellingProducts } from "~/store";
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

  const { data: newProducts } = useSelector((state) => state.newProducts);
  const { data: sellingProducts } = useSelector(
    (state) => state.sellingProducts
  );

  useEffect(() => {
    doFetchNewProducts();
    doFetchSellingProducts();
  }, [doFetchNewProducts, doFetchSellingProducts]);

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
      console.log(item);
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

      <div className={cx("grid")}>
        <div className={cx("row", "no-gutters")}>
          <div className={cx("col", "l-6", "m-6", "c-6")}>
            <div className={cx("address-container")}>
              <div className={cx("address-heading", "content-heading")}>
                <p>New In</p>
              </div>
              <div className={cx("address-content")}>
                <p>
                  47 Tran Cao Van, District 3,
                  <br></br>
                  Ho Chi Minh City
                  <br></br>
                  Vietnam
                </p>
                <p className={cx("my-4")}>
                  Monday - Sunday <br></br> 8am - 10pm
                </p>
              </div>

              <Button primary className={cx("address-action")}>
                Directions
              </Button>
            </div>
          </div>
          <div className={cx("col", "l-6", "m-6", "c-6")}>
            <div className={cx("address-image")}></div>
          </div>
        </div>
      </div>
      <div className={cx("grid", "wide")}>
        <div className={cx("row")}>
          <div className={cx("col", "l-4", "m-4", "c-4")}>
            <div className={cx("about-us")}>
              <div className={cx("about-us-icon")}>
                <GiFruitTree />
              </div>
              <div className={cx("about-us-heading")}>
                ENVIRONMENTAL FRIENDLY
              </div>
              <div className={cx("about-us-content")}>
                Our bags are made from cassava starch, which will biodegrade
                naturally. Our handwritten notes comes from recycled paper.
              </div>
            </div>
          </div>
          <div className={cx("col", "l-4", "m-4", "c-4")}>
            <div className={cx("about-us")}>
              <div className={cx("about-us-icon")}>
                <GiFruitTree />
              </div>
              <div className={cx("about-us-heading")}>
                ENVIRONMENTAL FRIENDLY
              </div>
              <div className={cx("about-us-content")}>
                Our bags are made from cassava starch, which will biodegrade
                naturally. Our handwritten notes comes from recycled paper.
              </div>
            </div>
          </div>
          <div className={cx("col", "l-4", "m-4", "c-4")}>
            <div className={cx("about-us")}>
              <div className={cx("about-us-icon")}>
                <GiFruitTree />
              </div>
              <div className={cx("about-us-heading")}>
                ENVIRONMENTAL FRIENDLY
              </div>
              <div className={cx("about-us-content")}>
                Our bags are made from cassava starch, which will biodegrade
                naturally. Our handwritten notes comes from recycled paper.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
