import classNames from "classnames/bind";
import { useSelector } from "react-redux";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";
import { Button } from "~/components";
import styles from "./Cart.module.scss";
import ProductCartItem from "./ProductCartItem";
import { usePriceFormatter } from "~/hooks";

const cx = classNames.bind(styles);

function CartPage() {
  const { data } = useSelector((state) => state.cart);
  const total = usePriceFormatter(data ? data.total : 0, "VND");
  let renderCart;
  if (data.items) {
    renderCart = data.items.map((item) => {
      return (
        <div className={cx("col", "l-12", "m-12", "c-12")}>
          <ProductCartItem key={item.productId} product={item} />
        </div>
      );
    });
  } else {
    console.log(1);
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
            <div className={cx("action-back")}>
              <Button
                className={cx("btn-back")}
                leftIcon={<HiOutlineArrowNarrowLeft />}
              >
                CONTINUE BROWSING
              </Button>
            </div>
          </div>
          <div className={cx("col", "l-7", "m-0", "c-0")}>
            <div className={cx("cart-header")}>
              <div className={cx("row")}>
                <div className={cx("col", "l-4")}>
                  <div className={cx("cart-title")}>PRICE</div>
                </div>
                <div className={cx("col", "l-4")}>
                  <div className={cx("cart-title")}>QUANTITY</div>
                </div>
                <div className={cx("col", "l-4")}>
                  <div className={cx("cart-title", "cart-price")}>TOTAL</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={cx("row")}>{renderCart}</div>
        <div className={cx("cart-notes")}>
          <div className={cx("row")}>
            <div className={cx("col", "l-6", "m-12", "c-12")}>
              <div className={cx("cart-notes-wrapper")}>
                <h5>Note for Bakes (special instructions, writings, etc.)</h5>
                <textarea className={cx("product-note")}></textarea>
              </div>
            </div>
            <div className={cx("col", "l-6", "m-12", "c-12")}>
              <div className={cx("cart-notes-wrapper", "cart-content-price")}>
                <div className={cx("notes-price")}>
                  SUBTOTAL
                  <span>{total}</span>
                </div>
                <div className={cx("notes-describer")}>
                  Shipping & taxes calculated at checkout
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={cx("cart-actions")}>
          <div className={cx("row")}>
            <div className={cx("col", "l-12", "m-12", "c-12")}>
              <div className={cx("cart-action-check-out")}>
                <Button className={cx("btn-check-out")}>Check out</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartPage;
