import { useParams } from "react-router-dom";
import styles from "./ProductDetailPage.module.scss";
import classNames from "classnames/bind";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { getProduct, addToCart } from "~/store";
import { InputQuantity, Button, Accordion } from "~/components";
import { usePriceFormatter, useThunk } from "~/hooks";
const cx = classNames.bind(styles);

function ProductDetailPage() {
  const { productId } = useParams();
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  const [doGetProduct, isLoading, error] = useThunk(getProduct);
  const { data: product } = useSelector((state) => state.product);
  const { isAuthenticated, user } = useSelector((state) => state.auth);
  const { data } = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  const price = usePriceFormatter(product ? product.unit_price : 0, "VND");
  const total = usePriceFormatter(
    product ? product.unit_price * quantity : 0,
    "VND"
  );
  console.log(product);

  useEffect(() => {
    doGetProduct(productId);
  }, [productId, doGetProduct]);
  useEffect(() => {}, [data.items, data.totalPrice]);
  const handleChangeQuantity = (value) => {
    setQuantity(value);
  };

  const handleBuying = () => {
    if (!isAuthenticated) {
      navigate("/login");
    } else {
      dispatch(
        addToCart({
          userId: user.id,
          product: {
            productId: product.id,
            productType: product.id_type,
            productName: product.name,
            productImage: product.image,
            quantity,
            price: product.promotion_price || product.unit_price,
          },
        })
      );
    }
  };

  let content;
  if (isLoading) {
    content = <h1>loading</h1>;
  } else if (error) {
    content = <h1>lỗi rồi</h1>;
  } else if (product) {
    const contentAccordion = [
      {
        id: Math.random(),
        label: "description",
        content: product.description,
      },
    ];
    content = (
      <div className={cx("product-container")}>
        <div className={cx("product-content")}>
          <div className={cx("product-name")}>{product.name}</div>
          <div className={cx("product-price")}>{price}</div>
        </div>
        <div className={cx("product-actions")}>
          <InputQuantity quantity={quantity} onChange={handleChangeQuantity} />
          <Button onClick={handleBuying} className={cx("btn-purchase")}>
            ADD TO CART {total}
          </Button>
        </div>
        <Accordion items={contentAccordion} />
        <div className={cx("product-note")}>
          VAT will be added at check out.
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
              <div className={cx("product-wrapper-image")}>
                <img
                  className={cx("product-image")}
                  src={`data:image/png;base64,${product.image}`}
                  alt="thọ ngu"
                />
              </div>
            </div>
            <div className={cx("col", "l-4", "m-6", "c-12")}>{content}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailPage;
