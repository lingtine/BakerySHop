import { useParams } from "react-router-dom";
import styles from "./ProductDetailPage.module.scss";
import classNames from "classnames/bind";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getProduct } from "~/store";
import { InputQuantity, Button, Accordion } from "~/components";
import { usePriceFormatter, useThunk } from "~/hooks";

const cx = classNames.bind(styles);

function ProductDetailPage() {
  const { productId } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [doGetProduct, isLoading, error] = useThunk(getProduct);
  const { data } = useSelector((state) => state.product);

  const price = usePriceFormatter(
    data ? data.productsDetail.unit_price : 0,
    "VND"
  );
  const total = usePriceFormatter(
    data ? data.productsDetail.unit_price * quantity : 0,
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
    console.log(data);
    const contentAccordion = [
      {
        id: Math.random(),
        label: "description",
        content: data.productsDetail.description,
      },
    ];
    content = (
      <div className={cx("product-action")}>
        <div>
          <div>{data.productsDetail.name}</div>
          <div>{price}</div>
        </div>
        <div>
          <InputQuantity quantity={quantity} onChange={handleChangeQuantity} />
          <Button className={cx("btn-purchase")}>ADD TO CART {total}</Button>
        </div>
        <Accordion items={contentAccordion} />
        <div>VAT will be added at check out.</div>
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
