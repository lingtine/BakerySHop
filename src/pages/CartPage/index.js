import classNames from "classnames/bind";
import { useSelector } from "react-redux";
import { Button } from "~/components";
import styles from "./Cart.module.scss";
import ProductCartItem from "./ProductCartItem";

const cx = classNames.bind(styles);

function CartPage() {
  const { data } = useSelector((state) => state.cart);

  let renderCart;
  if (data.items) {
    renderCart = data.items.map((item) => {
      return <ProductCartItem key={item.productId} product={item} />;
    });
  }
  return (
    <div className={cx("wrapper")}>
      <div className={cx("grid", "wide")}>
        <div className={cx("row")}>
          <div className={cx("col", "l-12", "m-12", "c-12")}>
            <div className={cx("heading")}>Your Cart</div>
          </div>
        </div>
        <div className={cx("row")}>
          <div className={cx("col", "l-5", "m-12", "c-12")}>
            <Button> CONTINUE BROWSING</Button>
          </div>
          <div className={cx("col", "l-7", "m-0", "c-0")}>
            <div className={cx("row")}>
              <div className={cx("col", "l-4")}>
                <div className={cx("")}>PRICE</div>
              </div>
              <div className={cx("col", "l-4")}>
                <div className={cx("heading")}>QUANTITY</div>
              </div>
              <div className={cx("col", "l-4")}>
                <div className={cx("heading")}>TOTAL</div>
              </div>
            </div>
          </div>
        </div>
        <div className={cx("row")}>{renderCart}</div>
        <div className={cx("row")}>
          <div className={cx("col", "l-6", "m-12", "c-12")}>
            <textarea></textarea>
          </div>
          <div className={cx("col", "l-6", "m-12", "c-12")}>{data.total}</div>
        </div>
      </div>
    </div>
  );
}

export default CartPage;
