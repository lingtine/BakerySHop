import classNames from "classnames/bind";
import { useState } from "react";
import styles from "./Cart.module.scss";
import { InputQuantity } from "~/components";
import { useDispatch } from "react-redux";
import { updateCart } from "~/store";
import { usePriceFormatter } from "~/hooks";

const cx = classNames.bind(styles);

function ProductCartItem({ product }) {
  const [quantity, setQuantity] = useState(product.quantity);
  const dispatch = useDispatch();
  const total = usePriceFormatter(
    quantity * product.price || 0 * product.price,
    "VND"
  );
  const price = usePriceFormatter(product.price, "VND");
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
    <div className={cx("product-container")}>
      <div className={cx("row")}>
        <div className={cx("col", "l-5", "m-12", "c-12")}>
          <div className={cx("product-item")}>{product.productName}</div>
        </div>
        <div className={cx("col", "l-7", "m-0", "c-0")}>
          <div className={cx("row")}>
            <div className={cx("col", "l-4")}>
              <div className={cx("product-item")}>{price}</div>
            </div>
            <div className={cx("col", "l-4")}>
              <div className={cx("product-item")}>
                <InputQuantity
                  quantity={quantity}
                  onChange={handleChangeQuantity}
                />
              </div>
            </div>
            <div className={cx("col", "l-4")}>
              <div className={cx("product-item", "product-price")}>{total}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCartItem;
