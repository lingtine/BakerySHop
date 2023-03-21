import { useParams } from "react-router-dom";
import styles from "./ProductDetailPage.module.scss";
import classNames from "classnames/bind";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getProduct } from "~/store";
import { InputQuantity, Button } from "~/components";
import { usePriceFormatter, useThunk } from "~/hooks";

const cx = classNames.bind(styles);

function ProductDetailPage() {
  const { productId } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [doGetProduct, isLoading, error] = useThunk(getProduct);
  const { data } = useSelector((state) => state.product);
  const price = usePriceFormatter(data.productsDetail.unit_price, "VND");
  const total = usePriceFormatter(
    data.productsDetail.unit_price * quantity,
    "VND"
  );
  useEffect(() => {
    doGetProduct(productId);
  }, [productId, doGetProduct]);
  const handleChangeQuantity = (value) => {
    setQuantity(value);
  };

  let content;
  if (isLoading) {
    content = <h1>loading</h1>;
  } else if (error) {
    content = <h1>lỗi rồi</h1>;
  } else if (data) {
    content = (
      <div className={cx("product-action")}>
        <div>
          <div>{data.productsDetail.name}</div>
          <div>{price}</div>
        </div>
        <div>
          <InputQuantity quantity={quantity} onChange={handleChangeQuantity} />
          <Button>ADD TO CART {total}</Button>
        </div>
      </div>
    );
  }

  return (
    <div className={cx("wrapper")}>
      <div>
        <div className={cx("grid", "wide")}>
          <div className={cx("row")}>
            <div className={cx("col", "l-8", "m-6", "c-12")}>
              <div className={cx("product-image")}>image</div>
            </div>
            <div className={cx("col", "l-4", "m-6", "c-12")}>{content}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailPage;
