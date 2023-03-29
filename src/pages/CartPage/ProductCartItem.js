import classNames from "classnames/bind";
import { useEffect, useState } from "react";
import styles from "./Cart.module.scss";
import { InputQuantity } from "~/components";
import { useDispatch } from "react-redux";
import { updateCart } from "~/store";

const cx = classNames.bind(styles);

function ProductCartItem({ product }) {
  const [quantity, setQuantity] = useState(product.quantity);
  const dispatch = useDispatch();
  const handleChangeQuantity = (value) => {
    setQuantity(value);
    dispatch(
      updateCart({
        product: {
          productId: product.productId,
          productType: product.productType,
          quantity: value,
        },
      })
    );
  };

  return (
    <>
      <div className={cx("col", "l-5", "m-12", "c-12")}>
        <div>{product.productName}</div>
      </div>
      <div className={cx("col", "l-7", "m-0", "c-0")}>
        <div className={cx("row")}>
          <div className={cx("col", "l-4")}>
            <div className={cx("")}>{product.price}</div>
          </div>
          <div className={cx("col", "l-4")}>
            <div className={cx("heading")}>
              <InputQuantity
                quantity={quantity}
                onChange={handleChangeQuantity}
              />
            </div>
          </div>
          <div className={cx("col", "l-4")}>
            <div className={cx("heading")}>
              {quantity * product.price || 0 * product.price}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductCartItem;
